using IMOSApi.Dtos.Generic;
using IMOSApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Controllers.SupplierManagement
{
    [Route("api/[controller]")]
    [ApiController]
    public class SupplierTypeController : ControllerBase
    {
        private readonly IMOSContext _context;
        public SupplierTypeController(IMOSContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public ActionResult<GetGenericIdAndNameDto> GetRecord(int id)//method to get  Supplier Type by Id 
        {
            var recordInDb = _context.Suppliertypes.Where(item => item.SuppliertypeId == id).Select(item => new GetGenericIdAndNameDto()
            {
                Name = item.Name,
                Id = item.SuppliertypeId
            }).First();

            if (recordInDb == null)
            {
                return NotFound();
            }

            return recordInDb;
        }

        [HttpGet("GetAll")]
        public ActionResult<IEnumerable<GetGenericIdAndNameDto>> GetAll()
        {
            var recordsInDb = _context.Suppliertypes.Select(item => new GetGenericIdAndNameDto
            {
                Name = item.Name,
                Id = item.SuppliertypeId
            }).OrderBy(item => item.Name).ToList();

            return recordsInDb.OrderBy(item => item.Id).ToList();
        }

        [HttpPut("{id}")]
        public async Task< IActionResult> Update(AddOrUpdateGenericNameOnlyDto model, int id)
        {
            if (ModelState.IsValid)
            {
                var recordInDb = _context.Suppliertypes.FirstOrDefault(item => item.SuppliertypeId == id);

                if (recordInDb == null)
                {
                    return NotFound();
                }

                recordInDb.Name = model.Name;
                int i = 3;
                await _context.SaveChangesAsync(i);

                return Ok();
            }

            var message = "Something went wrong on your side.";
            return BadRequest(new { message });
        }

        [HttpPost("AddType")]
        public async Task< IActionResult> AddSupplierType(AddOrUpdateGenericNameOnlyDto model)
        {

            var message = "";
            if (ModelState.IsValid)
            {
                var recordInDb = _context.Suppliertypes.FirstOrDefault(item => item.Name.ToLower() == model.Name.ToLower());

                if (recordInDb != null)
                {
                    message = "Record already exist";
                    return BadRequest(new { message });
                }

                var newRecord = new Suppliertype()
                {
                    Name = model.Name
                };
                _context.Suppliertypes.Add(newRecord);
                int i = 3;
                await _context.SaveChangesAsync(i);
                return Ok();
            }

            message = "Something went wrong on your side.";
            return BadRequest(new { message });

        }

        [HttpDelete("{id}")] 
        public async Task<ActionResult<Suppliertype>>DeleteRecord(int id)
        {
            var recordInDb = await _context.Suppliertypes.FindAsync(id);
            if (recordInDb == null)
            {
                return NotFound();
            }

            _context.Suppliertypes.Remove(recordInDb);
            int i = 3;
            await _context.SaveChangesAsync(i);
            return Ok();
        }
    }
}

using IMOSApi.Dtos.Generic;
using IMOSApi.Dtos.Material;
using IMOSApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Controllers.MaterialManagent
{
    [Route("api/[controller]")]
    [ApiController]
    public class MaterialTypeController : ControllerBase
    {
        private readonly IMOSContext _context;

        public MaterialTypeController(IMOSContext context)
        {
            _context = context;
        }

        [HttpPost("AddMaterialType")]
        public async Task< IActionResult> AddSupplierMaterialType(AddOrUpdateGenericDto model)//will create/add  material type specific to supplier Id in table
        {
            var message = "";
            if (ModelState.IsValid)//checks if model is valid then  creates new MaterialType 
            {
                var newMaterialType = new Materialtype
                {
                    Name=model.Name,
                    Description= model.Description
                };
                _context.Materialtypes.Add(newMaterialType);

                int i = 3;
                await _context.SaveChangesAsync(i);
                return Ok();
            }
            message = "Something went wrong on your side.";
            return BadRequest(new { message });
        }

        [HttpGet("GetMaterialType/{id}")]
        public ActionResult<GetMaterialTypeDto> GetRecord(int id)
        {
            var recordInDb = _context.Materialtypes
                .Where(item => item.MaterialtypeId == id)
                .Select(item => new GetMaterialTypeDto()
                {
                    MaterialtypeId = item.MaterialtypeId,
                    Name = item.Name,
                    Description = item.Description,
                }).First();
            if (recordInDb == null)
            {
                return NotFound();
            }
            return recordInDb;
        }

        [HttpGet("GetAll")]
        public ActionResult<IEnumerable<GetMaterialTypeDto>> GetAllMaterialTypes()
        {
            var recordsInDb = _context.Materialtypes
                .Select(item => new GetMaterialTypeDto
                {
                    MaterialtypeId = item.MaterialtypeId,
                    Name = item.Name,
                    Description = item.Description,
                }).OrderBy(item => item.Name).ToList();
            return recordsInDb;
        }

        [HttpPut("UpdateType/{id}")]
        public async Task< IActionResult> Update(AddOrUpdateGenericDto model, int id)
        {
            if (ModelState.IsValid)
            {
                var recordInDb = _context.Materialtypes.FirstOrDefault(item => item.MaterialtypeId == id);

                if (recordInDb == null)
                {
                    return NotFound();
                }

                recordInDb.Name = model.Name;
                recordInDb.Description = model.Description;
                int i = 3;
                await _context.SaveChangesAsync(i);

                return Ok();
            }
            var message = "Something went wrong on your side.";
            return BadRequest(new { message });
        }

        [HttpDelete("DeleteType/{id}")]
        public async Task<ActionResult<Materialtype>> Delete(int id)
        {
            var recordInDb = await _context.Materialtypes.FindAsync(id);
            if (recordInDb == null)
            {
                return NotFound();
            }

            var materialType = _context.Materialtypes.Where(item => item.MaterialtypeId == recordInDb.MaterialtypeId).ToList();
            _context.Materialtypes.Remove(recordInDb);
            int i = 3;
            await _context.SaveChangesAsync(i);
            return Ok();
        }
    }
}

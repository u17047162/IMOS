using IMOSApi.Dtos.Generic;
using IMOSApi.Dtos.SafetyChecklist;
using IMOSApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Controllers.SafetyChecklistManagement
{
    [Route("api/[controller]")]
    [ApiController]
    public class SafetyItemController : ControllerBase
    {
        private readonly IMOSContext _context;
        public SafetyItemController(IMOSContext context)
        {
            _context = context;
        }

        [HttpGet("GetItemById/{id}")] //Get All Items by specific Id 
        public ActionResult<GetSafetyItemDto> GetRecord(int id)
        {
            var recordInDb = _context.Safetyfileitems
                .Where(item => item.SafetyitemcategoryId == id)
                .Include(item => item.Safetyitemcategory)
                .Select(item => new GetSafetyItemDto()
                {
                    SafetyfileitemId = item.SafetyfileitemId,
                    Name = item.Name,
                    Safetyitemcategory = item.Safetyitemcategory.CategoryName,
                    SafetyitemcategoryId = item.SafetyitemcategoryId //navigation to category
                }).First();
            if (recordInDb == null)
            {
                return NotFound();
            }
            return recordInDb;
        }


        [HttpGet("GetItemByCategory/{id}")] //IteM By Category Id
        public List<Safetyfileitem> GetRecords(int id)
        {
            var recordInDb = _context.Safetyfileitems
                .Where(item => item.SafetyitemcategoryId == id).ToList();
            return recordInDb;
        }

        [HttpGet("GetAll")] // Get All Safety Items 
        public ActionResult<IEnumerable<GetSafetyItemDto>> GetAll()
        {
            var recordsInDb = _context.Safetyfileitems
                .Include(item => item.Safetyitemcategory)
                 .Include(item => item.Safetyfilechecklists)
                .Select(item => new GetSafetyItemDto()
                {

                    SafetyfileitemId = item.SafetyfileitemId,
                    Name = item.Name,
                    Safetyitemcategory = item.Safetyitemcategory.CategoryName,
                    SafetyitemcategoryId = item.SafetyitemcategoryId,

                }).OrderBy(item => item.Name).ToList();
            return recordsInDb;
        }

        [HttpPost("AddSafetyItem/{id}")] // Add New Items 
        public async Task<ActionResult<Safetyfileitem>> AddItemByCategoryId(AddOrUpdateSafetyItemDto model,int id)
        {
            var message = "";
            var recordInDb = await _context.Safetyitemcategories.FindAsync(id);
            if (recordInDb == null)
            {
                message = "Category Not Found";
                return BadRequest(new { message });
            }
            else if (ModelState.IsValid)
            {
                var newRecord = new Safetyfileitem
                {
                    SafetyitemcategoryId=id,
                    Name = model.Name,
               
                };

                _context.Safetyfileitems.Add(newRecord);
                _context.SaveChanges();
                return Ok();
            }

            message = "Something went wrong on your side.";
            return BadRequest(new { message });
        }
         
        [HttpPut("UpdateItem/{id}")] // update Items By Id
        public IActionResult Update(AddOrUpdateSafetyItemDto model, int id)
        {
            if (ModelState.IsValid)
            {
                var recordInDb = _context.Safetyfileitems.FirstOrDefault(item => item.SafetyfileitemId == id);

                if (recordInDb == null)
                {
                    return NotFound();
                }

                recordInDb.Name = model.Name;
                recordInDb.SafetyitemcategoryId = model.SafetyitemcategoryId;
                _context.SaveChanges();
                return Ok();
            }
            var message = "Something went wrong on your side.";
            return BadRequest(new { message });
        }

        [HttpDelete("RemoveItem/{id}")] // Delete Item Id
        public async Task<ActionResult<Safetyfileitem>> Delete(int id)
        {
            var recordInDb = await _context.Safetyfileitems.FindAsync(id);
            if (recordInDb == null)
            {
                return NotFound();
            }
            _context.Safetyfileitems.Remove(recordInDb);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}

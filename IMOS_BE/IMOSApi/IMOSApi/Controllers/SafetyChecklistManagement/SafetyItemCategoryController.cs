using IMOSApi.Dtos.Generic;
using IMOSApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Controllers.SafetyChecklistManagement
{
    [Route("api/[controller]")]
    [ApiController]
    public class SafetyItemCategoryController : ControllerBase
    {
        private readonly IMOSContext _context;
        public SafetyItemCategoryController(IMOSContext context)
        {
            _context = context;
        }

        [HttpGet("CategoryById/{id}")] //Get category By Id
        public ActionResult<GetGenericIdAndNameDto> GetRecord(int id) 
        {
            var recordInDb = _context.Safetyitemcategories.Where(item => item.SafetyitemcategoryId == id).Select(item => new GetGenericIdAndNameDto()
            {
                Name = item.CategoryName,
                Id = item.SafetyitemcategoryId
            }).First();

            if (recordInDb == null)
            {
                return NotFound();
            }

            return recordInDb;
        }

        [HttpGet("GetAll")] // Get All Categories 
        public ActionResult<IEnumerable<GetGenericIdAndNameDto>> GetAll()
        {
            var recordsInDb = _context.Safetyitemcategories.Select(item => new GetGenericIdAndNameDto
            {
                Name = item.CategoryName,
                Id = item.SafetyitemcategoryId
            }).OrderBy(item => item.Name).ToList();
            return recordsInDb;
        }

        [HttpPut("UpdateCategory/{id}")] // update Category Description
        public IActionResult Update(AddOrUpdateGenericNameOnlyDto model, int id)
        {
            if (ModelState.IsValid)
            {
                var recordInDb = _context.Safetyitemcategories.FirstOrDefault(item => item.SafetyitemcategoryId == id);

                if (recordInDb == null)
                {
                    return NotFound();
                }

                recordInDb.CategoryName = model.Name;
                _context.SaveChanges();
                return Ok();
            }
            var message = "Something went wrong on your side.";
            return BadRequest(new { message });

        }

        [HttpPost("AddCategory")] //Add New Category Details
        public IActionResult AddItemCategory(AddOrUpdateGenericNameOnlyDto model)
        {
            var message = "";
            if (ModelState.IsValid)
            {
                var recordInDb = _context.Safetyitemcategories.FirstOrDefault(item => item.CategoryName.ToLower() == model.Name.ToLower());

                if (recordInDb != null)
                {
                    message = "Record already exist";
                    return BadRequest(new { message });
                }

                var newRecord = new Safetyitemcategory()
                {
                    CategoryName = model.Name
                };
                _context.Safetyitemcategories.Add(newRecord);
                _context.SaveChanges();
                return Ok();
            }
            message = "Something went wrong on your side.";
            return BadRequest(new { message });
        }

        [HttpDelete("DeleteSafetyItemCategory/{id}")] // Delete Category 
        public async Task<ActionResult<Safetyitemcategory>> DeleteRecord(int id)
        {
            var recordInDb = await _context.Safetyitemcategories.FindAsync(id);
            if (recordInDb == null)
            {
                return NotFound();
            }

            _context.Safetyitemcategories.Remove(recordInDb);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}

using IMOSApi.Dtos.ConstructionSite;
using IMOSApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using IMOSApi.Dtos.Client;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.Dynamic;


namespace IMOSApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ConstructionsiteController : ControllerBase

    {
        private readonly IMOSContext _dbContext;

        public ConstructionsiteController(IMOSContext context)
        {
            _dbContext = context;
        }


      /*  [HttpGet("GetConstructionsites")]
        public IEnumerable<Constructionsite> Retrieve()
        {
            using (var context = new IMOSContext())
            {
                return context.Constructionsites.ToList();
            }
        }*/

        [HttpGet("GetConstructionsite/{id}")]
        public ActionResult<GetConstructionSiteDto> GetConstructionSite(int id)
        {
            var recordiInDb = _dbContext.Constructionsites
                .Where(item => item.ConstructionsiteId == id)
                .Select(item => new GetConstructionSiteDto()
                {
                    Address = item.Address,

                }).FirstOrDefault();

            if (recordiInDb == null)
            {
                return NotFound();
            }

            return recordiInDb;
        }




        [HttpPost("AddConstructionsite")]
        public IActionResult AddConstructionsite([FromBody] AddOrUpdateConstructionSite model)
        {

            var message = "";
            if (ModelState.IsValid)
            {
                var recordInDb = _dbContext.Constructionsites
                    .FirstOrDefault(item => item.Address.ToLower() == model.Address.ToLower());

                if (recordInDb != null)
                {
                    message = "Address already exist";
                    return BadRequest(new { message });
                }


                var newConstructionSite = new Constructionsite()
                {
                    Address = model.Address
                };

                _dbContext.Constructionsites.Add(newConstructionSite);
                _dbContext.SaveChanges();
                return Ok();

            }

            message = "Something went wrong on your side.";
            return BadRequest(new { message });


        }

        [HttpPut("UpdateConstructionsite/{Id}")]
        public IActionResult AddConstructionsite([FromBody] AddOrUpdateConstructionSite model, int Id)
        {
            if (ModelState.IsValid)
            {

                var recordInDb = _dbContext.Constructionsites.FirstOrDefault(item => item.ConstructionsiteId == Id);
                if (recordInDb == null)
                {
                    return NotFound();
                }

                recordInDb.Address = model.Address;
                _dbContext.SaveChanges();
                return Ok();

            }

            var message = "Something went wrong on your side.";
            return BadRequest(new { message });


        }



        [HttpDelete("DeleteConstructionsite/{Id}")]
        public async Task<ActionResult<Constructionsite>> DeleteConstructionsite(int Id)
        {
            var recordInDb = await _dbContext.Constructionsites.FindAsync(Id);
            if (recordInDb == null)
            {
                return NotFound();
            }

            _dbContext.Constructionsites.Remove(recordInDb);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }
    }
}

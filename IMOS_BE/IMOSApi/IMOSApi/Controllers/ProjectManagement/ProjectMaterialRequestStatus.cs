

using IMOSApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IMOSApi.Dtos.ProjectMaterials;
using Microsoft.EntityFrameworkCore;
using IMOSApi.Dtos.MaterialRequest;

namespace IMOSApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectMaterialRequestStatus : ControllerBase
    {
       // private readonly IMOSContext db = new IMOSContext();

        private readonly IMOSContext _context;

        public ProjectMaterialRequestStatus(IMOSContext context)
        {
            _context = context;
        }

        [HttpGet("GetAllRequestsStatus")]
        public ActionResult<IEnumerable<GetRequestStatus>> GetAllMaterialRequests()
        {
            var recordInDb = _context.Projectmaterialrequeststatus
                .Select(item => new GetRequestStatus()
                {
                    Id = item.ProjectmaterialrequeststatusId,
                    Name = item.Name,
                }).ToList();

            return recordInDb;
        }


        [HttpPost("AddRequestStatus")]
        public IActionResult AddRequestStatus(AddOrUpdateRequestStatus model)
        {
            var message = "";

            if (ModelState.IsValid)
            {
                var recordInDb = _context.Projectmaterialrequeststatus
                    .FirstOrDefault(item => item.Name.ToLower() == model.Name.ToLower());

                if (recordInDb != null)
                {
                    message = "Record already exist";
                    return BadRequest(new { message });
                }

                var NewRequestStatus = new Projectmaterialrequeststatus()
                {
                    Name = model.Name,
                };

                _context.Projectmaterialrequeststatus.Add(NewRequestStatus);
                _context.SaveChanges();
                return Ok();


            }

            message = "Something went wrong on your side.";
            return BadRequest(new { message });

        }


        [HttpPut("UpdateRequestStatus/{Id}")]
        public IActionResult UpdateRequestStatus(AddOrUpdateRequestStatus model, int Id)
        {
            if (ModelState.IsValid)
            {

                var recordInDb = _context.Projectmaterialrequeststatus
                    .FirstOrDefault(item => item.ProjectmaterialrequeststatusId == Id);

                if (recordInDb == null)
                {
                    return NotFound();
                }

                recordInDb.Name = model.Name;

                _context.SaveChanges();
                return Ok();

            }
            var message = "Something went wrong on your side.";
            return BadRequest(new { message });

        }

        [HttpDelete("DeleteRequestStatus/{Id}")]
        public async Task<ActionResult<Projectmaterialrequeststatus>> DeleteRequestStatus(int Id)
        {
            var recordInDb = await _context.Projectmaterialrequeststatus.FindAsync(Id);

            if (recordInDb == null)
            {
                return NotFound();
            }

            _context.Projectmaterialrequeststatus.Remove(recordInDb);
            await _context.SaveChangesAsync();

            return Ok();

        }

    }
}

using IMOSApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IMOSApi.Dtos.Incident;
namespace IMOSApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class IncidentController : ControllerBase
    {
        private readonly IMOSContext _dbContext;
        public IncidentController(IMOSContext dbContext)
        {
            _dbContext = dbContext;
        }



        [HttpGet("GetAllIncidents")]
        public ActionResult<IEnumerable<GetIncidentsDto>> GetAllIncidents()
        {
            var recordInDb = _dbContext.Incidents
                .Select( item => new GetIncidentsDto()
                {
                    IncidentId = item.IncidentId,
                    ProjectId = item.ProjectId,
                    Description = item.Description,
                    Date = item.Date.ToString("F"),
                }).ToList();

            return recordInDb;
        }



        [HttpGet("GetIncidentBYProject/{id}")]
        public List<Incident> GetIncidentBYProject(int id)
        {
            var recordInDb = _dbContext.Incidents
                .Where(item => item.ProjectId == id).ToList();

            return recordInDb;

        }

        [HttpPost("AddIncident/{Id}")]
        public async Task<ActionResult<Request>> AddIncident(AddOrUpdataIncidentDto model, int Id)
        {
            var message = "";
            var recordInDb = await _dbContext.Projects.FindAsync(Id);
            if (recordInDb == null)
            {
                return NotFound();
            }
            else if (ModelState.IsValid)
            {

                var newRecord = new Incident()
                {
                   ProjectId = Id,
                   Description = model.Description,
                   Date = DateTime.Now,

                };

                _dbContext.Incidents.Add(newRecord);
                _dbContext.SaveChanges();
                return Ok();
            }


            message = "Something went wrong on your side.";
            return BadRequest(new { message });
        }


        [HttpPut("UpdateIncident/{Id}")]
        public IActionResult UpdateIncident(AddOrUpdataIncidentDto model, int Id)
        {
            if (ModelState.IsValid)
            {
                var recordInDb = _dbContext.Incidents.FirstOrDefault(item => item.IncidentId == Id);
                if (recordInDb == null)
                {
                    return NotFound();
                }

                recordInDb.Description = model.Description;



                _dbContext.SaveChanges();
                return Ok();
            }

            var message = "Something went wrong on your side.";
            return BadRequest(new { message });
        }


        [HttpDelete("DeleteIncident/{Id}")]
        public async Task<ActionResult<Incident>> DeleteIncident(int Id)
        {
            var recordInDb = await _dbContext.Incidents.FindAsync(Id);

            if (recordInDb == null)
            {
                return NotFound();
            }

            _dbContext.Incidents.Remove(recordInDb);
            await _dbContext.SaveChangesAsync();

            return Ok();

        }

    }

}
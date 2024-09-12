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
    public class SafetyChecklistController : ControllerBase
    {
        private readonly IMOSContext _context;
        public SafetyChecklistController(IMOSContext context)
        {
            _context = context;
        }

        [HttpGet("GetAll")]
        public ActionResult<IEnumerable<GetProjectSafetyChecklistsDto>> GetAll()
        {
            var recordsInDb = _context.Safetyfilechecklists
                .Include(item => item.Project)
                .Include(item => item.Safetyfileitem)
                .ThenInclude(item => item.Safetyitemcategory)
                .Select(item => new GetProjectSafetyChecklistsDto()
                {
                    Id = item.ProjectId,
                    projectName = item.Project.Name,
                    name=item.Safetyfileitem.Name,
                    SafetyfileitemId=item.SafetyfileitemId,


                }).OrderBy(item => item.projectName).ToList();
            return Ok();
        }

        [HttpPost("AddChecklist")]
        public IActionResult Assign(AddProjectChecklistDto model)
        {
            
            try
            {
                var checkListsInProjectDb = _context.Safetyfilechecklists;
         
                //if (checkListsInProjectDb != null)
                //{
                //    message = "Project not found";
                //    return BadRequest(new { message });
                //}

                foreach (var item in model.SafetyItems)
                {
                    var newRecord = new Safetyfilechecklist()
                    {
                        SafetyfileitemId = item.SafetyfileitemId,
                        ProjectId=model.ProjectId
                    };
                    _context.Safetyfilechecklists.Add(newRecord);
                    _context.SaveChanges();
                  
                }


            }
            catch (Exception e)
            {

                return BadRequest(e.InnerException.Message);
            }
            return Ok();
        }
       
        // UPDATE 


        //DELETE  NB TO be Inserted into audit log ADD OR DELETE OPERATIONS 

    }
}

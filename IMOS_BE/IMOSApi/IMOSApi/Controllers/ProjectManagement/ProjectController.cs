using IMOSApi.Dtos.Project;
using IMOSApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProjectController : ControllerBase
    {
        private IMOSContext _context;
        public ProjectController(IMOSContext dbContext)
        {
            _context = dbContext;
        }

        [HttpGet("GetProjects")]
        public ActionResult<IEnumerable<GetProjectDto>> GetAll()
        {
            var recordInDb = _context.Projects
                  .Include(item => item.Constructionsite)
                  .Include(item => item.Initialrequest)
                  .Select(item => new GetProjectDto()
                  {
                      Id = item.ProjectId,
                      Name = item.Name,
                      Constructionsite = item.Constructionsite.Address,
                      Request = item.Initialrequest.Description

                  }).OrderBy(item => item.Name).ToList();
            return recordInDb;
        }



        [HttpGet("GetProjectsBYID/{projectId}")]
        public ActionResult<IEnumerable<GetProjectDto>> GetProjectsBYID(int projectId)
        {
            var recordInDb = _context.Projects
                  .Include(item => item.Constructionsite)
                  .Include(item => item.Initialrequest)
                  .Include(item => item.Initialrequest.Client)
                  .Where(item => item.ProjectId == projectId)
                  .Select(item => new GetProjectDto()
                  {

                      Id = item.ProjectId,
                      Name = item.Name,
                      Constructionsite = item.Constructionsite.Address,
                      Request = item.Initialrequest.Description,
                      ClientName = item.Initialrequest.Client.Clientname,
                      ClientEmail = item.Initialrequest.Client.Clientemail,
                      ClientNo = item.Initialrequest.Client.Contactnumber,
                  }).OrderBy(item => item.Name).ToList();
            return recordInDb;
        }


        /*   [HttpGet("GetProject/{id}")]
           public IEnumerable<Project> Get(int id)
           {
               using (var context = new IMOSContext())
               {
                   IEnumerable<Project> tmp = context.Projects.Where(emp => emp.ProjectId == id).ToList();
                   return tmp;
               }
           }*/

        [HttpPost("AddProject")]
        public IActionResult Create(AddOrUpdateProjectDto model)
        {
            var message = "";
            if (ModelState.IsValid)
            {
                var recordInDb = _context.Projects.FirstOrDefault(item => item.Name.ToLower() == model.Name.ToLower());

                if (recordInDb != null)
                {
                    message = "Record already exist";
                    return BadRequest(new { message });
                }
                var newRecord = new Project()
                {
                    Name = model.Name,
                    ConstructionsiteId = model.ConstructionsiteId,
                    InitialrequestId = model.InitialrequestId,
                    Safetyfilecreated = true,
                };
                _context.Projects.Add(newRecord);
                _context.SaveChanges();
                var safetyFile = new SafetyFile()
                {
                    ProjectId = newRecord.ProjectId
                    //FileUrl = model.FileUrl
                };
                _context.SafetyFiles.Add(safetyFile);
                _context.SaveChanges();
                return Ok();
            }
            message = "Something went wrong on your side.";
            return BadRequest(new { message });
        }


        /* [HttpPut("UpdateProject/{Id}")]
         public void Update([FromBody] Project Project, [FromRoute] int Id)
         {
             using (var context = new IMOSContext())
             {
                 var clie = context.Projects.Where(clie => clie.ProjectId == Id).ToList().FirstOrDefault();
                 //emp.
                 context.SaveChanges();
             }
         }*/

        [HttpDelete("DeleteProject/{id}")]
        public async Task<ActionResult<Project>> Delete(int id)
        {
            var message = "";
            var recordInDb = await _context.Projects.FindAsync(id);
            if (recordInDb != null)
            {
                message = "Project has relational entities,delete relational entities!.";
                return BadRequest(new { message });
            }
            return Ok();
        }
    }
}
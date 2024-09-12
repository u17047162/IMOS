using IMOSApi.Dtos.Project;
using IMOSApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectEmployeeController : ControllerBase
    {
        private readonly IMOSContext _context;
        public ProjectEmployeeController(IMOSContext context)
        {
            _context = context;
        }


        [HttpGet("GetAll")]
        public ActionResult<IEnumerable<GetAllProjectEmployeeDto>>GetAll()
        {
            var recordsInDb = _context.Projectemployees
                .Include(item => item.Employee)
                .ThenInclude(item => item.Users)
                .ThenInclude(item => item.Userrole)
                .Include(item => item.Project)
                .Select(item => new GetAllProjectEmployeeDto()
                {
                    Id = item.ProjectId,
                    ProjectName = item.Project.Name,
                    EmployeeId = item.EmployeeId,
                    Name = item.Employee.Name,
                    Email = item.Employee.Email,
                    Contact = item.Employee.Contactnumber
                }).OrderBy(item => item.ProjectName).ToList();

            return recordsInDb;
        }

        [HttpGet("GetProjectemployee/{id}")]
        public IEnumerable<Projectemployee> Get(int id)
        {
            
                IEnumerable<Projectemployee> tmp = _context.Projectemployees.Where(emp => emp.ProjectId == id).ToList();
                return tmp;
            
        }


        [HttpPost("Assign")]
        public IActionResult Assign(AssignEmployeeToProjectDto model)
        {
            var message = "";
            if (ModelState.IsValid)
            {
                var projectEmpInDb = _context.Projectemployees.FirstOrDefault(item => item.ProjectId == model.ProjectId);
                if (projectEmpInDb != null)
                {
                    message = "Project not found";
                    return BadRequest(new { message });
                }

                foreach (var item in model.Employees)
                {
                    var record = new Projectemployee()
                    {
                        ProjectId = model.ProjectId,
                        EmployeeId = item.EmployeeId
                        
                    };
                    _context.Projectemployees.Add(record);
                }
                
                _context.SaveChanges();
                return Ok();
            }
            message = "Something went wrong on your side.";
            return BadRequest(new { message });

        }

        //[HttpPut("UpdateProjectemployee/{Id}")]
        //public void Update([FromBody] Projectemployee Projectemployee, [FromRoute] int Id)
        //{
        //    using (var context = new IMOSContext())
        //    {
        //        var clie = context.Projectemployees.Where(clie => clie.ProjectId == Id).ToList().FirstOrDefault();

        //        context.SaveChanges();
        //    }
        //}

        //[HttpDelete("DeleteProjectemployee/{Id}")]
        //public void Delete(int id)
        //{
        //    using (var context = new IMOSContext())
        //    {
        //        var clie = context.Projectemployees.Where(clie => clie.ProjectId == id).ToList().FirstOrDefault(); ;
        //        context.Projectemployees.Remove(clie);
        //        context.SaveChanges();
        //    }
        //}
    }

}

using IMOSApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AttendenceController : ControllerBase
    {
        private IMOSContext _dbContext;
        public AttendenceController(IMOSContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet("GetAll")]
        public ActionResult<IEnumerable<GetEmployeeDto>> GetAll()
        {

            var recordInDb = _dbContext.Attendences
                .Select(item => new GetEmployeeDto()
                {
                    AttendenceId = item.AttendenceId,
                    EmployeeId = item.EmployeeId,
                    ProjectId = item.ProjectId,
                    Present = item.Present,
                    Date = item.Date,
                }).OrderBy(item => item.EmployeeId).ToList();

            return recordInDb;
        }

        [HttpGet("GetAttendanceById/{id}")]
        public ActionResult<GetEmployeeDto> GetRecord(int id)
        {

            var recordInDb = _dbContext.Attendences
              .Where(item => item.AttendenceId == id)
              .Select(item => new GetEmployeeDto()
              {
                  AttendenceId = item.AttendenceId,
                  EmployeeId = item.EmployeeId,
                  ProjectId = item.ProjectId,
                  Present = item.Present,
                  Date = item.Date,

              }).OrderBy(item => item.EmployeeId).First();
            if (recordInDb == null)
            {
                return NotFound();
            }
            return recordInDb;
        }


        [HttpPost("AddAttendance")]
        public IActionResult AddAttendance(AddEmployeeDto model)
        {
            var message = "";
            if (!ModelState.IsValid)
            {
                message = "Something went wrong on your side.";
                return BadRequest(new { message });
            }

            var newAttendance = new Attendence()
            {
                EmployeeId = model.EmployeeId,
                ProjectId = model.ProjectId,
                Present = model.Present,
                Date = model.Date,
            };
            _dbContext.Attendences.Add(newAttendance);
            _dbContext.SaveChanges();

            /* var document = new Document()
             {
                 EmployeeId = newEmployee.EmployeeId,
                 FileUrl = model.FilePath
             };*/

            /// _dbContext.Documents.Add(document);
            //    _dbContext.SaveChanges();
            return Ok();
        }

        [HttpPut("UpdateAttendance/{id}")]
        public IActionResult Update(UpdateEmployeeDto model, int id)
        {
            var message = "";
            if (ModelState.IsValid)
            {
                var recordInDb = _dbContext.Attendences.FirstOrDefault(item => item.AttendenceId == id);

                if (recordInDb == null)
                {
                    return NotFound();
                }

                recordInDb.EmployeeId = model.EmployeeId;
                recordInDb.ProjectId = model.ProjectId;
                recordInDb.Present = model.Present;
                recordInDb.Date = model.Date;
                _dbContext.SaveChanges();

                /*  var document = new Document()
                  {
                      EmployeeId = recordInDb.EmployeeId,
                      FileUrl = model.FilePath
                  };*/

                // _dbContext.Documents.Add(document);
                //   _dbContext.SaveChanges();
                return Ok();
            }

            message = "Something went wrong on your side.";
            return BadRequest(new { message });
        }


        [HttpDelete("DeleteAttendance/{id}")]
        public async Task<ActionResult<Attendence>> Delete(int id)
        {
            var recordInDb = await _dbContext.Attendences.FindAsync(id);
            if (recordInDb == null)
            {
                return NotFound();
            }

            /*var projectAttendances = _dbContext.att.Where(item => item.EmployeeId == id);
            _dbContext.Projectemployees.RemoveRange(projectEmployees);*/
            await _dbContext.SaveChangesAsync();


            _dbContext.Attendences.Remove(recordInDb);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }
    }
}

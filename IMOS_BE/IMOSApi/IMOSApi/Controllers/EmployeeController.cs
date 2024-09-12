using IMOSApi.Dtos.Employee;
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
    public class EmployeeController : ControllerBase
    {
        private IMOSContext _dbContext;
        public EmployeeController(IMOSContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet("GetAll")]
        public ActionResult<IEnumerable<GetEmployeeDto>> GetAll()
        {

            var recordInDb = _dbContext.Employees
                .Select(item => new GetEmployeeDto()
                {
                    EmployeeId = item.EmployeeId,
                    Name = item.Name,
                    Email = item.Email,
                    ContactNumber = item.Contactnumber,
                    FileUrl=item.FileUrl,
                }).OrderBy(item => item.Name).ToList();

            return recordInDb;
        }

        [HttpGet("GetEmployeeById/{id}")]
        public ActionResult<GetEmployeeDto> GetRecord(int id)
        {
           
                var recordInDb = _dbContext.Employees
                  .Where(item => item.EmployeeId == id)
                  .Select(item => new GetEmployeeDto()
                  {
                      EmployeeId = item.EmployeeId,
                      Name = item.Name,
                      Email = item.Email,
                      ContactNumber = item.Contactnumber,
                      FileUrl=item.FileUrl

                  }).OrderBy(item => item.Name).First();
                if (recordInDb == null)
                {
                    return NotFound();
                }
                return recordInDb;
        }


        [HttpPost("AddEmployee")]
        public async Task< IActionResult>AddEmployee(AddEmployeeDto model)
        {
            var message = "";
            if (!ModelState.IsValid)
            {
                message = "Something went wrong on your side.";
                return BadRequest(new { message });
            }

                var newEmployee = new Employee()
                {
                    Name = model.Name,
                    Email = model.Email,
                    Contactnumber = model.ContactNumber,
                    FileUrl=model.FilePath
                }; 
                _dbContext.Employees.Add(newEmployee);

              int i = 3;
              await _dbContext.SaveChangesAsync(i);
               /* var document = new Document()
                {
                    EmployeeId = newEmployee.EmployeeId,
                    FileUrl = model.FilePath
                };*/

            /// _dbContext.Documents.Add(document);
            //    _dbContext.SaveChanges();
            return Ok(); 
        }

        [HttpPut("UpdateEmployee/{id}")]
        public async Task< IActionResult> Update(UpdateEmployeeDto model,int id )
        {
            var message = "";
            if (ModelState.IsValid)
            {
                var recordInDb = _dbContext.Employees.FirstOrDefault(item => item.EmployeeId == id);

                if (recordInDb == null)
                {
                    return NotFound();
                }

                recordInDb.Name = model.Name;
                recordInDb.Email = model.Email;
                recordInDb.Contactnumber = model.ContactNumber;
                recordInDb.FileUrl = model.FilePath;

                int i = 3;
                await _dbContext.SaveChangesAsync(i);
            
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

        [HttpDelete("DeleteEmployee/{id}")]
        public async Task<ActionResult<Employee>> Delete(int id)
        {
            var recordInDb = await _dbContext.Employees.FindAsync(id);
            if (recordInDb == null)
            {
                return NotFound();
            }

            var projectEmployees  = _dbContext.Projectemployees.Where(item => item.EmployeeId == id);
            _dbContext.Projectemployees.RemoveRange(projectEmployees);
            await _dbContext.SaveChangesAsync();


            _dbContext.Employees.Remove(recordInDb);

            int i = 3;

            await _dbContext.SaveChangesAsync(i);
            return Ok();
        }


        [HttpPost("AddMultiple")]
        [ApiExplorerSettings(IgnoreApi = true)]
        public async Task<ActionResult<List<GetEmployeeDto>>> AddMutipleEmployeesInCSV([FromBody] UploadEmployeeInCSVDto model)
        {
            var message = "";
            if (ModelState.IsValid)
            {
                var lines = await System.IO.File.ReadAllLinesAsync(@model.FileUrl);

                var employees = new List<AddIndividualEmployeeDto>();

                foreach (var line in lines.Skip(2))
                {
                    var rowItems = line.Split(';');//Dont input csv empty rows
                    if (rowItems[(uint)EmployeeRecordInCSV.Name].Length > 1)
                    {
                        var tempEmploye = new AddIndividualEmployeeDto()
                        {
                            Name = rowItems[(uint)EmployeeRecordInCSV.Name],
                            Email = rowItems[(uint)EmployeeRecordInCSV.Email],
                            ContactNumber = "0" + rowItems[(uint)EmployeeRecordInCSV.ContactNumber]
                        };

                        employees.Add(tempEmploye);

                        foreach (var employeeDto in employees)
                        {
                            var newEmployee = new Employee
                            {
                                Name = employeeDto.Name,
                                Email = employeeDto.Email,
                                Contactnumber = employeeDto.ContactNumber
                            };
                            await _dbContext.Employees.AddAsync(newEmployee);
                            await _dbContext.SaveChangesAsync();

                        }

                    }
                }
            }
            message = "Something went wrong on your side.";
            return BadRequest(new { message });

        }

        public enum EmployeeRecordInCSV
        {
            Name,
            Email,
            ContactNumber,
        }

    }
}

    







       
    



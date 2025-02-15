﻿using IMOSApi.Dtos.Employee;
using IMOSApi.Models;
using Microsoft.AspNetCore.Mvc;
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

        [HttpGet]
        public IEnumerable<Employee> Get()
        {
            using (var context = new IMOSContext())
            {
                return _dbContext.Employees.ToList();
            }
        }
        [HttpGet("GetEmployee/{id}")]
        public IEnumerable<Employee> Get(int id)
        {
            using (var context = new IMOSContext())
            {
                IEnumerable<Employee> tmp = context.Employees.Where(emp => emp.EmployeeId == id).ToList();
                return tmp;
            }
        }

        [HttpPost("AddEmployee")]
        public  IActionResult AddEmployee(AddEmployeeDto model )
        {
            var message = "";
            if (!ModelState.IsValid)
            {
                message = "Something went wrong on your side.";
                return BadRequest(new { message });
            }
            using (var _dbContext = new IMOSContext())
            {
              /* var recordInDb = _dbContext.Employees;
                if (recordInDb != null)
                {
                    message = "Employee  already exists in Database";
                    return BadRequest(new { message });
                }*/

                var newEmployee = new Employee()
                {
                    Name = model.Name,
                    Email = model.Email,
                    Contactnumber = model.ContactNumber
                };
                _dbContext.Employees.Add(newEmployee);
                _dbContext.SaveChanges();

                var document = new Document()
                {
                    EmployeeId = newEmployee.EmployeeId,
                    FileUrl = model.FilePath
                };

                _dbContext.Documents.Add(document);
                _dbContext.SaveChanges();
                return Ok();
            }
        }

        [HttpPost("CreateEmployee")]
        public IActionResult Create([FromBody] Employee employee)
        {
            using (var context = new IMOSContext())
            {
                context.Employees.Add(employee);
                context.SaveChanges();
                return Ok();
            }
        }

        [HttpPut("UpdateEmployee/{Id}")]
        public void Update([FromBody] Employee employee,[FromRoute] int Id)
        {
            using (var context = new IMOSContext())
            {
                var emp = context.Employees.Where(emp => emp.EmployeeId == Id).ToList().FirstOrDefault(); ;
                //emp.DocumentId = employee.DocumentId;
                emp.Contactnumber = employee.Contactnumber;
                emp.Name = employee.Name;
                emp.Email = employee.Email;
                emp = employee;
                context.SaveChanges();
            }
        }
        [HttpDelete("DeleteEmployee/{Id}")]
        public void Delete(int id)
        {
            using (var context = new IMOSContext())
            {
                var emp = _dbContext.Employees.Where(emp => emp.EmployeeId == id).ToList().FirstOrDefault(); ;
                _dbContext.Employees.Remove(emp);
                _dbContext.SaveChanges();
            }
        }
    }
}



using IMOSApi.Dtos.Generic;
using IMOSApi.Dtos.User;
using IMOSApi.Dtos.User.Roles;
using IMOSApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace IMOSApi.Controllers.UserFolder
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserRoleController : ControllerBase
    {
        private readonly IMOSContext _dbContext;
        public UserRoleController(IMOSContext dbContext)
        {
            _dbContext = dbContext;
        }


        [HttpGet("Roles/GetAll")]
        public ActionResult<IEnumerable<GetUserRoleDto>> GetAllRoles()
        {
            var recordsInDb = _dbContext.Userroles
                .Select(item => new GetUserRoleDto()
                {
                    Id = item.UserroleId,
                    description = item.Description

                }).OrderBy(item => item.Id).ToList();
            return recordsInDb;

        }

        [HttpGet("GetRoleById/{id}")]
        public ActionResult<GetUserRoleDto> GetRecord(int id)
        {
            var message = "";
            var recordInDb = _dbContext.Userroles
                  .Where(item => item.UserroleId == id)
                  .Select(item => new GetUserRoleDto()
                  {
                      Id = item.UserroleId,
                      description = item.Description
                  }).OrderBy(item => item.description).First();
            if (recordInDb == null)
            {
                message = "Record Not Found";
                return BadRequest(new { message });
            }
            return recordInDb;

        }
      
        [HttpPost("AddRole")]
        public async Task<IActionResult> Add(AddOrUpdateRoleDto model)
        {
            var message = "";
            if (ModelState.IsValid)
            {
                var recordInDb = _dbContext.Userroles.FirstOrDefault(item => item.Description.ToLower() == model.Description.ToLower());
                if (recordInDb != null)
                {
                    message = "Record exists in database";
                    return BadRequest(new { message });

                }

                var newRecord = new Userrole()
                {
                    Description = model.Description,
                };

                _dbContext.Userroles.Add(newRecord);

                //await _dbContext.SaveChangesAsync(User?.FindFirst(ClaimTypes.NameIdentifier).Value);
                int i = 3;
                await _dbContext.SaveChangesAsync(i);
                return Ok();
            }

            message = "Something went wrong on your side.";
            return BadRequest(new { message });

        }

       [HttpPut("EditUserRole/{id}")]
        public async Task< IActionResult> Update([FromBody] Userrole userrole, [FromRoute] int Id)
        {
            if (ModelState.IsValid)
            {
                    var recordInDb = _dbContext.Userroles.FirstOrDefault();
                    if (recordInDb == null)
                    {
                        return NotFound();
                    }
                    recordInDb.Description = userrole.Description;
                    int i = 3;
                    await _dbContext.SaveChangesAsync(i);
                return Ok();
            }
            var message = "Something went wrong on your side";
            return BadRequest(new { message });
        }


        [HttpDelete("RemoveUserRole/{id}")] 
        public async Task<ActionResult<Userrole>> Delete(int id)
        {
      
                var recordInDb = await _dbContext.Userroles.FindAsync(id);
                if (recordInDb == null)
                {
                    return NotFound();
                }
                _dbContext.Userroles.Remove(recordInDb);
                int i = 3;
               await _dbContext.SaveChangesAsync(i);
            return Ok();
        }
    }
}


   

     

        



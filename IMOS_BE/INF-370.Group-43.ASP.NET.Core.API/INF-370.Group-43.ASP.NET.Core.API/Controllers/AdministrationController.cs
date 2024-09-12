using Group43.Core.Identity;
using Group43.Data.Context;
using Group43.Services.Dtos.Administration;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace INF_370.Group_43.ASP.NET.Core.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdministrationController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        private readonly RoleManager<AppRole> _roleManager;
        private readonly UserManager<AppUser> _userManager;

        public AdministrationController(
            AppDbContext appDbContext,
            RoleManager<AppRole> roleManager,
            UserManager<AppUser> userManager
            )
        {
            _appDbContext = appDbContext;
            _roleManager = roleManager;
            _userManager = userManager;
        }

        #region App User Roles 

        [HttpPost("Roles/Add/{username}")]
        public async Task<IActionResult> AddRole(AddOrUpdateUserRoleDto model, string username)
        {
            var message = "";
            if (ModelState.IsValid)
            {
                var rolesInDb = _roleManager.Roles.FirstOrDefault(item =>
                    string.Equals(item.Name.ToLower(), model.Name.ToLower()));

                if (rolesInDb != null)
                {
                    message = "Error: Role name already exist.";
                    return BadRequest(new { message });
                }
                var newRole = new AppRole()
                {
                    Name = model.Name,
                    Description = model.Description
                };
                var result = await _roleManager.CreateAsync(newRole);
                if (result.Succeeded)
                {
                    return Ok();
                }
            }

            message = "Error: Something went wrong on your side.";
            return BadRequest(new { message });

        }
   

        [HttpPut("Roles/Update/{username}/{id}")]
        public async Task<IActionResult> UpdateRole(AddOrUpdateUserRoleDto model, string username, string id)
        {
            var message = "";
            if (ModelState.IsValid)
            {
                var roleInDb = _roleManager.Roles.FirstOrDefault(item =>
                    string.Equals(item.Id.ToLower(), id.ToLower()));

                if (roleInDb == null)
                {
                    message = "Error: Role not found.";
                    return BadRequest(new { message });
                }
                roleInDb.Name = model.Name;
                roleInDb.Description = model.Description;
                await _appDbContext.SaveChangesAsync();

                return Ok();
            }
            message = "Error: Something went wrong on your side.";
            return BadRequest(new { message });
        }

        [HttpDelete("Roles/Delete/{username}/{id}")]
        public async Task<IActionResult> DeleteRole(string username, string id)
        {
            var message = "";
            if (ModelState.IsValid)
            {
                var roleInDb = _roleManager.Roles.FirstOrDefault(item =>
                    string.Equals(item.Id.ToLower(), id.ToLower()));

                if (roleInDb == null)
                {
                    message = "Error: Role not found.";
                    return BadRequest(new { message });
                }

                var roleAppUsers = await _userManager.GetUsersInRoleAsync(roleInDb.Name);

                _appDbContext.AppUsers.RemoveRange(roleAppUsers);
                await _appDbContext.SaveChangesAsync();

                _appDbContext.AppRoles.Remove(roleInDb);
                await _appDbContext.SaveChangesAsync();

                return Ok();
            }

            message = "Error: Something went wrong on your side.";
            return BadRequest(new { message });
        }

        [HttpGet("Roles/GetAll")]
        public ActionResult<IEnumerable<GetUserRoleDto>> GetAllUserRoles()
        {
            var userRolesInDb = _roleManager.Roles
                .Where(item => !string.Equals(item.Name.ToLower(), "admin".ToLower()))
                .Select(item => new GetUserRoleDto
                {
                    Id = item.Id,
                    Name = item.Name,
                    Description = item.Description
                }).OrderBy(item => item.Name).ToList();

            return userRolesInDb;
        }
        #endregion
    }
}

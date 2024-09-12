using Group43.Core.Documents;
using Group43.Core.Employees;
using Group43.Core.Identity;
using Group43.Data.Context;
using Group43.Services.Dtos;
using Group43.Services.Extensions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace INF_370.Group_43.ASP.NET.Core.API.Controllers.EmployeeManagement
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly RoleManager<AppRole> _roleManager;
        private readonly UserManager<AppUser> _userManager;
        private readonly IConfiguration _configuration;

        public EmployeesController(
            AppDbContext context,
            RoleManager<AppRole> roleManager,
            UserManager<AppUser> userManager,
            IConfiguration configuration)
        {
            _context = context;
            _roleManager = roleManager;
            _userManager = userManager;
            _configuration = configuration;
        }

        [HttpPost("AddEmployee/{username}")]
        public async Task<ActionResult>Add(AddOrUpdateEmployeeDto model,string username)
        {
            var message = "";
            if (ModelState.IsValid)
            {
                var appUsers = _context.AppUsers
                   .FirstOrDefault(item =>
                       string.Equals(item.Email, model.EmailAddress) ||
                       string.Equals(item.PhoneNumber, model.PhoneNumber));
                if(appUsers==null)
                {
                    var emailExists = await _userManager.FindByEmailAsync(model.EmailAddress);
                    if (emailExists != null)
                    {
                        message = "Account with provided email address already exist.";
                        return BadRequest(new { message });
                    }
                    var assignedPassword = UserManagementExtensions.GenerateRandomPassword();
                    var role = await _roleManager.FindByNameAsync("Admin".ToLower());
                    if (role == null)
                    {
                        message = "Admin  Role not found";
                        return BadRequest(new { message });
                    };
                    var newUser = new AppUser()
                    {
                        UserName = model.Username,
                        Email = model.EmailAddress,
                        PhoneNumber = model.PhoneNumber,
                        Name = model.Name,
                        Surname = model.Surname,
                        //Id = model.AppRoleId.ToString(),
                        AutoAssignedPassword = assignedPassword
                    };
                    var result = await _userManager.CreateAsync(newUser, assignedPassword);
                    if (result.Succeeded)
                    {
                        await _userManager.AddToRoleAsync(newUser, role.Name);
                        var newEmployee = new Employee()
                        {
                            AppUserId=newUser.Id,
                        };
                        await _context.Employees.AddAsync(newEmployee);
                        await _context.SaveChangesAsync();
                        var document = new Document()
                        {
                            EmployeeId = newEmployee.Id,
                            FileUrl = model.FilePath
                        };

                        _context.Documents.Add(document);
                        _context.SaveChanges();
                        var emailToken = await _userManager.GenerateEmailConfirmationTokenAsync(newUser);
                        var code = HttpUtility.UrlEncode(emailToken);

                        var user = await _userManager.FindByNameAsync(newUser.Email);
                        var notificationExtenstion = new NotificationsExtension(_configuration);
                        notificationExtenstion.OfficeAdministratorNotification(newEmployee.Id);
                        return Ok();

                    }

                }
                message = "An account matching the provided details already exists.";
                return BadRequest(new { message });

            }
            message = "Something went wrong on your side. Please check your connection & try again.";
            return BadRequest(new { message });
        }
    }
}

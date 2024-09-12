using IMOSApi.Dtos;
using IMOSApi.Dtos.User;
using IMOSApi.Extensions;
using IMOSApi.Helpers;
using IMOSApi.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace IMOSApi.Controllers.UserFolder
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IMOSContext _context;

        private readonly IConfiguration _configuration;

        public UserController(IMOSContext context)
        {
            _context = context;
        }


       // [Authorize]
        [HttpGet("GetAll/Users")]
        public ActionResult<IEnumerable<GetUserDto>> GetAll()
        {
            var recordsInDb = _context.Users
                .Include(item => item.Userrole)
                .Include(item=>item.Employee)
                .Select(item => new GetUserDto()

                {
                    Id = item.UserId, 
                    Username = item.Username,
                    autoAssignedPassword =item.Userpassword,
                    Description = item.Userrole.Description,
                    UserroleId = item.UserroleId,
                    Name = item.Employee.Name,
                    Email=item.Employee.Email,
                    EmployeeId=item.EmployeeId
                }).OrderBy(item => item.Id).ToList();
            return recordsInDb;
        }

        [NonAction]
        public void SendNewUserNotification(string UserId,string assignedPassword, string emailFor = "newUser")
        {
            var fromEmail = new MailAddress("u18180559@tuks.co.za", "WelCome User");
            var fromPassword = "#Honours2023";
            var toEmail = new MailAddress(UserId);

            string subjectLine = "";
            string body = "";
            if (emailFor == "newUser")
            {
                subjectLine = "[Ngubeni and TDS Waterproofing]  User Account";
                body = $"<p>Good day " + UserId + ",<br><br><br>You have been added as User for Ngubeni and TDS waterproofing System User" +
                  $"Use these credentials to sign in" +
                                         $"<br/><br/>" +
                                         "Username: " + UserId + $"<br/><br/>" + "Auto-generated Password: "+ assignedPassword + $"<br/><br/>"+

                                           $"You will have to change the auto generated password" +
                                            $"<br/><br/>" +
                                         "Thanks,<br/>" + $"<br/><br/>"+
                                         "Ngubeni and TDS Waterproofing Online System";
            }
            var smtp = new SmtpClient
            {
                Host = "smtp.gmail.com",
                Port=587,
                EnableSsl=true,
                DeliveryMethod=SmtpDeliveryMethod.Network,
                UseDefaultCredentials=false,
                Credentials=new  NetworkCredential(fromEmail.Address,fromPassword)
            };

            using (var message = new MailMessage(fromEmail, toEmail)
            {
                Subject = subjectLine,
                Body = body,
                IsBodyHtml = true
            })
                smtp.Send(message);
        }

       [HttpPost("Register")]
        public async Task< IActionResult>  Add(AddOrUpdateUserDto model)
        {
            var message = "";
            if (ModelState.IsValid)
            {
                var recordInDb =  _context.Users
                    .FirstOrDefault(item => item.Username.ToLower() == model.Username.ToLower());

                if (recordInDb != null)
                {
                    message = "Record exists in database";
                    return BadRequest(new { message });
                }

                var assignedPassword = UserManagementExtension.GenerateRandomPassword();
                var newUser = new User()
                {
                    UserroleId = model.UserroleId,
                    EmployeeId = model.EmployeeId,
                    Username = model.Username,
                    Userpassword =EncDscPassword.EncryptPassword(assignedPassword)
                };
                 _context.Users.Add(newUser);

                int i = 3;
                await _context.SaveChangesAsync(i);

                string UserId = newUser.Username;
                string password = assignedPassword;

                SendNewUserNotification(UserId, assignedPassword,"newUser");

              // var notificationExtension = new NotificationsExtension(_configuration);
              //notificationExtension.NewUserNotification(newUser.UserId);
            }
            return Ok();
        }

        [HttpDelete("DeleteUser/{id}")]
        public async Task<ActionResult<User>> Delete(int id)
        {
            var message = "";
            var recordInDb = await _context.Users.FindAsync(id);
            if (recordInDb == null)
            {
                message = "Record Not Found";
                return BadRequest(new { message });
            }

            return Unauthorized(StatusCode(401));
           


            /*var usersStockTake= _context.Stocktakes.Where(item => item.UserId == id);
            _context.Stocktakes.RemoveRange(usersStockTake);
            await _context.SaveChangesAsync();

            var usersEquipmentChecks = _context.Equipmentchecks.Where(item => item.UserId == id);
            _context.Equipmentchecks.RemoveRange(usersEquipmentChecks);
            await _context.SaveChangesAsync();

            _context.Users.Remove(recordInDb);
            await _context.SaveChangesAsync();*/
          
        }

        [HttpPut("UpdateUser")]
        public IActionResult Update(User model, int id)
        {
            if (ModelState.IsValid)
            {
                var recordInDb = _context.Users.FirstOrDefault(item => item.UserId == id);

                if (recordInDb != null)
                {
                    return NotFound();
                }

                recordInDb.EmployeeId = model.EmployeeId;
                recordInDb.Userrole = model.Userrole;
                recordInDb.Username = model.Username;
                recordInDb.Userpassword = model.Userpassword;
                _context.SaveChanges();
                return Ok();
            }
            var message = "Something went wrong on your side.";
            return BadRequest(new { message });
        }
    }
}


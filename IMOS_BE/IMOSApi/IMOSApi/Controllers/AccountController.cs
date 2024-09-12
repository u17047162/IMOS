using IMOSApi.Dtos.Authentication;
using IMOSApi.Helpers;
using IMOSApi.Models;
using IMOSApi.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;


namespace IMOSApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IMOSContext _context;
        private static Dictionary<string, TwoFactorCode> _twoFactorCodeDictionary
       = new Dictionary<string, TwoFactorCode>();

        // private readonly JWTSettings _jwtsettings;

        public AccountController(IMOSContext context /*IOptions<JWTSettings> jwtsettings*/)
        {
            _context = context;
            //_jwtsettings = jwtsettings.Value;
        }

        [HttpPost("Login")]
        [AllowAnonymous]
        public async Task<ActionResult>Login([FromBody] LogInDto model)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                   var res = "Something went wrong on your side. Please try again";
                    return BadRequest(new { res });

                }

                var password = EncDscPassword.EncryptPassword(model.Password.ToString());
                var _user = await _context.Users
                    .Where(u => u.Username == model.UserName.ToLower() && u.Userpassword == password).FirstOrDefaultAsync();

                //OTP Two Factor  Verification
                var otp = GenerateTwoFactorCodeFor(_user.Username);
                var fromEmail = "u18180559@tuks.co.za";
                var subject = "System LogIn ";
                var message = $"Enter the following OTP: {otp}";
                var toEmailAddress = _user.Username;

                SendEmail(fromEmail, subject, message, toEmailAddress);
                if (_user != null)
                {

                    var token = GenerateToken(_user);
                    return token;
                } 

                return Unauthorized();
                //return otp

                //UserViewModel loggedInUser = new UserViewModel { userName = model.Username,/*otp =model.*/};
                //return Ok(loggedInUser);
            }

            catch (Exception c)
            {
                return BadRequest(c.InnerException.Message);
            }
        }

        List <Claim> claims = new List<Claim>();
        private ActionResult GenerateToken(User user)
        {
            var  key = "xvbxjkbgvnxcgbxcjkvxcvvAEWaWW* Ra9wre7ERW&*GIRLS * GDERFDFCCVZBCVB";
            var issuer = "http://localhost:4200/";

            var tokenHandler = new JwtSecurityTokenHandler(); // declaring token handler
           var Securitykey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));
            var credentials = new SigningCredentials(Securitykey, SecurityAlgorithms.HmacSha256);
            
            claims.Add(new Claim("Name", user.Username));
            claims.Add(new Claim("UserId", user.UserId.ToString()));// added later 
            claims.Add(new Claim("Role", user.UserroleId.ToString()));
          // claims.Add(new Claim("DisplayName", user.Userrole.Description));
            var token = new JwtSecurityToken(

             issuer,
             issuer,
            claims,
             expires: DateTime.Now.AddDays(1),
             signingCredentials: credentials
            );

            return Created("", new
            {
                token = new JwtSecurityTokenHandler().WriteToken(token),
                expiration = token.ValidTo,


            });
        }

        private static string GetUniqueKey()
        {
            Random rnd = new Random();

            var optCode = rnd.Next(1000, 9999);

            return optCode.ToString();
        }

        [NonAction]
        private void   SendEmail(string fromEmailAddress, string subject ,string message,string toEmailAddress)
        {
            var fromEmail = new MailAddress(fromEmailAddress);
            var fromPassword = "#Honours2023";
            var toAddress = new MailAddress(toEmailAddress);

            using (var compiledMessage = new MailMessage(fromEmail, toAddress))
            {
                compiledMessage.Subject = subject;
                compiledMessage.Body = string.Format("Message: {0}", message);

                using (var smtp = new SmtpClient())
                {
                    smtp.Host = "smtp.gmail.com";
                    smtp.Port = 587;
                    smtp.EnableSsl = true;
                    smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
                    smtp.UseDefaultCredentials  = false;
                    smtp.Credentials = new NetworkCredential(fromEmail.Address, fromPassword);
                    smtp.Send(compiledMessage);
                };

            }
        }

        private static string GenerateTwoFactorCodeFor(string username)
        {
            var code = GetUniqueKey();

            var twoFactorCode = new TwoFactorCode(code);

            // add or overwrite code
            _twoFactorCodeDictionary[username] = twoFactorCode;

            return code;
        }

  
        [HttpPost]
        [Route("Otp")]
        public IActionResult VerifyOTP(UserViewModel user)
        {
            var validOtp = VerifyTwoFactorCodeFor(user.userName, user.otp);

            if (validOtp)
            {
                return Ok();
            }

            return StatusCode(StatusCodes.Status400BadRequest, "Invalid OTP");
        }

        private bool VerifyTwoFactorCodeFor(string subject, string code)
        {
            TwoFactorCode twoFactorCodeFromDictionary = null;
            // find subject in dictionary
            if (_twoFactorCodeDictionary
                .TryGetValue(subject, out twoFactorCodeFromDictionary))
            {
                if (twoFactorCodeFromDictionary.CanBeVerifiedUntil > DateTime.Now
                    && twoFactorCodeFromDictionary.Code == code)
                {
                    twoFactorCodeFromDictionary.IsVerified = true;
                    return true;
                }
            }
            return false;
        }

        [HttpPost("ResetPassword")]
        public async Task<ActionResult> ResetPassword(ResetPasswordDto model)
        {
            if (ModelState.IsValid)
            {
                var user = await _context.Users
                    .Where(u => u.Username == model.UserName.ToLower()).FirstOrDefaultAsync();
                if (user != null)
                {

                }
            }
            return BadRequest();
        }

    }
}

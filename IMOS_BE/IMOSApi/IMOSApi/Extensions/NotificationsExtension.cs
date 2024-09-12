
using IMOSApi.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Extensions
{
    public class NotificationsExtension
    {
        private readonly IConfiguration _configuration;


        public NotificationsExtension(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public void NewSupplierOrderNotification(int supplierId)
        {

           
        }


  /*  public void NewUserNotification (int userId)
        {

          //  var context = new IMOSContext();// add /OR pass configuration parameter
            var to = context.Users.Where(item => item.UserId == userId)
                .Include(item => item.Userrole).Include(item => item.Employee).Single();

            var subjectLine = "[ Ngubeni and TDS Waterproofing]  User Account";

            var htmlMessageToApplicant = $"<p>Hi "+ to.Employee.Name + ",<br><br><br>You have been added as User for Ngubeni and TDS waterproofing System User" +
                  $"Use these credentials to sign in" +
                                         $"<br/><br/>" +
                                         "Username: " + to.Username + "<br/><br/>" + "Auto-generated Password: " + to.Userpassword +
                                           $"You will have to change the auto generated password" +
                                         "Thanks,<br/>" +
                                         "Ngubeni and TDS Waterproofing Online System";

            var planTextMessage = "Here are your login details, Username: "
                                   + to.Username + ", Password: " + to.Userpassword;

            Email.SendGenericEmail("u18180559@tuks.co.za", " Ngubeni and TDS Waterproofing", to.Employee.Email, to.Employee.Name, subjectLine, htmlMessageToApplicant, planTextMessage);
        }*/


    }
}

using Group43.Communication;
using Group43.Data.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Group43.Services.Extensions
{
    public  class NotificationsExtension
    {
        private readonly IConfiguration _configuration;

        public NotificationsExtension(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public void OfficeAdministratorNotification(int EmployeeId)
        {
            var context = new AppDbContext(_configuration);
            var to = context.Employees.Where(item => item.Id == EmployeeId)
                .Include(item => item.AppUser)
                .Single();


            var subjectLine = "[TDS and  Ngubani] Office  Administrator Account";

            var htmlMessageToApplicant = $"<p>Hi " + to.AppUser.Name + ",<br><br><br>You have been added as a Office Administrator for " + "TDS and Ngubani " + ".<br><br>" +
                                         $"Use these credentials to sign in" +
                                         $"<br/><br/>" +
                                         "Username: " + to.AppUser.UserName + "<br/><br/>" + "Auto-generated Password: " + to.AppUser.AutoAssignedPassword +
                                         " <br/><br/> " +
                                         $"You will have to change the auto generated password" +
                                         "Thanks,<br/>" +
                                         "TDS and Ngubani System";

            var planTextMessage = "Here are your login details, Username: "
                                  + to.AppUser.UserName +
                                  ", Password: " + to.AppUser.AutoAssignedPassword;

            Email.SendGenericEmail("u18180559@tuks.co.za", "TDS and Ngubani ", to.AppUser.Email, to.AppUser.Name, subjectLine, htmlMessageToApplicant, planTextMessage);
        }

    }
}

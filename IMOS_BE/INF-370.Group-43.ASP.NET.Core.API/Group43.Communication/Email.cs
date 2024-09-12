using SendGrid;
using SendGrid.Helpers.Mail;
using System;
using System.Threading.Tasks;

namespace Group43.Communication
{
    public class Email
    {
      //  private const string ApiKey = "";

        private static async Task GenericEmail(string fromEmail, string fromName, string toEmail, string toName, string subjectLine, string htmlMessage, string plainTextMessage)
        {
           // var client = new SendGridClient(ApiKey);
            var from = new EmailAddress(fromEmail, fromName);
            var subject = subjectLine;

            var to = new EmailAddress(toEmail, toName);
            var plainTextContent = plainTextMessage;
            var htmlContent = htmlMessage;
            var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, htmlContent);

            //await client.SendEmailAsync(msg);
        }

        public static void SendGenericEmail(string fromEmail, string fromName, string toEmail, string toName, string subject, string htmlMessage, string plainTextMessage)
        {
            GenericEmail(fromEmail, fromName, toEmail, toName, subject, htmlMessage, plainTextMessage).Wait();
        }
    }
}

using IMOSApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System;
using System.Data;

namespace IMOSApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BackUpDatabaseController : ControllerBase
    {
        private readonly IMOSContext _context;
        public BackUpDatabaseController(IMOSContext context)
        {
            _context = context;
        }

        [HttpGet("BackUpDatabase")]
        public IActionResult BackUpDatabase()
        {
         
            var message = "";

            try
            {


                _context.Database.ExecuteSqlRaw("exec IMOSDBBACKUP2");
                return Ok();

            }

            catch (Exception ex)
            {
                message = ex.Message;
                return Ok();
            }


        }

        [HttpPost("RestoreDatabase")]
        public IActionResult RestoreDatabase(string backuppath)
        {
            
            var message = "";

            try
            {
                var parameters = new[]
                {
                     new SqlParameter("@backuppath", SqlDbType.NVarChar)
                      {
                      Direction = ParameterDirection.Input,
                      Value = backuppath,
                     }
                };


                _context.Database.ExecuteSqlRaw("exec RESTOREIMOSDATABASE22 @backuppath", parameters: parameters);
                return Ok();

            }

            catch (Exception ex)
            {
                message = ex.Message;
                return Ok();
            }


        }

    }
}

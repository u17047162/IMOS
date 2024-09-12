using IMOSApi.Dtos.Administration;
using IMOSApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Controllers.AuditTrails
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuditTrailsController : ControllerBase
    {
        private IMOSContext _context;
        public AuditTrailsController(IMOSContext context)
        {
            _context = context;
        }
        [HttpGet("GetAll")]
        public ActionResult<IEnumerable<Auditlog>> GetAll()
        {

            var recordInDb = _context.Auditlogs.ToList();
                //.Include(item => item.User)
                //.Select(item => new GetAuditTrails()
                //{
                //    Id = item.AuditlogId,
                //    operationtype = item.Operationtype,
                //    tablename = item.Tablename,
                //    primarykey = item.Primarykey,
                //    oldvalues = item.Oldvalues,
                //    newvalues = item.Newvalues,
                //    affectedcolumns = "not-affected",
                //    datetimestap = item.Datetimestap.ToString("f"),
                //    userId = item.UserId

                //}).OrderBy(item => item.Id).ToList();

            return recordInDb;
        }


    }
}

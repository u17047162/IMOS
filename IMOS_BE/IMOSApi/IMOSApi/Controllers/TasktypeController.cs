using IMOSApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IMOSApi.Dtos.Task;
using Microsoft.Data.SqlClient;
using System.Data;
using Microsoft.EntityFrameworkCore;

namespace IMOSApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TasktypeController : ControllerBase
    {
        private readonly IMOSContext _dbContext;
        public TasktypeController(IMOSContext dbContext)
        {
            _dbContext = dbContext;
        }


        //[HttpGet("GetTasktypes")]
        //public IEnumerable<Tasktype> Retrieve()
        //{
        //    using (var context = new IMOSContext())
        //    {
        //        return context.Tasktypes.ToList();
        //    }
        //}


        //[HttpGet("GetALLTasktypes")]
        //public List<Tasktype> GetALLTasktypes( )
        //{
        //   // List<Tasktype> tasktypes = this._dbContext.GetAllTaskTypes().ToList();

        //    var record = _dbContext.GetAllTaskTypes().ToList();

        //    return record;
        //}

        //[HttpPost("AddTasktypes")]
        //public IActionResult AddTasktypes (string Description)
        //{
        //    using var context = new IMOSContext();
        //    var message = "";

        //    var recordInDb = _dbContext.Tasktypes
        //             .FirstOrDefault(item => item.Description.ToLower() == Description.ToLower());


        //    if (recordInDb != null)
        //    {
        //        message = "Record already exist";
        //        return BadRequest(new { message });
        //    }

            
        //    try
        //    {
        //        var parameters = new[]
        //        {
        //             new SqlParameter("@DESCRIPTION", SqlDbType.NVarChar)
        //             {
        //              Direction = ParameterDirection.Input,
        //              Value = Description,
        //             }
        //        };

        //        context.Database.ExecuteSqlRaw("exec ADDTASKTYPE @DESCRIPTION", parameters: parameters);
        //        return Ok();

        //    }

        //    catch (Exception ex)
        //    {
        //        message = ex.Message;
        //        return Ok();
        //    }
        //}


        //[HttpPut("UpdateTasktypes/{id}")]
        //public IActionResult AddTasktypes(int id,string Description)
        //{
        //    using var context = new IMOSContext();
        //    var message = "";

        //    var recordInDb = _dbContext.Tasktypes
        //             .FirstOrDefault(item => item.Description.ToLower() == Description.ToLower());


        //    if (recordInDb != null)
        //    {
        //        message = "Record already exist";
        //        return BadRequest(new { message });
        //    }


        //    try
        //    {
        //        var parameters = new[]
        //        {
        //            new SqlParameter("@TASKTYPE_ID", SqlDbType.Int)
        //            {
        //                Direction = ParameterDirection.Input,
        //                Value=id,
        //            },

        //             new SqlParameter("@DESCRIPTION", SqlDbType.NVarChar)
        //             {
        //              Direction = ParameterDirection.Input,
        //              Value = Description,
        //             }
        //        };

        //        context.Database.ExecuteSqlRaw("exec UPDATETASKTYPE @TASKTYPE_ID, @DESCRIPTION", parameters: parameters);
        //        return Ok();

        //    }

        //    catch (Exception ex)
        //    {
        //        message = ex.Message;
        //        return Ok();
        //    }


        //}

        //[HttpDelete("DeleteTasktypes/{Id}")]
        //public async Task<ActionResult<Tasktype>> DeleteTasktypes(int Id)
        //{
        //    using var context = new IMOSContext();
        //    var message = "";

        //    var recordInDb = await _dbContext.Tasktypes.FindAsync(Id);

        //    if (recordInDb == null)
        //    {
        //        message = "Record not found";
        //        return NotFound();
        //    }

        //    try
        //    {
        //        var parameters = new[]
        //        {
        //            new SqlParameter("@TASKTYPE_ID", SqlDbType.Int)
        //            {
        //                Direction = ParameterDirection.Input,
        //                Value=Id,
        //            }

        //        };

        //        context.Database.ExecuteSqlRaw("exec DELETETASKTYPE @TASKTYPE_ID", parameters: parameters);
        //        return Ok();

        //    }

        //    catch (Exception ex)
        //    {
        //        message = ex.Message;
        //        return Ok();
        //    }



        //}

    }
}

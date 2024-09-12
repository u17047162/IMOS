
using IMOSApi.Dtos.Task;
using IMOSApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Task = IMOSApi.Models.Task;

namespace IMOSApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly IMOSContext _dbContext;
        public TaskController(IMOSContext dbContext)
        {
            _dbContext = dbContext;
        }


        [HttpGet("GetAllTasks")]
        public ActionResult<IEnumerable<GetTaskDto>> GetAllTasks()
        {
            var recordInDb = _dbContext.Tasks
                .Include(item => item.TasktypeNavigation)
                .Select(item => new GetTaskDto()
                {
                    Description = item.Description,
                    Startdate = item.Startdate.ToString("g"),
                    Enddate = item.Enddate.ToString("g"),
                    TasktypeDescription = item.TasktypeNavigation.Description,
                    StatusName = item.Taskcompletionstatus.name

                }).OrderBy(item => item.Description).ToList();
            return recordInDb;

        }



        /*  [HttpGet("GetTaskBYProject/{id}")]
          public List<Task> GetTaskBYProject(GetTaskDto model, int id)
          {

              var recordInDb = _dbContext.Tasks
                  .Include(item => item.Taskcompletionstatus)
                  .Include(item => item.TasktypeNavigation)
                  .Where(item => item.ProjectId == id)
                  .Select(item => new GetTaskDto()
                  {
                      TasktypeDescription = item.TasktypeNavigation.Description,
                      StatusName = item.Taskcompletionstatus.name,
                      Startdate = item.Startdate.ToString("f"),
                      Enddate = item.Enddate.ToString("f"),
                      Description = item.Description,
                      Qnapassed = item.Qnapassed,
                  }
                  ).OrderBy(item => item.StatusName).ToList();



              return recordInDb



          }*/


        [HttpGet("GetTaskBYProject/{id}")]
        public ActionResult<IEnumerable<GetTaskDto>> GetTaskDto(int id)
        {
            var recordInDb = _dbContext.Tasks
               .Include(item => item.Taskcompletionstatus)
               .Include(item => item.TasktypeNavigation)
               .Where(item => item.ProjectId == id)
               .Select(item => new GetTaskDto()
               {
                   TaskId = item.TaskId,
                   TasktypeDescription = item.TasktypeNavigation.Description,
                   StatusName = item.Taskcompletionstatus.name,
                   Startdate = item.Startdate.ToString("f"),
                   Enddate = item.Enddate.ToString("f"),
                   Description = item.Description,
                   Qnapassed = item.Qnapassed,
               }
               ).OrderBy(item => item.StatusName).ToList();

            return recordInDb;
        }


        [HttpPost("AddTask/{Id}")]

        public async Task<ActionResult<Models.Task>> AddTask([FromBody] AddOrUpdateTaskDto model, int Id)
        {
            var message = "";
            var recordInDb = await _dbContext.Projects.FindAsync(Id);
            if (recordInDb == null)
            {
                return NotFound();
            }

            else if (ModelState.IsValid)

            {
                try
                {
                    var newRecord = new Models.Task()
                    {
                        Description = model.Description,
                        Startdate = model.Startdate,
                        Enddate = model.Enddate,
                        TaskTypeId = model.TasktypeId,
                        ProjectId = Id,
                        Qnapassed = 1,
                        TaskStatusId = 2
                    };


                    _dbContext.Tasks.Add(newRecord);

                }
                catch (Exception e)
                {
                    Console.WriteLine(e.InnerException.Message);
                    return BadRequest(e.Message);
                }

                _dbContext.SaveChanges();
                return Ok();
            }


            message = "Something went wrong on your side.";
            return BadRequest(new { message });
        }





        [HttpPut("UpdateTask/{Id}")]
        public IActionResult UpdateTask([FromBody] AddOrUpdateTaskDto model, int Id)
        {
            if (ModelState.IsValid)
            {
                var recordInDb = _dbContext.Tasks.FirstOrDefault(item => item.TaskId == Id);

                if (recordInDb == null)
                {
                    return NotFound();
                }


                recordInDb.Startdate = model.Startdate;
                recordInDb.Enddate = model.Enddate;
                recordInDb.Description = model.Description;
                recordInDb.TaskTypeId = model.TasktypeId;

                _dbContext.SaveChanges();
                return Ok();

            }

            var message = "Something went wrong on your side.";
            return BadRequest(new { message });

        }



        [HttpDelete("DeleteTask/{Id}")]

        public async Task<ActionResult<Models.Task>> DeleteTask(int Id)
        {
            var recordInDb = await _dbContext.Tasks.FindAsync(Id);

            if (recordInDb == null)
            {
                return NotFound();
            }

            _dbContext.Tasks.Remove(recordInDb);
            await _dbContext.SaveChangesAsync();

            return Ok();

        }



        [HttpGet("GetAllTaskTypes")]
        public ActionResult<IEnumerable<GetTaskTypeDto>> GetAllTaskTypes()
        {
            var recordInDb = _dbContext.Tasktypes
                .Select(item => new GetTaskTypeDto()
                {
                    Description = item.Description,
                    TasktypeId = item.TasktypeId,

                }).ToList();

            return recordInDb;
        }


        [HttpPost("AddTaskType")]
        public IActionResult AddTaskType(AddOrUpdateTaskType model)
        {
            var message = "";

            if (ModelState.IsValid)
            {
                var recordInDb = _dbContext.Tasktypes
                    .FirstOrDefault(item => item.Description.ToLower() == model.Description.ToLower());

                if (recordInDb != null)
                {
                    message = "Record already exist";
                    return BadRequest(new { message });
                }

                var NewRecord = new Tasktype()
                {
                    Description = model.Description,
                };

                _dbContext.Tasktypes.Add(NewRecord);
                _dbContext.SaveChanges();
                return Ok();


            }

            message = "Something went wrong on your side.";
            return BadRequest(new { message });


        }

        [HttpPut("UpdateTaskType/{Id}")]
        public IActionResult UpdateTaskType(AddOrUpdateTaskType model, int Id)
        {
            if (ModelState.IsValid)
            {

                var recordInDb = _dbContext.Tasktypes
                    .FirstOrDefault(item => item.TasktypeId == Id);

                if (recordInDb == null)
                {
                    return NotFound();
                }

                recordInDb.Description = model.Description;

                _dbContext.SaveChanges();
                return Ok();

            }
            var message = "Something went wrong on your side.";
            return BadRequest(new { message });

        }



        [HttpDelete("DeleteTaskType/{Id}")]
        public async Task<ActionResult<Tasktype>> DeleteTaskType(int Id)
        {
            var recordInDb = await _dbContext.Tasktypes.FindAsync(Id);

            if (recordInDb == null)
            {
                return NotFound();
            }

            _dbContext.Tasktypes.Remove(recordInDb);
            await _dbContext.SaveChangesAsync();

            return Ok();

        }


        [HttpGet("GetAllTaskStatus")]
        public ActionResult<IEnumerable<GetTaskStatus>> GetAllTaskStatus()
        {
            var recordInDb = _dbContext.Taskcompletionstatus
                .Select(item => new GetTaskStatus()
                {
                    TaskStatusId = item.TaskStatusId,
                    Name = item.name,
                }).ToList();

            return recordInDb;
        }


        [HttpPost("AddTaskStatus")]
        public IActionResult AddTaskStatus(AddOrUpdateTaskStatus model)
        {
            var message = "";

            if (ModelState.IsValid)
            {
                var recordInDb = _dbContext.Taskcompletionstatus
                    .FirstOrDefault(item => item.name.ToLower() == model.Name.ToLower());

                if (recordInDb != null)
                {
                    message = "Record already exist";
                    return BadRequest(new { message });
                }

                var NewRecord = new TaskCompletionStatus()
                {
                    name = model.Name,
                };

                _dbContext.Taskcompletionstatus.Add(NewRecord);
                _dbContext.SaveChanges();
                return Ok();


            }

            message = "Something went wrong on your side.";
            return BadRequest(new { message });


        }


        [HttpPut("UpdateTaskStatus/{Id}")]
        public IActionResult UpdateTaskStatus(AddOrUpdateTaskStatus model, int Id)
        {
            if (ModelState.IsValid)
            {

                var recordInDb = _dbContext.Taskcompletionstatus
                    .FirstOrDefault(item => item.TaskStatusId == Id);

                if (recordInDb == null)
                {
                    return NotFound();
                }

                recordInDb.name = model.Name;

                _dbContext.SaveChanges();
                return Ok();

            }
            var message = "Something went wrong on your side.";
            return BadRequest(new { message });

        }


        [HttpDelete("DeleteTaskStatus/{Id}")]
        public async Task<ActionResult<TaskCompletionStatus>> DeleteTaskStatus(int Id)
        {
            var recordInDb = await _dbContext.Taskcompletionstatus.FindAsync(Id);

            if (recordInDb == null)
            {
                return NotFound();
            }

            _dbContext.Taskcompletionstatus.Remove(recordInDb);
            await _dbContext.SaveChangesAsync();

            return Ok();

        }


        [HttpPut]
        [Route("ManageTaskstatus/{TaskId}/{TaskstatusId}")]

        public object ApproveMaterialRequest(int TaskstatusId, int TaskId)
        {
            var recordInDB = _dbContext.Tasks

                .FirstOrDefault(item => item.TaskId == TaskId);

            if (recordInDB == null)
            {
                return NotFound();
            }


            try
            {

                recordInDB.TaskStatusId = TaskstatusId;
                _dbContext.SaveChanges();

                return Ok();

            }

            catch (Exception e)
            {
                Console.WriteLine(e.InnerException.Message);
                return BadRequest(e.Message);
            }
        }
    }
}
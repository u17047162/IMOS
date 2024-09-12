
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IMOSApi.Models;
using System.Dynamic;
using IMOSApi.Dtos.Task;
using Microsoft.EntityFrameworkCore;

namespace IMOSApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RepositoryController : ControllerBase
    {

        private readonly IRepository _repository;
        private readonly IMapper _mapper;

        public RepositoryController(IRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }


        [HttpGet]
        [Route("GetTaskDashboard/{Id}")]

       public async Task<ActionResult<dynamic>> GetTaskDashboard(int Id)
        {

            var reportData = await _repository.GetTasksBoard(Id);


   

            try
            {

                List<dynamic> taskboard = new List<dynamic>();

                dynamic CompleteTasks = reportData
                    .Where(item => item.TaskStatusId == 1)
                    .GroupBy(p => p.Taskcompletionstatus.name)
                    .Select(b => new 
                    {
                    
                        TaskStatusName = b.Key,
                        CompleteTasksCount = b.Count()
                    });

              dynamic IncompleteTasks = reportData
              .Where(item => item.TaskStatusId == 2)
              .GroupBy(p => p.Taskcompletionstatus.name)
              .Select(b => new
              {
                  TaskStatusName = b.Key,
                  IncompleteTasksCount = b.Count()
              });

                dynamic DiscontinuedTasks = reportData
           .Where(item => item.TaskStatusId == 6)
           .GroupBy(p => p.Taskcompletionstatus.name)
           .Select(b => new
           {
               TaskStatusName = b.Key,
               DiscontinuedTasksCount = b.Count()
           });


                taskboard.Add(CompleteTasks);
                taskboard.Add(IncompleteTasks);
                taskboard.Add(DiscontinuedTasks);

                return taskboard;

            }

            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Internal Server Error. Please contact support.");
            }

        }


      


        /*   [HttpGet]
           [Route("Dashboard")]

           public async Task<ActionResult<dynamic>> Dashboard()
           {
               try
               {
                   List<dynamic> taskboard = new List<dynamic>();

                   var results = await _repository.GetTasksBoard();

                   dynamic CompletedTasks = results
                       .Where(item => item.TaskStatusId == 1)
                       .GroupBy(p => p.Taskcompletionstatus.name)

                       .Select(b => new
                       {
                           Key = b.Key,
                           TaskCount = b.Count()

                       });

                   dynamic IncompleteTasks = results
                       .Where(item => item.TaskStatusId == 2)
                       .GroupBy(p => p.Taskcompletionstatus.name)
                       .Select(b => new
                       {
                           Key = b.Key,
                           TaskCount = b.Count()
                       });

                   taskboard.Add(IncompleteTasks);
                   taskboard.Add(CompletedTasks);

                   return taskboard;
               }

               catch (Exception)
               {
                   return StatusCode(StatusCodes.Status500InternalServerError, "Internal Server Error. Please contact support.");
               }

           }*/
    }
}

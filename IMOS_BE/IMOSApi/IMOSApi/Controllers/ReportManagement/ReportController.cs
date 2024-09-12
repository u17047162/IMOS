using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using IMOSApi.Models;
using System.Dynamic;
using IMOSApi.Dtos.Task;
using IMOSApi.Dtos.Incident;
using IMOSApi.Dtos.Vehicle;
using IMOSApi.Dtos.ProjectMaterials;

namespace IMOSApi.Controllers.ReportManagement
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReportController : ControllerBase
    {
        //private readonly IMOSContext db = new IMOSContext();

        private readonly IMOSContext _context;

        public ReportController(IMOSContext context)
        {
            _context = context;
        }


        [HttpPost]
        [Route("GetTaskBetwenDates/{Id}")]
        public dynamic GetTaskBetwenDates([FromBody] AddOrUpdateTaskDto Dates, int Id)
        {
            var recordInDb = _context.Tasks
               .Include(item => item.Taskcompletionstatus)
               .Include(item => item.TasktypeNavigation)
               .Include(item => item.Project)
               .Where(item => item.Startdate > Dates.Startdate && item.Enddate < Dates.Enddate && item.TaskStatusId == Id)
               .Select(item => new GetTaskDto()
               {
                   TaskId = item.TaskId,
                   Description = item.Description,
                   Enddate = item.Enddate.ToString("f"),
                   Startdate = item.Startdate.ToString("f"),
                   StatusName = item.Taskcompletionstatus.name,
                   TasktypeDescription = item.TasktypeNavigation.Description,
                   projectName = item.Project.Name
               }).ToList();

            return recordInDb;

        }


        [HttpGet]
        [Route("GetTasksPerProject/{Id}")]
        public dynamic GetTasksPerProject(int Id)
        {
            var recordInDb = _context.Tasks
                .Include(item => item.Taskcompletionstatus)
                .Include(item => item.TasktypeNavigation)
                .Include(item => item.Project)
                .Where(item => item.ProjectId == Id)
                .Select(item => new GetTaskDto()
                {
                    TaskId = item.TaskId,
                    Description = item.Description,
                    Enddate = item.Enddate.ToString("f"),
                    Startdate = item.Startdate.ToString("f"),
                    StatusName = item.Taskcompletionstatus.name,
                    TasktypeDescription = item.TasktypeNavigation.Description,
                    projectName = item.Project.Name

                }).ToList();

            return recordInDb;
        }



        [HttpGet]
        [Route("GetAllTasks")]
        public dynamic GetAllTasks()
        {
            var recordInDb = _context.Tasks
                .Include(item => item.Taskcompletionstatus)
                .Include(item => item.TasktypeNavigation)
                .Include(item => item.Project)
                .Select(item => new GetTaskDto()
                {
                    TaskId = item.TaskId,
                    Description = item.Description,
                    Enddate = item.Enddate.ToString("f"),
                    Startdate = item.Startdate.ToString("f"),
                    StatusName = item.Taskcompletionstatus.name,
                    TasktypeDescription = item.TasktypeNavigation.Description,
                    projectName = item.Project.Name

                }).ToList();

            return recordInDb;
        }


        [HttpGet]
        [Route("GetIncidentsPerProject/{Id}")]
        public dynamic GetIncidentsPerProject(int Id)
        {
            var recordInDb = _context.Incidents
                .Include(item => item.Projects)
                .Where(item => item.ProjectId == Id)
                .Select(item => new GetIncidentsDto()
                {
                    ProjectId = item.ProjectId,
                    Date = item.Date.ToString("f"),
                    Description = item.Description,
                    ProjectName = item.Projects.Name,

                }).ToList();

            return recordInDb;
        }

        [HttpGet]
        [Route("GetProjectMaterial/{Id}")]
        public dynamic GetProjectMaterial(int Id)
        {
            var recordInDb = _context.Projectmaterial
                .Include(item => item.Material)
                .Include(item => item.Project)
                .Where(item => item.ProjectId == Id)
                .Select(item => new GetProjectMaterialDto
                {
                    MaterialName = item.Material.Name,
                    MaterialTypeName = item.Material.Materialtype.Name,
                    TypeDescription = item.Material.Materialtype.Description,
                    Quantity = item.Quantity
                    
                }).OrderBy(item => item.MaterialName).ToList();
                

            return recordInDb;
        }





        [HttpGet]
        [Route("GetALLIncidents")]
        public dynamic GetALLIncidents()
        {
            var recordInDb = _context.Incidents
                .Include(item => item.Projects)
                .Select(item => new GetIncidentsDto()
                {
                    ProjectId = item.ProjectId,
                    Date = item.Date.ToString("f"),
                    Description = item.Description,
                    ProjectName = item.Projects.Name,

                }).ToList();

            return recordInDb;
        }



        [HttpGet]
        [Route("GetALLVehicles")]
        public dynamic GetALLVehicles()
        {
            var recordInDb = _context.Vehicles
                .Include(item => item.Vehicletype)
                .Include(item => item.ModelId).
                Include(item => item.Model)
                .Select(item => new GetVehicleDto()
                {
                    Id = item.VehicleId,
                    ModelId = item.ModelId,
                    BrandId = item.BrandId,
                    Year = item.Model.Year,
                    AssignedStatus = item.AssignedStatus,
                    DatePurchased = item.DatePurchased.ToString("f"),
                    Vehicletype = item.Vehicletype.Description,
                    VehicletypeId = item.VehicletypeId

                }).ToList();

            return recordInDb;
        }
    }
}

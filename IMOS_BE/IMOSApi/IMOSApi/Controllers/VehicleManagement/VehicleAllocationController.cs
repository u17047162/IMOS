using IMOSApi.Dtos.User;
using IMOSApi.Dtos.Vehicle;
using IMOSApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Controllers.VehicleManagement
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehicleAllocationController : ControllerBase
    {
        private readonly IMOSContext _context;
        public VehicleAllocationController(IMOSContext context)
        {
            _context = context;
        }

      /*  [HttpGet("GetAll/NotAssigned")]
        public ActionResult<IEnumerable<GetVehicleDto>> GetAllVehiclesNotAssigned()
        {
            var recordsInDb = _context.Vehicles
                .Include(item => item.Vehicletype)
                .Where(item => item.VehicleStatus == false)
                .Select(item => new GetVehicleDto()
                {
                    Id = item.VehicletypeId,
                    Make = item.Make,
                    Model = item.Model,
                    Year = item.Year,
                    Color = item.Color,
                    VehicleStatus = item.VehicleStatus ? "Assigned" : "Not Assigned",
                    DatePurchased = item.DatePurchased,
                    LastServiced = item.LastServiced,

                    Vehicletype = item.Vehicletype.Description,
                    VehicletypeId = item.VehicletypeId

                }).OrderBy(item => item.Vehicletype).ToList();
            return recordsInDb;
        }*/

        [HttpGet("GetAll/Users/NotAssigned/{userRole}")]
        public ActionResult<IEnumerable<GetUserDto>>GetAllUsersToAssign( string userRole)
        {
            var recordsInDb=_context.Users
                .Include(item=>item.Userrole).
                Include(item=>item.Employee)
                .Where(item=>item.Userrole.Description.ToLower()==userRole.ToLower())
                .Select(item=>new GetUserDto()
                {
                    Id=item.UserroleId,
                    UserroleId=item.UserroleId,
                    Username=item.Username,
                    // add employee && userrole description => Fix Dto
                   // Description=item.Userrole.Description,
                }).OrderBy(item => item.Username).ToList();
            return recordsInDb;
        }
        [HttpPost("Assign")]
        public IActionResult AssignUserToVehicle()
        {

            return Ok();
        }
    }
}

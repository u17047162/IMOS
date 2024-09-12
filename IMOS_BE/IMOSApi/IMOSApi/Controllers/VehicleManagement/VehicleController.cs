using IMOSApi.Dtos.Vehicle;
using IMOSApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Web;
using System.Net.Http;

using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Controllers.VehicleManagement
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehicleController : ControllerBase
    {
        private readonly IMOSContext _context;
        public VehicleController(IMOSContext context)
        {
            _context = context;
        }

         [HttpGet("GetVehicleById/{id}")]
         public ActionResult<GetVehicleDto> GetRecord(int id)
         {
             var recordInDb = _context.Vehicles
                 .Where(item => item.VehicleId == id)
                 .Include(item=>item.Vehicletype)
                 .Include(item=>item.Brand)
                 .Include(item=>item.Model)
                 .Select(item => new GetVehicleDto()
                 {
                     Id = item.VehicleId,
                     //Year = item.Model.Year.ToString("f" + ""),
                     Color = item.Model.Color,
                     //AssignedStatus=item.AssignedStatus ? "Assigned" : "Not Assigned",
                     DatePurchased = item.DatePurchased.ToString("f" + ""),
                     Vehicletype = item.Vehicletype.Description,
                     VehicletypeId = item.VehicletypeId
                 }).First();
             if (recordInDb == null)
             {
                 return NotFound();
             }
             return recordInDb;
         }

        [HttpGet("GetAllVehicles")]
        public ActionResult<IEnumerable<GetVehicleDto>> GetAll()
        {
            var recordsInDb = _context.Vehicles
            .Include(item => item.Brand)
            .Where(item => item.BrandId == item.BrandId)
            .Include(item => item.Vehicletype)
              .Include(item => item.Model)
            .Select(item => new GetVehicleDto()
            {
                Id = item.VehicleId,
                BrandId = item.BrandId,
                Name = item.Brand.Name,
                Vehicletype = item.Vehicletype.Description,
                VehicletypeId = item.VehicletypeId,
                ModelId = item.ModelId,
                ModelName = item.Model.Name,

                // Year = item.Model.Year.ToString("f"),
                AssignedStatus = item.AssignedStatus,
                // DatePurchased = item.DatePurchased.ToString("f")
            }).OrderBy(item => item.Id).ToList();
            return recordsInDb;
        }

        [HttpPost("AddVehicle")]
        public async Task< IActionResult> Add(AddOrUpdateVehicleDto model)
        {
            var message = "";
            if (ModelState.IsValid)
            {
                var recordInDb = _context.Vehicles.FirstOrDefault(item => item.DatePurchased == model.DatePurchased);
                if (recordInDb != null)
                {
                    message = "Record already exist";
                    return BadRequest(new { message });
                }

                var newRecord = new Vehicle
                {
                    BrandId = model.BrandId,
                    VehicletypeId = model.VehicletypeId,
                    ModelId = model.ModelId,
                    DatePurchased = model.DatePurchased,
                    AssignedStatus = 1,
                };

                _context.Vehicles.Add(newRecord);
                int i = 3;
                await _context.SaveChangesAsync(i);
                return Ok();
            }
            message = "Something went wrong on your side.";
            return BadRequest(new { message });
        }

          [HttpPut("updateVehicle/{id}")]
          public async Task<IActionResult> Update(AddOrUpdateVehicleDto model, int id)
          {
              if (ModelState.IsValid)
              {
                  var recordInDb = _context.Vehicles.FirstOrDefault(item => item.VehicleId == id);

                  if (recordInDb == null)
                  {
                      return NotFound();
                  }

                  recordInDb.BrandId = model.BrandId;
                  recordInDb.VehicletypeId = model.VehicletypeId;
                  recordInDb.ModelId = model.ModelId;
              //    recordInDb.VehicleStatus = false;
                  recordInDb.DatePurchased = model.DatePurchased;
                //    recordInDb.LastServiced = model.LastServiced;
                int i = 3;
                await _context.SaveChangesAsync(i);
                return Ok();
              }

              var message = "Something went wrong on your side.";
              return BadRequest(new { message });

          }

        [HttpDelete("DeleteVehicle/{id}")]
        public async Task<ActionResult<Vehicle>> Delete(int id)
        {
            var recordInDb = await _context.Vehicles.FindAsync(id);
            if (recordInDb == null)
            {
                return NotFound();
            }

            _context.Vehicles.Remove(recordInDb);
            int i = 3;
            await _context.SaveChangesAsync(i);
            return Ok();
        }

        [HttpGet("RemoveAssignmentVehicle/{id}")]
        public IActionResult RemoveAssignmentVehicle(int id)
        {
            var message = "";

            var vehilceInDb = _context.Vehicles
            .FirstOrDefault(item => item.VehicleId == id);
            if (vehilceInDb == null)
            {
                message = "Vehicle not found";
                return BadRequest(new { message });
            }

            try
            {

                vehilceInDb.AssignedStatus = 1;

                _context.SaveChanges();


                return Ok();

            }

            catch (Exception ex)
            {
                message = ex.Message;
                return Ok();
            }

        }


        [HttpPost("AssignForemanToVehicle")]
        public IActionResult AssignForemantoVehicle(AssignForemanToVehicle model)
        {
            var message = "";

            var ForemanInDb = _context.Users
                 .Include(item => item.Userrole)
                 .FirstOrDefault(item => item.UserId == model.UserId);
            try
            {


                if (ForemanInDb.UserroleId != 1)
                {
                    message = "Only foreman can be assigned a vehicle";
                    return BadRequest(new { message });
                }
                else if (ForemanInDb == null)
                {
                    message = "Foreman not found";
                    return BadRequest(new { message });
                }

                var vehilceInDb = _context.Vehicles
                    .FirstOrDefault(item => item.VehicleId == model.VehicleId);
                if (vehilceInDb == null)
                {
                    message = "Vehicle not found";
                    return BadRequest(new { message });
                }

                var newAssignment = new UserVehicle()
                {
                    Vehicle_Id = vehilceInDb.VehicleId,
                    User_Id = ForemanInDb.UserId,
                };

                _context.UserVehicle.Add(newAssignment);
                vehilceInDb.AssignedStatus = 2;

                _context.SaveChanges();


                return Ok();

            }

            catch (Exception ex)
            {
                message = ex.InnerException.Message;
                return BadRequest(new { message });
            }




        }


        [HttpPut("UploadVehiclePhoto/{VehicleId}")]
        public IActionResult UploadVehiclePhoto([FromBody] UploadVehicleDto model, int VehicleId)
        {
            var message = "";
            if (!ModelState.IsValid)
            {
                message = "Something went wrong on your side!";
                return BadRequest(new { message });
            }

            var vehicle = _context.Vehicles
                .Where(item => item.VehicleId == VehicleId)
                .FirstOrDefault();

            if (vehicle == null)
            {
                return NotFound();
            }

            vehicle.ImageUrl = model.ImageUrl;
            _context.SaveChanges();
            return Ok();
        }
    }
}


      /*  [HttpGet("GetUnAssignedVehicles")]
        public ActionResult<IEnumerable<GetVehicleDto>> GetUnAssignedVehicles()
        {
            var message = "";

            var recordInDb = _context.Vehicles
                .Include(item => item.Vehicletype)
                .Where(item => item.AssignedStatus == 1)
                .Select(item => new GetVehicleDto()
                {
                    Id = item.VehicleId,
                    Make = item.Make,
                    Model = item.Model,
                    Year = item.Year.ToString("f"),
                    Color = item.Color,
                    DatePurchased = item.DatePurchased.ToString("f"),
                    AssignedStatus = item.AssignedStatus,
                    Vehicletype = item.Vehicletype.Description,
                    VehicletypeId = item.VehicletypeId
                }).OrderBy(item => item.Make).ToList();

            if(recordInDb == null)
            {
                message = "All Vehicles have been Assigned";
                return BadRequest(new { message });
            }



            return recordInDb;
        }

        [HttpGet("GetUserVehicles")]
        public ActionResult<IEnumerable<UserVehicleDto>> GetUserVehicles()
        {
            

            var recordsInDb =_context.Vehicles
                .Include(item => item.UserVehicle)
                .Include(item => item.Vehicletype)
                .Where(item => item.AssignedStatus == 2)
                .Select(item => new UserVehicleDto ()
                {
                    vehicleId = item.VehicleId,
                    Make= item.Make,
                    Model = item.Model,
                    DatePurchased= item.DatePurchased.ToString("f"),
                    Color = item.Color,
                    Vehicletype = item.Vehicletype.Description,
                    Year = item.Year.ToString("f"),
                  
                   
                }).OrderBy(item => item.Make).ToList();


            return recordsInDb;
        }

        [HttpGet("GetForemanVehicles")]
        public ActionResult<IEnumerable<UserVehicleDto>> GetForemanVehicles()
        {


            var recordsInDb = _context.UserVehicle
                .Include(item => item.User.Employee)
                .Include(item => item.Vehicle.Vehicletype)
                .Where(item => item.Vehicle.AssignedStatus == 2)
                .Select(item => new UserVehicleDto()
                {
                    vehicleId = item.Vehicle.VehicleId,
                    Make = item.Vehicle.Make,
                    Model = item.Vehicle.Model,
                    DatePurchased = item.Vehicle.DatePurchased.ToString("f"),
                    Color = item.Vehicle.Color,
                    Vehicletype = item.Vehicle.Vehicletype.Description,
                    Year = item.Vehicle.Year.ToString("f"),
                    Name = item.User.Employee.Name,
                }).OrderBy(item => item.Make).ToList();


            return recordInDb;
        }







    }

}*/


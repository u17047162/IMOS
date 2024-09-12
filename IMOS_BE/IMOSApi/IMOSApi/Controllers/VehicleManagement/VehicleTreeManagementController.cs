using IMOSApi.Dtos.VehicleTree;
using IMOSApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Controllers.VehicleManagement
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehicleTreeManagementController : ControllerBase
    {
        private readonly IMOSContext _context;
        public VehicleTreeManagementController(IMOSContext context)
        {
            _context = context;
        }

        #region Vehicle Types  Management
       
        //GetAll;   GetBy Id;    Add;   Update;  Delete

        [HttpGet("GetAllVehicleTypes")]
        public ActionResult<IEnumerable<GetVehicleTypes>> GetAll()
        {
            var recordIndbs= _context.Vehicletypes
               .Select(item => new GetVehicleTypes()
               {
                   Id=item.VehicletypeId,
                   Description=item.Description,
               }).OrderBy(item => item.Id).ToList();
            return recordIndbs;
        }

        [HttpGet("GetById/{id}")]
        public ActionResult<GetVehicleTypes> GetById(int id)
        {
            var recordiInDb = _context.Vehicletypes
                .Where(item => item.VehicletypeId == id)
                .Select(item => new GetVehicleTypes()
                {
                    Id = item.VehicletypeId,
                    Description = item.Description,
                }).FirstOrDefault();
            if (recordiInDb == null)
            {
                return NotFound();
            }

            return recordiInDb;
        }


        [HttpPost("AddVehicleType")]
        public async Task< IActionResult> Add(AddOrUpdateVehicleTypeDto model)
        {
            var message = "";
            if (ModelState.IsValid)
            {
                var recordInDb = _context.Vehicletypes.FirstOrDefault(item => item.Description.ToLower() == model.Description.ToLower());
                if (recordInDb != null)
                {
                    message = "Record already exist";
                    return BadRequest(new { message });
                }

                var newType = new Vehicletype()
                {
                    Description = model.Description,
                };

                _context.Vehicletypes.Add(newType);
                int i = 3;
                await _context.SaveChangesAsync(i);
                return Ok();
            }

            message = "Something went wrong on your side.";
            return BadRequest(new { message });
        }

        [HttpPut("UpdateVehicleType/{id}")]
        public async Task< IActionResult> UpdateClient(AddOrUpdateVehicleTypeDto model, int id)
        {
            if (ModelState.IsValid)
            {
                var recordInDb = _context.Vehicletypes.FirstOrDefault(item => item.VehicletypeId == id);
                if (recordInDb == null)
                {
                    return NotFound();
                }

                recordInDb.Description = model.Description;
                int i = 3;
                await _context.SaveChangesAsync(i);
                return Ok();
            }

            var message = "Something went wrong on your side.";
            return BadRequest(new { message });
        }

        [HttpDelete("DeleteVehicleType/{id}")]
        public async Task<ActionResult<Vehicletype>> Delete(int id)
        {
            var recordInDb = await _context.Vehicletypes.FindAsync(id);
            if (recordInDb == null)
            {
                return NotFound();
            }

            _context.Vehicletypes.Remove(recordInDb);
            int i = 3;
            await _context.SaveChangesAsync(i);
            return Ok();
        }

        #endregion

        #region Brands Management

        //GetAll;   GetBy Id;   Add;   Update;  Delete

        [HttpGet("GetAll")]
        public ActionResult<IEnumerable<GetBrands>> GetAllTypes()
        {
            var recordIndbs = _context.Vehiclemakes
               .Select(item => new GetBrands()
               {
                   Id = item.VehicletypeId,
                   Name = item.Name,
               }).OrderBy(item => item.Id).ToList();
            return recordIndbs;
        }

        [HttpGet("GetBrandByType/{id}")]
        public ActionResult<IEnumerable<GetBrands>> GetBrandByTypeId(int id)
        {
            var recordIndbs = _context.Vehiclemakes
                .Where(item=>item.VehicletypeId==id)
               .Select(item => new GetBrands()
               {
                   Id = item.BrandId,
                   Name = item.Name,
                   VehicletypeId=id,
               }).OrderBy(item => item.Id).ToList();
            return recordIndbs;
        }

        [HttpPost("AddBrand/{id}")]
        public async Task<ActionResult<Vehiclemake>> AddBrandByType(AddOrUpdateBrands model, int Id)
        {
            var message = "";
            var recordInDb = await _context.Vehicletypes.FindAsync(Id);
            if (recordInDb == null)
            {
                return NotFound();
            }
            else if (ModelState.IsValid)
            {
                var newRecord = new Vehiclemake()
                {
                    VehicletypeId = Id,
                    Name=model.Name

                };

                _context.Vehiclemakes.Add(newRecord);
                int i = 3;
                await _context.SaveChangesAsync(i);
                return Ok();
            }
            message = "Something went wrong on your side.";
            return BadRequest(new { message });
        }

        [HttpPut("UpdateBrand/{id}")]
        public async Task< IActionResult >UpdateTypes(AddOrUpdateBrands model, int Id)
        {
            if (ModelState.IsValid)
            {
                var recordInDb = _context.Vehiclemakes.FirstOrDefault(item => item.BrandId == Id);
                if (recordInDb == null)
                {
                    return NotFound();
                }

                recordInDb.Name = model.Name;
                int i = 3;
                await _context.SaveChangesAsync(i);
                return Ok();
            }
            var message = "Something went wrong on your side.";
            return BadRequest(new { message });
        }

        [HttpDelete("DeleteBrand/{id}")]
        public async Task<ActionResult<Vehiclemake>> DeleteBrand(int id)
        {
            var recordInDb = await _context.Vehiclemakes.FindAsync(id);

            if (recordInDb == null)
            {
                return NotFound();
            }

            var brandsTypes = _context.Vehicletypes.Where(item => item.VehicletypeId == id);
            _context.Vehicletypes.RemoveRange(brandsTypes);
            int i = 3;
            await _context.SaveChangesAsync(i);

            var modelbrandsTypes = _context.Vehiclemodels.Where(item => item.BrandId == id);
            _context.Vehiclemodels.RemoveRange(modelbrandsTypes);
            await _context.SaveChangesAsync(i);

            var vehiclemodels = _context.Vehicles.Where(item => item.BrandId == id);
            _context.Vehicles.RemoveRange(vehiclemodels);
            await _context.SaveChangesAsync(i);

            _context.Vehiclemakes.Remove(recordInDb);
            await _context.SaveChangesAsync(i);
            return Ok();

        }

        #endregion

        #region Model Brands Management
        //GetAll;    GetBy Id;     Add;     Update;    Delete
        [HttpGet("GetAllModelTypes")]
        public ActionResult<IEnumerable<GetModelsTypes>> GetAllModelTypes()
        {
            var recordIndbs = _context.Vehiclemodels
               .Select(item => new GetModelsTypes()
               {
                   Id = item.BrandId,
                   Name = item.Name,
                   Color = item.Color,
                   Year = item.Year

               }).OrderBy(item => item.Year).ToList();
            return recordIndbs;
        }

        [HttpGet("GetModelByBrand/{id}")]
        public List<Vehiclemodel> GetByBrandId(int id)
        {
            var recordInDb = _context.Vehiclemodels
                .Where(item => item.BrandId == id).ToList();

            return recordInDb;
        }


         [HttpGet("GetModelsByBrands/{id}")]
         public ActionResult<IEnumerable<GetModelsTypes>>GetAllModelTypes(int id)
         {
             var recordInDb = _context.Vehiclemodels
                 .Where(item => item.BrandId == id)
                     .Select(item => new GetModelsTypes()
                     {
                         Id = item.ModelId,
                         BrandId=id,
                         Name = item.Name,
                         Color = item.Color,
                         Year = item.Year

                     }).OrderBy(item => item.Year).ToList();

             return recordInDb;

         }

        [HttpPost("AddModelBrands/{id}")]
        public async Task<ActionResult<Vehiclemodel>> AddModelByBrand(AddOrUpdateTypesModels model, int Id)
        {
            var message = "";
            var recordInDb = await _context.Vehiclemakes.FindAsync(Id);
            if (recordInDb == null)
            {
                return NotFound();
            }
            else if (ModelState.IsValid)
            {
                var newRecord = new Vehiclemodel()
                {
                    BrandId = Id,
                    Name = model.Name,
                    Year = model.Year,
                    Color = model.Color
                };
                _context.Vehiclemodels.Add(newRecord);
                int i = 3;
                await _context.SaveChangesAsync(i);
                return Ok();
            }
            message = "Something went wrong on your side.";
            return BadRequest(new { message });

        }

        [HttpPut("UpdateModelsBrands/{id}")]
        public async Task< IActionResult>UpdateModelsTypes(AddOrUpdateTypesModels model, int Id)
        {
            if (ModelState.IsValid)
            {
                var recordInDb = _context.Vehiclemodels.FirstOrDefault(item => item.ModelId == Id);
                if (recordInDb == null)
                {
                    return NotFound();
                }

                recordInDb.Name = model.Name;
                recordInDb.Year = model.Year;
                recordInDb.Color = model.Color;
                int i = 3;
                await _context.SaveChangesAsync(i);
                return Ok();
            }

            var message = "Something went wrong on your side.";
            return BadRequest(new { message });
        }

        [HttpDelete("DeleteModelsBrands/{id}")]
        public async Task<ActionResult<Vehiclemodel>> DeleteModelsTypes(int id)
        {
            var recordInDb = await _context.Vehiclemodels.FindAsync(id);

            if (recordInDb == null)
            {
                return NotFound();
            }

            var modelBrands = _context.Vehicles
                .Where(item => item.BrandId == id);
            _context.Vehicles.RemoveRange(modelBrands);

            _context.Vehiclemodels.Remove(recordInDb);
            int i = 3;
            await _context.SaveChangesAsync(i);
            return Ok();
        }

        #endregion

    }
}

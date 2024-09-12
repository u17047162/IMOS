using IMOSApi.Dtos.Generic;
using IMOSApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Controllers.WarehouseManagement
{
    [Route("api/[controller]")]
    [ApiController]
    public class WarehouseController : ControllerBase
    {
        private readonly IMOSContext _context;
        public WarehouseController(IMOSContext context)
        {
            _context = context;
        }

        [HttpGet("GetWarehouseById/{id}")]
        public ActionResult<GetGenericDto> GetRecord(int id)//method to get  Warehouse by Id 
        {
            var recordInDb = _context.Warehouses.Where(item => item.WarehouseId == id).Select(item => new GetGenericDto()
            {
                Name = item.Name,
                Id = item.WarehouseId,
                Description=item.Location
            }).First();

            if (recordInDb == null)
            {
                return NotFound();
            }

            return recordInDb;
        }

        [HttpGet("GetAll")]
        public ActionResult<IEnumerable<GetGenericDto>> GetAll()
        {
            var recordsInDb = _context.Warehouses.Select(item => new GetGenericDto
            {
                Name = item.Name,
                Id = item.WarehouseId,
                Description=item.Location
            }).OrderBy(item => item.Id).ToList();

            return recordsInDb;
        }

        [HttpPut("UpdateWarehouse/{id}")]
        public async Task< IActionResult> Update(AddOrUpdateGenericDto model, int id)
        {
            if (ModelState.IsValid)
            {
                var recordInDb = _context.Warehouses.FirstOrDefault(item => item.WarehouseId == id);
                if (recordInDb == null)
                {
                    return NotFound();
                }

                recordInDb.Name = model.Name;
                recordInDb.Location = model.Description;
                int i = 3;
                await _context.SaveChangesAsync(i);
                return Ok();
            }
            var message = "Something went wrong on your side.";
            return BadRequest(new { message });
        }

        [HttpPost("AddWarehouse")]
        public async Task< IActionResult> Add(AddOrUpdateGenericDto model)
        {

            var message = "";
            if (ModelState.IsValid)
            {
                var recordInDb = _context.Warehouses.FirstOrDefault(item => item.Name.ToLower() == model.Name.ToLower());
                if (recordInDb != null)
                {
                    message = "Record already exist";
                    return BadRequest(new { message });
                }

                var newRecord = new Warehouse()
                {
                    Name = model.Name,
                    Location=model.Description
                };
                _context.Warehouses.Add(newRecord);
                int i = 3;
                await _context.SaveChangesAsync(i);
                return Ok();
            }
            message = "Something went wrong on your side.";
            return BadRequest(new { message });
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Warehouse>> DeleteRecord(int id)
        {
            var recordInDb = await _context.Warehouses.FindAsync(id);
            if (recordInDb == null)
            {
                return NotFound();
            }

            int i = 3;
            

            var warehouseMaterials= _context.Warehousematerials.Where(item => item.WarehouseId == id);
      _context.Warehousematerials.RemoveRange(warehouseMaterials);
            await _context.SaveChangesAsync(i);

            var warehouseEquipments = _context.Warehouseequipments.Where(item => item.WarehouseId == id);
      _context.Warehouseequipments.RemoveRange(warehouseEquipments);
            await _context.SaveChangesAsync(i);

            var warehouseDeliveries = _context.Deliveries.Where(item => item.WarehouseId == id);
            _context.Deliveries.RemoveRange(warehouseDeliveries);
            await _context.SaveChangesAsync(i);



            _context.Warehouses.Remove(recordInDb);
            await _context.SaveChangesAsync(i);

            return Ok();
        }
    }
}

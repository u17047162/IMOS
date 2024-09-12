using IMOSApi.Dtos.Equipment;
using IMOSApi.Dtos.Generic;
using IMOSApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Controllers.EquipmentManagement
{
    [Route("api/[controller]")]
    [ApiController]
    public class EquipmentController : ControllerBase
    {
        private readonly IMOSContext _context;
        public EquipmentController(IMOSContext context)
        {
            _context = context;
        }

        [HttpGet("GetEquipmentById/{id}")]
        public ActionResult<GetGenericDto> GetRecord(int id)
        {
            var recordInDb = _context.Equipment
                .Where(item => item.EquipmentId == id)
                 .Select(item => new GetGenericDto()
                 {
                     Id = item.EquipmentId,
                     Name = item.Name,
                     Description = item.Description
                 }).First();
            if (recordInDb == null)
            {
                return NotFound();
            }
            return recordInDb;
        }

        [HttpGet("GetEquipments")]
        public ActionResult<IEnumerable<GetEquipmentsDto>> GetAll()
        {
            var recordsInDb = _context.Equipment
                 .Include(item => item.Warehouseequipments).
                ThenInclude(item=>item.Warehouse)
                .Select(item => new GetEquipmentsDto()
                {
                    Id = item.EquipmentId,
                    Name = item.Name,
                    Description = item.Description,
                    Warehouseequipments = _context.Warehouseequipments.Where(xx => xx.EquipmentId == item.EquipmentId).ToList(),
                    //quantity=item.Warehouseequipments.
                   // WarehouseId = _context.Warehouseequipments.Where(zz=>item.EquipmentId==item.)
                }).OrderBy(item => item.Id).ToList();
            return recordsInDb;
        }

        [HttpPost("AddEquipment")]
        public  async Task< IActionResult> Add(AddOrUpdateEquipmentDto model)
        {
            var message = "";
            if (!ModelState.IsValid)
            {
                message = "Something went wrong on your side.";
                return BadRequest(new { message });
            }

            try
            {
                var recordInDb = _context.Equipment.FirstOrDefault(item => item.Name.ToLower() == model.Name.ToLower());
                if (recordInDb != null)
                {
                    message = "Record already exist";
                    return BadRequest(new { message });
                }

                var newEquipment = new Equipment()
                {
                    Name = model.Name,
                    Description = model.Description,
                };
                _context.Equipment.Add(newEquipment);
                int i = 3;
                await _context.SaveChangesAsync(i);

                foreach (var item in model.Warehouses)
                {
                    var warehouseequipment = new Warehouseequipment()
                    {
                        WarehouseId = item.WarehouseId,
                        EquipmentId = newEquipment.EquipmentId,
                        Quantity = model.Quantity
                    };
                    _context.Warehouseequipments.Add(warehouseequipment);

                }
                await _context.SaveChangesAsync(i);
                return Ok();
            }

            catch (Exception e)
            {

                return  Unauthorized(StatusCode(401));
            }
        }
    

        [HttpPut("UpdateEquipment/{id}")]
        public async Task< IActionResult> Update(AddOrUpdateEquipmentDto model, int id)
        {
            var message = "";
            if (ModelState.IsValid)
            {
                var recordInDb = _context.Equipment.FirstOrDefault(item => item.EquipmentId == id);

                if (recordInDb == null)
                {
                    return NotFound();
                }

                recordInDb.Name = model.Name;
                recordInDb.Description = model.Description;

                _context.SaveChanges();

                foreach (var item in model.Warehouses)
                {
                    var warehouseequipment = new Warehouseequipment()
                    {
                        WarehouseId = item.WarehouseId,
                        EquipmentId = recordInDb.EquipmentId,
                        Quantity=model.Quantity
                    };
                    _context.Warehouseequipments.Add(warehouseequipment);
                }
                int i = 3;
                await _context.SaveChangesAsync(i);
            }

             message = "Something went wrong on your side.";
            return BadRequest(new { message });
        }

        [HttpDelete("DeleteEquipment/{id}")]
        public async Task<ActionResult<Equipment>> Delete(int id)
        {
            var recordInDb = await _context.Equipment.FindAsync(id);
            if (recordInDb == null)
            {
                return NotFound();
            }

            var equipmentWarehouse = _context.Warehouseequipments.Where(item => item.EquipmentId == id);
            _context.Warehouseequipments.RemoveRange(equipmentWarehouse);
            int i = 3;
            await _context.SaveChangesAsync(i);

            var projectsEquipments = _context.Projectequipments.Where(item => item.EquipmentId == id);
            _context.Projectequipments.RemoveRange(projectsEquipments);
            await _context.SaveChangesAsync(i);

            _context.Equipment.Remove(recordInDb);
            await _context.SaveChangesAsync(i);
            return Ok();
        }
    }
}

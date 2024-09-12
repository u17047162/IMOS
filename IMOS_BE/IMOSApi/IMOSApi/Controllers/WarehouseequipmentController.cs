using IMOSApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WarehouseequipmentController : ControllerBase
    {
        //[HttpGet("GetWarehouseequipments")]
        //public IEnumerable<Warehouseequipment> Retrieve()
        //{
        //    using (var context = new IMOSContext())
        //    {
        //        return context.Warehouseequipments.ToList();
        //    }
        //}
        //[HttpGet("GetWarehouseequipment/{id}")]
        //public IEnumerable<Warehouseequipment> Get(int id)
        //{
        //    using (var context = new IMOSContext())
        //    {
        //        IEnumerable<Warehouseequipment> tmp = context.Warehouseequipments.Where(emp => emp.WarehouseId == id).ToList();
        //        return tmp;
        //    }
        //}
        //[HttpPost("CreateWarehouseequipment")]
        //public IActionResult Create([FromBody] Warehouseequipment Warehouseequipment)
        //{
        //    using (var context = new IMOSContext())
        //    {
        //        context.Warehouseequipments.Add(Warehouseequipment);
        //        context.SaveChanges();
        //        return Ok();
        //    }
        //}

        //[HttpPut("UpdateWarehouseequipment/{Id}")]
        //public void Update([FromBody] Warehouseequipment Warehouseequipment, [FromRoute] int Id)
        //{
        //    using (var context = new IMOSContext())
        //    {
        //        var clie = context.Warehouseequipments.Where(clie => clie.WarehouseId == Id).ToList().FirstOrDefault();
        //        //emp.
        //        context.SaveChanges();
        //    }
        //}
        //[HttpDelete("DeleteEmployee/{Id}")]
        //public void Delete(int id)
        //{
        //    using (var context = new IMOSContext())
        //    {
        //        var clie = context.Warehouseequipments.Where(clie => clie.WarehouseId == id).ToList().FirstOrDefault(); ;
        //        context.Warehouseequipments.Remove(clie);
        //        context.SaveChanges();
        //    }
        //}
    }
}

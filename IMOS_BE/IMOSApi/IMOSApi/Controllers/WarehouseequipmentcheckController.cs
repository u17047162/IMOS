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
    public class WarehouseequipmentcheckController : ControllerBase
    {
        //[HttpGet("GetWarehouseequipmentchecks")]
        //public IEnumerable<Warehouseequipmentcheck> Retrieve()
        //{
        //    using (var context = new IMOSContext())
        //    {
        //        return context.Warehouseequipmentchecks.ToList();
        //    }
        //}
        //[HttpGet("GetWarehouseequipmentcheck/{id}")]
        //public IEnumerable<Warehouseequipmentcheck> Get(int id)
        //{
        //    using (var context = new IMOSContext())
        //    {
        //        IEnumerable<Warehouseequipmentcheck> tmp = context.Warehouseequipmentchecks.Where(emp => emp.WarehouseId == id).ToList();
        //        return tmp;
        //    }
        //}
        //[HttpPost("CreateWarehouseequipmentcheck")]
        //public IActionResult Create([FromBody] Warehouseequipmentcheck Warehouseequipmentcheck)
        //{
        //    using (var context = new IMOSContext())
        //    {
        //        context.Warehouseequipmentchecks.Add(Warehouseequipmentcheck);
        //        context.SaveChanges();
        //        return Ok();
        //    }
        //}

        //[HttpPut("UpdateWarehouseequipmentcheck/{Id}")]
        //public void Update([FromBody] Warehouseequipmentcheck Warehouseequipmentcheck, [FromRoute] int Id)
        //{
        //    using (var context = new IMOSContext())
        //    {
        //        var clie = context.Warehouseequipmentchecks.Where(clie => clie.WarehouseId == Id).ToList().FirstOrDefault();
        //        //emp.
        //        context.SaveChanges();
        //    }
        //}
        //[HttpDelete("DeleteEmployee/{Id}")]
        //public void Delete(int id)
        //{
        //    using (var context = new IMOSContext())
        //    {
        //        var clie = context.Warehouseequipmentchecks.Where(clie => clie.WarehouseId == id).ToList().FirstOrDefault(); ;
        //        context.Warehouseequipmentchecks.Remove(clie);
        //        context.SaveChanges();
        //    }
        //}
    }
}

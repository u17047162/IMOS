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
    public class WarehouseequipmentwriteoffController : ControllerBase
    {
        //[HttpGet("GetWarehouseequipmentwriteoffs")]
        //public IEnumerable<Warehouseequipmentwriteoff> Retrieve()
        //{
        //    using (var context = new IMOSContext())
        //    {
        //        return context.Warehouseequipmentwriteoffs.ToList();
        //    }
        //}
        //[HttpGet("GetWarehouseequipmentwriteoff/{id}")]
        //public IEnumerable<Warehouseequipmentwriteoff> Get(int id)
        //{
        //    using (var context = new IMOSContext())
        //    {
        //        IEnumerable<Warehouseequipmentwriteoff> tmp = context.Warehouseequipmentwriteoffs.Where(emp => emp.WriteoffId == id).ToList();
        //        return tmp;
        //    }
        //}
        //[HttpPost("CreateWarehouseequipmentwriteoff")]
        //public IActionResult Create([FromBody] Warehouseequipmentwriteoff Warehouseequipmentwriteoff)
        //{
        //    using (var context = new IMOSContext())
        //    {
        //        context.Warehouseequipmentwriteoffs.Add(Warehouseequipmentwriteoff);
        //        context.SaveChanges();
        //        return Ok();
        //    }
        //}

        //[HttpPut("UpdateWarehouseequipmentwriteoff/{Id}")]
        //public void Update([FromBody] Warehouseequipmentwriteoff Warehouseequipmentwriteoff, [FromRoute] int Id)
        //{
        //    using (var context = new IMOSContext())
        //    {
        //        var clie = context.Warehouseequipmentwriteoffs.Where(clie => clie.WriteoffId == Id).ToList().FirstOrDefault();
        //        //emp.
        //        context.SaveChanges();
        //    }
        //}
        //[HttpDelete("DeleteEmployee/{Id}")]
        //public void Delete(int id)
        //{
        //    using (var context = new IMOSContext())
        //    {
        //        var clie = context.Warehouseequipmentwriteoffs.Where(clie => clie.WriteoffId == id).ToList().FirstOrDefault(); ;
        //        context.Warehouseequipmentwriteoffs.Remove(clie);
        //        context.SaveChanges();
        //    }
        //}
    }
}

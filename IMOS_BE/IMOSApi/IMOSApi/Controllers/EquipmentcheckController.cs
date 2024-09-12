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
    public class EquipmentcheckController : ControllerBase
    {
        private readonly IMOSContext _dbContext;

        public EquipmentcheckController(IMOSContext dbContext)
        {
            _dbContext = dbContext;
        }


        [HttpGet("GetEquipmentchecks")]
        public IEnumerable<Equipmentcheck> Retrieve()
        {
            //using (var context = new IMOSContext( ))
            //{
            //    return context.Equipmentchecks.ToList();
            //}
            return _dbContext.Equipmentchecks.ToList();
        }

        [HttpGet("GetEquipmentcheck/{id}")]
        public IEnumerable<Equipmentcheck> Get(int id)
        {
            //using (var context = new IMOSContext())
            //{

            //}
            IEnumerable<Equipmentcheck> tmp = _dbContext.Equipmentchecks.Where(emp => emp.EquipmentcheckId == id).ToList();
            return tmp;
        }

        //[HttpPost("CreateEquipmentcheck")]
        //public IActionResult Create([FromBody] Equipmentcheck Equipmentcheck)
        //{
        //    using (var context = new IMOSContext())
        //    {
        //        context.Equipmentchecks.Add(Equipmentcheck);
        //        context.SaveChanges();
        //        return Ok();
        //    }
        //}

        //[HttpPut("UpdateEquipmentcheck/{Id}")]
        //public void Update([FromBody] Equipmentcheck Equipmentcheck, [FromRoute] int Id)
        //{
        //    using (var context = new IMOSContext())
        //    {
        //        var clie = context.Equipmentchecks.Where(clie => clie.EquipmentcheckId == Id).ToList().FirstOrDefault();
        //        //emp.
        //        context.SaveChanges();
        //    }
        //}
        //[HttpDelete("DeleteEquipmentcheck/{Id}")]
        //public void Delete(int id)
        //{
        //    using (var context = new IMOSContext())
        //    {
        //        var clie = context.Equipmentchecks.Where(clie => clie.EquipmentcheckId == id).ToList().FirstOrDefault(); ;
        //        context.Equipmentchecks.Remove(clie);
        //        context.SaveChanges();
        //    }
        //}
    }
}

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
    public class WriteoffController : ControllerBase
    {
        //[HttpGet("GetWriteoffs")]
        //public IEnumerable<Writeoff> Retrieve()
        //{
        //    using (var context = new IMOSContext())
        //    {
        //        return context.Writeoffs.ToList();
        //    }
        //}
        //[HttpGet("GetWriteoff/{id}")]
        //public IEnumerable<Writeoff> Get(int id)
        //{
        //    using (var context = new IMOSContext())
        //    {
        //        IEnumerable<Writeoff> tmp = context.Writeoffs.Where(emp => emp.WriteoffId == id).ToList();
        //        return tmp;
        //    }
        //}
        //[HttpPost("CreateWriteoff")]
        //public IActionResult Create([FromBody] Writeoff Writeoff)
        //{
        //    using (var context = new IMOSContext())
        //    {
        //        context.Writeoffs.Add(Writeoff);
        //        context.SaveChanges();
        //        return Ok();
        //    }
        //}

        //[HttpPut("UpdateWriteoff/{Id}")]
        //public void Update([FromBody] Writeoff Writeoff, [FromRoute] int Id)
        //{
        //    using (var context = new IMOSContext())
        //    {
        //        var clie = context.Writeoffs.Where(clie => clie.WriteoffId == Id).ToList().FirstOrDefault();
        //        //emp.
        //        context.SaveChanges();
        //    }
        //}
        //[HttpDelete("DeleteEmployee/{Id}")]
        //public void Delete(int id)
        //{
        //    using (var context = new IMOSContext())
        //    {
        //        var clie = context.Writeoffs.Where(clie => clie.WriteoffId == id).ToList().FirstOrDefault(); ;
        //        context.Writeoffs.Remove(clie);
        //        context.SaveChanges();
        //    }
        //}
    }
}

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
    public class WriteoffreasonController : ControllerBase
    {
        //[HttpGet("GetWriteoffreasons")]
        //public IEnumerable<Writeoffreason> Retrieve()
        //{
        //    using (var context = new IMOSContext())
        //    {
        //        return context.Writeoffreasons.ToList();
        //    }
        //}
        //[HttpGet("GetWriteoffreason/{id}")]
        //public IEnumerable<Writeoffreason> Get(int id)
        //{
        //    using (var context = new IMOSContext())
        //    {
        //        IEnumerable<Writeoffreason> tmp = context.Writeoffreasons.Where(emp => emp.WriteoffreasonId == id).ToList();
        //        return tmp;
        //    }
        //}
        //[HttpPost("CreateWriteoffreason")]
        //public IActionResult Create([FromBody] Writeoffreason Writeoffreason)
        //{
        //    using (var context = new IMOSContext())
        //    {
        //        context.Writeoffreasons.Add(Writeoffreason);
        //        context.SaveChanges();
        //        return Ok();
        //    }
        //}

        //[HttpPut("UpdateWriteoffreason/{Id}")]
        //public void Update([FromBody] Writeoffreason Writeoffreason, [FromRoute] int Id)
        //{
        //    using (var context = new IMOSContext())
        //    {
        //        var clie = context.Writeoffreasons.Where(clie => clie.WriteoffreasonId == Id).ToList().FirstOrDefault();
        //        //emp.
        //        context.SaveChanges();
        //    }
        //}
        //[HttpDelete("DeleteEmployee/{Id}")]
        //public void Delete(int id)
        //{
        //    using (var context = new IMOSContext())
        //    {
        //        var clie = context.Writeoffreasons.Where(clie => clie.WriteoffreasonId == id).ToList().FirstOrDefault(); ;
        //        context.Writeoffreasons.Remove(clie);
        //        context.SaveChanges();
        //    }
        //}

    }
}

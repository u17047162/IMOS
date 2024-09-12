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
    public class UrgencylevelController : ControllerBase
    {
        //[HttpGet("GetUrgencylevels")]
        //public IEnumerable<Urgencylevel> Retrieve()
        //{
        //    using (var context = new IMOSContext())
        //    {
        //        return context.Urgencylevels.ToList();
        //    }
        //}
        //[HttpGet("GetUrgencylevel/{id}")]
        //public IEnumerable<Urgencylevel> Get(int id)
        //{
        //    using (var context = new IMOSContext())
        //    {
        //        IEnumerable<Urgencylevel> tmp = context.Urgencylevels.Where(emp => emp.UrgencylevelId == id).ToList();
        //        return tmp;
        //    }
        //}
        //[HttpPost("CreateUrgencylevel")]
        //public IActionResult Create([FromBody] Urgencylevel Urgencylevel)
        //{
        //    using (var context = new IMOSContext())
        //    {
        //        context.Urgencylevels.Add(Urgencylevel);
        //        context.SaveChanges();
        //        return Ok();
        //    }
        //}

        //[HttpPut("UpdateUrgencylevel/{Id}")]
        //public void Update([FromBody] Urgencylevel Urgencylevel, [FromRoute] int Id)
        //{
        //    using (var context = new IMOSContext())
        //    {
        //        var clie = context.Urgencylevels.Where(clie => clie.UrgencylevelId == Id).ToList().FirstOrDefault();
        //        //emp.
        //        context.SaveChanges();
        //    }
        //}
        //[HttpDelete("DeleteUrgencyLvl/{Id}")]
        //public void Delete(int id)
        //{
        //    using (var context = new IMOSContext())
        //    {
        //        var clie = context.Urgencylevels.Where(clie => clie.UrgencylevelId == id).ToList().FirstOrDefault(); ;
        //        context.Urgencylevels.Remove(clie);
        //        context.SaveChanges();
        //    }
        //}
    }
}

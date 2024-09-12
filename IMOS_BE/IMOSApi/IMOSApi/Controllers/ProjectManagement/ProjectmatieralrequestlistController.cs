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
    public class ProjectmatieralrequestlistController : ControllerBase
    {
    //    [HttpGet("GetProjectmaterialrequestlists")]
    //    public IEnumerable<Projectmaterialrequestlist> Retrieve()
    //    {
    //        using (var context = new IMOSContext())
    //        {
    //            return context.Projectmaterialrequestlist.ToList();
    //        }
    //    }
    //    [HttpGet("GetProjectmaterialrequestlist/{id}")]
    //    public IEnumerable<Projectmaterialrequestlist> Get(int id)
    //    {
    //        using (var context = new IMOSContext())
    //        {
    //            IEnumerable<Projectmaterialrequestlist> tmp = context.Projectmaterialrequestlist.Where(emp => emp.ProjectmaterialrequestId == id).ToList();
    //            return tmp;
    //        }
    //    }
    //    [HttpPost("CreateProjectmaterialrequestlist")]
    //    public IActionResult Create([FromBody] Projectmaterialrequestlist Projectmaterialrequestlist)
    //    {
    //        using (var context = new IMOSContext())
    //        {
    //            context.Projectmaterialrequestlist.Add(Projectmaterialrequestlist);
    //            context.SaveChanges();
    //            return Ok();
    //        }
    //    }

    //    [HttpPut("UpdateProjectmaterialrequestlist/{Id}")]
    //    public void Update([FromBody] Projectmaterialrequestlist Projectmaterialrequestlist, [FromRoute] int Id)
    //    {
    //        using (var context = new IMOSContext())
    //        {
    //            var clie = context.Projectmaterialrequestlist.Where(clie => clie.ProjectmaterialrequestId == Id).ToList().FirstOrDefault();
    //            //emp.
    //            context.SaveChanges();
    //        }
    //    }
    //    [HttpDelete("DeleteProjectmaterialrequestlist/{Id}")]
    //    public void Delete(int id)
    //    {
    //        using (var context = new IMOSContext())
    //        {
    //            var clie = context.Projectmaterialrequestlist.Where(clie => clie.ProjectmaterialrequestId == id).ToList().FirstOrDefault(); ;
    //            context.Projectmaterialrequestlist.Remove(clie);
    //            context.SaveChanges();
    //        }
    //    }
    }
}

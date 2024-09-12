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
    public class RequestController : ControllerBase
    {
        private readonly IMOSContext _dbContext;
        public RequestController(IMOSContext dbContext)
        {
            _dbContext = dbContext;
        }
        /*
                [HttpGet("GetAll")]
                public IEnumerable<Request> Retrieve()
                {
                    using (var context = new IMOSContext())
                    {
                        return context.Requests.ToList();
                    }
                }
                [HttpGet("GetRequest/{id}")]
                public IEnumerable<Request> Get(int id)
                {
                    using (var context = new IMOSContext())
                    {
                        IEnumerable<Request> tmp = context.Requests.Where(emp => emp.RequestId == id).ToList();
                        return tmp;
                    }
                }
                [HttpPost("CreateRequest")]
                public IActionResult Create([FromBody] Request Request)
                {
                    using (var context = new IMOSContext())
                    {
                        context.Requests.Add(Request);
                        context.SaveChanges();
                        return Ok();
                    }
                }

                [HttpPut("UpdateRequest/{Id}")]
                public void Update([FromBody] Request Request, [FromRoute] int Id)
                {
                    using (var context = new IMOSContext())
                    {
                        var clie = context.Requests.Where(clie => clie.RequestId == Id).ToList().FirstOrDefault();
                        //emp.
                        context.SaveChanges();
                    }
                }
                [HttpDelete("DeleteRequest/{Id}")]
                public void Delete(int id)
                {
                    using (var context = new IMOSContext())
                    {
                        var clie = context.Requests.Where(clie => clie.RequestId == id).ToList().FirstOrDefault(); ;
                        context.Requests.Remove(clie);
                        context.SaveChanges();
                    }
                }*/
    }
}

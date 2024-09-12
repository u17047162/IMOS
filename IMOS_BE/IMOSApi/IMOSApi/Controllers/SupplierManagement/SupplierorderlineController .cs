using IMOSApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SupplierorderlineController : ControllerBase
    {
        private IMOSContext _dbContext;
        public SupplierorderlineController(IMOSContext dbContext)
        {
            _dbContext = dbContext;
        }
        /*

        [HttpGet("GetSupplierorderlines")]
        public IEnumerable<Supplierorderline> Retrieve()
        {
            using (var context = new IMOSContext())
            {
                return _dbContext.Supplierorderlines.ToList();
            }
        }
        [HttpGet("GetSupplierorderline/{id}")]
        public IEnumerable<Supplierorderline> Get(int id)
        {
            using (var context = new IMOSContext())
            {
                IEnumerable<Supplierorderline> tmp = context.Supplierorderlines.Where(emp => emp.SupplierId == id).ToList();
                return tmp;
            }
        }
        [HttpPost("CreateSupplierorderline")]
        public IActionResult Create([FromBody] Supplierorderline Supplierorderline)
        {
            using (var context = new IMOSContext())
            {
                context.Supplierorderlines.Add(Supplierorderline);
                context.SaveChanges();
                return Ok();
            }
        }

        [HttpPut("UpdateSupplierorderline/{Id}")]
        public void Update([FromBody] Supplierorderline Supplierorderline, [FromRoute] int Id)
        {
            using (var context = new IMOSContext())
            {
                var clie = context.Supplierorderlines.Where(clie => clie.SupplierId == Id).ToList().FirstOrDefault();
                //emp.
                context.SaveChanges();
            }
        }
        [HttpDelete("DeleteSupplierorderline/{Id}")]
        public void Delete(int id)
        {
            using (var context = new IMOSContext())
            {
                var clie = context.Supplierorderlines.Where(clie => clie.SupplierId == id).ToList().FirstOrDefault(); ;
                context.Supplierorderlines.Remove(clie);
                context.SaveChanges();
            }
        }
        */
    }
}
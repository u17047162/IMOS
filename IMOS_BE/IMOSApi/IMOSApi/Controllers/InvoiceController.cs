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
    public class InvoiceController : ControllerBase
    {
      /*  [HttpGet("GetInvoices")]
        public IEnumerable<Invoice> Retrieve()
        {
            using (var context = new IMOSContext())
            {
                return context.Invoices.ToList();
            }
        }
        [HttpGet("GetInvoice/{id}")]
        public IEnumerable<Invoice> Get(int id)
        {
            using (var context = new IMOSContext())
            {
                IEnumerable<Invoice> tmp = context.Invoices.Where(emp => emp.InvoiceId == id).ToList();
                return tmp;
            }
        }
        [HttpPost("CreateInvoice")]
        public IActionResult Create([FromBody] Invoice Invoice)
        {
            using (var context = new IMOSContext())
            {
                context.Invoices.Add(Invoice);
                context.SaveChanges();
                return Ok();
            }
        }

        [HttpPut("UpdateInvoice/{Id}")]
        public void Update([FromBody] Invoice Invoice, [FromRoute] int Id)
        {
            using (var context = new IMOSContext())
            {
                var clie = context.Invoices.Where(clie => clie.InvoiceId == Id).ToList().FirstOrDefault();
                //emp.
                context.SaveChanges();
            }
        }
        [HttpDelete("DeleteInvoice/{Id}")]
        public void Delete(int id)
        {
            using (var context = new IMOSContext())
            {
                var clie = context.Invoices.Where(clie => clie.InvoiceId == id).ToList().FirstOrDefault(); ;
                context.Invoices.Remove(clie);
                context.SaveChanges();
            }
        }*/
    }
}


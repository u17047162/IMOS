﻿using IMOSApi.Models;
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
    public class DeliveryController : ControllerBase
    {
        [HttpGet("GetDeliverys")]
        public IEnumerable<Delivery> Retrieve()
        {
            using (var context = new IMOSContext())
            {
                return context.Deliveries.ToList();
            }
        }
        [HttpGet("GetDelivery/{id}")]
        public IEnumerable<Delivery> Get(int id)
        {
            using (var context = new IMOSContext())
            {
                IEnumerable<Delivery> tmp = context.Deliveries.Where(emp => emp.DeliveryId == id).ToList();
                return tmp;
            }
        }
        [HttpPost("CreateDelivery")]
        public IActionResult Create([FromBody] Delivery Delivery)
        {
            using (var context = new IMOSContext())
            {
                context.Deliveries.Add(Delivery);
                context.SaveChanges();
                return Ok();
            }
        }

        [HttpPut("UpdateDelivery/{Id}")]
        public void Update([FromBody] Delivery Delivery, [FromRoute] int Id)
        {
            using (var context = new IMOSContext())
            {
                var clie = context.Deliveries.Where(clie => clie.DeliveryId == Id).ToList().FirstOrDefault();
                //emp.
                context.SaveChanges();
            }
        }
        [HttpDelete("DeleteDelivery/{Id}")]
        public void Delete(int id)
        {
            using (var context = new IMOSContext())
            {
                var clie = context.Deliveries.Where(clie => clie.DeliveryId == id).ToList().FirstOrDefault(); ;
                context.Deliveries.Remove(clie);
                context.SaveChanges();
            }
        }
    }
}
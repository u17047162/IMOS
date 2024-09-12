using IMOSApi.Dtos.Order;
using IMOSApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Controllers.OrderManagement
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderStatusController : ControllerBase
    {
        private readonly IMOSContext _context;
        public OrderStatusController(IMOSContext context)
        {
            _context = context;
        }

        [HttpGet("GetAllStatuses")]
        public ActionResult<IEnumerable<GetStatusDto>> GetAll()
        {
            var recordsInDb = _context.Orderstatuses
                .Select(item => new GetStatusDto()
                {
                    OrderStatusId = item.OrderStatusId,
                    Description = item.Description,
                }).ToList();
            return recordsInDb;
        }

    }
}

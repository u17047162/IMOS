using IMOSApi.Dtos.Order;
using IMOSApi.Extensions;
using IMOSApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Controllers.OrderManagement
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IMOSContext _context;

        public OrderController(IMOSContext context)
        {
            _context = context;
        }

        // Get Order By Id 

        // Get All Supplier  Orders 
        [HttpGet("GetAllSupplierOrders")]
        public ActionResult<IEnumerable<GetSupplierOrderDto>> GetAll()
        {
            var recordsInDb = _context.Orderlines
                .Include(item => item.Supplier)
                .Include(item => item.Suppliermaterialorders)
                .Select(item => new GetSupplierOrderDto()
                {
                    Id = item.OrderId,
                    Date = item.Date.ToString(),
                    OrderNumber = item.OrderNumber,
                    SupplierId = item.SupplierId,
                    supplierName=item.Supplier.Name,
                    orderStatus=item.OrderStatusDescription
                }).OrderBy(item => item.Date);
            return recordsInDb.ToList();
        }

        // Add to Supplier Order Cart 
        [HttpPost("AddSupplierMaterialOrdersCart")]
        public IActionResult AddSupplierOderCart(AddSupplierOrderCart model)
        {
            var message = "";
            if (ModelState.IsValid)
            {
                try
                {
                    var orderNumber = "";
                    Orderline orderNumberExists;
                    do
                    {
                        orderNumber = GenerateOrderNumber();
                        orderNumberExists = _context.Orderlines.FirstOrDefault(item => item.OrderNumber == orderNumber);
                    } while (orderNumberExists != null);

                    var newOrderDetails = new Orderline()
                    {

                        OrderStatusDescription = "Placed",
                        OrderNumber = orderNumber,
                        Date = DateTime.Now,
                        SupplierId = model.supplierId
                    };

                    _context.Orderlines.Add(newOrderDetails);
                    _context.SaveChanges();

                    foreach (var item in model.Materials)
                    {
                        var supplierMaterialsOrder = new Suppliermaterialorder()
                        {
                            MaterialId = item.MaterialId,
                            OrderId = newOrderDetails.OrderId,
                            QuantityOrdered = model.Quantity,
                        };
                        _context.Suppliermaterialorders.Add(supplierMaterialsOrder);
                    }
                    _context.SaveChanges();

                    var currentDateTimeStamp = DateTime.Now;
                    //add log 
                  
  
                }
                catch (Exception e)
                {

                    return BadRequest(e.InnerException.Message);
                }
            }

            message = "Something went wrong on your side.";
            return BadRequest(new { message });
        }

        private static readonly Random random = new Random();
        public static string GenerateOrderNumber()
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return new string(Enumerable.Repeat(chars, 5)
                .Select(s => s[random.Next(s.Length)]).ToArray());
        }

        //generate Order == sents email to supplier   // send emailusing order Id to User

        // receive order == adds material quantity 

        // cancel order== sent cancellation email if not greater 3 days

    }
}
     

    

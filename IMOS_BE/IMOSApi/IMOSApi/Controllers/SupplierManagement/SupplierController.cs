using IMOSApi.Dtos.Supplier;
using IMOSApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Controllers.SupplierManagement
{
    [Route("api/[controller]")]
    [ApiController]
    public class SupplierController : ControllerBase
    {
        private readonly IMOSContext _context;
        public SupplierController(IMOSContext context)
        {
            _context = context;
        }

        [HttpGet("GetSupplierById/{id}")]
        public ActionResult<GetSupplierDto> GetRecord(int id)
        {
            var recordInDb = _context.Suppliers
                .Where(item => item.SupplierId == id)
                .Include(item => item.Suppliertype)
                .Select(item => new GetSupplierDto()
                {
                    Id = item.SupplierId,
                    Name = item.Name,
                    Address = item.Address,
                    Email = item.Email,
                    ContactNumber = item.Contactnumber,

                    Suppliertype = item.Suppliertype.Name,
                    SuppliertypeId = item.SuppliertypeId//navigation to suppliertype
                }).OrderBy(item => item.Name).First();
            if (recordInDb == null)
            {
                return NotFound();
            }
            return recordInDb;
        }

        [HttpGet("GetSuppliers")]
        public ActionResult<IEnumerable<GetSupplierDto>> GetAll()
        {
            var recordsInDb = _context.Suppliers
                .Include(item => item.Suppliertype)
                .Select(item => new GetSupplierDto()
                {
                    Id = item.SupplierId,
                    Name = item.Name,
                    Address = item.Address,
                    Email = item.Email,
                    ContactNumber = item.Contactnumber,

                    Suppliertype = item.Suppliertype.Name,
                    SuppliertypeId = item.SuppliertypeId
                }).OrderBy(item => item.Id).ToList();
            return recordsInDb;
        }

        [HttpPost("AddSupplier")]
        public async Task< IActionResult> Add(AddOrUpdateSupplierDto model)
        {
            var message = "";
            if (ModelState.IsValid)
            {
                var recordInDb = _context.Suppliers.FirstOrDefault(item => item.Name.ToLower() == model.Name.ToLower());

                if (recordInDb != null)
                {
                    message = "Record already exist";
                    return BadRequest(new { message });
                }

                var newRecord = new Supplier
                {
                    Name = model.Name,
                    Address = model.Address,
                    Email = model.Email,
                    Contactnumber = model.ContactNumber,
                    SuppliertypeId = model.SuppliertypeId
                };
                _context.Suppliers.Add(newRecord);
                int i = 3;
                await _context.SaveChangesAsync(i);
                return Ok();
            }
            message = "Something went wrong on your side.";
            return BadRequest(new { message });
        }

        [HttpPut("updateSupplier/{id}")]
        public async Task< IActionResult>Update(AddOrUpdateSupplierDto model, int id)
        {
            if (ModelState.IsValid)
            {
                var recordInDb = _context.Suppliers.FirstOrDefault(item => item.SupplierId == id);

                if (recordInDb == null)
                {
                    return NotFound();
                }

                recordInDb.Name = model.Name;
                recordInDb.Address = model.Address;
                recordInDb.Email = model.Email;
                recordInDb.Contactnumber = model.ContactNumber;
                recordInDb.SuppliertypeId = model.SuppliertypeId;
                int i = 3;
                await _context.SaveChangesAsync(i);
                return Ok();
            }

            var message = "Something went wrong on your side.";
            return BadRequest(new { message });
        }

        [HttpDelete("DeleteSupplier/{id}")]
        public async Task<ActionResult<Supplier>> Delete(int id)
        {
            var recordInDb = await _context.Suppliers.FindAsync(id);
            if (recordInDb == null)
            {
                return NotFound();
            }

            _context.Suppliers.Remove(recordInDb);
            int i = 3;
            await _context.SaveChangesAsync(i);
            return Ok();
        }
    }
}

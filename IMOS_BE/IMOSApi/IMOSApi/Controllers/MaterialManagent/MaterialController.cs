﻿using IMOSApi.Dtos.Material;
using IMOSApi.Dtos.Order;
using IMOSApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Controllers.MaterialManagent
{
    [Route("api/[controller]")]
    [ApiController]
    public class MaterialController : ControllerBase
    {
        private readonly IMOSContext _context;

        public MaterialController(IMOSContext context)
        {
            _context = context;
        }

        [HttpGet("GetSupplierMaterial/{id}")]
        public ActionResult<List<GetMaterialDto>> GetRecord(int id)
        {
            var recordInDb = _context.Suppliermaterials
                .Include(mat => mat.Material).Where( x => x.SupplierId == id)
                //     .Include(item=>item.Warehouse)
                .Select(item => new GetMaterialDto()
                {
                    materialId = item.Material.MaterialId,
                    Name = item.Material.Name,
                    Description = item.Material.Description,
                    Materialtype = item.Material.Materialtype.Name,
                    MaterialtypeId = item.Material.MaterialtypeId,
                    //  Warehouse = item.Warehouse.Name,
                    // WarehouseId = item.WarehouseId
                }).ToList();
            if (recordInDb == null)
            {
                return NotFound();
            }
            return recordInDb;
        }


        // Add to Supplier Order Cart 
        [HttpPost("AddSupplierMaterialOrdersCart")]
        public IActionResult AddSupplierOderCart([FromBody] AddSupplierOrderCart model)
        {

            var message = "";
            if (!ModelState.IsValid)
            {
                var recordIbDb = _context.Orderlines.FirstOrDefault();
                //  var autoOrderNuberCode = OrderAutoCode.GenerateOrderNumber();
                if (recordIbDb != null)
                {
                    message = "Record exists in database";
                    return BadRequest(new { message });

                }
                //var autoOrderNuberCode = OrderAutoCode.GenerateOrderNumber();
                var newOrderDetails = new Orderline()
                {
                    //OrderNumber = autoOrderNuberCode
                    Date = DateTime.Now,
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

                //foreach (var item in model.Suppliers)
                //{
                //    var supplierOrders = new Suppliersordersupplier()
                //    {
                //        SupplierId = item.SupplierId,
                //        OrderId = newOrderDetails.OrderId,

                //    };
                //    _context.Suppliersordersuppliers.Add(supplierOrders);
                //}

                // send email to supplier //notification extension 
                _context.SaveChanges();
            }
            message = "Something went wrong on your side.";
            return BadRequest(new { message });
        }

        [HttpGet("GetMaterials")]//gets materials with supplier name ,material type, warehouse and quantity in that located.
        public ActionResult<IEnumerable<GetMaterialDto>> GetAll()
        {
            var recordsInDb = _context.Materials
                .Include(item => item.Suppliermaterials)
                .Include(item => item.Warehousematerials)
                .Include(item => item.Materialtype)
                .Select(item => new GetMaterialDto()
                {
                    Id = item.MaterialId,
                    Name = item.Name,
                    Description = item.Description,
                    Materialtype = item.Materialtype.Name,
                    MaterialtypeId = item.MaterialtypeId
                }).OrderBy(item => item.Name).ToList();
            return recordsInDb;
        }


        [HttpGet("BySupplierId")] //get materials by supplierId
        public ActionResult<IEnumerable<GetMaterialDto>> GetBySupplierId()
        {
            var recordsInDb = _context.Suppliermaterials
                .Include(item => item.Supplier)
                .Include(item => item.Material)
                    .ThenInclude(o => o.Materialtype)
                .Select(item => new GetMaterialDto()
                {
                    Id = item.MaterialId,
                    Name = item.Material.Name,
                    Description = item.Material.Description,
                    Materialtype = item.Material.Materialtype.Name,
                    MaterialtypeId = item.Material.Materialtype.MaterialtypeId,
                    SupplierId = item.SupplierId,
                    SupplierName = item.Supplier.Name

                }).OrderBy(item => item.Name).ToList();
            return recordsInDb;
        }

        // add materials with  Supplier Id
        //will create/add  in material Table && 
        //materials with selected supplier Id in table(SupplierMaterial) && warehouse materials 

        [HttpPost("AddMaterial")]
        public IActionResult AddSupplierMaterial(AddMaterialDto model)
        {
            var message = "";
            if (!ModelState.IsValid)
            {
                message = "Something went wrong on your side.";
                return BadRequest(new { message });
            }

            try
            {
                var recordInDb = _context.Materials.FirstOrDefault(item => item.Name.ToLower() == model.Name.ToLower());
                if (recordInDb != null)
                {
                    message = "Record already exist";
                    return BadRequest(new { message });
                }

                var newMaterial = new Material()
                {
                    Name = model.Name,
                    Description = model.Description,
                    MaterialtypeId = model.MaterialtypeId
                };
                _context.Materials.Add(newMaterial);
                _context.SaveChanges();

                foreach (var item in model.Warehouses)
                {
                    var warehousematerial = new Warehousematerial()
                    {
                        WarehouseId = item.WarehouseId,
                        MaterialId = newMaterial.MaterialId,
                        QuantityOnHand = model.Quantity,
                    };
                    _context.Warehousematerials.Add(warehousematerial);

                }

                foreach (var item in model.Suppliers)
                {
                    Suppliermaterial suppliermaterial = new Suppliermaterial()
                    {
                        SupplierId = item.SupplierId,
                        MaterialId = newMaterial.MaterialId,
                    };
                    _context.Suppliermaterials.Add(suppliermaterial);

                }
                _context.SaveChanges();

                return Ok();
            }

            catch (Exception e)
            {
              var material = _context.Materials.FirstOrDefault(o => o.Name.Equals(model.Name));
                if(material != null)
                {
                    _context.Materials.Remove(material);
                    _context.SaveChanges();
                }
                throw;
            }
        }

    }
}



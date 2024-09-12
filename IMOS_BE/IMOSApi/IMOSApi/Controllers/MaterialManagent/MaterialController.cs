using IMOSApi.Dtos.Material;
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
                .Include(mat => mat.Material).Where(x => x.SupplierId == id)
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

        [HttpGet("GetBYMaterialID/{materialId}")]
        public object GetBYMaterialID(int materialId)
        {
            var recordInDb = _context.Materials
               .Include(item => item.Materialtype)
               .Where(item => item.MaterialId == materialId)
               .Select(item => new GetMaterialDto()
               {
                  Id = item.MaterialId,
                  MaterialtypeId= item.MaterialtypeId,
                  Name = item.Name,
                  Description= item.Description,
                  Materialtype = item.Materialtype.Name

               }).OrderBy(x => x.Name).ToList();
           
            return recordInDb;
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
                    materialId = item.MaterialId,
                    Name = item.Name,
                    Description = item.Description,
                    Materialtype = item.Materialtype.Name,
                    MaterialtypeId = item.MaterialtypeId,
                    Suppliermaterials= _context.Suppliermaterials.Where(xx=>xx.MaterialId==item.MaterialId).ToList()
                    
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
        public async Task< IActionResult> AddSupplierMaterial(AddMaterialDto model)
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

                int i = 3;
                await _context.SaveChangesAsync(i);
            }

            catch (Exception e)
            {
                //var material = _context.Materials.FirstOrDefault(o => o.Name.Equals(model.Name));
                //if (material != null)
                //{
                //    _context.Materials.Remove(material);
                //    _context.SaveChanges();
                //}
                return BadRequest(e.InnerException.Message);
                //   return Unauthorized(StatusCode(401));
            }
            return Ok();
        }

        [HttpGet("MaterialsById/{id}")] //get materials by Id
        public ActionResult<GetMaterialsByIdDto> GetRecords(int id)
        {
            var recordInDb = _context.Materials
               .Where(item => item.MaterialId == id)
                .Select(item => new GetMaterialsByIdDto()
                {
                    MaterialId = item.MaterialId,
                    Name = item.Name,
                    Description = item.Description,
                    MaterialTypeName = item.Materialtype.Name,

                    // add qauntity
                    // add suppliermaterial
                    //add warehouse material
                }).First();
            if (recordInDb == null)
            {
                return NotFound();
            }
            return recordInDb;
        }

        /*[HttpGet("GetMaterials")]//gets materials with supplier name ,material type name.
         public ActionResult<IEnumerable<GetMaterialDto>> GetAll()
         {
             var recordsInDb = _context.Materials
                 .Include(item => item.Materialtype)
                 .Include(item=>item.Warehouse)
                 .Include(item=>item.Suppliermaterials)
                 .Select(item => new GetMaterialDto()
                 {
                     Id = item.MaterialId,
                     Name = item.Name,
                     Description = item.Description,
                     Materialtype = item.Materialtype.Name,
                     MaterialtypeId = item.MaterialtypeId,
                     Warehouse = item.Warehouse.Name,
                   //  WarehouseId = item.WarehouseId,

                 }).OrderBy(item => item.Name).ToList();
             return recordsInDb;

         }*/

        [HttpPut("UpdateMaterial/{id}")]
        public IActionResult Update(AddMaterialDto model, int id)
        {
            var message = "";
            if (ModelState.IsValid)
            {
                var recordInDb = _context.Materials.FirstOrDefault(item => item.MaterialId == id);

                if (recordInDb == null)
                {
                    return NotFound();
                }

                recordInDb.Name = model.Name;
                recordInDb.Description = model.Description;
                _context.SaveChanges();

                foreach (var item in model.Warehouses)
                {
                    var warehousematerial = new Warehousematerial()
                    {
                        WarehouseId = item.WarehouseId,
                        MaterialId = recordInDb.MaterialId,
                        QuantityOnHand = model.Quantity,
                    };
                    _context.Warehousematerials.Add(warehousematerial);
                }

                foreach (var item in model.Suppliers)
                {
                    Suppliermaterial suppliermaterial = new Suppliermaterial()
                    {
                        SupplierId = item.SupplierId,
                        MaterialId = recordInDb.MaterialId,
                    };
                    _context.Suppliermaterials.Add(suppliermaterial);
                }
                _context.SaveChanges();
            }
            message = "Something went wrong on your side.";
            return BadRequest(new { message });
        }

        [HttpDelete("DeleteMaterial/{id}")]
        public async Task<ActionResult<Material>> Delete(int id)
        {
            var recordInDb = await _context.Materials.FindAsync(id);
            if (recordInDb == null)
            {
                return NotFound();
            }

            var materialsWarehouse = _context.Warehousematerials.Where(item => item.MaterialId == id);
            _context.Warehousematerials.RemoveRange(materialsWarehouse);
            await _context.SaveChangesAsync();

            var materialsSuppliers = _context.Suppliermaterials.Where(item => item.MaterialId == id);
            _context.Suppliermaterials.RemoveRange(materialsSuppliers);
            await _context.SaveChangesAsync();

            var supplierMaterialOrders = _context.Suppliermaterialorders.Where(item => item.MaterialId == id);
            _context.Suppliermaterialorders.RemoveRange(supplierMaterialOrders);
            await _context.SaveChangesAsync();

            var tasksMaterials= _context.Taskmaterials.Where(item => item.MaterialId == id);
            _context.Taskmaterials.RemoveRange(tasksMaterials);
            await _context.SaveChangesAsync();

            var projectMaterials = _context.Projectmaterials.Where(item => item.MaterialId == id);
            _context.Projectmaterials.RemoveRange(projectMaterials);
            await _context.SaveChangesAsync();

            var projectMaterialsRequestList = _context.Projectmaterialrequestlist.Where(item => item.MaterialId == id);
            _context.Projectmaterialrequestlist.RemoveRange(projectMaterialsRequestList);
            await _context.SaveChangesAsync();

            _context.Materials.Remove(recordInDb);

            int i = 3;
            await _context.SaveChangesAsync(i);
            return Ok();
        }
    }
}




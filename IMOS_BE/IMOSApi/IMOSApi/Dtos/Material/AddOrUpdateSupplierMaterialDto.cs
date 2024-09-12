using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Dtos.Material
{
    public class AddMaterialDto
    {

        [Required]
        public string Name { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public int Quantity { get; set; }
        [Required]

        public int MaterialtypeId { get; set; }

        public List<SupplierItemDto> Suppliers { get; set; }
        public List<WarehouseItemDto> Warehouses { get; set; }

        public AddMaterialDto()
        {
            Suppliers = new List<SupplierItemDto>();
            Warehouses = new List<WarehouseItemDto>();

        }
    }

    public class SupplierItemDto
    {
        [Required]
        public int SupplierId { get; set; }
    }

    public class WarehouseItemDto
    {
        [Required]
        public int WarehouseId { get; set; }
    }
   
}

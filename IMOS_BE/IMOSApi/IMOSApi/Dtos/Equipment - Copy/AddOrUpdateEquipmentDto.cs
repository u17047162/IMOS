using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Dtos.Equipment
{
    public class AddOrUpdateEquipmentDto
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public int Quantity { get; set; }

        public List<WarehouseItemDto> Warehouses { get; set; }

        public AddOrUpdateEquipmentDto()
        {
           
            Warehouses = new List<WarehouseItemDto>();
        }

        public class WarehouseItemDto
        {
            [Required]
            public int WarehouseId { get; set; }
        }

    }
}

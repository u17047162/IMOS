using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Dtos.Equipment
{
    public class GetEquipmentsDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int quantity { get; set; }
        public string WarehouseName { get; set; }
        public int WarehouseId { get; set; }


    }
}

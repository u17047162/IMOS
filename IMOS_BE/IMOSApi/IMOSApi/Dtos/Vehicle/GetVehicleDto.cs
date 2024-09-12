using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Dtos.Vehicle
{
    public class GetVehicleDto
    {
        public int Id { get; set; }
        public int BrandId { get; set; }
        public string Name { get; set; }

        public string Vehicletype { get; set; }
        public int VehicletypeId { get; set; }

        public string Color { get; set; }

        public int ModelId { get; set; }
        public string ModelName { get; set; }
        public string Year { get; set; }

        public string DatePurchased { get; set; }

        public int AssignedStatus { get; set; }


    }
}

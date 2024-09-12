using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Dtos.VehicleTree
{
    public class AddOrUpdateTypesModels
    {
        public int Id { get; }
        public string Name { get; set; }
        public string Year { get; set; }
        public string Color { get; set; }
    }
}

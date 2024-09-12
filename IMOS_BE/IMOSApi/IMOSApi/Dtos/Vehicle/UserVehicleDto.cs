namespace IMOSApi.Dtos.Vehicle
{
    public class UserVehicleDto
    {
        public int vehicleId { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public string Year { get; set; }
        public string Color { get; set; }
        public string DatePurchased { get; set; }
        public string LastServiced { get; set; }
        public int VehicleStatus { get; set; }
        public string Vehicletype { get; set; }
        public int VehicletypeId { get; set; }
        public int AssignedStatus { get; set; }

        public string Name { get; set; }

    }
}

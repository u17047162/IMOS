namespace IMOSApi.Dtos.TaskMaterial
{
    public class TaskBasketMaterial
    {
        public int id { get; set; }

        public string MaterialName { get; set; }
        public string MaterialTypeName { get; set; }

        public int MaterialTypeId { get; set; }
        public int quantity { get; set; }
        public string Description { get; set; }
    }
}

namespace IMOSApi.Dtos.ManageBasket
{
    public class GetBasketItemsDto
    {
        public int Id { get; set; }

        public int MaterialId { get; set; }
        public string MaterialName { get; set; }
        public string Description { get; set; }
        public int Quantity  { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Dtos.Order
{
    public class AddSupplierOrderCart
    {

       // public string Status { get; set; }
        public int Quantity { get; set; }
        public int supplierId { get; set; }

        public List<MaterialItemDto> Materials { get; set; }
     //   public List<SupplierItemDto> Suppliers { get; set; }

        public AddSupplierOrderCart()
        {
          //  Suppliers = new List<SupplierItemDto>();
            Materials = new List<MaterialItemDto>();

        }
    }
   
    public class MaterialItemDto
    {
        [Required]
        public int MaterialId { get; set; }
    }
    //public class SupplierItemDto
    //{
    //    [Required]
    //    public int SupplierId { get; set; }
    //}
}

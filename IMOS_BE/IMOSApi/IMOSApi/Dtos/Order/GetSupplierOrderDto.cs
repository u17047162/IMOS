using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Dtos.Order
{
    public class GetSupplierOrderDto
    {
        public int Id { get; set; }
        public string Date { get; set; }
        public string OrderNumber { get; set; }
        public int SupplierId { get; set; }
        public int Quantity { get; set; }

        public string supplierName { get; set; }
        public string orderStatus { get; set; }



    }
}

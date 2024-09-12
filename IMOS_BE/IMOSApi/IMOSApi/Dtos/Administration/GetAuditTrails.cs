using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Dtos.Administration
{
    public class GetAuditTrails
    {
        public int Id { get; set; }

        public string operationtype { get; set; }
        public string tablename { get; set; }
        public string primarykey { get; set; }
        public string? oldvalues { get; set; }
        public string? newvalues { get; set; }
        public string datetimestap { get; set; }
        public string? affectedcolumns { get; set; }
        public int userId { get; set; }
        public string user { get; set; }




    }
}

using IMOSApi.Enums;
using IMOSApi.Models;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Dtos
{
    public class AuditEntry
    {
        public AuditEntry(EntityEntry entry)
        {
            Entry = entry;
        }

        public EntityEntry Entry { get; }
        public string UserId { get; set; }
        public string TableName { get; set; }
        public Dictionary<string, object> KeyValues { get; } = new Dictionary<string, object>();
        public Dictionary<string, object> OldValues { get; } = new Dictionary<string, object>();
        public Dictionary<string, object> NewValues { get; } = new Dictionary<string, object>();
        public AuditType AuditType { get; set; }
        public List<string> ChangedColumns { get; } = new List<string>();

        public Auditlog ToAuditlog()
        {
            var audit = new Auditlog();
          // audit.UserId = UserId.Con();
            audit.Operationtype = AuditType.ToString();
            audit.Tablename = TableName;
            audit.Datetimestap = DateTime.UtcNow;
            audit.Primarykey = JsonConvert.SerializeObject(KeyValues);
            audit.Oldvalues = OldValues.Count == 0 ? null : JsonConvert.SerializeObject(OldValues);
            audit.Newvalues = NewValues.Count == 0 ? null : JsonConvert.SerializeObject(NewValues);
            audit.Affectedcolumns=ChangedColumns.Count==0 ?null: JsonConvert.SerializeObject(ChangedColumns);
            return audit;
        }


    }
}

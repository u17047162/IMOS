using System;
using System.Collections.Generic;

namespace IMOSApi.Dtos.Task
{
    public class AddOrUpdateTaskDto
    {
        public int TasktypeId { get; set; }
        public int ProjectId { get; set; }
        public DateTime Startdate { get; set; }
        public DateTime Enddate { get; set; }
        public string Description { get; set; }
    }
}

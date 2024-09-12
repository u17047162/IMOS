
using System;
using System.Collections.Generic;


namespace IMOSApi.Dtos.Task
{
    public class GetTaskDto
    {
        public int TaskId { get; set; }
        public string TasktypeDescription { get; set; }
        public string Startdate { get; set; }
        public string Enddate { get; set; }
        public string StatusName { get; set; }
        public int Qnapassed { get; set; }
        public string Description { get; set; }
        public string projectName { get; set; }

    }
}

using System;

namespace IMOSApi.Dtos.Incident
{
    public class AddOrUpdataIncidentDto
    {

       
        public string Description { get; set; }

        public DateTime Date { get; set; }
        public int ProjectId { get; set; }
    }
}

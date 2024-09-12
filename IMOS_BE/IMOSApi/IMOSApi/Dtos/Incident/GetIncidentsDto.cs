namespace IMOSApi.Dtos.Incident
{
    public class GetIncidentsDto
    {

        public int IncidentId { get; set; }
        public string Description { get; set; }
        public string Date { get; set; }
        public int ProjectId { get; set; }
        public string ProjectName { get; set; }


    }
}

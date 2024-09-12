namespace IMOSApi.Dtos.ProjectMaterialRequestReport
{
    public class ProjectRequestDTOcs
    {
        public int Project { get; set; }


        public string ClientName { get; set; }

        public int ProjectmaterialrequestId { get; set; }


    }



    public class MaterialCompositionDto
    {
        public int Project { get; set; }


        public string MaterialName { get; set; }

        public int ProjectmaterialrequestId { get; set; }

        public int Quantity { get; set; }


    }


}

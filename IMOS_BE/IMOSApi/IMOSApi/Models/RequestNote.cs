using System.ComponentModel.DataAnnotations.Schema;

namespace IMOSApi.Models
{
  

    public class RequestNote
    {

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Description { get; set; }

      
        public int ProjectmaterialrequestId { get; set; }

       

        public virtual Projectmaterialrequest Projectmaterialrequest { get; set; }

    }
}

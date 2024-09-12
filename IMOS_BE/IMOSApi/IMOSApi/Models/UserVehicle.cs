using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Models
{
    public class UserVehicle
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserVehicle_Id { get; set; }

        public int Vehicle_Id { get; set; }

        public int User_Id { get; set; }


        public virtual User User { get; set; }
        public virtual Vehicle Vehicle { get; set; }



    }
}

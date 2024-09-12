using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Group43.Core.Identity
{
   public class AppRole:IdentityRole
    {
        [MaxLength(75)]
        [Required]
        public string Description { get; set; }//extend IndentityRole class
    }
}

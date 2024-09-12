using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using IMOSApi.Models;


namespace IMOSApi.Dtos.Client
{
    public class AddOrUpdateRequestDto
    {
     
        public int Id { get;}
        public string Description { get; set; }
       
    }
}

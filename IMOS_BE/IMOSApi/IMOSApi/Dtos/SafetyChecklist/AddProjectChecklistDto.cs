using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Dtos.SafetyChecklist
{
    public class AddProjectChecklistDto
    {
        public int ProjectId { get; set; }
        public List<ItemDto> SafetyItems { get; set; }
      

        public AddProjectChecklistDto()
        {

            SafetyItems = new List<ItemDto>();
        }

        public class ItemDto
        {
            [Required]
            public int SafetyfileitemId { get; set; }
        }


    }
}

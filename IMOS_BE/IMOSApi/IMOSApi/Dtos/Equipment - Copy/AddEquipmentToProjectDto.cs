using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Dtos.Equipment
{
    public class AddEquipmentToProjectDto
    {
        public int ProjectId { get; set; }
        public List<EquipmentItemDto> Equipments { get; set; }

        public AddEquipmentToProjectDto()
        {
            Equipments = new List<EquipmentItemDto>();
        }
        public class EquipmentItemDto
        {
            [Required]
            public int EquipmentId { get; set; }
        }
    }
}

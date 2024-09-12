using IMOSApi.Dtos.Equipment;
using IMOSApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectEquipmentController : ControllerBase
    {
        private readonly IMOSContext _context;
        public ProjectEquipmentController(IMOSContext context)
        {
            _context = context;
        }

        [HttpGet("GetAll")]
        public ActionResult<IEnumerable<GetAllProjectEquipmentsDto>> GetAll()
        {
            var recordsInDb = _context.Projectequipments
                .Include(item => item.Project)
                .Include(item=>item.Equipment)
                  .Select(item => new GetAllProjectEquipmentsDto()
                  {
                      ProjectId=item.ProjectId,
                      ProjectName=item.Project.Name,
                      EquipmentId=item.EquipmentId,
                      Name=item.Equipment.Name,
                      Description=item.Equipment.Description

                  }).OrderBy(item => item.ProjectName).ToList();
            return recordsInDb;
        }

        [HttpGet("GetProjectequipment/{id}")]
        public IEnumerable<Projectequipment> Get(int id)
        {
            
            
                IEnumerable<Projectequipment> tmp = _context.Projectequipments.Where(emp => emp.ProjectId == id).ToList();
                return tmp;
            
        }

        [HttpPost("Assign")]
        public IActionResult Assign(AddEquipmentToProjectDto model)
        {
            var message = "";
            if (ModelState.IsValid)
            {
                var projectEquipmentInDb = _context.Projectequipments.FirstOrDefault(item => item.ProjectId == model.ProjectId);
                if (projectEquipmentInDb != null)
                {
                    message = "Project not found";
                    return BadRequest(new { message });
                }

                foreach (var item in model.Equipments)
                {
                    var record = new Projectequipment()
                    {
                        ProjectId = model.ProjectId,
                        EquipmentId =item.EquipmentId
                    };
                    _context.Projectequipments.Add(record);
                }

                _context.SaveChanges();
                return Ok();
            }
            message = "Something went wrong on your side.";
            return BadRequest(new { message });

        }

        //[HttpPut("UpdateProjectequipment/{Id}")]
        //public void Update([FromBody] Projectequipment Projectequipment, [FromRoute] int Id)
        //{
        //    using (var context = new IMOSContext())
        //    {
        //        var clie = context.Projectequipments.Where(clie => clie.ProjectId == Id).ToList().FirstOrDefault();
        //        //emp.
        //        context.SaveChanges();
        //    }
        //}
        //[HttpDelete("DeleteProjectequipment/{Id}")]
        //public void Delete(int id)
        //{
        //    using (var context = new IMOSContext())
        //    {
        //        var clie = context.Projectequipments.Where(clie => clie.ProjectId == id).ToList().FirstOrDefault(); ;
        //        context.Projectequipments.Remove(clie);
        //        context.SaveChanges();
        //    }
        //}

    }
}

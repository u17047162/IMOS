using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IMOSApi.Dtos.MaterialRequest;
using IMOSApi.Models;
using Microsoft.EntityFrameworkCore;

namespace IMOSApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectMaterialRequestController : ControllerBase
    {
        //private readonly IMOSContext db = new IMOSContext();

        //private readonly IMOSContext _context;

        //public ProjectMaterialRequestController(IMOSContext context)
        //{
        //    _context = context;
        //}


        //[HttpGet("GetAllMaterialRequests")]
        //public ActionResult<IEnumerable<GetMaterialRequestDto>> GetAllMaterialRequests()
        //{
        //    var recordInDb = _context.Projectmaterialrequest
        //        .Select(item => new GetMaterialRequestDto()
        //        {
        //            MaterialRequestId = item.ProjectmaterialrequestId,
        //            UrgencyLevelName = item.Urgencylevel.Level,
        //            ProjectId = item.ProjectId,
        //            RequestDate = item.RequestDate,
                    

        //        }).OrderBy(item => item.RequestDate).ToList();
        //    return recordInDb;
        //}


        //[HttpGet("GetRequestBYProject/{Id}")]
        //public  ActionResult<IEnumerable<GetMaterialRequestDto>> GetMaterialRequestBYProject(int Id)
        //{
        //    var recordInDb = _context.Projectmaterialrequest
        //        .Where(item => item.ProjectId == Id)
        //        .Select(item => new GetMaterialRequestDto()
        //        {
        //            MaterialRequestId = item.ProjectmaterialrequestId,
        //            ProjectId = item.ProjectId,
                
        //            RequestDate = item.RequestDate,
        //            StatusName= item.Projectmaterialrequeststatus.Name,
        //            StatusUpdateDate = item.StatusUpdateDate,
        //            UrgencyLevelName = item.Urgencylevel.Level,
                    

        //        }).OrderBy(item => item.RequestDate).ToList();

        //    return recordInDb;
        //}

        //[HttpGet("ViewRequestDetails/{Id}")]
        //public ActionResult<IEnumerable<MaterialRequestDetailsDTo>> ViewRequestDetails(int Id)
        //{
        //    var recordInDb = _context.Projectmaterialrequestlist
        //        .Where(item => item.ProjectmaterialrequestId == Id)
        //        .OrderBy(item => item.Material.Name)
        //        .Select(line => new MaterialRequestDetailsDTo()
        //        {
        //            MaterialName = line.Material.Name,
        //            Description = line.Material.Description,
        //            MaterialTypeName = line.Material.Materialtype.Name,
        //            Quantity = line.Quantity,
        //        }
        //        ).ToList();

        //    return recordInDb;
        //}




        //[HttpGet("GetRequestBYProjectWithDetails/{Id}")]
        //public ActionResult<ICollection<GetMaterialRequestByProjectDTO>> GetRequestBYProject(int Id)
        //{
        //    var ProjectMaterialReq = _context.Projectmaterialrequest
        //        .Include(item => item.Projectmaterialrequestlists)
        //        .Where(item => item.Project.ProjectId == Id)
        //        .OrderBy(item => item.RequestDate)
        //        .Select(item => new GetMaterialRequestByProjectDTO()
        //        {
                 
        //            RequestDate = item.RequestDate.ToString("f"),
        //            UrgencyLevelName = item.Urgencylevel.Level,
        //            Materials = (ICollection<MaterialRequestDetailsDTo>)item.Projectmaterialrequestlists

        //            .Select(line => new MaterialRequestDetailsDTo
        //            {


        //                MaterialName = line.Material.Name,
        //                Description = line.Material.Description,
        //                MaterialTypeName = line.Material.Materialtype.Name,
        //                Quantity = line.Quantity,

        //            }).ToList()


        //        }).ToList();

        //    return ProjectMaterialReq;
        //}

        //[HttpGet("GetCalendarViewRequests")]
        //public dynamic GetCalendarViewRequests()
        //{
        //    var recordInDb = _context.Projectmaterialrequest
        //        .Include(item => item.Project.Initialrequest.Client)
        //        .Include(item => item.Urgencylevel)
        //        .Include(item => item.Projectmaterialrequeststatus)
        //        .Where(item => item.ProjectmaterialrequeststatusId == 1 || item.ProjectmaterialrequeststatusId == 3)
        //        .Select(item => new CalendarViewDto()
        //        {
        //            ClientName = item.Project.Initialrequest.Client.Clientname,
        //            StatusName = item.Projectmaterialrequeststatus.Name,
        //            UrgencyLevelName = item.Urgencylevel.Level,
        //            RequestDate = item.RequestDate.ToString("G"),
        //            StatusUpdateDate = item.StatusUpdateDate.ToString("G"),
        //        }).ToList();


        //    return recordInDb;
        //}


        //[HttpGet]
        //[Route("getMaterialRequest")]
        //public object getMaterialRequest(int id)
        //{
        //    var MaterialRequestList = db.Projectmaterialrequest.ToList();

        //    return MaterialRequestList;
        //}


        //[HttpPost]
        //[Route("CreateMaterialRequest/{projectid}/{urgencyLevelId}")]
        //public object CreateMaterialRequest([FromBody] BasketMaterial[] basketmaterial, int projectid, int urgencyLevelId)
        //{




        //    Projectmaterialrequest requestCreate = new Projectmaterialrequest()
        //    {
        //        RequestDate = DateTime.Now,
        //        StatusUpdateDate = DateTime.Now,
        //        ProjectId = projectid,
        //        UrgencylevelId = urgencyLevelId,
           
        //        ProjectmaterialrequeststatusId = 3,


        //    };

        //    try
        //    {
        //        foreach (var item in basketmaterial)
        //        {
        //            Projectmaterialrequestlist projectmaterialrequestlist = new Projectmaterialrequestlist
        //            {
        //                Projectmaterialrequest = requestCreate,
        //                ProjectmaterialrequestId = requestCreate.ProjectmaterialrequestId,
        //                MaterialId = item.id,
        //                Material = db.Materials.Find(item.id),
        //                Quantity = item.quantity,

        //            };

        //            db.Projectmaterialrequestlist.Add(projectmaterialrequestlist);

        //        }
        //        db.Projectmaterialrequest.Add(requestCreate);
        //        db.SaveChanges();

        //        return Ok();

        //    }

        //    catch (Exception e)
        //    {
        //        Console.WriteLine(e.InnerException.Message);
        //        return BadRequest(e.Message);


        //    }


        //}

        //[HttpPut]
        //[Route("ManageMaterialRequestStatus/{projectmaterialrequestId}/{projectmaterialrequeststatusId}")]

        //public object ApproveMaterialRequest( int projectmaterialrequestId, int projectmaterialrequeststatusId)
        //{
        //    var recordInDB = _context.Projectmaterialrequest
        //        .FirstOrDefault(item => item.ProjectmaterialrequestId == projectmaterialrequestId);

            

        //    if (recordInDB == null)
        //    {
        //        return NotFound();
        //    }
        //    try
        //    {

        //        recordInDB.ProjectmaterialrequeststatusId = projectmaterialrequeststatusId;
        //        recordInDB.StatusUpdateDate = DateTime.Now;

        //       _context.SaveChanges();

        //        return Ok();
        //    }

        //    catch (Exception e)
        //    {
        //        Console.WriteLine(e.InnerException.Message);
        //        return BadRequest(e.Message);
        //    }
        //}



        //    [HttpDelete("DeleteMaterialRequest/{Id}")]
        //public async Task<ActionResult<Projectmaterialrequest>> DeleteMaterialRequest(int Id)
        //{
        //    var recordInd = await _context.Projectmaterialrequest.FindAsync(Id);

        //    if (recordInd == null)
        //    {
        //        return NotFound();
        //    }

        //    var ProjectMaterialRequest = _context.Projectmaterialrequestlist
        //            .Where(item => item.ProjectmaterialrequestId == Id);
        //    _context.Projectmaterialrequestlist.RemoveRange(ProjectMaterialRequest);
        //    _context.Projectmaterialrequest.Remove(recordInd);
        //    await _context.SaveChangesAsync();

        //    return Ok();


        //}



        //[HttpGet("GetAllUrgencyLvl")]
        //public ActionResult<IEnumerable<GetUrgencyLevel>> GetAllUrgencyLvl()
        //{
        //    var recordInDb = _context.Urgencylevels
        //        .Select(item => new GetUrgencyLevel()
        //        {   Id= item.UrgencylevelId,
        //            Description = item.Description,
        //            Level = item.Level,
        //        }).OrderBy(item => item.Level).ToList();
        //    return recordInDb;
        //}

        //[HttpGet("GetUrgencyLvl{id}")]
        //public ActionResult<GetUrgencyLevel> GetUrgencyLvl(int id)
        //{
        //    var recordInDb = _context.Urgencylevels
        //        .Where(item => item.UrgencylevelId == id)
        //        .Select(item => new GetUrgencyLevel()
        //        {
        //            Id = item.UrgencylevelId,
        //            Description = item.Description,
        //            Level = item.Level,
        //        }).FirstOrDefault();

        //    if (recordInDb == null)
        //    {
        //        return NotFound();
        //    }
        //    return recordInDb;
        //}


        //[HttpPost("AddUrgencyLvl")]
        //public IActionResult AddUrgencyLvl(AddOrUpdateUrgencyLevel model)
        //{
        //    var message = "";
        //    if (ModelState.IsValid)
        //    {
        //        var recordInDb = _context.Urgencylevels
        //            .FirstOrDefault(item=>item.Level.ToLower() == model.Level.ToLower());

        //        if (recordInDb != null)
        //        {
        //            message = "Record already exist";
        //            return BadRequest(new { message });
        //        }

        //        var NewUrgencyLvl = new Urgencylevel()
        //        {
        //            Level = model.Level,
        //            Description = model.Description,
        //        };

        //        _context.Urgencylevels.Add(NewUrgencyLvl);
        //        _context.SaveChanges();
        //        return Ok();

        //    }

        //    message = "Something went wrong on your side.";
        //    return BadRequest(new { message });
        //}

        //[HttpPut("UpdateUrgencyLvl/{Id}")]
        //public IActionResult UpdateUrgencyLvl(AddOrUpdateUrgencyLevel model, int Id)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        var recordInDb = _context.Urgencylevels
        //            .FirstOrDefault(item => item.UrgencylevelId == Id);

        //        if (recordInDb == null)
        //        {
        //            return NotFound();
        //        }

        //        recordInDb.Description = model.Description;
        //        recordInDb.Level=model.Level;

        //        _context.SaveChanges();
        //        return Ok();
        //    }

        //    var message = "Something went wrong on your side.";
        //    return BadRequest(new { message });
        //}

        //[HttpDelete("DeleteUrgencylvl/{Id}")]
        //public async Task<ActionResult<Urgencylevel>> DeleteUrgencylvl(int Id)
        //{
        //    var recordInDb = await _context.Urgencylevels.FindAsync(Id);

        //    if (recordInDb == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Urgencylevels.Remove(recordInDb);
        //    await _context.SaveChangesAsync();

        //    return Ok();

        //}

        //[HttpGet("GetAllRequestsStatus")]
        //public ActionResult<IEnumerable<GetRequestStatus>> GetAllRequestsStatus()
        //{
        //    var recordInDb = _context.Projectmaterialrequeststatus
        //        .Select(item => new GetRequestStatus()
        //        {
        //            Id = item.ProjectmaterialrequeststatusId,
        //            Name = item.Name,

        //        }).ToList();

        //    return recordInDb;
        //}



    }
}

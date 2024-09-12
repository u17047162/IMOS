using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using IMOSApi.Models;
using System.Dynamic;
using IMOSApi.Dtos.ProjectMaterialRequestReport;
using System.Text;

using System.Security.Cryptography;


namespace IMOSApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectMaterialRequestReportsController1 : ControllerBase
    {

      //  private readonly IMOSContext db = new IMOSContext();

      //  private readonly IMOSContext _context;

      //  public ProjectMaterialRequestReportsController1(IMOSContext context)
      //  {
      //      _context = context;
      //  }

      //  [HttpGet("GetMaterialRequesytByStatus/{StatusId}")]

      //  public ActionResult<ICollection<materialrequestReportDto>> GetRequestBYProject(int StatusId)
      //  {

      //      var recordInDb = _context.Projectmaterialrequest
      //          .Where(item => item.ProjectmaterialrequeststatusId == StatusId)
      //          .Include(item => item.Project.Initialrequest.Client)
      //          .Include(item => item.Projectmaterialrequestlists)
      //          .Select(item => new materialrequestReportDto()
      //          {
      //              ClientName = item.Project.Initialrequest.Client.Clientname,
      //              StatusName = item.Projectmaterialrequeststatus.Name,
      //              RequestDate = item.RequestDate,
      //              UrgencyLevelName = item.Urgencylevel.Level,
      //              materialCount = item.Projectmaterialrequestlists.Count()

      //          });

      //      return recordInDb.ToList();

      //  }



      //  [HttpGet]
      //  [Route("GetProjectMaterialRequestCount")]

      //  public dynamic ProjectRequestDTOcs()
      //  {
      //      var recordInDb = _context.Projectmaterialrequest
      //          .Include(item => item.Project)
      //          .Include(item => item.Project.Initialrequest.Client)
      //          .Select(item => new ProjectRequestDTOcs()
      //          {
      //              Project = item.Project.ProjectId,
      //              ProjectmaterialrequestId= item.ProjectmaterialrequestId,
      //              ClientName=item.Project.Initialrequest.Client.Clientname,
                    
      //          }).OrderBy(x => x.ClientName).ToList();

      //      var results = recordInDb.GroupBy(x => x.ClientName)
      //          .Select(y => new
      //          {

      //              ClientName = y.Key,
      //              Count = y.Count()
      //          });

      //      return results;
      //  }

      //  [HttpGet]
      //  [Route("GetRequestDashboard/{Id}")]
      //  public dynamic GetRequestDashboard(int Id)
      //  {
      //      var reportData =  _context.Projectmaterialrequest
      //          .Include(item => item.Projectmaterialrequeststatus)
      //          .Where(item => item.ProjectId == Id).ToList();

      //      var Data = _context.Projectmaterialrequest
      //          .Include(item => item.Project)
      //          .Where(item => item.ProjectId == Id).ToList();


      //      try
      //      {

      //          List<dynamic> RequestBoard = new List<dynamic>();

      //          dynamic ApprovedRequest = reportData
      //              .Where(item => item.ProjectmaterialrequeststatusId == 1)
      //              .GroupBy(p => p.Projectmaterialrequeststatus.Name)
      //              .Select(b => new
      //              {
      //                  RequestStatusName = b.Key,
      //                  ApprovedRequest = b.Count()
      //              });

      //          dynamic DeclinedRequest = reportData
      //            .Where(item => item.ProjectmaterialrequeststatusId == 2)
      //            .GroupBy(p => p.Projectmaterialrequeststatus.Name)
      //            .Select(b => new
      //            {
      //                RequestStatusName = b.Key,
      //                DeclindedRequest = b.Count()
      //            });

      //          dynamic PendingRequest = reportData
      //           .Where(item => item.ProjectmaterialrequeststatusId == 3)
      //           .GroupBy(p => p.Projectmaterialrequeststatus.Name)
      //           .Select(b => new
      //           {
      //               RequestStatusName = b.Key,
      //               PendingRequest = b.Count()
      //           });

      //          dynamic ALlRequestCount = Data
      //           .GroupBy(p => p.ProjectId)
      //           .Select(b => new
      //           {
      //               ProjectName = b.Key,
      //               TotalRequest = b.Count()
      //           });

      //          RequestBoard.Add(ApprovedRequest);
      //          RequestBoard.Add(DeclinedRequest);
      //          RequestBoard.Add(PendingRequest);
      //          RequestBoard.Add(ALlRequestCount);

      //          return RequestBoard;


      //      }

      //      catch (Exception)
      //      {
      //          return StatusCode(StatusCodes.Status500InternalServerError, "Internal Server Error. Please contact support.");
      //      }


      //  }


      //  [HttpGet]
      //  [Route("GetApprovedRequestCount")]
      //  public dynamic GetApprovedRequestCount()
      //  {
      //      var recordInDb = _context.Projectmaterialrequest
      //          .Include(item => item.Project)
      //          .Include(item => item.Project.Initialrequest.Client)
      //          .Where(item => item.ProjectmaterialrequeststatusId ==1)
      //          .Select(item => new ProjectRequestDTOcs()
      //          {
      //              Project = item.Project.ProjectId,
      //              ProjectmaterialrequestId = item.ProjectmaterialrequestId,
      //              ClientName = item.Project.Initialrequest.Client.Clientname,

      //          }).OrderBy(x => x.ClientName).ToList();



      //      var results = recordInDb.GroupBy(x => x.ClientName)
      //          .Select(y => new
      //          {

      //              ClientName = y.Key,
      //              Count = y.Count()
      //          });

      //      return results;
      //  }

      //  [HttpGet]
      //  [Route("MaterialCompositionCount")]
      //  public dynamic  MaterialCompositionCount()
      //  {
      //      var recordInDb = _context.Projectmaterialrequestlist
      //         .Include(item => item.Material)
      //         .Include(item => item.Projectmaterialrequest)
      //         .Where(item => item.Projectmaterialrequest.ProjectmaterialrequeststatusId == 1)
      //         .Select(item => new MaterialCompositionDto()
      //         {
         
      //             ProjectmaterialrequestId = item.ProjectmaterialrequestId,
      //             MaterialName = item.Material.Name,
      //             Quantity = item.Quantity,

      //         }).OrderBy(x => x.MaterialName).ToList();



      //      var results = recordInDb.GroupBy(x => x.MaterialName)
      //       .Select(y => new
      //       {

      //           MaterialName = y.Key,
      //           Count = y.Count(),
      //           MaterialTotal = Math.Round((double)y.Sum(p => p.Quantity), 2),
      //           MaterialAverage = Math.Round(y.Average(p => p.Quantity), 2),
      //       });

      //      return results;

      //  }


      //  [HttpGet]
      //  [Route("ApprovalRate")]
      //  public dynamic ApprovalRate()
      //  {

      //      var recordInDb = _context.Projectmaterialrequest
      //          .Include(item => item.Project)
      //          .Include(item => item.Project.Initialrequest.Client)
      //          .Where(item => item.ProjectmaterialrequeststatusId == 1).ToList();

      //      if( recordInDb == null)
      //      {
      //          return NotFound();
      //      }


      //        foreach (var item in recordInDb)
      //          {

      //          TimeSpan ts = item.StatusUpdateDate - item.RequestDate;

      //          double differenceInHours =  ((long)(ts.TotalMinutes));

      //          return differenceInHours;
      //          }


      //           //   TimeSpan ts = (item.StatusUpdateDate - item.RequestDate);

      //            //  double differenceInHours = ((long)(ts.Minutes));

      //           // return differenceInHours;
         
            

      //  return false;


      //  }


      //[HttpGet]
      //  [Route("RequestMaterialControl/{projectId}")]
        
      //  public dynamic RequestMaterialControl(int projectId)
      //  {

      //      var reportData = _context.Projectmaterialrequestlist
      //          .Include(xx => xx.Material)
      //          .Include(xx => xx.Projectmaterialrequest)
      //          .Where(xx => xx.Projectmaterialrequest.ProjectmaterialrequeststatusId == 1 && xx.Projectmaterialrequest.ProjectId==projectId).ToList();


            
      //          dynamic dynTableData = new ExpandoObject();
      //          dynTableData.reportData = null;

      //          var requests = reportData.GroupBy(item => item.Material.Name);
      //          List<dynamic> requestGroups = new List<dynamic>();


      //          foreach (var item in requests)
      //          {
      //              dynamic requestList = new ExpandoObject();

      //              requestList.MaterialName = item.Key;
      //              requestList.AverageQuantityRequested = Math.Round((double)item.Average(xx => xx.Quantity), 2);
      //                requestList.ToTalQuantity = Math.Round((double)item.Sum(xx => xx.Quantity), 2);

      //              List<dynamic> materialRequests = new List<dynamic>();

      //              foreach (var request in item)
      //              {
      //                  dynamic requestObject = new ExpandoObject();
      //                  requestObject.RequestDate = request.Projectmaterialrequest.RequestDate;
      //                  requestObject.ApproveDate = request.Projectmaterialrequest.StatusUpdateDate;
      //                  requestObject.requestQuantity = request.Quantity;


      //                  materialRequests.Add(requestObject);
      //              }

      //              requestList.MaterialRequests = materialRequests;
      //              requestGroups.Add(requestList);

      //          }


      //          dynTableData.reportData = requestGroups;
      //          return dynTableData;

      //  }


      //  [HttpGet]
      //  [Route("AllRequestMaterialControlreport")]
      //  public dynamic AllRequestMaterialControlreport( )
      //  {

      //      var reportData = _context.Projectmaterialrequestlist
      //         .Include(xx => xx.Material)
      //         .Include(xx => xx.Projectmaterialrequest)
      //         .Where(xx => xx.Projectmaterialrequest.ProjectmaterialrequeststatusId == 1).ToList();



      //      dynamic dynTableData = new ExpandoObject();
      //      dynTableData.reportData = null;

      //      var requests = reportData.GroupBy(item => item.Material.Name);
      //      List<dynamic> requestGroups = new List<dynamic>();


      //      foreach (var item in requests)
      //      {
      //          dynamic requestList = new ExpandoObject();

      //          requestList.MaterialName = item.Key;
      //          requestList.AverageQuantityRequested = Math.Round((double)item.Average(xx => xx.Quantity), 2);
      //          requestList.ToTalQuantity = Math.Round((double)item.Sum(xx => xx.Quantity), 2);

      //          List<dynamic> materialRequests = new List<dynamic>();

      //          foreach (var request in item)
      //          {
      //              dynamic requestObject = new ExpandoObject();
      //              requestObject.RequestDate = request.Projectmaterialrequest.RequestDate;
      //              requestObject.ApproveDate = request.Projectmaterialrequest.StatusUpdateDate;
      //              requestObject.requestQuantity = request.Quantity;


      //              materialRequests.Add(requestObject);
      //          }

      //          requestList.MaterialRequests = materialRequests;
      //          requestGroups.Add(requestList);

      //      }


      //      dynTableData.reportData = requestGroups;
      //      return dynTableData;


      //  }




    }
}

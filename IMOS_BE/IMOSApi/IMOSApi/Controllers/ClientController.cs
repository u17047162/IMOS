
using IMOSApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using IMOSApi.Dtos.Client;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.Dynamic;



namespace IMOSApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ClientController : ControllerBase
    {
        private readonly IMOSContext _dbContext;
        public ClientController(IMOSContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet("GetAllClients")]
        public ActionResult<IEnumerable<GetClients>> GetAllClients()
        {
            var recordIndb = _dbContext.Clients
                .Select(item => new GetClients()
                {
                    ClientId = item.ClientId,
                    Clientemail = item.Clientemail,
                    ClientName = item.Clientname,
                    Contactnumber = item.Contactnumber,
                }).OrderBy(item => item.ClientName).ToList();
            return recordIndb;
        }

        [HttpGet("{id}")]
        public ActionResult<GetClients> GetClient(int id)
        {
            var recordiInDb = _dbContext.Clients
                .Where(item => item.ClientId == id)
                .Select(item => new GetClients()
                {
                    ClientId = item.ClientId,
                    ClientName = item.Clientname,
                    Clientemail = item.Clientemail,
                    Contactnumber = item.Contactnumber,

                }).FirstOrDefault();
            if (recordiInDb == null)
            {
                return NotFound();
            }

            return recordiInDb;
        }

        [HttpPost("AddClient")]
        public async Task< IActionResult> AddClient(AddOrUpdateClientDto model)
        {
            var message = "";
            if (ModelState.IsValid)
            {
                var recordInDb = _dbContext.Clients.FirstOrDefault(item => item.Clientname.ToLower() == model.ClientName.ToLower());
                if (recordInDb != null)
                {
                    message = "Record already exist";
                    return BadRequest(new { message });
                }

                var NewClient = new Client()
                {
                    Clientname = model.ClientName,
                    Clientemail = model.Clientemail,
                    Contactnumber = model.Contactnumber,
                };
                _dbContext.Clients.Add(NewClient);

                int i = 3;
                await _dbContext.SaveChangesAsync(i);
                return Ok();

            }
            message = "Something went wrong on your side.";
            return BadRequest(new { message });
        }

        [HttpPut("UpdateClient/{Id}")]
        public async Task< IActionResult> UpdateClient(AddOrUpdateClientDto model, int Id)
        {
            if (ModelState.IsValid)
            {
                var recordInDb = _dbContext.Clients.FirstOrDefault(item => item.ClientId == Id);
                if (recordInDb == null)
                {
                    return NotFound();
                }

                recordInDb.Clientname = model.ClientName;
                recordInDb.Clientemail = model.Clientemail;
                recordInDb.Contactnumber = model.Contactnumber; ;
                int i = 3;
                await _dbContext.SaveChangesAsync(i);
                return Ok();

            }
            var message = "Something went wrong on your side.";
            return BadRequest(new { message });
        }

        [HttpDelete("DeleteClient/{Id}")]
        public async Task<ActionResult<Client>> DeleteClient(int Id)
        {
            var recordInDb = await _dbContext.Clients.FindAsync(Id);
            if (recordInDb == null)
            {
                return NotFound();
            }

            var ClientRequests = _dbContext.Requests
                .Where(item => item.ClientId == Id);
            _dbContext.Requests.RemoveRange(ClientRequests);

            _dbContext.Clients.Remove(recordInDb);
            await _dbContext.SaveChangesAsync();

            return Ok();
        }

        [HttpGet("GetAllRequests")]
        public ActionResult<IEnumerable<GetRequests>> GetAllRequests()
        {
            var recordInDb = _dbContext.Requests
                .Include(item => item.Client)
                .Select(item => new GetRequests()
                {
                    RequestId = item.RequestId,
                    ClientId = item.ClientId,
                    ClientName = item.Client.Clientname,
                    Description = item.Description,
                }).OrderBy(item => item.ClientId).ToList();
            return recordInDb;

        }

        [HttpPost("AddRequest")]
        public IActionResult AddRequest(AddOrUpdateRequestDto model)
        {
            var message = "";
            if (ModelState.IsValid)
            {
                var recordInDb = _dbContext.Requests.FirstOrDefault(item => item.Description.ToLower() == model.Description.ToLower());

                if (recordInDb != null)
                {
                    message = "Record already exist";
                    return BadRequest(new { message });
                }


                var newRecord = new Request()
                {
                  //  ClientId = model.Id,
                    ClientId = model.Id,
                    Description = model.Description,
                };
                _dbContext.Requests.Add(newRecord);
                _dbContext.SaveChanges();
                return Ok();
            }

            message = "Something went wrong on your side.";
            return BadRequest(new { message });

        }

        [HttpPost("AddRequest/{Id}")]
        public async Task<ActionResult<Request>> AddRequestByClient(AddOrUpdateRequestDto model, int Id)
        {
            var message = "";
            var recordInDb = await _dbContext.Clients.FindAsync(Id);
                if (recordInDb == null)
            {
                return NotFound();
            }
                else if (ModelState.IsValid)
            {

                var newRecord = new Request()
                {
                    ClientId = Id,
                    Description = model.Description,

                };

                _dbContext.Requests.Add(newRecord);
                _dbContext.SaveChanges();
                return Ok();
            }


            message = "Something went wrong on your side.";
            return BadRequest(new { message });
        }



        [HttpPut("UpdateRequest/{Id}")]
        public IActionResult UpdateRequest(AddOrUpdateRequestDto model, int Id)
        {
            if (ModelState.IsValid)
            {
                var recordInDb = _dbContext.Requests.FirstOrDefault(item => item.RequestId == Id);
                if (recordInDb == null)
                {
                    return NotFound();
                }

                recordInDb.Description = model.Description;

               

                _dbContext.SaveChanges();
                return Ok();
            }

            var message = "Something went wrong on your side.";
            return BadRequest(new { message });
        }


      


        [HttpDelete("DeleteRequest/{Id}")]
        public async Task<ActionResult<Request>> DeleteRequest(int Id)
        {
            var recordInDb = await _dbContext.Requests.FindAsync(Id);

            if (recordInDb == null)
            {
                return NotFound();
            }

            _dbContext.Requests.Remove(recordInDb);
            await _dbContext.SaveChangesAsync();

            return Ok();

        }


        [HttpGet("GetRequestBYClient/{id}")]
        public List<Request> GetRequestBYClient(int id)
        {
            var recordInDb = _dbContext.Requests
                .Where(item => item.ClientId == id).ToList();



            return recordInDb;

        }

    }
}
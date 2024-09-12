using IMOSApi.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdministrationController : ControllerBase
    {
        private readonly IMOSContext _IMOSContext;
        

        public AdministrationController(
           IMOSContext appDbContext
        
           )
        {
            _IMOSContext = appDbContext;

            // _roleManager = roleManager;
        }
    }
}

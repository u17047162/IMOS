using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IMOSApi.Dtos.ProjectMaterialRequestReport;
using IMOSApi.Models;
namespace IMOSApi.Dtos.ProjectMaterialRequestReport
{
 /*  public class ReportRepository: IRepository
    {
        private readonly IMOSContext _context;

        public ReportRepository(IMOSContext context)
        {
            _context = context;
        }

        public async Task<bool> SaveChangesAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }

       public async Task<Projectmaterialrequest[]> GetMaterialRequestDashboardReportAsync()
        {
            IQueryable<Projectmaterialrequest> query = _context.Projectmaterialrequest
                .Include(p => p.Projectmaterialrequeststatus)
                .Include(p => p.Urgencylevel);
             return await query.ToArrayAsync();
        
        }

    }*/
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IMOSApi.Models;


namespace IMOSApi.Dtos.ProjectMaterialRequestReport
{
    public interface IRepository
    {
        Task<bool> SaveChangesAsync();
        Task<Projectmaterialrequest[]> GetMaterialRequestDashboardReportAsync();

    }
}

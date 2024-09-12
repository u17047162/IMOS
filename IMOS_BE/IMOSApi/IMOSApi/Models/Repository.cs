using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IMOSApi.Models;



namespace IMOSApi.Models
{
    public class Repository: IRepository
    {
        private readonly IMOSContext _IMOSContext;

        public Repository(IMOSContext iMOSContext)
        {
            _IMOSContext = iMOSContext;
        }

        public async Task<bool> SaveChangesAsync()
        {
            return await _IMOSContext.SaveChangesAsync() > 0;
        }


        public async Task<Task[]> GetTasksBoard(int Id)
        {
            IQueryable<Task> query = _IMOSContext.Tasks
                .Include(item => item.Taskcompletionstatus)
                .Include(item => item.TasktypeNavigation)
                .Include(item => item.Project)
                .Where(item => item.ProjectId == Id);
                

            return await query.ToArrayAsync();
        }


      

    }
}

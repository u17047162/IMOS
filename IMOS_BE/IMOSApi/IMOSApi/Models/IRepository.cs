using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace IMOSApi.Models
{
    public interface IRepository
    {

        Task<bool> SaveChangesAsync();

        Task<Task[]> GetTasksBoard(int id);

    }
}

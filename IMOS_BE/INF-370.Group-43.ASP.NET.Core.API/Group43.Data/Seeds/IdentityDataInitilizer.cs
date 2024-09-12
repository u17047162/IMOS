using Group43.Core.Identity;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Group43.Data.Seeds
{
   public class IdentityDataInitilizer
    {
        public static void SeedDatabase(
           UserManager<AppUser> userManager,
           RoleManager<AppRole> roleManager)
        {
            SeedRoles(roleManager).Wait();
            SeedUsers(userManager).Wait();
        }
        public static async Task SeedRoles(RoleManager<AppRole> roleManager)
        {
            var isAdminRoleIbDb = await roleManager.RoleExistsAsync("SuperAdmin".ToLower());
            if (!isAdminRoleIbDb)
            {
                var role = new AppRole()
                {
                    Name = "SuperAdmin".ToLower(),
                    Description = "System Owner".ToLower()
                };
                await roleManager.CreateAsync(role);
            }
        }

        public static async Task SeedUsers(UserManager<AppUser> userManager)
        {
            var isAdminInDb = await userManager.FindByNameAsync("SuperUser".ToLower());
            if (isAdminInDb == null)
            {
                var adminUser = new AppUser()
                {

                    UserName = "superUser".ToLower(),
                    Email="SuperUser@gmail.com",
                    Name="Ngcebo",
                    Surname="Masilela",
                    AutoAssignedPassword = "Admin12345$"
                };

                var result = await userManager.CreateAsync(adminUser, "Admin12345$");
                if (result.Succeeded)
                {
                    await userManager.AddToRoleAsync(adminUser, "SuperAdmin".ToLower());
                }
            }
        }

    }
}

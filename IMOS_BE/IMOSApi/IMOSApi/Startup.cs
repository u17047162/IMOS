using IMOSApi.Data;
using IMOSApi.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Reflection;

namespace IMOSApi
{
    public class Startup
    {

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            #region Enable Cors
            services.AddCors(options =>
            {
                options.AddDefaultPolicy(builder =>
                {
                    builder.WithOrigins("http://localhost:4200")
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                    .AllowCredentials();
                });
            });
            #endregion


            #region Default Password Settings 
            services.Configure<IdentityOptions>(options =>
            {
                options.Password.RequireDigit = true;
                options.Password.RequireLowercase = true;
                options.Password.RequireNonAlphanumeric = true;
                options.Password.RequireUppercase = true;
                options.Password.RequiredLength = 8;
                options.Password.RequiredUniqueChars = 1; //Only applies to ASP.NET Core 2.0 or later.
            });
            #endregion 



            #region =========== To avoid the MultiPartBodyLength error When uploading a file ===============
            //Guide: https://code-maze.com/upload-files-dot-net-core-angular/
            services.Configure<FormOptions>(o =>
            {
                o.ValueLengthLimit = int.MaxValue;
                o.MultipartBodyLengthLimit = int.MaxValue;
                o.MemoryBufferThreshold = int.MaxValue;
            });

            #endregion

            services.AddMvc();
            //services.AddMvc(
            //    option => option.EnableEndpointRouting = false);
            services.AddControllers();
            var connectionString = Configuration.GetConnectionString("DefaultConnection");
           services.AddDbContext<IMOSContext>(options => options.UseSqlServer(connectionString));

            services.AddScoped<IRepository, Repository>();
            services.AddAutoMapper(Assembly.GetExecutingAssembly());


            services.AddSwaggerGen( /*c => */ options=>
            {
                options.CustomSchemaIds(type => type.ToString());

               // c.SwaggerDoc("v1", new OpenApiInfo { Title = "IMOSApi", Version = "v1" });

              options.SwaggerDoc("v1", new OpenApiInfo { Title = "IMOSApi", Version = "v1" });
            });


            #region JWT Settings 

            var jwtSection = Configuration.GetSection("JWTSettings");
           // services.Configure<JWTSettings>(jwtSection);

            var authKey = Configuration.GetValue<string>("JWTSettings:JwtKey");


            JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Clear();//remove default claims 
            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;

            }).AddJwtBearer(cfg =>
            {
                cfg.RequireHttpsMetadata = false;
                cfg.SaveToken = true;
                cfg.TokenValidationParameters = new TokenValidationParameters
                {
                    //  ValidIssuer = Configuration["JwtIssuer"],
                    ValidateIssuerSigningKey=true,
                    ValidIssuer =Configuration["JwtIssuer"],
                    ValidAudience = Configuration["JwtIssuer"],
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(authKey)),
                    ClockSkew = TimeSpan.Zero
                };

            });

            #endregion
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger(c=>
                {
                    c.RouteTemplate = "/swagger/{documentName}/swagger.json";
                });
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "IMOSApi v1"));
            }
            app.UseCors();
      
            app.UseStaticFiles();
            app.UseStaticFiles(new StaticFileOptions()
            {
                FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @"Uploads")),
                RequestPath = new PathString("/Uploads")
            });

            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();
           
           
            //app.UseMvc(routes =>
            //{
            //  //  routes.MapRoute("equipment", "{contoller = EquipmentController}");
            //});
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();

            });
        }
    }
}

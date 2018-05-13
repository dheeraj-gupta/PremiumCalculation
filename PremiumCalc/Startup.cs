using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using AutoMapper;
using PremiumCalc.Domain;
using PremiumCalc.Service;

namespace PremiumCalc.WebAPI
{
    public class Startup
    {
        private readonly IConfiguration _config;

        public Startup(IConfiguration config)
        {
            _config = config;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            //services.AddDbContext<ClassContext>(cfg => {
            //    cfg.UseSqlServer(_config.GetConnectionString("ClassesConnectionString"));
            //});

            PopulateAppConfig(services);

            services.AddAutoMapper();
            //services.AddTransient<CarOwnersSeeder>();
            services.AddTransient<IPremiumCalculator, PremiumCalculator>();
            services.AddTransient<IAgeCalculator, AgeCalculator>();
            //services.AddScoped<IClassRepository, ClassRepository>();
            services.AddMvc();
        }

        private void PopulateAppConfig(IServiceCollection services)
        {


            var maleGenderFactor = _config.GetSection("PremiumCalculationSetting").GetSection("MaleGenderFactor").Value;
            var feMaleGenderFactor = _config.GetSection("PremiumCalculationSetting").GetSection("FeMaleGenderFactor").Value;
            var minAge = _config.GetSection("PremiumCalculationSetting").GetSection("MinAge").Value;

            var maxAge = _config.GetSection("PremiumCalculationSetting").GetSection("MaxAge").Value;
            var multiplier = _config.GetSection("PremiumCalculationSetting").GetSection("Multiplier").Value;

        var appConfig = new AppConfig()
            {
            MaleGenderFactor = maleGenderFactor,
            FeMaleGenderFactor = feMaleGenderFactor,
            MinAge = minAge,
            MaxAge = maxAge,
            Multiplier = multiplier
            };

            services.AddSingleton(appConfig);
        }
        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/error");
            }

            app.UseStaticFiles();

            app.UseMvc(cfg =>
            {
                cfg.MapRoute("Default",
                  "{controller}/{action}/{id?}",
                  new { controller = "Home", Action = "Index" });
            });
        }
    }
}

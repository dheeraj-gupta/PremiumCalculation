using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace PremiumCalc.WebAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            BuildWebHost(args).Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
           WebHost.CreateDefaultBuilder(args)
               .ConfigureAppConfiguration(SetUpConfiguration)
               .UseStartup<Startup>()
               .Build();

        private static void SetUpConfiguration(WebHostBuilderContext ctx, IConfigurationBuilder builder)
        {
            //throw new NotImplementedException
            //Removing the default configuration options
            builder.Sources.Clear();
            builder.AddJsonFile("config.json", false, true)
                .AddEnvironmentVariables();
        }
    }
}

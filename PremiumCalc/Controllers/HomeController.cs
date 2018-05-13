using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PremiumCalc.WebAPI.Controllers
{
    public class HomeController :Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        //[HttpGet]
        //public IActionResult SaveClasses()
        //{
        //    return View();
        //}

        //[HttpPost]
        //public IActionResult SaveClassDetails(object model)
        //{
        //    return View();
        //}
    }
}

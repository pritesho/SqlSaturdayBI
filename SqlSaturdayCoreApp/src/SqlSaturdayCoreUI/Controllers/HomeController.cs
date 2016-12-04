using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace SqlSaturdayCoreUI.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Reporting Portal"; ViewData["Message"] = "Reporting Portal"; ViewData["Message"] = "Reporting Portal"; ViewData["Message"] = "Reporting Portal"; ViewData["Message"] = "Reporting Portal"; ViewData["Message"] = "Reporting Portal"; ViewData["Message"] = "Reporting Portal"; ViewData["Message"] = "Reporting Portal";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Sql Saturday BI GA.";

            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}

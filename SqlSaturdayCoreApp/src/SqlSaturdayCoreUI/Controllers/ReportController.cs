using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SqlSaturdayCoreUI.Models.ReportViewModels;

namespace SqlSaturdayCoreUI.Controllers
{
    public class ReportController : Controller
    {
        public IActionResult Index()
        {
            return View(new ReportViewModel() { BrowserRemembered  = true });
        }        
    }
}

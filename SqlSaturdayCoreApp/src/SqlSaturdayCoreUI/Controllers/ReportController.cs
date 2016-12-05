using Microsoft.AspNetCore.Mvc;
using SqlSaturdayCoreUI.Models.ReportViewModels;
using SqlSaturdayCoreUI.Common;
using Microsoft.Extensions.Options;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace SqlSaturdayCoreUI.Controllers
{
    public class ReportController : Controller
    {
        private readonly PowerBISettings _settings;
        public ReportController(IOptions<PowerBISettings> settings) {
            _settings = settings.Value;
        }

        public IActionResult Index()
        {
            //var devToken = PowerBIToken.CreateDevToken(this.workspaceCollection, this.workspaceId);
            //using (var client = this.CreatePowerBIClient(devToken))
            //{
            //    var reportsResponse = client.Reports.GetReports(this.workspaceCollection, this.workspaceId);

            //    var viewModel = new ReportsViewModel
            //    {
            //        Reports = reportsResponse.Value.ToList()
            //    };

            //    return PartialView(viewModel);
            //}

            return View(new ReportViewModel() { BrowserRemembered  = true });
        }        
    }
}

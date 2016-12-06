using Microsoft.AspNetCore.Mvc;
using SqlSaturdayCoreUI.Models.ReportViewModels;
using SqlSaturdayCoreUI.Common;
using Microsoft.Extensions.Options;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System;

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
            var embedToken = PowerBIToken.CreateReportEmbedToken(_settings.WorkspaceCollection, _settings.WorkspaceId, "d3fa6537-83c1-4a9c-b165-c34e8448fd96", TimeSpan.FromDays(1.5));
            var accessToken = embedToken.Generate(_settings.AccessKey);

            return View(new ReportViewModel() { EmbedToken = accessToken,
                ReportUrl = string.Concat("https://embedded.powerbi.com/appTokenReportEmbed?reportId=", "d3fa6537-83c1-4a9c-b165-c34e8448fd96")
                //string.Concat(@"https://app.powerbi.com/reportEmbed?reportId=", "d3fa6537-83c1-4a9c-b165-c34e8448fd96")
            });
        }      
    }
}

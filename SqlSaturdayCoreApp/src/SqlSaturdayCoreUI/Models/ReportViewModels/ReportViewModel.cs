using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace SqlSaturdayCoreUI.Models.ReportViewModels
{
    public class ReportViewModel
    {
        public bool BrowserRemembered { get; set; }

        public string EmbedToken { get; set; }

        public string ReportUrl { get; set; }
    }
}

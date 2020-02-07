using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using TradeApi.Models;

namespace TradeApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LanguageController : ControllerBase
    {
        // GET: api/Language
        [HttpGet]
        public IEnumerable<Language> Get()
        {
            return new List<Language>
            {
                new Language{ Id = 1, Name = "EN"},
                new Language{ Id = 2, Name = "CH"},
                new Language{ Id = 3, Name = "TH"},
                new Language{ Id = 4, Name = "TM"},
                new Language{ Id = 5, Name = "KR"},
            };
        }
    }
}

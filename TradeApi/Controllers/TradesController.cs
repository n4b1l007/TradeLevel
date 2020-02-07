using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using TradeApi.Models;

namespace TradeApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TradesController : ControllerBase
    {
        // GET: api/Trades
        [HttpGet]
        public IEnumerable<Trade> Get()
        {
            return new List<Trade>
            {
                new Trade { Id = 1, Name = "Test1"},
                new Trade { Id = 2, Name = "Test2"}
            };
        }
    }
}

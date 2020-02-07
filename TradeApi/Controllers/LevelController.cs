using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using TradeApi.Models;

namespace TradeApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LevelController : ControllerBase
    {

        [HttpGet("{id}")]
        public IEnumerable<Level> Get(int id)
        {
            return new List<Level>
            {
                new Level { Id = 5, Name = "efwwefwfwfef"}
            };
        }
    }
}

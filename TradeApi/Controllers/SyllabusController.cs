using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using TradeApi.Dto;
using TradeApi.Models;

namespace TradeApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SyllabusController : ControllerBase
    {
        // GET: api/Syllabus
        [HttpGet]
        public IEnumerable<Syllabus> Get()
        {
            return new List<Syllabus>
            {
                new Syllabus { Id = 0, DevelopmentOfficer = "sdfsdfsdfsdf", Manager = "sdfsdf", LevelId = 0, ActiveDate = DateTime.Now, SyllabusName = "fdsdsfds"},
            };
        }

        // GET: api/Syllabus/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Syllabus
        [HttpPost]
        public void Post([FromBody] SyllabusCreateDto value)
        {
        }

        // PUT: api/Syllabus/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

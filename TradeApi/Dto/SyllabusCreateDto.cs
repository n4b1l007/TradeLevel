using System;
using Microsoft.AspNetCore.Http;

namespace TradeApi.Dto
{
    public class SyllabusCreateDto
    {
        public string TradeId { get; set; }
        public string LevelId { get; set; }
        public string SyllabusName { get; set; }
        public string DevelopmentOfficer { get; set; }
        public string Manager { get; set; }
        public DateTime ActiveDate { get; set; }
        public string[] Orders { get; set; }

        public IFormFile SyllabusFile { get; set; }
    }
}

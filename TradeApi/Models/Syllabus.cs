using System;

namespace TradeApi.Models
{
    public class Syllabus
    {
        public int Id { get; set; }
        public int LevelId { get; set; }
        public string SyllabusName { get; set; }
        public string DevelopmentOfficer { get; set; }
        public string Manager { get; set; }
        public DateTime ActiveDate { get; set; }
    }

    public class Trade
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
    public class Language
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
    public class Level
    {
        public int Id { get; set; }
        public int TradeId { get; set; }
        public string Name { get; set; }
    }
}

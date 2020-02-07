using Microsoft.EntityFrameworkCore;

namespace TradeApi.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {


        }

    }
}

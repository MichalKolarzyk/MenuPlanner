using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Entities
{
    public class MenuPlannerDbContext : DbContext
    {
        private string _connectionString = "Server=LAPTOP-L1T0L126;Database=MenuPlanner.db;Trusted_Connection=True";
        public DbSet<Dish> Dishes { get; set; }
        public DbSet<Ingredient> Ingredients { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Recipe> Recipes { get; set; }
        public DbSet<Step> Steps { get; set; }
        public DbSet<Unit> Units { get; set; }
        public DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class QuestionContext : DbContext
    {
        public QuestionContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Question> Questions { get; set; }
    }
}
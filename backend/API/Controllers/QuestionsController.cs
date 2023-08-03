using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class QuestionsController : ControllerBase
    {
        private readonly QuestionContext _context;
        public QuestionsController(QuestionContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Question>>> GetQuestions()
        {
            return await _context.Questions.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Question>> GetQuestion(int id)
        {
            return await _context.Questions.FindAsync(id);
        }
    }
}
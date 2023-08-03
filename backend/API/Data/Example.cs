using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;

namespace API.Data
{
    public static class Example
    {
        public static void Initialize(QuestionContext context)
        {
            if (context.Questions.Any()) return;

            var questions = new List<Question>
            {
                new Question
                {
                    Name = "Jane",
                    Email = "hi@gmail.com",
                    Subject = "How to do this",
                    Query = "How to do these",
                },
                new Question
                {
                    Name = "Sam",
                    Email = "bye@gmail.com",
                    Subject = "How to do that",
                    Query = "How to do those",
                },
                new Question
                {
                    Name = "Emily",
                    Email = "em@gmail.com",
                    Subject = "How to do",
                    Query = "How to do what",
                },
                new Question
                {
                    Name = "Harry",
                    Email = "harry@gmail.com",
                    Subject = "How to do it",
                    Query = "How to do that",
                },
            };

            foreach (var question in questions)
            {
                context.Questions.Add(question);
            }

            context.SaveChanges();
        }
    }
}
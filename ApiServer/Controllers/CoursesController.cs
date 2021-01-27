using APIServer.Models.Course;
using APIServer.Models.User;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoursesController : ControllerBase
    {
        private readonly AuthenticationContext _context;

        public CoursesController(AuthenticationContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<tbCourse>>> GetCourses()
        {
            return await _context.Courses.ToListAsync();
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<tbCourse>> GetCourse(string id)
        {
            var course = await _context.Courses.FindAsync(id);

            if (course == null)
            {
                return NotFound();
            }

            return course;
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> PutCourses(string id, tbCourse course)
        {
            if (id != course.CourseCode)
            {
                return BadRequest();
            }

            _context.Entry(course).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CourseExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<tbCourse>> PostCourse(tbCourse course)
        {
            _context.Courses.Add(course);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCourses", new { id = course.CourseCode }, course);
        }

        [HttpDelete("{id}")]

        public async Task<ActionResult<tbCourse>> DeleteCourse(string id)
        {
            var course = await _context.Courses.FindAsync(id);
            if (course == null)
            {
                return NotFound();
            }

            _context.Courses.Remove(course);
            await _context.SaveChangesAsync();

            return course;
        }

        private bool CourseExists(string id)
        {
            return _context.Courses.Any(c => c.CourseCode == id);
        }
    }
}

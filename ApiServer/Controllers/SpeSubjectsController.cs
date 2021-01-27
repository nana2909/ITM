using APIServer.Models.Course;
using APIServer.Models.SpecicalSubject;
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
    public class SpeSubjectsController : ControllerBase
    {
        private readonly AuthenticationContext _context;

        public SpeSubjectsController(AuthenticationContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<tbSpeSubject>>> GetSpeSubjects()
        {
            return await _context.SpeSubjects.ToListAsync();
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<tbSpeSubject>> GetSpeSubject(string id)
        {
            var Spes = await _context.SpeSubjects.FindAsync(id);

            if (Spes == null)
            {
                return NotFound();
            }

            return Spes;
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> PutSpeSubject(string id, tbSpeSubject Spes)
        {
            if (id != Spes.SubjectID)
            {
                return BadRequest();
            }

            _context.Entry(Spes).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SpeSubjectExists(id))
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
        public async Task<ActionResult<tbSpeSubject>> PostSpeSubject(tbSpeSubject Spes)
        {
            _context.SpeSubjects.Add(Spes);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSpeSubject", new { id = Spes.SubjectID }, Spes);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<tbSpeSubject>> DeleteSpeSubject(string id)
        {
            var Spes = await _context.SpeSubjects.FindAsync(id);
            if (Spes == null)
            {
                return NotFound();
            }

            _context.SpeSubjects.Remove(Spes);
            await _context.SaveChangesAsync();

            return Spes;
        }

        private bool SpeSubjectExists(string id)
        {
            return _context.SpeSubjects.Any(s=> s.SubjectID == id);
        }
    }
}

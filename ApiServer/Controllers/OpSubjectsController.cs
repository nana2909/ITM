using APIServer.Models.Course;
using APIServer.Models.OptionalSubject;
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
    public class OpSubjectsController : ControllerBase
    {
        private readonly AuthenticationContext _context;

        public OpSubjectsController(AuthenticationContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<tbOpSubject>>> GetOpSubjects()
        {
            return await _context.OpSubjects.ToListAsync();
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<tbOpSubject>> GetOpSubject(string id)
        {
            var field = await _context.OpSubjects.FindAsync(id);

            if (field == null)
            {
                return NotFound();
            }

            return field;
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> PutOpSubject(string id, tbOpSubject Ops)
        {
            if (id != Ops.SubjectID)
            {
                return BadRequest();
            }

            _context.Entry(Ops).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OpSubjectExists(id))
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
        public async Task<ActionResult<tbOpSubject>> PostOpSubject(tbOpSubject Ops)
        {
            _context.OpSubjects.Add(Ops);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOpSubject", new { id = Ops.SubjectID }, Ops);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<tbOpSubject>> DeleteOpSubject(string id)
        {
            var Ops = await _context.OpSubjects.FindAsync(id);
            if (Ops == null)
            {
                return NotFound();
            }

            _context.OpSubjects.Remove(Ops);
            await _context.SaveChangesAsync();

            return Ops;
        }

        private bool OpSubjectExists(string id)
        {
            return _context.OpSubjects.Any(o => o.SubjectID == id);
        }
    }
}

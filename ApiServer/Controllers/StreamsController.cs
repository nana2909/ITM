using APIServer.Models.Course;
using APIServer.Models.Stream;
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
    public class StreamsController : ControllerBase
    {
        private readonly AuthenticationContext _context;

        public StreamsController(AuthenticationContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<tbStream>>> GetStreams()
        {
            return await _context.Streams.ToListAsync();
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<tbStream>> GetStream(string id)
        {
            var stream = await _context.Streams.FindAsync(id);

            if (stream == null)
            {
                return NotFound();
            }

            return stream;
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> PutStream(string id, tbStream stream)
        {
            if (id != stream.StreamCode)
            {
                return BadRequest();
            }

            _context.Entry(stream).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StreamExists(id))
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
        public async Task<ActionResult<tbStream>> PostStream(tbStream stream)
        {
            _context.Streams.Add(stream);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStream", new { id = stream.StreamCode }, stream);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<tbStream>> DeleteStream(string id)
        {
            var stream = await _context.Streams.FindAsync(id);
            if (stream == null)
            {
                return NotFound();
            }

            _context.Streams.Remove(stream);
            await _context.SaveChangesAsync();

            return stream;
        }
        private bool StreamExists(string id)
        {
            return _context.Streams.Any(s => s.StreamCode == id);
        }
    }
}

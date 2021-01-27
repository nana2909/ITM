
using APIServer.Models.Course;
using APIServer.Models.Field;
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
    public class FieldsController : ControllerBase
    {
        private readonly AuthenticationContext _context;

        public FieldsController(AuthenticationContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<tbField>>> GetFields()
        {
            return await _context.Fields.ToListAsync();
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<tbField>> GetField(string id)
        {
            var field = await _context.Fields.FindAsync(id);

            if (field== null)
            {
                return NotFound();
            }

            return field;
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> PutField(string id, tbField field)
        {
            if (id != field.FieldCode)
            {
                return BadRequest();
            }

            _context.Entry(field).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FieldExists(id))
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
        public async Task<ActionResult<tbField>> PostField(tbField field)
        {
            _context.Fields.Add(field);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetField", new { id = field.FieldCode }, field);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<tbField>> DeleteField(string id)
        {
            var field = await _context.Fields.FindAsync(id);
            if (field == null)
            {
                return NotFound();
            }

            _context.Fields.Remove(field);
            await _context.SaveChangesAsync();

            return field;
        }

        private bool FieldExists(string id)
        {
            return _context.Fields.Any(f => f.FieldCode == id);
        }
    }
}

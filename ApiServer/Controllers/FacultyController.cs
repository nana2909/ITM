using APIServer.Models.Faculty;
using APIServer.Models.User;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Data.Entity;
using System.Collections.Generic;
using System.IO;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using System.Net.Http;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace APIServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FacultyController : ControllerBase
    {
        private readonly AuthenticationContext _db;

        public FacultyController(AuthenticationContext db)
        {
            _db = db;
        }

        // GET: api/<FacultyController>
        [HttpGet]
        [Route("ListFaculty")]
        public async Task<IEnumerable<tbFaculty>> ListFaculty()
        {
            return await _db.Faculties.ToListAsync();
        }

        // GET api/<FacultyController>/5
        [HttpGet]
        [Route("GetFaculty/{id}")]
        public async Task<Object> GetFaculty(string id)
        {
            return await _db.Faculties.FindAsync(id);
        }

        // POST api/<FacultyController>
        [HttpPost]
        [Route("CreateFaculty")]
        public async Task<IActionResult> CreateFaculty(tbFaculty model)
        {

            if (ModelState.IsValid)
            {
                await _db.Faculties.AddAsync(model);
                await _db.SaveChangesAsync();
                return Ok(model);
            }
            return BadRequest();
        }

        // PUT api/<FacultyController>/5
        [HttpPut]
        [Route("EditFaculty/{id}")]
        public IActionResult EditFaculty(tbFaculty model)
        {
            if (ModelState.IsValid)
            {
                _db.Entry(model).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                _db.SaveChanges();
                return Ok();
            }
            return BadRequest();
        }

        // DELETE api/<FacultyController>/5
        [HttpDelete]
        [Route("Delete/{id}")]
        public ActionResult DeleteFaculty(int id)
        {
            var model = _db.Faculties.Find(id);
            _db.Faculties.Remove(model);
            _db.SaveChanges();
            return Ok();
        }
    }
}

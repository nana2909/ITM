using APIServer.Models.Department;
using APIServer.Models.User;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace APIServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        private readonly AuthenticationContext _db;

        public DepartmentController(AuthenticationContext db)
        {
            _db = db;
        }

        // GET: api/<DepartmentController>
        [HttpGet]
        [Route("ListDepartment")]
        public async Task<IEnumerable<tbDepartment>> ListDepartment()
        {
            return await _db.Departments.ToListAsync();
        }

        // GET api/<DepartmentController>/5
        [HttpGet("{id}")]
        [Route("GetDepartment/{id}")]
        public async Task<Object> GetDepartment(string id)
        {
            return await _db.Faculties.FindAsync(id);
        }

        // POST api/<DepartmentController>
        [HttpPost]
        [Route("CreateDepartment")]
        public async Task<IActionResult> CreateDepartment(tbDepartment model)
        {

            if (ModelState.IsValid)
            {
                await _db.Departments.AddAsync(model);
                await _db.SaveChangesAsync();
                return Ok(model);
            }
            return BadRequest();
        }

        // PUT api/<DepartmentController>/5
        [HttpPut]
        [Route("EditDepartment/{id}")]
        public IActionResult EditFaculty(tbDepartment model)
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
        public ActionResult DeleteDepartment(string id)
        {
            var model = _db.Departments.Find(id);
            _db.Departments.Remove(model);
            _db.SaveChanges();
            return Ok();
        }
    }
}

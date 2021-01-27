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
        [Route("ListDepartments")]
        public async Task<List<tbDepartment>> ListDepartments()
        {
            return await _db.Departments.Include(e=>e.tbFaculties).ToListAsync();
        }

        // GET api/<DepartmentController>/5
        [HttpGet]
        [Route("GetDepartment/{id}")]
        public async Task<Object> GetDepartment(string id)
        {
            return await _db.Departments.FindAsync(id);
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
        public async Task<IActionResult> EditDepartment(string id,tbDepartment model)
        {
            if (id == null)
            {
                return BadRequest(" ID cannot null!");
            }
            var dep = await _db.Departments.FindAsync(id);
            if (dep != null)
            {
                dep.Name = model.Name;
                dep.Description = model.Description;
                _db.Update(dep);
                await _db.SaveChangesAsync();
                return Ok("Edit Success!");

            }
            return NotFound();
        }

        // DELETE api/<FacultyController>/5
        [HttpDelete]
        [Route("DeleteDepartment/{id}")]
        public async Task<IActionResult> DeleteDepartment(string id)
        {

            if (id == null)
            {
                return BadRequest("ID cannot null!");
            }
            var dep = await _db.Departments.FindAsync(id);
            if (dep != null)
            {
                _db.Departments.Remove(dep);
                _db.SaveChanges();
                return Ok("Delete Success!");
            }
            return NotFound();
        }
    }
}

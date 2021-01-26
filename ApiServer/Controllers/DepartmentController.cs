using APIServer.Models.Department;
using APIServer.Models.User;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
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
        [Route("GetListDepartments")]
        public async Task<List<tbDepartment>> GetListDepartments()
        {
            return await _db.Departments.ToListAsync();
        }
        [HttpGet]
        [Authorize(Roles = "Admin")]
        [Route("ListDepartments")]
        public async Task<List<tbDepartment>> ListDepartments()
        {
            return await _db.Departments.ToListAsync();
        }

        // GET api/<DepartmentController>/5
        [HttpGet]
        [Authorize(Roles = "Admin")]
        [Route("GetDepartment/{id}")]
        public async Task<Object> GetDepartment(string id)
        {
            return await _db.Departments.FindAsync(id);
        }

        // POST api/<DepartmentController>
        [HttpPost]
        [Authorize(Roles = "Admin")]
        [Route("CreateDepartment")]
        public IActionResult CreateDepartment(tbDepartment model)
        {
            var dep = _db.Departments.Find(model.DepartmentID);
            if (dep != null)
            {
                return BadRequest("ID existed!");
            }
            if (ModelState.IsValid)
            {
                 _db.Departments.Add(model);
                 _db.SaveChanges();
                return Ok(model);
            }
            return NoContent();
        }

        // PUT api/<DepartmentController>/5
        [HttpPut]
        [Authorize(Roles = "Admin")]
        [Route("EditDepartment/{id}")]
        public IActionResult EditDepartment(string id,tbDepartment model)
        {
            if (id == null)
            {
                return BadRequest(" ID cannot null!");
            }
            var dep =  _db.Departments.Find(id);
            if (dep != null)
            {
                dep.Name = model.Name;
                dep.Description = model.Description;
                dep.isActive = model.isActive;
                _db.Update(dep);
                _db.SaveChanges();
                return Ok(model);

            }
            return NotFound();
        }

        // DELETE api/<FacultyController>/5
        [HttpDelete]
        [Authorize(Roles = "Admin")]
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
                return Ok();
            }
            return NotFound();
        }
    }
}

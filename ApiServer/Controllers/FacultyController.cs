using APIServer.Models.Faculty;
using APIServer.Models.User;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using System.Net.Http;
using Microsoft.AspNetCore.Authorization;

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
        [HttpGet]
        [Route("GetListFaculties")]
        public List<tbFaculty> GetListFaculties()
        {
            return _db.Faculties.Where(e=>e.imgUrl!=null).ToList();
        }
        // GET: api/<FacultyController>
        [HttpGet]
        [Authorize(Roles = "Admin")]
        [Route("ListFaculty")]
        public List<tbFaculty> ListFaculty()
        {
            return _db.Faculties.ToList();
        }

        // GET api/<FacultyController>/5
        [HttpGet]
        [Authorize(Roles = "Admin")]
        [Route("GetFaculty/{id}")]
        public async Task<Object> GetFaculty(string id)
        {
            return await _db.Faculties.FindAsync(id);
        }

        // POST api/<FacultyController>
        [HttpPost]
        [Authorize(Roles = "Admin")]
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
        [Authorize(Roles = "Admin")]
        [Route("EditFaculty/{id}")]
        public async Task<IActionResult> EditFaculty(string id,tbFaculty model)
        {
            if (id == null)
            {
                return BadRequest(" ID cannot null!");
            }
            var fac = await _db.Faculties.FindAsync(id);
            if (fac!= null)
            {
                fac.Name = model.Name;
                fac.Degree = model.Degree;
                fac.DoB = model.DoB;
                fac.DepartmentID = model.DepartmentID;
                fac.isActive=model.isActive;
                if (fac.imgUrl != null)
                {
                    string fileDirectory = Path.Combine(Directory.GetCurrentDirectory(), fac.imgUrl);
                    if (System.IO.File.Exists(fileDirectory))
                    {
                        System.IO.File.Delete(fileDirectory);
                    }
                    fac.imgUrl = model.imgUrl;
                }
                fac.imgUrl = model.imgUrl;
                _db.Update(fac);
                await _db.SaveChangesAsync();
                return Ok(fac);

            }
            return NotFound();
        }

        // DELETE api/<FacultyController>/5
        [HttpDelete]
        [Authorize(Roles = "Admin")]
        [Route("DeleteFaculty/{id}")]
        public async Task<IActionResult> DeleteFaculty(string id)
        {

            if (id == null)
            {
                return BadRequest("ID cannot null!");
            }
            var fac = await _db.Faculties.FindAsync(id);
            if (fac != null)
            {
                _db.Faculties.Remove(fac);
                _db.SaveChanges();
                return Ok();
            }
            return NotFound();
        }
    }
}

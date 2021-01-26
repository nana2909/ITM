using APIServer.Models.Facility;
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
    public class FacilitiesController : ControllerBase
    {

        private readonly AuthenticationContext _db;

        public FacilitiesController(AuthenticationContext db)
        {
            _db = db;
        }
        [HttpGet]
        [Route("GetListFacilities")]
        public List<tbFacility> GetListFacilities()
        {
            return _db.Facilities.Where(e=>e.imgUrl!=null).ToList();
        }
        [HttpGet]
        [Authorize(Roles = "Admin")]
        [Route("ListFacilities")]
        public List<tbFacility> ListFacilities()
        {
            return  _db.Facilities.ToList();
        }

        [HttpGet]
        [Authorize(Roles = "Admin")]
        [Route("GetFacility/{id}")]
        public async Task<Object> GetFacility(string id)
        {
            return await _db.Facilities.FindAsync(id);
        }

        [HttpPost]
        [Authorize(Roles = "Admin")]
        [Route("CreateFacility")]
        public async Task<IActionResult> CreateFacility(tbFacility model)
        {
            var dep = _db.Departments.Find(model.FacCode);
            if (dep != null)
            {
                return BadRequest("ID existed!");
            }
            if (ModelState.IsValid)
            {
                await _db.Facilities.AddAsync(model);
                await _db.SaveChangesAsync();
                return Ok(model);
            }
            return BadRequest();
        }

        [HttpPut]
        [Authorize(Roles = "Admin")]
        [Route("EditFacility/{id}")]
        public async Task<IActionResult> EditFacility(string id, tbFacility model)
        {
            if (id == null)
            {
                return BadRequest(" ID cannot null!");
            }
            var fac = await _db.Facilities.FindAsync(id);
            if (fac != null)
            {
                fac.FacName = model.FacName;
                fac.isActive = model.isActive;
                if (fac.imgUrl != null)
                {
                    string fileDirectory = Path.Combine(Directory.GetCurrentDirectory(), fac.imgUrl);
                    if (System.IO.File.Exists(fileDirectory))
                    {
                        System.IO.File.Delete(fileDirectory);
                    }
                }
                fac.imgUrl = model.imgUrl;
                _db.Update(fac);
                await _db.SaveChangesAsync();
                return Ok(fac);

            }
            return NotFound();
        }
            
        [HttpDelete]
        [Authorize(Roles = "Admin")]
        [Route("Delete/{id}")]
        public async Task<IActionResult> DeleteFacility(string id)
        {
            if (id == null)
            {
                return BadRequest("ID cannot null!");
            }
            var fac = await _db.Facilities.FindAsync(id);
            if (fac != null)
            {
                _db.Facilities.Remove(fac);
                _db.SaveChanges();
                return Ok();
            }
            return NotFound();
        }
    }
}

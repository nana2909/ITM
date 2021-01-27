using APIServer.Models.Facility;
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
    public class FacilitiesController : ControllerBase
    {

        private readonly AuthenticationContext _db;

        public FacilitiesController(AuthenticationContext db)
        {
            _db = db;
        }

        [HttpGet]
        [Route("ListFacilities")]
        public List<tbFacility> ListFacilities()
        {
            return  _db.Facilities.ToList();
        }

        [HttpGet]
        [Route("GetFacility/{id}")]
        public async Task<Object> GetFacility(string id)
        {
            return await _db.Facilities.FindAsync(id);
        }

        [HttpPost]
        [Route("CreateFacility")]
        public async Task<IActionResult> CreateFacility(tbFacility model)
        {

            if (ModelState.IsValid)
            {
                await _db.Facilities.AddAsync(model);
                await _db.SaveChangesAsync();
                return Ok(model);
            }
            return BadRequest();
        }

        [HttpPut]
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
                _db.Update(fac);
                await _db.SaveChangesAsync();
                return Ok("Edit Success!");

            }
            return NotFound();
        }

        [HttpDelete]
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
                return Ok("Delete Success!");
            }
            return NotFound();
        }
    }
}

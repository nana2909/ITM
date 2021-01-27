using APIServer.Models.Feedback;
using APIServer.Models.User;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using APIServer.Models.EmailService;

namespace APIServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FeedbackController : ControllerBase
    {

        private readonly AuthenticationContext _db;
        private readonly IEmailService emailService;


        public FeedbackController(AuthenticationContext db, IEmailService _emailService)
        {
            _db = db;
            emailService = _emailService;
        }

        // GET: api/<FeedbackController>
        [HttpGet]
        [Route("ListFeedbacks")]
        public async Task<List<tbFeedback>> ListFeedbacks()
        {
            return await _db.Feedbacks.ToListAsync();
        }


        // GET api/<FeedbackController>/5
        [HttpGet]
        [Route("GetFeedback/{id}")]
        public async Task<Object> GetFeedback(string id)
        {
            return await _db.Feedbacks.FindAsync(id);
        }


        // POST api/<FeedbackController>
        [HttpPost]
        [Route("PostFeedback")]
        public async Task<IActionResult> PostFeedback(tbFeedback model)
        {

            if (ModelState.IsValid)
            {
                model.Date = DateTime.Now;
                await _db.Feedbacks.AddAsync(model);
                await _db.SaveChangesAsync();
                return Ok(model);
            }
            return BadRequest();
        }


        // DELETE api/<FeedbackController>/5
        [HttpDelete]
        [Route("DeleteFeedback/{id}")]
        public async Task<IActionResult> DeleteFeedback(string id)
        {

            if (id == null)
            {
                return BadRequest("ID cannot null!");
            }
            var feed = await _db.Feedbacks.FindAsync(id);
            if (feed != null)
            {
                _db.Feedbacks.Remove(feed);
                _db.SaveChanges();
                return Ok("Delete Success!");
            }
            return NotFound();
        }

        //resolveFeedback
        [HttpPost]
        [Authorize(Roles = "Admin")]
        [Route("ResolveFeedback/{id}")]
        public async Task<IActionResult> ResolveFeedback(string id, tbFeedback model)
        {
            if (id == null)
            {
                return BadRequest(" ID cannot null!");
            }
            var feed = await _db.Feedbacks.FindAsync(id);
            if (feed != null)
            {
                //Send email
                var message = new Message(new string[] { model.FbEmail }, "WELCOME TO ITM COLLEGE!", model.isResolve, null);
                await emailService.SendEmailAsync(message);

                //Save DB
                feed.FbID = model.FbID;
                feed.FbSubject = model.FbSubject;
                feed.StudentName = model.StudentName;
                feed.FbContent = model.FbContent;
                feed.FbEmail = model.FbEmail;
                feed.isResolve = model.isResolve;
                feed.Date = DateTime.Now;
                _db.Update(feed);
                await _db.SaveChangesAsync();
                return Ok("Edit Success!");

            }
            return NotFound();
        }
    }
}

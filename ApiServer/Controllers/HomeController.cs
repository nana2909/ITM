using APIServer.Models.Course;
using APIServer.Models.Department;
using APIServer.Models.EmailService;
using APIServer.Models.Event;
using APIServer.Models.Field;
using APIServer.Models.OptionalSubject;
using APIServer.Models.SpecicalSubject;
using APIServer.Models.Stream;
using APIServer.Models.User;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private AuthenticationContext db;
        private readonly ILogger<AdmissionController> logger;
        private readonly IEmailService emailService;
        public HomeController(AuthenticationContext _db,
                                    ILogger<AdmissionController> _logger,
                                        IEmailService _emailService)
        {
            db = _db;
            logger = _logger;
            emailService = _emailService;
        }

        [HttpGet]
        //[Authorize]
        [Route("GetAllEvents")]
        //POST: api/Home/GetAllEvents
        public async Task<ICollection<tbEvent>> GetAllEvents()
        {
            var events = await db.Events.ToListAsync();
            return events;
        }

        [HttpGet]
        //[Authorize]
        [Route("GetEventById")]
        //POST: api/Home/GetEventById
        public async Task<tbEvent> GetEventById(string id)
        {
            var events = await db.Events.FindAsync(id);
            return events;
        }

        [HttpGet]
        //[Authorize]
        [Route("GetAllDepartment")]
        //POST: api/Home/GetAllDepartment
        public async Task<ICollection<tbDepartment>> GetAllDepartment()
        {
            var departments = await db.Departments.ToListAsync();
            return departments;
        }

        [HttpGet]
        //[Authorize]
        [Route("GetDepartmentById")]
        //POST: api/Home/GetDepartmentById
        public async Task<tbDepartment> GetDepartmentById(string id)
        {
            var department = await db.Departments.FindAsync(id);
            return department;
        }

        [HttpGet]
        //[Authorize]
        [Route("GetAllStream")]
        //POST: api/Home/GetAllStream
        public async Task<ICollection<tbStream>> GetAllStream()
        {
            var streams = await db.Streams.ToListAsync();
            return streams;
        }

        [HttpGet]
        //[Authorize]
        [Route("GetAllField")]
        //POST: api/Home/GetAllField
        public async Task<ICollection<tbField>> GetAllField()
        {
            var fields = await db.Fields.ToListAsync();
            return fields;
        }

        [HttpGet]
        //[Authorize]
        [Route("GetAllCourse")]
        //POST: api/Home/GetAllCourse
        public async Task<ICollection<tbCourse>> GetAllCourse()
        {
            var courses = await db.Courses.ToListAsync();
            return courses;
        }

        [HttpGet]
        //[Authorize]
        [Route("GetAllOpSubject")]
        //POST: api/Home/GetAllOpSubject
        public async Task<ICollection<tbOpSubject>> GetAllOpSubject()
        {
            var opSubjects = await db.OpSubjects.ToListAsync();
            return opSubjects;
        }

        [HttpGet]
        //[Authorize]
        [Route("GetAllSpecSubject")]
        //POST: api/Home/GetAllSpecSubject
        public async Task<ICollection<tbSpeSubject>> GetAllSpecSubject()
        {
            var speSubjects = await db.SpeSubjects.ToListAsync();
            return speSubjects;
        }

    }
}

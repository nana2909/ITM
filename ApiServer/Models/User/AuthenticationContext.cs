using APIServer.Models.Admission;
using APIServer.Models.Course;
using APIServer.Models.Department;
using APIServer.Models.Facility;
using APIServer.Models.Faculty;
using APIServer.Models.Feedback;
using APIServer.Models.Field;
using APIServer.Models.OptionalSubject;
using APIServer.Models.SpecicalSubject;
using APIServer.Models.Stream;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APIServer.Models.User;

namespace APIServer.Models.User
{
    public class AuthenticationContext:IdentityDbContext
    {
        public AuthenticationContext()
        {}

        public AuthenticationContext(DbContextOptions options):base(options)
        {

        }
        public DbSet<ApplicationUser> ApplicationUsers { get; set; }

        public DbSet<tbAdmission> Admissions { get; set; }
        public DbSet<tbAdmissionStatus> AdmissionStatuses { get; set; }
        public DbSet<tbCourse> Courses { get; set; }
        public DbSet<tbDepartment> Departments { get; set; }
        public DbSet<tbStream> Streams { get; set; }
        public DbSet<tbFacility> Facilities { get; set; }
        public DbSet<tbFaculty> Faculties { get; set; }
        public DbSet<tbFeedback> Feedbacks { get; set; }
        public DbSet<tbField> Fields { get; set; }
        public DbSet<tbOpSubject> OpSubjects { get; set; }
        public DbSet<tbSpeSubject> SpeSubjects { get; set; }
    }
}

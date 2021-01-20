using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APIServer.Models.User;
using Microsoft.EntityFrameworkCore;

namespace APIServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserDetailController : ControllerBase
    {
        private UserManager<ApplicationUser> _userManager;
        private IPasswordHasher<ApplicationUser> _passwordHasher;
        private AuthenticationContext _db;
        
        public UserDetailController(UserManager<ApplicationUser> userManager, IPasswordHasher<ApplicationUser> passwordHasher,AuthenticationContext db)
        {
            _db = db;
            _userManager = userManager;
            _passwordHasher = passwordHasher;
        }
        [HttpGet]
        [Authorize]
        //Get:api/UserDetail
        public async Task<Object> GetUserProfile()
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var user = await _userManager.FindByIdAsync(userId);
            return new
            {
                user.FullName,
                user.Email,
                user.UserName,
                user.AdmissionID
            };
        }

        //For Admin 
        //Get List of Users
        [HttpGet]
        [Authorize(Roles = "Admin")]
        [Route("ListUsers")]
        public async Task<List<ApplicationUser>> ListUsers()
        {
            return await _userManager.Users.ToListAsync();
        }

        //Update user change Email or Fullname if requested
        [HttpGet]
        [Authorize(Roles ="Admin")]
        [Route("EditUser/{userName}")]
        public async Task<IActionResult> UpdateUser(string userName)
        {
            ApplicationUser model = await _userManager.FindByNameAsync(userName);
            return Ok(model);
        }

        [HttpPut]
        [Authorize(Roles = "Admin")]
        [Route("EditUser/{userName}")]
        public async Task<Object> UpdateUser(User user,string userName)
        {
            var model = await _userManager.FindByNameAsync(userName);
            model.Email = user.Email;
            model.FullName = user.FullName;         
            return await _userManager.UpdateAsync(model);
        }

        //Delete User
        [HttpDelete]
        [Authorize(Roles = "Admin")]
        [Route("DeleteUser/{userName}")]
        public async Task<Object> DeleteUser(string userName)
        {
            var model = await _userManager.FindByNameAsync(userName);
            return await _userManager.DeleteAsync(model);
        }

        //For Account Student
        // Submit Admission into account
        [HttpPut]
        [Authorize]
        [Route("PutUserAdmission/{AdmissionID}")]
        public async Task<Object> PutUserAdmission(string AdmissionID)
        {
            var admission = await _db.Admissions.FindAsync(AdmissionID);
            if (admission != null){
                string userId = User.Claims.First(c => c.Type == "UserID").Value;
                var user = await _userManager.FindByIdAsync(userId);
                if (!user.Email.Equals(admission.StudentEmail, StringComparison.Ordinal))
                {
                    return BadRequest("Invalid Email!");
                }
                else
                {
                    if (admission.StatusID == 1)
                    {
                        user.AdmissionID = admission.AdmissionID;
                        return await _userManager.UpdateAsync(user);
                    }
                    else
                    {
                        return BadRequest("Invalid Admission!");
                    }
                }
            } else
            {
                return NotFound("Not Found!");
            }
            
        }

        //Get Admission
        [HttpGet]
        [Authorize]
        [Route("GetUserAdmission")]
        public async Task<Object> GetUserAdmission()
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var user = await _userManager.FindByIdAsync(userId);
            if (user.AdmissionID != null)
            {
                var admission = await _db.Admissions.FindAsync(user.AdmissionID);
                return new {
                    admission.AdmissionID,
                    admission.ClassObtained,
                    admission.DoB,
                    admission.ExCenter,
                    admission.ExEnrollmentNumber,
                    admission.ExField,
                    admission.ExMarkSecured,
                    admission.ExStream,
                    admission.ExUniversity,
                    admission.FatherName,
                    admission.FieldCode,
                    admission.Gender,
                    admission.MotherName,
                    admission.OptionalSubjectID,
                    admission.OutOfDate,
                    admission.PermanentAddress,
                    admission.ResidentialAddress,
                    admission.SpecializedSubjectID,
                    admission.SportsDetails,
                    admission.StatusID,
                    admission.StreamCode,
                    admission.StudentEmail,
                    admission.StudentName,
                    admission.tbAdmissionStatus,
                    admission.tbField,
                    admission.tbOpSubject,
                    admission.tbSpeSubject,
                    admission.tbStream,
                };
            }
            return NotFound("Not Found!");
        }

        //Update User Account
        [HttpGet]
        [Authorize]
        [Route("UpdateAccount")]
        public async Task<Object> UpdateUserDetail(ApplicationUser model)
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var user = await _userManager.FindByIdAsync(userId);
            return Ok(user);
        }
        [HttpPut]
        [Authorize]
        [Route("UpdateAccount")]
        public async Task<Object> UpdateUserDetail(User model)
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var user = await _userManager.FindByIdAsync(userId);
            if (ModelState.IsValid)
            {
                user.Email = model.Email;
                user.FullName = model.FullName;
                user.PasswordHash = _passwordHasher.HashPassword(user, model.Password); 
            }
            IdentityResult result = await _userManager.UpdateAsync(user);
            return Ok(result);
        }
        
    }
}

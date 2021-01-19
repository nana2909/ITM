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
        public UserDetailController(UserManager<ApplicationUser> userManager, IPasswordHasher<ApplicationUser> passwordHasher)
        {
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
                user.UserName
            };
        }

        [HttpGet]
        [Authorize(Roles = "Admin")]
        [Route("ListUsers")]
        public async Task<List<ApplicationUser>> ListUsers()
        {
            return await _userManager.Users.ToListAsync();
        }

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

        [HttpDelete]
        [Authorize(Roles = "Admin")]
        [Route("DeleteUser/{userName}")]
        public async Task<Object> DeleteUser(string userName)
        {
            var model = await _userManager.FindByNameAsync(userName);
            return await _userManager.DeleteAsync(model);
        }

        [HttpGet]
        [Authorize(Roles = "Student")]
        [Route("ForStudent")]
        public string GetForStudent()
        {
            return "Web method for Student";
        }

        [HttpGet]
        [Authorize]
        [Route("UpdateUserDetail")]
        public async Task<Object> UpdateUserDetail()
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var user = await _userManager.FindByIdAsync(userId);
            return Ok(user);
        }
        [HttpPut]
        [Authorize]
        [Route("UpdateUserDetail")]
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

using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using APIServer.Models.User;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authorization;
using MailKit.Net.Smtp;
using MimeKit;
using Microsoft.AspNetCore.Hosting;
using APIServer.Models.EmailService;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace APIServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
     
        //using Identity to create property
        private UserManager<ApplicationUser> _userManager;
        private SignInManager<ApplicationUser> _signInManager;
        private readonly ApplicationSettings _appSettings;
        private readonly ILogger<UserController> _logger;
        private readonly IEmailService _emailService;

        public UserController(UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            IOptions<ApplicationSettings> appSettings, 
            ILogger<UserController> logger, 
            IEmailService emailService)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _appSettings = appSettings.Value;
            _logger = logger;
            _emailService = emailService;
        }
        

        [HttpPost]
        [Route("Register")]
        //POST: /api/User/Register
        public async Task<Object> PostUser(User user)
        {
            user.Role = "Student";
            var applicationUser = new ApplicationUser()
            {
                UserName = user.UserName,
                Email= user.Email,
                FullName = user.FullName
            };
            try
            {
                var result = await _userManager.CreateAsync(applicationUser,user.Password);
                await _userManager.AddToRoleAsync(applicationUser, user.Role);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpPost]
        [Route("ForgotPassword")]
        [AllowAnonymous]
        //Post: /api/User/ForgotPassword
        public async Task<IActionResult> ForgotPassword([FromQuery]string sendEmail)
        {
            var user =await _userManager.FindByEmailAsync(sendEmail);
            if (user != null)     // use if have EmailConfirmed : await _userManager.IsEmailConfirmedAsync(user) 
            {
                // Generate the reset password token
                var token =  _userManager.GeneratePasswordResetTokenAsync(user);
                // Build the password reset link
                //var passwordResetLink = Url.Action("ResetPassword", "User",
                //    new { email = sendEmail, token = token.Result}, Request.Scheme);
                var passwordResetLink = "http://localhost:4200/#/resetpassword?email=" + sendEmail + "&token=" + token.Result;


               var message = new Message(new string[] { sendEmail }, "Reset Passwork Link",passwordResetLink,null );
                

                await _emailService.SendEmailAsync(message);

                // Log the password reset link
                // _logger.Log(LogLevel.Warning, passwordResetLink);

            } else
            {
                return Ok();
            }
            return Ok();
            
        }

        [HttpGet]
        [Route("ResetPassword")]
        [AllowAnonymous]
        public IActionResult ResetPassword( string email, string token)
        {
            // If password reset token or email is null, most likely the
            // user tried to tamper the password reset link
            if (token == null || email == null)
            {
                ModelState.AddModelError("", "Invalid password reset token");
            }
            return Ok();
        }
        [HttpPost]
        [Route("ResetPassword")]
        [AllowAnonymous]
        public async Task<IActionResult> ResetPassword(ResetPasswordModel model)
        {
            // Find the user by email
            var user = await _userManager.FindByEmailAsync(model.Email);

            if (user != null)
            {
                // reset the user password
                var result = await _userManager.ResetPasswordAsync(user, model.Token, model.Password);
                if (result.Succeeded)
                {
                 //   model.Token
                    return Ok(user);
                }
                // Display validation errors. For example, password reset token already
                // used to change the password or password complexity rules not met
                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError(error.Code, error.Description);
                }
                return Ok();
            }
            // To avoid account enumeration and brute force attacks, don't
            // reveal that the user does not exist
            return Ok();
        }

        [HttpPost]
        [Route("Login")]
        //Post:/api/User/Login
        public async Task<IActionResult> Login(LoginModel model)
        {
            var user = await _userManager.FindByNameAsync(model.UserName);
            if (user != null && await _userManager.CheckPasswordAsync(user, model.Password))
            {
                //Get Role assigned to the user
                var role = await _userManager.GetRolesAsync(user);
                IdentityOptions _options = new IdentityOptions();
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                        new Claim("UserID",user.Id.ToString()),
                        new Claim(_options.ClaimsIdentity.RoleClaimType, role.FirstOrDefault())
                    }),
                    Expires = DateTime.UtcNow.AddMinutes(60),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_appSettings.JWT_Secret)),SecurityAlgorithms.HmacSha256Signature)
                };
                var tokenHandler = new JwtSecurityTokenHandler();
                var securityToken = tokenHandler.CreateToken(tokenDescriptor);
                var token = tokenHandler.WriteToken(securityToken);
                return Ok(new { token });
            }
            else
            {
                return BadRequest(new { message = "Username or password is incorrect." });
            }
        }

    }
}

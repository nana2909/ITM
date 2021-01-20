using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using APIServer.Models.Admission;
using System.Threading.Tasks;
using System.Diagnostics.CodeAnalysis;

namespace APIServer.Models.User
{
    public class ApplicationUser : IdentityUser
    {
        [Column(TypeName = "nvarchar(150)")]
        public string FullName { get; set; }
        [AllowNull]
        public string AdmissionID { get; set; }
        public tbAdmission Admission { get; set; }
    }
}

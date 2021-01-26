using APIServer.Models.Department;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Threading.Tasks;

namespace APIServer.Models.Faculty
{
    [Table("tbFaculty")]
    public partial class tbFaculty
    {
        [Key]
        [StringLength(30)]
        public string FacultyID { get; set; }

        [Required(ErrorMessage = "{0} is required")]
        [StringLength(50)]
        public string Name { get; set; }

        [DataType(DataType.Date)]
        public DateTime DoB { get; set; }

        [Required(ErrorMessage = "{0} is required")]
        [StringLength(100)]
        public string Degree { get; set; }

        [Required(ErrorMessage = "{0} is required")]
        [StringLength(30)]
        public string DepartmentID { get; set; }

        public string imgUrl { get; set; }
        public bool isActive { get; set; }
        public virtual tbDepartment tbDepartment { get; set; }
    }
}

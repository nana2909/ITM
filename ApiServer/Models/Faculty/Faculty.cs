using APIServer.Models.Department;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
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
        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}", ApplyFormatInEditMode = true)]
        [Display(Name = "Date Of Birth")]
        public DateTime DoB { get; set; }

        [Required(ErrorMessage = "{0} is required")]
        [StringLength(100)]
        public string Degree { get; set; }

        [Required(ErrorMessage = "{0} is required")]
        [StringLength(30)]
        public string DepartmentID { get; set; }

        [StringLength(200)]
        public string imgUrl { get; set; }

        public virtual tbDepartment tbDepartment { get; set; }
    }
}

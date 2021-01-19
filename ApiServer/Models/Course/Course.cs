using APIServer.Models.Field;
using APIServer.Models.Stream;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace APIServer.Models.Course
{

    [Table("tbCourse")]
    public partial class tbCourse
    {
        [Key]
        [StringLength(30)]
        public string CourseCode { get; set; }

        [Required(ErrorMessage = "{0} is required")]
        [StringLength(50)]
        public string CoureseName { get; set; }

        [Column(TypeName = "text")]
        [Required(ErrorMessage = "{0} is required")]
        [StringLength(500)]
        public string Description { get; set; }

        [Required(ErrorMessage = "{0} is required")]
        [StringLength(30)]
        public string StreamCode { get; set; }

        [Required(ErrorMessage = "{0} is required")]
        [StringLength(30)]
        public string FieldCode { get; set; }

        public bool isNew { get; set; }

        [StringLength(200)]
        public string imgUrl { get; set; }

        public virtual tbField tbField { get; set; }

        public virtual tbStream tbStream { get; set; }
    }
}

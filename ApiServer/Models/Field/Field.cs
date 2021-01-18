using APIServer.Models.Admission;
using APIServer.Models.Course;
using APIServer.Models.SpecicalSubject;
using APIServer.Models.Stream;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace APIServer.Models.Field
{
    [Table("tbField")]
    public partial class tbField
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public tbField()
        {
            tbAdmissions = new HashSet<tbAdmission>();
            TbCourses = new HashSet<tbCourse>();
            tbSpeSubjects = new HashSet<tbSpeSubject>();
        }

        [Key]
        [StringLength(30)]
        [Required(ErrorMessage = "{0} is required")]
        public string FieldCode { get; set; }

        [StringLength(50)]
        [Required(ErrorMessage = "{0} is required")]
        public string Name { get; set; }

        [StringLength(30)]

        public string StreamCode { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tbAdmission> tbAdmissions { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tbCourse> TbCourses { get; set; }

        public virtual tbStream tbStream { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tbSpeSubject> tbSpeSubjects { get; set; }
    }
}

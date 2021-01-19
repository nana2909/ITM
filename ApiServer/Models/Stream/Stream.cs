using APIServer.Models.Admission;
using APIServer.Models.Course;
using APIServer.Models.Field;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace APIServer.Models.Stream
{
    [Table("tbStream")]
    public partial class tbStream
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public tbStream()
        {
            TbAdmissions = new HashSet<tbAdmission>();
            tbCourses = new HashSet<tbCourse>();
            TbFields = new HashSet<tbField>();
        }

        [Key]
        [StringLength(30)]
        public string StreamCode { get; set; }

        [Required(ErrorMessage = "{0} is required")]
        [StringLength(50)]
        public string Name { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tbAdmission> TbAdmissions { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tbCourse> tbCourses { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tbField> TbFields { get; set; }
    }
}

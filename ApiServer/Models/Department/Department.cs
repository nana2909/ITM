using APIServer.Models.Faculty;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace APIServer.Models.Department
{
    [Table("tbDepartment")]
    public partial class tbDepartment
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public tbDepartment()
        {
            tbFaculties = new HashSet<tbFaculty>();
        }

        [Key]
        [StringLength(30)]
        public string DepartmentID { get; set; }

        [Required(ErrorMessage = "{0} is required")]
        [StringLength(50)]
        public string Name { get; set; }

        [Column(TypeName = "text")]
        [Required(ErrorMessage = "{0} is required")]
        [StringLength(500)]
        public string Description { get; set; }
        [Required(ErrorMessage = "{0} is required")]
        [StringLength(200)]

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tbFaculty> tbFaculties { get; set; }
    }
}

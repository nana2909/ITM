using APIServer.Models.Admission;
using APIServer.Models.Field;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace APIServer.Models.SpecicalSubject
{
    [Table("tbSpeSubject")]
    public partial class tbSpeSubject
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public tbSpeSubject()
        {
            tbAdmissions = new HashSet<tbAdmission>();
        }

        [Key]
        [StringLength(30)]
        public string SubjectID { get; set; }

        [Required(ErrorMessage = "{0} is required")]
        [StringLength(50)]
        public string SubjectName { get; set; }

        [Required(ErrorMessage = "{0} is required")]
        [StringLength(30)]
        public string FieldCode { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tbAdmission> tbAdmissions { get; set; }

        public virtual tbField tbField { get; set; }
    }
}

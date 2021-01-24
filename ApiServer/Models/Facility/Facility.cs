using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace APIServer.Models.Facility
{
    [Table("tbFacility")]
    public partial class tbFacility
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int FacCode { get; set; }

        [Required(ErrorMessage = "{0} is required")]
        [StringLength(50)]
        [Display(Name = "Facility Name")]
        public string FacName { get; set; }

        public bool isActive { get; set; }

        [StringLength(200)]
        public string imgUrl { get; set; }
    }
}

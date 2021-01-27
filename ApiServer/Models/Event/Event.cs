//using System;
//using System.Collections.Generic;
//using System.ComponentModel.DataAnnotations;
//using System.ComponentModel.DataAnnotations.Schema;
//using System.Linq;
//using System.Threading.Tasks;

//namespace APIServer.Models.Event
//{
//    [Table("tbEvent")]
//    public partial class tbEvent
//    {
//        [Key]
//        [StringLength(30)]
//        public string EventID { get; set; }

//        [Required(ErrorMessage = "{0} is required")]
//        [StringLength(50)]
//        public string Title { get; set; }

//        [Column(TypeName = "text")]
//        [Required(ErrorMessage = "{0} is required")]
//        [StringLength(500)]
//        public string Description { get; set; }

//        [Required(ErrorMessage = "{0} is required")]
//        public bool isActive { get; set; }

//        [Required(ErrorMessage = "{0} is required")]
//        [StringLength(200)]
//        public string imgUrl { get; set; }
//    }
//}

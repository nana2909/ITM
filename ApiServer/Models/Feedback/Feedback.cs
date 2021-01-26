using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace APIServer.Models.Feedback
{
    [Table("tbFeedback")]
    public partial class tbFeedback
    {
        [Key]
        public int FbID { get; set; }

        [StringLength(100)]
        public string FbSubject { get; set; }

        [StringLength(50)]
        public string StudentName { get; set; }

        [Column(TypeName = "text")]
        public string FbContent { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        [Column(TypeName = "date")]
        public DateTime Date { get; set; }
        public bool isResolved { get; set; }
    }
}

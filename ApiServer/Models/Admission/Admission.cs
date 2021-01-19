using APIServer.Models.Field;
using APIServer.Models.OptionalSubject;
using APIServer.Models.SpecicalSubject;
using APIServer.Models.Stream;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace APIServer.Models.Admission
{
    [Table("tbAdmission")]
    public partial class tbAdmission
    {
        [Key]
        [StringLength(50)]
        public string AdmissionID { get; set; }

        [Required]
        [StringLength(50)]
        [DataType(DataType.EmailAddress)]
        [Remote(action: "VerifyEmail", controller: "Users")]
        public string StudentEmail { get; set; }

        [Required]
        [StringLength(50)]
        public string StudentName { get; set; }

        [Required]
        [StringLength(50)]
        public string FatherName { get; set; }

        [Required]
        [StringLength(50)]
        public string MotherName { get; set; }

        [Column(TypeName = "date")]
        public DateTime DoB { get; set; }

        public bool Gender { get; set; }

        [Column(TypeName = "text")]
        [Required]
        public string ResidentialAddress { get; set; }

        [Column(TypeName = "text")]
        [Required]
        public string PermanentAddress { get; set; }

        [Required]
        [StringLength(30)]
        public string StreamCode { get; set; }

        [Required]
        [StringLength(30)]
        public string FieldCode { get; set; }

        [StringLength(100)]
        public string SportsDetails { get; set; }

        public int StatusID { get; set; }

        [Required]
        [StringLength(50)]
        public string ExUniversity { get; set; }

        [Required]
        [StringLength(30)]
        public string ExEnrollmentNumber { get; set; }

        [Required]
        [StringLength(50)]
        public string ExCenter { get; set; }

        [Required]
        [StringLength(50)]
        public string ExStream { get; set; }

        [Required]
        [StringLength(50)]
        public string ExField { get; set; }

        public double ExMarkSecured { get; set; }

        [Column(TypeName = "date")]
        public DateTime OutOfDate { get; set; }

        [Required]
        [StringLength(1)]
        public string ClassObtained { get; set; }

        [StringLength(30)]
        public string SpecializedSubjectID { get; set; }

        [StringLength(30)]
        public string OptionalSubjectID { get; set; }

        public virtual tbAdmissionStatus tbAdmissionStatus { get; set; }

        public virtual tbField tbField { get; set; }

        public virtual tbOpSubject tbOpSubject { get; set; }

        public virtual tbSpeSubject tbSpeSubject { get; set; }

        public virtual tbStream tbStream { get; set; }
    }
}
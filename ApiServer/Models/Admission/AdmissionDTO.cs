using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIServer.Models.Admission
{
    public class AdmissionDTO
    {
        
        public string AdmissionID { get; set; }

        public string StudentEmail { get; set; }

        public string StudentName { get; set; }

        public string FatherName { get; set; }

        public string MotherName { get; set; }

        public DateTime DoB { get; set; }

        public bool Gender { get; set; }

        public string ResidentialAddress { get; set; }

        public string PermanentAddress { get; set; }

        public string StreamCode { get; set; }

        public string FieldCode { get; set; }

        public string SportsDetails { get; set; }

        public int StatusID { get; set; }

        public string ExUniversity { get; set; }

        public string ExEnrollmentNumber { get; set; }

        public string ExCenter { get; set; }

        public string ExStream { get; set; }

        public string ExField { get; set; }

        public double ExMarkSecured { get; set; }

        public DateTime OutOfDate { get; set; }

        public string ClassObtained { get; set; }

        public string SpecializedSubjectID { get; set; }

        public string OptionalSubjectID { get; set; }
    }
}

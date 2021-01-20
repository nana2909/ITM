﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APIServer.Models.Admission;
using APIServer.Service;
using APIServer.Models.User;
using Microsoft.EntityFrameworkCore;

namespace APIServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdmissionController : ControllerBase
    {
        private AuthenticationContext db;
        public AdmissionController(AuthenticationContext _db)
        {
            db = _db;
        }
        [HttpPost]
        //[Authorize]
        [Route("SubmitAdmission")]
        //POST: api/Admission/SubmitAdmission
        public async Task<Object> SubmitAdmission(tbAdmission model)
        {
            //Student apply dupplicate admission
            var mailChk = db.Admissions.SingleOrDefault(e => e.StudentEmail.Equals(model.StudentEmail));
            if (mailChk != null)
            {
                if (mailChk.FieldCode.Equals(model.FieldCode))
                {
                    ///* If Student can submit with some Stream.*/
                    //var checkSubmit = mailChk.StreamCode.Equals(model.StreamCode);
                    //if (checkSubmit)
                    //{
                    //    return BadRequest("Admission just register Stream with email!");
                    //}
                    return BadRequest("Admission just register with email!");
                }
            }
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            if (!AdmissionService.ValidateAge(model.DoB))
            {
                return BadRequest("Age must over than 18 year old!");
            }
            //Generator Key Admission
            var finalString = AdmissionService.GenerateKey(model.StreamCode);

            //Save AdmissionForm + finalString to Db
                var admission = new tbAdmission
                {
                    AdmissionID = finalString,
                    StudentEmail = model.StudentEmail,
                    StudentName = model.StudentName,
                    FatherName = model.FatherName,
                    MotherName = model.MotherName,
                    DoB = model.DoB,
                    Gender = model.Gender,
                    ResidentialAddress = model.ResidentialAddress,
                    PermanentAddress = model.PermanentAddress,
                    StreamCode = model.StreamCode,
                    FieldCode = model.FieldCode,
                    SportsDetails = model.SportsDetails,
                    StatusID = model.StatusID,
                    ExUniversity = model.ExUniversity,
                    ExEnrollmentNumber = model.ExEnrollmentNumber,
                    ExCenter = model.ExCenter,
                    ExStream = model.ExStream,
                    ExField = model.ExField,
                    ExMarkSecured = model.ExMarkSecured,
                    OutOfDate = model.OutOfDate,
                    ClassObtained = model.ClassObtained,
                    SpecializedSubjectID = model.SpecializedSubjectID,
                    OptionalSubjectID = model.OptionalSubjectID
                };
                await db.Admissions.AddAsync(admission);
                await db.SaveChangesAsync();

            //Return key to Student
            return new { AdmissionKey = finalString };
        }

        [HttpGet]
        //[Authorize]
        [Route("GetInfoAdmission")]
        //POST: api/Admission/GetInfoAdmission
        public async Task<Object> GetInfoAdmission(string Id)
        {
            if(Id == null)
            {
                return BadRequest("Admission ID cannot null!");
            }
            var Admission = await db.Admissions.FindAsync(Id);
            //SpecializedSubject
            var SpecSubject = db.SpeSubjects.SingleOrDefault(e => e.SubjectID.Equals(Admission.SpecializedSubjectID));
            if (SpecSubject != null)
            {
                Admission.tbSpeSubject = SpecSubject;
            }
            //OptionalSubject
            var OpSubject = db.OpSubjects.SingleOrDefault(e => e.SubjectID.Equals(Admission.OptionalSubjectID));
            if (OpSubject != null)
            {
                Admission.tbOpSubject = OpSubject;
            }
            //AdmissionStatus
            var AdmisStatus = db.AdmissionStatuses.SingleOrDefault(e => e.StatusID == Admission.StatusID);
            if (AdmisStatus != null)
            {
                Admission.tbAdmissionStatus = AdmisStatus;
            }
            //Field
            var Field = db.Fields.SingleOrDefault(e => e.FieldCode.Equals(Admission.FieldCode));
            if (Field != null)
            {
                //Course
                var CourseList = db.Courses.Where(x => x.FieldCode.Equals(Field.FieldCode)).ToList();
                if (CourseList != null)
                {
                    Field.TbCourses = CourseList;
                }
                //Subject
                var SubjectList = db.SpeSubjects.Where(x => x.FieldCode.Equals(Field.FieldCode)).ToList();
                if(SubjectList != null)
                {
                    Field.tbSpeSubjects = SubjectList;
                }
                Admission.tbField = Field;
            }
            //Stream 
            var Stream = db.Streams.SingleOrDefault(e => e.StreamCode.Equals(Admission.StreamCode));
            if (Stream != null)
            {
                //Field
                var FieldList = db.Fields.Where(x => x.StreamCode.Equals(Stream.StreamCode)).ToList();
                Stream.TbFields = FieldList;
                Admission.tbStream = Stream;
            }

            return new { Admission };
        }

        [HttpDelete]
        //[Authorize]
        [Route("DeleteAdmission")]
        //POST: api/Admission/DeleteAdmission
        public async Task<IActionResult> DeleteAdmission(string Id)
        {
            if (Id == null)
            {
                return BadRequest("Admission ID cannot null!");
            }
            var Admission = await db.Admissions.FindAsync(Id);
            if (Admission != null)
            {
                if (Admission.StatusID == 1) //Cannot delele admission when accepnt from admin
                {
                    return BadRequest("Cannot Delete Admission when accepted!");
                }
                db.Admissions.Remove(Admission);
                return Ok("Delete Success!");
            }
            return NotFound();
        }

        [HttpPut]
        //[Authorize]
        [Route("EditAdmission")]
        //POST: api/Admission/DeleteAdmission
        public async Task<IActionResult> EditAdmission(string Id, tbAdmission model)
        {
            if (Id == null)
            {
                return BadRequest("Admission ID cannot null!");
            }
            var Admission = await db.Admissions.FindAsync(Id);
            if (Admission != null)
            {
                if (Admission.StatusID == 1) //Cannot edit admission when accepnt from admin
                {
                    return BadRequest("Cannot Delete Admission when accepted!");
                }
                else
                {
                    Admission.StudentEmail = model.StudentEmail;
                    Admission.StudentName = model.StudentName;
                    Admission.FatherName = model.FatherName;
                    Admission.MotherName = model.MotherName;
                    Admission.DoB = model.DoB;
                    Admission.Gender = model.Gender;
                    Admission.ResidentialAddress = model.ResidentialAddress;
                    Admission.PermanentAddress = model.PermanentAddress;
                    Admission.StreamCode = model.StreamCode;
                    Admission.FieldCode = model.FieldCode;
                    Admission.SportsDetails = model.SportsDetails;
                    Admission.StatusID = model.StatusID;
                    Admission.ExUniversity = model.ExUniversity;
                    Admission.ExEnrollmentNumber = model.ExEnrollmentNumber;
                    Admission.ExCenter = model.ExCenter;
                    Admission.ExStream = model.ExStream;
                    Admission.ExField = model.ExField;
                    Admission.ExMarkSecured = model.ExMarkSecured;
                    Admission.OutOfDate = model.OutOfDate;
                    Admission.ClassObtained = model.ClassObtained;
                    Admission.SpecializedSubjectID = model.SpecializedSubjectID;
                    Admission.OptionalSubjectID = model.OptionalSubjectID;

                    db.Entry(Admission).State = EntityState.Modified;
                    await db.SaveChangesAsync();
                    return Ok("Edit Success!");
                }
            }
            return NotFound();
        }

    }
}
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-admission-detail',
  templateUrl: './admission-detail.component.html',
  styles: [
  ]
})
export class AdmissionDetailComponent implements OnInit {
  
  admissionDetails = new FormGroup({});
  
  constructor(
    public fb:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef:MatDialogRef<AdmissionDetailComponent>
  ) { }

  ngOnInit(): void {
    this.InitialValueFrom();
    this.admissionDetails.setValue(this.data.data);
  }

  InitialValueFrom(){
    this.admissionDetails = this.fb.group({
      admissionID : ['', Validators.required],
      studentName : [''],
      studentEmail : [null,[Validators.email,Validators.required]],
      fatherName : [''],
      motherName : [''],
      doB : [''],
      gender: [''],
      residentialAddress: [''],
      permanentAddress: [''],
      streamCode: [''],
      fieldCode: [''],
      sportsDetails: [''],
      statusID: [0],
      exUniversity: [''],
      exEnrollmentNumber: [''],
      exCenter: [''],
      exStream: [''],
      exField: [''],
      exMarkSecured: [''],
      outOfDate: [''],
      classObtained: [''],
      specializedSubjectID: [''],
      optionalSubjectID: [''],
      tbAdmissionStatus: [''],
      tbField: [''],
      tbOpSubject: [''],
      tbSpeSubject: [''],
      tbStream: ['']
    });
  }


}

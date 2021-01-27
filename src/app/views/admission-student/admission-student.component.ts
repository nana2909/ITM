import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdmissionKey, Field, HomeService, Stream } from '../../shared/home.service';
import { UserService } from '../../shared/user.service';
import {  saveAs as importedSaveAs  } from "file-saver"; 
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admission-student',
  templateUrl: './admission-student.component.html',
  styleUrls: ['./admission-student.component.css']
})
export class AdmissionStudentComponent implements OnInit {

  Streams : Stream[];
  Fields : Field[];
  FieldList : Field[];
  FieldStatus : boolean  = false;
  StreamSelected = '0';
  FieldSelected = '0';
  keyAdmission: string ='';
  @ViewChild('pdfTable', {static: false}) pdfTable: ElementRef;
  
  onChange(value)
  {
      this.FieldStatus = true;
      this.FieldList = this.Fields.filter(f => f.streamCode == value)
  }
  constructor(
              public service: UserService, 
              public service2: HomeService,
              public toastr: ToastrService,
              private router: Router,
  ) { }

  ngOnInit(): void {
    this.getInitialData();
  }

  onSubmit(){
    this.service.submitAdmision().subscribe(
      (res: any) => {
          this.keyAdmission = res.admissionKey;
          this.router.navigate(['/admissionfinish', this.keyAdmission]);
          this.service.admissionModel.reset();
          this.toastr.success('Admission submit form!','Registration successful.');
        },
      err => {
        this.service.admissionModel.reset();
        console.warn(err)
      }
    )
  }


  downloadAsPDF(){
    this.service2.GetAdmissionForm().subscribe(
      res=>{
        console.log(res);
        importedSaveAs(res, "AdmissionForm.docx");
      },
      err=>{console.log(err)}
    )

  }

  getInitialData(){
    this.service2.getAllStream().subscribe(
      (res:any) => {
        console.log(res);
        this.Streams = Object.values(res);
      },
      err => {
        console.log(err);
      }
    )
    this.service2.getAllField().subscribe(
      (res:any) => {
        console.info(res);
        this.Fields = Object.values(res);
      },
      err => {
        console.error(err);
      }
    )
  }
}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Course, HomeService, OptionalSubject, SpecSubject } from '../../../shared/home.service';
import { UserService } from '../../../shared/user.service';

@Component({
  selector: 'app-admission-info',
  templateUrl: './admission-info.component.html',
  styles: [
  ]
})
export class AdmissionInfoComponent implements OnInit {

  status: boolean = true;
  submitFlg: boolean = false;
  RegisterForm: FormGroup ;
  SpecicalList : SpecSubject[];
  OptionalList : OptionalSubject[];
  CourseList : Course[];

  constructor(
    private service : HomeService,
    private UserService : UserService,
  ) {

  }

  ngOnInit(): void {
    this.getAllSpecSubject();
    this.getAllOpSubject();
    this.getAllCourse();
  }
  
  //Get Specials
  getAllSpecSubject(){
    this.service.getAllSpecSubject().subscribe(
     res=>{
       this.SpecicalList = Object.values(res);
       console.info(this.SpecicalList)
     },
     err => {console.error(err)})
   }
  
   //Get OptionSubject
   getAllOpSubject(){
    this.service.getAllOpSubject().subscribe(
      res=>{
        this.OptionalList = Object.values(res);
        console.info(this.OptionalList)

      },
      err=>{console.error(err)}
      )
   }
   //Get Course
   getAllCourse(){
    this.service.getAllCourse().subscribe(
      res=>{
        this.OptionalList = Object.values(res);
        console.info(this.OptionalList)
      },
      err=>{console.error(err)}
      )
   }
  
  checkAdmission(idAdmission){
    this.service.GetInfoAdmission(idAdmission.value).subscribe(
      (res:any) => {
        console.info(res);
        this.status = res.statusID == 1 ? true : false;
        this.submitFlg = res.statusID == 1 ? true : false;
      },
      err => { console.warn(err)}
    );
  } 

  onSubmit(){
    //Submit
  }
}


export interface SubmitForm{
  AdmissionID : string;
  StudentName: string;
  StudentEmail: string;
  StreamCode: string;
  FieldCode: string;
  SpecializedSubjectID: string;
  OptionalSubjectID: string;
  Course: [];
}
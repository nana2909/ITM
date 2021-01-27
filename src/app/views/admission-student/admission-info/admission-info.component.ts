import { Component , OnInit } from '@angular/core';
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

  Specicals : SpecSubject[];
  Optionals: OptionalSubject[];
  CourseList : Course[];
  AdmissionIfo : any;

  status: boolean = true;
  submitFlg: boolean = false;
  setSelected = '0';

  RegisterForm: FormGroup ;
  
  constructor(
    private service : HomeService,
    private userService : UserService
  ) {}

  onChange(value)
  {
    
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
       this.Specicals = Object.values(res);
     },
     err => {console.error(err)})
   }
  
   //Get OptionSubject
   getAllOpSubject(){
    this.service.getAllOpSubject().subscribe(
      res=>{
        this.Optionals = Object.values(res);
      },
      err=>{console.error(err)}
      )
   }
   //Get Course
   getAllCourse(){
    this.service.getAllCourse().subscribe(
      res=>{
        this.CourseList = Object.values(res);
        console.warn(this.CourseList)
      },
      err=>{console.error(err)}
      )
   }
  
   //Check Admission
  checkAdmission(idAdmission){
    this.service.GetInfoAdmission(idAdmission.value).subscribe(
      (res:any) => {
        this.AdmissionIfo = res.admission;
        this.status = this.AdmissionIfo.statusID == 1 ? true : false;
        this.submitFlg = this.AdmissionIfo.statusID == 1 ? true : false;
        if (this.AdmissionIfo.statusID == 1) {
          this.userService.registerForm.patchValue({
            AdmissionID : this.AdmissionIfo.admissionID ,
            StudentName: this.AdmissionIfo.studentName ,
            StudentEmail: this.AdmissionIfo.studentEmail ,
            StreamName: this.AdmissionIfo.tbStream.name ,
            StreamCode: this.AdmissionIfo.streamCode ,
            FieldCode: this.AdmissionIfo.fieldCode ,
            FieldName: this.AdmissionIfo.tbField.name ,
          });
          //Arrange data display
          this.Specicals = this.Specicals.filter(s=> s.fieldCode == this.AdmissionIfo.fieldCode)
          this.CourseList = this.CourseList.filter(c => c.fieldCode == this.AdmissionIfo.fieldCode && c.streamCode == this.AdmissionIfo.streamCode)
        };
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
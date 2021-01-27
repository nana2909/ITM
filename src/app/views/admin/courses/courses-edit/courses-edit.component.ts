import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../../../shared/admin.service';

@Component({
  selector: 'app-courses-edit',
  templateUrl: './courses-edit.component.html',
  styleUrls: ['./courses-edit.component.css']
})
export class CoursesEditComponent implements OnInit {

  CourseCode:string;
  CourseForm= new FormGroup({});
  editForm:any;
  CoursesList:any;
  StreamList;
  FieldList:any;
  constructor(
    public fb:FormBuilder,
    private toastr:ToastrService,
    private router:Router,
    private service:AdminService,
    private currentRoute:ActivatedRoute,
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    this.CourseForm=this.fb.group({
    CourseCode : [null,Validators.required],
    CourseName : [null,Validators.required],
    Description:[null,Validators.required],
    StreamCode:[null,Validators.required],
    FieldCode:[null,Validators.required],
    });
    this.CourseCode=this.currentRoute.snapshot.paramMap.get('id')
    this.service.getSpesubject(this.CourseCode).subscribe(
      (res:any)=>{
        this.CourseForm.setValue({
          CourseCode:res.CourseCode,
          CourseName:res.CourseName,
          Description:res.Description,
          StreamCode:res.StreamCode,
          FieldCode:res.FieldCode,
        });
        this.service.getFieldList().subscribe(
          (data:any)=>{
            this.CoursesList=data;
          });
          this.service.getFieldList().subscribe(
            (data:any)=>{
              this.FieldList=data;
            })
            this.service.getStreamList().subscribe(
              (data:any)=>{
                this.StreamList=data;
              });
        }
      )
  }
  onSubmit(data){
    this.editForm={
      CourseCode:data.CourseCode,
      CourseName:data.CourseName,
      Description:data.Description,
      StreamCode:data.StreamCode,
      FieldCode:data.FieldCode,

    }
    this.service.putSpeSubject(this.CourseCode,this.editForm).subscribe(
      (res:any)=>{
        if(res){
          this.router.navigate(['Admin/courses']);
          this.toastr.success('Success!','Update Successfully');
        }
        else{
          this.toastr.error("Update",'Fail!!!')
        };
      }
    )
  }

}

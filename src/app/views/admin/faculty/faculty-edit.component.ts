import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../../shared/admin.service';
import { DatePipe } from '@angular/common';
import { formatDate } from '@angular/common';
import { LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-faculty-edit',
  templateUrl: './faculty-edit.component.html',
  styleUrls: ['./faculty-edit.component.css']
})
export class FacultyEditComponent implements OnInit {
  ID:string;
  facultyForm=new FormGroup({});
  Department:any;
  constructor(
    public fb:FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private service : AdminService,
    private currentRoute:ActivatedRoute,
    private datePipe: DatePipe,
  ) { }
  
  ngOnInit(): void {
    this.facultyForm=this.fb.group({
      FacultyID : [null,Validators.required],
      Name:[null,Validators.required],
      DoB: [null,Validators.required],
      Degree:[null,Validators.required],
      DepartmentID:[null,Validators.required],
      ImgUrl:''
      });
      
    this.ID=this.currentRoute.snapshot.paramMap.get('id');
    this.service.getFaculty(this.ID).subscribe(
      (res:any)=>{
        console.log(res);
        this.facultyForm.setValue({
          FacultyID : res.facultyID,
          Name: res.name,
          DoB:res.doB,
          // DoB: this.datePipe.transform(res.doB, 'MM/dd/yyyy'),
          Degree: res.degree,
          DepartmentID : res.departmentID,
          ImgUrl:res.imgUrl
      });
      }
    );
    this.service.getDepartmentList().subscribe(
      (data:any)=>{
        this.Department=data;
      });

  }
  onSubmit(){
    this.service.putFaculty(this.ID,this.facultyForm.value).subscribe(
      (res:any)=>{     
        if(res){            
          this.router.navigate(['/Admin/faculty']);
          this.toastr.success(' Success!','Update Faculty successfully.');
        } else {
            this.toastr.error("Update" ,'Update failed!');
          };
        } 
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../../shared/admin.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-faculty-edit',
  templateUrl: './faculty-edit.component.html',
  styleUrls: ['./faculty-edit.component.css']
})
export class FacultyEditComponent implements OnInit {
  ID:string;
  facultyForm=new FormGroup({});
  Department:any;
  Date=new Date;
  constructor(
    public fb:FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private service : AdminService,
    private currentRoute:ActivatedRoute,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    console.log(Date);
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
          DoB: this.datePipe.transform(res.doB, 'date'),
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
   // this.facultyForm.
   
    this.service.putFaculty(this.ID,this.facultyForm.value).subscribe(
      (res:any)=>{     
        if(res.succeeded){            
          this.router.navigateByUrl('/Admin/faculty');
          this.toastr.success(' Success!','Update Faculty successfully.');
          location.reload();
        } else {
          res.errors.forEach(element => {
            this.toastr.error(element.code ,'Update failed!');
          });
        }
      }, (err) => {
        console.log(err);
      }
    )

  }

}

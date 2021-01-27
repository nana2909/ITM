import { error } from 'jquery';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../../shared/admin.service';

@Component({
  selector: 'app-faculty-add',
  templateUrl: './faculty-add.component.html',
  styleUrls: ['./faculty-add.component.css']
})
export class FacultyAddComponent implements OnInit {
  Department: any;
  constructor(
    public fb:FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private service : AdminService,
  ) { }

  ngOnInit(): void {
    this.service.getDepartmentList().subscribe(
      (data:any)=>{
        console.log(data)
        this.Department=data;
      });
  }
  onSubmit(){
    this.service.addFaculty(this.service.facultyForm.value).subscribe(
      (res:any)=>{
        if(res){
          this.service.facultyForm.reset();
          this.router.navigate(['/Admin/faculty']);
          this.toastr.success('Added new Faculty.','Success');
        } else {
          this.toastr.error('Something is wrong','Add failed.');
        }         
      } , (err)=>{
        this.toastr.error('Something is wrong, check ID!','Add failed.');  
      }

    )
  }
   
   
   
  
}

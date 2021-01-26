import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../../shared/admin.service';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent implements OnInit {

  constructor(
    public fb:FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private service : AdminService,
  ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.service.addDepartment(this.service.departmentForm.value).subscribe(
      (res)=>{     
        if(res){
          this.service.departmentForm.reset();
          this.router.navigate(['/Admin/department']);
          this.toastr.success('Added new Department.','Success');             
        }else{
            this.toastr.error('Something is wrong','Add failed.');   
        }
      } , (err)=>{
        this.toastr.error('Something is wrong, check ID!','Add failed.');  
      }
      )
  }
}

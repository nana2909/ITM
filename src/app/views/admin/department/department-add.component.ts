import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
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
      (res:any)=>{
        this.router.navigateByUrl('/Admin/Department');
        this.toastr.success('Success','Added new Department.');  
      },
      err=>{
        if(err.status == 400)
          this.toastr.error('Something is wrong','Add failed.');
        else
          console.log(err);
      }
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../../shared/admin.service';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent implements OnInit {

  ID:string;
  departmentForm=new FormGroup({});

  constructor(
    public fb:FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private service : AdminService,
    private currentRoute:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.departmentForm = this.fb.group({
      DepartmentID:[null,Validators.required],
      Name:[null,Validators.required],
      Description:[null,Validators.required],
      imgUrl:'',
 
    });
    this.ID=this.currentRoute.snapshot.paramMap.get('id');
    this.service.getDepartment(this.ID).subscribe(
      (res:any)=>{
        console.log(res);
        this.departmentForm.setValue({
          DepartmentID:res.departmentID,
          Name:res.name,
          Description:res.description,
          imgUrl:res.imgUrl
        })
      }
    )
    
  }
  onSubmit(){
   this.service.putDepartment(this.ID,this.departmentForm.value).subscribe(
    (res:any)=>{     
      if(res){            
        this.router.navigateByUrl('/Admin/department');
        this.toastr.success(' Success!','Update Department successfully.');
      } else {
          this.toastr.error("Update" ,'Update failed!');
        };
      }    
   )
 }
}

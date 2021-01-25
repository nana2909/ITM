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
  editForm:any;
  Img:any;
  public responseUpload: {dbPath: ''};

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
      ImgUrl:[null],
 
    });
    this.ID=this.currentRoute.snapshot.paramMap.get('id');
    this.service.getDepartment(this.ID).subscribe(
      (res:any)=>{
        console.log(res);
        this.departmentForm.setValue({
          DepartmentID:res.departmentID,
          Name:res.name,
          Description:res.description,
          ImgUrl:res.imgUrl
        });
        this.Img=this.departmentForm.get('ImgUrl').value;
        console.log(this.Img);
      }
    )
    
  }
  public uploadFinished = (event) => {
    this.responseUpload = event;
  }
  public createImgPath = (serverPath: string) => {
    return `http://localhost:51373/${serverPath}`;
  }
  onSubmit(data){
    this.editForm={
      DepartmentID:data.DepartmentID,
      Name:data.Name,
      Description:data.Description,
      ImgUrl:this.responseUpload.dbPath
    }
   this.service.putDepartment(this.ID,this.editForm).subscribe(
    (res:any)=>{     
      if(res){            
        this.router.navigate(['/Admin/department']);
        this.toastr.success(' Success!','Update Department successfully.');
      } else {
          this.toastr.error("Update" ,'Update failed!');
        };
      }    
   )
 }
}

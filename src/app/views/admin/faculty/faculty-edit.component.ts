import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../../shared/admin.service';

@Component({
  selector: 'app-faculty-edit',
  templateUrl: './faculty-edit.component.html',
  styleUrls: ['./faculty-edit.component.css']
})
export class FacultyEditComponent implements OnInit {
  ID:string;
  facultyForm=new FormGroup({});
  Department:any;
  editForm:any;
  Img:any;
  public responseUpload: {dbPath: ''};

  constructor(
    public fb:FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private service : AdminService,
    private currentRoute:ActivatedRoute,
    private http: HttpClient
  ) { }
  
  ngOnInit(): void {
    this.facultyForm=this.fb.group({
      FacultyID : [null,Validators.required],
      Name:[null,Validators.required],
      DoB: [null,Validators.required],
      Degree:[null,Validators.required],
      DepartmentID:[null,Validators.required],
      ImgUrl:[null],
      });
      
    this.ID=this.currentRoute.snapshot.paramMap.get('id');
    this.service.getFaculty(this.ID).subscribe(
      (res:any)=>{
        this.facultyForm.setValue({
          FacultyID : res.facultyID,
          Name: res.name,
          DoB:res.doB,
          // DoB: this.datePipe.transform(res.doB, 'MM/dd/yyyy'),
          Degree: res.degree,
          DepartmentID : res.departmentID,
          ImgUrl:res.imgUrl
      });
      this.Img=this.facultyForm.get('ImgUrl').value;
      console.log(this.Img);
      }
    );
    this.service.getDepartmentList().subscribe(
      (data:any)=>{
        this.Department=data;
      });
  }
  public uploadFinished = (event) => {
    this.responseUpload = event;
  }
  public createImgPath = (serverPath: string) => {
    return `http://localhost:51373/${serverPath}`;
  }

  onSubmit(data){
    this.editForm={
      FacultyID:data.FacultyID,
      Name:data.Name,
      DoB:data.DoB,
      Degree:data.Degree,
      DepartmentID:data.DepartmentID,
      ImgUrl:this.responseUpload.dbPath
    }
    this.service.putFaculty(this.ID,this.editForm).subscribe(
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

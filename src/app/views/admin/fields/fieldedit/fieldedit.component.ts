import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../../../shared/admin.service';

@Component({
  selector: 'app-fieldedit',
  templateUrl: './fieldedit.component.html',
  styleUrls: ['./fieldedit.component.css']
})
export class FieldeditComponent implements OnInit {

  FieldCode:string;
  FieldForm= new FormGroup({});
  editForm:any;
  ListStream:any;
  constructor(
    public fb:FormBuilder,
    private toastr:ToastrService,
    private router:Router,
    private service:AdminService,
    private currentRoute:ActivatedRoute,
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    this.FieldForm=this.fb.group({
      FieldCode : [null,Validators.required],
      FieldName : [null,Validators.required],
      StreamCode:[null,Validators.required],
    });
    this.FieldCode=this.currentRoute.snapshot.paramMap.get('id')
    this.service.getField(this.FieldCode).subscribe(
      (res:any)=>{
        this.FieldForm.setValue({
          FieldCode:res.FieldCode,
          FieldName:res.FieldName,
          StreamCode:res.StreamCode,
        });
        this.service.getStreamList().subscribe(
          (data:any)=>{
            this.ListStream=data;
          });
      }
    )
  }
  onSubmit(data){
    this.editForm={
      FieldCode:data.FieldCode,
      FieldName:data.FieldName,
      StreamCode:data.StreamCode,
    }
    this.service.putField(this.FieldCode,this.editForm).subscribe(
      (res:any)=>{
        if(res){
          this.router.navigate(['Admin/fields']);
          this.toastr.success('Success!','Update Successfully');
        }
        else{
          this.toastr.error("Update",'Fail!!!')
        };
      }
    )
  }
}

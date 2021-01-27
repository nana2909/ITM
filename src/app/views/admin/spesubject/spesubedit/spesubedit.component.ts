import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../../../shared/admin.service';

@Component({
  selector: 'app-spesubedit',
  templateUrl: './spesubedit.component.html',
  styleUrls: ['./spesubedit.component.css']
})
export class SpesubeditComponent implements OnInit {

  subjectID:string;
  SpeSubForm= new FormGroup({});
  editForm:any;
  ListSpeSub:any;
  constructor(
    public fb:FormBuilder,
    private toastr:ToastrService,
    private router:Router,
    private service:AdminService,
    private currentRoute:ActivatedRoute,
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    this.SpeSubForm=this.fb.group({
        subjectID:[null,Validators.required],
        subjectName:[null,Validators.required],
        fieldCode:[null,Validators.required],
    });
    this.subjectID=this.currentRoute.snapshot.paramMap.get('id')
    this.service.getSpesubject(this.subjectID).subscribe(
      (res:any)=>{
        this.SpeSubForm.setValue({
          subjectID:res.SubjectID,
          subjectName:res.SubjectName,
          fieldCode:res.FieldCode,
        });
        this.service.getFieldList().subscribe(
          (data:any)=>{
            this.ListSpeSub=data;
          });
      }
    )
  }
  onSubmit(data){
    this.editForm={
      subjectID:data.subjectID,
      subjectName:data.subjectName,
      FieldCode:data.FieldCode,
    }
    this.service.putSpeSubject(this.subjectID,this.editForm).subscribe(
      (res:any)=>{
        if(res){
          this.router.navigate(['Admin/spesubject']);
          this.toastr.success('Success!','Update Successfully');
        }
        else{
          this.toastr.error("Update",'Fail!!!')
        };
      }
    )
  }

}

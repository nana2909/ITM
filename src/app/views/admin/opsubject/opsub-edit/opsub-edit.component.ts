import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../../../shared/admin.service';

@Component({
  selector: 'app-opsub-edit',
  templateUrl: './opsub-edit.component.html',
  styleUrls: ['./opsub-edit.component.css']
})
export class OpsubEditComponent implements OnInit {

  subjectID :string;
  OpSubForm=new FormGroup({});
  editForm: any;

  constructor(
    public fb:FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private service : AdminService,
    private currentRoute:ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.OpSubForm=this.fb.group
    ({
      subjectID : [null,Validators.required],
      subjectName:[null,Validators.required],

    });
    this.subjectID=this.currentRoute.snapshot.paramMap.get('id');
    this.service.getOpsubject(this.subjectID).subscribe(
      (res:any)=>{
        console.log(res);
        this.OpSubForm.setValue({
          subjectID:res.subjectID,
          subjectName:res.subjectName,
        });
      }

    )
  }
  onSubmit(data){
    this.editForm={
      subjectID:data.subjectID,
      subjectName:data.subjectName,
    }
    this.service.putOpSubject(this.subjectID,this.editForm).subscribe(
      (res:any)=>{
        if(res){
          this.router.navigate(['/Admin/opsubject']);
          this.toastr.success(' Success!','Update subject successfully.');
        }
        err=>{
          if(err.status == 400)
            this.toastr.error('Something is wrong','edit failed.');
          else
            console.log(err);
        }
      }
    )
  }
}

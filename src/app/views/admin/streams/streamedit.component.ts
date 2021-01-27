import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../../shared/admin.service';

@Component({
  selector: 'app-streamedit',
  templateUrl: './streamedit.component.html',
  styleUrls: ['./streamedit.component.css']
})
export class StreameditComponent implements OnInit {
  streamCode: string;
  StreamForm: any;
  editForm: { streamCode: any; streamName: any; };

  constructor(
    public fb:FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private service : AdminService,
    private currentRoute:ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.StreamForm=this.fb.group
    ({
      streamCode : [null,Validators.required],
      streamName:[null,Validators.required],

    });
    this.streamCode=this.currentRoute.snapshot.paramMap.get('id');
    this.service.getOpsubject(this.streamCode).subscribe(
      (res:any)=>{
        console.log(res);
        this.StreamForm.setValue({
          streamCode:res.streamCode,
          streamName:res.streamName,
        });
      }

    )
  }
  onSubmit(data){
    this.editForm={
      streamCode:data.streamCode,
      streamName:data.streamName,
    }
    this.service.putStream(this.streamCode,this.editForm).subscribe(
      (res:any)=>{
        if(res){
          this.router.navigate(['/Admin/streams']);
          this.toastr.success(' Success!','Update successfully.');
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

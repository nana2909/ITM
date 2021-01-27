import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../../shared/admin.service';


@Component({
  selector: 'app-streamadd',
  templateUrl: './streamadd.component.html',
  styleUrls: ['./streamadd.component.css']
})
export class StreamaddComponent implements OnInit {

  constructor(
    public fb:FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    public service : AdminService,
    ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.info(this.service.StreamForm.value)
    this.service.addStream(this.service.StreamForm.value).subscribe(
      (res:any)=>{
        this.router.navigateByUrl('/Admin/streams');
        this.toastr.success('Success','Add new Stream.');
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

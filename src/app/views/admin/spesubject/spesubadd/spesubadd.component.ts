import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../../../shared/admin.service';

@Component({
  selector: 'app-spesubadd',
  templateUrl: './spesubadd.component.html',
  styleUrls: ['./spesubadd.component.css']
})
export class SpesubaddComponent implements OnInit {

  Fieldlist: any;
  constructor(
    public fb:FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    public service : AdminService,
  ) { }

  ngOnInit(): void {
    this.service.getFieldList().subscribe(
      (data:any)=>{
        this.Fieldlist=data;
      }
    )};
    onSubmit(){
      this.service.addSpeSub(this.service.SpeSubForm.value).subscribe(
        (res:any)=>{
          this.router.navigateByUrl('/Admin/spesubject');
          this.toastr.success('Success','Added new Subject.');
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

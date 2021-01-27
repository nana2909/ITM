import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../../shared/admin.service';


@Component({
  selector: 'app-opsub-add',
  templateUrl: './opsub-add.component.html',
  styleUrls: ['./opsub-add.component.css']
})
export class OpsubAddComponent implements OnInit {


  constructor(
    public fb:FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    public service : AdminService,
    ) { }

  ngOnInit(): void {

  }
  onSubmit(){
    console.info(this.service.OpSubForm.value)
    this.service.addOpSub(this.service.OpSubForm.value).subscribe(
      (res:any)=>{
        this.router.navigateByUrl('/Admin/opsubject');
        this.toastr.success('Success','Add new Subject.');
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

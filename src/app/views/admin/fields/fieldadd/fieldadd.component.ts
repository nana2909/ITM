import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../../../shared/admin.service';

@Component({
  selector: 'app-fieldadd',
  templateUrl: './fieldadd.component.html',
  styleUrls: ['./fieldadd.component.css']
})
export class FieldaddComponent implements OnInit {


  Streamlist: any;
  constructor(
    public fb:FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    public service : AdminService,
  ) { }

  ngOnInit(): void {
    this.service.getStreamList().subscribe(
      (data:any)=>{
        this.Streamlist=data;
      }
    )};
    onSubmit(){
      this.service.addField(this.service.FieldForm.value).subscribe(
        (res:any)=>{
          this.router.navigateByUrl('/Admin/fields');
          this.toastr.success('Success','Added new Field.');
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

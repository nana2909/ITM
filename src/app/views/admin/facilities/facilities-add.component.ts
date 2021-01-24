import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../../shared/admin.service';

@Component({
  selector: 'app-facilities-add',
  templateUrl: './facilities-add.component.html',
  styleUrls: ['./facilities-add.component.css']
})
export class FacilitiesAddComponent implements OnInit {

  constructor(
    public fb:FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private service : AdminService,
  ) { }
  
  ngOnInit(): void {
  }
  onSubmit(){
    this.service.addFacilities(this.service.facilitiesForm.value).subscribe(
      (res:any)=>{
        this.router.navigateByUrl('/Admin/Facilities');
        this.toastr.success('Success','Added new Facility.');  
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

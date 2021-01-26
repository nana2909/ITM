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
        if(res.failed){
          this.toastr.error('Something is wrong','Add failed.');
        } else {
          this.service.facilitiesForm.reset();
          this.router.navigate(['/Admin/facilities']);
          this.toastr.success('Added new Facility.','Success');
          };
        } , (err)=>{
          this.toastr.error('Something is wrong, check ID!','Add failed.');  
        }  
    )
  }
}

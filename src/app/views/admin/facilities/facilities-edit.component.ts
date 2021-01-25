import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../../shared/admin.service';

@Component({
  selector: 'app-facilities-edit',
  templateUrl: './facilities-edit.component.html',
  styleUrls: ['./facilities-edit.component.css']
})
export class FacilitiesEditComponent implements OnInit {
  ID:string;
  facilitiesForm=new FormGroup({});
  constructor(
    public fb:FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private service : AdminService,
    private currentRoute:ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.facilitiesForm=this.fb.group({
      FacCode:[null,Validators.required],
      FacName:[null,Validators.required],
      isActive:[null,Validators.required],
      imgUrl:''
    })
    this.ID=this.currentRoute.snapshot.paramMap.get('id');
    this.service.getFacility(this.ID).subscribe(
      (res:any)=>{
        console.log(res);
        this.facilitiesForm.setValue({
          FacCode:res.facCode,
          FacName:res.facName,
          isActive:res.isActive,
          imgUrl:''
      });
      }
    ); 
  }
  onSubmit(){
   this.service.putFacility(this.ID,this.facilitiesForm.value).subscribe(
     (res:any)=>{     
       if(res){            
         this.router.navigateByUrl('/Admin/facilities');
         this.toastr.success(' Success!','Update Facility successfully.');
       } else {
           this.toastr.error("Update" ,'Update failed!');
         };
       }    
   )
  }
 

}

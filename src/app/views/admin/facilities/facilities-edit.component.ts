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
  editForm:any;
  Img:any;
  public responseUpload: {dbPath: ''};
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
      imgUrl:[null]
    })
    this.ID=this.currentRoute.snapshot.paramMap.get('id');
    this.service.getFacility(this.ID).subscribe(
      (res:any)=>{
        this.facilitiesForm.setValue({
          FacCode:res.facCode,
          FacName:res.facName,
          isActive:res.isActive,
          imgUrl:res.imgUrl
      });
      this.Img=this.facilitiesForm.get('imgUrl').value;
      console.log(this.Img);
      console.log(this.facilitiesForm);
    }
    );
    
    
  }
  public uploadFinished = (event) => {
    this.responseUpload = event;
  }
  public createImgPath = (serverPath: string) => {
    return `http://localhost:51373/${serverPath}`;
  }
  onSubmit(data){
    if (this.responseUpload == undefined ) {
      this.editForm={
        FacCode:data.FacCode,
        FacName:data.FacName,
        isActive:data.isActive,
        ImgUrl:data.imgUrl
      }
    }
    else{
      console.log(this.responseUpload.dbPath);
      this.editForm={
        FacCode:data.FacCode,
        FacName:data.FacName,
        isActive:data.isActive,
        ImgUrl: this.responseUpload.dbPath,
      }
    }
   this.service.putFacility(this.ID,this.editForm).subscribe(
     (res:any)=>{     
       if(res){            
         this.router.navigate(['/Admin/facilities']);
         this.toastr.success('Update Facility successfully.',' Success!');
       } else {
           this.toastr.error( 'Update failed!','Update');
         };
       }    
   )
  }
 

}

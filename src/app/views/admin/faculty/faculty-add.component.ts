import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../../shared/admin.service';

@Component({
  selector: 'app-faculty-add',
  templateUrl: './faculty-add.component.html',
  styleUrls: ['./faculty-add.component.css']
})
export class FacultyAddComponent implements OnInit {
  constructor(
    public fb:FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private service : AdminService,
  ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.service.addFaculty(this.service.facultyForm.value).subscribe(
      (res:any)=>{
        this.router.navigateByUrl('/Admin/Faculty');
        this.toastr.success('Success','Added new Faculty.');

        
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

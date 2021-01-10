import { ToastrService } from 'ngx-toastr';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, NgForm, Validators, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router,  } from '@angular/router';
import { AdminService } from '../../../shared/admin.service';
@Component({
  selector: 'app-edit-student-account',
  templateUrl: './edit-student-account.component.html',
  styleUrls: ['./edit-student-account.component.css']
})
export class EditStudentAccountComponent implements OnInit {
  editStudentForm=new FormGroup({
  });
  constructor(
    public fb:FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private service : AdminService,
    private currentRoute:ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef:MatDialogRef<EditStudentAccountComponent>
  ) { }

  ngOnInit(){
    this.editStudentForm = this.fb.group({
      'userName': [''],
      'FullName' :[null,Validators.required],
      'Email':[null,[Validators.email,Validators.required]]
     });
      this.service.getUserByUserName(this.data.userName).subscribe(model => {
      console.log(model);
      this.editStudentForm.setValue({
        userName:this.data.userName,
        FullName:model.fullName,
        Email:model.email
      });
     });
  }
  onSubmit(){
    this.currentRoute.params.subscribe(
      params => {
        this.service.EditUser(this.editStudentForm.value,this.data.userName).subscribe(
          (res:any)=>{     
            if(res.succeeded){
              
              this.dialogRef.close();
              this.router.navigateByUrl('/Admin/*/studentAccount');
              this.toastr.success(' Success!','Update user successful.');
              location.reload();
            } else {
              res.errors.forEach(element => {
                this.toastr.error(element.code ,'Update failed!');
              });
            }
          }, (err) => {
            console.log(err);
          }
        )
      }
    ) 
  }
}







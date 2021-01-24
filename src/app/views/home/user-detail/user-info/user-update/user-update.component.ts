import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../../../shared/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  userUpdateForm=new FormGroup({
  });
  constructor(
    public fb:FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private service : UserService,
    private currentRoute:ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef:MatDialogRef<UserUpdateComponent>
  ) { }

  ngOnInit(): void {
    this.userUpdateForm = this.fb.group({
      'userName': [''],
      'FullName' :[null,Validators.required],
      'Email':[null,[Validators.email,Validators.required]]
     })
     this.service.getUser().subscribe(
      (res :any) => {
        this.userUpdateForm.setValue({
          userName:res.userName,
          FullName:res.fullName,
          Email:res.email
        });
      });
  }

  onSubmit(){
    this.currentRoute.params.subscribe(
      params => {
        this.service.updateUser(this.userUpdateForm.value).subscribe(
          (res:any)=>{     
            if(res.succeeded){            
              this.dialogRef.close();
              this.router.navigateByUrl('/home/UserInformation');
              this.toastr.success(' Success!','Update your information successfully.');
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

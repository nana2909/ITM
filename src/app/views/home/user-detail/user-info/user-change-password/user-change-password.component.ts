import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../../../shared/user.service';

@Component({
  selector: 'app-user-change-password',
  templateUrl: './user-change-password.component.html',
  styleUrls: ['./user-change-password.component.css']
})
export class UserChangePasswordComponent implements OnInit {
  userDetail:any;
  userId:any;
  CurrentPassword:any;
  NewPassword:any;
  ConfirmPassword:any;
  constructor(  
    public fb:FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private service : UserService,
    private currentRoute:ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef:MatDialogRef<UserChangePasswordComponent>

  ) { }

  ngOnInit(): void {
    this.userDetail ={
      userId:'',
      userName:'',
      email:'',
      fullName:'',
      password:''
    }
    this.service.getUser().subscribe(
      (res:any)=>{
        this.userDetail=res;     
    })
  }
 
  onSubmit(){
    // this.NewPW = this.service.changePwForm.value.Passwords;
    // if (this.OldPW==this.NewPW){
      // this.toastr.error("New Password must not match your old Password","Error");
    // }
    // else{
      var body={
        CurrentPassword:this.service.changePwForm.value.CurrentPassword,
        Password:this.service.changePwForm.value.Passwords.Password,
        ConfirmPassword:this.service.changePwForm.value.Passwords.ConfirmPassword,
      }
      this.currentRoute.params.subscribe(
        params=>{
          this.service.changePassword(this.userDetail.id,body).subscribe(
            (res:any)=>{
              if(res.succeeded){   
                this.toastr.success('Your password has been set!','Update success!');
                this.dialogRef.close();
                this.router.navigateByUrl('/home/UserInformation');
                location.reload();
              } else {
                res.errors.forEach(element => {
                  this.toastr.error(element.code ,'Update failed!');
                });
              }
            },(err)=>{
              console.log(err);
            }
          )
        }
      )
    }
  }

//}

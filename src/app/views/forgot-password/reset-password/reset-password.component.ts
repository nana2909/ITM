import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../shared/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  getToken : string;
  getEmail : string;
  constructor( private router: Router,
    private route: ActivatedRoute,
    private service: UserService,
    private fb: FormBuilder,
    private toastr:ToastrService )
    { }

  ngOnInit(): void { 
    var urlParams = new URLSearchParams(window.location.search);
    this.getToken= urlParams.get("token");
    this.getEmail= urlParams.get("email");
    this.service.resetModel.setValue({
      Token : this.getToken,
      Email : this.getEmail,
      Passwords: {
        Password:"",
        ConfirmPassword:""
      }
    });
}  
  onSubmit(){
     var body = {
        email : this.service.resetModel.value.Email,
        token : this.service.resetModel.value.Token.split(' ').join('+'),
        password : this.service.resetModel.value.Passwords.Password,
      }

      this.service.resetPassword(body).subscribe(
      (res:any)=>{
         console.log(res);
       // this.resetModel.reset();
        this.toastr.success('New Password created!','Reset successful.');
        this.router.navigateByUrl('/login');
      }
    )
  }


}

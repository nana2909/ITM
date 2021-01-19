import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, Validators, FormGroup,FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private fb:FormBuilder, private http:HttpClient,private cookieService:CookieService) { }
  readonly BaseURI='http://localhost:51373/api';

//Register
// Create Register Model
  userModel = this.fb.group({
    UserName : ['',Validators.required],
    Email : [null,[Validators.required,Validators.email]],
    FullName : [''],
    Passwords:this.fb.group({
      Password : ['',[Validators.required,Validators.minLength(4)]],
      ConfirmPassword : ['',Validators.required],
    },{ validator: this.comparePasswords })
  });
  //check Password Mismatch
  comparePasswords(fb:FormGroup){
    let confirmPwdMismatch= fb.get('ConfirmPassword');
        //confirmPwdMismatch.errors = {passwordMismatch:true}
    if (confirmPwdMismatch?.errors == null || 'passwordMismatch' in confirmPwdMismatch?.errors){
      if(fb.get('Password')?.value != confirmPwdMismatch?.value) 
        confirmPwdMismatch?.setErrors({ passwordMismatch:true });
      else
        confirmPwdMismatch?.setErrors(null);
    }
  }
  register(){
    var body = {
      UserName:this.userModel.value.UserName,
      Email:this.userModel.value.Email,
      FullName:this.userModel.value.FullName,
      Password:this.userModel.value.Passwords.Password,
    };
    return this.http.post(this.BaseURI+'/User/Register',body);
  }

//Login 
  // Method Login
  loginForm = this.fb.group({
    userName: ['', Validators.required],
    passWord: ['', Validators.required]
  });
    login(){
      var body = {
        userName:this.loginForm.value.userName,
        passWord: this.loginForm.value.passWord,
      }
    return this.http.post(this.BaseURI+'/User/Login',body);
  }

 //Check Admin Role
  roleMatch(allowedRoles: any[]): boolean {
    var isMatch = false;
    var showToken = localStorage.getItem('token')?.split('.')[1] ;
    if (showToken!=null){
      var payLoad = JSON.parse(window.atob(showToken));
      var userRole = payLoad.role;
      allowedRoles.forEach(element  => {
          if (userRole == element ) {
            isMatch = true;
            return false;
          }
          else return true; 
        });
    }
    return isMatch;
  }
  
  //Send Email Forgot Password  
  sendForgotPasswordEmail(body) {
    return this.http.post(this.BaseURI + '/User/ForgotPassword?sendEmail='+body.Email,{}).pipe(
      map((result) => { return result},
          (error) => { return error;}
        )
      );
  }
  // dataResetPassword(){
    // return this.http.get(this.BaseURI+'/User/ResetPassword');
  // }
  resetModel = this.fb.group({
    Token:[''],
    Email:[''],
    Passwords:this.fb.group({
      Password : ['',[Validators.required,Validators.minLength(4)]],
      ConfirmPassword : ['',Validators.required],
    },{ validator: this.comparePasswords })
  });
  resetPassword(body){
    
    
    
    
    
    return this.http.post(this.BaseURI+'/User/ResetPassword',body);
  }


//User
  getUserProfile(){
    return this.http.get(this.BaseURI+'/UserDetail');
  }
}

  
  
  
  
  
  
  
  
  
  

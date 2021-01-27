import { EventEmitter, Injectable, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, Validators, FormGroup,FormControl } from '@angular/forms';
import { HttpClient, } from "@angular/common/http";
import { map} from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private activityDetails$: Observable<any>;
  public loggedIn:BehaviorSubject<boolean>= new BehaviorSubject<boolean>(false);
  get IsLoggedIn(){
    return this.loggedIn.asObservable();
  }
;

  @Output() public onUploadFinished = new EventEmitter();
  constructor(
    private router:Router,
    private fb:FormBuilder,
    private cookie:CookieService, 
    private http:HttpClient,
    private cookieService:CookieService) {}
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

//Log Out
logout(){
  this.loggedIn.next(false);
  localStorage.removeItem('token');
  localStorage.removeItem('isSessionActive');
  this.router.navigate(['/HomePage']);
}
//Update Avatar
updateAvatar(userName:string,body){
  return this.http.put(this.BaseURI+'/UserDetail/UpdateAvatar/'+userName,body);
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

//GetUserAdmission
getUserAdmission(){
  return this.http.get(this.BaseURI+'/UserDetail/GetUserAdmission');

}
    //Admission
  // Create Admission Model
  admissionModel = this.fb.group({
    AdmissionID : ['Create'],
    StudentName : ['',Validators.required],
    StudentEmail : [null,[Validators.required,Validators.email]],
    FatherName : ['',Validators.required],
    MotherName : ['',Validators.required],
    DoB : ['',Validators.required],
    Gender: ['',Validators.required],
    ResidentialAddress: ['',Validators.required],
    PermanentAddress: ['',Validators.required],
    StreamCode: ['',Validators.required],
    FieldCode: ['',Validators.required],
    SportsDetails: [''],
    StatusID: [0,Validators.required],
    ExUniversity: ['',Validators.required],
    ExEnrollmentNumber: ['',Validators.required],
    ExCenter: ['',Validators.required],
    ExStream: ['',Validators.required],
    ExField: ['',Validators.required],
    ExMarkSecured: ['',Validators.required],
    OutOfDate: ['',Validators.required],
    ClassObtained: ['',Validators.required],
    SpecializedSubjectID: ['none',Validators.required],
    OptionalSubjectID: ['none',Validators.required],
});

submitAdmision() {
this.admissionModel.value.DoB = moment(this.admissionModel.value.DoB).format('YYYY-MM-DDTHH:mm');
this.admissionModel.value.OutOfDate = moment(this.admissionModel.value.OutOfDate).format('YYYY-MM-DDTHH:mm');
console.log(this.admissionModel.value);

return this.http.post(this.BaseURI + '/Admission/SubmitAdmission', this.admissionModel.value);
}

//Register from -- after admissionid is approve
registerForm = this.fb.group({
  AdmissionID : [''],
  StudentName: [''],
  StudentEmail: [''],
  StreamName: [''],
  FieldName: [''],
  StreamCode: [''],
  FieldCode: [''],
  SpecializedSubjectID: ['', [Validators.required]],
  OptionalSubjectID: ['', [Validators.required]],
  Courses: ['', [Validators.required]],
})

submitRegisForm(body){
  return this.http.post(this.BaseURI + '/UserDetail/Register',body);
}

//Post Admission to Account User
putUserAdmission(body){
  return this.http.put(this.BaseURI+'/UserDetail/PutUserAdmission/'+body.AdmissionID,body);
}

//Update UserInfo
getUser(){
  return this.http.get(this.BaseURI+'/UserDetail/GetUser');
}
updateUser(model){
  return this.http.put(this.BaseURI+'/UserDetail/UpdateUser',model);
}

changePwForm = this.fb.group({
  CurrentPassword:['',Validators.required],
  Passwords:this.fb.group({
    Password : ['',[Validators.required,Validators.minLength(4)]],
    ConfirmPassword : ['',Validators.required],
  },{ validator: this.comparePasswords })
});
changePassword(id:string,body){
  return this.http.post(this.BaseURI+'/UserDetail/ChangePassword/'+id,body);
}

}
  
  
  
  
  
  
  
  
  
  


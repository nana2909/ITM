import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 
  loginModel={
    UserName:'',
    Password:''
  }
    constructor(public service:UserService,private router:Router,private toastr:ToastrService) { }
  
    ngOnInit() {
    localStorage.removeItem('token');
      if (localStorage.getItem('token')!=null)
        this.router.navigateByUrl('/home');
    }
  
    onSubmit(){
      this.service.login().subscribe(
        (res:any)=>{
          localStorage.setItem('token',res.token);
          this.router.navigateByUrl('/Admin');
        },
        err=>{
          if(err.status == 400)
            this.toastr.error('Incorrect username or password.','Login failed.');
          else
            console.log(err);
        }
      );
    }
  }
  

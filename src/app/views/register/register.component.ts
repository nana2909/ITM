import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public service:UserService,private toastr:ToastrService) {}
  
  ngOnInit() {
    this.service.userModel.reset();
  }
  onSubmit(){
    this.service.register().subscribe(
      (res:any)=>{
        if(res.succeeded){
          this.service.userModel.reset();
          this.toastr.success('New User created!','Registration successful.');
        } else {
          res.errors.forEach((element: { code: any; }) => {
              switch (element.code) {
                case 'DuplicateUserName':
                  this.toastr.error('Username is already taken','Registration failed!');
                  break;
                default:
                  this.toastr.error(element.code ,'Registration failed!');
                  break;
              }
            });
        }
      },
      err=>{
        console.log(err);
      }
    )
  }

}

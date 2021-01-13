import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery';
import { UserService } from '../../shared/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  insertForm=new FormGroup({
    Email:new FormControl()
  });
  constructor(private services: UserService,private currentRoute:ActivatedRoute,private fb: FormBuilder, private toastr: ToastrService) { }

  ngOnInit(): void {
   
    this.insertForm = this.fb.group({
      'Email':[null,[Validators.email,Validators.required]]
   });
  }
  onSubmit() {
    var body = this.insertForm.value;
    this.currentRoute.params.subscribe(
      params => {
        this.services.sendForgotPasswordEmail(body).subscribe(
          (res) => {                        
            $('#forgotPassCard').html('');
            $('#forgotPassCard').append(
                "<div class='alert alert-success show'>" +
                    '<strong>Success!</strong> Please check your email for password reset instructions.' +
                    '</div>'
            );
          },
          (error) => {
              this.toastr.error('An error occured while processing this request.', '', { positionClass: 'toast-top-right' });
          }
      );
      }
    ) 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}

}

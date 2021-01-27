import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../../shared/user.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-admission',
  templateUrl: './user-admission.component.html',
  styleUrls: ['./user-admission.component.css']
})
export class UserAdmissionComponent implements OnInit {
  public userDetail : any;
  public userAdmission:any;
  getAdmissionForm=new FormGroup({
  });
  constructor(private router: Router,private service:UserService,
    private toast: ToastrService,
    public fb:FormBuilder,) { }
  p
  ngOnInit(): void {
    this.getAdmissionForm=this.fb.group({
      'Email':[''],
      'AdmissionID':[''],
    });
    this.userDetail ={
      email:'',
      admissionID:'',
    };
    this.userAdmission={
      admissionID: '',
      fieldCode:'',
      optionalSubjectID: '',
      specializedSubjectID: '',
      streamCode: '',
    };
    this.service.getUserProfile().subscribe(
      res =>{
        this.userDetail=res;
        if (this.userDetail.admissionID!=null){
          this.getAdmissionForm.setValue({
            'AdmissionID':this.userDetail.admissionID,
            'Email':this.userDetail.email,
          });
          this.service.getUserAdmission().subscribe(
            response => {
              this.userAdmission =response;
            },
            err => { 
              console.log(err);
            }
          )     
        }else{
          this.getAdmissionForm.setValue({
            'AdmissionID':null,
            'Email':this.userDetail.email,
          })
        }
      }
    );
  }
  onSubmit(){
    this.service.putUserAdmission(this.getAdmissionForm.value).subscribe(
      (res:any)=>{
        if (res.succeeded){
          this.toast.success('Add Admission successfully','Success!');
          location.reload();
          }
        },
        err=>{
          if(err.status == 400)
            this.toast.error('Invalid Admission','Admission failed.');
          else
            console.log(err);
            this.toast.error('Something is wrong','Admission failed.'); 
        }
      )
    }

}

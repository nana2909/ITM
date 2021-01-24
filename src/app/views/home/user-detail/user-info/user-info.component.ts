import { UserUpdateComponent } from './user-update/user-update.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../../shared/user.service';
import { UserChangePasswordComponent } from './user-change-password/user-change-password.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  userDetail: any;
  userModel:any;
  userAdmission: any;
  public responseUpload: {dbPath: ''};
  constructor(private router: Router,
    private service:UserService,
    private toastr:ToastrService,
    private dialog: MatDialog,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.userDetail ={
      userName:'',
      email:'',
      fullName:'',
      imgUrl:'',
    }
    this.userAdmission={
      admissionID: '',
      classObtained: '',
      doB: '',
      exCenter: '',
      exEnrollmentNumber: '',
      exField: '',
      exMarkSecured: '',
      exStream: '',
      exUniversity: '',
      fatherName:'',
      fieldCode:'',
      gender:'',
      motherName:'',
      optionalSubjectID: '',
      outOfDate: '',
      permanentAddress: '',
      residentialAddress: '',
      specializedSubjectID: '',
      sportsDetails:'',
      statusID: '',
      streamCode: '',
      studentEmail:'',
      studentName: '',
    }
    this.service.getUserAdmission().subscribe(
      response => {
        this.userAdmission =response;
      },
      err => { 
        console.log(err);
      }
    )
    
    this.service.getUserProfile().subscribe(
      res =>{
        this.userDetail=res;
      },
      err =>{
        console.log(err);
      },
    );
  }

  onUpdate( userName: any){
    const dialogUpdate= new MatDialogConfig();
    dialogUpdate.autoFocus=true;
    dialogUpdate.data = { userName};
    dialogUpdate.disableClose = false;
    dialogUpdate.width = "50%";
    this.dialog.open(UserUpdateComponent,dialogUpdate);
  }
  onChangePW(userName: any){
    const dialogChangePW= new MatDialogConfig();
    dialogChangePW.autoFocus=true;
    dialogChangePW.data = {userName};
    dialogChangePW.disableClose = false;
    dialogChangePW.width = "50%";
    this.dialog.open(UserChangePasswordComponent,dialogChangePW);
  }

  public uploadFinished = (event) => {
    this.responseUpload = event;
  }
  public onCreate = () => {
    this.userModel = {
      ImgUrl: this.responseUpload.dbPath
    }

    this.service.updateAvatar(this.userDetail.userName,this.userModel)
    .subscribe(res => {
        if(res){   
          this.toastr.success('Your Avatar has been set!','Update success!');
          location.reload();
        } else {
            this.toastr.error("" ,'Update failed!');
          };
      },(err)=>{
        console.log(err);
      }
    )
  }
  public createImgPath = (serverPath: string) => {
    return `http://localhost:51373/${serverPath}`;
  }
  

}

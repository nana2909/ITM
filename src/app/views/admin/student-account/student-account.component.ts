
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/user.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditStudentAccountComponent} from './edit-student-account.component';


@Component({
  selector: 'app-student-account',
  templateUrl: './student-account.component.html',
  // styleUrls: ['./student-account.component.css']
})
export class StudentAccountComponent implements OnInit {
  
  userDetails: any;
  constructor(
    private router: Router,
    private service:UserService, 
    private toastr:ToastrService,
    private dialog:MatDialog) { }

  ngOnInit() {
  this.service.getUserList().then(
    res =>{
      this.userDetails=res;
    },
    err =>{
      console.log(err);
    },
  );
  }
  openForEdit(userName:string) {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.disableClose = false;
  dialogConfig.width = "50%";
  dialogConfig.data = { userName };
  this.dialog.open(EditStudentAccountComponent, dialogConfig);
  }
  
}


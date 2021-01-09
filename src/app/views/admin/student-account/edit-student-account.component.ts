import { UserService } from './../../../shared/user.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-edit-student-account',
  templateUrl: './edit-student-account.component.html',
  styleUrls: ['./edit-student-account.component.css']
})
export class EditStudentAccountComponent implements OnInit {

formData = {
  UserName:'',
  FullName:'',
  Email:''
}
  constructor(
    private service : UserService,
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef:MatDialogRef<EditStudentAccountComponent>
  ) { }

  ngOnInit(){
    this.formData = {
      UserName : this.data.userName,
      FullName : this.data.FullName,
      Email :this.data.Email
    }
  }

}


import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditStudentAccountComponent} from './edit-student-account.component';
import { AdminService } from '../../../shared/admin.service';


@Component({
  selector: 'app-student-account',
  templateUrl: './student-account.component.html',
  // styleUrls: ['./student-account.component.css']
})
export class StudentAccountComponent implements OnInit {
  
  userDetails: any;
  constructor(
    private router: Router,
    private service:AdminService, 
    private toastr:ToastrService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.refreshList();
  }
  openForEdit(userName:string) {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.disableClose = false;
  dialogConfig.width = "50%";
  dialogConfig.data = { userName };
  this.dialog.open(EditStudentAccountComponent, dialogConfig);
  }

  refreshList(){
    this.service.getUserList().then(res=>this.userDetails= res);
  }
  onDelete(userName:string){
    if (confirm('Are you sure to delete this account?')){
      this.service.DeleteUser(userName).then(res=>{
        this.refreshList();
        this.toastr.warning("Deleted Successfully","Student Account");
      })
    }
  }
  
}


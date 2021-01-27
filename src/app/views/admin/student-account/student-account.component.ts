
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditStudentAccountComponent} from './edit-student-account.component';
import { AdminService } from '../../../shared/admin.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-student-account',
  templateUrl: './student-account.component.html',
  // styleUrls: ['./student-account.component.css']
})
export class StudentAccountComponent implements OnInit {
  title='datatables';
  dtOptions:DataTables.Settings={};
  dtTrigger: Subject<any> = new Subject();
  userDetails: any;
  constructor(
    private router: Router,
    private service:AdminService, 
    private toastr:ToastrService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.dtOptions = {
      paging:true,
      searching:true,
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
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
    this.service.getUserList().then(res=>{this.userDetails= res;this.dtTrigger.next();});
  }
  onDelete(userName:string){
    if (confirm('Are you sure to delete this account? You can undo after delete!')){
      this.service.DeleteUser(userName).then(res=>{
        this.service.getUserList().then(res=>{this.userDetails= res});
        this.toastr.success("Deleted Successfully","Student Account");
      })
    }
  }
  
}


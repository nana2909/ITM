import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { AdminService } from '../../../shared/admin.service';
import { FeedbackCommentComponent } from './feedback-comment/feedback-comment.component';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  dtOptions:DataTables.Settings={};
  dtTrigger: Subject<any> = new Subject();
  List:any;


  constructor(
    private router: Router,
    private service:AdminService, 
    private toastr:ToastrService,
    private dialog: MatDialog) { }


  ngOnInit(): void {
    this.dtOptions = {
      paging:true,
      searching:true,
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    this.refreshList();
  }

  refreshList(){
    this.service.getFeedbackList().subscribe(res =>{
      console.info(res);
      this.List = res;this.dtTrigger.next();
    });
  }

  ReturnFeedback(facultyID:string){
      
  }

  //Open PopUp Feedback Comment
  openForDetails(data:any){
    console.warn(data);
    const diaglogConfig = new MatDialogConfig();
    diaglogConfig.autoFocus = true;
    diaglogConfig.disableClose = false;
    diaglogConfig.width = "50%";
    diaglogConfig.maxHeight = "78vh";
    diaglogConfig.data = { data };
    this.dialog.open(FeedbackCommentComponent, diaglogConfig);
  }
}

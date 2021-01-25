import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { AdminService } from '../../../shared/admin.service';

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
    this.service.getFeedbackList().subscribe(res =>{this.List = res;this.dtTrigger.next();});
  }

  ReturnFeedback(facultyID:string){
      
  }
}

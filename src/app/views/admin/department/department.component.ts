import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { AdminService } from '../../../shared/admin.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
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
    this.service.getDepartmentList().subscribe(res =>{this.List = res;this.dtTrigger.next();});
  }

}

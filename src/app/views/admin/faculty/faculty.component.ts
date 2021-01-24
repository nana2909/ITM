import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery';
import { AdminService } from '../../../shared/admin.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
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
    this.service.getFacultyList().subscribe(res =>{this.List = res;this.dtTrigger.next();});
  }
  onDelete(facultyID:string){
    if (confirm('Are you sure to delete this Faculty?')){
      this.service.deleteFaculty(facultyID).subscribe(res=>{
        this.refreshList();
        location.reload();
        this.toastr.warning("Deleted Successfully","Delete Faculty");
      })
    }
  }

}

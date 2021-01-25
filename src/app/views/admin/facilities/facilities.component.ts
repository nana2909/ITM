import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { AdminService } from '../../../shared/admin.service';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnInit {
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
    this.service.getFacilitiesList().subscribe(res =>{this.List = res;this.dtTrigger.next();});
  }
  onDelete(facilitiesID:string){
    if (confirm('Are you sure to delete this Facility?')){
      this.service.deleteFaculty(facilitiesID).subscribe(res=>{
        this.refreshList();
        location.reload();
        this.toastr.warning("Deleted Successfully","Delete Facility");
      })
    }
  }

}

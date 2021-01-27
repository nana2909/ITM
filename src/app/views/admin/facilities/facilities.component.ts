import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { error } from 'jquery';
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
      pageLength: 10,
      processing: true,
      order :[ 0, "desc" ],
    };
    this.refreshList();
  }
  refreshList(){
    this.service.getFacilitiesList().subscribe(res =>{this.List = res;this.dtTrigger.next();});
  }
  onDelete(facilitiesID:string){
    if (confirm('Are you sure to delete this facility?You can deactive if using in future!')){
      this.service.deleteFacility(facilitiesID).subscribe(
        (res:any)=>{     
          if(res!=null){          
            this.toastr.error('Something is wrong','Delete failed.');                
          } else {
              this.service.getFacilitiesList().subscribe(res =>{this.List = res;});
              this.toastr.warning("Deleted Successfully","Delete Facility");
          };
      })
    }
  }

}

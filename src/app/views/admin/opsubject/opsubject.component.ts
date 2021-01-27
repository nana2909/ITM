import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../../shared/admin.service';

@Component({
  selector: 'app-opsubject',
  templateUrl: './opsubject.component.html',
  styleUrls: ['./opsubject.component.css']
})
export class OpsubjectComponent implements OnInit {

  ListSub:any;
  constructor(private router: Router,
    private service:AdminService,
    private toastr:ToastrService,
    private dialog: MatDialog) {}


  ngOnInit(): void {

    this.refreshListSub();
  }
  refreshListSub(){
    this.service.getOpsubjectList().subscribe(res =>{this.ListSub = res;});
  }
  onDelete(subjectID:string){
    if (confirm('Are you sure to delete this Subject?')){
      this.service.DeleteOpSubs(subjectID).subscribe(res=>{
        this.refreshListSub();
        location.reload();
        this.toastr.warning("Deleted Successfully","Delete Subject");
      })
    }
  }
}

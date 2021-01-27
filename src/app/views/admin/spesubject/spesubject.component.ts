import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../../shared/admin.service';

@Component({
  selector: 'app-opsubject',
  templateUrl: './spesubject.component.html',
  styleUrls: ['./spesubject.component.css']
})
export class SpesubjectComponent implements OnInit {


  ListSpeSub:any;
  constructor(
    private router: Router,
    private service:AdminService,
    private toastr:ToastrService,
    private dialog: MatDialog) { }


  ngOnInit(): void {
    this.refreshSpeSubList();
  }
  refreshSpeSubList(){
    this.service.getSpesubjectList().subscribe(res =>{this.ListSpeSub = res;});
  }
  onDelete(subjectID:string){
    if (confirm('Are you sure to delete this subject?')){
      this.service.DeleteSpeSubs(subjectID).subscribe(res=>{
        this.refreshSpeSubList();
        location.reload();
        this.toastr.warning("Deleted Successfully","Delete subject");
      })
    }
  }


}

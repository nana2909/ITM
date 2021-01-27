import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../../shared/admin.service';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.css']
})
export class StreamsComponent implements OnInit {

  StreamList:any;
  constructor(
    private router:Router,
    public service:AdminService,
    private toastr:ToastrService,
    private dialog: MatDialog)
    { }

  ngOnInit(): void {
    this.refrestlistStream();
  }
  refrestlistStream(){
    this.service.getStreamList().subscribe(res =>{this.StreamList = res;});
  }
  onDelete(StreamCode:string){
    if (confirm('Are you sure to delete this Stream?')){
      this.service.DeleteStream(StreamCode).subscribe(res=>{
        this.refrestlistStream();
        location.reload();
        this.toastr.warning("Deleted Successfully","Delete Stream");
      })
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../../shared/admin.service';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.css']
})
export class FieldsComponent implements OnInit {

  FieldsList:any;
  constructor(
    private router:Router,
    private service:AdminService,
    private toastr:ToastrService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.refrestlistField();
  }
  refrestlistField(){
    this.service.getFieldList().subscribe(res =>{this.FieldsList = res;});
  }
  onDelete(FieldCode:string){
    if (confirm('Are you sure to delete this Field ? You can undo after delete!')){
      this.service.DeleteField(FieldCode).subscribe(
        (res:any)=>{
          if(res!=null){
            this.toastr.error('Something is wrong','Delete failed.');
          } else {
              this.service.getFieldList().subscribe(res =>{this.FieldsList = res;});
              this.toastr.warning("Deleted Successfully");
          };
        }
      )
    }
  }
}


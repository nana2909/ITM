import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { AdminService } from '../../../shared/admin.service';
import { AdmissionDetailComponent } from './admission-detail/admission-detail.component';
import { DataTableDirective } from 'angular-datatables';

@Component({
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {
  
  dtOptions:DataTables.Settings={};
  dtTrigger: Subject<any> = new Subject();
  List:AdmissionSts[];
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  isDtInitialized:boolean = false;

  constructor(
    private service: AdminService,
    private toastr : ToastrService,
    private dialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.dtOptions = {
      paging:true,
      searching:true,
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
      scrollX: true
    };
    this.refreshList();
  }

  refreshList(){
    this.service.GetAllAdmission().subscribe(res =>{
      console.info(res);
      this.List = Object.values(res);
      if (this.isDtInitialized) {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.destroy();
            this.dtTrigger.next();
        });
    } else {
        this.isDtInitialized = true;
        this.dtTrigger.next();
    }
    });
  }

  //Accept button
  confirm(id: string){
    this.service.ConfirmAdmission({ StatusID: 1, AdmissionID: id }).subscribe(
      (res:any) => {
        this.toastr.success('Success!','Approve successful.');
        setTimeout(
          ()=>this.router.navigateByUrl('/Admin'),1000
        );
      },
      err => {
        this.refreshList();
        console.log(err);
      }
    )
  }

  //Reject button
  reject(id: string){
    this.service.ConfirmAdmission({ StatusID: 0, AdmissionID: id }).subscribe(
      (res:any) => {
        if (res.succeeded) {
          this.router.navigateByUrl('/Admin/*/admission');
          this.toastr.success(' Success!','Reject user successful.');
          location.reload();
        }else {
          res.errors.forEach(element => {
            this.toastr.error(element.code ,'Update failed!');
          });
        }
      },
      err => {
        console.log(err);
      }
    )
  }

  //Open PopUp Admission Details
  openForDetails(data:any){
    console.warn(data);
    const diaglogConfig = new MatDialogConfig();
    diaglogConfig.autoFocus = true;
    diaglogConfig.disableClose = false;
    diaglogConfig.width = "50%";
    diaglogConfig.maxHeight = "78vh";
    diaglogConfig.data = { data };
    this.dialog.open(AdmissionDetailComponent, diaglogConfig);
  }
}

export interface AdmissionSts {
  AdmissionID: string;
  StatusID : number;
}

import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../../shared/admin.service';
import { AdmissionDetailComponent } from './admission-detail/admission-detail.component';

@Component({
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {

  constructor(
    private service: AdminService,
    private toastr : ToastrService,
    private dialog: MatDialog,
    private router: Router,
  ) { }

  Admissions : AdmissionSts[];

  ngOnInit(): void {
    this.getAllAdmissionToConfirm();
  }

  getAllAdmissionToConfirm(){
    this.service.GetAllAdmission().subscribe(
      res => {
        this.Admissions = Object.values(res);
        console.log(this.Admissions);
      },
      err => {
        console.log(err)
      }
    )
  }

  //Accept button
  confirm(id: string){
    this.service.ConfirmAdmission({ StatusID: 1, AdmissionID: id }).subscribe(
      (res:any) => {
        if (res.succeeded) {
          // this.getAllAdmissionToConfirm();
          this.router.navigateByUrl('/Admin/*/admission');
          this.toastr.success(' Success!','Approve user successful.');
          location.reload();
        }else {
          this.getAllAdmissionToConfirm();
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

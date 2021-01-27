import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../../../shared/admin.service';


@Component({
  selector: 'app-courses-add',
  templateUrl: './courses-add.component.html',
  styleUrls: ['./courses-add.component.css']
})
export class CoursesAddComponent implements OnInit {

  StreamList:any;
  FieldList:any;
  constructor(
    public fb:FormBuilder,
    private router: Router,
    public service:AdminService,
    private toastr:ToastrService,
    private dialog: MatDialog) { }

  ngOnInit(): void {

    this.service.getFieldList().subscribe(
      (data:any)=>{
        this.FieldList=data;
      })
      this.service.getStreamList().subscribe(
        (data:any)=>{
          this.StreamList=data;
        }
      )};
      onSubmit(){
        this.service.addCourse(this.service.CourseForm.value).subscribe(
          (res:any)=>{
            this.router.navigateByUrl('/Admin/courses');
            this.toastr.success('Success','Added new Course.');
          },
          err=>{
            if(err.status == 400)
            this.toastr.error('Something is wrong','Add failed.');
            else
            console.log(err);
          }
        )
      }

}

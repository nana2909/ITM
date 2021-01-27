import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../../shared/admin.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  CoursesList:any;
  constructor(
    private router: Router,
    private service:AdminService,
    private toastr:ToastrService,
    private dialog: MatDialog) { }


  ngOnInit(): void {

      this.refreshListCourse();
  }

  refreshListCourse(){
    this.service.getCoursesList().subscribe(res =>{this.CoursesList = res;});
  }
  onDelete(CourseCode:string){
    if (confirm('Are you sure to delete this Course ? You can undo after delete!')){
      this.service.DeleteCourses(CourseCode).subscribe(
        (res:any)=>{
          if(res!=null){
            this.toastr.error('Something is wrong','Delete failed.');
          } else {
              this.service.getCoursesList().subscribe(res =>{this.CoursesList = res;});
              this.toastr.warning("Deleted Successfully");
          };
        }
      )
    }
  }
}

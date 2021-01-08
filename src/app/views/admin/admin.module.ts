import { SubjectsComponent } from './subjects/subjects.component';
import { StudentAccountComponent } from './student-account/student-account.component';
import { StreamsComponent } from './streams/streams.component';
import { FieldsComponent } from './fields/fields.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FacultyComponent } from './faculty/faculty.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { DepartmentComponent } from './department/department.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdmissionComponent } from './admission/admission.component';
// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


// Components Routing
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
  ],
  declarations: [
    AdmissionComponent,
    ContactUsComponent,
    CoursesComponent,
    DepartmentComponent,
    FacilitiesComponent,
    FacultyComponent,
    FeedbackComponent,
    FieldsComponent,
    StreamsComponent,
    StudentAccountComponent,
    SubjectsComponent,
  ]
})
export class AdminModule { }

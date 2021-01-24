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
import { EditStudentAccountComponent } from './student-account/edit-student-account.component';

// Angular
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatDialogModule} from '@angular/material/dialog';


// Components Routing
import { AdminRoutingModule } from './admin-routing.module';
import { FacultyAddComponent } from './faculty/faculty-add.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
    DataTablesModule,
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
    EditStudentAccountComponent,
    FacultyAddComponent,
    
  ],
entryComponents:[EditStudentAccountComponent],
})
export class AdminModule { }

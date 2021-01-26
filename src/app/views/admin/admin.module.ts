import { UploadComponent } from './../upload/upload.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { StudentAccountComponent } from './student-account/student-account.component';
import { EditStudentAccountComponent } from './student-account/edit-student-account.component';
import { StreamsComponent } from './streams/streams.component';
import { FieldsComponent } from './fields/fields.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdmissionComponent } from './admission/admission.component';
import { FacultyComponent } from './faculty/faculty.component';
import { FacultyAddComponent } from './faculty/faculty-add.component';
import { FacultyEditComponent } from './faculty/faculty-edit.component';
import { AdmissionDetailComponent } from './admission/admission-detail/admission-detail.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { FacilitiesAddComponent } from './facilities/facilities-add.component';
import { FacilitiesEditComponent } from './facilities/facilities-edit.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentAddComponent } from './department/department-add.component';
import { DepartmentEditComponent } from './department/department-edit.component';

// Angular
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatDialogModule} from '@angular/material/dialog';
import { DataTablesModule } from 'angular-datatables';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';


// Components Routing
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
    DataTablesModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule  
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
    AdmissionDetailComponent,
    FacilitiesAddComponent,
    FacilitiesEditComponent,
    FacultyEditComponent,
    DepartmentAddComponent,
    DepartmentEditComponent,
    UploadComponent,
  ],
  providers: [DatePipe],
entryComponents:[EditStudentAccountComponent,AdmissionDetailComponent],
})
export class AdminModule { }

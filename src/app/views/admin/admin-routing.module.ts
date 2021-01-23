import { SubjectsComponent } from './subjects/subjects.component';
import { StudentAccountComponent } from './student-account/student-account.component';
import { StreamsComponent } from './streams/streams.component';
import { FieldsComponent } from './fields/fields.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FacultyComponent } from './faculty/faculty.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DepartmentComponent } from './department/department.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmissionComponent } from './admission/admission.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Admin'
    },
    children: [
      {
        path: '',
        component: AdmissionComponent,
        data: {
          title: 'Admission'
        }
      },
      {
        path: 'admission',
        component: AdmissionComponent,
        data: {
          title: 'Admission'
        }
      },
      {
        path: 'department',
        component: DepartmentComponent,
        data: {
          title: 'Department'
        }
      },
      {
        path: 'contactUs',
        component: ContactUsComponent,
        data: {
          title: 'ContactUs'
        }
      },
      {
        path: 'course',
        component: CoursesComponent,
        data: {
          title: 'Course'
        }
      },
      {
        path: 'facilities',
        component: FacilitiesComponent,
        data: {
          title: 'Facilities'
        }
      },
      {
        path: 'faculty',
        component: FacultyComponent,
        data: {
          title: 'Faculty'
        }
      },
      {
        path: 'feedback',
        component: FeedbackComponent,
        data: {
          title: 'Feedback'
        }
      },
      {
        path: 'field',
        component: FieldsComponent,
        data: {
          title: 'Field'
        }
      },
      {
        path: 'stream',
        component: StreamsComponent,
        data: {
          title: 'Stream'
        }
      },
      {
        path: 'studentAccount',
        component: StudentAccountComponent,
        data: {
          title: 'StudentAccount'
        }
      },
      {
        path: 'subject',
        component: SubjectsComponent,
        data: {
          title: 'Subject'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}

import { FacultyAddComponent } from './faculty/faculty-add.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { StudentAccountComponent } from './student-account/student-account.component';
import { StreamsComponent } from './streams/streams.component';
import { FieldsComponent } from './fields/fields.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FacultyComponent } from './faculty/faculty.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DepartmentComponent } from './department/department.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmissionComponent } from './admission/admission.component';
import { FacultyEditComponent } from './faculty/faculty-edit.component';
import { FacilitiesAddComponent } from './facilities/facilities-add.component';
import { FacilitiesEditComponent } from './facilities/facilities-edit.component';
import { DepartmentAddComponent } from './department/department-add.component';
import { DepartmentEditComponent } from './department/department-edit.component';
import { FeedbackCommentComponent } from './feedback/feedback-comment/feedback-comment.component';

import { CoursesComponent } from './courses/courses.component';
import { CoursesAddComponent } from './courses/courses-add/courses-add.component';
import { OpsubAddComponent } from './opsubject/opsub-add.component';
import { OpsubEditComponent } from './opsubject/opsub-edit/opsub-edit.component';
import { SpesubeditComponent } from './spesubject/spesubedit/spesubedit.component';
import { SpesubaddComponent } from './spesubject/spesubadd/spesubadd.component';
import { combineAll } from 'rxjs/operators';
import { StreamaddComponent } from './streams/streamadd.component';
import { StreameditComponent } from './streams/streamedit.component';
import { CoursesEditComponent } from './courses/courses-edit/courses-edit.component';
import { FieldaddComponent } from './fields/fieldadd/fieldadd.component';
import { FieldeditComponent } from './fields/fieldedit/fieldedit.component';
import { SpesubjectComponent } from './spesubject/spesubject.component';
import { OpsubjectComponent } from './opsubject/opsubject.component';


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
        },

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
        data: {
          title: 'Department'
        },
        children:[
          {
            path:'',
            component: DepartmentComponent,
          },
          {
            path:'departmentAdd',
            component: DepartmentAddComponent
          },
          {
            path:'departmentEdit/:id',
            component: DepartmentEditComponent
          },
        ]

      },
      {
        path: 'contactUs',
        component: ContactUsComponent,
        data: {
          title: 'ContactUs'
        }
      },
      {
        path: 'courses',
        children:[
          {
            path:'',
            component:CoursesComponent
          },
          {
              path:'addcourse',
              component:CoursesAddComponent
          },
          {
            path:'editcorse/:id',
            component:CoursesEditComponent
          }
        ]
      },
      {
        path: 'facilities',
        data: {
          title: 'Facilities'
        },
        children:[
          {
            path:'',
            component: FacilitiesComponent,
          },
          {
            path:'facilitiesAdd',
            component: FacilitiesAddComponent
          },
          {
            path:'facilitiesEdit/:id',
            component: FacilitiesEditComponent
          },
        ]
      }, 
      {
        path: 'faculty',       
        data: {
          title: 'Faculty'
        },
        children:[
          {
            path:'',
            component: FacultyComponent,
          },
          {
            path:'facultyAdd',
            component: FacultyAddComponent
          },
          {
            path:'facultyEdit/:id',
            component: FacultyEditComponent
          },
        ]
      },
      {
        path: 'feedback',
        component: FeedbackComponent,
        data: {
          title: 'Feedback'
        },
      },
      {
        path: 'fields',
       children:[{
          path:'',
          component:FieldsComponent
       },
       {
          path:'addfield',
          component:FieldaddComponent
       },
       {
          path:'editfield/:id',
          component:FieldeditComponent
       },
      ]
        },
      {
        path: 'streams',
        children:[
          {
          path:'',
          component:StreamsComponent
          },
          {
            path:'streamadd',
            component:StreamaddComponent
          },
          {
            path:'streamedit/:id',
            component:StreameditComponent
          }
      ]
        },
        {
          path: 'opsubject',
          children:[
            {
              path:'',
              component: OpsubjectComponent
            },
            {
              path:'OpsubAdd',
            component:OpsubAddComponent
            },
            {
              path:'OpsubEdit/:id',
              component:OpsubEditComponent
            }
          ]
        },
        {
          path: 'spesubject',
          children:[
            {
            path:'',
            component:SpesubjectComponent
            },
            {
              path:'spesubedit/:id',
              component:SpesubeditComponent
            },
            {
              path:'spesubadd',
              component:SpesubaddComponent
            },
          ]
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


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../auth/auth.guard';
import { AdmissionStudentComponent } from '../admission-student/admission-student.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'HomePage'
    },
    children: [
      // {
        // path: 'UserAdmission',
        // component: UserAdmissionComponent,
        // data: {
          // title: 'Admission'
        // }
      // },
      // {
        // path: 'NewAdmission',
        // component: ,
        // data: {
          // title: 'Information'
        // }
      // },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

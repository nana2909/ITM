import { UserAdmissionComponent } from './user-detail/user-admission/user-admission.component';
import { UserInfoComponent } from './user-detail/user-info/user-info.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'UserAdmission',
        component: UserAdmissionComponent,
        data: {
          title: 'Admission'
        }
      },
      {
        path: 'UserInformation',
        component: UserInfoComponent,
        data: {
          title: 'Information'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}

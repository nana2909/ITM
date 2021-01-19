import { UserInfoComponent } from './user-detail/user-info/user-info.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserAdmissionComponent } from './user-detail/user-admission/user-admission.component';

// Angular
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatDialogModule} from '@angular/material/dialog';

// Components Routing
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  declarations: [
    UserAdmissionComponent,
    UserDetailComponent,
    UserInfoComponent
  ],
//entryComponents:[EditStudentAccountComponent],
})
export class HomeModule { }

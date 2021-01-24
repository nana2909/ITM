
// Angular
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatDialogModule} from '@angular/material/dialog';

// Components Routing
import { HomePageRoutingModule } from './home-page-routing.module';
import { UserUpdateComponent } from '../home/user-detail/user-info/user-update/user-update.component';
import { UserChangePasswordComponent } from '../home/user-detail/user-info/user-change-password/user-change-password.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  declarations: [
    UserUpdateComponent,
    UserChangePasswordComponent,
  ],
  entryComponents:[UserChangePasswordComponent,UserUpdateComponent],

//entryComponents:[EditStudentAccountComponent],
})
export class HomePageModule { }

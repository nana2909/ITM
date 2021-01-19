
// Angular
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatDialogModule} from '@angular/material/dialog';

// Components Routing
import { HomePageRoutingModule } from './home-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  declarations: [
    
  ],
//entryComponents:[EditStudentAccountComponent],
})
export class HomePageModule { }

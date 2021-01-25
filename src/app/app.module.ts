import { CookieService } from 'ngx-cookie-service';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthInterceptor } from './auth/auth.interceptor';
import { UserService } from './shared/user.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule} from'@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { MatDialogModule} from '@angular/material/dialog';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { NavMenuComponent } from './views/home/nav-menu/nav-menu.component';
import { NavHomePageComponent } from './views/home-page/nav-home-page/nav-home-page.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { DefaultLayoutComponent } from './containers';
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { HomeComponent } from './views/home/home.component';
import { ForgotPasswordComponent } from './views/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './views/forgot-password/reset-password/reset-password.component';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { AdmissionStudentComponent } from './views/admission-student/admission-student.component';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
const routes: Routes = [];
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    DataTablesModule.forRoot(),
    MatDialogModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ToastrModule.forRoot({
      maxOpened: 3,
      preventDuplicates: true,
      timeOut: 7000,
      progressBar: true,
      positionClass: "toast-bottom-right",
    }),
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    RouterModule.forRoot(routes,{ useHash: true })
  ],
  declarations: [
    NavMenuComponent,
    NavHomePageComponent,
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HomePageComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
   
    AdmissionStudentComponent,
    
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
     [UserService,{provide: HTTP_INTERCEPTORS,useClass:AuthInterceptor, multi:true}],
     [CookieService]
  ],
  
  bootstrap: [ AppComponent ],
})
export class AppModule { }
//,
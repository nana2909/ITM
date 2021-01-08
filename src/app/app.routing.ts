import { AdmissionComponent } from './views/admin/admission/admission.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { DashboardComponent } from './views/dashboard/dashboard.component';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

export const routes: Routes = [
  {
    path:'',
   // component:LoginComponent,
    redirectTo: 'login',
    pathMatch: 'full',
  }
,
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},

  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'AdminRole',
    component: DefaultLayoutComponent,
    canActivate:[AuthGuard],
    data :{
      permittedRoles:['Admin'],
      title: 'Admin'},
    children: [
      {
       path:'',
      //  loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
       component:DashboardComponent,
      },
      {
      path:'admin',
      loadChildren: () => import('./views/admin/admin.module').then(m => m.AdminModule)
      }

      // {
        // path: 'buttons',
        // loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      // },
      // {
        // path: 'charts',
        // loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      // },
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

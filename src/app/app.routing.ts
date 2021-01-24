import { HomePageComponent } from './views/home-page/home-page.component';
import { NavHomePageComponent } from './views/home-page/nav-home-page/nav-home-page.component';
import { NavMenuComponent } from './views/home/nav-menu/nav-menu.component';
import { ForgotPasswordComponent } from './views/forgot-password/forgot-password.component';
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
import { ResetPasswordComponent } from './views/forgot-password/reset-password/reset-password.component';

export const routes: Routes = [
  {
    path:'',
    redirectTo: 'HomePage',
    pathMatch: 'full',
  },
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
    path: 'forgotpassword',
    component: ForgotPasswordComponent,
    data: {
      title: 'ForgotPassword Page'
    }
  },
  {
    path: 'resetpassword',
    component: ResetPasswordComponent,
    data: {
      title: 'ResetPassword Page'
    }
  },
  {
    path: 'Admin',
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
      path:'',
      loadChildren: () => import('./views/admin/admin.module').then(m => m.AdminModule)
      }
    ]
  },
  {
    path: 'HomePage',
    component: NavHomePageComponent,
    children: [
      {
       path:'',
       component:HomePageComponent,
      },
      {
      path:'',
      loadChildren: () => import('./views/home-page/home-page.module').then(m => m.HomePageModule)
      }
    ]
  },
  {
    path: 'home',
    component: NavMenuComponent,
    canActivate:[AuthGuard],
    children: [
      {
        path:'',
        component:HomeComponent,
       },
      {
      path:'',
      loadChildren: () => import('./views/home/home.module').then(u => u.HomeModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

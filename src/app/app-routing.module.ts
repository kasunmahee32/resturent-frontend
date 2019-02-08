import { NgModule } from '@angular/core';
import { AuthGuard } from './service/auth-service/auth.guard';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path : "home",
    loadChildren : "src/app/view/layout/home-layout/home-layout.module#HomeLayoutModule",
    canActivate: [AuthGuard]
  },
  {
    path : "login",
    loadChildren : "src/app/view/layout/login-layout/login-layout.module#LoginLayoutModule"
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './core/pages/login-page/login-page.component';
import { routeGuard } from './core/guards/route.guard';

const routes: Routes = [
  {
    path: "",
    redirectTo: "sign-in",
    pathMatch: "full"
  },
  {
    path: "sign-in",
    component: LoginPageComponent,
    data: {
      animation: "Login"
    }
  },
  {
    path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
    canActivate: [routeGuard],
    data: {
      roles: ['admin'],
    }
  },
  {
    path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule),
    canActivate: [routeGuard],
    data: {
      roles: ['user'],
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

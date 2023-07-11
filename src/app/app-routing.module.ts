import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import { LoginDashboardComponent } from './component/login-dashboard/login-dashboard.component';
import { BookDashboardComponent } from './component/book-dashboard/book-dashboard.component';

const routes: Routes = [
  {path:"signin", component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'user',component:LoginDashboardComponent,
children:[
  {path: 'register',component:SignupComponent},
  {path: 'login', component:SigninComponent}
]},
{path:'home', component:BookDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

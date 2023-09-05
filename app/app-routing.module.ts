import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import { LoginDashboardComponent } from './component/login-dashboard/login-dashboard.component';
import { BookDashboardComponent } from './component/book-dashboard/book-dashboard.component';
import { BookcartComponent } from './component/bookcart/bookcart.component';
import { BookDetailsComponent } from './component/book-details/book-details.component';
import { CartComponent } from './component/cart/cart.component';
import { WhishlistComponent } from './component/whishlist/whishlist.component';
import { OrderComponent } from './component/order/order.component';
import { OrderSummaryComponent } from './component/order-summary/order-summary.component';
import { authorizationGuardGuard } from './AuthorizationGuard/authorization-guard.guard';

const routes: Routes = [
  {path:"signin", component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'user',component:LoginDashboardComponent,
children:[
  {path: 'register',component:SignupComponent},
  {path: 'login', component:SigninComponent}
]},
{path:'home', component:BookDashboardComponent, 
children:[
  {path:'allbooks',component:BookcartComponent},
  {path: 'cart', component:CartComponent},
  {path:'bookdetails',component:BookDetailsComponent},
  {path: 'whishlist', component:WhishlistComponent},
  {path: 'order', component:OrderComponent},
  {path: 'allOrder', component:OrderSummaryComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

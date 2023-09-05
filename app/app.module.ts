import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatBadgeModule} from '@angular/material/badge';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginDashboardComponent } from './component/login-dashboard/login-dashboard.component';
import { BookDashboardComponent } from './component/book-dashboard/book-dashboard.component';
import { BookcartComponent } from './component/bookcart/bookcart.component';
import { BookDetailsComponent } from './component/book-details/book-details.component';
import { CartComponent } from './component/cart/cart.component';
import { WhishlistComponent } from './component/whishlist/whishlist.component';
import { FilterPipe } from './Pipes/filter.pipe';
import { OrderComponent } from './component/order/order.component';
import { OrderSummaryComponent } from './component/order-summary/order-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    LoginDashboardComponent,
    BookDashboardComponent,
    BookcartComponent,
    BookDetailsComponent,
    CartComponent,
    WhishlistComponent,
    FilterPipe,
    OrderComponent,
    OrderSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatIconModule,
    MatRadioModule,
    MatMenuModule,
    MatPaginatorModule,
    MatBadgeModule,
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberRegistrationComponent } from './member/member-registration/member-registration.component';
import { ProductConfigurationListComponent } from './product/product-configuration-list/product-configuration-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { PaymentDetailsComponent } from './payment/payment-details/payment-details.component';

const appRoutes: Routes = [
  { path: 'member', component: MemberRegistrationComponent },
  { path: 'products', component: ProductConfigurationListComponent },
  { path: 'product-detail', component: ProductDetailComponent },
  { path: 'payment-detail', component: PaymentDetailsComponent }


];


@NgModule({
  declarations: [
    AppComponent,
    MemberRegistrationComponent,
    ProductConfigurationListComponent,
    ProductDetailComponent,
    PaymentDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

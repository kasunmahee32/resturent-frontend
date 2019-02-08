import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentformRoutingModule } from './paymentform-routing.module';
import { ViewpaymentComponent } from './viewpayment/viewpayment.component';

@NgModule({
  declarations: [ViewpaymentComponent],
  imports: [
    CommonModule,
    PaymentformRoutingModule
  ]
})
export class PaymentformModule { }

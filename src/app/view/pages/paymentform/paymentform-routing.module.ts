import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule}from'@angular/router';
import { ViewpaymentComponent } from './viewpayment/viewpayment.component';
const routes: Routes=[
  {
    path:"",
    component:ViewpaymentComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ],
  exports :[RouterModule]
})
export class PaymentformRoutingModule { }

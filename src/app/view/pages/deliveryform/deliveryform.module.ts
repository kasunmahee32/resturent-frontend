import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryformRoutingModule } from './deliveryform-routing.module';
import { ViewdeliveryComponent } from './viewdelivery/viewdelivery.component';

@NgModule({
  declarations: [ViewdeliveryComponent],
  imports: [
    CommonModule,
    DeliveryformRoutingModule
  ]
})
export class DeliveryformModule { }

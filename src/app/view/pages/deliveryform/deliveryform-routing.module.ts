import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { ViewdeliveryComponent } from './viewdelivery/viewdelivery.component';

const routes : Routes=[
 {
    path: '',
    component:ViewdeliveryComponent
 }
]


@NgModule({

  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class DeliveryformRoutingModule { }

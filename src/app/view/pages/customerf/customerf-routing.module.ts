import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { ViewcustomerComponent } from './viewcustomer/viewcustomer.component';

const routes: Routes =[
  {
    path: "",
    component : ViewcustomerComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports : [RouterModule]
})
export class CustomerfRoutingModule { }

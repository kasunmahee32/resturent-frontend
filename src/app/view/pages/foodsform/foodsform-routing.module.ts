import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule}from '@angular/router';
import { ViewfoodsComponent } from './viewfoods/viewfoods.component';
const routes : Routes=[
  {
    path: "",
    component:ViewfoodsComponent
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
export class FoodsformRoutingModule { }

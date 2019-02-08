import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule}from '@angular/router';
import { ViewhomeComponent } from './viewhome/viewhome.component';
const routes: Routes= [
  {
  path: "",
  component: ViewhomeComponent

  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class HomeformRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { from } from 'rxjs';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';

const routes: Routes=[
  {
  path: "",
  component: ViewemployeeComponent
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
export class EmployeeformRoutingModule { }

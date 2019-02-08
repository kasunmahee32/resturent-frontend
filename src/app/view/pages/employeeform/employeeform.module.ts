import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeformRoutingModule } from './employeeform-routing.module';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations:[ViewemployeeComponent],
  imports: [
    CommonModule,
    EmployeeformRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmployeeformModule { }

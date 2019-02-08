import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerfRoutingModule } from './customerf-routing.module';
import { ViewcustomerComponent } from './viewcustomer/viewcustomer.component';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [ViewcustomerComponent],
  imports: [
    CommonModule,
    CustomerfRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CustomerfModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeformRoutingModule } from './homeform-routing.module';
import { ViewhomeComponent } from './viewhome/viewhome.component';

@NgModule({
  declarations: [ViewhomeComponent],
  imports: [
    CommonModule,
    HomeformRoutingModule
  ]
})
export class HomeformModule { }

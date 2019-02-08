import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodsformRoutingModule } from './foodsform-routing.module';
import { ViewfoodsComponent } from './viewfoods/viewfoods.component';

@NgModule({
  declarations: [ViewfoodsComponent],
  imports: [
    CommonModule,
    FoodsformRoutingModule
  ]
})
export class FoodsformModule { }

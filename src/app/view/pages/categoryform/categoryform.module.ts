import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryformRoutingModule } from './categoryform-routing.module';
import { ViewcategoryComponent } from './viewcategory/viewcategory.component';

@NgModule({
  declarations: [ViewcategoryComponent],
  imports: [
    CommonModule,
    CategoryformRoutingModule
  ]
})
export class CategoryformModule { }

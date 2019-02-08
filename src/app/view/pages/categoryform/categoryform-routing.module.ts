import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{Routes,RouterModule}from '@angular/router';
import { ViewcategoryComponent } from './viewcategory/viewcategory.component';
const routes: Routes=[
  {
  path: "",
  component:ViewcategoryComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CategoryformRoutingModule { }

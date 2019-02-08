import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './view/home-layout.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children :[
      
      {
        path: 'viewhome',
        loadChildren: "src/app/view/pages/homeform/homeform.module#HomeformModule"
      },
      // {
      //   path : 'page1',
      //   loadChildren : "src/app/view/pages/page1/page1.module#Page1Module"

      // },
      // {
      //   path : 'page2',
      //   loadChildren : "src/app/view/pages/page2/page2.module#Page2Module"

      // },
      {
        path : 'viewcustomer',
        loadChildren:"src/app/view/pages/customerf/customerf.module#CustomerfModule"
      },
      {
        path: 'viewemployee',
        loadChildren:"src/app/view/pages/employeeform/employeeform.module#EmployeeformModule"
      },
      {
        path:'viewfoods',
        loadChildren:"src/app/view/pages/foodsform/foodsform.module#FoodsformModule"
      },
      {
        path:'viewcategory',
        loadChildren:"src/app/view/pages/categoryform/categoryform.module#CategoryformModule"
      },
      {
        path:'viewdelivery',
        loadChildren:"src/app/view/pages/deliveryform/deliveryform.module#DeliveryformModule"
      },
      {
        path:'viewpayment',
        loadChildren:"src/app/view/pages/paymentform/paymentform.module#PaymentformModule"
      }
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeLayoutRouterModule { }

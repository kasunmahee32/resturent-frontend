import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-viewcustomer',
  templateUrl: './viewcustomer.component.html',
  styleUrls: ['./viewcustomer.component.css']
})
export class ViewcustomerComponent /*implements OnInit*/ {
form= new FormGroup({
 txtcid:new FormControl('', Validators.required),

});

//  constructor() { }

  //ngOnInit() {
  //}
}

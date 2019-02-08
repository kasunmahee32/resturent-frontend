import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {
employeeForm : FormGroup =new FormGroup({
  txteid :new  FormControl('', Validators.required),
  txtename  : new FormControl('', Validators.required),
  txtaddr : new FormControl('', Validators.required),
  txtemail: new FormControl('', Validators.required),
  txttele: new FormControl('', Validators.required)
});
get Txteid(){
  return this.employeeForm.get("Txteid")
}
get Txtename(){
  return this.employeeForm.get("Txtename")
}
get Txtaddr(){
  return this.employeeForm.get("txtaddr")
}
get Txtemail(){
  return this.employeeForm.get("Txtemail")
}
get Txttele(){
  return this.employeeForm.get("Txttele")
}
  constructor() { }

  ngOnInit() {
  }
saveEmployee(){

}
searchEmployee(){

}
deleteEmployee(){

}
updateEmployee(){

}
}

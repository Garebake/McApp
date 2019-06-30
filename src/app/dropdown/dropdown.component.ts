import { Component, OnInit } from '@angular/core';
import { DropdownItem } from '../Dropdown_items'

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
isCollapsedAct : boolean = true;
isCollapsedExp : boolean = true;

isCollapsedActForm: boolean = true;
isCollapsedExpForm: boolean = true;

bool = false 

ShowHideAct(){
   this.varibleArray[0] = !this.varibleArray[0];
 }

ShowHideExp(){
  this.varibleArray[1] = !this.varibleArray[1];
}

varibleArray = [this.isCollapsedAct, this.isCollapsedExp]

collapse(item){
  if (item == 0){
    this.ShowHideAct()
  }
  if(item == 1){
    this.ShowHideExp()
  }
}

ShowHideActForm(){
  this.formArray[0] = !this.formArray[0];  
}

ShowHideExpForm(){
  this.formArray[1] = !this.formArray[1];
}
formArray = [ this.isCollapsedActForm, this.isCollapsedExpForm]

Collapse_Form(item){
  if (item == 0 ){
    this.ShowHideActForm()
  }
  if (item == 1){
    this.ShowHideExpForm()
  }
}








  dropdownItem = DropdownItem

  constructor() { }

  ngOnInit() {
  }

}

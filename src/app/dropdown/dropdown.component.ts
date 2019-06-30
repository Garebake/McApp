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

bool = false 

ShowHideAct(){
   this.varibleArray[0] = !this.varibleArray[0];
 }

ShowHideExp(){
  this.varibleArray[1] = !this.varibleArray[1];
}

collapse(item){
  if (item == 0){
    this.ShowHideAct()
  }
  if(item == 1){
    this.ShowHideExp()
  }

}
varibleArray = [this.isCollapsedAct,
this.isCollapsedExp]

  dropdownItem = DropdownItem

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { DropdownItem } from '../Dropdown_items';
import {User} from '../user';

@Component({
  selector: 'app-dropdown-v2',
  templateUrl: './dropdown-v2.component.html',
  styleUrls: ['./dropdown-v2.component.css']
})
export class DropdownV2Component implements OnInit {

  user = User[0]

  valueArray = [this.user.astValue, this.user.expValue]
  titleArray = [this.user.astTitle, this.user.expTitle]

  constructor() { }

  ngOnInit() {
  }

  edit(item1, item2, itemValue){
    if(itemValue == ''){
      window.alert("please enter a value")
    }
    else{
      this.valueArray[item1][item2] = itemValue;
    }
  }

delete(item1, item2){
  this.valueArray[item1].splice(item2,1);
  this.titleArray[item1].splice(item2,1);
}

Add(item, title, value){
  this.titleArray[item].push(title)
  this.valueArray[item].push(value)
}
  DropDownV2 = DropdownItem
}

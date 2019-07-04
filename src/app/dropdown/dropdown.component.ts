import { Component, OnInit } from '@angular/core';
import { DropdownItem } from '../Dropdown_items'
import {User} from '../user'
// import { totalmem } from 'os';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

user = User[0]

isCollapsedAct : boolean = true;
isCollapsedExp : boolean = true;

isCollapsedActForm: boolean = true;
isCollapsedExpForm: boolean = true;


varibleArray = [this.isCollapsedAct, this.isCollapsedExp]

collapse(item){
this.varibleArray[item] = !this.varibleArray[item]
}

formArray = [ this.isCollapsedActForm, this.isCollapsedExpForm]

Collapse_Form(item){
    this.editArray[item] = true;
    this.formArray[item] = !this.formArray[item]
}

titleArray = [this.user.astTitle, this.user.expTitle]
valueArray = [this.user.astValue, this.user.expValue]

Append(item, itemtext, itemvalue){
  if (isNaN(itemvalue)){
    window.alert('Please enter a number')
  }
  else{
    this.titleArray[item].push(itemtext)
    this.valueArray[item].push(itemvalue)
    this.Collapse_Form(item)
  }
}

// Edit bubble
isCollapsedActEdit: boolean = true;
isCollapsedExpEdit: boolean = true;
editArray = [this.isCollapsedActEdit, this.isCollapsedExpEdit]

// Make edit Collapse
ShowHideEdit(item){
  this.formArray[item] = true;
  this.editArray[item] = !this.editArray[item];
}

// edid method
Edit(item, combo, itemvalue){
  if (isNaN(itemvalue)){
    window.alert('Please enter a number')
  }
  else{
    this.valueArray[item][combo] = itemvalue;
    this.ShowHideEdit(item)
  }
  
}
// Delete button
Delete(item, combo){
  this.valueArray[item].splice(combo,1);
  this.titleArray[item].splice(combo,1);
  this.ShowHideEdit(item)
}

//Sum function

public sum(item) {
  var total = 0
  this.valueArray[item].forEach(x => total += x);

   return total;
}



 


  dropdownItem = DropdownItem

  constructor() { }

  ngOnInit() {
  }

}


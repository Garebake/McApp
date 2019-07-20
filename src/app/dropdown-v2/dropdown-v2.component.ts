import { Component, OnInit } from '@angular/core';
import { DropdownItem } from '../Dropdown_items'

@Component({
  selector: 'app-dropdown-v2',
  templateUrl: './dropdown-v2.component.html',
  styleUrls: ['./dropdown-v2.component.css']
})
export class DropdownV2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  DropDownV2 = DropdownItem
}

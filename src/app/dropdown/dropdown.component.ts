import { Component, OnInit } from '@angular/core';
import { DropdownItem } from '../Dropdown_items'

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  dropdownItem = DropdownItem

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import{ DEVELOPERS } from '../Developer';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  developers = DEVELOPERS
  
  constructor() { }

  ngOnInit() {
  }

}

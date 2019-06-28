import { Component, OnInit } from '@angular/core';
import{ Developer } from '../AboutUs';
import{ DEVELOPERS} from '../Developer';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})

export class AboutUsComponent implements OnInit {

  aboutUs = "About Us";

  developers = DEVELOPERS;

  

  developer: Developer = {
    pic: "hi",
    name: "Gary",
    about: "non of ya",
    age: "23 and rocking"
  };


  constructor() { }

  ngOnInit() {
  }

}

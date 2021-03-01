import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
 showHomeComponent : boolean = false;
 showSettingComponent :boolean = false;

  constructor() { }
componentArray = [{"id":1,"name":"home"},{"id":2,"name":"star_border"},{"id":3,"name":"delete"},{"id":4,"name":"schedule"}
]
  ngOnInit(): void {
  }
  loadComponent(){
    this.showHomeComponent = true;
    this.showSettingComponent = false;

  }
  loadSettingComponent(){
    this.showSettingComponent = true;
    this.showHomeComponent = false;
  }

}

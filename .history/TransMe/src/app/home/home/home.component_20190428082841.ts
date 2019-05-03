import { Component, OnInit,ViewChild  } from '@angular/core';
import {HomesidebarComponent} from './homesidebar/homesidebar.component';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  collapedSideBar: boolean;
  @ViewChild(HomesidebarComponent) sidebar: HomesidebarComponent;

  constructor() {}

  ngOnInit() {}

  receiveCollapsed($event) {
      this.collapedSideBar = $event;
  }




}


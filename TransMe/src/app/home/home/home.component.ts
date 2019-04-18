import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  collapedSideBar: boolean;

  constructor() {}

  ngOnInit() {}

  receiveCollapsed($event) {
      this.collapedSideBar = $event;
  }




}


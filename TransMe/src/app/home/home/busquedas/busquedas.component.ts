import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busquedas',
  templateUrl: './busquedas.component.html',
  styleUrls: ['./busquedas.component.scss']
})
export class BusquedasComponent implements OnInit {

  constructor() { }

  date = new Date();
  date2 = new Date();

  ngOnInit() {
  }

}

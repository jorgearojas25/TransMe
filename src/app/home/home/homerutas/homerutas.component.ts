import { Component, OnInit } from '@angular/core';
import { RutasService } from 'src/app/shared/services/rutas.service';


@Component({
  selector: 'app-homerutas',
  templateUrl: './homerutas.component.html',
  styleUrls: ['./homerutas.component.scss']
})
export class HomerutasComponent implements OnInit {

  constructor(private _RutasService:RutasService) { 

  }

  ngOnInit() {

    this._RutasService.getJSONrutas().subscribe(data=>{
      console.log(data);
    })

    this._RutasService.getJSONvagones().subscribe(data=>{
      console.log(data);
    })






  }

}

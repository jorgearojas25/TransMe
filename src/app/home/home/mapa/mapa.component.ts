import { Component, OnInit } from '@angular/core';

declare var ol: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {
  latitude = -74.0723172873;
  longitude = 4.711977791360;

  map: any;
  ngOnInit() {
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([this.latitude, this.longitude]),
        zoom: 11
      })
    });
  }
  constructor() {}
}


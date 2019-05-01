import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { EventosService } from '../../shared/services/eventos.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  constructor(public service:UserService,public events:EventosService,public toastr:ToastrService) { }

  ngOnInit() {
    this.events.getEventos();
  }

}

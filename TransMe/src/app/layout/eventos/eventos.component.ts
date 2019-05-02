import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { EventosService } from '../../shared/services/eventos.service';
import { ToastrService } from 'ngx-toastr';
import { CategoriaService } from 'src/app/shared/services/categoria.service';
import { UsereventService } from 'src/app/shared/services/userevent.service';

declare var $:any;

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
  userDetails;

  constructor(public service:UserService,public events:EventosService,public toastr:ToastrService,
              public categoria:CategoriaService, public userevent:UsereventService) { }

  ngOnInit() {
    this.service.eventoForm.reset();
    this.events.getEventos();
    this.categoria.getList();
    this.service.getUserProfile().subscribe(
      res => {
        this.userDetails = res
      },
      err => {
        console.log(err);
      },
    );
    console.log(this.userDetails);


    $(document).ready(function(){
      $('input[type="checkbox"]').click(function(){
          if($(this).attr("value")=="Tecnologia"){
              $(".Tecnologia").toggle();
          }
          if($(this).attr("value")=="Deportes"){
              $(".Deportes").toggle();
          }
          if($(this).attr("value")=="Cine"){
              $(".Deportes").toggle();
          }
          if($(this).attr("value")=="Teatro"){
              $(".Deportes").toggle();
          }
          if($(this).attr("value")=="Politico"){
              $(".Deportes").toggle();
          }
          if($(this).attr("value")=="Religioso"){
              $(".Deportes").toggle();
          }
          if($(this).attr("value")=="Recreativo"){
              $(".Deportes").toggle();
          }
          if($(this).attr("value")=="Conferencia"){
              $(".Deportes").toggle();
          }
          

        
      });
  });
  }


  onSubmit(dato){
    $('.form'+dato).toggle();
    this.service.apartarEvento().subscribe(
        (res:any)=>{
            if(res.OK){
                this.toastr.success('Evento Registrado','Gracias!');
            }
        },
        err=>{
            console.log(err);
        }
    );
}


}

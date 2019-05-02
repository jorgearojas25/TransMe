import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { CategoriaService } from 'src/app/shared/services/categoria.service';
import {NgbDateAdapter, NgbDateStruct, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';
import { TroncalesService } from '../../shared/services/troncales.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})
export class AdminComponent implements OnInit {
  userDetails;
  model: Date;
  estaciones:any[];

  constructor(public service: UserService, private toastr:ToastrService, public categoria: CategoriaService, public servicioestaciones:TroncalesService) { }

  ngOnInit() {
    this.service.eventForm.reset();
    this.service.getUserProfile().subscribe(
      res => {
        this.userDetails = res
      },
      err => {
        console.log(err);
      },
    );
    this.categoria.getList();

    this.estaciones = this.servicioestaciones.getEstacion()
    console.log(this.estaciones);
    
  }

  onSubmit(){
    this.service.postEvento().subscribe(
        (res:any)=>{
            if(res){
                this.service.eventForm.reset();
                this.toastr.success('Evento Creado!','Registro Completo');
            }
        },
        err=>{
            console.log(err);
        }
    );
}

}

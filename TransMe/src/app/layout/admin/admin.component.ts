import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  userDetails;

  constructor(public service: UserService, private toastr:ToastrService) { }

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
  }

  onSubmit(){
    this.service.postEvento().subscribe(
        (res:any)=>{
            if(res.succeeded){
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

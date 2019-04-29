import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { UserService } from '../shared/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    constructor(public service: UserService, private toastr:ToastrService) {}

    ngOnInit() {
        this.service.formModel.reset();
    }

    onSubmit(){
        this.service.register().subscribe(
            (res:any)=>{
                if(res.succeeded){
                    this.service.formModel.reset();
                    this.toastr.success('Usuario Creado!','Registro Completo');
                }else{
                    res.errors.forEach(element => {
                        switch (element.code) {
                            case 'DuplicateUserName':
                                //El nombre de usuario ya esta en uso.
                                this.toastr.error('El nombre de usuario ya esta en uso.','El registro no se completo.')
                                break;
                        
                            default:
                            //El registro ha fallado.
                            this.toastr.error(element.desciption,'El registro no se completo.')
                                break;
                        }
                    });
                }
            },
            err=>{
                console.log(err);
            }
        );
    }
}

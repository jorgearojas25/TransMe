import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/services/user.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    formModel = {
        UserName : '',
        Password : ''
    }
    constructor(
      public router: Router,
      private service:UserService,
      private toastr:ToastrService
    ) {}

    ngOnInit() {
        if(localStorage.getItem('token')!=null)
        this.router.navigateByUrl('/dashboard');
    }

    onSubmit(form:NgForm) {
        this.service.login(form.value).subscribe(
            (res:any)=>{
                localStorage.setItem('token',res.token);
                this.router.navigateByUrl('/dashboard')
            },
            err =>{
                if (err.status == 400) {
                    this.toastr.error("El nombre de usuario o la contraseña son incorrectos","Intento Fallido")
                }else
                console.log(err);
            }
        );
    }
}

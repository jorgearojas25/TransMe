import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb: FormBuilder, private fb2:FormBuilder, private http:HttpClient) { }
  readonly BaseURI = 'http://localhost:49810/api';

  formModel = this.fb.group({
    UserName:['',Validators.required],
    Email:['',[Validators.required,Validators.email]],
    FullName:[''],
    Role:[''],
    Passwords:this.fb.group({
      Password:['',[Validators.required,Validators.minLength(4)]],
      ConfirmPassword:['',Validators.required],
    },
    {validator:this.comparePasswords})
    
  });

  formModel2=this.fb2.group({
    EventoID:[''],
    NombreEvento:[''],
    Descripcion:[''],
    Fecha:[''],
    Hora:[''],
    Lugar:[''],
    EstacionesID:[''],
    Costo:['']
  });

  createEvent(){
    
  }

  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    //passwordMismatch
    //confirmPswrdCtrl.errors={passwordMismatch:true}
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('Password').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl.setErrors(null);
    }
  }

  register() {
    var body = {
      UserName: this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      FullName: this.formModel.value.FullName,
      Password: this.formModel.value.Passwords.Password,
      Role:this.formModel.value.Role
    };
    return this.http.post(this.BaseURI + '/ApplicationUser/Register', body);
  }
  login(formData){
    return this.http.post(this.BaseURI + '/ApplicationUser/Login', formData);
  }
  getUserProfile(){
    return this.http.get(this.BaseURI+'/UserProfile')
  }
  
  postEvento(){
    var body2={
      EventoID:this.formModel2.value.EventoID,
      NombreEvento:this.formModel2.value.NombreEvento,
      Descripcion:this.formModel2.value.Descripcion,
      Fecha:this.formModel2.value.Fecha,
      Hora:this.formModel2.value.Hora,
      Lugar:this.formModel2.value.Lugar,
      EstacionesID:this.formModel2.value.EstacionesID,
      Costo:this.formModel2.value.Costo
    }

    return this.http.post(this.BaseURI+'/Evento',body2);

  }

  roleMatch(allowedRoles): boolean {
    var isMatch = false;
    var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    var userRole = payLoad.role;
    allowedRoles.forEach(element => {
      if (userRole == element) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;
  }
}
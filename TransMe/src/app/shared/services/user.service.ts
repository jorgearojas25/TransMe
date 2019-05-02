import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb: FormBuilder, private fb2:FormBuilder,private fb3:FormBuilder, private http:HttpClient) { }
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

  eventForm=this.fb2.group({ 
    id:[''],
    NombreEvento:[''],
    Descripcion:[''],
    CategoriaID:[''],
    Fecha:[''],
    Hora:[''],
    Lugar:[''],
    Estacion:[''],
    Costo:['']
  });

  eventoForm=this.fb3.group({ 
    id:[''],
    eventoID:[''],
    //evento:['null'],
    usuarioID:[''],
    //usuario:['null']
  });

  apartarEvento(){
    var body = {
      id: this.eventoForm.value.id,
      eventoID: this.eventoForm.value.eventoID,
      //evento: this.eventoForm.value.evento,
      usuarioID: this.eventoForm.value.usuarioID,
      //usuario: this.eventoForm.value.usuario
    };
    return this.http.post(this.BaseURI + '/UsuarioEvento', body);
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
      EventoID:this.eventForm.value.EventoID,
      NombreEvento:this.eventForm.value.NombreEvento,
      Descripcion:this.eventForm.value.Descripcion,
      CategoriaID:this.eventForm.value.CategoriaID,
      Fecha:this.eventForm.value.Fecha,
      Hora:this.eventForm.value.Hora,
      Lugar:this.eventForm.value.Lugar,
      Estacion:this.eventForm.value.Estacion,
      Costo:this.eventForm.value.Costo
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
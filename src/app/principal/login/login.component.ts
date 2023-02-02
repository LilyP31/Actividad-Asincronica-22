import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: any;
  password: any;

  constructor(private autenticacion: AutenticacionService, private router: Router){}
  urlRedireccion = "";
 login() {
    if (this.usu !== "Dkli" || this.pass !== "12345678") {
      this.mostrar = false
      return
    }
    else {
      this.mostrar = true
      this.autenticacion.login();
      console.log(this.autenticacion.urlUsuarioIntentaAcceder)
      this.urlRedireccion = this.autenticacion.urlUsuarioIntentaAcceder;
      this.autenticacion.urlUsuarioIntentaAcceder = "";
      this.router.navigate([this.urlRedireccion]);
    }
  }
  usu = "";
  pass = "";
  mostrar = false
  
  
}
/*
constructor (private autenticacion: AutenticacionService, private router: Router, private formBuilder : FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['',{validators: [Validators.required]}],
      password: ['',{validators: [Validators.required, Validators.minLength(8)]}]
    });
  }
  loginForm: any ;
  redireccion = '';
  botonDeshabilitado = false;
  mostrar : boolean = false;
  
 
  private usuarios = [
    {username: 'AD', password: '12345678'}
  ];

  get username(){return this.loginForm.get('username')};
  get password(){return this.loginForm.get('password')};

  login(){
    const usuario = this.usuarios.find(u => u.username === this.username.value && u.password === this.password.value);
    if (usuario) {
      this.autenticacion.login();
      this.redireccion = this.autenticacion.urlUsuarioIntentaAcceder; 
      this.autenticacion.urlUsuarioIntentaAcceder = '';
      this.router.navigate(['/home']);
    } else {
      this.mostrar = true;
    }
  }


  Activar(){
    if(this.loginForm.valid){
      this.botonDeshabilitado = true;
    } else {
      this.botonDeshabilitado = false;
    }
  }

  ngOnInit(){
    this.loginForm.statusChanges.subscribe((status: string) => {
      this.botonDeshabilitado = status === 'VALID';
    });
  }

  
    

*/ 
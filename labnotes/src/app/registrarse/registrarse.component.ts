import { Component, OnInit } from '@angular/core';
import { CreateusersService } from '../services/createusers.service';
/* import { user } from '@angular/fire/auth';

import { AngularFirestore } from '@angular/fire/compat/firestore'; */

import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss']
})
export class RegistrarseComponent implements OnInit {

  changeIcon: boolean = false;
  showText: boolean = false;
  usuario: any = {
    username: '',
    email: '',
    password: ''
  }
  form!: FormGroup;

  constructor(
    // firestore : AngularFirestore
    private createusersService: CreateusersService
  ) { }

  ngOnInit(): void {}

  seePassword(){
    this.changeIcon = !this.changeIcon;
    this.showText = !this.showText;
  }

  registerEmail(){
    console.log(this.usuario) 
    const {email, password} = this.usuario;
    this.createusersService.registerInFirestore(email, password)
    .then(res => {
      delete this.usuario.password;
      console.log('se guardó en auth', res)
      this.createusersService.emailVerification()
        .then(() => {
          this.createusersService.saveUser(this.usuario, res?.user?.uid).then(() => {
            console.log('Usuario registrado');
            // this.form.reset();
          }, error => {
            console.log('Opps.. ocurrio un error', error);
          })
        })
        .catch(error => console.log(error, 'error'))
    });
  }
}

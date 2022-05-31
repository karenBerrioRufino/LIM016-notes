import { Component, OnInit } from '@angular/core';
import { CreateusersService } from '../services/createusers.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss']
})
export class RegistrarseComponent implements OnInit {

  changeIcon: boolean = false;
  showText: boolean = false;
  usuario: FormGroup = new FormGroup ({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    // firestore : AngularFirestore
    private createusersService: CreateusersService,
    private router:Router,
  ) { }
  

  ngOnInit(): void {}

  seePassword(){
    this.changeIcon = !this.changeIcon;
    this.showText = !this.showText;
  }

  registerEmail(){
    console.log(this.usuario) 
    const {email, password} = this.usuario.value;
    this.createusersService.registerInFirestore(email, password)
    .then(res => {
      delete this.usuario.value.password;
      console.log('se guardó en auth', res)
      this.createusersService.emailVerification()
        .then( () => {
          //if (res?.user?.emailVerified == false) {
            console.log(res?.user?.emailVerified)
            this.createusersService.saveUser(this.usuario.value, res?.user?.uid).then(() => {
              console.log('Usuario registrado');
              this.cleanForm()
              this.router.navigateByUrl('/')
            }, error => {
              console.log('Opps.. ocurrio un error', error);
            })
         // }
        })
        .catch(error => console.log(error, 'error'))
    });
  } 

  cleanForm(){
    this.usuario.reset();
  }

}

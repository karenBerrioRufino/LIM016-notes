import { Component, OnInit } from '@angular/core';
import { CreateusersService } from '../services/createusers.service';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showText: boolean = false;
  changeIcon: boolean = false;
  usuario: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })
  constructor( 
    private createUser: CreateusersService, 
    private router:Router,
    ) {}

  ngOnInit(): void {}
  
  seePassword(){
    this.showText = !this.showText;   
    this.changeIcon = !this.changeIcon;
  }

  ingresar(){
    const {email, password} = this.usuario.value;
    this.createUser.signInWithEmail(email, password)
      console.log('ingresar')
      this.router.navigateByUrl('/notes');

  }

  async LogInWithGoogle(){
    try{
      this.createUser.signInWithGoogle()
      console.log('inicio de sesión con google')
      this.router.navigateByUrl('/notes');
    }      
    catch(err){ console.log(err, 'error') } 
    }

    recoverPassword(){
      this.router.navigateByUrl('/recoverPass');
    }

}

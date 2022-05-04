import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateusersService } from '../services/createusers.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showText: boolean = false;
  changeIcon: boolean = false;
  constructor( private createUser: CreateusersService, private router:Router ) { }

  ngOnInit(): void {}
  
  seePassword(){
    this.showText = !this.showText;   
    this.changeIcon = !this.changeIcon;
  }

  ingresar(){
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
      
    }

}

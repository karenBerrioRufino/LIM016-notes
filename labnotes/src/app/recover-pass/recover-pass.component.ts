import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateusersService } from '../services/createusers.service';

@Component({
  selector: 'app-recover-pass',
  templateUrl: './recover-pass.component.html',
  styleUrls: ['./recover-pass.component.scss']
})
export class RecoverPassComponent implements OnInit {
 
  constructor( private createUser: CreateusersService, private router: Router ) { }

  ngOnInit(): void {
  }
  /* resetPass(){
    console.log('hola')
    const email : any = document.querySelector('#inputEmail') as HTMLInputElement
    console.log('reset')
    this.createUser.resetPassword(email)
    .then(() => {
      console.log('se envió el correo')
      this.router.navigateByUrl('/');
    })
    .catch(error => console.log(error, 'error'))
  } */

  resetPass(){
    const email : any = document.querySelector('#inputEmail') as HTMLInputElement
    this.createUser.resetPassword(email);
    
   
  }  

}

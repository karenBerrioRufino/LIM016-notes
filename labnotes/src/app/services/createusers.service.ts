import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app'

@Injectable({
  providedIn: 'root'
})
export class CreateusersService {
  authWithAngularFirebase: any;

  constructor( 
    private firestore: AngularFirestore,
    private fireAuth: AngularFireAuth,
    private router: Router) {}

  async signInWithEmail(email: string, password: string){
    try{
      return await this.fireAuth.signInWithEmailAndPassword(email, password);
    }
    catch(err){
      console.log(err);
      return null;
    }
  }

  async signInWithGoogle(){
    try{
      return await this.fireAuth.signInWithPopup( new firebase.auth.GoogleAuthProvider());
    }
    catch(err){
      console.log(err);
      return null;
    }
  }

   async registerInFirestore(email: string, password: string){
    try{
      return await this.fireAuth.createUserWithEmailAndPassword(email, password);
    }
    catch(err){
      console.log(err);
      return null;
    }
  }

  saveUser(usuario: object, uid: any):Promise<any>{
     return this.firestore.collection('usuarios').doc(uid).set(usuario);
  }

  async emailVerification(): Promise<void> {
    return (await this.fireAuth.currentUser)?.sendEmailVerification(); 
  }

  resetPassword(email: string) {
    
    this.fireAuth.sendPasswordResetEmail(email)
    .then(() => {
      console.log('reset pass');
      this.router.navigateByUrl('/notes');
    })
    .catch(error => console.log(error, 'error'))
  }
  
}

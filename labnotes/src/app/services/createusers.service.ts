import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app'

@Injectable({
  providedIn: 'root'
})
export class CreateusersService {

  constructor( 
    private firestore: AngularFirestore,
    private fireAuth: AngularFireAuth) {}

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
}

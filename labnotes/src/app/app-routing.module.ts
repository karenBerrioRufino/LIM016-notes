import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { LoginComponent } from './login/login.component';
import { NotesComponent } from './notes/notes.component';
import { RecoverPassComponent } from './recover-pass/recover-pass.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'notes', component: NotesComponent
  },
  {
    path: 'addnotes', component: AddNotesComponent
  },
  {
    path: 'registrarse', component: RegistrarseComponent
  },
  {
    path: 'recoverPass', component: RecoverPassComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

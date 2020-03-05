import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestComponent} from './components/test/test.component';
import { Test2Component } from './components/test2/test2.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';


const routes: Routes = [
  
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'test', component: TestComponent },
  {path: 'test2', component: Test2Component },
  {path: 'inicio', component: InicioComponent },
  {path: 'preguntas', component: PreguntasComponent },
  {path: 'departamentos', component: DepartamentosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 

exports: [RouterModule]
})
export class AppRoutingModule { }

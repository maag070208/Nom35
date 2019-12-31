import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './components/inicio/inicio.component';
import {Parte1Component} from './components/encuesta/parte1/parte1.component';
const routes: Routes = [
	{path: '',
	 redirectTo: '/inicio',
	 pathMatch: 'full'
	 },
	 {path: 'inicio', component: InicioComponent},
	  {path: 'encuesta/page1', component: Parte1Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

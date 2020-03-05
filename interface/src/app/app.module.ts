import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
//services

import { BsModalService } from 'ngx-bootstrap/modal';
import {EncuestadoService} from './services/encuestado.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './components/test/test.component';
import { Test2Component } from './components/test2/test2.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    InicioComponent,
    PreguntasComponent,
    DepartamentosComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot()
    
  ],
  providers: [
    EncuestadoService,
    FormBuilder,
    BsModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

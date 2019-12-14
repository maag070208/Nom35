import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Parte1Component } from './components/encuesta/parte1/parte1.component';
import { MaxminDepaComponent } from './components/maxmin-depa/maxmin-depa.component';
import { MaxminEncComponent } from './components/maxmin-enc/maxmin-enc.component';
import { PuntosDepaComponent } from './components/puntos-depa/puntos-depa.component';
import { InicioComponent } from './components/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    Parte1Component,
    MaxminDepaComponent,
    MaxminEncComponent,
    PuntosDepaComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

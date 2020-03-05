import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Encuestados} from '../models/encuestados/encuestados';
import {Observable} from 'rxjs';
import { Departamentos } from './../models/departamentos';

@Injectable({
  providedIn: 'root'
})
export class EncuestadoService {

  API_ENCUESTADO = 'http://localhost:3000/encuestados';
	API_MAXMIN_ENCUESTADO = "http://localhost:3000/max-min-encuestado";
	API_MAXMIN_DEPARTAMENTO = "http://localhost:3000/max-min-departamento";
	API_PUNTOS_DEPARTAMENTO = "http://localhost:3000/puntos-total-departamento";
  API_DEPARTAMENTO = "http://localhost:3000/departamentos";

  constructor(private http: HttpClient) { }


  getEncuestados(){
  	return this.http.get(`${this.API_ENCUESTADO}`);
  }

  insertEncuestado(encuestado: Encuestados){
  	return this.http.post(`${this.API_ENCUESTADO}`, encuestado);
  }

  getMaxMinDepa(){
  	return this.http.get(`${this.API_MAXMIN_DEPARTAMENTO}`);
  }

  getMaxMinEnc(){
  	return this.http.get(`${this.API_MAXMIN_ENCUESTADO}`);
  }
  getPuntosDepa(){
  	return this.http.get(`${this.API_PUNTOS_DEPARTAMENTO}`);
  }
  getDepa(){
    return this.http.get(`${this.API_DEPARTAMENTO}`);
  }
  createDepa(departamentos: Departamentos){
    return this.http.post(`${this.API_DEPARTAMENTO}`, departamentos);
  }
}

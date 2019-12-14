import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Encuestados} from '../models/encuestados';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EncuestadoServiceService {

	API_ENCUESTADO = 'http://localhost:3000/encuestados';
	API_MAXMIN_ENCUESTADO = "http://localhost:3000/max-min-encuestado";
	API_MAXMIN_DEPARTAMENTO = "http://localhost:3000/max-min-departamento";
	API_PUNTOS_DEPARTAMENTO = "http://localhost:3000/puntos-total-departamento";

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

}

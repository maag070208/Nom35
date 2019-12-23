import { Component, OnInit, HostBinding } from '@angular/core';
import {EncuestadoServiceService} from '../../services/encuestado-service.service';
import {Encuestados} from 'src/app/models/encuestados'; 


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})


export class InicioComponent implements OnInit {
    //@HostBinding('class') classes = 'row';
	depas: any = [];

  constructor(private encuestadosService: EncuestadoServiceService) { }

  ngOnInit() {
  	this.getEncuestados();
  }

  getEncuestados() {
  	this.encuestadosService.getDepa()
  	.subscribe(
  		res =>{
  			this.depas = res;
  		},
  		err => console.log(err)
  	);
  }

}

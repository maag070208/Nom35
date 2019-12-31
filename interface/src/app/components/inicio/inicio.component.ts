import { Component, OnInit, HostBinding, Input } from '@angular/core';
import {EncuestadoServiceService} from '../../services/encuestado-service.service';
import {Encuestados} from 'src/app/models/encuestados'; 
import {Router} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})


export class InicioComponent implements OnInit {
    //@HostBinding('class') classes = 'row';
	depas: any = [];


  constructor(
    private encuestadosService: EncuestadoServiceService,
    private router: Router
    ) { }


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

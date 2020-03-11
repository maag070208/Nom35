import { Component, OnInit,TemplateRef  } from '@angular/core';
import {Router} from '@angular/router';
import { EncuestadoService } from './../../services/encuestado.service';
import { Encuestados } from './../../models/encuestados/encuestados';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.scss']
})

export class DepartamentosComponent implements OnInit {

 encuestado : Encuestados = {
   NoEncuestado: null,
   Departamento: '' ,
   PuntosEncuesta:0
  };
  public name: string;
 depa: any = [];

  constructor(
    private encuestadosService: EncuestadoService, private router: Router
  ) { }

  ngOnInit() {
    this.getDepas();
  }

  getDepas() {
  	this.encuestadosService.getDepa()
  	.subscribe(
  		res =>{
        this.depa = res;
        console.log(res);
  		},
  		err => console.log(err)
  	);
  }

  InsertDepa(){
    this.encuestadosService.insertEncuestado(this.encuestado)
    .subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/test']);
      },
      err => console.log(err)
    )
  }

 

}

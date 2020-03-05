import { Component, OnInit,TemplateRef  } from '@angular/core';
import {Router} from '@angular/router';
import { EncuestadoService } from './../../services/encuestado.service';
import { Encuestados } from './../../models/encuestados/encuestados';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.scss']
})

export class DepartamentosComponent implements OnInit {
 //@HostBinding('class') classes = 'row';
 form: FormGroup;
 modalRef: BsModalRef;
 depa: any = [];
 departamento: any = {NombreDepa: '', Imagen: ''};
 modalCallback: () =>void;

  constructor(
    private encuestadosService: EncuestadoService,
    private router: Router,
    private fb: FormBuilder,
    private modalService: BsModalService,
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

  private updateDepa(){
    this.form.setValue({
      NombreDepa: this.departamento.NombreDepa,
      Imagen: this.departamento.Imagen
    });
  }

  private addDepas(template){
    this.departamento = {NombreDepa: '', Imagen: ''};
    this.updateDepa();
    this.modalCallback= this.createDepa.bind(this);
    this.modalRef= this.modalService.show(template);
  }

   createDepa(){
    const newDepa ={
      NombreDepa: this.form.get('NombreDepa').value,
      Imagen: this.form.get('Imagen').value
    };
    this.modalRef.hide();
    this.encuestadosService.createDepa(newDepa).subscribe(this.getDepas);
  }
}

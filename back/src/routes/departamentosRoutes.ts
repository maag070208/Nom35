import { Router } from 'express';

import {departamentosController} from '../controllers/departamentosController';

class DepartamentoRoutes {

	public router: Router = Router();

	constructor(){
		this.config();
	}

	config():void{
		this.router.get('/', departamentosController.MostarDepartamento);
	}
}

const departamentoRoutes = new DepartamentoRoutes();
export default departamentoRoutes.router;
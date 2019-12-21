import { Router } from 'express';

import {departamentosController} from '../controllers/departamentosController';

class DepartamentosRoutes {

	public router: Router = Router();

	constructor(){
		this.config();
	}

	config():void{
		this.router.get('/', departamentosController.list);
	}
}

const departamentosRoutes = new DepartamentosRoutes();
export default departamentosRoutes.router;
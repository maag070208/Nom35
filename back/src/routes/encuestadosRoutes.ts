import { Router } from 'express';

import {encuestadosController} from '../controllers/encuestadosController';

class EncuestadosRoutes {

	public router: Router = Router();

	constructor(){
		this.config();
	}

	config():void{
		this.router.get('/', encuestadosController.list);
		this.router.post('/',encuestadosController.insert);
	}
}

const encuestadosRoutes = new EncuestadosRoutes();
export default encuestadosRoutes.router;


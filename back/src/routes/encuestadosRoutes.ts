import { Router } from 'express';

import {encuestadosController} from '../controllers/encuestadosController';

class EncuestadoRoutes {

	public router: Router = Router();

	constructor(){
		this.config();
	}

	config():void{
		this.router.get('/', encuestadosController.list);
		this.router.post('/', encuestadosController.insert);
	}
}

const encuestadoRoutes = new EncuestadoRoutes();
export default encuestadoRoutes.router;
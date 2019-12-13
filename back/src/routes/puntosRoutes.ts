import { Router } from 'express';

import {puntosController} from '../controllers/puntosController';

class PuntosRoutes {

	public router: Router = Router();

	constructor(){
		this.config();
	}

	config():void{
		this.router.get('/', puntosController.puntos);
	}
}

const puntosRoutes = new PuntosRoutes();
export default puntosRoutes.router;


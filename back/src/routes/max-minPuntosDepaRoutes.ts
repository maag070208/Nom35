import { Router } from 'express';

import {maxminPuntosDepaController} from '../controllers/max-minPuntosDepaController';

class MaxminPuntosDepaRoutes {

	public router: Router = Router();

	constructor(){
		this.config();
	}

	config():void{
		this.router.get('/', maxminPuntosDepaController.puntos);
	}
}

const maxminPuntosDepaRoutes = new MaxminPuntosDepaRoutes();
export default maxminPuntosDepaRoutes.router;
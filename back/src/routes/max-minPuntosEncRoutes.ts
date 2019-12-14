import { Router } from 'express';

import {maxminEncController} from '../controllers/max-minPuntosEncController';

class MaxminEncRoutes {

	public router: Router = Router();

	constructor(){
		this.config();
	}

	config():void{
		this.router.get('/', maxminEncController.list);
	}
}

const maxminEncRoutes = new MaxminEncRoutes();
export default maxminEncRoutes.router;


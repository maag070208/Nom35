import { Router } from 'express';

class EncuestadosRoutes {

	public router: Router = Router();

	constructor(){
		this.config();
	}

	config():void{
		this.router.get('/',(req, res)=>res.send('Encuestados'));
		
	}
}

const encuestadosRoutes = new EncuestadosRoutes();
export default encuestadosRoutes.router;


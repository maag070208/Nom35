import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import encuestadosRoutes from './routes/encuestadosRoutes'
import puntosRoutes from './routes/puntosRoutes';
import maxminPuntosDepaRoutes from './routes/max-minPuntosDepaRoutes';
import maxminEncRoutes from './routes/max-minPuntosEncRoutes';
import departamentosRoutes from './routes/departamentosRoutes';

class Server {

    public app: Application;

	constructor(){
		this.app = express();
		this.config();
		this.routes();
	}

	config(): void{
		this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
	}

	routes():void{
		this.app.use('/', indexRoutes);
		this.app.use('/encuestados', encuestadosRoutes);
		this.app.use('/puntos-total-departamento', puntosRoutes);
		this.app.use('/max-min-departamento', maxminPuntosDepaRoutes);
		this.app.use('/max-min-encuestado', maxminEncRoutes);
		this.app.use('/departamentos', departamentosRoutes);
	}

	start():void{
		this.app.listen(this.app.get('port'), () => {
			console.log('Server on port', this.app.get('port'));
		});
	}
}

const server = new Server();
server.start();

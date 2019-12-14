import { Request, Response } from 'express';
import pool from '../database';


class MaxminPuntosDepaController {

    public async puntos(req: Request, res: Response): Promise<void> {    
     
     const result = await  pool.query('SELECT Departamento,PuntosEncuesta FROM Departamentos ORDER BY PuntosEncuesta DESC');
     res.json(result);
     
    }

    
}

export const maxminPuntosDepaController = new MaxminPuntosDepaController;
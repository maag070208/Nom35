import { Request, Response } from 'express';
import pool from '../database';


class MaxminEncController {

    public async list(req: Request, res: Response): Promise<void> {    
    
      const encuestados = await  pool.query('SELECT Departamento,PuntosEncuesta,NoEncuestado FROM Encuestados  ORDER BY PuntosEncuesta DESC');
      res.json(encuestados);
    }
    

}
export const maxminEncController = new MaxminEncController;

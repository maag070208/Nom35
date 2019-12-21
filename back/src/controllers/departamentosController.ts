import { Request, Response } from 'express';
import pool from '../database';


class DepartamentosController {

    public async list(req: Request, res: Response): Promise<void> {    
    
      const encuestados = await  pool.query('SELECT * FROM ListaDepartamentos');
      res.json(encuestados);
    }

    
}
export const departamentosController = new DepartamentosController;


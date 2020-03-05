import { Request, Response } from 'express';
import pool from '../database';


class DepartamentosController {

    public async list(req: Request, res: Response): Promise<void> {    
    
      const encuestados = await  pool.query('SELECT * FROM listaDepartamentos');
      res.json(encuestados);
    }

    public async insert(req: Request, res: Response): Promise<void> {    
    
     const result = await  pool.query('INSERT INTO listaDepartamentoss SET ?',[req.body]);
     res.json({'message': 'Departamento Guardado'});
    }

    
}
export const departamentosController = new DepartamentosController;


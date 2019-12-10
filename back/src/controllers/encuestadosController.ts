import { Request, Response } from 'express';
import pool from '../database';


class EncuestadosController {

    public async list(req: Request, res: Response): Promise<void> {    
    
      const encuestados = await  pool.query('SELECT * FROM Encuestados');
      res.json(encuestados);
    }

    public async insert(req: Request, res: Response): Promise<void> {    
    
     const result = await  pool.query('INSERT INTO Encuestados SET ?',[req.body]);
     res.json({'message': 'Guardado'});
    }
}
export const encuestadosController = new EncuestadosController;


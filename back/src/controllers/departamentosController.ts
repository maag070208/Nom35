import { Request, Response } from 'express';
import pool from '../database';


class DepartamentosController {

    public async MostarDepartamento(req: Request, res: Response): Promise<void> {    
     
     const result = await  pool.query('SELECT Departamento FROM Departamentos');
     res.json(result);
     
    }

    
}

export const departamentosController = new DepartamentosController;

import { Request, Response } from 'express';
import pool from '../database';


class PuntosController {

    public async puntos(req: Request, res: Response): Promise<void> {    
     
     const result = await  pool.query(' SELECT Departamento, sum(PuntosEncuesta) as TotalPuntos FROM Departamentos GROUP BY Departamento');
     res.json(result);
     
    }

    
}

export const puntosController = new PuntosController;
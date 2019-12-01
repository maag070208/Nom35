import { Request, Response } from 'express';
import pool from '../database';


class EncuestadosController {

    public index(req: Request, res: Response) {    
    
        pool.query('DESCRIBE Encuestados');
        res.json('encuestados');

    }
}
export const encuestadosController = new EncuestadosController;


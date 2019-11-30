"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class EncuestadosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Encuestados'));
    }
}
const encuestadosRoutes = new EncuestadosRoutes();
exports.default = encuestadosRoutes.router;

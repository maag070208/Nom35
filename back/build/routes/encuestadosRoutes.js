"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const encuestadosController_1 = require("../controllers/encuestadosController");
class EncuestadoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', encuestadosController_1.encuestadosController.list);
        this.router.post('/', encuestadosController_1.encuestadosController.insert);
    }
}
const encuestadoRoutes = new EncuestadoRoutes();
exports.default = encuestadoRoutes.router;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const puntosController_1 = require("../controllers/puntosController");
class PuntosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', puntosController_1.puntosController.puntos);
    }
}
const puntosRoutes = new PuntosRoutes();
exports.default = puntosRoutes.router;

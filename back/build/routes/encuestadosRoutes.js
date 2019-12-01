"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const encuestadosController_1 = require("../controllers/encuestadosController");
class EncuestadosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', encuestadosController_1.encuestadosController.index);
    }
}
const encuestadosRoutes = new EncuestadosRoutes();
exports.default = encuestadosRoutes.router;

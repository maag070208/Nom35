"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const departamentosController_1 = require("../controllers/departamentosController");
class DepartamentoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', departamentosController_1.departamentosController.MostarDepartamento);
    }
}
const departamentoRoutes = new DepartamentoRoutes();
exports.default = departamentoRoutes.router;

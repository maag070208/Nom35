"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const departamentosController_1 = require("../controllers/departamentosController");
class DepartamentosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', departamentosController_1.departamentosController.list);
    }
}
const departamentosRoutes = new DepartamentosRoutes();
exports.default = departamentosRoutes.router;

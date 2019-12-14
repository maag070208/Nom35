"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const max_minPuntosDepaController_1 = require("../controllers/max-minPuntosDepaController");
class MaxminPuntosDepaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', max_minPuntosDepaController_1.maxminPuntosDepaController.puntos);
    }
}
const maxminPuntosDepaRoutes = new MaxminPuntosDepaRoutes();
exports.default = maxminPuntosDepaRoutes.router;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const maxPuntosEncController_1 = require("../controllers/maxPuntosEncController");
class MaxEncRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', maxPuntosEncController_1.maxEncController.list);
    }
}
const maxEncRoutes = new MaxEncRoutes();
exports.default = maxEncRoutes.router;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const max_minPuntosEncController_1 = require("../controllers/max-minPuntosEncController");
class MaxminEncRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', max_minPuntosEncController_1.maxminEncController.list);
    }
}
const maxminEncRoutes = new MaxminEncRoutes();
exports.default = maxminEncRoutes.router;

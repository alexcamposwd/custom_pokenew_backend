"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/api/v1', (req, res) => {
    res.status(200).send({
        sucess: true,
        message: "Welcome to the API!",
        version: '1.0.0'
    });
});
exports.default = router;

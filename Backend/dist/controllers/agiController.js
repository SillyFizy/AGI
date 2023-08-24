"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("@decorators/express");
const mindsDB_1 = __importDefault(require("../mindsDB/mindsDB"));
let AgiController = class AgiController {
    getChat(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield (0, mindsDB_1.default)('', 'hello');
                console.log("mindsDB connected successfully");
                res.json(response);
            }
            catch (e) {
                console.log(`error occurred while attempting to access mindsDB : ${e}`);
                res.status(500).json({ message: 'error occurred while attempting to access mindsDB' });
            }
        });
    }
    sendMessage(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            let text = req.body.text;
            console.log(text);
            try {
                const response = yield (0, mindsDB_1.default)('', text);
                console.log("mindsDB connected successfully");
                res.json(response);
            }
            catch (e) {
                console.log(`error occurred while attempting to access mindsDB : ${e}`);
                res.status(500).json({ message: 'error occurred while attempting to access mindsDB' });
            }
        });
    }
};
__decorate([
    (0, express_1.Get)('/'),
    __param(0, (0, express_1.Res)()),
    __param(1, (0, express_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AgiController.prototype, "getChat", null);
__decorate([
    (0, express_1.Post)('/'),
    __param(0, (0, express_1.Res)()),
    __param(1, (0, express_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AgiController.prototype, "sendMessage", null);
AgiController = __decorate([
    (0, express_1.Controller)('/chat')
], AgiController);
exports.default = AgiController;

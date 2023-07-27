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
const user_1 = __importDefault(require("../entities/user"));
const hash_1 = require("../helpers/hash");
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const mindsDB_1 = __importDefault(require("../mindsDB/mindsDB"));
const agi_1 = __importDefault(require("../entities/agi"));
let AuthController = class AuthController {
    // @ts-ignore
    me(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.json({ user: req.user });
        });
    }
    signup(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let fields = ["username", "aginame", "password",];
            fields.forEach(field => {
                let value = req.body[field];
                if (value == null || value.trim() == "") {
                    return res.status(422).json({
                        message: `The field ${field} is required`
                    });
                }
            });
            const { username, aginame, password } = req.body;
            let user = new user_1.default();
            let agi = new agi_1.default();
            user.username = username;
            agi.aginame = aginame;
            let token = (0, hash_1.generateToken)({
                userId: user.id,
            });
            user.username = username;
            user.password = yield (0, hash_1.hash)(password);
            user.authToken = token;
            try {
                yield user.save();
                yield agi.save();
            }
            catch (error) {
                return res.status(422).json({
                    message: (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : "Something went wrong."
                });
            }
            let welcomeMessage = yield (0, mindsDB_1.default)(user.username, `your name is ${agi.aginame} and your goal is to welcome ${user.username}. say hi to him and tell him how happy you are for him to test our new chatbot that will be highly interactive with voice capability. also mention that he can press the mic button to input text using his voice. also your response should be as humanly as possible. make a joke or ask a question at the end of the message`);
            return res.json({
                user,
                welcomeMessage,
                agi,
                token
            });
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, password } = req.body;
            if (username == null || password == null) {
                return res.status(422).json({
                    message: "The username and password are required"
                });
            }
            const user = yield user_1.default.findOne({
                where: { username }, select: {
                    username: true, password: true
                }
            });
            if (user == null) {
                return res.status(401).json({
                    message: "The username or password is incorrect"
                });
            }
            const verified = yield (0, hash_1.verify)(password, user.password);
            if (verified) {
                let token = (0, hash_1.generateToken)({
                    userId: user.id,
                    username: user.username
                });
                user.authToken = token;
                try {
                    yield user.save();
                }
                catch (error) {
                    console.log(error);
                }
                return res.json({
                    token
                });
            }
            return res.status(401).json({
                message: "The username or password is incorrect"
            });
        });
    }
};
__decorate([
    (0, express_1.Get)('/me', [authMiddleware_1.default]),
    __param(0, (0, express_1.Req)()),
    __param(1, (0, express_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "me", null);
__decorate([
    (0, express_1.Post)('/signup'),
    __param(0, (0, express_1.Req)()),
    __param(1, (0, express_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signup", null);
__decorate([
    (0, express_1.Post)('/login'),
    __param(0, (0, express_1.Req)()),
    __param(1, (0, express_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
AuthController = __decorate([
    (0, express_1.Controller)('/auth')
], AuthController);
exports.default = AuthController;

"use strict";
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
exports.generateToken = exports.verify = exports.hash = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const saltRounds = 14;
const hash = (plainText) => __awaiter(void 0, void 0, void 0, function* () {
    const hashedValue = yield bcrypt_1.default.hash(plainText, saltRounds);
    console.log(hashedValue);
    return hashedValue;
});
exports.hash = hash;
const verify = (password, hashedPassword) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bcrypt_1.default.compare(password, hashedPassword);
});
exports.verify = verify;
const accessTokenSecretToken = 'this-is-my-secret-key';
const generateToken = (payload) => {
    return jsonwebtoken_1.default.sign(payload, accessTokenSecretToken, {});
};
exports.generateToken = generateToken;

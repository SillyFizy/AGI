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
const mindsdb_js_sdk_1 = __importDefault(require("mindsdb-js-sdk"));
function generatingResponse(user, text) {
    return __awaiter(this, void 0, void 0, function* () {
        yield mindsdb_js_sdk_1.default.connect({
            user: 'ahmed_hilly2002@yahoo.com',
            password: '4Bw#]#Etu#=m5Fa',
            host: 'https://cloud.mindsdb.com'
        });
        const queryOptions = {
            where: [
                `user = "${user}"`,
                `text = "${text}"`
            ]
        };
        return mindsdb_js_sdk_1.default.Models.queryModel('gpt_model', 1, 'response', 'mindsdb', queryOptions);
    });
}
exports.default = generatingResponse;

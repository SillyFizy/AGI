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
const express_1 = __importDefault(require("express"));
const express_2 = require("@decorators/express");
const AgiController_1 = __importDefault(require("./controllers/AgiController"));
const database_1 = __importDefault(require("./database"));
require("reflect-metadata");
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const AuthController_1 = __importDefault(require("./controllers/AuthController"));
const conversationController_1 = __importDefault(require("./controllers/conversationController"));
const port = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const launchServer = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, express_2.attachControllers)(app, [AgiController_1.default, AuthController_1.default, conversationController_1.default]).then(res => {
        console.log('the controllers are attached');
    });
    yield database_1.default.initialize().then(dataSource => {
        console.log("database connected");
    }).catch(e => {
        console.log(e);
    });
    app.listen(port, () => {
        console.log(`app listening on port ${port}`);
    });
});
launchServer();

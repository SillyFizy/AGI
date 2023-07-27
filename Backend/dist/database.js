"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const user_1 = __importDefault(require("./entities/user"));
const messages_1 = __importDefault(require("./entities/messages"));
const agi_1 = __importDefault(require("./entities/agi"));
const conversation_1 = __importDefault(require("./entities/conversation"));
const myDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "832021",
    database: "agi",
    entities: [
        user_1.default,
        messages_1.default,
        agi_1.default,
        conversation_1.default
    ],
    synchronize: true
});
exports.default = myDataSource;

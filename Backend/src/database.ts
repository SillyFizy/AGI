import {DataSource} from "typeorm";
import User from "./entities/user";
import Messages from "./entities/messages";
import Agi from "./entities/agi";
import Conversation from "./entities/conversation";


const myDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "832021",
    database: "agi",
    entities:[
        User,
        Messages,
        Agi,
        Conversation
    ],
    synchronize: true
})


export default myDataSource;
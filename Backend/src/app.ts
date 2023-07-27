import express from 'express';
import {attachControllers} from "@decorators/express";
import AgiController from "./controllers/AgiController";
import database from "./database";
import "reflect-metadata";

const app = express();
import cors from 'cors';
import myDataSource from "./database";
import AuthController from "./controllers/AuthController";
import ConversationController from "./controllers/conversationController";

const port = 3000;

app.use(cors());
app.use(express.json());

const launchServer = async () => {

    await attachControllers(app, [AgiController,AuthController,ConversationController]).then(res => {
        console.log('the controllers are attached');
    })


    await database.initialize().then(dataSource => {
        console.log("database connected")
    }).catch(e => {
        console.log(e)
    })


    app.listen(port, () => {
        console.log(`app listening on port ${port}`);
    });
}

launchServer()
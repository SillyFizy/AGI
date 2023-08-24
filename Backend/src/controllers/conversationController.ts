import authMiddleware, {RequestWithUser} from "../middlewares/authMiddleware";
import {Controller, Get, Post, Req, Res} from "@decorators/express";
import {Response} from "express";
import Conversation from "../entities/conversation";
import Message from "../entities/messages";
import {Equal} from "typeorm";

const ACC_TOKEN = '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';
import {HfInference} from '@huggingface/inference';

const hf = new HfInference(ACC_TOKEN);


// @ts-ignore
@Controller('/conversation', [authMiddleware])
export default class ConversationController {


    @Get('/:conversationId/messages')
    async getMessages(@Req() req: RequestWithUser, @Res() res: Response) {
        let idNumber = Number(req.params.conversationId)
        let conversation = await Conversation.findOneBy({id: idNumber})
        if (conversation == null) {
            return res.status(404)
        }
        let messages = Message.find({
            where: {
                conversation: Equal(idNumber)
            }
        })
        res.json({messages})
    }

    @Post('/:conversationId/messages')
    async createMessage(@Req() req: RequestWithUser, @Res() res: Response) {

        let conversationId = Number(req.params.conversationId)
        let conversation = await Conversation.findOneBy({id: conversationId})
        if (conversation == null) {
            return res.status(404);
        }
        if (req.body.text == "") {
            return res.status(422).send();
        }
        let message = new Message();
        message.conversation = conversation;
        message.user = req.user;
        message.text = req.body.text;
        try {
            await message.save();
        } catch (e) {
            console.log(e)
        }
        res.json({message})
    }


    @Post('/')
    async createConversation(@Req() req: RequestWithUser, @Res() res: Response) {
        let conversation = new Conversation();
        conversation.text = ('Chat with ' + req.body.aginame);

        try {
            await conversation.save()
        } catch (e) {
            return res.status(500).json({
                message: 'Error occurred while attempting to create conversation'
            })
        }
    }

    @Get('/')
    async getAllMessages(@Req() req: RequestWithUser, @Res() res: Response) {
        return res.json({
            conversation: await Conversation.find({
                relations: {
                    messages: true
                }
            })
        })
    }
}

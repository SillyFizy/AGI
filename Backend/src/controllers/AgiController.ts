import {Controller, Get, Post, Req, Res} from "@decorators/express";
import {Response, Request} from "express";
import generatingResponse from "../mindsDB/mindsDB";

@Controller('/chat')
class AgiController {
    @Get('/')
    async getChat(@Res() res: Response, @Req() req: Request) {
        try {
            const response = await generatingResponse('Buddy', '')
            console.log("mindsDB connected successfully")
            res.json(response)
        } catch (e) {
            console.log(`error occurred while attempting to access mindsDB : ${e}`)
            res.status(500).json({message: 'error occurred while attempting to access mindsDB'})
        }
    }
    @Post('/')
    async sendMessage(@Res() res: Response, @Req() req: Request) {
        let text = req.body.text
        console.log(text)
        try {
            const response = await generatingResponse('', text)
            console.log("mindsDB connected successfully")
            res.json(response)
        } catch (e) {
            console.log(`error occurred while attempting to access mindsDB : ${e}`)
            res.status(500).json({message: 'error occurred while attempting to access mindsDB'})
        }
    }
}

export default AgiController;
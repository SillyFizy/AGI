import {Controller, Get, Post, Req, Res} from "@decorators/express";
import {Request, Response} from "express";
import User from "../entities/user";
import {generateToken, hash, verify} from "../helpers/hash";
import authMiddleware, {RequestWithUser} from "../middlewares/authMiddleware";
import generatingResponse from "../mindsDB/mindsDB";
import Agi from "../entities/agi";
import Conversation from "../entities/conversation";
import Message from "../entities/messages";


@Controller('/auth')
export default class AuthController {


    // @ts-ignore
    @Get('/me', [authMiddleware])
    async me(@Req() req: RequestWithUser, @Res() res: Response) {
        return res.json({user: req.user})
    }

    @Post('/signup')
    async signup(@Req() req: Request, @Res() res: Response) {

        let fields = ["username", "aginame", "password",];
        fields.forEach(field => {
            let value = req.body[field];
            if (value == null || value.trim() == "") {
                return res.status(422).json({
                    message: `The field ${field} is required`
                });
            }
        })

        const {username, aginame, password} = req.body;
        let user = new User();
        let agi = new Agi();
        user.username = username;
        agi.aginame = aginame;
        let token = generateToken({
            userId: user.id,
        })
        user.username = username;
        user.password = await hash(password);
        user.authToken = token
        try {
            await user.save();
            await agi.save();
        } catch (error: any) {
            return res.status(422).json({
                message: error?.message ?? "Something went wrong."
            })
        }
        let welcomeMessage = await generatingResponse(user.username, `your name is ${agi.aginame} and your goal is to welcome ${user.username}. say hi to him and tell him how happy you are for him to test our new chatbot that will be highly interactive with voice capability. also mention that he can press the mic button to input text using his voice. also your response should be as humanly as possible. make a joke or ask a question at the end of the message`)
        return res.json({
            user,
            welcomeMessage,
            agi,
            token
        });

    }

    @Post('/login')
    async login(@Req() req: Request, @Res() res: Response) {

        const {username, password} = req.body;
        if (username == null || password == null) {
            return res.status(422).json({
                message: "The username and password are required"
            });
        }

        const user = await User.findOne({
            where: {username}, select: {
                username: true, password: true
            }
        });
        if (user == null) {
            return res.status(401).json({
                message: "The username or password is incorrect"
            })
        }

        const verified = await verify(password, user.password);
        if (verified) {
            let token = generateToken({
                userId: user.id,
                username: user.username
            });

            user.authToken = token;
            try {
                await user.save();
            } catch (error) {
                console.log(error)
            }
            return res.json({
                token
            });
        }

        return res.status(401).json({
            message: "The username or password is incorrect"
        })
    }
}
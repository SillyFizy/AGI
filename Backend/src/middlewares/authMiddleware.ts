import {NextFunction, Request, Response} from "express";
import User from "../entities/user";


export interface RequestWithUser extends Request {
    user: User
}

export default async (req: RequestWithUser, res: Response, next: NextFunction) => {
    let authHeader = req.header("Authorization");
    console.log(authHeader)
    if (authHeader == null) {
        return res.status(401).json({
            message: "Unauthorized"
        })
    }
    let authToken = authHeader.split(" ").pop();
    if (authToken == null || authToken == authHeader) {
        return res.status(401).json({
            message: "Unauthorized"
        })
    }
    let user = await User.findOne({
            where: {authToken}, select: {
                username: true,
                password: true,
            }
        }
    );
    console.log(user?.authToken)
    if (user == null) {
        return res.status(401).json({
            message: "Unauthorized"
        })
    }
    req.user = user;

    next();
    console.log(user)
}
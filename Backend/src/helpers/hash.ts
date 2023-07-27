import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const saltRounds = 14;
const hash = async (plainText: string) => {
    const hashedValue = await bcrypt.hash(plainText, saltRounds);
    console.log(hashedValue);
    return hashedValue;
};

const verify = async (password: string, hashedPassword: string) => {
    return await bcrypt.compare(password, hashedPassword);
}

const accessTokenSecretToken = 'this-is-my-secret-key';

const generateToken = (payload: object) => {
    return jwt.sign(payload, accessTokenSecretToken, {})
}

export {hash, verify, generateToken}
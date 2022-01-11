import { Request, Response } from 'express'; 
import { User } from '../models/user.model';
import jwt from 'jsonwebtoken';
import { ENV_VARS } from '../index';

const token_secret = process.env.TOKEN_SECRET;

function index(req: Request, res: Response) {

    if (!req.headers.authorization) {
        return res.status(401).json({
            error: 'Usuário não autorizado '
        });
    }

    if (!req.user) {
        return res.status(401).json({
            error: 'Usuário não autorizado '
        });
    }

    return res.status(200).json({
        userId: req.user
    });
}

/* Cria sessão  */
async function create(req: Request, res: Response) {
    try {
        const { email, password } = req.body;

        const userExists = await User.findOne({ email });
    
        if (!userExists) {
            return res.status(403).json({
                message: "Não foi possível autenticar."
            })
        }
    
        const isValid = await userExists.comparePassword(password);
    
        if (!isValid) {
            return res.status(401).json({
                message: 'Não foi possível autenticar.'
            });
        }
    
        const accessToken = createAccessToken(userExists._id);
    
        return res.status(200).json(
            {
                user: {
                    id: userExists._id,
                    name: userExists.name
                },
                accessToken
            }
        );
    } catch (error) {
        return res.status(400).json(
            {
                status: error
            }
        );
    }
}

function createAccessToken(userId: string) {
    
    return jwt.sign(
        {
            id: userId
        },
        ENV_VARS.token_secret as string,
        {
            // expiresIn: 900 // 15min
            expiresIn: 86400 // 1d
        }
    );


}

export { create, index }
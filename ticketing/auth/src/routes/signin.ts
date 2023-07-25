import express, { Request, Response } from "express";
import { body } from "express-validator";
import jwt from "jsonwebtoken";
import { User } from "../models/user";
import { Password } from "../services/password";
import { validateRequest } from "../middlewares/validate-request";
import { BadRequestError } from "../errors/bad-request-error";

const router = express.Router();

router.post('/api/users/signin', 
[
    body('email')
        .isEmail()
        .withMessage('Email must be valid'),
    body('password')
        .trim()
        .isLength({ min: 4, max: 20 })
        .withMessage('Password must be between 4 and 20 characters')
],
validateRequest,
async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
        console.log('Email in use');
        throw new BadRequestError('Invalid credentials');
    }
    const passwordsMatch = await Password.compare(existingUser.password, password);
    if (!passwordsMatch) {
        throw new BadRequestError('Invalid credentials');
    }
    req.session = {
        jwt: existingUser
    };
    res.status(200).send(existingUser);
    }
);

export { router as signinRouter };
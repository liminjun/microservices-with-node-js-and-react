import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/custom-error';
// import { RequestValidationError } from "../errors/request-validation-error";
// import { DatabaseConnectionError } from "../errors/database-connection-error";

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.log('Something went wrong', err);

    if (err instanceof CustomError) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }
    // if (err instanceof RequestValidationError) {
    //     return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    // }

    // if (err instanceof DatabaseConnectionError) {
    //     return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    // }

    res.status(400).send({
        message: err.message
    });
}
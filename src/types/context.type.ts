import { type Request, type Response } from "express";

interface Context {
    req: Request;
    res: Response;
    token?: string;
    user?: any
}

export default Context;

import { MiddlewareFn } from "type-graphql";
import Context from "../types/context.type";
import AppError from "../utilities/errorHandler/appError.utils";
import { Message } from "../constants/message.constant";
import webtokenService from "../utilities/webtoken.service";
import DotenvConfiguration from "../config/env.config";
import { LoginResponse } from '../schemas/allSchema/userschema/user.schema';
import jwr from 'jsonwebtoken';

export const authentication = (shouldTrowException: boolean, roles?: string[]): MiddlewareFn<Context> => {

    return async ({ context }, next) => {

        const { req } = context;

        const { authorization } = req?.headers


        if (!authorization && shouldTrowException) throw AppError.Unauthorized(Message.UNAUTHORIZED_MESSAGE);;

        const heaaderContent = authorization?.trim().split(" ");

        if (heaaderContent?.length !== 2 && shouldTrowException) throw AppError.Unauthorized(Message.UNAUTHORIZED_MESSAGE);

        let token = heaaderContent?.[1]

        try {
            if (token) {

                const isValidToken = webtokenService.verify(token, DotenvConfiguration.ACCESS_TOKEN_SECRET);

                if (!isValidToken) {
                    context.user = null;
                    throw AppError.Forbidden(Message.LOGIN_SESSION_OUT);
                }



                // const parsedUser = JSON.parse(JSON.stringify(token));
                const parsedUser = webtokenService.verify(token, DotenvConfiguration.ACCESS_TOKEN_SECRET);


                if (!roles?.includes(parsedUser?.role)) {
                    throw AppError.Unauthorized(Message.UNAUTHORIZED_MESSAGE)
                }


                context.user = parsedUser.id;



            } else {
                if (!roles)
                    throw AppError.BadRequest(Message.UNAUTHORIZED_MESSAGE);
                context.user = null;
            }
            return next();

        } catch (error: any) {

            throw AppError.BadRequest(Message.UNAUTHORIZED_MESSAGE);

        }



    }


}
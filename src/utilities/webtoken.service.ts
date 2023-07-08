import { IJwtOptions, IJwtPayload } from '../interface/Jwt.interfaces'
import DotenvConfiguration from '../config/env.config'
import { Role } from '../constants/global'
import jwt from 'jsonwebtoken'

class WebTokenService {
    sign(user: IJwtPayload, options: IJwtOptions, role: Role) {
        return jwt.sign(
            {
                id: user.id,
                role: role,
            },
            options.secret,
            {
                expiresIn: options.expiresIn,
            }
        )
    }

    verify(token: string, secret: string): any {
        return jwt.verify(token, secret)
    }

    generateAccessToken(user: IJwtPayload, role: Role) {
        return this.sign(
            user,
            {
                expiresIn: DotenvConfiguration.ACCESS_TOKEN_EXPIRES_IN,
                secret: DotenvConfiguration.ACCESS_TOKEN_SECRET,
            },
            role
        )
    }

    // generateTokens(user: IJwtPayload, role: Role) {
    //     const accessToken = this.sign(
    //         user,
    //         {
    //             expiresIn: DotenvConfiguration.ACCESS_TOKEN_EXPIRES_IN,
    //             secret: DotenvConfiguration.ACCESS_TOKEN_SECRET,
    //         },
    //         role
    //     )

    // const refreshToken = this.sign(
    //     user,
    //     {
    //         expiresIn: env.REFRESH_TOKEN_EXPIRES_IN,
    //         secret: env.REFRESH_TOKEN_SECRET,
    //     },
    //     role
    // )
    //     return { accessToken }
    // }
}

export default new WebTokenService()

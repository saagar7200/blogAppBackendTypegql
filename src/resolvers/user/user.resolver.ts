import { LoginResponse, UserRegisterSchema } from "../../schemas/allSchema/userschema/user.schema";
import { UserService } from "../../service/user.service";
import { Arg, Mutation, Query, Resolver, UseMiddleware } from "type-graphql";
import { RegisterInput, UserLoginInput } from "../../validators/uservalidor/user.validator";
import RequestValidator from "../../middlewares/requestValidation.middleware";
// import { UserService } from '../../service/user.service';
import { validate } from 'class-validator';
import webtokenService from "../../utilities/webtoken.service";
import { Role } from "../../constants/global";
import { Message } from '../../constants/message.constant';
import { Any } from "typeorm";


@Resolver()
export class userReolver {

    constructor(private readonly userService = new UserService,
    ) { };

    @Query(() => [UserRegisterSchema])
    async getAllUser(): Promise<any> {

        return await this.userService.getAll();

    }

    @Mutation(() => UserRegisterSchema)
    @UseMiddleware(RequestValidator.validate(RegisterInput))
    async createUser(@Arg('data') data: RegisterInput): Promise<any> {
        console.log('hahah', data)
        return await this.userService.create(data);

    }



    @Mutation(() => LoginResponse || String)
    @UseMiddleware(RequestValidator.validate(UserLoginInput))
    async login(@Arg('data') data: UserLoginInput): Promise<LoginResponse | string> {

        const alreadyExistUser = await this.userService.login(data)
        console.log("login object", data)

        if (!alreadyExistUser) return 'Login Failed';

        const userOption = {
            id: alreadyExistUser.id,
            email: alreadyExistUser.email
        }

        const accessToken = webtokenService.generateAccessToken(userOption, Role.USER)

        return {
            message: 'Login Successfull!!',
            accessToken
        }


    }



}


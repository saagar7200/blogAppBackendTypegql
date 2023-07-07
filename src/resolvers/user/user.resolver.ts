import { UserRegisterSchema } from "../../schemas/allSchema/userschema/user.schema";
import { UserService } from "../../service/user.service";
import { Arg, Mutation, Query, Resolver, UseMiddleware } from "type-graphql";
import { RegisterInput } from "../../validators/uservalidor/user.validator";
import RequestValidator from "../../middlewares/requestValidation.middleware";
// import { UserService } from '../../service/user.service';
import { validate } from 'class-validator';


@Resolver()
export class userReolver {

    constructor(private readonly userService = new UserService) { };



    @Mutation(() => UserRegisterSchema)
    @UseMiddleware(RequestValidator.validate(RegisterInput))
    async createUser(@Arg('data') data: RegisterInput): Promise<any> {
        console.log('hahah', data)
        return await this.userService.create(data);

    }

    @Query(() => [UserRegisterSchema])
    async getAllUser(): Promise<any> {

        return await this.userService.getAll();

    }



}


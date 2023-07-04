import { UserRegisterSchema } from "../../schemas/allSchema/user.schema";
import { UserService } from "../../service/user.service";
import { Arg, Mutation, Query, Resolver, UseMiddleware } from "type-graphql";
import { RegisterInput } from "../../validators/user.validator";
// import { UserService } from '../../service/user.service';


@Resolver()
export class userReolver {

    constructor(private readonly userService = new UserService) { };

    @Mutation(() => UserRegisterSchema)
    async createUser(@Arg('data') data: RegisterInput): Promise<any> {
        console.log('hahah', data)
        return await this.userService.create(data);

    }

    @Query(() => String)
    hello() {
        return 'Hello User';
    }

}


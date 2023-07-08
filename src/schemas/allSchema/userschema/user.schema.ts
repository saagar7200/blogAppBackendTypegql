import { BaseSchema } from "../../Base/base.schema";
import { Gender } from "../../../constants/enum";
import { Field, ObjectType, } from "type-graphql";
import { Message } from '../../../constants/message.constant';
import { Role } from "../../../constants/global";


@ObjectType()

export class UserRegisterSchema extends BaseSchema {
    @Field()
    email: string

    @Field({ nullable: true, })
    password: string

    @Field()
    firstName: string

    @Field(() => String, { nullable: true })
    middleName: string

    @Field()
    lastName: string

    @Field(() => Role)
    role: Role

    @Field(() => Gender)
    gender: Gender


}

// type B = Pick<UserRegisterSchema, "email" | "password">


// @ObjectType()
// export class LoginSchema extends (UserRegisterSchema as new () => Pick<UserRegisterSchema, "email" | "password">) { }

@ObjectType()
export class LoginResponse {

    @Field()
    message: string

    @Field()
    accessToken: string
}
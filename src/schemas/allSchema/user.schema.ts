import { BaseSchema } from "../Base/base.schema";
import { GENDER } from "../../constants/enum";
import { Field, ObjectType, } from "type-graphql";


@ObjectType()

export class UserRegisterSchema extends BaseSchema {
    @Field()
    email: string

    @Field()
    password: string

    @Field()
    firstName: string

    @Field(() => String, { nullable: true })
    middleName: string

    @Field()
    lastName: string

    @Field(() => GENDER)
    gender: GENDER


}
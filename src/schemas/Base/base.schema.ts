import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class BaseSchema {
    @Field({ nullable: true })
    id: String;

    @Field(() => Date, { nullable: true })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    updatedAt: Date;

    @Field(() => Date, { nullable: true })
    deletedAt: Date;
}
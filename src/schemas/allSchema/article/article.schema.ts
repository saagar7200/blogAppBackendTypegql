import { BaseSchema } from "../../../schemas/Base/base.schema";
import { Field, ObjectType } from "type-graphql";
import { Apollo } from '../../../config/apolloServer.config';



@ObjectType()

export class ArticleSchema extends BaseSchema {

    @Field(() => [String], { nullable: true })
    owner: string[];

    @Field()
    title: string

    @Field()
    heading: string

    @Field()
    body: string
}
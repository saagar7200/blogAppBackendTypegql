import { Field, InputType } from "type-graphql";
import { IsArray, IsNotEmpty, IsNumberString, IsString, isString, isTaxId } from 'class-validator';
import { Type } from "class-transformer";



@InputType()
export class ArticleInput {

    @Field()
    @IsNotEmpty()
    @IsString()
    title: string

    @Field(() => [String])
    @IsNotEmpty()
    @IsString()
    @IsArray()
    owner: string[]

    @Field()
    @IsNotEmpty()
    @IsString()
    heading: string

    @Field()
    @IsNotEmpty()
    @IsString()
    body: string

}

@InputType()
export class ArticleUpdateInput {
    @Field()
    @IsNotEmpty()
    @IsString()
    id: string

    @Field()
    @IsNotEmpty()
    @IsString()
    title: string

    @Field()
    @IsNotEmpty()
    @IsString()
    heading: string

    @Field()
    @IsNotEmpty()
    @IsString()
    body: string

}
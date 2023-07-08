import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, } from "class-validator";
import { Gender } from "../../constants/enum";
import { Field, InputType } from "type-graphql";


@InputType()
export class RegisterInput {

    @Field()
    @IsNotEmpty()
    @IsEmail()
    email: string

    @Field()
    @IsNotEmpty()
    @IsString()
    password: string

    @Field()
    @IsNotEmpty()
    @IsString()
    firstName: string

    @Field({ nullable: true })
    @IsOptional()
    @IsString()
    middleName: string

    @Field()
    @IsNotEmpty()
    @IsString()
    lastName: string

    @Field(() => Gender)
    @IsNotEmpty()
    @IsEnum(Gender)
    gender: Gender



}

@InputType()
export class UserLoginInput {
    @Field()
    @IsNotEmpty()
    @IsEmail()
    email: string

    @Field()
    @IsNotEmpty()
    @IsString()
    password: string


}
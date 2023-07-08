import { ArticleSchema } from "../../schemas/allSchema/article/article.schema";
import { Arg, Args, Ctx, Mutation, Query, Resolver, UseMiddleware } from "type-graphql";
import { ArticleInput, ArticleUpdateInput } from "../../validators/article/article.validator";
import { articleService } from "../../service/article.service";
import { Message } from "../../constants/message.constant";
import RequestValidator from "../../middlewares/requestValidation.middleware";
import { validate } from 'class-validator';
import { authentication } from "../../middlewares/auth.middleware";
import Context from "../../types/context.type";
import AppError from "../../utilities/errorHandler/appError.utils";



@Resolver()

export class ArticleResolver {


    constructor(private readonly articleservice = new articleService) { }

    @Query(() => [ArticleSchema])
    async getAllArticles() {
        return await this.articleservice.getAll();

    }

    @Query(() => ArticleSchema || null)
    async getArticleById(@Arg('id') id: string): Promise<ArticleSchema | null> {
        console.log(id)
        return await this.articleservice.getById(id);

    }

    @Mutation(() => String || null)
    @UseMiddleware(authentication(true, ["USER"]))
    async deleteArticle(@Arg('id') id: string,
        @Ctx() ctx: Context
    ): Promise<string | null> {

        const { user } = ctx;


        await this.articleservice.remove(id, user);

        return Message.DATA_DELETED_SUCCESSFULLY

    }


    @Mutation(() => ArticleSchema)
    @UseMiddleware(authentication(true, ["USER"]))
    @UseMiddleware(RequestValidator.validate(ArticleInput))
    async createArticle(@Arg('data') data: ArticleInput,
        @Ctx() ctx: Context): Promise<ArticleSchema> {
        const { user } = ctx;

        console.log("object", data, user)
        if (data.owner) {


            data.owner = [...data.owner, user]

        } else {
            data.owner = [user]

        }

        return await this.articleservice.create(data);
    }


    @Mutation(() => ArticleSchema)
    @UseMiddleware(authentication(true, ["USER"]))
    async UpdateArtice(@Arg('data') data: ArticleUpdateInput) {

    }



}
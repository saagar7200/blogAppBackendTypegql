import { ArticleSchema } from "../../schemas/allSchema/article/article.schema";
import { Arg, Args, Mutation, Query, Resolver, UseMiddleware } from "type-graphql";
import { ArticleInput, ArticleUpdateInput } from "../../validators/article/article.validator";
import { articleService } from "../../service/article.service";
import { Message } from "../../constants/message.constant";
import RequestValidator from "../../middlewares/requestValidation.middleware";
import { validate } from 'class-validator';



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

    @Query(() => String || null)
    async delete(@Arg('id') id: string): Promise<string | null> {
        await this.articleservice.remove(id);

        return Message.DATA_DELETED_SUCCESSFULLY

    }


    @Mutation(() => ArticleSchema)
    @UseMiddleware(RequestValidator.validate(ArticleInput))
    async createArticle(@Arg('data') data: ArticleInput): Promise<ArticleSchema> {
        console.log("object", data)
        return await this.articleservice.create(data);
    }


    @Mutation(() => ArticleSchema)
    async UpdateArtice(@Arg('data') data: ArticleUpdateInput) {

    }



}
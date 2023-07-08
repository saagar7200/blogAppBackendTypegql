import { ArticleSchema } from "../entities/allEntities/article/article.entity";
import dataSource from "../config/database.config";
import { ArticleInput, ArticleUpdateInput } from "../validators/article/article.validator";
import AppError from "../utilities/errorHandler/appError.utils";
import { NOT_FOUND } from '../../node_modules/http-status-codes/build/es/legacy';
import { Message } from "../constants/message.constant";


export class articleService {

    constructor(public articleRepositoty = dataSource.getRepository(ArticleSchema)) { }


    async getAll() {

        const articles = this.articleRepositoty.find();

        return articles;

    }

    async getById(id: string) {

        const article = await this.articleRepositoty.findOne({

            where: {
                id
            }

        });
        console.log('by id', id, article)

        if (!article) throw AppError.NotFound('Article not found')



        return article;

    }


    async remove(id: string, user: string) {

        console.log('user id', id, user)



        const article = await this.articleRepositoty.findOne({
            where: {
                id
            }
        })
        if (!article?.owner.includes(user)) throw AppError.BadRequest(Message.ONLY_AUTHOR_CAN_PERFORM_THIS_OPERATION)
        console.log("🚀 ~ file: article.service.ts:50 ~ articleService ~ remove ~ article:", article)



        if (!article) throw AppError.BadRequest(Message.DATA_DELETED_SUCCESSFULLY)



        return this.articleRepositoty.softDelete(id)

    }



    async create(data: ArticleInput) {
        const newArticle = new ArticleSchema()
        console.log("object servive", data)

        newArticle.title = data.title;
        newArticle.heading = data.heading;
        newArticle.body = data.body
        newArticle.owner = data.owner


        return await this.articleRepositoty.save(newArticle)
    }


    async update(data: ArticleUpdateInput) {

        const { id, ...others } = data;

        const article = await this.articleRepositoty.findOne({
            where: {
                id: data.id
            }
        })

        if (!article) throw AppError.NotFound('Article with provided id is not exists.');


        return await this.articleRepositoty.update(id, others)



    }

}
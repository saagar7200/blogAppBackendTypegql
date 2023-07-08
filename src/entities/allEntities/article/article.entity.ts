import { Base } from "../../../entities/base/base.entity";
import { Column, Entity } from "typeorm";



@Entity({
    name: 'article'
})

export class ArticleSchema extends Base {
    @Column('simple-array', { nullable: true })
    owner: string[]

    @Column()
    title: string

    @Column()
    heading: string

    @Column()
    body: string

}
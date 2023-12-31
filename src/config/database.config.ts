// import { UserEntity } from "../entities/user.entity"
import { DataSource } from "typeorm"
import DotenvConfiguration from "./env.config"


const dataSource = new DataSource({
    type: "mysql",
    host: DotenvConfiguration.DATABASE_HOST,
    port: Number(DotenvConfiguration.DATABASE_PORT),
    username: DotenvConfiguration.DATABASE_USERNAME,
    password: DotenvConfiguration.DATABASE_PASSWORD,
    database: DotenvConfiguration.DATABASE_NAME,
    entities: [`${__dirname}/../entities/**/*.entity{.ts,.js}`],
    synchronize: true,
    // dropSchema: true,
    logging: false
})

export default dataSource
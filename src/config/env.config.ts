import dotenv from 'dotenv';
dotenv.config();

export default class DotenvConfiguration {
    static NODE_ENV = process.env.NODE_ENV;
    static PORT = +process.env.PORT!;

    // *Database Configurations
    static DATABASE_HOST = process.env.DATABASE_HOST;
    static DATABASE_PORT = +process.env.DATABASE_PORT!;
    static DATABASE_USERNAME = process.env.DATABASE_USERNAME;
    static DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
    static DATABASE_NAME = process.env.DATABASE_NAME;
    static APP_NAME = process.env.APP_NAME;
    // *Other Configurations
    static DEBUG_MODE = process.env.DEBUG_MODE;
    static BASE_URL = process.env.BASE_URL;
    static ADDRESS_API = process.env.ADDRESS_API_URL;

    // File configuration

    // Mail configuration
    // static MAIL_HOST = process.env.MAIL_HOST!;
    // static MAIL_PORT = process.env.MAIL_PORT!;
    // static MAIL_USERNAME = process.env.MAIL_USERNAME!;
    // static MAIL_PASSWORD = process.env.MAIL_PASSWORD!;
    // static MAIL_FROM = process.env.MAIL_FROM!;

    //pagination
    static DEFAULT_PER_PAGE = +process.env.DEFAULT_PER_PAGE!;
}

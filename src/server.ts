import 'reflect-metadata'
import { expressMiddleware } from "@apollo/server/express4";

import { Apollo } from './config/apolloServer.config';
import dataSource from './config/database.config';
import express from 'express';
import http from 'http';
import path from 'path';
import cors from 'cors'
import bodyParser from 'body-parser';
// import { graphqlUploadExpress } from "graphql-upload/graphqlUploadExpress.js";
import DotenvConfiguration from "./config/env.config";


async function bootStrap() {

    // dataSource from db configuration

    await dataSource.initialize();

    // express from express
    const app = express();

    app.use(cors())
    // http server
    const httpServer = http.createServer(app);


    // Server 

    const server = await new Apollo().server(httpServer);


    // starting the server 

    await server.start();



    // static path for uploaded images
    app.use(express.static(path.join(__dirname, '/../public/uploads')));



    // request entry point

    app.use('/',
        cors<cors.CorsRequest>({ origin: '*' }),
        bodyParser.json(),
        // graphqlUploadExpress(),
        expressMiddleware(server, {
            context: async ({ req, res }) => ({
                req,
                res,
            })
        })
    )


    // listining to http server

    httpServer.listen(DotenvConfiguration.PORT, () => {
        console.log(
            `Server is running at http://localhost:${DotenvConfiguration.PORT}/graphql`
        );
    });


}

try {
    bootStrap()

} catch (error: unknown) {
    process.exit(1)
}

import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import http from 'http';
import { TypeGraphQL } from "./typeGraphQl.config";
import customFormatError from "../utilities/errorHandler/customFormatError";
import DotenvConfiguration from "./env.config";
import { Environment } from "../constants/enum";

export class Apollo {

    async server(httpServer: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>) {

        return new ApolloServer({
            schema: await new TypeGraphQL().Schema(),
            csrfPrevention: false,
            introspection: DotenvConfiguration.NODE_ENV === Environment.DEVELOPMENT ? true : false,
            includeStacktraceInErrorResponses: DotenvConfiguration.NODE_ENV === Environment.DEVELOPMENT ? true : false,
            formatError: (formattedError, error) => {

                console.log("🚀 ~ file: apolloServer.config.ts:22 ~ Apollo ~ server ~ formattedError:", formattedError)
                return customFormatError(formattedError);
            },
            plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
        });
    }
}
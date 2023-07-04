// import { ActLawAndInstructionsResolver } from "../resolver/allResolver/actLawAndInstructions.resolver";
// import { userResolver } from "../resolvers/user/user.resolver";
import { buildSchema } from "type-graphql";


export class TypeGraphQL {
    async Schema() {

        return await buildSchema({
            resolvers: [`${__dirname}/../resolvers/**/*.resolver{.ts,.js}`],
            dateScalarMode: "isoDate",
            validate: false,
            emitSchemaFile: false,


        });
    }
}
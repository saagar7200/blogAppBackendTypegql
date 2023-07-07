export enum Gender {
    MALE = "MALE",
    FEMALE = 'FEMALE',
    OTHERS = 'OTHERS'

}

import { registerEnumType } from "type-graphql";

registerEnumType(Gender, {
    name: 'Gender',
    description: 'Gender'
})

export enum Environment {
    DEVELOPMENT = "DEVELOPMENT",
    PRODUCTION = "PRODUCTION",
}

registerEnumType(Environment, {
    name: "Environment",
    description: "Environment"
})

export enum GraphQlErrorCode {
    GRAPHQL_PARSE_FAILED = "GRAPHQL_PARSE_FAILED", //The GraphQL operation string contains a syntax error.
    GRAPHQL_VALIDATION_FAILED = "GRAPHQL_VALIDATION_FAILED", //The GraphQL operation is not valid against the server's schema.
    BAD_USER_INPUT = "BAD_USER_INPUT", //The user input is invalid.
    UNAUTHENTICATED = "UNAUTHENTICATED", //The user is not authenticated.
    UNAUTHORIZED = "UNAUTHORIZED", //The user is not authorized.
    FORBIDDEN = "FORBIDDEN", //The user is not authorized.
    PERSISTED_QUERY_NOT_FOUND = "PERSISTED_QUERY_NOT_FOUND", //The persisted query was not found.
    PERSISTED_QUERY_NOT_SUPPORTED = "PERSISTED_QUERY_NOT_SUPPORTED", //The persisted query is not supported.
    BAD_REQUEST = "BAD_REQUEST", //The user input is invalid.
    INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR", //The server encountered an internal error and was unable to complete your request.
}

// *This message is thrown there is a validation error
export enum GraphQLErrorMessage {
    GRAPHQL_VALIDATION_ERROR = "Argument Validation Error",
}

// export enum status {
//   COMPLETED = "COMPLETED",
//   REJECTED = "REJECTED",
//   NEW = "NEW",
//   ON_PROGRESS = "ON_PROGRESS",
// }

// registerEnumType(status, {
//   name: "status",
//   description: "status",
// });

// export enum ComplainAction {
//   COMPLAINT_ON = "COMPLAINT_ON",
//   ACKNOWLEDGE = "ACKNOWLEDGE",
// }

// registerEnumType(ComplainAction, {
//   name: "complainAction",
//   description: "complainAction",
// });

// export enum AnalyticsOf {
//   NEWS = "NEWS",
//   SERVICES = "SERVICES",
//   COMPLAIN = "COMPLAIN",
//   FEEDBACK = "FEEDBACK",
// }
// registerEnumType(AnalyticsOf, {
//   name: "Analytics",
//   description: "Analytics",
// });

// export enum MediaType {
//   SERVICE = "SERVICE",
//   ACT_LAW_AND_INSTRUCTION = "ACT_LAW_AND_INSTRUCTION",
//   COMPLAIN = "COMPLAIN",
//   NOTICE = "NOTICE",
//   NEWS = "NEWS",
//   FEEDBACK = "FEEDBACK",
// }
// registerEnumType(MediaType, {
//   name: "Media_type",
//   description: "media type",
// });

export type MultiLanguage = {
    en: string;
    ne: string;
};



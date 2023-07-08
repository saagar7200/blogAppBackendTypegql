import DotenvConfig from "../config/env.config";

export enum STATUS {
    SUCCESS = "success",
    FAIL = "fail",
    ERROR = "error",
}

export const createdMessage = (title: string) => {
    return `${title} created successfully`;
};
export const updatedMessage = (title: string) => {
    return `${title} updated successfully`;
};

export const deletedMessage = (title: string) => {
    return `${title} deleted successfully`;
};

export const Message = {
    APP_CREATED: (port: number) =>
        `${DotenvConfig.APP_NAME} is running on http://localhost:${port}`,


    DB_CONNECTION_SUCCESS: "Database connection successful",
    DB_CONNECTION_FAIL: "Database connection failed",


    INTERNAL_SERVER_ERROR: "Something went wrong",





    EMAIL_NOT_SENT_ERROR: "Email not sent",
    INVALID_EMAIL_OR_PASSWORD_ERROR: "invalid email or password",
    PASSWORD_AND_CONFIRM_PASSWORD_MISMATCH_ERROR:
        "password and confirm password mismatch",

    EMAIL_SENT_SUCCESS: "Email sent successfully",
    INVALID_EMAIL: "Invalid email",
    INVALID_INPUT: "Invalid input",
    PASSWORD_NOT_MATCH: "Password not Match",
    DATA_NOT_FOUND: "Data Not Found",
    DATA_DELETED_SUCCESSFULLY: "Data deleted successfully",
    DATA_ADD_SUCCESSFULLY: "Data add successfully",
    UNAUTHORIZED_MESSAGE: "You are not authorized to access this resource",
    ONLY_AUTHOR_CAN_PERFORM_THIS_OPERATION: "Only Author can perform this operation.",
    LOGIN_SESSION_OUT: "Login session timeout.",

};

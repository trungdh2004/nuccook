import { HTTPSTATUS } from "../config/http.config";
import AppError from "./appError";


export class NotFoundException extends AppError {
    constructor(message: string = "Resource not found") {
        super(message,HTTPSTATUS.NOT_FOUND);
    }
}

export class AuthenticationError extends AppError {
    constructor(message: string = "Authentication Error") {
        super(message,HTTPSTATUS.UNAUTHORIZED);
    }
}

export class BadRequestException extends AppError {
    constructor(message: string = "Bad Request") {
        super(message,HTTPSTATUS.BAD_REQUEST);
    }
}

export class UnauthorizedException extends AppError {
    constructor(message: string = "Unauthorized") {
        super(message,HTTPSTATUS.UNAUTHORIZED);
    }
}

export class InvalidRequestException extends AppError {
    constructor(message: string = "Invalid Request") {
        super(message,HTTPSTATUS.BAD_REQUEST);
    }
}
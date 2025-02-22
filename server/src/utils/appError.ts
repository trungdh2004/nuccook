import { HTTPSTATUS, HttpStatusCode } from "../config/http.config";

class AppError extends Error {
    public statusCode: HttpStatusCode;

    constructor(message: string,code:HttpStatusCode = HTTPSTATUS.INTERNAL_SERVER_ERROR) {
        super(message);
        this.statusCode = code;
        Error.captureStackTrace(this, this.constructor);
    }
}

export default AppError
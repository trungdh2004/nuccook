import { Request } from "express";

export interface RequestUser extends Request {
    user?: {
        id:string;
        email:string;
        name:string;
        uuid:string;
    };
}
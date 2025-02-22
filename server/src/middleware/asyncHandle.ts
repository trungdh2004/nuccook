import { NextFunction, Request, Response } from "express"

type FunctionController = (req:Request,res:Response,next:NextFunction) => Promise<any>

export const asyncHandle = (fn:FunctionController):FunctionController => async (req:Request,res:Response,next:NextFunction) => {
    try {
        await fn(req,res,next)
    } catch (error) {
        next(error)
    }
}
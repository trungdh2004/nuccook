import { NextFunction, Request, Response } from "express"

type FunctionController = (req:Request,res:Response,next:NextFunction) => Promise<any>

export const asyncHandler = (fn:FunctionController):FunctionController => async (req,res,next) => {
    try {
        await fn(req,res,next)
    } catch (error) {
        next(error)
    }
}
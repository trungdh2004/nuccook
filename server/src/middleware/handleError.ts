import { ErrorRequestHandler } from "express";
import { HTTPSTATUS } from "../config/http.config";
import AppError from "../utils/appError";
import { ZodError } from "zod";

export const handleError:ErrorRequestHandler =(err,req, res,next):any => {


  if(err instanceof ZodError) {
    const errors = err?.issues.map((issue) => ({
      field: issue.path.join("."),
      message: issue.message,
    }));

    return res.status(HTTPSTATUS.BAD_REQUEST).json({
      message: `Invalid payload`,
      errors,
    });
  }
  

  if(err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
      status: err.statusCode
    })
  }

  return res.status(HTTPSTATUS.INTERNAL_SERVER_ERROR).json({
    message: `Internal Server Error`,
    error: err.message || "Unknown error occurred",
  });
}


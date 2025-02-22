import { ErrorRequestHandler } from "express";
import { HTTPSTATUS } from "../config/http.config";
import AppError from "../utils/appError";

export const handleError:ErrorRequestHandler =(err,req, res,next):any => {

  console.log("req",req.path);
  

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


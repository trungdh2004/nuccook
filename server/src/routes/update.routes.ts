import { NextFunction, Request, Response, Router } from "express";
import multer from "multer";
import { BadRequestException } from "../utils/catchError";
import { uploadController } from "../module/upload/upload.module";
import { uploadCloud } from "../config/cloudinaryMulter";

const uploadRouter = Router();

uploadRouter.post(
  "/single",
  (req: Request, res: Response, next: NextFunction) => {
    uploadCloud.single("image")(req, res, (err: any) => {
      if (err) {
        console.error("Error uploading image:", err);
        if (err instanceof multer.MulterError) {
          throw new BadRequestException("Multer error: " + err.message);
        } else if (err?.message?.includes("Cloudinary")) {
          throw new BadRequestException("Cloudinary error: " + err.message);
        } 
        throw new BadRequestException("Unknown error: ");
      }
      next();
    });
  },
  uploadController.uploadSinger
);

uploadRouter.post(
  "/multiple",
  (req: Request, res: Response, next: NextFunction) => {
    uploadCloud.array("images")(req, res, (err: any) => {
      if (err) {
        console.error("Error uploading image:", err);
        if (err instanceof multer.MulterError) {
          throw new BadRequestException("Multer error: " + err.message);
        } else if (err?.message?.includes("Cloudinary")) {
          throw new BadRequestException("Cloudinary error: " + err.message);
        } else {
          throw new BadRequestException("Unknown error: " + err.message);
        }
      }
      next();
    });
  },
  uploadController.uploadMultiple
);

uploadRouter.delete("/remove",uploadController.removeFile)

export default uploadRouter;

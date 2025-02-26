import { Request, Response } from "express";
import { HTTPSTATUS } from "../../config/http.config";
import { asyncHandler } from "../../middleware/asyncHandle";
import { BadRequestException } from "../../utils/catchError";
import cloudinary from "../../config/cloudinaryMulter";

export class UploadController {
  public uploadSinger = asyncHandler(async (req: Request, res: Response) => {
    const file = req.file;
    if (!file) {
      throw new BadRequestException("Upload lỗi");
    }
    return res.status(HTTPSTATUS.OK).json(file);
  });

  public uploadMultiple = asyncHandler(async (req: Request, res: Response) => {
    const files = req.files;

    if (!files) {
      throw new BadRequestException("Upload lỗi");
    }

    return res.status(HTTPSTATUS.OK).json(files);
  });

  public removeFile = asyncHandler(async (req: Request, res: Response) => {
    const { filename } = req.query;
    
    if (!filename) {
      throw new BadRequestException("fileName is required");
    }

    const {result} = await cloudinary.uploader.destroy(filename as string);

    if(result !== 'ok') {
      throw new BadRequestException("Remove failed")
    }
    return res.status(HTTPSTATUS.OK).json({ message: "remove success" });
  })
}

import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import { Request, Express } from "express";
import multer, { FileFilterCallback } from "multer";
import appConfig from "./app.config";
const { CloudinaryStorage } = require("multer-storage-cloudinary");
dotenv.config();

cloudinary.config({
  cloud_name: appConfig.CLOUDINARY_CLOUD_NAME,
  api_key: appConfig.CLOUDINARY_API_KEY,
  api_secret: appConfig.CLOUDINARY_API_SECRET,
});



const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: appConfig.CLOUDINARY_FOLDER_NAME,
    transformation: (req: Request, file: Express.Multer.File) => {
      const { width, height } = req.query;
      return [
        {
          width: width ? +width : "",
          height: height ? +height : "",
          crop: "fill",
        },
        { quality: 100 },
        {
          gravity: "center",
        },
        { effect: "sharpen" }, // Tăng cường độ sắc nét
        { dpr: "2.0" }, // Tăng độ phân giải cho màn hình Retina
        { fetch_format: "auto" },
      ];
    },
  },
  filename: function (req: Request, file: any, cb: FileFilterCallback) {
    cb(null, file.originalname);
  },
});

export const uploadCloud = multer({ storage });

export default cloudinary

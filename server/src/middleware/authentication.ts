import { NextFunction, Response } from "express";
import appConfig from "../config/app.config";
import { authService } from "../module/auth/auth.module";
import { RequestUser } from "../types/app.type";
import { AuthenticationError } from "../utils/catchError";
import { verifyToken } from "../utils/jwt";
import { asyncHandler } from "./asyncHandle";

const authentication = asyncHandler(
  async (req: RequestUser, res: Response, next: NextFunction): Promise<any> => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      throw new AuthenticationError("Chưa truyền token");
    }

    const { error, payload } = await verifyToken(token, {
      secret: appConfig.JWT.SECRET,
    });

    if (error || !payload) {
      throw new AuthenticationError(error);
    }

    const user = await authService.findById(payload.userId as string);

    req.user = {
      id: user._id as string,
      email: user.email,
      uuid: user.uuid,
      name: user.name,
    };

    next();
  }
);

export default authentication;

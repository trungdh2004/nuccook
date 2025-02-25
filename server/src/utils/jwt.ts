import { UserDocument } from "../models/User.schema";
import appConfig from "../config/app.config";
import jwt,{ SignOptions, VerifyOptions } from "jsonwebtoken";
import type { StringValue } from "ms";

export type PayloadToken = {
  userId: UserDocument["_id"];
};

type SignOptsAndSecret = SignOptions & {
  secret: string;
};

export const accessTokenSignOptions: SignOptsAndSecret = {
  expiresIn: appConfig.JWT.ACCESS_TOKEN_EXPIRES_IN as StringValue,
  secret: appConfig.JWT.SECRET,
};

export const refreshTokenSignOptions: SignOptsAndSecret = {
  expiresIn: appConfig.JWT.REFRESH_TOKEN_EXPIRES_IN as StringValue,
  secret: appConfig.JWT.REFRESH_SECRET,
};

export const signJwtToken = (
  payload: PayloadToken,
  options?: SignOptsAndSecret
) => {
  const { secret, ...opts } = options || accessTokenSignOptions;
  return jwt.sign(payload, secret, {
    ...opts,
  });
};

export const verifyToken = async (
  token: string,
  options?: VerifyOptions & { secret: string }
) => {
  try {
    const { secret = appConfig.JWT.SECRET, ...opts } = options || {};
    const payload = jwt.verify(token, secret, {
      ...opts,
    }) as PayloadToken;
    return { payload };
  } catch (err: any) {
    return {
      error: err.message,
    };
  }
};

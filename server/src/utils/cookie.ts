import { CookieOptions } from "express";
import appConfig from "../config/app.config";


export const defaultCookieRefresh: CookieOptions = {
  maxAge: 1000 * 60 * 60 * 24 * 30,
  httpOnly: true,
  path: "/",
  secure: appConfig.NODE_ENV === "production" ? true : false,
  sameSite:appConfig.NODE_ENV === "production" ? "none" : false ,
};

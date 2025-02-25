import { Request, Response } from "express";
import { AuthService } from "./auth.service";
import { BadRequestException } from "../../utils/catchError";
import { HTTPSTATUS } from "../../config/http.config";
import { RequestUser } from "../../types/app.type";
import { asyncHandler } from "../../middleware/asyncHandle";
import { defaultCookieRefresh } from "../../utils/cookie";

export class AuthController {
  private authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  public loginAuth = asyncHandler(async (req: Request, res: Response) => {

    console.log("zo login r");
    
    const { code } = req.body;

    if (!code) {
      throw new BadRequestException("Chưa truyền token google");
    }

    const data = await this.authService.login(code);

    return res
      .cookie("refresh", data.refreshToken, defaultCookieRefresh)
      .status(HTTPSTATUS.OK)
      .json({
        accessToken: data.accessToken,
        user: data.user,
      });
  });

  public getCurrent = asyncHandler(async (req: RequestUser, res: Response) => {
    const user = req?.user;

    if (!user) {
      throw new BadRequestException("Chưa đăng nhập");
    }

    const data = await this.authService.findById(user.id as string);

    return res.status(HTTPSTATUS.OK).json(data);
  });

  public refreshToken = asyncHandler(async (req: Request, res: Response) => {
    const token = req.cookies.refresh;

    if (!token) {
      throw new BadRequestException("Chưa đăng nhập");
    }

    const data = await this.authService.refreshToken(token);

    return res
      .cookie("refresh", data.refreshToken, defaultCookieRefresh)
      .status(HTTPSTATUS.OK)
      .json({
        accessToken: data.accessToken,
      });
  });

  public logoutAuth = asyncHandler(async (req: Request, res: Response) => {
    const token = req.cookies.refresh;

    if (!token) {
      throw new BadRequestException("Chưa đăng nhập");
    }

    await this.authService.logOut(token);

    return res.clearCookie("refresh").status(HTTPSTATUS.OK).json({
      message: "Đăng xuất thành công",
    });
  });


  public createRequest = asyncHandler(async (req: Request, res: Response) => {
    const locationIP = req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        const userAgent = req.headers['user-agent'];

      const ip = req.query.ip

      // await RequestModel.create({
      //   ip:locationIP,
      //   userAgent,
      //   ip2:ip
      // })

    return res.status(HTTPSTATUS.OK).json({
      message: "OK",
    });
  });
}

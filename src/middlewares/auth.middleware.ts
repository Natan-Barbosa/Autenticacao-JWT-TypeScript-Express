import { NextFunction, Request, Response } from "express";
import { Roles } from "@/constants/rules";
import { HttpException } from "@/utils/exception.model";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { JWT } from "@/utils/jwt.util";

interface ITokenProps {
  id: number;
  userName: string;
  email: string;
  userRole: Roles;
  iat: number;
  exp: number;
  sub: string;
}

export const authMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction,
  routerRoles?: Roles[]
) => {
  //Verify if user sended token
  const token = req.headers?.authorization?.replace("Bearer ", "");
  if (!token) {
    throw new HttpException(
      StatusCodes.UNAUTHORIZED,
      ReasonPhrases.UNAUTHORIZED
    );
  }

  //Verify and decode token
  const decodedToken = JWT.verifyAndDecode(token) as ITokenProps;

  //Verify if has roles in router to pass user
  if (!routerRoles) {
    req.user = decodedToken;
    next();
  }

  //Verify if user has roles to access route
  const hasAccess = routerRoles?.some((role) => role == decodedToken.userRole);
  if (!hasAccess) {
    throw new HttpException(
      StatusCodes.UNAUTHORIZED,
      ReasonPhrases.UNAUTHORIZED
    );
  }
  req.user = decodedToken;
  next();
};

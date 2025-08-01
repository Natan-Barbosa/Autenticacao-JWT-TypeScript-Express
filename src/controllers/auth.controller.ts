import { UserService } from "@/services/user.service";
import { JWT } from "@/utils/jwt.util";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { inject, injectable } from "tsyringe";

@injectable()
export class AuthController {
  constructor(@inject("UserService") private userService: UserService) {}

  public auth(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = this.userService.findUserByEmail(email);
    if (!user) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send({ message: "User Not Found" });
    }
    if (user.password != password) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send({ message: "User Or Password Invalid" });
    }
    const token = JWT.encode(user);
    return res.status(StatusCodes.OK).send({ accessToken: token });
  }
}

import { UserEntitie } from "@/entities/User.entitie";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import { HttpException } from "./exception.model";
import { StatusCodes } from "http-status-codes";

dotenv.config();

const secretKey = process.env.JWT_SECRET || "DefaultSecretKey";

export class JWT {
  public static encode(user: UserEntitie) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...rest } = user;
    const generatedJWT = jwt.sign(rest, secretKey, {
      expiresIn: "1h",
      subject: "Auth Api",
    });
    return generatedJWT;
  }

  public static verify(token: string) {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (!err) {
        throw new HttpException(
          StatusCodes.UNAUTHORIZED,
          "You're Not Authorized"
        );
      }
      return decoded;
    });
  }
}

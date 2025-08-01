import { Roles } from "@/constants/rules";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number;
        userName: string;
        email: string;
        userRole: Roles;
        iat: number;
        exp: number;
        sub: string;
      };
    }
  }
}

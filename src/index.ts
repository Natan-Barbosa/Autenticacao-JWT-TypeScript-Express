import "@/containers/user.container";
import { Application, NextFunction, Request, Response } from "express";
import express from "express";
import morgan from "morgan";
import BodyParser from "body-parser";
import { logger } from "./config/jet.logger.config";
import * as dotenv from "dotenv";
import { enviroment } from "./constants/enviroment";
import { AuthRouters } from "./routes/auth.route";
import { errorMiddleware } from "./middlewares/error.middleware";
import { StatusCodes } from "http-status-codes";
import { authMiddleware } from "./middlewares/auth.middleware";
import { Roles } from "./constants/rules";

dotenv.config();
const envConfig = process.env.NODE_ENV || enviroment.dev;

const app: Application = express();
const port = 3000;

if (envConfig == enviroment.dev) {
  app.use(morgan("common"));
}

app.get("/", (_req: Request, res: Response) => {
  res.status(StatusCodes.OK).send("Hello, This Is A Public Route");
});

app.get("/private", (req: Request, res: Response, next: NextFunction) => {
  authMiddleware(req, res, next);
  res.status(StatusCodes.OK).send("Hello, This Is A Private Route");
});

app.get("/private/admin", (req: Request, res: Response, next: NextFunction) => {
  authMiddleware(req, res, next, [Roles.admin]);
  res
    .status(StatusCodes.OK)
    .send("Hello, This Is A Private Route With Admin Credentials");
});

app.get("/private/user", (req: Request, res: Response, next: NextFunction) => {
  authMiddleware(req, res, next, [Roles.admin, Roles.user]);
  res
    .status(StatusCodes.OK)
    .send("Hello, This Is A Private Route With Admin And User Credentials");
});

app.use(BodyParser.json());
app.use(AuthRouters);
app.use(errorMiddleware);

app.listen(port, () => {
  if (envConfig == enviroment.dev) {
    logger.imp(`Server Is Runing In Dev Mode On Port: ${port}`);
  } else {
    logger.imp(`Server Is Runing In Production Mode On Port: ${port}`);
  }
});

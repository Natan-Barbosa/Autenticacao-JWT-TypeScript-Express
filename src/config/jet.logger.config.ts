import { Formats, JetLogger, LoggerModes } from "jet-logger";
import * as dotenv from "dotenv";
import { rootPath } from "root.path.config";
import { enviroment } from "@/constants/enviroment";

dotenv.config();
const envConfig = process?.env?.NODE_ENV || enviroment.dev;
dotenv.config({ path: `${rootPath}/EnvConfig/.env.${envConfig}` });

export const logger = new JetLogger(
  (process.env.JET_LOGGER_MODE as LoggerModes) || LoggerModes.Console,
  process.env.JET_LOGGER_FILEPATH || undefined,
  undefined,
  undefined,
  Formats.Line
);

import { StatusCodes } from "http-status-codes";

export class HttpException extends Error {
  statusCode: StatusCodes;

  constructor(statusCode: StatusCodes, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.name = "HttpException";
  }
}

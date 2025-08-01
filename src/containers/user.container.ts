import "reflect-metadata";
import { UserService } from "@/services/user.service";
import { container } from "tsyringe";

const userContainer = container.register("UserService", UserService);

export { userContainer };

import { UserEntitie, userRole } from "@/entities/User.entitie";
import { injectable } from "tsyringe";

@injectable()
export class UserService {
  private readonly users = [
    new UserEntitie(
      1,
      "Fake Name 1",
      "fakeemail1@test.com.br",
      "12345678",
      userRole.admin
    ),
    new UserEntitie(
      2,
      "Fake Name 2",
      "fakeemail2@test.com.br",
      "87654321",
      userRole.user
    ),
  ];

  public findUserByEmail(email: string) {
    return this.users.find((user) => user.email == email);
  }
}

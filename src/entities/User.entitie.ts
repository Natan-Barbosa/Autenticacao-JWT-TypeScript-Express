export enum userRole {
  user = "user",
  admin = "admin",
}

export class UserEntitie {
  id: number;
  userName: string;
  email: string;
  password: string;
  userRole: userRole;

  constructor(
    id: number,
    userName: string,
    email: string,
    password: string,
    userRole: userRole
  ) {
    this.id = id;
    this.userName = userName;
    this.email = email;
    this.password = password;
    this.userRole = userRole;
  }
}

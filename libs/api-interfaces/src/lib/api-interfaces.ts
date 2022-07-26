import { Role } from './enums/role.enum';

export type CreateUserBody = {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: Role;
};

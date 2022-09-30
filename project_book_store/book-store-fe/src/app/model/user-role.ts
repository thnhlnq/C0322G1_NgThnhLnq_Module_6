import {Users} from './users';
import {Roles} from './roles';

export interface UserRole {
  id?: number;
  status?: boolean;
  users?: Users;
  roles?: Roles;
}

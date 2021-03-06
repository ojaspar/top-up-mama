export interface IUserDetails {
  email: string;
}

export interface IAuth {
  email: string;
  password: string;
}

export interface IUser {
  id: string | number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface IFormControlOption {
  name: string | number | null;
  field: string | number;
  msg?: string;
  type?: string | number;
}

export interface UserLogin {
  userName: string;
  password: string;
}

export interface UserLogged {
  id: number;
  name: string;
  email: string;
}

export interface NewUser {
  userName: string;
  fullName: string;
  email: string;
  password: string;
}

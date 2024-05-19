import { User } from "./Models";

export interface ITask{
    id: string | null;
    priority: string | null;
    description: string | null;
    done: boolean | null;
    title: string | null;
}

export interface IUser{
    id: string | null;
    email: string | null;
    password: string | null;
    firstname: string | null;
    lastname: string | null;
}

export interface LoginResponse{
    user: User,
    token: string
}
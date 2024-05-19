import { ITask, IUser } from "./interfaces";

export class Task implements ITask{
    id: string | null;
    priority: string | null;
    description: string | null;
    done: boolean | null;
    title: string | null;

    constructor(task?: any){
        this.id = task.id != null ? task.id: null;
        this.priority = task.priority != null ? task.priority: null;
        this.description = task.description != null ? task.description: null;
        this.done = task.done != null ? task.done: null;
        this.title = task.title != null ? task.title: null;
    }
}

export class User implements IUser{
    id: string | null;
    email: string | null;
    password: string | null;
    firstname: string | null;
    lastname: string | null;

    constructor(user?: any){
        this.id = user.id != null? user.id: null;
        this.email = user.email != null ? user.email: null
        this.password = user.password != null ? user.password: null;
        this.firstname = user.firstname != null ? user.firstname: null;
        this.lastname = user.lastname != null ? user.lastname: null;
    }
    
}
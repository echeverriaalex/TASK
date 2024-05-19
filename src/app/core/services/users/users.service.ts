import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { User } from '../../models/Models';
//import { User } from '../../models/users/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private urlUsers:string = "http://localhost:4000/users";

  constructor(private httpClient: HttpClient) { }

  registerUser(newUser: User):Observable<User>{
    return this.httpClient.post<User>(this.urlUsers, newUser);
  }

  getUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.urlUsers);    
  }

  getUserByEmail(email:string):Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.urlUsers}?email=${email}`)
  }

  updateUser(user: User):Observable<User>{
    return this.httpClient.put<User>(`${this.urlUsers}?email=${user.email}`, user)
  }

  checkExistsUser(email:string){

  }

  setSession(){
    
  }

  


}

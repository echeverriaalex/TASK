import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../../models/Models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private urlTasks:string = "http://localhost:4000/tasks";

  constructor(private http: HttpClient) { }

  registerTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.urlTasks, task);
  }

  getAllTaskByUser(id: number): Observable<Task[]>{
    return this.http.get<Task[]>(`${this.urlTasks}?id=${id}`);
  }

}

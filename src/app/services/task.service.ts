import { Injectable } from '@angular/core';
// importamos la interface
import { Task } from '../Task';
// importamos la lista de tareas, es una variable tipo array con formato json dentro
import { TASKS } from '../mock-task';
//importamos un metodo observable, el metodo es asincronico
import { Observable, of } from 'rxjs';
// importamos los metodos para porder hacer peticiones get y post
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type":"application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl: string = "http://localhost:3000/tasks";
  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    //aplicando el hhtpcliente se hace asi
    return this.http.get<Task[]>(this.apiUrl);
    // const tasks = of(TASKS);
    // return tasks;
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }
}

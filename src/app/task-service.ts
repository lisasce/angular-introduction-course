import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {Task} from './models/task.model';
import { v4 as uuid } from "uuid";
import {HttpClient} from "@angular/common/http";
import {forkJoin, Observable, of, switchMap, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private http = inject(HttpClient);


  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('http://localhost:3000/tasks');
  }

  addTask(task: Partial<Task>) {
    return this.http.post<Task>('http://localhost:3000/tasks', {
      ...task,
      createdAt: new Date()
    });
  }

  getTask(id: string) {
    return this.http.get<Task>(`http://localhost:3000/tasks/${id}`);
  }

  updateTask(task:  Partial<Task>, id: string){
    return this.http.patch<Task>(`http://localhost:3000/tasks/${id}`, task);
  }

  deleteTask(id: string) {
    return this.http.delete<Task>(`http://localhost:3000/tasks/${id}`);
  }

  deleteAllTasks() {
    console.log('triggert')
    return this.getTasks().pipe(
        tap(tasks => console.log('Found tasks:', tasks.length)),
        switchMap(tasks => {
          if (tasks.length === 0) {
            console.log('No tasks to delete');
            return of([]);
          }
          console.log('Deleting', tasks.length, 'tasks');
          const deleteRequests = tasks.map(task => {
            console.log('Deleting task:', task.id);
            return this.deleteTask(task.id);
          });
          return forkJoin(deleteRequests);
        }),
        tap(result => console.log('All deletes completed:', result))
    );
  }

}

import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {Task} from './models/task.model';
import { v4 as uuid } from "uuid";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private http = inject(HttpClient);

  tasks: WritableSignal<Task[]> = signal([
    {
      id: uuid(),
      title: "Task 1",
      description: "Description of task 1",
      createdAt: new Date(),
    },
    {
      id: uuid(),
      title: "Task 2",
      description: "Description of task 2",
      createdAt: new Date(),
    },
  ]);

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('http://localhost:3000/tasks');
  }

  addTask(task: Partial<Task>): void {
    this.tasks.update(tasks => [
      ...tasks,
      {
        ...task,
        id: uuid(),
        createdAt: new Date(),
      }
    ]);
  }

  getTask(id: string): Task {
    return this.tasks().find((task) => task.id === id)!;
  }

  updateTask(task: Task) {
    this.tasks.update((tasks) => {
      return tasks.map((existingTask) => existingTask.id === task.id ? task : existingTask);
    });
  }

  deleteTask(id: string) {
    this.tasks.update((tasks) => {
      return tasks.filter((task) => task.id !== id);
    });
  }

  deleteAllTasks() {
    this.tasks.set([]);
  }

}

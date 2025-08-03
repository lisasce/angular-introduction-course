import {Injectable, signal, WritableSignal} from '@angular/core';
import {Task} from './models/task.model';
import { v4 as uuid } from "uuid";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
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

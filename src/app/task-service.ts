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
}

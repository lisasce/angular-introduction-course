import {Component, signal, WritableSignal} from '@angular/core';
import {Task} from "../models/task.model";
import { v4 as uuid } from "uuid";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-task-list',
  imports: [
    DatePipe
  ],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList {
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

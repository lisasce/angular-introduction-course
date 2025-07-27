import {Component, inject} from '@angular/core';
import {DatePipe} from "@angular/common";
import {TaskService} from '../task-service';

@Component({
  selector: 'app-task-list',
  imports: [
    DatePipe
  ],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList {
  private taskService = inject(TaskService);
  tasks = this.taskService.tasks;
}

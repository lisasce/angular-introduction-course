import {Component, inject} from '@angular/core';
import {DatePipe} from "@angular/common";
import {TaskService} from '../task-service';
import {RouterLink} from '@angular/router';
import {AlertBanner} from '../shared/components/alert-banner/alert-banner';

@Component({
  selector: 'app-task-list',
  imports: [
    DatePipe,
    RouterLink,
    AlertBanner
  ],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList {
  private taskService = inject(TaskService);
  tasks = this.taskService.tasks;

  deleteTask(id: string): void {
    this.taskService.deleteTask(id);
  }

  deleteAllTasks() {
    // TODO: delete all tasks
  }

}

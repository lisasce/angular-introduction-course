import {Component, inject} from '@angular/core';
import {AsyncPipe, DatePipe} from "@angular/common";
import {TaskService} from '../task-service';
import {RouterLink} from '@angular/router';
import {AlertBanner} from '../shared/components/alert-banner/alert-banner';

@Component({
  selector: 'app-task-list',
  imports: [
    DatePipe,
    RouterLink,
    AlertBanner,
    AsyncPipe
  ],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList {
  private taskService = inject(TaskService);
  tasks$ = this.taskService.getTasks();

  deleteTask(id: string): void {
    this.taskService.deleteTask(id).subscribe(() => {
      document.location.reload();
      // this is not best practice, but for simplicity we reload the page
    });
  }

  deleteAllTasks() {
    this.taskService.deleteAllTasks().subscribe(() => document.location.reload());
  }

}

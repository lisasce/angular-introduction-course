import { Component } from '@angular/core';
import {TaskList} from './task-list/task-list';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    TaskList,
    RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-introduction-course';
}

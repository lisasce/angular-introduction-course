import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {TaskService} from '../task-service';


@Component({
  selector: 'app-task-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
   private taskService = inject(TaskService);

  form = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  });

  submit() {
    this.taskService.addTask(this.form.value);
  }
}

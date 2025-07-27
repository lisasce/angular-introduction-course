import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-task-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {

  form = new FormGroup({
    name: new FormControl(''),
    description: new FormControl('')
  });

  submit() {
    console.log("Task created", this.form.value);
  }
}

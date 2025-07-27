import { Component } from '@angular/core';

import {FormControl, FormGroup, ReactiveFormsModule,} from '@angular/forms';

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {

  form = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  });
}

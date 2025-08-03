import {Component, inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {TaskService} from '../task-service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-task-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm implements OnInit {
   private taskService = inject(TaskService);
   private router = inject(Router);
   private route = inject(ActivatedRoute);
  private id: string | null = null;

  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.minLength(1)])
  });



  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");

    if (this.id ) {
      this.form.patchValue(this.taskService.getTask(this.id ));
    }
  }

  submit() {
    if (this.form.invalid) {
      console.log('Your form is invalid. Please check the fields.');
      console.log('Your Form: ', this.form.value);
      console.log('Title Errors: ', this.form.controls.title.errors);
      console.log('Description Errors: ', this.form.controls.description.errors);
    }
    if (this.id ) {
      const existingTask = this.taskService.getTask(this.id );
      this.taskService.updateTask({
        ...existingTask,
        ...this.form.value,
      });
    } else {
      this.taskService.addTask(this.form.value);
    }
    this.router.navigate(["/"]);
  }

}

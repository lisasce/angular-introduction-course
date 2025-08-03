import {Component, input, output} from '@angular/core';

@Component({
  selector: 'app-alert-banner',
  imports: [],
  templateUrl: './alert-banner.html',
  styleUrl: './alert-banner.css'
})
export class AlertBanner {
  message = input.required<string>();
  type = input.required<"info" | "error">();
  onSubmit = output<void>();
}

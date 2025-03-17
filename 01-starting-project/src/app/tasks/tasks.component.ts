import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() name?: string; // '?' tells TypeScript that we are okay with it being SET or not. Now we can't use the 'name' property in a place where it MUST be set. '|' creates a union type; it tells TypeScript that the type of value that can be stored in something is either of type STRING or type UNDEFINED.
}

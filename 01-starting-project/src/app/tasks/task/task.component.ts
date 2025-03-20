import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../user/user.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task; // we add an '!' if we know that we will ALWAYS have a task. Since we added required: true, this means we will ALWAYS recieve a task.
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}

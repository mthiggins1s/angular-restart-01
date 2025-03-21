import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule], // FormsModule is a collection of directives and features (for NgModel)
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>()
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  
  onCancel() {
    this.cancel.emit();
  }
}

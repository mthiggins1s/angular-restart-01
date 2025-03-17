import { Component, Input } from '@angular/core'; // added signal and computed from core.

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

// For the DUMMY_USERS; allows us to draw a user at random.
export class UserComponent {
  @Input({required: true}) avatar!: string; // with required: true, you tell Angular that this property must be SET.
  @Input({required: true}) name!: string;

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }
  
  onSelectUser() {}
}


// what we are doing here is we are adding a signal to the class, we then pass the inital value to the signal (DUMMY_USERS[randomIndex]) with the help of const randomIndex.
  // What is a signal? Its a container that contains a value (like DUMMY_USERS) and when you change the value, Angular will be notified and is then able to identify all places where the value is being used, and then its able to update those places. The main idea behind signals is that you dont just have inital values in them, but you can also change the value by CALLING the '.set()' method on the signal. Example: this.selectedUser.set(DUMMY_USERS[randomIndex])
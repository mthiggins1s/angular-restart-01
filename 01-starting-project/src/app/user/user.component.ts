import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users'; // importing DUMMY_USERS for the UserComponent.

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length) // allows us to get a random number between zero and the highest available index in the array.

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

// For the DUMMY_USERS; allows us to draw a user at random.
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex]; // Output: random id chosen from zero to highest index. We can now access selectedUser from inside the template of this component (all properties in this class are available in the templateUrl).
}

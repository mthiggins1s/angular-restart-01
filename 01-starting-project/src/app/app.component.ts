import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users'; // we expose the imported data in the template of this component by using "users = DUMMY_USERS".

@Component({ // decorator; TypeScipt feature to add metadata (comes from the Component in the Angular package).
  selector: 'app-root', // tells Angular what element it should look for so they can be replaced by this component and its markup (markup is stored in the templateUrl).
  standalone: true,
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.component.html', // contains the markup for the html element.
  styleUrl: './app.component.css', // contains the markup for the css element.
})
export class AppComponent { // this is being imported to bootstrapApplication in main.ts.
  users = DUMMY_USERS;

  onSelectUser(id: string) {
    console.log('selected user with id ' + id);
  }
}

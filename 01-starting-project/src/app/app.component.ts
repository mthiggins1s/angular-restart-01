import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component"; // we expose the imported data in the template of this component by using "users = DUMMY_USERS".

@Component({ // decorator; TypeScipt feature to add metadata (comes from the Component in the Angular package).
  selector: 'app-root', // tells Angular what element it should look for so they can be replaced by this component and its markup (markup is stored in the templateUrl).
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent, NgFor],
  templateUrl: './app.component.html', // contains the markup for the html element.
  styleUrl: './app.component.css', // contains the markup for the css element.
})
export class AppComponent { // this is being imported to bootstrapApplication in main.ts.
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!; // .find is a method built into JS; allows us to FIND a specific element in an array of elements. What this is doing, is that if this is returning the element we are looking for, it needs to read as TRUE, and FALSE if its not the one we're looking for.
      // IMPORTANT: its possible that we don't find a user at all, which can return 'undefined' as a value, the TasksComponent wont want that, so we add a '!' to convince TS that it will return a value other than undefined.
  }

  onSelectUser(id: string) {
    this.selectedUserId = id; // targeting the id:string above,
  }
}

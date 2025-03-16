import { Component } from "@angular/core"; // We need to import this Component Decorator from the Angular package in order to convert the HeaderComponent into a component.

@Component({  // adds the Component decorator.
  selector: 'app-header', // tells Angular which elements on the screen should be replaced by OUR own component.
  standalone: true, // marks this as a 'standalone' component.
  templateUrl: '../header/header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {} // we export this so it can be used in other files.
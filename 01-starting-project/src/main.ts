// Will be executed with the website is loaded.

import { bootstrapApplication } from '@angular/platform-browser'; // wants an Angular component and takes it and tries to replace the element tag of the custom component in the index.html file.

import { AppComponent } from './app/app.component'; // needs to be omitted (file name without extension).

bootstrapApplication(AppComponent).catch((err) => console.error(err));

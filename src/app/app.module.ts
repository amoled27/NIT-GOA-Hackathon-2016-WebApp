import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';


/* place information delivered by firebase below
/  once there remember to set your database's rules
/  (at https://console.firebase.google.com/project/.../database/rules)
/  for testing purposes this might be a good idea to start:
/  {
/    "rules": {
/      ".read": "true",
/      ".write": "auth != null"
/    }
/  }
*/
export const firebaseConfig = {
  
  	apiKey: "AIzaSyBHBhavEdOA7tWZ-S97kdlFFUJlEyMFzPg",
    authDomain: "nit-hackathon-2016.firebaseapp.com",
    databaseURL: "https://nit-hackathon-2016.firebaseio.com",
    storageBucket: "nit-hackathon-2016.appspot.com",
    messagingSenderId: "10195555034"


};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

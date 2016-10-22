import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule,AuthMethods, AuthProviders} from 'angularfire2';
import { RegisterComponent } from './register/register.component';

//auth
import  Authprovider = firebase.auth.AuthProvider;
import  {AuthService} from "./shared/security/auth/auth.service";


// router
import {RouterModule} from "@angular/router";
import  {routerConfig} from "./router.config";





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

export const myFirebaseAuthConfig = {
  provider : AuthProviders.Password,
  method : AuthMethods.Password
}

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routerConfig)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

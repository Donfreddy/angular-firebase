import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: 'AIzaSyAC1yHbMX62L6yQOnmCk6QVOGUcU1jWxJk',
      authDomain: 'angular-firebase-270572.firebaseapp.com',
      databaseURL: 'https://angular-firebase-270572.firebaseio.com',
      projectId: 'angular-firebase-270572',
      storageBucket: 'angular-firebase-270572.appspot.com',
      messagingSenderId: '174863311804'
    };
    firebase.initializeApp(config);
  }
}

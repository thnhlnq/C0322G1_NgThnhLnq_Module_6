import {Component} from '@angular/core';
import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDKQXPnmfxLXRUUqOTSG5fKttiaGEx4Qsk',
  databaseURL: 'https://chat-5e362-default-rtdb.asia-southeast1.firebasedatabase.app'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book-store-fe';

  constructor() {
    firebase.initializeApp(config);
  }
}

import { Component } from '@angular/core';
import { getMaxListeners } from 'cluster';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'MyFirstAngularApp';

  contacts = [];
  constructor() {
    this.contacts = [
      {
        ID: 1,
        first_name: 'Alex',
        last_name: 'Garcia Castro',
        email: 'alexandragarcia601@gmail.com'

      },
      {
        ID: 2,
        first_name: 'Carlos',
        last_name: 'Campos',
        email: 'carloscc@gmail.com'

      },
      {
        ID: 3,
        first_name: 'Elena',
        last_name: 'Castro',
        email: 'elena601@gmail.com'

      }
    ];
  }

  delete(e) {
    console.log('from delete e: ', e);
    this.contacts.splice(e, 1);
  }
  addRow() {
    this.contacts.unshift({
      ID: 99,
      first_name: 'Alex',
      last_name: 'Garcia',
      email: 'alex@gmail.com',

    });
  }

  save(row) {
    console.log('from save row')
  }
}

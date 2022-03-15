import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // creating a variable 'birthday' of type date.
  birthday: Date;

  // creating a variable 'currency' of type number.
  currency: number;

  // creating a variable 'user' of type any.
  user: any;

  constructor() {
    // setting the value of the variable 'birthday' to the current date.
    this.birthday = new Date();

    // setting the value of the variable 'currency' to 100.
    this.currency = 100;

    // setting the value of the variable 'user' to an object with the following properties:
    // name: 'Guy ABN',
    // birthYear: 2000,
    this.user = {name: 'Guy ABN', birthYear: 2000};
  }


}

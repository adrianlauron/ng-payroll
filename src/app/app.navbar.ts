import { Component } from '@angular/core';

@Component({
  selector: 'navbar-app',
  template: `
    <ul>
    <li *ngFor="let navBar of navBars">
        <a href="{{navBar.url}}">{{navBar.name}}</a>
    </li>
    </ul>
    `,
    styleUrls: [ 'navbar.css' ]
})
export class NavBars  {
  navBars = [
      {
          id: 1,
          name: 'Home',
          url: 'home',
      },
      {
          id: 2,
          name: 'Timesheet',
          url: 'timesheet',
      },
      {
          id: 3,
          name: 'Employees',
          url: 'employees',
      }

  ];
}

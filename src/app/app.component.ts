import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="header">
    <h1>{{name}}</h1>
    </div>
    <navbar-app></navbar-app>
    <employee-app></employee-app>
    `,
    styleUrls: ['styles.css']
})
export class AppComponent  { 
  name = 'Angular Payroll'; 
}

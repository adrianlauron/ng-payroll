import { Component } from '@angular/core';

@Component({
  selector: 'body-app',
  template: `
    <div>
        <h1>{{title}}</h1>
        <input type="text" (keypress) = "displayWhatIType($event)" />
        <p>{{typedValue}}</p>
    </div>
    `,
})
export class Body  {
    title = 'Body title';
    typedValue = '';

    displayWhatIType(event){
        this.typedValue += event.key;
    }
}

import { Component } from '@angular/core';
import { EmployeeModel } from './Employee';
import { EMPLOYEES } from './mock.employees';

@Component({
    selector: 'employee-app',
    template: `
        <ul>
            <li *ngFor="let employee of employees">
                <span>{{employee.employeeId}} -</span><span (click) = "onSelect(employee)">{{employee.name}}</span>
            </li>
        </ul>
        <div *ngIf="thisEmployee" id="employeeInfoBox">
            <h4>{{thisEmployee.name}}</h4>
            <p>Employee ID: {{thisEmployee.employeeId}}</p>
            <p [ngSwitch]="thisEmployee.email == ''">Email: 
                <input *ngSwitchCase="true" [(ngModel)]="thisEmployee.email" placeholder="Enter email here" /> 
                <span *ngSwitchCase="false">{{thisEmployee.email}}</span>
            </p>


        </div>
    `,
    styleUrls: ['lists.css','forms.css']
})
export class EmployeeComponent {
    employees: EmployeeModel[];
    thisEmployee: EmployeeModel;

    ngOnInit(){
        this.employees = EMPLOYEES;
    }

    onSelect(thisEmployee: EmployeeModel) {
        this.thisEmployee = thisEmployee;
    }
}
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var mock_employees_1 = require('./mock.employees');
var EmployeeComponent = (function () {
    function EmployeeComponent() {
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        this.employees = mock_employees_1.EMPLOYEES;
    };
    EmployeeComponent.prototype.onSelect = function (thisEmployee) {
        this.thisEmployee = thisEmployee;
    };
    EmployeeComponent = __decorate([
        core_1.Component({
            selector: 'employee-app',
            template: "\n        <ul>\n            <li *ngFor=\"let employee of employees\">\n                <span>{{employee.employeeId}} -</span><span (click) = \"onSelect(employee)\">{{employee.name}}</span>\n            </li>\n        </ul>\n        <div *ngIf=\"thisEmployee\" id=\"employeeInfoBox\">\n            <h4>{{thisEmployee.name}}</h4>\n            <p>Employee ID: {{thisEmployee.employeeId}}</p>\n            <p [ngSwitch]=\"thisEmployee.email == ''\">Email: \n                <input *ngSwitchCase=\"true\" [(ngModel)]=\"thisEmployee.email\" placeholder=\"Enter email here\" /> \n                <span *ngSwitchCase=\"false\">{{thisEmployee.email}}</span>\n            </p>\n\n\n        </div>\n    ",
            styleUrls: ['lists.css', 'forms.css']
        }), 
        __metadata('design:paramtypes', [])
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=app.employees.component.js.map
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
var NavBars = (function () {
    function NavBars() {
        this.navBars = [
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
    NavBars = __decorate([
        core_1.Component({
            selector: 'navbar-app',
            template: "\n    <ul>\n    <li *ngFor=\"let navBar of navBars\">\n        <a href=\"{{navBar.url}}\">{{navBar.name}}</a>\n    </li>\n    </ul>\n    ",
            styleUrls: ['navbar.css']
        }), 
        __metadata('design:paramtypes', [])
    ], NavBars);
    return NavBars;
}());
exports.NavBars = NavBars;
//# sourceMappingURL=app.navbar.js.map
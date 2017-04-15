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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var authentication_service_1 = require("../authentication/authentication.service");
var ToolbarComponent = (function () {
    function ToolbarComponent(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ToolbarComponent.prototype.logout = function () {
        this.authenticationService.logout();
    };
    ToolbarComponent.prototype.isLoggedIn = function () {
        return this.authenticationService.getCurrentUser() !== null;
    };
    ToolbarComponent.prototype.loggedInAs = function () {
        if (this.isLoggedIn()) {
            return this.authenticationService.getCurrentUser().username;
        }
        else {
            return '';
        }
    };
    return ToolbarComponent;
}());
ToolbarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sd-toolbar',
        template: "<md-toolbar color=\"primary\">   <a md-button routerLink=\"\">Mediacom Receiving</a>    <span class=\"fill-remaining-space\"></span>    <span *ngIf=\"isLoggedIn()\" class=\"info-label\">Logged in as: {{loggedInAs()}}</span>   <a md-button (click)=\"logout()\" routerLink=\"/login\" *ngIf=\"isLoggedIn()\">Log Out</a> </md-toolbar>",
        styles: [".fill-remaining-space{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto}.info-label{font-size:14px}"]
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], ToolbarComponent);
exports.ToolbarComponent = ToolbarComponent;

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var Configuration = (function () {
    function Configuration() {
        this.Server = 'http://localhost:19714/';
        this.appInsightsInstrumentationKey = '16630ce9-09c8-4cac-b2e0-b4fcbea412b4';
    }
    Configuration = __decorate([
        Injectable()
    ], Configuration);
    return Configuration;
}());
export { Configuration };
//# sourceMappingURL=app.constants.js.map
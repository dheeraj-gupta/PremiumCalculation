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
var http_1 = require("@angular/common/http");
var PremiumCalcComponent = (function () {
    function PremiumCalcComponent(http) {
        this.http = http;
        this.genderList = [
            { "Key": "SelectGender", "Value": "SelectGender" },
            { "Key": "Male", "Value": "Male" },
            { "Key": "Female", "Value": "Female" }
        ];
        this.displayPremiumSection = true;
        this.customer = { Gender: 'SelectGender', Name: '', DateOfBirth: '01/01/1920' };
        this.premiumInfo = '';
    }
    PremiumCalcComponent.prototype.calculatePremium = function () {
        var _this = this;
        this.http.post('/api/Premium', this.customer)
            .subscribe(function (result) {
            _this.premiumInfo = result;
            _this.displayPremiumSection = !_this.displayPremiumSection;
        }, function (error) {
            //HttpClient 'Http failure during parsing' error for valid json #18396
            //https://github.com/angular/angular/issues/18396 (use this code to read  calculate value  from web api)
            var JsonParseError = 'Http failure during parsing for';
            var matches = error.message.match(new RegExp(JsonParseError, 'ig'));
            if (error.status === 200 && matches.length === 1) {
                _this.premiumInfo = error.error.text; // returns sucessfull respone
                _this.displayPremiumSection = !_this.displayPremiumSection;
            }
            else {
                _this.errorMessage = 'Ooops! we encountered some issues. Please come back and check it out later.';
            }
        });
    };
    PremiumCalcComponent.prototype.recalculatePremium = function () {
        this.displayPremiumSection = !this.displayPremiumSection;
    };
    return PremiumCalcComponent;
}());
PremiumCalcComponent = __decorate([
    core_1.Component({
        templateUrl: './premiumcalculation.component.html'
    }),
    __metadata("design:paramtypes", [http_1.HttpClient])
], PremiumCalcComponent);
exports.PremiumCalcComponent = PremiumCalcComponent;
//# sourceMappingURL=premiumcalculation.component.js.map
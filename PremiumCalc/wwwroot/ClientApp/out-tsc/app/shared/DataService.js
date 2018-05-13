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
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
require("rxjs/add/operator/map");
require("rxjs/add/observable/of");
var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.classes = [];
        this.classdetail = [];
    }
    DataService.prototype.loadClasses = function () {
        var _this = this;
        return this.http.get("/api/classes")
            .map(function (data) {
            _this.classes = data;
            return true;
        });
    };
    DataService.prototype.loadClassDetail = function (classname) {
        var _this = this;
        return this.http.get("/api/classdetail" + "/" + classname)
            .map(function (data) {
            _this.classdetail = data;
            return true;
        });
    };
    DataService.prototype.getClasses = function () {
        return rxjs_1.Observable.of(this.initializeClasses());
    };
    DataService.prototype.getClassDetail = function () {
        return rxjs_1.Observable.of(this.initializeClassDetail());
    };
    DataService.prototype.initializeClasses = function () {
        // Return an initialized object
        return {
            className: null,
            location: null,
            teacherName: null
        };
    };
    DataService.prototype.initializeClassDetail = function () {
        // Return an initialized object
        return {
            className: null,
            studentFirstName: null,
            studentLastName: null,
            gpa: 0.0,
            age: 0
        };
    };
    DataService.prototype.saveClasses = function (classes) {
        var _this = this;
        return this.http.post("/api/classes", classes).map(function (data) {
            _this.classes = data;
            return true;
        });
    };
    DataService.prototype.calculatePremium = function (customer) {
        var _this = this;
        return this.http.post("/api/premium", customer).map(function (data) {
            _this.customer.premiumValue = data;
            return true;
        });
    };
    DataService.prototype.saveClassDetail = function (classDetail) {
        var _this = this;
        return this.http.post("/api/classdetail", classDetail).map(function (data) {
            _this.classdetail = data;
            return true;
        });
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=DataService.js.map
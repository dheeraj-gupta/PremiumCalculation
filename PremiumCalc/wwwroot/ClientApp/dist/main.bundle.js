webpackJsonp(["main"],{

/***/ "../../../../../ClientApp/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../ClientApp/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../ClientApp/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class='container'>\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../ClientApp/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.name = 'dheeraj';
        this.surname = 'Gupta';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../ClientApp/app/app.component.html"),
            styles: []
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../ClientApp/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../ClientApp/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__premiumcalculation_premiumcalculation_component__ = __webpack_require__("../../../../../ClientApp/app/premiumcalculation/premiumcalculation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_DataService__ = __webpack_require__("../../../../../ClientApp/app/shared/DataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    { path: '', redirectTo: 'PremiumCalc', pathMatch: 'full' },
    { path: 'PremiumCalc', component: __WEBPACK_IMPORTED_MODULE_5__premiumcalculation_premiumcalculation_component__["a" /* PremiumCalcComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__premiumcalculation_premiumcalculation_component__["a" /* PremiumCalcComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_8__angular_common__["a" /* APP_BASE_HREF */], useValue: '/' },
                __WEBPACK_IMPORTED_MODULE_6__shared_DataService__["a" /* DataService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../ClientApp/app/premiumcalculation/premiumcalculation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n   \r\n    <div class=\"row\" *ngIf=\"displayPremiumSection\">\r\n        <div class=\"col-sm-4 col-md-4 col-lg-4\">\r\n            <form (ngSubmit)=\"calculatePremium()\" #customerForm=\"ngForm\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"name\">Name</label>\r\n                    <input name=\"Name\" type=\"text\" class=\"form-control\" [(ngModel)]=\"customer.Name\" required />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"DateOfBirth\">Date Of Birth</label>\r\n                    <input name=\"DateOfBirth\" type=\"date\" class=\"form-control\" [(ngModel)]=\"customer.DateOfBirth\" required />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"Gender\">Gender</label>\r\n                    <select name=\"Gender\" class=\"form-control\" [(ngModel)]=\"customer.Gender\">\r\n                        <option [ngValue]=\"gender.Key\" *ngFor=\"let gender of genderList\">\r\n                            {{gender.Value}}\r\n                        </option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"customer.Gender=='SelectGender' || !customerForm.form.valid\">Calculate Premium</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"!displayPremiumSection\">\r\n        <div class=\"col-sm-4 col-md-4 col-lg-4\">\r\n            <div class=\"form-group\">\r\n                <p>{{ premiumInfo }}</p>\r\n                <button (click)=\"recalculatePremium()\" class=\"btn btn-success\">Recalculate Premium</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class='has-error' *ngIf='errorMessage'>{{errorMessage}}</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../ClientApp/app/premiumcalculation/premiumcalculation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PremiumCalcComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
    PremiumCalcComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../ClientApp/app/premiumcalculation/premiumcalculation.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PremiumCalcComponent);
    return PremiumCalcComponent;
}());



/***/ }),

/***/ "../../../../../ClientApp/app/shared/DataService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





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
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(this.initializeClasses());
    };
    DataService.prototype.getClassDetail = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(this.initializeClassDetail());
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
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../ClientApp/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../ClientApp/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../ClientApp/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../ClientApp/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../ClientApp/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\t<div style=\"color: blue;\">\r\n\t\t<h1>{{title}}</h1>\r\n\t\t<h3>{{description}}</h3>\r\n\t</div>\r\n \r\n\t<div style=\"width: 300px;\">\r\n\t\t<form (ngSubmit)=\"onSubmit()\">\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"item\">Item</label> <input type=\"text\"\r\n\t\t\t\t\tclass=\"form-control\" placeholder=\"Enter content...\" id=\"item\"\r\n\t\t\t\t\trequired [(ngModel)]=\"itemValue\" name=\"item\">\r\n\t\t\t</div>\r\n \r\n\t\t\t<div class=\"btn-group\">\r\n\t\t\t\t<button type=\"submit\" class=\"btn btn-success\">Submit</button>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n \r\n\t<h2>Content from Firebase</h2>\r\n\t<div class=\"col-md-3\">\r\n\t\t<pre *ngFor=\"let item of items | async\">{{item.content}} </pre>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__("./node_modules/angularfire2/database-deprecated/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = /** @class */ (function () {
    function AdminComponent(db) {
        this.itemValue = '';
        this.items = db.list('/items');
    }
    AdminComponent.prototype.onSubmit = function () {
        this.items.push({ content: this.itemValue });
        this.itemValue = '';
    };
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin',
            template: __webpack_require__("./src/app/admin/admin.component.html"),
            styles: [__webpack_require__("./src/app/admin/admin.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<<<<<<< HEAD\r\n=======\r\n<!-- \r\n>>>>>>> adadded44b5021b09a59fdb6d61bd16c736d3247\r\n<div class=\"container\" style=\"width:400px\">\r\n\t<div style=\"color: blue; margin-bottom: 20px\">\r\n\t\t<h1>{{title}}</h1>\r\n\t\t<h3>{{description}}</h3>\r\n\t</div>\r\n \r\n\t<form-upload></form-upload>\r\n\t\r\n\t<br/>\r\n\t<br/>\r\n\t\r\n\t<list-upload></list-upload>\r\n</div> -->\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'JavaSampleApproach';
        this.description = 'Angular5-Firebase Demo';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_tabs__ = __webpack_require__("./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__teacher_teacher_component__ = __webpack_require__("./src/app/teacher/teacher.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__student_student_component__ = __webpack_require__("./src/app/student/student.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__admin_admin_component__ = __webpack_require__("./src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__newuser_newuser_component__ = __webpack_require__("./src/app/newuser/newuser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__upload_form_upload_form_upload_component__ = __webpack_require__("./src/app/upload/form-upload/form-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__upload_list_upload_list_upload_component__ = __webpack_require__("./src/app/upload/list-upload/list-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__upload_details_upload_details_upload_component__ = __webpack_require__("./src/app/upload/details-upload/details-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__upload_form_upload_form_upload_mock_component__ = __webpack_require__("./src/app/upload/form-upload/form-upload-mock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__upload_list_upload_list_upload_mock_component__ = __webpack_require__("./src/app/upload/list-upload/list-upload-mock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__upload_details_upload_details_upload_mock_component__ = __webpack_require__("./src/app/upload/details-upload/details-upload-mock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__upload_upload_file_service__ = __webpack_require__("./src/app/upload/upload-file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__upload_upload_file_mock_service__ = __webpack_require__("./src/app/upload/upload-file-mock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__data_store_data_store_component__ = __webpack_require__("./src/app/data-store/data-store.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var appRoutes = [
    { path: 'stud', component: __WEBPACK_IMPORTED_MODULE_12__student_student_component__["a" /* StudentComponent */] },
    { path: 'teach', component: __WEBPACK_IMPORTED_MODULE_11__teacher_teacher_component__["a" /* TeacherComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_13__admin_admin_component__["a" /* AdminComponent */] },
    { path: 'newuser', component: __WEBPACK_IMPORTED_MODULE_15__newuser_newuser_component__["a" /* NewuserComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__teacher_teacher_component__["a" /* TeacherComponent */],
                __WEBPACK_IMPORTED_MODULE_12__student_student_component__["a" /* StudentComponent */],
                __WEBPACK_IMPORTED_MODULE_13__admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_15__newuser_newuser_component__["a" /* NewuserComponent */],
                __WEBPACK_IMPORTED_MODULE_16__upload_form_upload_form_upload_component__["a" /* FormUploadComponent */],
                __WEBPACK_IMPORTED_MODULE_17__upload_list_upload_list_upload_component__["a" /* ListUploadComponent */],
                __WEBPACK_IMPORTED_MODULE_18__upload_details_upload_details_upload_component__["a" /* DetailsUploadComponent */],
                __WEBPACK_IMPORTED_MODULE_24__data_store_data_store_component__["a" /* DataStoreComponent */],
                __WEBPACK_IMPORTED_MODULE_19__upload_form_upload_form_upload_mock_component__["a" /* FormUploadComponentMock */],
                __WEBPACK_IMPORTED_MODULE_21__upload_details_upload_details_upload_mock_component__["a" /* DetailsUploadComponentMock */],
                __WEBPACK_IMPORTED_MODULE_20__upload_list_upload_list_upload_mock_component__["a" /* ListUploadComponentMock */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                ),
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_tabs__["a" /* MatTabsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_22__upload_upload_file_service__["a" /* UploadFileService */], __WEBPACK_IMPORTED_MODULE_23__upload_upload_file_mock_service__["a" /* UploadFileServiceMock */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data-store/data-store.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/data-store/data-store.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  data-store works!\n</p>\n"

/***/ }),

/***/ "./src/app/data-store/data-store.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataStoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataStoreComponent = /** @class */ (function () {
    function DataStoreComponent() {
    }
    DataStoreComponent.prototype.ngOnInit = function () {
    };
    DataStoreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-data-store',
            template: __webpack_require__("./src/app/data-store/data-store.component.html"),
            styles: [__webpack_require__("./src/app/data-store/data-store.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DataStoreComponent);
    return DataStoreComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ":root {\r\n    --input-padding-x: .75rem;\r\n    --input-padding-y: .75rem;\r\n  }\r\n \r\n  \r\n  .login {\r\n    display: -ms-flexbox;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -ms-flex-align: center;\r\n    -ms-flex-pack: center;\r\n    -webkit-box-align: center;\r\n    align-items: center;\r\n    -webkit-box-pack: center;\r\n    justify-content: center;\r\n    padding-top: 40px;\r\n    padding-bottom: 40px;\r\n    background-color: #c02e2e;\r\n    background-image: url(\"http://www.wrbh.org/wp-content/uploads/2015/06/Books2.jpg\");\r\n  }\r\n \r\n  \r\n  .form-signin {\r\n    width: 100%;\r\n    max-width: 420px;\r\n    padding: 15px;\r\n    margin: 0 auto;\r\n  }\r\n \r\n  \r\n  .form-newuser {\r\n    width: 100%;\r\n    max-width: 420px;\r\n    padding: 15px;\r\n    margin: 0 auto;\r\n  }\r\n \r\n  \r\n  .form-label-group {\r\n    position: relative;\r\n    margin-bottom: 1rem;\r\n  }\r\n \r\n  \r\n  .form-label-group > input,\r\n  .form-label-group > label {\r\n    padding: var(--input-padding-y) var(--input-padding-x);\r\n  }\r\n \r\n  \r\n  .form-label-group > label {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 0; /* Override default `<label>` margin */\r\n    line-height: 1.5;\r\n    color: #24588d;\r\n    border: 1px solid none;\r\n    border-radius: .25rem;\r\n    -webkit-transition: all .1s ease-in-out;\r\n    transition: all .1s ease-in-out;\r\n  }\r\n \r\n  \r\n  .form-label-group input::-webkit-input-placeholder {\r\n    color: none;\r\n  }\r\n \r\n  \r\n  .form-label-group input:-ms-input-placeholder {\r\n    color: transparent;\r\n  }\r\n \r\n  \r\n  .form-label-group input::-ms-input-placeholder {\r\n    color: transparent;\r\n  }\r\n \r\n  \r\n  .form-label-group input::placeholder {color: transparent;}\r\n \r\n  \r\n  .form-label-group input:not(:placeholder-required) {\r\n    padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\r\n    padding-bottom: calc(var(--input-padding-y) / 3);\r\n  }\r\n \r\n  \r\n  .form-label-group input:not(:placeholder-required) ~ label {\r\n    padding-top: calc(var(--input-padding-y) / 3);\r\n    padding-bottom: calc(var(--input-padding-y) / 3);\r\n    font-size: 1px;\r\n    color: #777;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n  \r\n\r\n  <div class=\"login\">\r\n    <form class=\"form-signin\">\r\n      <form class=\"form-newuser\">\r\n      <div class=\"text-center mb-4\">\r\n        <img class=\"mb-4\" src=\"https://www.fi.edu/sites/default/files/styles/hero_large_two/public/Hero_VR_StockPhoto_iStock_85477625_XLARGE.jpg?itok=SShtDATj\" alt=\"\" width=\"250\" height=\"72\">\r\n        <h1 class=\"h3 mb-3 font-weight-normal\">Virtual Class Room</h1>\r\n        <!-- <p>Build form controls with floating labels via the <code>:placeholder-shown</code> pseudo-element. <a href=\"https://caniuse.com/#feat=css-placeholder-shown\">Works in latest Chrome, Safari, and Firefox.</a></p> -->\r\n      </div>\r\n\r\n      <div class=\"form-label-group\">\r\n        <input type=\"text\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\"  name=\"first\" required [(ngModel)]=\"username\" autocomplete=\"off\">\r\n        <label for=\"inputEmail\">User Name</label>\r\n      </div>\r\n\r\n      <div class=\"form-label-group\">\r\n        <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" name=\"second\" required [(ngModel)]=\"password\" autocomplete=\"off\">\r\n        <label for=\"inputPassword\">Password</label>\r\n      </div>\r\n\r\n      <!-- <div class=\"checkbox mb-3\">\r\n        <label>\r\n          <input type=\"checkbox\" value=\"remember-me\"> Remember me\r\n        </label>\r\n      </div> -->\r\n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"onSubmit()\">Sign in</button>\r\n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"onRoast()\">New user</button>\r\n      <!-- <p class=\"mt-5 mb-3 text-muted text-center\">&copy; 2017-2018</p> -->\r\n    </form>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(_router) {
        this._router = _router;
    }
    LoginComponent.prototype.onSubmit = function () {
        console.log("I am healthy");
        if (this.username == "admin" && this.password == "cleopatra") {
            console.log("I am healthy");
            this._router.navigate(['/admin']);
        }
        else if (this.username == 'student' && this.password == "manorama") {
            console.log("I am healthy");
            this._router.navigate(['/stud']);
        }
        else if (this.username == 'teacher' && this.password == "monopoly") {
            console.log("I am healthy");
            this._router.navigate(['/teach']);
        }
    };
    LoginComponent.prototype.onRoast = function () {
        console.log("I am atrocious");
        this._router.navigate(['/newuser']);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/newuser/newuser.component.css":
/***/ (function(module, exports) {

module.exports = "h3{\r\n    font-family: Calibri; \r\n    font-size: 25pt;         \r\n    font-style: normal; \r\n    font-weight: bold; \r\n    color:rgb(1, 3, 5);\r\n    text-align: center; \r\n    text-decoration: underline\r\n  }\r\n  body{\r\n    font-family: arial; font-size: 80%; line-height: 1.2em; width: 100%; margin: 0; background: #eee;\r\n    background-image: url(\"http://www.wrbh.org/wp-content/uploads/2015/06/Books2.jpg\");\r\n  }\r\n  table{\r\n    font-family: Calibri; \r\n    color:white; \r\n    font-size: 11pt; \r\n    font-style: normal;\r\n    font-weight: bold;\r\n    text-align:center;\r\n    background-color: SlateBlue; \r\n    border-collapse: collapse; \r\n    border: 2px solid navy\r\n  }\r\n  table.inner{\r\n    border: 0px\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/newuser/newuser.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\r\n<head>\r\n<title> Registration Form</title>\r\n\r\n</head>\r\n \r\n<body>\r\n<h3> REGISTRATION FORM</h3>\r\n<form>\r\n\r\n    \r\n\r\n        \r\n \r\n<table align=\"center\" cellpadding = \"10\">\r\n \r\n<!----- First Name ---------------------------------------------------------->\r\n<tr>\r\n<td>FIRST NAME</td>\r\n<td><input type=\"text\" name=\"First_Name\" maxlength=\"30\"/>\r\n(max 30 characters a-z and A-Z)\r\n</td>\r\n</tr>\r\n \r\n<!----- Last Name ---------------------------------------------------------->\r\n<tr>\r\n<td>LAST NAME</td>\r\n<td><input type=\"text\" name=\"Last_Name\" maxlength=\"30\"/>\r\n(max 30 characters a-z and A-Z)\r\n</td>\r\n</tr>\r\n<!----- Register for ----------------------------------------------------------->\r\n<tr>\r\n<td>REGISTER FOR</td>\r\n<td>\r\nTeacher <input type=\"radio\" name=\"Teacher\" value=\"Teacher\" />\r\nStudent <input type=\"radio\" name=\"Student\" value=\"Student\" />\r\n</td>\r\n</tr>\r\n \r\n<!----- Date Of Birth -------------------------------------------------------->\r\n<tr>\r\n<td>DATE OF BIRTH</td>\r\n \r\n<td>\r\n<select name=\"Birthday_day\" id=\"Birthday_Day\">\r\n<option value=\"-1\">Day:</option>\r\n<option value=\"1\">1</option>\r\n<option value=\"2\">2</option>\r\n<option value=\"3\">3</option>\r\n \r\n<option value=\"4\">4</option>\r\n<option value=\"5\">5</option>\r\n<option value=\"6\">6</option>\r\n<option value=\"7\">7</option>\r\n<option value=\"8\">8</option>\r\n<option value=\"9\">9</option>\r\n<option value=\"10\">10</option>\r\n<option value=\"11\">11</option>\r\n<option value=\"12\">12</option>\r\n \r\n<option value=\"13\">13</option>\r\n<option value=\"14\">14</option>\r\n<option value=\"15\">15</option>\r\n<option value=\"16\">16</option>\r\n<option value=\"17\">17</option>\r\n<option value=\"18\">18</option>\r\n<option value=\"19\">19</option>\r\n<option value=\"20\">20</option>\r\n<option value=\"21\">21</option>\r\n \r\n<option value=\"22\">22</option>\r\n<option value=\"23\">23</option>\r\n<option value=\"24\">24</option>\r\n<option value=\"25\">25</option>\r\n<option value=\"26\">26</option>\r\n<option value=\"27\">27</option>\r\n<option value=\"28\">28</option>\r\n<option value=\"29\">29</option>\r\n<option value=\"30\">30</option>\r\n \r\n<option value=\"31\">31</option>\r\n</select>\r\n \r\n<select id=\"Birthday_Month\" name=\"Birthday_Month\">\r\n<option value=\"-1\">Month:</option>\r\n<option value=\"January\">Jan</option>\r\n<option value=\"February\">Feb</option>\r\n<option value=\"March\">Mar</option>\r\n<option value=\"April\">Apr</option>\r\n<option value=\"May\">May</option>\r\n<option value=\"June\">Jun</option>\r\n<option value=\"July\">Jul</option>\r\n<option value=\"August\">Aug</option>\r\n<option value=\"September\">Sep</option>\r\n<option value=\"October\">Oct</option>\r\n<option value=\"November\">Nov</option>\r\n<option value=\"December\">Dec</option>\r\n</select>\r\n \r\n<select name=\"Birthday_Year\" id=\"Birthday_Year\">\r\n \r\n<option value=\"-1\">Year:</option>\r\n<option value=\"2012\">2012</option>\r\n<option value=\"2011\">2011</option>\r\n<option value=\"2010\">2010</option>\r\n<option value=\"2009\">2009</option>\r\n<option value=\"2008\">2008</option>\r\n<option value=\"2007\">2007</option>\r\n<option value=\"2006\">2006</option>\r\n<option value=\"2005\">2005</option>\r\n<option value=\"2004\">2004</option>\r\n<option value=\"2003\">2003</option>\r\n<option value=\"2002\">2002</option>\r\n<option value=\"2001\">2001</option>\r\n<option value=\"2000\">2000</option>\r\n \r\n<option value=\"1999\">1999</option>\r\n<option value=\"1998\">1998</option>\r\n<option value=\"1997\">1997</option>\r\n<option value=\"1996\">1996</option>\r\n<option value=\"1995\">1995</option>\r\n<option value=\"1994\">1994</option>\r\n<option value=\"1993\">1993</option>\r\n<option value=\"1992\">1992</option>\r\n<option value=\"1991\">1991</option>\r\n<option value=\"1990\">1990</option>\r\n \r\n<option value=\"1989\">1989</option>\r\n<option value=\"1988\">1988</option>\r\n<option value=\"1987\">1987</option>\r\n<option value=\"1986\">1986</option>\r\n<option value=\"1985\">1985</option>\r\n<option value=\"1984\">1984</option>\r\n<option value=\"1983\">1983</option>\r\n<option value=\"1982\">1982</option>\r\n<option value=\"1981\">1981</option>\r\n<option value=\"1980\">1980</option>\r\n</select>\r\n</td>\r\n</tr>\r\n \r\n<!----- Email Id ---------------------------------------------------------->\r\n<tr>\r\n<td>EMAIL ID</td>\r\n<td><input type=\"text\" name=\"Email_Id\" maxlength=\"100\" /></td>\r\n</tr>\r\n \r\n<!----- Mobile Number ---------------------------------------------------------->\r\n<tr>\r\n<td>MOBILE NUMBER</td>\r\n<td>\r\n<input type=\"text\" name=\"Mobile_Number\" maxlength=\"10\" />\r\n(10 digit number)\r\n</td>\r\n</tr>\r\n \r\n<!----- Gender ----------------------------------------------------------->\r\n<tr>\r\n<td>GENDER</td>\r\n<td>\r\nMale <input type=\"radio\" name=\"Gender\" value=\"Male\" />\r\nFemale <input type=\"radio\" name=\"Gender\" value=\"Female\" />\r\n</td>\r\n</tr>\r\n \r\n<!----- Address ---------------------------------------------------------->\r\n<tr>\r\n<td>ADDRESS <br /><br /><br /></td>\r\n<td><textarea name=\"Address\" rows=\"4\" cols=\"30\"></textarea></td>\r\n</tr>\r\n \r\n<!----- City ---------------------------------------------------------->\r\n<tr>\r\n<td>CITY</td>\r\n<td><input type=\"text\" name=\"City\" maxlength=\"30\" />\r\n(max 30 characters a-z and A-Z)\r\n</td>\r\n</tr>\r\n \r\n<!----- Pin Code ---------------------------------------------------------->\r\n<tr>\r\n<td>PIN CODE</td>\r\n<td><input type=\"text\" name=\"Pin_Code\" maxlength=\"6\" />\r\n(6 digit number)\r\n</td>\r\n</tr>\r\n \r\n<!----- State ---------------------------------------------------------->\r\n<tr>\r\n<td>STATE</td>\r\n<td><input type=\"text\" name=\"State\" maxlength=\"30\" />\r\n(max 30 characters a-z and A-Z)\r\n</td>\r\n</tr>\r\n \r\n<!----- Country ---------------------------------------------------------->\r\n<tr>\r\n<td>COUNTRY</td>\r\n<td><input type=\"text\" name=\"Country\" value=\"India\" readonly=\"readonly\" /></td>\r\n</tr>\r\n \r\n<!----- Hobbies ---------------------------------------------------------->\r\n \r\n<tr>\r\n<td>HOBBIES <br /><br /><br /></td>\r\n \r\n<td>\r\nDrawing\r\n<input type=\"checkbox\" name=\"Hobby_Drawing\" value=\"Drawing\" />\r\nSinging\r\n<input type=\"checkbox\" name=\"Hobby_Singing\" value=\"Singing\" />\r\nDancing\r\n<input type=\"checkbox\" name=\"Hobby_Dancing\" value=\"Dancing\" />\r\nSketching\r\n<input type=\"checkbox\" name=\"Hobby_Cooking\" value=\"Cooking\" />\r\n<br />\r\nOthers\r\n<input type=\"checkbox\" name=\"Hobby_Other\" value=\"Other\">\r\n<input type=\"text\" name=\"Other_Hobby\" maxlength=\"30\" />\r\n</td>\r\n</tr>\r\n \r\n<!----- Qualification---------------------------------------------------------->\r\n<tr>\r\n<td>QUALIFICATION <br /><br /><br /><br /><br /><br /><br /></td>\r\n \r\n<td>\r\n<table>\r\n \r\n<tr>\r\n<td align=\"center\"><b>Sl.No.</b></td>\r\n<td align=\"center\"><b>Examination</b></td>\r\n<td align=\"center\"><b>Board</b></td>\r\n<td align=\"center\"><b>Percentage</b></td>\r\n<td align=\"center\"><b>Year of Passing</b></td>\r\n</tr>\r\n \r\n<tr>\r\n<td>1</td>\r\n<td>Class X</td>\r\n<td><input type=\"text\" name=\"ClassX_Board\" maxlength=\"30\" /></td>\r\n<td><input type=\"text\" name=\"ClassX_Percentage\" maxlength=\"30\" /></td>\r\n<td><input type=\"text\" name=\"ClassX_YrOfPassing\" maxlength=\"30\" /></td>\r\n</tr>\r\n \r\n<tr>\r\n<td>2</td>\r\n<td>Class XII</td>\r\n<td><input type=\"text\" name=\"ClassXII_Board\" maxlength=\"30\" /></td>\r\n<td><input type=\"text\" name=\"ClassXII_Percentage\" maxlength=\"30\" /></td>\r\n<td><input type=\"text\" name=\"ClassXII_YrOfPassing\" maxlength=\"30\" /></td>\r\n</tr>\r\n \r\n<tr>\r\n<td>3</td>\r\n<td>Graduation</td>\r\n<td><input type=\"text\" name=\"Graduation_Board\" maxlength=\"30\" /></td>\r\n<td><input type=\"text\" name=\"Graduation_Percentage\" maxlength=\"30\" /></td>\r\n<td><input type=\"text\" name=\"Graduation_YrOfPassing\" maxlength=\"30\" /></td>\r\n</tr>\r\n \r\n<tr>\r\n<td>4</td>\r\n<td>Masters</td>\r\n<td><input type=\"text\" name=\"Masters_Board\" maxlength=\"30\" /></td>\r\n<td><input type=\"text\" name=\"Masters_Percentage\" maxlength=\"30\" /></td>\r\n<td><input type=\"text\" name=\"Masters_YrOfPassing\" maxlength=\"30\" /></td>\r\n</tr>\r\n \r\n<tr>\r\n<td></td>\r\n<td></td>\r\n<td align=\"center\">(10 char max)</td>\r\n<td align=\"center\">(upto 2 decimal)</td>\r\n</tr>\r\n</table>\r\n \r\n</td>\r\n</tr>\r\n \r\n<!----- Course ---------------------------------------------------------->\r\n<tr>\r\n<td>COURSES APPLIED FOR (TEACHERS) </td>\r\n<td>\r\nBCA\r\n<input type=\"radio\" name=\"Course_BCA\" value=\"BCA\">\r\nB.Com\r\n<input type=\"radio\" name=\"Course_BCom\" value=\"B.Com\">\r\nB.Sc\r\n<input type=\"radio\" name=\"Course_BSc\" value=\"B.Sc\">\r\nB.tech\r\n<input type=\"radio\" name=\"Course_Btech\" value=\"B.tech\">\r\n</td>\r\n</tr>\r\n \r\n\r\n <!----- Course ---------------------------------------------------------->\r\n<tr>\r\n    <td>COURSES OFFERED (STUDENTS) </td>\r\n    <td>\r\n    BCA\r\n    <input type=\"radio\" name=\"Course_BCA\" value=\"BCA\">\r\n    B.Com\r\n    <input type=\"radio\" name=\"Course_BCom\" value=\"B.Com\">\r\n    B.Sc\r\n    <input type=\"radio\" name=\"Course_BSc\" value=\"B.Sc\">\r\n    B.tech\r\n    <input type=\"radio\" name=\"Course_Btech\" value=\"B.tech\">\r\n    </td>\r\n    </tr>\r\n         \r\n<!----- Submit and Reset ------------------------------------------------->\r\n<tr>\r\n<td colspan=\"2\" align=\"center\">\r\n<input type=\"submit\" value=\"Submit\">\r\n<input type=\"reset\" value=\"Reset\">\r\n</td>\r\n</tr>\r\n</table>\r\n \r\n</form>\r\n \r\n</body>\r\n</html>"

/***/ }),

/***/ "./src/app/newuser/newuser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewuserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewuserComponent = /** @class */ (function () {
    function NewuserComponent() {
    }
    NewuserComponent.prototype.ngOnInit = function () {
    };
    NewuserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-newuser',
            template: __webpack_require__("./src/app/newuser/newuser.component.html"),
            styles: [__webpack_require__("./src/app/newuser/newuser.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewuserComponent);
    return NewuserComponent;
}());



/***/ }),

/***/ "./src/app/student/student.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\t.btn-danger{\r\n\t\tdisplay: none !important;\r\n\t}\r\n\r\n\t.mat-tab-labels{\r\n\t\tbackground-color: #00000091\r\n\t}\r\n\r\n\t.testme{\r\nopacity :1;\r\nbackground-color: #00000091\r\n\t}\r\n\r\n\tp{ line-height: 1em; }\r\n\r\n\th1, h2, h3, h4{\r\n    color: rgb(79, 9, 207);\r\n\tfont-weight: normal;\r\n\tline-height: 2.1em;\r\n\tmargin: 0 0 .5em 0;\r\n}\r\n\r\n\th1{ font-size: 1.7em; }\r\n\r\n\th2{ font-size: 1.5em; }\r\n\r\n\ta{\r\n\tcolor: rgb(241, 14, 82);\r\n\t-webkit-text-decoration: mediumorchid;\r\n\t        text-decoration: mediumorchid;\r\n\tfloat:left;\r\n    position:relative;\r\n \r\n    border: right 0.2px solid #d8d8d8;\r\n\tborder: left 0.2px solid #ffffff;\r\n\tfont-family:'Times New Roman', Helvetica, sans-serif;\r\n    font-size:1.00em;\r\n    font-weight:bold;\r\n    color:#666666;\r\n    text-shadow:0px 1px 0px #ffffff;\r\n \r\n    display: inline-block;\r\n    padding:0 1em;\r\n    line-height:2.5em;\r\n}\r\n\r\n\ta:hover,\r\n\ta:active{ text-decoration: underline; }\r\n\r\n\t/* you can structure your code's white space so that it is as readable for when you come back in the future or for other people to read and edit quickly */\r\n\r\n\tpage{\r\n\tfont-family: arial; font-size: 80%; line-height: 1.2em; width: 100%; margin: 0; background: #eee;\r\n\tbackground-image: url(\"http://www.wrbh.org/wp-content/uploads/2015/06/Books2.jpg\");\r\n}\r\n\r\n\t/* you can put your code all in one line like above */\r\n\r\n\t#page{ margin: 30px; }\r\n\r\n\t/* or on different lines like below */\r\n\r\n\t#logo{\r\n\twidth: 80%;\r\n\tmargin-top: 5px;\r\n\tfont-family: georgia;\r\n\tdisplay: inline-block;\r\n}\r\n\r\n\t.slider-holder\r\n{\r\n\twidth: 80px;\r\n\theight: 40px;\r\n\tbackground-color: yellow;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\tmargin-top: 0px;\r\n\ttext-align: center;\r\n\toverflow: center;\r\n}\r\n\r\n\t.image-holder\r\n{\r\n\twidth: 240px;\r\n\tbackground-color: red;\r\n\theight: 40px;\r\n\tclear: both;\r\n\tposition: center;\r\n\t\r\n\t-webkit-transition: center 2s;\r\n\ttransition: center 2s;\r\n}\r\n\r\n\t.slider-image\r\n{\r\n\tfloat: center;\r\n\tmargin: 0px;\r\n\tpadding: 0px;\r\n\tposition: center;\r\n}\r\n\r\n\t#slider-image-1:target ~ .image-holder\r\n{\r\n\tleft: 0px;\r\n}\r\n\r\n\t#slider-image-2:target ~ .image-holder\r\n{\r\n\tleft: -800px;\r\n}\r\n\r\n\t#slider-image-3:target ~ .image-holder\r\n{\r\n\tleft: -1600px;\r\n}\r\n\r\n\t.button-holder\r\n{\r\n\tposition: center;\r\n\ttop: -20px;\r\n}\r\n\r\n\t.slider-change\r\n{\r\n\tdisplay: inline-block;\r\n\theight: 10px;\r\n\twidth: 10px;\r\n\tborder-radius: 5px;\r\n\tbackground-color: brown;\r\n}\r\n\r\n\t/* but try and be as concise as possible */\r\n\r\n\t#nav{\r\n\twidth: 180%;\r\n\tdisplay: inline-block;\r\n\ttext-align: right;\r\n\tfloat:right;\r\n}\r\n\r\n\t#nav ul{}\r\n\r\n\t#nav ul li{\r\n\r\n\t\t\tdisplay: inline-block;\r\n\t\t\theight: 50px;\r\n\t\t}\r\n\r\n\t#nav ul li a{\r\n\t\t\t\tpadding: 10px;\r\n\t\t\t\tbackground: orange;\r\n\t\t\t\tcolor: white;\r\n\t\t\t}\r\n\r\n\t#nav ul li a:hover{\r\n\t\t\t\tbackground-color: #ffb424;\r\n\t\t\t\t-webkit-box-shadow: 0px 1px 1px #666;\r\n\t\t\t\t        box-shadow: 0px 1px 1px #666;\r\n\t\t\t}\r\n\r\n\t#nav ul li a:active{ background-color: #ff8f00; }\r\n\r\n\t#content{\r\n\tmargin: 30px 0;\r\n\tbackground: white;\r\n\tpadding: 20px;\r\n\tclear: both;\r\n}\r\n\r\n\t#footer{\r\n\tborder-bottom: 1px #ccc solid;\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\n\t#footer p{\r\n\t\ttext-align: right;\r\n\t\ttext-transform: uppercase;\r\n\t\tfont-size: 80%;\r\n\t\tcolor: grey;\r\n\t}\r\n\r\n\t/* multiple styles seperated by a , */\r\n\r\n\t#content,\r\nul li a{ -webkit-box-shadow: 0px 1px 1px #999; box-shadow: 0px 1px 1px #999; }"

/***/ }),

/***/ "./src/app/student/student.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\t\t\r\n\t<div id=\"page\">\r\n\t\t<div id=\"logo\">\r\n\t\t\t<h1><a>Welcome</a></h1>\r\n\t\t</div>\r\n\t\t <div >\r\n\r\n        <!--    <ul>\r\n\t\t\t\r\n\t\t\t\t<li><a href=\"#/home.html\">Home</a></li>\r\n\t\t\t\t<li><a>Latest Uploads</a></li>\r\n                <li><a>Quiz papers</a></li>\r\n                <li><a>Mock papers</a></li>\r\n\t\t\t\t<li><a>Courses</a></li>\r\n                <li><a>Course wise syllabus</a></li>\r\n\t\t\t\t<li><a>Videos</a></li>\r\n\t\t\t\t<li><a>Faculty session appointments</a></li>\r\n\t\t\t\t\r\n\t\t\t</ul>\r\n\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t  \r\n\t\t</div>\r\n\t\t\r\n\t\t<div id=\"content\">\r\n\t\t\t<h2>Home</h2>\r\n\t\t\t<p>\r\n\t\t\t\t<list-upload ></list-upload>\r\n\t\t\t</p>\r\n\t\t -->\r\n\r\n\t\t <mat-tab-group class=\"student-tab\">\r\n\t\t\t<mat-tab label=\"Latest Uploads\">\r\n\t\t\t\t\t<list-upload ></list-upload>\r\n\t\t\t\t\t<list-upload-mock ></list-upload-mock>\r\n\t\t\t</mat-tab>\r\n\t\t\t<mat-tab label=\"Quiz papers\">\r\n\t\t\t\t<list-upload ></list-upload>\r\n\t\t\t</mat-tab>\r\n\t\t\t<mat-tab label=\"Mock papers\">\r\n\t\t\t\t<list-upload-mock ></list-upload-mock>\r\n\t\t\t</mat-tab>\r\n\t\t\t<mat-tab label=\"Courses\"></mat-tab>\r\n\t\t\t<mat-tab label=\"Course wise syllabus\"></mat-tab>\r\n\t\t\t<mat-tab label=\"Videos\">\r\n\t\t\t\t\t<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/UB1O30fR-EE\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n\t\t\t\t<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/yfoY53QXEnI\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen> </iframe>\r\n\t\t\t\t<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/vEROU2XtPR8\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n\t\t\t</mat-tab>\r\n\t\t\t<mat-tab label=\"Forum\">\r\n\t\t\t\t<div class=\"container-fluid\">\r\n\t\t\t\t\r\n\t\t\t\t\t<div style=\"width: 300px;\">\r\n\t\t\t\t\t\t<form (ngSubmit)=\"onSubmit()\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t <input type=\"text\"\r\n\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"Enter message...\" id=\"item\"\r\n\t\t\t\t\t\t\t\t\trequired [(ngModel)]=\"itemValue\" name=\"item\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t \r\n\t\t\t\t\t\t\t<div class=\"btn-group\">\r\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success\">Submit</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t \r\n\t\t\t\t\t<h2>Chat</h2>\r\n\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t<pre *ngFor=\"let item of items | async\">{{item.content}} </pre>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</mat-tab>\r\n\t\t  </mat-tab-group>\r\n\t\t</div>\r\n\t\t<div id=\"footer\">\r\n\t\t\t\r\n\t\t</div>\r\n\t</div>\r\n\r\n\r\n\r\n\r\n\t\t\r\n\t\t"

/***/ }),

/***/ "./src/app/student/student.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__("./node_modules/angularfire2/database-deprecated/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudentComponent = /** @class */ (function () {
    function StudentComponent(db) {
        this.itemValue = '';
        this.items = db.list('/items');
    }
    StudentComponent.prototype.onSubmit = function () {
        this.items.push({ content: "Student " + this.itemValue });
        this.itemValue = '';
    };
    StudentComponent.prototype.ngOnInit = function () {
    };
    StudentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-student',
            template: __webpack_require__("./src/app/student/student.component.html"),
            styles: [__webpack_require__("./src/app/student/student.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]])
    ], StudentComponent);
    return StudentComponent;
}());



/***/ }),

/***/ "./src/app/teacher/teacher.component.css":
/***/ (function(module, exports) {

module.exports = "p{ line-height: 1em; }\r\nh1, h2, h3, h4{\r\n    color: rgb(79, 9, 207);\r\n\tfont-weight: normal;\r\n\tline-height: 2.1em;\r\n\tmargin: 0 0 .5em 0;\r\n}\r\nh1{ font-size: 1.7em; }\r\nh2{ font-size: 1.5em; }\r\na{\r\n\tcolor: rgb(241, 14, 82);\r\n\t-webkit-text-decoration: mediumorchid;\r\n\t        text-decoration: mediumorchid;\r\n\tfloat:left;\r\n    position:relative;\r\n \r\n    border-right:1px solid #d8d8d8;\r\n\tborder-left:1px solid #ffffff;\r\n\tfont-family:'Times New Roman', Helvetica, sans-serif;\r\n    font-size:1.00em;\r\n    font-weight:bold;\r\n    color:#666666;\r\n    text-shadow:0px 1px 0px #ffffff;\r\n \r\n    display: block;\r\n    padding:0 1em;\r\n    line-height:2.5em;\r\n}\r\na:hover,\r\n\ta:active{ text-decoration: underline; }\r\n/* you can structure your code's white space so that it is as readable for when you come back in the future or for other people to read and edit quickly */\r\nbody{\r\n\tbackground-image: url(\"http://www.wrbh.org/wp-content/uploads/2015/06/Books2.jpg\");\r\n}\r\n/* you can put your code all in one line like above */\r\n#page{ margin: 20px; }\r\n/* or on different lines like below */\r\n#logo{\r\n\twidth: 80%;\r\n\tmargin-top: 5px;\r\n\tfont-family: georgia;\r\n\tdisplay: inline-block;\r\n}\r\n/* but try and be as concise as possible */\r\n#nav{\r\n\twidth: 180%;\r\n\tdisplay: inline-block;\r\n\ttext-align: right;\r\n\tfloat:right;\r\n}\r\n#nav ul{}\r\n#nav ul li{\r\n\r\n\t\t\tdisplay: inline-block;\r\n\t\t\theight: 62px;\r\n\t\t}\r\n#nav ul li a{\r\n\t\t\t\tpadding: 20px;\r\n\t\t\t\tbackground: orange;\r\n\t\t\t\tcolor: white;\r\n\t\t\t}\r\n#nav ul li a:hover{\r\n\t\t\t\tbackground-color: #ffb424;\r\n\t\t\t\t-webkit-box-shadow: 0px 1px 1px #666;\r\n\t\t\t\t        box-shadow: 0px 1px 1px #666;\r\n\t\t\t}\r\n#nav ul li a:active{ background-color: #ff8f00; }\r\n#content{\r\n\tmargin: 30px 0;\r\n\tbackground: white;\r\n\tpadding: 20px;\r\n\tclear: both;\r\n}\r\n#footer{\r\n\tborder-bottom: 1px #ccc solid;\r\n\tmargin-bottom: 10px;\r\n}\r\n#footer p{\r\n\t\ttext-align: right;\r\n\t\ttext-transform: uppercase;\r\n\t\tfont-size: 80%;\r\n\t\tcolor: grey;\r\n\t}\r\n/* multiple styles seperated by a , */\r\n#content,\r\nul li a{ -webkit-box-shadow: 0px 1px 1px #999; box-shadow: 0px 1px 1px #999; }\r\n.showSlide {  \r\n\tdisplay: none  \r\n}\r\n.showSlide img {  \r\n\t\twidth: 100%;  \r\n\t}\r\n.slidercontainer {  \r\n\tmax-width: 1000px;  \r\n\tposition: relative;  \r\n\tmargin: auto;  \r\n}\r\n.left, .right {  \r\n\tcursor: pointer;  \r\n\tposition: absolute;  \r\n\ttop: 50%;  \r\n\twidth: auto;  \r\n\tpadding: 16px;  \r\n\tmargin-top: -22px;  \r\n\tcolor: white;  \r\n\tfont-weight: bold;  \r\n\tfont-size: 18px;  \r\n\t-webkit-transition: 0.6s ease;  \r\n\ttransition: 0.6s ease;  \r\n\tborder-radius: 0 3px 3px 0;  \r\n}\r\n.right {  \r\n\tright: 0;  \r\n\tborder-radius: 3px 0 0 3px;  \r\n}\r\n.left:hover, .right:hover {  \r\n\t\tbackground-color: rgba(115, 115, 115, 0.8);  \r\n\t}\r\n.content {  \r\n\tcolor: #eff5d4;  \r\n\tfont-size: 30px;  \r\n\tpadding: 8px 12px;  \r\n\tposition: absolute;  \r\n\ttop: 10px;  \r\n\twidth: 100%;  \r\n\ttext-align: center;  \r\n}\r\n.active {  \r\n\tbackground-color: #717171;  \r\n}\r\n/* Fading animation */\r\n.fade {  \r\n\t-webkit-animation-name: fade;  \r\n\t-webkit-animation-duration: 1.5s;  \r\n\tanimation-name: fade;  \r\n\tanimation-duration: 1.5s;  \r\n}  \r\n"

/***/ }),

/***/ "./src/app/teacher/teacher.component.html":
/***/ (function(module, exports) {

module.exports = "<!--              \r\n        <div id=\"page\">\r\n            <div id=\"logo\">\r\n                <h1><a>Dashboard</a></h1>\r\n            </div>\r\n            <div id=\"nav\">\r\n    \r\n                <ul>\r\n                \r\n                    <li><a href=\"#/home.html\">Home</a></li>\r\n                    <li><a>Live classroom session</a></li>\r\n\r\n                    \r\n\r\n                    \r\n                \r\n                </ul>\r\n                \r\n                \r\n                \r\n                  \r\n                <form-upload-mock></form-upload-mock>\r\n               \r\n                <label for=\"myCOURSE\">UPLOADS</label>\r\n                <input type=\"text\" id=\"myCOURSE\" name=\"COURSE\" list=\"COURSELIST\">\r\n    \r\n                <datalist id=\"COURSELIST\">\r\n                  <label for=\"suggestion\">or pick a type</label>\r\n                  <select id=\"suggestion\" name=\"altFruit\">\r\n                    <option>VIDEOS</option>\r\n                    <option>PRESENTATION</option>\r\n                    <option>SYLLABUS</option>\r\n                    <option>MOCK PAPERS</option>\r\n                    <option>QUIZ PAPERS</option>\r\n                  </select>\r\n                </datalist>\r\n                <button type=\"submit\" form=\"nameform\" value=\"Submit\">Submit</button>\r\n             -->\r\n\r\n\t\t\r\n\t<div id=\"page\">\r\n\t\t<div id=\"logo\">\r\n\t\t\t<h1><a>Welcome Teacher</a></h1>\r\n\t\t</div>\r\n\t\t <div >\r\n\r\n\t\t <mat-tab-group class=\"student-tab\">\r\n\t\t\t<mat-tab label=\"Latest Uploads\">\r\n\t\t\t\t\t<list-upload ></list-upload>\r\n\t\t\t\t\t<list-upload-mock ></list-upload-mock>\r\n\t\t\t</mat-tab>\r\n\t\t\t<mat-tab label=\"Quiz papers\">\r\n                <form-upload></form-upload>\r\n\t\t\t\t<list-upload ></list-upload>\r\n\t\t\t</mat-tab>\r\n\t\t\t<mat-tab label=\"Mock papers\">\r\n                <form-upload-mock></form-upload-mock>\r\n\t\t\t\t<list-upload-mock ></list-upload-mock>\r\n\t\t\t</mat-tab>\r\n\t\t\t<mat-tab label=\"Courses\"></mat-tab>\r\n\t\t\t<mat-tab label=\"Course wise syllabus\"></mat-tab>\r\n\t\t\t<mat-tab label=\"Videos\">\r\n\t\t\t\t\t<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/UB1O30fR-EE\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n\t\t\t\t<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/yfoY53QXEnI\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen> </iframe>\r\n\t\t\t\t<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/vEROU2XtPR8\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n\t\t\t</mat-tab>\r\n\t\t\t<mat-tab label=\"Forum\">\r\n\t\t\t\t<div class=\"container-fluid\">\r\n\t\t\t\t\r\n\t\t\t\t\t<div style=\"width: 300px;\">\r\n\t\t\t\t\t\t<form (ngSubmit)=\"onSubmit()\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t <input type=\"text\"\r\n\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"Enter message...\" id=\"item\"\r\n\t\t\t\t\t\t\t\t\trequired [(ngModel)]=\"itemValue\" name=\"item\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t \r\n\t\t\t\t\t\t\t<div class=\"btn-group\">\r\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success\">Submit</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t \r\n\t\t\t\t\t<h2>Chat</h2>\r\n\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t<pre *ngFor=\"let item of items | async\">{{item.content}} </pre>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</mat-tab>\r\n\t\t  </mat-tab-group>\r\n\t\t</div>\r\n\t\t<div id=\"footer\">\r\n\t\t\t\r\n\t\t</div>\r\n\t</div>\r\n\r\n\r\n\r\n\r\n\t\t\r\n\t\t\r\n"

/***/ }),

/***/ "./src/app/teacher/teacher.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__("./node_modules/angularfire2/database-deprecated/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeacherComponent = /** @class */ (function () {
    function TeacherComponent(db) {
        this.itemValue = '';
        this.items = db.list('/items');
    }
    TeacherComponent.prototype.onSubmit = function () {
        this.items.push({ content: "Teacher " + this.itemValue });
        this.itemValue = '';
    };
    TeacherComponent.prototype.ngOnInit = function () {
    };
    TeacherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-teacher',
            template: __webpack_require__("./src/app/teacher/teacher.component.html"),
            styles: [__webpack_require__("./src/app/teacher/teacher.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]])
    ], TeacherComponent);
    return TeacherComponent;
}());



/***/ }),

/***/ "./src/app/upload/details-upload/details-upload-mock.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsUploadComponentMock; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fileupload__ = __webpack_require__("./src/app/upload/fileupload.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upload_file_mock_service__ = __webpack_require__("./src/app/upload/upload-file-mock.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsUploadComponentMock = /** @class */ (function () {
    function DetailsUploadComponentMock(uploadService) {
        this.uploadService = uploadService;
    }
    DetailsUploadComponentMock.prototype.ngOnInit = function () {
    };
    DetailsUploadComponentMock.prototype.deleteFileUpload = function (fileUpload) {
        this.uploadService.deleteFileUpload(fileUpload);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__fileupload__["a" /* FileUpload */])
    ], DetailsUploadComponentMock.prototype, "fileUpload", void 0);
    DetailsUploadComponentMock = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'details-upload-mock',
            template: __webpack_require__("./src/app/upload/details-upload/details-upload.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__upload_file_mock_service__["a" /* UploadFileServiceMock */]])
    ], DetailsUploadComponentMock);
    return DetailsUploadComponentMock;
}());



/***/ }),

/***/ "./src/app/upload/details-upload/details-upload.component.html":
/***/ (function(module, exports) {

module.exports = "<a href=\"{{fileUpload.url}}\">{{fileUpload.name}}</a>\r\n\r\n<button (click)='deleteFileUpload(fileUpload)'\r\n\tclass=\"btn btn-danger btn-xs\" style=\"float: right\">Delete</button>\r\n"

/***/ }),

/***/ "./src/app/upload/details-upload/details-upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsUploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fileupload__ = __webpack_require__("./src/app/upload/fileupload.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upload_file_service__ = __webpack_require__("./src/app/upload/upload-file.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsUploadComponent = /** @class */ (function () {
    function DetailsUploadComponent(uploadService) {
        this.uploadService = uploadService;
    }
    DetailsUploadComponent.prototype.ngOnInit = function () {
    };
    DetailsUploadComponent.prototype.deleteFileUpload = function (fileUpload) {
        this.uploadService.deleteFileUpload(fileUpload);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__fileupload__["a" /* FileUpload */])
    ], DetailsUploadComponent.prototype, "fileUpload", void 0);
    DetailsUploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'details-upload',
            template: __webpack_require__("./src/app/upload/details-upload/details-upload.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__upload_file_service__["a" /* UploadFileService */]])
    ], DetailsUploadComponent);
    return DetailsUploadComponent;
}());



/***/ }),

/***/ "./src/app/upload/fileupload.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUpload; });
var FileUpload = /** @class */ (function () {
    function FileUpload(file) {
        this.file = file;
    }
    return FileUpload;
}());



/***/ }),

/***/ "./src/app/upload/form-upload/form-upload-mock.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormUploadComponentMock; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__upload_file_mock_service__ = __webpack_require__("./src/app/upload/upload-file-mock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fileupload__ = __webpack_require__("./src/app/upload/fileupload.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormUploadComponentMock = /** @class */ (function () {
    function FormUploadComponentMock(uploadService) {
        this.uploadService = uploadService;
        this.progress = { percentage: 0 };
    }
    FormUploadComponentMock.prototype.ngOnInit = function () {
    };
    FormUploadComponentMock.prototype.selectFile = function (event) {
        this.selectedFiles = event.target.files;
    };
    FormUploadComponentMock.prototype.upload = function () {
        var file = this.selectedFiles.item(0);
        this.selectedFiles = undefined;
        this.currentFileUpload = new __WEBPACK_IMPORTED_MODULE_2__fileupload__["a" /* FileUpload */](file);
        this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress);
    };
    FormUploadComponentMock = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'form-upload-mock',
            template: __webpack_require__("./src/app/upload/form-upload/form-upload.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__upload_file_mock_service__["a" /* UploadFileServiceMock */]])
    ], FormUploadComponentMock);
    return FormUploadComponentMock;
}());



/***/ }),

/***/ "./src/app/upload/form-upload/form-upload.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"currentFileUpload\" class=\"progress\">\r\n\t<div class=\"progress-bar progress-bar-info progress-bar-striped\"\r\n\t\trole=\"progressbar\" attr.aria-valuenow=\"{{progress.percentage}}\"\r\n\t\taria-valuemin=\"0\" aria-valuemax=\"100\"\r\n\t\t[ngStyle]=\"{width:progress.percentage+'%'}\">\r\n\t\t{{progress.percentage}}%</div>\r\n</div>\r\n \r\n<label class=\"btn btn-default\"> <input type=\"file\"\r\n\t(change)=\"selectFile($event)\">\r\n</label>\r\n \r\n<button class=\"btn btn-success\" [disabled]=\"!selectedFiles\"\r\n\t(click)=\"upload()\">Upload</button>"

/***/ }),

/***/ "./src/app/upload/form-upload/form-upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormUploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__upload_file_service__ = __webpack_require__("./src/app/upload/upload-file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fileupload__ = __webpack_require__("./src/app/upload/fileupload.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormUploadComponent = /** @class */ (function () {
    function FormUploadComponent(uploadService) {
        this.uploadService = uploadService;
        this.progress = { percentage: 0 };
    }
    FormUploadComponent.prototype.ngOnInit = function () {
    };
    FormUploadComponent.prototype.selectFile = function (event) {
        this.selectedFiles = event.target.files;
    };
    FormUploadComponent.prototype.upload = function () {
        var file = this.selectedFiles.item(0);
        this.selectedFiles = undefined;
        this.currentFileUpload = new __WEBPACK_IMPORTED_MODULE_2__fileupload__["a" /* FileUpload */](file);
        this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress);
    };
    FormUploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'form-upload',
            template: __webpack_require__("./src/app/upload/form-upload/form-upload.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__upload_file_service__["a" /* UploadFileService */]])
    ], FormUploadComponent);
    return FormUploadComponent;
}());



/***/ }),

/***/ "./src/app/upload/list-upload/list-upload-mock.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListUploadComponentMock; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__upload_file_mock_service__ = __webpack_require__("./src/app/upload/upload-file-mock.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListUploadComponentMock = /** @class */ (function () {
    function ListUploadComponentMock(uploadService) {
        this.uploadService = uploadService;
    }
    ListUploadComponentMock.prototype.ngOnInit = function () {
        var _this = this;
        // Use snapshotChanges().map() to store the key
        this.uploadService.getFileUploads(6).snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }).subscribe(function (fileUploads) {
            _this.fileUploads = fileUploads;
        });
    };
    ListUploadComponentMock = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'list-upload-mock',
            template: __webpack_require__("./src/app/upload/list-upload/list-upload.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__upload_file_mock_service__["a" /* UploadFileServiceMock */]])
    ], ListUploadComponentMock);
    return ListUploadComponentMock;
}());



/***/ }),

/***/ "./src/app/upload/list-upload/list-upload.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\r\n\t<div class=\"panel-heading\">List of Files</div>\r\n\t<div *ngFor=\"let file of fileUploads\">\r\n\t\t<div class=\"panel-body\">\r\n\t\t\t<details-upload [fileUpload]='file'></details-upload>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/upload/list-upload/list-upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListUploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__upload_file_service__ = __webpack_require__("./src/app/upload/upload-file.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListUploadComponent = /** @class */ (function () {
    function ListUploadComponent(uploadService) {
        this.uploadService = uploadService;
    }
    ListUploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Use snapshotChanges().map() to store the key
        this.uploadService.getFileUploads(6).snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }).subscribe(function (fileUploads) {
            _this.fileUploads = fileUploads;
        });
    };
    ListUploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'list-upload',
            template: __webpack_require__("./src/app/upload/list-upload/list-upload.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__upload_file_service__["a" /* UploadFileService */]])
    ], ListUploadComponent);
    return ListUploadComponent;
}());



/***/ }),

/***/ "./src/app/upload/upload-file-mock.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadFileServiceMock; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("./node_modules/firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadFileServiceMock = /** @class */ (function () {
    function UploadFileServiceMock(db) {
        this.db = db;
        this.basePath = '/uploads-mock';
    }
    UploadFileServiceMock.prototype.pushFileToStorage = function (fileUpload, progress) {
        var _this = this;
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        var uploadTask = storageRef.child(this.basePath + "/" + fileUpload.file.name).put(fileUpload.file);
        uploadTask.on(__WEBPACK_IMPORTED_MODULE_2_firebase__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
            // in progress
            var snap = snapshot;
            progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
        }, function (error) {
            // fail
            console.log(error);
        }, function () {
            // success
            fileUpload.url = uploadTask.snapshot.downloadURL;
            fileUpload.name = fileUpload.file.name;
            _this.saveFileData(fileUpload);
        });
    };
    UploadFileServiceMock.prototype.saveFileData = function (fileUpload) {
        this.db.list(this.basePath + "/").push(fileUpload);
    };
    UploadFileServiceMock.prototype.getFileUploads = function (numberItems) {
        return this.db.list(this.basePath, function (ref) {
            return ref.limitToLast(numberItems);
        });
    };
    UploadFileServiceMock.prototype.getFileUploadsQuiz = function (numberItems) {
        return this.db.list(this.basePath, function (ref) {
            return ref.limitToLast(numberItems);
        });
    };
    UploadFileServiceMock.prototype.deleteFileUpload = function (fileUpload) {
        var _this = this;
        this.deleteFileDatabase(fileUpload.key)
            .then(function () {
            _this.deleteFileStorage(fileUpload.name);
        })
            .catch(function (error) { return console.log(error); });
    };
    UploadFileServiceMock.prototype.deleteFileDatabase = function (key) {
        return this.db.list(this.basePath + "/").remove(key);
    };
    UploadFileServiceMock.prototype.deleteFileStorage = function (name) {
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        storageRef.child(this.basePath + "/" + name).delete();
    };
    UploadFileServiceMock = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], UploadFileServiceMock);
    return UploadFileServiceMock;
}());



/***/ }),

/***/ "./src/app/upload/upload-file.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadFileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("./node_modules/firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadFileService = /** @class */ (function () {
    function UploadFileService(db) {
        this.db = db;
        this.basePath = '/uploads';
    }
    UploadFileService.prototype.pushFileToStorage = function (fileUpload, progress) {
        var _this = this;
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        var uploadTask = storageRef.child(this.basePath + "/" + fileUpload.file.name).put(fileUpload.file);
        uploadTask.on(__WEBPACK_IMPORTED_MODULE_2_firebase__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
            // in progress
            var snap = snapshot;
            progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
        }, function (error) {
            // fail
            console.log(error);
        }, function () {
            // success
            fileUpload.url = uploadTask.snapshot.downloadURL;
            fileUpload.name = fileUpload.file.name;
            _this.saveFileData(fileUpload);
        });
    };
    UploadFileService.prototype.saveFileData = function (fileUpload) {
        this.db.list(this.basePath + "/").push(fileUpload);
    };
    UploadFileService.prototype.getFileUploads = function (numberItems) {
        return this.db.list(this.basePath, function (ref) {
            return ref.limitToLast(numberItems);
        });
    };
    UploadFileService.prototype.getFileUploadsQuiz = function (numberItems) {
        return this.db.list(this.basePath, function (ref) {
            return ref.limitToLast(numberItems);
        });
    };
    UploadFileService.prototype.deleteFileUpload = function (fileUpload) {
        var _this = this;
        this.deleteFileDatabase(fileUpload.key)
            .then(function () {
            _this.deleteFileStorage(fileUpload.name);
        })
            .catch(function (error) { return console.log(error); });
    };
    UploadFileService.prototype.deleteFileDatabase = function (key) {
        return this.db.list(this.basePath + "/").remove(key);
    };
    UploadFileService.prototype.deleteFileStorage = function (name) {
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        storageRef.child(this.basePath + "/" + name).delete();
    };
    UploadFileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], UploadFileService);
    return UploadFileService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAa7KYjwILG4lq7xzVNFX9zJJJYokHho3U",
        authDomain: "virtual-00001.firebaseapp.com",
        databaseURL: "https://virtual-00001.firebaseio.com",
        projectId: "virtual-00001",
        storageBucket: "virtual-00001.appspot.com",
        messagingSenderId: "40544091024"
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
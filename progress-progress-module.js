(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["progress-progress-module"],{

/***/ "./src/app/progress/progress-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/progress/progress-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ProgressRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressRoutingModule", function() { return ProgressRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _progress_progress_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./progress/progress.component */ "./src/app/progress/progress/progress.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _progress_progress_component__WEBPACK_IMPORTED_MODULE_2__["ProgressComponent"]
    }
];
var ProgressRoutingModule = /** @class */ (function () {
    function ProgressRoutingModule() {
    }
    ProgressRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ProgressRoutingModule);
    return ProgressRoutingModule;
}());



/***/ }),

/***/ "./src/app/progress/progress.module.ts":
/*!*********************************************!*\
  !*** ./src/app/progress/progress.module.ts ***!
  \*********************************************/
/*! exports provided: ProgressModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressModule", function() { return ProgressModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _progress_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./progress-routing.module */ "./src/app/progress/progress-routing.module.ts");
/* harmony import */ var _progress_progress_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./progress/progress.component */ "./src/app/progress/progress/progress.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProgressModule = /** @class */ (function () {
    function ProgressModule() {
    }
    ProgressModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _progress_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProgressRoutingModule"]
            ],
            declarations: [_progress_progress_component__WEBPACK_IMPORTED_MODULE_3__["ProgressComponent"]]
        })
    ], ProgressModule);
    return ProgressModule;
}());



/***/ }),

/***/ "./src/app/progress/progress/progress.component.html":
/*!***********************************************************!*\
  !*** ./src/app/progress/progress/progress.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  progress works!\n</p>\n"

/***/ }),

/***/ "./src/app/progress/progress/progress.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/progress/progress/progress.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2dyZXNzL3Byb2dyZXNzL3Byb2dyZXNzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/progress/progress/progress.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/progress/progress/progress.component.ts ***!
  \*********************************************************/
/*! exports provided: ProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressComponent", function() { return ProgressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressComponent = /** @class */ (function () {
    function ProgressComponent() {
    }
    ProgressComponent.prototype.ngOnInit = function () {
    };
    ProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-progress',
            template: __webpack_require__(/*! ./progress.component.html */ "./src/app/progress/progress/progress.component.html"),
            styles: [__webpack_require__(/*! ./progress.component.scss */ "./src/app/progress/progress/progress.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProgressComponent);
    return ProgressComponent;
}());



/***/ })

}]);
//# sourceMappingURL=progress-progress-module.js.map
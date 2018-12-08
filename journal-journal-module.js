(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["journal-journal-module"],{

/***/ "./src/app/journal/journal-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/journal/journal-routing.module.ts ***!
  \***************************************************/
/*! exports provided: JournalRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JournalRoutingModule", function() { return JournalRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _journal_journal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./journal/journal.component */ "./src/app/journal/journal/journal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _journal_journal_component__WEBPACK_IMPORTED_MODULE_2__["JournalComponent"]
    }
];
var JournalRoutingModule = /** @class */ (function () {
    function JournalRoutingModule() {
    }
    JournalRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], JournalRoutingModule);
    return JournalRoutingModule;
}());



/***/ }),

/***/ "./src/app/journal/journal.module.ts":
/*!*******************************************!*\
  !*** ./src/app/journal/journal.module.ts ***!
  \*******************************************/
/*! exports provided: JournalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JournalModule", function() { return JournalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _journal_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./journal-routing.module */ "./src/app/journal/journal-routing.module.ts");
/* harmony import */ var _journal_journal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./journal/journal.component */ "./src/app/journal/journal/journal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var JournalModule = /** @class */ (function () {
    function JournalModule() {
    }
    JournalModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _journal_routing_module__WEBPACK_IMPORTED_MODULE_2__["JournalRoutingModule"]
            ],
            declarations: [_journal_journal_component__WEBPACK_IMPORTED_MODULE_3__["JournalComponent"]]
        })
    ], JournalModule);
    return JournalModule;
}());



/***/ }),

/***/ "./src/app/journal/journal/journal.component.html":
/*!********************************************************!*\
  !*** ./src/app/journal/journal/journal.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  journal works!\n</p>\n"

/***/ }),

/***/ "./src/app/journal/journal/journal.component.scss":
/*!********************************************************!*\
  !*** ./src/app/journal/journal/journal.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvdXJuYWwvam91cm5hbC9qb3VybmFsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/journal/journal/journal.component.ts":
/*!******************************************************!*\
  !*** ./src/app/journal/journal/journal.component.ts ***!
  \******************************************************/
/*! exports provided: JournalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JournalComponent", function() { return JournalComponent; });
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

var JournalComponent = /** @class */ (function () {
    function JournalComponent() {
    }
    JournalComponent.prototype.ngOnInit = function () {
    };
    JournalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-journal',
            template: __webpack_require__(/*! ./journal.component.html */ "./src/app/journal/journal/journal.component.html"),
            styles: [__webpack_require__(/*! ./journal.component.scss */ "./src/app/journal/journal/journal.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], JournalComponent);
    return JournalComponent;
}());



/***/ })

}]);
//# sourceMappingURL=journal-journal-module.js.map
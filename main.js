(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+zoA":
/*!*******************************************************!*\
  !*** ./src/app/components/slider/slider.component.ts ***!
  \*******************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



function SliderComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function SliderComponent_div_2_Template_img_error_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onImgError($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", slide_r1.routerLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", slide_r1.alt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", slide_r1.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r1.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r1.text);
} }
class SliderComponent {
    constructor() {
        this.defaultImage = 'https://img.icons8.com/ios/50/user-male-circle--v1.png';
        // @Input() slides: any[] = [];
        this.header = '';
        this.slider = [
            {
                src: 'https://lh3.google.com/u/0/d/12Zo2go1NPE7VvPf_y0wcAuTDNXdYJysa=w200-h190-p-k-nu-iv1',
                alt: 'Wrincied ',
                role: 'Head Developer',
                name: 'Wrincied',
                text: 'One of the most popular developers of creating WebSites in the Europe',
                routerLink: 'Head-Developer'
            },
            {
                src: 'https://lh3.google.com/u/0/d/1Ws-Cxtf3dJvLHG8SBl37vRpqBW1K6L4J=w200-h190-p-k-nu-iv1',
                alt: 'Nikita Krushko',
                role: 'Head Illustrator',
                name: 'Nikita Krushko',
                text: 'One of the most popular creators of vector illustrations in Europe.',
                routerLink: 'Illustrator'
            },
            {
                src: 'https://lh3.google.com/u/0/d/1LZl1m7RZBcdrWi1684hDjd27H3KX26mC=w200-h190-p-k-nu-iv1',
                alt: 'FelixTrex',
                role: 'Head Game Designer',
                name: 'FelixTrex',
                text: 'One of the most popular creators of 3D Models in Europe.',
                routerLink: 'GameDesigner'
            },
            {
                src: 'https://sun2.velcom-by-minsk.userapi.com/s/v1/ig1/9wS82Dv7X-LoAcripAE9wjOgPxa_rX7cn-28znWtCwbXxdD6358BovIexCmm3lmQUwbosHDo.jpg?size=100x0&quality=96&crop=0,29,818,818&ava=1',
                alt: 'Aventader',
                role: 'Head Manager',
                name: 'Aventader',
                text: 'One of the most popular developers of creating soft',
                routerLink: 'Manager'
            },
            {
                src: 'https://cdslbd.net/upload/common_photo/user-icon.png',
                alt: 'Anton',
                role: 'Head Server Developer',
                name: 'NN',
                text: 'One of the most popular developers of developing on the Python',
                routerLink: 'Developer'
            }
        ];
    }
    onImgError(event) {
        const img = event.target;
        img.src = this.defaultImage;
    }
}
SliderComponent.ɵfac = function SliderComponent_Factory(t) { return new (t || SliderComponent)(); };
SliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SliderComponent, selectors: [["app-slider"]], inputs: { header: "header" }, decls: 3, vars: 1, consts: [[1, "flex-author"], ["class", "content__item", 4, "ngFor", "ngForOf"], [1, "content__item"], [3, "routerLink"], [1, "content-item__img"], [3, "src", "alt", "error"], [1, "item__disc"], [1, "role"], [1, "disc__title"], [1, "disc__text"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SliderComponent_div_2_Template, 14, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slider);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  flex-direction: row;\n  justify-content: space-evenly;\n  margin: 20px 0;\n}\nnav[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%] {\n  text-decoration: none;\n  margin: 10px 10px;\n  border: 1px solid #dfdfdf;\n  border-radius: 10%;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  align-items: center;\n}\nnav[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 60px 45px;\n  text-decoration: none;\n}\nnav[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]:hover {\n  border: 1px solid #c7c7c7;\n}\nnav[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .content-item__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  background-position: center;\n  background-size: cover;\n  border: 2px #e6e5e6 solid;\n  max-width: 102px;\n  width: 100%;\n  max-height: 102px;\n  height: 100%;\n  border-radius: 50%;\n}\nnav[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .item__disc[_ngcontent-%COMP%]   .disc__title[_ngcontent-%COMP%] {\n  padding-top: 15px;\n}\nnav[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .item__disc[_ngcontent-%COMP%]   .disc__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 200px;\n  color: #8f8f8f;\n  font-weight: 500;\n}\nnav[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .item__disc[_ngcontent-%COMP%]   .disc__text[_ngcontent-%COMP%] {\n  padding-top: 15px;\n}\nnav[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .item__disc[_ngcontent-%COMP%]   .disc__text[_ngcontent-%COMP%]   P[_ngcontent-%COMP%] {\n  max-width: 200px;\n  max-height: 400px;\n  color: #8f8f8f;\n  font-weight: 500;\n}\nnav[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\n  padding-top: 15px;\n}\nnav[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #575656;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzbGlkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7QUFDSjtBQUNRO0VBS0kscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSFo7QUFSWTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7QUFVaEI7QUFDWTtFQUNJLHlCQUFBO0FBQ2hCO0FBRWdCO0VBQ0ksMkJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFBcEI7QUFJZ0I7RUFDSSxpQkFBQTtBQUZwQjtBQUdvQjtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBRHhCO0FBSWdCO0VBQ0ksaUJBQUE7QUFGcEI7QUFHb0I7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBRHhCO0FBS1k7RUFDSSxpQkFBQTtBQUhoQjtBQUlnQjtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQUZwQiIsImZpbGUiOiJzbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyAgIFxyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIG1hcmdpbjoyMHB4IDA7ICAgXHJcblxyXG4gICAgICAgIC5jb250ZW50X19pdGVte1xyXG4gICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNjBweCA0NXB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZmRmZGY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjN2M3Yzc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbnRlbnQtaXRlbV9faW1ne1xyXG4gICAgICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyIDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCAjZTZlNWU2IHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaXRlbV9fZGlzY3tcclxuICAgICAgICAgICAgICAgIC5kaXNjX190aXRsZXtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzhmOGY4ZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZGlzY19fdGV4dHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBQe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4ZjhmOGY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5yb2xle1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNTc1NjU2O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9Il19 */"] });


/***/ }),

/***/ "/Ir9":
/*!**********************************************************************!*\
  !*** ./src/app/components/router/gamedesign/gamedesign.component.ts ***!
  \**********************************************************************/
/*! exports provided: GamedesignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamedesignComponent", function() { return GamedesignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");


class GamedesignComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.titleService.setTitle("Game Design");
    }
}
GamedesignComponent.ɵfac = function GamedesignComponent_Factory(t) { return new (t || GamedesignComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
GamedesignComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GamedesignComponent, selectors: [["app-gamedesign"]], decls: 2, vars: 0, template: function GamedesignComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "gamedesign works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYW1lZGVzaWduLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Dev\2025\CommercialWebsite\src\main.ts */"zUnb");


/***/ }),

/***/ "07VQ":
/*!**************************************************************************!*\
  !*** ./src/app/components/router/illustration/illustration.component.ts ***!
  \**************************************************************************/
/*! exports provided: IllustrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IllustrationComponent", function() { return IllustrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




function IllustrationComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const title_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](title_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](title_r2.discription);
} }
function IllustrationComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const content_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", content_r3.routerLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", content_r3.alt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", content_r3.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](content_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](content_r3.subtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](content_r3.app);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](content_r3.payment);
} }
class IllustrationComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.Title = [
            {
                title: 'Free and Premium Illustrations',
                discription: ''
            }
        ];
        this.illustration = [
            {
                src: 'https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/60a0283cd6cbe208c2e39496_800-2%20(1).png',
                alt: 'Shhhh! Illustration Kit',
                title: 'Shhhh! Illustration Kit',
                subtitle: 'Bright and well-though-out startup illustrations',
                app: 'for Sketch, Figma, Illustrator, Affinity Designer',
                payment: 'Free and Paid Versions',
                category: 'Illustration'
            },
            {
                src: 'https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/609298616f4d571fa469308e_Cover.jpg',
                alt: 'Bzzzt',
                title: 'Bzzzt',
                subtitle: 'Beautiful 3d abstract illustrations',
                app: 'for Sketch, Figma, Illustrator, Affinity Designer',
                payment: 'Free and Paid Versions',
            },
            {
                src: 'https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/5fe1c07acc3e6ffb9935a0f9_%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202020-12-22%20%D0%B2%2012.05.40-p-500.png',
                alt: 'Fresh, creative illustration',
                title: 'Fresh, creative illustration',
                subtitle: 'Funny, colorful and eye-catching illustrations',
                app: 'for Sketch, Figma, Illustrator, Affinity Designer',
                payment: 'Free and Paid Versions',
            },
            {
                src: 'https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/5fe1c203173d33dea1f7bc4b_%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202020-12-22%20%D0%B2%2012.04.15.png',
                alt: 'Knock! Illustration Kit',
                title: 'Knock! Illustration Kit',
                subtitle: '20 carefully-designed and energy-filled metaphors of the IT world',
                app: 'for Sketch, Figma, Illustrator, Affinity Designer',
                payment: 'Free and Paid Versions',
            },
            {
                src: 'https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/5fe1b8b3d5b00e83a2246e48_%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202020-12-22%20%D0%B2%2012.04.32.png',
                alt: 'Clusck! Illustration Kit',
                title: 'Clusck! Illustration Kit',
                subtitle: 'Stylish and cute illustration set for any kind of projects',
                app: 'for Sketch, Figma, Illustrator, Affinity Designer',
                payment: 'Free and Paid Versions',
            },
            {
                src: 'https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/5fe1baa67579e67a7eb75941_%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202020-12-22%20%D0%B2%2012.05.22.png',
                alt: 'Waaahh! Illustration Kit',
                title: 'Waaahh! Illustration Kit',
                subtitle: 'Stylish,bright and well-though-out startup illustrations',
                app: 'for Sketch, Figma, Illustrator, Affinity Designer',
                payment: 'Free and Paid Versions',
            },
            {
                src: 'https://stories.freepiklabs.com/storage/8139/Online-Personal-Trainer_Mesa-de-trabajo-1.svg',
                alt: 'Online Personal Trainer Isometric',
                title: 'Online Personal Trainer Isometric',
                subtitle: '',
                app: 'for Sketch, Figma, Illustrator, Affinity Designer',
                payment: 'Free and Paid Versions',
            },
            {
                src: 'https://stories.freepiklabs.com/storage/37033/Online-article-01.svg',
                alt: 'Online article Cartoon Illustrations',
                title: 'Online article Cartoon Illustrations',
                subtitle: '',
                app: 'for Sketch, Figma, Illustrator, Affinity Designer',
                payment: 'Free and Paid Versions',
            }
        ].map(item => (Object.assign(Object.assign({}, item), { routerLink: item.title.toLowerCase().replace(/\s+/g, '-') })));
        this.titleService.setTitle("Illustrations");
    }
    ngOnInit() {
        // Добавляем автоматическую генерацию routerLink
        this.illustration = this.addRouterLinks(this.illustration, 'illustration');
    }
    addRouterLinks(list, category) {
        return list.map(item => (Object.assign(Object.assign({}, item), { routerLink: `/${category}/${item.title.toLowerCase().replace(/\s+/g, '-')}` })));
    }
}
IllustrationComponent.ɵfac = function IllustrationComponent_Factory(t) { return new (t || IllustrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
IllustrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IllustrationComponent, selectors: [["app-illustration"]], decls: 3, vars: 2, consts: [["class", "illustration-content__info", 4, "ngFor", "ngForOf"], [1, "art__flex-content"], ["class", "content__item", 4, "ngFor", "ngForOf"], [1, "illustration-content__info"], [1, "content__title"], [1, "content__discription"], [1, "content__item"], ["routerLinkActive", "routerLink-active", 3, "routerLink"], [3, "src", "alt"], [1, "item__disc"], [1, "disc__title"], [1, "disc__subtitle"], [1, "disc__app"], [1, "disc__footer"], [1, "footer__price"]], template: function IllustrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, IllustrationComponent_div_0_Template, 7, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, IllustrationComponent_div_2_Template, 17, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.illustration);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], styles: [".illustration-content__info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  text-align: center;\n  margin: 150px 0px;\n}\n.illustration-content__info[_ngcontent-%COMP%]   .content__title[_ngcontent-%COMP%] {\n  padding-bottom: 25px;\n  max-width: 690px;\n}\n.illustration-content__info[_ngcontent-%COMP%]   .content__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 65px;\n  color: #000;\n  line-height: 70px;\n  font-weight: 500;\n}\n.illustration-content__info[_ngcontent-%COMP%]   .content__discription[_ngcontent-%COMP%] {\n  max-width: 640px;\n}\n.illustration-content__info[_ngcontent-%COMP%]   .content__discription[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #696969;\n  font-weight: 400;\n  font-size: 24px;\n}\n.art__flex-content[_ngcontent-%COMP%] {\n  border-top: 1px solid #dfdfdf;\n  padding-top: 15px;\n  margin-top: 20px;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  grid-gap: 20px;\n  width: 100%;\n}\n.art__flex-content[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%] {\n  border: 1px solid #dfdfdf;\n  border-radius: 8px;\n  background-color: #fff;\n  overflow: hidden;\n  display: flex;\n  text-decoration: none;\n  overflow: hidden;\n  transition: box-shadow 0.2s ease, transform 0.2s ease;\n  text-decoration: none;\n  margin: 10px 10px;\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: column;\n  text-align: center;\n  align-items: center;\n}\n.art__flex-content[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);\n}\n.art__flex-content[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n  text-decoration: none;\n}\n.art__flex-content[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  background-position: center;\n  background-size: cover;\n  max-width: 426px;\n  width: 100%;\n  border-radius: 8px 8px 0 0;\n  max-height: 100%;\n}\n.art__flex-content[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .item__disc[_ngcontent-%COMP%] {\n  padding: 16px 24px 18px;\n  display: flex;\n  text-align: left;\n  justify-content: start;\n  flex-direction: column;\n  border-radius: 0 0 8px 8px;\n}\n.art__flex-content[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .item__disc[_ngcontent-%COMP%]   .disc__title[_ngcontent-%COMP%] {\n  margin: 4px 0;\n}\n.art__flex-content[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .item__disc[_ngcontent-%COMP%]   .disc__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #000;\n  font-weight: 500;\n}\n.art__flex-content[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .item__disc[_ngcontent-%COMP%]   .disc__subtitle[_ngcontent-%COMP%]   P[_ngcontent-%COMP%] {\n  color: #707070;\n  font-weight: 500;\n}\n.art__flex-content[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .disc__app[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding-bottom: 15px;\n}\n.art__flex-content[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .disc__app[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #8f8f8f;\n  font-weight: 500;\n}\n.art__flex-content[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .disc__payment[_ngcontent-%COMP%] {\n  padding-top: 8px;\n  border-top: 1px solid #dfdfdf;\n  padding: 16px 24px 18px;\n  text-align: left;\n}\n.art__flex-content[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .disc__payment[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-size: 16px;\n  color: #000;\n  font-weight: 500;\n}\n.art__flex-content[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .disc__footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-top: 1px solid #dfdfdf;\n  padding: 16px 24px 18px;\n  text-align: left;\n  flex: 0 0 auto;\n}\n.art__flex-content[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .disc__footer[_ngcontent-%COMP%]   .footer__price[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-size: 16px;\n  color: #000;\n  font-weight: 500;\n}\n.art__flex-content[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .disc__footer[_ngcontent-%COMP%]   .footer__info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  padding: 2px 12px;\n  border: 1px solid #e6e6e6;\n  border-radius: 12px;\n  text-decoration: none;\n}\n.art__flex-content[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .disc__footer[_ngcontent-%COMP%]   .footer__info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 15px;\n  max-width: 200px;\n  max-height: 60px;\n  text-decoration: none;\n  color: #000;\n  font-weight: 500;\n}\n.art__flex-content[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .disc__footer[_ngcontent-%COMP%]   .footer__info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .icon-button[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  width: 14px;\n}\n.art__flex-content[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .disc__footer[_ngcontent-%COMP%]   .footer__info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    > .icon-button[_ngcontent-%COMP%] {\n  transition: transform 0.5s;\n  transform: rotate(180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaWxsdXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFBUjtBQUNZO0VBQ0ksb0JBQUE7RUFDQSxnQkFBQTtBQUNoQjtBQUFnQjtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUVwQjtBQUNZO0VBQ0ksZ0JBQUE7QUFDaEI7QUFBZ0I7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRXBCO0FBRVE7RUFDSSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUNaO0FBQWdCO0VBQ1EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFEQUFBO0VBVUoscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBUHBCO0FBUndCO0VBQ0EsMkJBQUE7RUFDQSwwQ0FBQTtBQVV4QjtBQVJvQjtFQUVJLGtCQUFBO0VBQ0EscUJBQUE7QUFTeEI7QUFBd0I7RUFDSSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQUU1QjtBQUFvQjtFQUNJLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0FBRXhCO0FBRHdCO0VBQ0ksYUFBQTtBQUc1QjtBQUY0QjtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFJaEM7QUFBNEI7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFFaEM7QUFHb0I7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7QUFEeEI7QUFFd0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQTVCO0FBR29CO0VBQ0ksZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFEeEI7QUFFd0I7RUFFSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFENUI7QUFJb0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFGeEI7QUFLNEI7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFIaEM7QUFNd0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUo1QjtBQUs0QjtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFIaEM7QUFJZ0M7RUFDSSxpQkFBQTtFQUNBLFdBQUE7QUFGcEM7QUFJZ0M7RUFDSSwwQkFBQTtFQUNBLHlCQUFBO0FBRnBDIiwiZmlsZSI6ImlsbHVzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgLmlsbHVzdHJhdGlvbi1jb250ZW50X19pbmZve1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDE1MHB4IDBweDtcclxuICAgICAgICAgICAgLmNvbnRlbnRfX3RpdGxle1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDY5MHB4O1xyXG4gICAgICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDY1cHg7ICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNzBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwOyAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb250ZW50X19kaXNjcmlwdGlvbntcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNjQwcHg7XHJcbiAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNjk2OTY5O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hcnRfX2ZsZXgtY29udGVudHtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZmRmZGY7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI2MHB4LCAxZnIpKTtcclxuICAgICAgICAgICAgZ3JpZC1nYXA6IDIwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgLmNvbnRlbnRfX2l0ZW17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZmRmZGY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDsgLy8g0YfRgtC+0LHRiyBhbmNob3Ig0YDQsNGB0YLRj9Cz0LjQstCw0LvRgdGPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzIGVhc2UsIHRyYW5zZm9ybSAwLjJzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNnB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBhZGRpbmc6IDYwcHggNDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MjZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLml0ZW1fX2Rpc2N7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE2cHggMjRweCAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgIDhweCA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kaXNjX190aXRsZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kaXNjX19zdWJ0aXRsZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5kaXNjX19hcHB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOGY4ZjhmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuZGlzY19fcGF5bWVudHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RmZGZkZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTZweCAyNHB4IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuZGlzY19fZm9vdGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZmRmZGY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE2cHggMjRweCAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZvb3Rlcl9fcHJpY2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mb290ZXJfX2luZm97ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMnB4IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwOyAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaWNvbi1idXR0b257XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciA+IC5pY29uLWJ1dHRvbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSJdfQ== */"] });


/***/ }),

/***/ "5MbP":
/*!**************************************************************!*\
  !*** ./src/app/components/home/homeart/homeart.component.ts ***!
  \**************************************************************/
/*! exports provided: HomeartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeartComponent", function() { return HomeartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



function HomeartComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const info_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", info_r7.number, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](info_r7.title);
} }
function HomeartComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const new_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](new_r8.TypeArt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](new_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Author: ", new_r8.author, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", new_r8.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", new_r8.linkInfo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", new_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", new_r8.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HomeartComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const artflex_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", artflex_r9.routerLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", artflex_r9.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", artflex_r9.alt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](artflex_r9.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](artflex_r9.subtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](artflex_r9.app);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](artflex_r9.payment);
} }
function HomeartComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Wash your hands and be happy \u2764\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const new_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](new_r10.TypeArt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](new_r10.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Author: ", new_r10.author, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", new_r10.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", new_r10.linkInfo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](new_r10.disc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", new_r10.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", new_r10.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HomeartComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const artflex_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", artflex_r11.routerLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", artflex_r11.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", artflex_r11.alt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](artflex_r11.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](artflex_r11.subtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](artflex_r11.app);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](artflex_r11.payment);
} }
function HomeartComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const info_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", info_r12.number, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](info_r12.title);
} }
function HomeartComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const artflex_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", artflex_r13.routerLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", artflex_r13.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", artflex_r13.alt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](artflex_r13.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](artflex_r13.subtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](artflex_r13.app);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", artflex_r13.currency, "", artflex_r13.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", artflex_r13.routerpresentation, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", artflex_r13.presentation, " ");
} }
class HomeartComponent {
    constructor() {
        this.illustrationDB = [
            {
                src: 'https://stories.freepiklabs.com/storage/37033/Online-article-01.svg',
                TypeArt: 'Static Illustrations',
                title: 'Online article Cartoon Illustrations',
                author: 'StorySet',
                link: 'https://storyset.com/illustration/online-article/bro',
                linkInfo: 'View illustration'
            }
        ];
        this.illustrationDBPartTwo = [
            {
                src: 'https://stories.freepiklabs.com/storage/8139/Online-Personal-Trainer_Mesa-de-trabajo-1.svg',
                TypeArt: 'Static Illustrations',
                title: 'Online Personal Trainer Isometric',
                author: 'StorySet',
                link: 'https://storyset.com/illustration/online-personal-trainer/amico',
                linkInfo: 'View illustration',
                disc: 'Wash your hands...'
            }
        ];
        this.illustrationDBflex = [
            {
                src: 'https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/60a0283cd6cbe208c2e39496_800-2%20(1).png',
                alt: 'Shhhh! Illustration Kit',
                title: 'Shhhh! Illustration Kit',
                subtitle: 'Bright and well-though-out startup illustrations',
                app: 'for Sketch, Figma, Illustrator, Affinity Designer',
                payment: 'Free and Paid Versions'
            },
            {
                src: 'https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/609298616f4d571fa469308e_Cover.jpg',
                alt: 'Bzzzt',
                title: 'Bzzzt',
                subtitle: 'Beautiful 3d abstract illustrations',
                app: 'for Sketch, Figma, Illustrator, Affinity Designer',
                payment: 'Free and Paid Versions'
            },
            {
                src: 'https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/5fe1c07acc3e6ffb9935a0f9_%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202020-12-22%20%D0%B2%2012.05.40-p-500.png',
                alt: 'Fresh, creative illustration',
                title: 'Fresh, creative illustration',
                subtitle: 'Funny, colorful and eye-catching illustrations',
                app: 'for Sketch, Figma, Illustrator, Affinity Designer',
                payment: 'Free and Paid Versions'
            }
        ];
        this.illustrationDBflexparttwo = [
            {
                src: 'https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/5fe1c203173d33dea1f7bc4b_%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202020-12-22%20%D0%B2%2012.04.15.png',
                alt: 'Knock! Illustration Kit',
                title: 'Knock! Illustration Kit',
                subtitle: '20 carefully-designed and energy-filled metaphors of the IT world',
                app: 'for Sketch, Figma, Illustrator, Affinity Designer',
                payment: 'Free and Paid Versions'
            },
            {
                src: 'https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/5fe1b8b3d5b00e83a2246e48_%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202020-12-22%20%D0%B2%2012.04.32.png',
                alt: 'Clusck! Illustration Kit',
                title: 'Clusck! Illustration Kit',
                subtitle: 'Stylish and cute illustration set for any kind of projects',
                app: 'for Sketch, Figma, Illustrator, Affinity Designer',
                payment: 'Free and Paid Versions'
            },
            {
                src: 'https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/5fe1baa67579e67a7eb75941_%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202020-12-22%20%D0%B2%2012.05.22.png',
                alt: 'Waaahh! Illustration Kit',
                title: 'Waaahh! Illustration Kit',
                subtitle: 'Stylish,bright and well-though-out startup illustrations',
                app: 'for Sketch, Figma, Illustrator, Affinity Designer',
                payment: 'Free and Paid Versions'
            }
        ];
        this.IllutrationTitleDb = [
            {
                number: '#1',
                title: 'Illustrations'
            }
        ];
        this.IllutrationTitleDbTwo = [
            {
                number: '#2',
                title: 'UI and UX'
            }
        ];
        this.UIUXDb = [
            {
                src: 'https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/6018068a28aa358957c5b2aa_800x600-p-800.png',
                alt: 'Fragments iOS Wireframe Kit',
                title: 'Fragments iOS Wireframe Kit',
                subtitle: 'Powerful,colorful iOS 14 Kit with 280+ Ready Layouts',
                app: 'for Sketch and Figma',
                presentation: 'View Presentation',
                price: '35',
                currency: '$'
            },
            {
                src: 'https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/5fe5ebf7099f983378d64e64_%20800.jpg',
                alt: 'Design Starter Kit',
                title: 'Design Starter Kit',
                subtitle: 'Design System, UI starter kit, illustrations and skeletons',
                app: 'for Sketch ',
                presentation: 'View Presentation',
                currency: '$',
                price: '35'
            },
            {
                src: 'https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/5c2ddb6aa1a87225969418b5_cp.jpeg',
                alt: 'Control Panel',
                title: 'Control Panel',
                subtitle: 'Neatly organized design system with bunch of great features',
                app: 'For Sketch',
                presentation: 'View Presentation',
                currency: '$',
                price: '79'
            },
            {
                src: 'https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/5fe34e2ab59fa3307bf4b489_5c867988a630fe868ac66dc1_Charts.jpg',
                alt: 'Charts',
                title: 'Charts',
                subtitle: 'All types of charts for your web and mobile projects',
                app: 'For Sketch',
                presentation: 'View Presentation',
                currency: '',
                price: 'Free'
            }
        ];
    }
    //  При инициализации автоматически добавляем routerLink во все нужные массивы
    ngOnInit() {
        this.illustrationDBflex = this.addRouterLinks(this.illustrationDBflex, 'illustrations');
        this.illustrationDBflexparttwo = this.addRouterLinks(this.illustrationDBflexparttwo, 'illustrations');
        this.UIUXDb = this.addRouterLinks(this.UIUXDb, 'uiux');
    }
    // Генерация routerLink из title + категории
    addRouterLinks(list, category) {
        return list.map(item => {
            const slug = item.title
                .trim()
                .toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^\w-]+/g, '');
            return Object.assign(Object.assign({}, item), { routerLink: `/${category}/${slug}` });
        });
    }
}
HomeartComponent.ɵfac = function HomeartComponent_Factory(t) { return new (t || HomeartComponent)(); };
HomeartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeartComponent, selectors: [["app-homeart"]], decls: 11, vars: 7, consts: [[1, "art"], ["class", "art__title", 4, "ngFor", "ngForOf"], ["class", "art__main-content", 4, "ngFor", "ngForOf"], [1, "art__flex-content"], ["class", "content__item", 4, "ngFor", "ngForOf"], [1, "art__title"], [1, "art__main-content"], [1, "content-banner__text"], [1, "banner__subtext"], [1, "banner__title"], [1, "banner__author"], [1, "buttonslink"], ["target", "_blank", 3, "href"], [1, "banner__img"], [3, "src", "alt"], [1, "content__item"], [3, "routerLink"], [1, "item__disc"], [1, "disc__title"], [1, "disc__subtitle"], [1, "disc__app"], [1, "disc__payment"], [1, "banner__covid"], [1, "banner__covid-hiden"], [1, "disc__footer"], [1, "footer__price"], [1, "footer__info"]], template: function HomeartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeartComponent_div_1_Template, 5, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeartComponent_div_2_Template, 16, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeartComponent_div_4_Template, 16, 7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeartComponent_div_5_Template, 22, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeartComponent_div_7_Template, 16, 7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeartComponent_div_8_Template, 5, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeartComponent_div_10_Template, 20, 10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.IllutrationTitleDb);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.illustrationDB);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.illustrationDBflex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.illustrationDBPartTwo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.illustrationDBflexparttwo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.IllutrationTitleDbTwo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.UIUXDb);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".art[_ngcontent-%COMP%]   .art__title[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #dfdfdf;\n  padding-bottom: 15px;\n}\n.art[_ngcontent-%COMP%]   .art__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 15px;\n  font-size: 44px;\n  font-weight: 500;\n  margin: 20px 0;\n}\n.art[_ngcontent-%COMP%]   .art__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #dadada;\n}\n.art[_ngcontent-%COMP%]   .art__main-content[_ngcontent-%COMP%] {\n  border: 1px solid #e6e5e6;\n  border-radius: 20px;\n  padding: 40px 32px;\n  margin: 40px 0;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  text-align: center;\n  background-color: #fff;\n}\n@media (max-width: 768px) {\n  .art[_ngcontent-%COMP%]   .art__main-content[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n    margin: 24px 0;\n    flex-direction: column-reverse;\n  }\n}\n.art[_ngcontent-%COMP%]   .art__main-content[_ngcontent-%COMP%]   .content-banner__text[_ngcontent-%COMP%] {\n  max-width: 520px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  line-height: 1.5;\n  margin-bottom: 32px;\n}\n.art[_ngcontent-%COMP%]   .art__main-content[_ngcontent-%COMP%]   .content-banner__text[_ngcontent-%COMP%]   .banner__subtext[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: #444;\n}\n.art[_ngcontent-%COMP%]   .art__main-content[_ngcontent-%COMP%]   .content-banner__text[_ngcontent-%COMP%]   .banner__title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  line-height: 1.2;\n  letter-spacing: 0.5px;\n  font-weight: 700;\n}\n@media (max-width: 768px) {\n  .art[_ngcontent-%COMP%]   .art__main-content[_ngcontent-%COMP%]   .content-banner__text[_ngcontent-%COMP%]   .banner__title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n}\n.art[_ngcontent-%COMP%]   .art__main-content[_ngcontent-%COMP%]   .content-banner__text[_ngcontent-%COMP%]   .banner__author[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #555;\n}\n.art[_ngcontent-%COMP%]   .art__main-content[_ngcontent-%COMP%]   .content-banner__text[_ngcontent-%COMP%]   .buttonslink[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.art[_ngcontent-%COMP%]   .art__main-content[_ngcontent-%COMP%]   .content-banner__text[_ngcontent-%COMP%]   .buttonslink[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 14px 26px;\n  border-radius: 999px;\n  border: 1px solid #dfdfdf;\n  text-decoration: none;\n  color: #000;\n  font-weight: 500;\n  transition: background-color 0.25s ease, box-shadow 0.25s ease, transform 0.15s ease;\n}\n.art[_ngcontent-%COMP%]   .art__main-content[_ngcontent-%COMP%]   .content-banner__text[_ngcontent-%COMP%]   .buttonslink[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #f7f7f7;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.03);\n  transform: translateY(-1px);\n}\n.art[_ngcontent-%COMP%]   .art__main-content[_ngcontent-%COMP%]   .content-banner__text[_ngcontent-%COMP%]   .banner__covid[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.art[_ngcontent-%COMP%]   .art__main-content[_ngcontent-%COMP%]   .content-banner__text[_ngcontent-%COMP%]   .banner__covid[_ngcontent-%COMP%]:hover    ~ .banner__covid-hiden[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  opacity: 1;\n  visibility: visible;\n}\n.art[_ngcontent-%COMP%]   .art__main-content[_ngcontent-%COMP%]   .content-banner__text[_ngcontent-%COMP%]   .banner__covid-hiden[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  opacity: 0;\n  visibility: hidden;\n  transition: 0.55s opacity, 0.55s visibility;\n}\n.art[_ngcontent-%COMP%]   .art__main-content[_ngcontent-%COMP%]   .banner__img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 640px;\n}\n.art[_ngcontent-%COMP%]   .art__main-content[_ngcontent-%COMP%]   .banner__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  display: block;\n  border-radius: 16px;\n  object-fit: cover;\n}\n.art[_ngcontent-%COMP%]   .art__flex-content[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n  margin-top: 20px;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  grid-gap: 20px;\n  width: 100%;\n}\n.art[_ngcontent-%COMP%]   .art__flex-content[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%] {\n  border: 1px solid #dfdfdf;\n  border-radius: 8px;\n  background-color: #fff;\n  overflow: hidden;\n  display: flex;\n  text-decoration: none;\n  overflow: hidden;\n  transition: box-shadow 0.2s ease, transform 0.2s ease;\n}\n.art[_ngcontent-%COMP%]   .art__flex-content[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);\n}\n.art[_ngcontent-%COMP%]   .art__flex-content[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  text-decoration: none;\n  color: inherit;\n  position: relative;\n}\n.art[_ngcontent-%COMP%]   .art__flex-content[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  background-position: center;\n  background-size: cover;\n  max-height: 100%;\n  border-radius: 8px 8px 0 0;\n}\n.art[_ngcontent-%COMP%]   .art__flex-content[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .item__disc[_ngcontent-%COMP%] {\n  padding: 16px 24px 18px;\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  flex-grow: 1;\n}\n.art[_ngcontent-%COMP%]   .art__flex-content[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .item__disc[_ngcontent-%COMP%]   .disc__title[_ngcontent-%COMP%] {\n  margin: 4px 0;\n}\n.art[_ngcontent-%COMP%]   .art__flex-content[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .item__disc[_ngcontent-%COMP%]   .disc__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #000;\n  font-weight: 500;\n}\n.art[_ngcontent-%COMP%]   .art__flex-content[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .item__disc[_ngcontent-%COMP%]   .disc__subtitle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #707070;\n  font-weight: 500;\n}\n.art[_ngcontent-%COMP%]   .art__flex-content[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .item__disc[_ngcontent-%COMP%]   .disc__app[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 15px;\n  color: #8f8f8f;\n  font-weight: 500;\n}\n.art[_ngcontent-%COMP%]   .art__flex-content[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .disc__payment[_ngcontent-%COMP%] {\n  margin-top: auto;\n  border-top: 1px solid #dfdfdf;\n  padding: 16px 24px 18px;\n  text-align: left;\n}\n.art[_ngcontent-%COMP%]   .art__flex-content[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .disc__payment[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #000;\n  font-weight: 500;\n}\n.art[_ngcontent-%COMP%]   .art__flex-content[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .disc__footer[_ngcontent-%COMP%] {\n  margin-top: auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-top: 1px solid #dfdfdf;\n  padding: 16px 24px 18px;\n  text-align: left;\n}\n.art[_ngcontent-%COMP%]   .art__flex-content[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .disc__footer[_ngcontent-%COMP%]   .footer__price[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #000;\n  font-weight: 500;\n}\n.art[_ngcontent-%COMP%]   .art__flex-content[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .disc__footer[_ngcontent-%COMP%]   .footer__info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  border: 1px solid #e6e6e6;\n  border-radius: 12px;\n}\n.art[_ngcontent-%COMP%]   .art__flex-content[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .disc__footer[_ngcontent-%COMP%]   .footer__info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  text-decoration: none;\n  color: #000;\n  font-weight: 500;\n  display: inline-flex;\n  align-items: center;\n}\n.art[_ngcontent-%COMP%]   .art__flex-content[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .disc__footer[_ngcontent-%COMP%]   .footer__info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .icon-button[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  width: 14px;\n  transition: transform 0.3s ease;\n}\n.art[_ngcontent-%COMP%]   .art__flex-content[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .disc__footer[_ngcontent-%COMP%]   .footer__info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    > .icon-button[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaG9tZWFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGdDQUFBO0VBQ0Esb0JBQUE7QUFBSjtBQUVJO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFBTjtBQUVNO0VBQ0UsY0FBQTtBQUFSO0FBS0U7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBSEo7QUFLSTtFQVhGO0lBWUksa0JBQUE7SUFDQSxjQUFBO0lBQ0YsOEJBQUE7RUFGRjtBQUNGO0FBSUk7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFGTjtBQUlNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUZSO0FBS007RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBSFI7QUFLUTtFQU5GO0lBT0ksZUFBQTtFQUZSO0FBQ0Y7QUFLTTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUhSO0FBTU07RUFDRSxnQkFBQTtBQUpSO0FBTVE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG9GQUFBO0FBSlY7QUFPVTtFQUNFLHlCQUFBO0VBQ0EsMkNBQUE7RUFDQSwyQkFBQTtBQUxaO0FBVU07RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQVJSO0FBVVE7RUFDRSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQVJWO0FBWU07RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FBVlI7QUFjSTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQVpOO0FBY007RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBWlI7QUFpQkU7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFmSjtBQWlCSTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxREFBQTtBQWZOO0FBaUJVO0VBQ0osMkJBQUE7RUFDQSwwQ0FBQTtBQWZOO0FBa0JNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQWhCUjtBQW1CTTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUFqQlI7QUFvQk07RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQWxCUjtBQW9CUTtFQUNFLGFBQUE7QUFsQlY7QUFvQlU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBbEJaO0FBc0JRO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBcEJWO0FBdUJRO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFyQlY7QUF5Qk07RUFDRSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQXZCUjtBQXlCUTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUF2QlY7QUEyQk07RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBekJSO0FBMkJRO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQXpCVjtBQTRCUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQTFCVjtBQTRCVTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBMUJaO0FBNEJZO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7QUExQmQ7QUE2Qlk7RUFDRSx5QkFBQTtBQTNCZCIsImZpbGUiOiJob21lYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFydCB7XHJcbiAgLmFydF9fdGl0bGUge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZmRmZGY7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuXHJcbiAgICBwIHtcclxuICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgZm9udC1zaXplOiA0NHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBtYXJnaW46IDIwcHggMDtcclxuXHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiAjZGFkYWRhO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYXJ0X19tYWluLWNvbnRlbnQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTVlNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDMycHg7XHJcbiAgICBtYXJnaW46IDQwcHggMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIHBhZGRpbmc6IDI0cHggMTZweDtcclxuICAgICAgbWFyZ2luOiAyNHB4IDA7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQtYmFubmVyX190ZXh0IHtcclxuICAgICAgbWF4LXdpZHRoOiA1MjBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZ2FwOiA4cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcblxyXG4gICAgICAuYmFubmVyX19zdWJ0ZXh0IHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGNvbG9yOiAjNDQ0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYmFubmVyX190aXRsZSBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmJhbm5lcl9fYXV0aG9yIHAge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgY29sb3I6ICM1NTU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5idXR0b25zbGluayB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmc6IDE0cHggMjZweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RmZGZkZjtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yNXMgZWFzZSwgYm94LXNoYWRvdyAwLjI1cyBlYXNlLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm0gMC4xNXMgZWFzZTtcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjAzKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmJhbm5lcl9fY292aWQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZ2FwOiA4cHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjpob3ZlciB+IC5iYW5uZXJfX2NvdmlkLWhpZGVuIHtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5iYW5uZXJfX2NvdmlkLWhpZGVuIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNTVzIG9wYWNpdHksIDAuNTVzIHZpc2liaWxpdHk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYmFubmVyX19pbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWF4LXdpZHRoOiA2NDBweDtcclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hcnRfX2ZsZXgtY29udGVudCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNjBweCwgMWZyKSk7XHJcbiAgICBncmlkLWdhcDogMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC5jb250ZW50X19pdGVtIHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RmZGZkZjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4OyAvLyDRh9GC0L7QsdGLIGFuY2hvciDRgNCw0YHRgtGP0LPQuNCy0LDQu9GB0Y9cclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnMgZWFzZSwgdHJhbnNmb3JtIDAuMnMgZWFzZTtcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDZweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XHJcbiAgICB9XHJcblxyXG4gICAgICBhIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLml0ZW1fX2Rpc2Mge1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHggMjRweCAxOHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTsgLy8g0YLQtdC70L4g0LrQsNGA0YLQvtGH0LrQuCDRgtGP0L3QtdGC0YHRj1xyXG5cclxuICAgICAgICAuZGlzY19fdGl0bGUge1xyXG4gICAgICAgICAgbWFyZ2luOiA0cHggMDtcclxuXHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kaXNjX19zdWJ0aXRsZSBwIHtcclxuICAgICAgICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kaXNjX19hcHAgcCB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICBjb2xvcjogIzhmOGY4ZjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGlzY19fcGF5bWVudCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogYXV0bzsgLy8g0L/RgNC40LbQuNC80LDQtdGCINCy0L3QuNC3XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZmRmZGY7XHJcbiAgICAgICAgcGFkZGluZzogMTZweCAyNHB4IDE4cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGlzY19fZm9vdGVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiBhdXRvOyAvLyDRgtC+0LbQtSDQstC90LjQt1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZmRmZGY7XHJcbiAgICAgICAgcGFkZGluZzogMTZweCAyNHB4IDE4cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgICAgICAgLmZvb3Rlcl9fcHJpY2UgcCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZm9vdGVyX19pbmZvIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG5cclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE0cHg7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgLmljb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIgPiAuaWNvbi1idXR0b24ge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "6bL0":
/*!****************************************************************!*\
  !*** ./src/app/components/home/releases/releases.component.ts ***!
  \****************************************************************/
/*! exports provided: ReleasesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleasesComponent", function() { return ReleasesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ReleasesComponent {
    constructor() { }
    ngOnInit() {
    }
}
ReleasesComponent.ɵfac = function ReleasesComponent_Factory(t) { return new (t || ReleasesComponent)(); };
ReleasesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReleasesComponent, selectors: [["app-releases"]], decls: 77, vars: 0, consts: [[1, "sub-content__flexible"], [1, "flexible__title"], [1, "flexible__content"], ["href", "", 2, "display", "block"], [1, "item"], [1, "item__img"], ["src", "../../../assets/img/Concept search.jpg", "alt", "Big collection Illustration of Concept searches"], [1, "item__text"], [1, "text__title"], [1, "text_author"], ["src", "../../../assets/img/Knits.jpg", "alt", "Big collection of paid beautiful and colorful illustrations"], ["src", "../assets/img/20 funny and carefully-designed scenes in a cartoon style.png", "alt", "20 funny and carefully-designed scenes in a cartoon style"], ["src", "../../../assets/img/In touch.jpg", "alt", "Large collection of paid minimalistic illustrations"], ["src", "../../../assets/img/Social Media.jpg", "alt", "Big collection of paid colorful Social Media Illustration"], ["src", "../assets/img/Big collection of Business Card Mockups.jpg", "alt", "Big collection of Business Card Mockups"], ["src", "../assets/img/Free Wall Sign Mockup.jpg", "alt", "Free Wall Sign Mockup"], ["src", "../assets/img/UI Illustrations.jpg", "alt", "UI Illustrations"]], template: function ReleasesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Latest releases");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Big collection Illustration of Concept searches ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Krushko Nikita ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Big collection of paid beautiful and colorful illustrations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Krushko Nikita ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " 20 funny and carefully-designed scenes in a cartoon style ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " FelixTrex ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Big collection of paid minimalistic illustrations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Krushko Nikita ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Big collection of paid colorful Social Media Illustration ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Krushko Nikita ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Big collection of Business Card Mockups ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Author ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Free Wall Sign Mockup ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " FelixTrex ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " UI Illustrations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Author ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".sub-content__flexible[_ngcontent-%COMP%]   .flexible__title[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #dfdfdf;\n  padding-bottom: 15px;\n}\n.sub-content__flexible[_ngcontent-%COMP%]   .flexible__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n}\n.sub-content__flexible[_ngcontent-%COMP%]   .flexible__content[_ngcontent-%COMP%] {\n  display: grid;\n  margin-top: 15px;\n  width: 100%;\n  margin-bottom: 0;\n  flex-wrap: wrap;\n  grid-auto-columns: 1fr;\n  grid-column-gap: 16px;\n  grid-row-gap: 16px;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-template-rows: auto;\n  padding-bottom: 30px;\n  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));\n}\n.sub-content__flexible[_ngcontent-%COMP%]   .flexible__content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 100%;\n  text-decoration: none;\n  color: #000;\n}\n.sub-content__flexible[_ngcontent-%COMP%]   .flexible__content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: stretch;\n  align-items: center;\n}\n.sub-content__flexible[_ngcontent-%COMP%]   .flexible__content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  background-position: center;\n  background-size: cover;\n  border: 2px #e6e5e6 solid;\n  max-width: 90px;\n  width: 100%;\n  max-height: 90px;\n  height: 100%;\n  border-radius: 50%;\n}\n.sub-content__flexible[_ngcontent-%COMP%]   .flexible__content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item__text[_ngcontent-%COMP%] {\n  padding: 0 5px;\n  width: 100%;\n  max-width: 244px;\n}\n.sub-content__flexible[_ngcontent-%COMP%]   .flexible__content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item__text[_ngcontent-%COMP%]   .text__title[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n  font-weight: 600;\n}\n.sub-content__flexible[_ngcontent-%COMP%]   .flexible__content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item__text[_ngcontent-%COMP%]   .text_author[_ngcontent-%COMP%] {\n  color: #8f8f8f;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccmVsZWFzZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ1E7RUFDSSxnQ0FBQTtFQUNBLG9CQUFBO0FBQVo7QUFDWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUNoQjtBQUVRO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLDJEQUFBO0FBQVo7QUFDWTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUFDaEI7QUFBZ0I7RUFDSSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBQUVwQjtBQUF3QjtFQUNJLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFFNUI7QUFDb0I7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQ3hCO0FBQ3dCO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtBQUM1QjtBQUN3QjtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQUM1QiIsImZpbGUiOiJyZWxlYXNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAuc3ViLWNvbnRlbnRfX2ZsZXhpYmxle1xyXG4gICAgICAgIC5mbGV4aWJsZV9fdGl0bGV7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGZkZmRmO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmZsZXhpYmxlX19jb250ZW50e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICBncmlkLWF1dG8tY29sdW1uczogMWZyO1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDE2cHg7XHJcbiAgICAgICAgICAgIGdyaWQtcm93LWdhcDogMTZweDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjcwcHgsIDFmcikpO1xyXG4gICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgIC5pdGVte1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAuaXRlbV9faW1ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4ICNlNmU1ZTYgc29saWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDkwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLml0ZW1fX3RleHR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyNDRweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0X190aXRsZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0X2F1dGhvcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOGY4ZjhmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuIl19 */"] });


/***/ }),

/***/ "AmQA":
/*!****************************************************************!*\
  !*** ./src/app/components/router/gamedev/gamedev.component.ts ***!
  \****************************************************************/
/*! exports provided: GamedevComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamedevComponent", function() { return GamedevComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");


class GamedevComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.titleService.setTitle("Game Development");
    }
}
GamedevComponent.ɵfac = function GamedevComponent_Factory(t) { return new (t || GamedevComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
GamedevComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GamedevComponent, selectors: [["app-gamedev"]], decls: 2, vars: 0, template: function GamedevComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "gamedev works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYW1lZGV2LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _releases_releases_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./releases/releases.component */ "6bL0");
/* harmony import */ var _homeart_homeart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homeart/homeart.component */ "5MbP");





function HomeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.srcImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.subtext);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Author: ", item_r1.subtitle, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.linkInfo, " ");
} }
class HomeComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.RealeasDb = [
            {
                srcImg: 'https://stories.freepiklabs.com/storage/39401/Climbing-(2)_Artboard-1.svg',
                title: 'Climbing Flat Illustrations ',
                subtitle: 'StorySet',
                subtext: 'Static Illustrations',
                link: 'https://storyset.com/illustration/climbing/rafiki',
                linkInfo: 'View illustration'
            }
        ];
        this.titleService.setTitle("Free and premium tools for graphic designers | MStore");
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 5, vars: 1, consts: [["class", "title-content", 4, "ngFor", "ngForOf"], [1, "sub-content"], [1, "main-content"], [1, "title-content"], [1, "main-content__banner"], [1, "banner__img"], [3, "src", "alt"], [1, "content-banner__text"], [1, "banner__subtext"], [1, "banner__title"], [1, "banner__author"], [1, "buttonslink"], ["target", "_blank", 3, "href"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_div_0_Template, 17, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-releases");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-homeart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.RealeasDb);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _releases_releases_component__WEBPACK_IMPORTED_MODULE_3__["ReleasesComponent"], _homeart_homeart_component__WEBPACK_IMPORTED_MODULE_4__["HomeartComponent"]], styles: [".title-content[_ngcontent-%COMP%] {\n  border: 1px solid #e6e5e6;\n  border-radius: 24px;\n  width: 100%;\n  margin: 0 auto 40px;\n  padding: 40px 24px;\n  min-height: 70vh;\n  box-sizing: border-box;\n}\n@media (max-width: 768px) {\n  .title-content[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n    border-radius: 20px;\n  }\n}\n.title-content[_ngcontent-%COMP%]   .main-content__banner[_ngcontent-%COMP%] {\n  max-width: 820px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: center;\n  text-align: center;\n  gap: 32px;\n}\n@media (max-width: 768px) {\n  .title-content[_ngcontent-%COMP%]   .main-content__banner[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.title-content[_ngcontent-%COMP%]   .banner__img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.title-content[_ngcontent-%COMP%]   .banner__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  border-radius: 16px;\n  object-fit: cover;\n  display: block;\n}\n.title-content[_ngcontent-%COMP%]   .content-banner__text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  line-height: 1.5;\n}\n.title-content[_ngcontent-%COMP%]   .content-banner__text[_ngcontent-%COMP%]   .banner__subtext[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  margin-bottom: 8px;\n}\n.title-content[_ngcontent-%COMP%]   .content-banner__text[_ngcontent-%COMP%]   .banner__title[_ngcontent-%COMP%] {\n  max-width: 520px;\n  margin-bottom: 8px;\n}\n.title-content[_ngcontent-%COMP%]   .content-banner__text[_ngcontent-%COMP%]   .banner__title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  line-height: 1.2;\n  font-weight: 700;\n}\n@media (max-width: 768px) {\n  .title-content[_ngcontent-%COMP%]   .content-banner__text[_ngcontent-%COMP%]   .banner__title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n}\n.title-content[_ngcontent-%COMP%]   .content-banner__text[_ngcontent-%COMP%]   .banner__author[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  margin-bottom: 24px;\n}\n.title-content[_ngcontent-%COMP%]   .content-banner__text[_ngcontent-%COMP%]   .buttonslink[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 14px 28px;\n  border-radius: 999px;\n  border: 1px solid #dfdfdf;\n  text-decoration: none;\n  color: #000;\n  font-weight: 500;\n  background-color: #fff;\n  transition: box-shadow 0.2s ease, transform 0.1s ease, background-color 0.2s ease;\n}\n.title-content[_ngcontent-%COMP%]   .content-banner__text[_ngcontent-%COMP%]   .buttonslink[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #f8f8f8;\n  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);\n  transform: translateY(-1px);\n}\n.sub-content[_ngcontent-%COMP%], .main-content[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUNGO0FBQ0U7RUFURjtJQVVJLGtCQUFBO0lBQ0EsbUJBQUE7RUFFRjtBQUNGO0FBQUU7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQUVKO0FBQUU7RUFUQTtJQVVFLHNCQUFBO0VBR0Y7QUFDRjtBQUFFO0VBQ0UsV0FBQTtBQUVKO0FBREk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBR047QUFDRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUNJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDTjtBQUVJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQUFOO0FBRU07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUFSO0FBRVE7RUFMRjtJQU1JLGVBQUE7RUFDUjtBQUNGO0FBR0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUROO0FBS007RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUZBQUE7QUFIUjtBQU1RO0VBQ0UseUJBQUE7RUFDQSwwQ0FBQTtFQUNBLDJCQUFBO0FBSlY7QUFXQTs7RUFFRSxnQkFBQTtBQVJGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUtY29udGVudCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTVlNjtcclxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvIDQwcHg7XHJcbiAgcGFkZGluZzogNDBweCAyNHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDcwdmg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBwYWRkaW5nOiAyNHB4IDE2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1haW4tY29udGVudF9fYmFubmVyIHtcclxuICAgIG1heC13aWR0aDogODIwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZ2FwOiAzMnB4O1xyXG4gICAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICB9XHJcblxyXG4gIC5iYW5uZXJfX2ltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250ZW50LWJhbm5lcl9fdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG5cclxuICAgIC5iYW5uZXJfX3N1YnRleHQgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5iYW5uZXJfX3RpdGxlIHtcclxuICAgICAgbWF4LXdpZHRoOiA1MjBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG5cclxuICAgICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5iYW5uZXJfX2F1dGhvciBwIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b25zbGluayB7XHJcbiAgICAgIGEge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMTRweCAyOHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZmRmZGY7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnMgZWFzZSwgdHJhbnNmb3JtIDAuMXMgZWFzZSxcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDZweCAxOHB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc3ViLWNvbnRlbnQsXHJcbi5tYWluLWNvbnRlbnQge1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "Gfp6":
/*!******************************************************************!*\
  !*** ./src/app/components/router/our-team/our-team.component.ts ***!
  \******************************************************************/
/*! exports provided: OurTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurTeamComponent", function() { return OurTeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../slider/slider.component */ "+zoA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class OurTeamComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.titleService.setTitle("Our-team");
    }
}
OurTeamComponent.ɵfac = function OurTeamComponent_Factory(t) { return new (t || OurTeamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
OurTeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OurTeamComponent, selectors: [["app-our-team"]], decls: 7, vars: 0, consts: [[1, "content__flex"], [1, "flex__title"]], template: function OurTeamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Our Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
    } }, directives: [_slider_slider_component__WEBPACK_IMPORTED_MODULE_2__["SliderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".content__flex[_ngcontent-%COMP%]   .flex__title[_ngcontent-%COMP%] {\n  text-align: center;\n  border-bottom: 1px solid #dfdfdf;\n  padding-bottom: 15px;\n}\n.content__flex[_ngcontent-%COMP%]   .flex__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n}\n.content__flex[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  flex-direction: row;\n  justify-content: space-evenly;\n  margin: 20px 0;\n}\n.content__flex[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%] {\n  text-decoration: none;\n  margin: 10px 10px;\n  border: 1px solid #dfdfdf;\n  border-radius: 10%;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  align-items: center;\n}\n.content__flex[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 60px 45px;\n  cursor: pointer;\n  text-decoration: none;\n}\n.content__flex[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active   .content__item[_ngcontent-%COMP%] {\n  background-color: black;\n}\n.content__flex[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]:hover {\n  border: 1px solid #c7c7c7;\n}\n.content__flex[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .content-item__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  background-position: center;\n  background-size: cover;\n  border: 2px #e6e5e6 solid;\n  max-width: 102px;\n  width: 100%;\n  max-height: 102px;\n  height: 100%;\n  border-radius: 50%;\n}\n.content__flex[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .item__disc[_ngcontent-%COMP%]   .disc__title[_ngcontent-%COMP%] {\n  padding-top: 15px;\n}\n.content__flex[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .item__disc[_ngcontent-%COMP%]   .disc__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 200px;\n  color: #8f8f8f;\n  font-weight: 500;\n}\n.content__flex[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .item__disc[_ngcontent-%COMP%]   .disc__text[_ngcontent-%COMP%] {\n  padding-top: 15px;\n}\n.content__flex[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .item__disc[_ngcontent-%COMP%]   .disc__text[_ngcontent-%COMP%]   P[_ngcontent-%COMP%] {\n  max-width: 200px;\n  max-height: 400px;\n  color: #8f8f8f;\n  font-weight: 500;\n}\n.content__flex[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\n  padding-top: 15px;\n}\n.content__flex[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #575656;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcb3VyLXRlYW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7QUFBUjtBQUNRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBQ1o7QUFFSTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtBQUFKO0FBRVE7RUFXSSxxQkFBQTtFQUNBLGlCQUFBO0VBRUEseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFYWjtBQVBZO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFTaEI7QUFSZ0I7RUFDSSx1QkFBQTtBQVVwQjtBQUtZO0VBQ0kseUJBQUE7QUFIaEI7QUFNZ0I7RUFDSSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUpwQjtBQVFnQjtFQUNJLGlCQUFBO0FBTnBCO0FBT29CO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFMeEI7QUFRZ0I7RUFDSSxpQkFBQTtBQU5wQjtBQU9vQjtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFMeEI7QUFTWTtFQUNJLGlCQUFBO0FBUGhCO0FBUWdCO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBTnBCIiwiZmlsZSI6Im91ci10ZWFtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnRfX2ZsZXh7XHJcbiAgICAuZmxleF9fdGl0bGV7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGZkZmRmO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBuYXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyAgIFxyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIG1hcmdpbjoyMHB4IDA7ICAgXHJcblxyXG4gICAgICAgIC5jb250ZW50X19pdGVte1xyXG4gICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNjBweCA0NXB4O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYTphY3RpdmUgIC5jb250ZW50X19pdGVte1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDBweCA1MHB4IDEwMHB4IC0yMHB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDMwcHggNjBweCAtMzBweCwgcmdiYSgxMCwgMzcsIDY0LCAwLjM1KSAwcHggLTJweCA2cHggMHB4IGluc2V0O1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAxMHB4O1xyXG5cclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RmZGZkZjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2M3YzdjNztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29udGVudC1pdGVtX19pbWd7XHJcbiAgICAgICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4ICNlNmU1ZTYgc29saWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDJweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDJweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pdGVtX19kaXNje1xyXG4gICAgICAgICAgICAgICAgLmRpc2NfX3RpdGxle1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOGY4ZjhmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5kaXNjX190ZXh0e1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIFB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzhmOGY4ZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnJvbGV7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1NzU2NTY7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "HKpF":
/*!**********************************************************!*\
  !*** ./src/app/components/router/uiux/uiux.component.ts ***!
  \**********************************************************/
/*! exports provided: UIUXComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIUXComponent", function() { return UIUXComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




function UIUXComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const title_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](title_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](title_r2.discription);
} }
function UIUXComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const content_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", content_r3.routerLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", content_r3.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", content_r3.alt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](content_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](content_r3.subtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](content_r3.app);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](content_r3.presentation);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", content_r3.currency, " ", content_r3.price, "");
} }
class UIUXComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.Title = [
            {
                title: 'UI and UX Tools',
                discription: 'Boost your workflow with our UI Kits, Design Systems and graphic assets'
            }
        ];
        this.uiuxcontent = [
            {
                src: 'https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/6018068a28aa358957c5b2aa_800x600-p-800.png',
                alt: 'Powerful,colorful iOS 14 Kit with 280+ Ready Layouts',
                title: 'Fragments iOS Wireframe Kit',
                subtitle: 'Powerful,colorful iOS 14 Kit with 280+ Ready Layouts',
                app: 'for Sketch and Figma',
                currency: '$',
                price: '35',
                presentation: 'View presentation',
            },
            {
                src: 'https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/5fe5ebf7099f983378d64e64_%20800.jpg',
                alt: 'Design Starter Kit',
                title: 'Design Starter Kit',
                subtitle: 'Design System, UI starter kit, illustrations and skeletons',
                app: 'for Sketch',
                currency: '$',
                price: '35',
                presentation: 'View presentation',
            },
            {
                src: 'https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/5c2ddb6aa1a87225969418b5_cp.jpeg',
                alt: 'Control Panel',
                title: 'Control Panel',
                subtitle: 'Neatly organized design system with bunch of great features',
                app: 'for Sketch',
                currency: '$',
                price: '79',
                presentation: 'View presentation',
            },
            {
                src: 'https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/5fe34e2ab59fa3307bf4b489_5c867988a630fe868ac66dc1_Charts.jpg',
                alt: 'Charts',
                title: 'Charts',
                subtitle: 'All types of charts for your web and mobile projects',
                app: 'for Sketch',
                currency: '',
                price: 'Free',
                presentation: 'View presentation',
            }
        ].map(item => (Object.assign(Object.assign({}, item), { 
            // автоматическое создание routerLink из title
            routerLink: item.title.toLowerCase().replace(/\s+/g, '-') })));
        this.titleService.setTitle("UI & UX");
    }
    ngOnInit() {
        // Добавляем автоматическую генерацию routerLink
        this.uiuxcontent = this.addRouterLinks(this.uiuxcontent, 'UI-UX');
    }
    addRouterLinks(list, category) {
        return list.map(item => (Object.assign(Object.assign({}, item), { routerLink: `/${category}/${item.title.toLowerCase().replace(/\s+/g, '-')}` })));
    }
}
UIUXComponent.ɵfac = function UIUXComponent_Factory(t) { return new (t || UIUXComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
UIUXComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UIUXComponent, selectors: [["app-uiux"]], decls: 4, vars: 2, consts: [[1, "uiux-content"], ["class", "uiux-content__info", 4, "ngFor", "ngForOf"], [1, "uiux-grid"], ["class", "uiux-card", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "uiux-content__info"], [1, "content__title"], [1, "content__discription"], [1, "uiux-card", 3, "routerLink"], [3, "src", "alt"], [1, "uiux-card__body"], [1, "desc"], [1, "tags"], [1, "uiux-card__footer"], [1, "currency"]], template: function UIUXComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UIUXComponent_div_1_Template, 7, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UIUXComponent_a_3_Template, 14, 9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.uiuxcontent);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".uiux-content[_ngcontent-%COMP%]   .uiux-content__info[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 100px 0 60px 0;\n}\n.uiux-content[_ngcontent-%COMP%]   .uiux-content__info[_ngcontent-%COMP%]   .content__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 60px;\n  font-weight: 500;\n  color: #000;\n}\n.uiux-content[_ngcontent-%COMP%]   .uiux-content__info[_ngcontent-%COMP%]   .content__discription[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #696969;\n  font-weight: 400;\n}\n.uiux-content[_ngcontent-%COMP%]   .uiux-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: 24px;\n}\n.uiux-content[_ngcontent-%COMP%]   .uiux-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  border: 1px solid #e6e6e6;\n  border-radius: 12px;\n  background: #fff;\n  overflow: hidden;\n  transition: box-shadow 0.2s ease, transform 0.2s ease;\n  text-decoration: none;\n}\n.uiux-content[_ngcontent-%COMP%]   .uiux-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);\n}\n.uiux-content[_ngcontent-%COMP%]   .uiux-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 220px;\n  object-fit: cover;\n  border-radius: 12px 12px 0 0;\n}\n.uiux-content[_ngcontent-%COMP%]   .uiux-card__body[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 20px 24px;\n  text-align: left;\n}\n.uiux-content[_ngcontent-%COMP%]   .uiux-card__body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #000;\n  margin-bottom: 8px;\n}\n.uiux-content[_ngcontent-%COMP%]   .uiux-card__body[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #555;\n  margin-bottom: 6px;\n  line-height: 1.5;\n}\n.uiux-content[_ngcontent-%COMP%]   .uiux-card__body[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #888;\n  line-height: 1.4;\n}\n.uiux-content[_ngcontent-%COMP%]   .uiux-card__footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  border-top: 1px solid #e6e6e6;\n  padding: 14px 24px;\n  text-align: left;\n}\n.uiux-content[_ngcontent-%COMP%]   .uiux-card__footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 500;\n  color: #000;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdWl1eC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7QUFBSjtBQUVJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUFOO0FBR0k7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBRE47QUFLRTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLFNBQUE7QUFISjtBQU1FO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFEQUFBO0VBQ0EscUJBQUE7QUFKSjtBQU1JO0VBQ0UsMkJBQUE7RUFDQSwwQ0FBQTtBQUpOO0FBT0k7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUFMTjtBQVFJO0VBQ0UsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFOTjtBQVFNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBTlI7QUFTTTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVBSO0FBVU07RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBUlI7QUFZSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVZOO0FBYU07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQVhSIiwiZmlsZSI6InVpdXguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWl1eC1jb250ZW50IHtcclxuICAudWl1eC1jb250ZW50X19pbmZvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTAwcHggMCA2MHB4IDA7XHJcblxyXG4gICAgLmNvbnRlbnRfX3RpdGxlIHAge1xyXG4gICAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50X19kaXNjcmlwdGlvbiBwIHtcclxuICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICBjb2xvcjogIzY5Njk2OTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC51aXV4LWdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjYwcHgsIDFmcikpO1xyXG4gICAgZ2FwOiAyNHB4O1xyXG4gIH1cclxuXHJcbiAgLnVpdXgtY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnMgZWFzZSwgdHJhbnNmb3JtIDAuMnMgZWFzZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDZweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XHJcbiAgICB9XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMjIwcHg7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHggMCAwO1xyXG4gICAgfVxyXG5cclxuICAgICZfX2JvZHkge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBwYWRkaW5nOiAyMHB4IDI0cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcblxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGVzYyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGFncyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjODg4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19mb290ZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTZlNmU2O1xyXG4gICAgICBwYWRkaW5nOiAxNHB4IDI0cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcblxyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Jkzo":
/*!************************************************************!*\
  !*** ./src/app/components/router/anton/anton.component.ts ***!
  \************************************************************/
/*! exports provided: AntonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntonComponent", function() { return AntonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AntonComponent {
    constructor() { }
    ngOnInit() {
    }
}
AntonComponent.ɵfac = function AntonComponent_Factory(t) { return new (t || AntonComponent)(); };
AntonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AntonComponent, selectors: [["app-anton"]], decls: 2, vars: 0, template: function AntonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "anton works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbnRvbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 97, vars: 0, consts: [[1, "footer"], [1, "footer__nav"], ["routerLink", "/"], ["src", "../assets/logo.png", "alt", "Logo", 1, "icon-logo"], ["routerLink", "/uiux"], ["routerLink", "/illustrations"], ["routerLink", "/motiondesign"], ["routerLink", "/gamedesign"], ["routerLink", "/webdevelopment"], ["routerLink", "/Our-team"], [1, "footer__feedback"], ["href", ""], ["width", "50px", "height", "50px", "viewBox", "0 0 100 100", "xmlns", "http://www.w3.org/2000/svg"], ["cx", "13", "cy", "29", "r", "2", "fill", "#78a0cf"], ["cx", "77", "cy", "13", "r", "1", "fill", "#f1bc19"], ["cx", "50", "cy", "50", "r", "37", "fill", "#cee1f4"], ["cx", "83", "cy", "15", "r", "4", "fill", "#f1bc19"], ["cx", "87", "cy", "24", "r", "2", "fill", "#78a0cf"], ["cx", "81", "cy", "76", "r", "2", "fill", "#fbcd59"], ["cx", "15", "cy", "63", "r", "4", "fill", "#fbcd59"], ["cx", "25", "cy", "87", "r", "2", "fill", "#78a0cf"], ["cx", "18.5", "cy", "53.5", "r", "2.5", "fill", "#fff"], ["cx", "21", "cy", "67", "r", "1", "fill", "#f1bc19"], ["cx", "80", "cy", "34", "r", "1", "fill", "#fff"], ["d", "m72.3 76.3-10.5-7.6 1.3 3.6h-29.4c-3.314 0-6-2.686-6-6v-32.6c0-3.314 2.686-6 6-6h32.6c3.314 0 6 2.686 6 6v42.6z", "fill", "#beace5"], ["d", "M72.3,77c-0.145,0-0.289-0.045-0.41-0.133l-8.66-6.268l0.528,1.463 c0.078,0.214,0.046,0.453-0.085,0.64C63.541,72.889,63.328,73,63.1,73H33.7c-3.694,0-6.7-3.006-6.7-6.7V33.7 c0-3.694,3.006-6.7,6.7-6.7h32.6c3.694,0,6.7,3.006,6.7,6.7v42.6c0,0.263-0.147,0.504-0.382,0.623C72.518,76.975,72.408,77,72.3,77z M61.8,68c0.144,0,0.288,0.045,0.41,0.133l9.39,6.796V33.7c0-2.922-2.377-5.3-5.3-5.3H33.7c-2.923,0-5.3,2.377-5.3,5.3v32.6 c0,2.923,2.377,5.3,5.3,5.3h28.402l-0.961-2.662c-0.104-0.288-0.008-0.611,0.237-0.797C61.503,68.047,61.651,68,61.8,68z", "fill", "#472b29"], ["d", "m54.5 70h-12c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h12c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z", "fill", "#472b29"], ["d", "m69.5 66c-0.276 0-0.5-0.224-0.5-0.5v-6c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v6c0 0.276-0.224 0.5-0.5 0.5z", "fill", "#472b29"], ["d", "m69.5 57c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5z", "fill", "#472b29"], ["d", "m39.5 70h-6c-1.93 0-3.5-1.57-3.5-3.5v-33c0-1.93 1.57-3.5 3.5-3.5h33c1.93 0 3.5 1.57 3.5 3.5v18c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-18c0-1.378-1.121-2.5-2.5-2.5h-33c-1.379 0-2.5 1.122-2.5 2.5v33c0 1.379 1.121 2.5 2.5 2.5h6c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z", "fill", "#472b29"], ["d", "m59.5 41.8s-2.43-1.47-5.9-1.9l-0.66 1.86s-0.94-0.26-2.94-0.26-2.94 0.26-2.94 0.26l-0.66-1.86c-3.47 0.43-5.9 1.9-5.9 1.9-1.9 1.18-4 9.2-4 14 0 0 2.88 3.7 7.3 3.7l1.78-2.63s2.42 0.63 4.42 0.63 4.42-0.63 4.42-0.63l1.78 2.63c4.42 0 7.3-3.7 7.3-3.7 0-4.8-2.1-12.82-4-14zm-14 11.7c-1.1 0-2-1.12-2-2.5s0.9-2.5 2-2.5 2 1.12 2 2.5-0.9 2.5-2 2.5zm9 0c-1.1 0-2-1.12-2-2.5s0.9-2.5 2-2.5 2 1.12 2 2.5-0.9 2.5-2 2.5z", "fill", "#fdfcef"], ["d", "m45.5 54c-1.379 0-2.5-1.346-2.5-3s1.121-3 2.5-3 2.5 1.346 2.5 3-1.121 3-2.5 3zm0-5c-0.827 0-1.5 0.897-1.5 2s0.673 2 1.5 2 1.5-0.897 1.5-2-0.673-2-1.5-2z", "fill", "#472b29"], ["d", "m54.5 54c-1.379 0-2.5-1.346-2.5-3s1.121-3 2.5-3 2.5 1.346 2.5 3-1.121 3-2.5 3zm0-5c-0.827 0-1.5 0.897-1.5 2s0.673 2 1.5 2 1.5-0.897 1.5-2-0.673-2-1.5-2z", "fill", "#472b29"], ["d", "M42.5,43.8c-0.169,0-0.335-0.086-0.429-0.243c-0.143-0.237-0.065-0.544,0.172-0.686 C42.37,42.794,45.414,41,50,41s7.63,1.794,7.757,1.871c0.237,0.142,0.313,0.448,0.172,0.685c-0.142,0.236-0.449,0.314-0.686,0.173 C57.214,43.711,54.295,42,50,42c-4.312,0-7.214,1.711-7.243,1.729C42.677,43.777,42.588,43.8,42.5,43.8z", "fill", "#472b29"], ["d", "M50,58c-5.204,0-8.652-2.491-8.796-2.597c-0.223-0.164-0.271-0.476-0.107-0.698 c0.164-0.223,0.477-0.27,0.699-0.108C41.828,54.621,45.139,57,50,57c4.879,0,8.171-2.379,8.204-2.403 c0.221-0.163,0.534-0.117,0.699,0.106c0.163,0.223,0.115,0.536-0.107,0.699C58.652,55.509,55.204,58,50,58z", "fill", "#472b29"], ["d", "M43.8,60c-4.61,0-7.57-3.734-7.694-3.893C36.037,56.019,36,55.911,36,55.8 c0-4.438,1.979-13.015,4.235-14.424c0.109-0.066,2.571-1.533,6.104-1.972c0.231-0.023,0.454,0.107,0.532,0.328l0.664,1.857 c0.093,0.26-0.042,0.546-0.303,0.639c-0.26,0.094-0.545-0.043-0.639-0.302l-0.527-1.475c-3.103,0.469-5.286,1.764-5.309,1.777 c-1.592,0.995-3.705,8.556-3.757,13.392c0.533,0.615,3.016,3.25,6.537,3.375l1.633-2.408c0.155-0.228,0.466-0.288,0.694-0.133 c0.229,0.155,0.288,0.466,0.134,0.694l-1.785,2.632C44.12,59.918,43.966,60,43.8,60z", "fill", "#472b29"], ["d", "M56.2,60c-0.166,0-0.32-0.082-0.414-0.219l-1.785-2.632c-0.154-0.229-0.095-0.54,0.134-0.694 c0.229-0.156,0.539-0.096,0.694,0.133l1.633,2.408c3.521-0.126,6.004-2.76,6.537-3.375c-0.052-4.835-2.165-12.397-3.764-13.396 c-0.017-0.009-2.2-1.304-5.302-1.773l-0.527,1.475c-0.093,0.259-0.378,0.396-0.639,0.302c-0.261-0.093-0.396-0.379-0.303-0.639 l0.664-1.857c0.078-0.221,0.301-0.354,0.532-0.328c3.532,0.439,5.994,1.906,6.097,1.968C62.021,42.785,64,51.362,64,55.8 c0,0.111-0.037,0.219-0.105,0.307C63.771,56.266,60.811,60,56.2,60z", "fill", "#472b29"], ["href", "https://www.instagram.com/nikita_krushko/", "target", "_blank"], ["d", "m77 12a1 1 0 1 0 0 2 1 1 0 1 0 0-2z", "fill", "#f1bc19"], ["d", "m50 13a37 37 0 1 0 0 74 37 37 0 1 0 0-74z", "fill", "#e6edb7"], ["d", "m83 11a4 4 0 1 0 0 8 4 4 0 1 0 0-8z", "fill", "#f1bc19"], ["d", "m87 22a2 2 0 1 0 0 4 2 2 0 1 0 0-4z", "fill", "#88ae45"], ["d", "m81 74a2 2 0 1 0 0 4 2 2 0 1 0 0-4zm-66-15a4 4 0 1 0 0 8 4 4 0 1 0 0-8z", "fill", "#fbcd59"], ["d", "m25 85a2 2 0 1 0 0 4 2 2 0 1 0 0-4z", "fill", "#88ae45"], ["d", "m18.5 49a2.5 2.5 0 1 0 0 5 2.5 2.5 0 1 0 0-5zm61-17a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3z", "fill", "#fff"], ["d", "M35,72.3c-4,0-7.3-3.3-7.3-7.3V35c0-4,3.3-7.3,7.3-7.3h30c4,0,7.3,3.3,7.3,7.3v30c0,4-3.3,7.3-7.3,7.3H35z", "fill", "#babce2"], ["d", "m65 28.4c3.6 0 6.6 3 6.6 6.6v30c0 3.6-3 6.6-6.6 6.6h-30c-3.6 0-6.6-3-6.6-6.6v-30c0-3.6 3-6.6 6.6-6.6h30m0-1.4h-30c-4.4 0-8 3.6-8 8v30c0 4.4 3.6 8 8 8h30c4.4 0 8-3.6 8-8v-30c0-4.4-3.6-8-8-8z", "fill", "#472b29"], ["d", "m68.5 47.9v16.1c0 2.5-2 4.5-4.5 4.5h-28c-2.5 0-4.5-2-4.5-4.5v-28c0-2.5 2-4.5 4.5-4.5h28c2.5 0 4.5 2 4.5 4.5v11.9", "fill", "#fdfcee"], ["d", "M68.5 47.4c-.3 0-.5-.2-.5-.5V43c0-.3.2-.5.5-.5S69 42.7 69 43v3.9C69 47.2 68.8 47.4 68.5 47.4zM68.5 40.5c-.3 0-.5-.2-.5-.5v-2c0-.3.2-.5.5-.5S69 37.7 69 38v2C69 40.3 68.8 40.5 68.5 40.5z", "fill", "#472b29"], ["d", "M64,69H36c-2.8,0-5-2.2-5-5V36c0-2.8,2.2-5,5-5h25.4c0.3,0,0.5,0.2,0.5,0.5S61.7,32,61.4,32H36 c-2.2,0-4,1.8-4,4v28c0,2.2,1.8,4,4,4h28c2.2,0,4-1.8,4-4V49.6c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5V64C69,66.8,66.8,69,64,69z", "fill", "#472b29"], ["d", "m46 61.5c-4.1 0-7.5-3.4-7.5-7.5v-8c0-4.1 3.4-7.5 7.5-7.5h8c4.1 0 7.5 3.4 7.5 7.5v8c0 4.1-3.4 7.5-7.5 7.5h-8z", "fill", "#8a8dce"], ["d", "m54 39c3.9 0 7 3.1 7 7v8c0 3.9-3.1 7-7 7h-8c-3.9 0-7-3.1-7-7v-8c0-3.9 3.1-7 7-7h8m0-1h-8c-4.4 0-8 3.6-8 8v8c0 4.4 3.6 8 8 8h8c4.4 0 8-3.6 8-8v-8c0-4.4-3.6-8-8-8z", "fill", "#472b29"], ["d", "m50 44.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 1 0 0-11z", "fill", "#fdfcee"], ["d", "m50 45c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5m0-1c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z", "fill", "#472b29"], ["d", "m56.5 42a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3z", "fill", "#fdfcee"], ["d", "m56.5 45.5c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2zm0-3c-0.6 0-1 0.4-1 1s0.4 1 1 1 1-0.4 1-1-0.4-1-1-1z", "fill", "#472b29"], ["href", "https://github.com/Wrincied", "target", "_blank"], ["d", "m50 13a37 37 0 1 0 0 74 37 37 0 1 0 0-74z", "fill", "#e4e4f9"], ["d", "m87 22a2 2 0 1 0 0 4 2 2 0 1 0 0-4z", "fill", "#8889b9"], ["d", "m25 85a2 2 0 1 0 0 4 2 2 0 1 0 0-4z", "fill", "#8889b9"], ["d", "m50 25.625a24.25 24.25 0 1 0 0 48.5 24.25 24.25 0 1 0 0-48.5z", "fill", "#a3a3cd"], ["d", "m50 74.825c-13.757 0-24.95-11.192-24.95-24.95s11.193-24.95 24.95-24.95 24.95 11.192 24.95 24.95-11.193 24.95-24.95 24.95zm0-48.5c-12.985 0-23.55 10.564-23.55 23.55s10.565 23.55 23.55 23.55 23.55-10.564 23.55-23.55-10.565-23.55-23.55-23.55z", "fill", "#472b29"], ["d", "m50 29.167a20.5 20.5 0 1 0 0 41 20.5 20.5 0 1 0 0-41z", "fill", "#565fa1"], ["d", "m69.424 44.625c-0.214 0-0.412-0.139-0.478-0.354-0.088-0.287-0.183-0.571-0.284-0.853-0.392-1.094-0.886-2.159-1.47-3.169-0.139-0.238-0.057-0.545 0.182-0.683 0.239-0.141 0.545-0.057 0.683 0.183 0.614 1.061 1.134 2.182 1.546 3.331 0.106 0.297 0.206 0.595 0.298 0.897 0.081 0.264-0.067 0.544-0.332 0.625-0.048 0.016-0.097 0.023-0.145 0.023z", "fill", "#472b29"], ["d", "m50 70.75c-11.511 0-20.875-9.337-20.875-20.813s9.364-20.812 20.875-20.812c5.975 0 11.674 2.56 15.636 7.023 0.299 0.337 0.588 0.685 0.865 1.041 0.169 0.218 0.13 0.531-0.087 0.701-0.218 0.171-0.532 0.131-0.702-0.088-0.264-0.339-0.54-0.669-0.824-0.99-3.772-4.25-9.199-6.688-14.888-6.688-10.959 0-19.875 8.888-19.875 19.813s8.916 19.813 19.875 19.813 19.875-8.888 19.875-19.813c0-0.995-0.075-1.996-0.222-2.973-0.041-0.272 0.147-0.527 0.42-0.568 0.278-0.045 0.528 0.147 0.569 0.42 0.154 1.025 0.233 2.076 0.233 3.121 0 11.476-9.364 20.813-20.875 20.813z", "fill", "#472b29"], ["d", "m61.496 42.088c0.365-1.671 0.206-3.743-0.486-5.818-3.622 0-6.339 2.716-6.339 2.716s0.016 0.018 0.02 0.023c-0.064-1e-3 -0.126-9e-3 -0.191-9e-3h-9c-0.043 0-0.085 6e-3 -0.128 6e-3 3e-3 -4e-3 0.017-0.02 0.017-0.02s-2.717-2.716-6.339-2.716c-0.684 2.053-0.85 4.104-0.5 5.767-1.577 1.695-2.55 3.963-2.55 6.463 0 5.247 4.253 9.5 9.5 9.5h1.073c-1.304 0.709-2.246 1.979-2.493 3.498-1.72 0.232-3.979 0.18-5.028-1.394-1.811-2.717-2.717-2.717-3.622-2.717s-0.906 0.906 0 1.811c0.906 0.906 0.906 0.906 1.811 2.717 0.772 1.543 2.812 3.298 6.76 2.663v3.523c0 0.447 0.079 0.871 0.191 1.282 2.425 0.577 6.502 1.061 11.665-0.151 0.086-0.364 0.143-0.739 0.143-1.13v-5.816c0-1.858-1.047-3.456-2.573-4.286h1.073c5.247 0 9.5-4.253 9.5-9.5 0-2.475-0.954-4.721-2.504-6.412z", "fill", "#fefdef"], ["d", "m49.532 70.486c-2.23 0-4.075-0.287-5.457-0.616-0.178-0.042-0.319-0.179-0.367-0.355-0.142-0.522-0.208-0.972-0.208-1.413v-2.952c-4.563 0.514-6.279-2.154-6.707-3.011-0.87-1.739-0.87-1.739-1.717-2.587-0.701-0.701-0.979-1.458-0.745-2.023 0.169-0.408 0.569-0.642 1.098-0.642 1.217 0 2.219 0.211 4.038 2.939 0.839 1.258 2.676 1.379 4.193 1.218 0.23-0.978 0.724-1.855 1.423-2.554-5.321-0.218-9.583-4.615-9.583-9.99 0-2.442 0.891-4.78 2.513-6.613-0.306-1.722-0.108-3.761 0.564-5.775 0.068-0.204 0.259-0.342 0.474-0.342 3.357 0 5.931 2.16 6.552 2.73h8.854c0.621-0.57 3.195-2.73 6.552-2.73 0.215 0 0.406 0.138 0.474 0.342 0.679 2.037 0.872 4.096 0.551 5.83 1.591 1.826 2.465 4.146 2.465 6.559 0 5.375-4.263 9.773-9.585 9.991 1.001 0.997 1.585 2.354 1.585 3.794v5.816c0 0.392-0.052 0.8-0.158 1.246-0.043 0.185-0.188 0.328-0.372 0.371-2.387 0.561-4.55 0.767-6.437 0.767zm-4.93-1.521c2.412 0.537 6.153 0.9 10.83-0.148 0.045-0.253 0.068-0.489 0.068-0.715v-5.816c0-1.597-0.886-3.07-2.312-3.846-0.201-0.109-0.302-0.341-0.246-0.563s0.256-0.377 0.484-0.377h1.074c4.962 0 9-4.037 9-9 0-2.247-0.843-4.404-2.373-6.074-0.11-0.12-0.154-0.286-0.12-0.444 0.331-1.517 0.202-3.352-0.36-5.202-2.87 0.153-5.098 2.074-5.542 2.484-0.091 0.151-0.245 0.246-0.429 0.246-7e-3 0-0.096-6e-3 -0.103-6e-3l-9.073-4e-3c-0.152 0-0.332-0.067-0.442-0.181l-0.021 0.021c-0.025-0.024-2.438-2.39-5.623-2.561-0.557 1.831-0.69 3.649-0.373 5.154 0.034 0.159-0.013 0.325-0.124 0.444-1.559 1.675-2.417 3.85-2.417 6.123 0 4.963 4.038 9 9 9h1.073c0.229 0 0.428 0.155 0.484 0.377 0.057 0.222-0.044 0.453-0.246 0.563-1.205 0.654-2.021 1.799-2.238 3.139-0.036 0.218-0.208 0.386-0.427 0.415-2.664 0.358-4.568-0.198-5.511-1.611-1.663-2.494-2.412-2.494-3.206-2.494-0.137 0-0.18 0.032-0.181 0.032-0.025 0.064 0.043 0.435 0.534 0.926 0.963 0.963 0.998 1.033 1.905 2.847 0.369 0.736 1.911 3.093 6.233 2.392 0.147-0.021 0.292 0.019 0.404 0.113 0.111 0.096 0.176 0.234 0.176 0.381v3.523c0 0.269 0.033 0.548 0.102 0.862z", "fill", "#472b29"], ["d", "m60.437 51.362c-0.9 1.994-2.876 3.652-6.354 3.93", "fill", "#fefdef"], ["d", "m54.083 55.542c-0.129 0-0.238-0.1-0.249-0.23-0.011-0.138 0.091-0.258 0.229-0.269 3.805-0.305 5.442-2.227 6.146-3.784 0.058-0.127 0.205-0.183 0.331-0.125 0.125 0.057 0.182 0.204 0.125 0.33-1.073 2.377-3.403 3.824-6.562 4.077-6e-3 1e-3 -0.013 1e-3 -0.02 1e-3z", "fill", "#472b29"], ["d", "m60.959 47.41c0.111 0.753 0.109 1.552-0.03 2.342", "fill", "#fefdef"], ["d", "m60.93 50.002c-0.015 0-0.029-1e-3 -0.044-4e-3 -0.136-0.023-0.227-0.153-0.203-0.289 0.129-0.734 0.139-1.517 0.029-2.263-0.021-0.136 0.074-0.264 0.21-0.283 0.137-0.02 0.264 0.073 0.284 0.211 0.12 0.809 0.109 1.624-0.031 2.421-0.02 0.122-0.126 0.207-0.245 0.207z", "fill", "#472b29"], ["d", "m59.083 43.875c0.633 0.451 1.146 1.179 1.488 2.055", "fill", "#fefdef"], ["d", "m60.571 46.181c-0.1 0-0.194-0.061-0.233-0.159-0.334-0.856-0.818-1.528-1.4-1.942-0.112-0.08-0.139-0.236-0.059-0.349 0.081-0.113 0.236-0.138 0.349-0.06 0.662 0.472 1.207 1.222 1.576 2.169 0.05 0.129-0.014 0.273-0.142 0.324-0.03 0.011-0.06 0.017-0.091 0.017z", "fill", "#472b29"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "UI & UX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "illustrations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Motion Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Game Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Web development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Our Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "circle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "circle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "circle", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "circle", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "circle", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "circle", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "circle", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "circle", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "circle", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "circle", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "circle", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "path", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "path", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "path", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "path", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "path", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "path", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "path", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "path", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "path", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "path", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "path", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "path", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "path", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "path", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "path", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "path", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "path", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "path", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "path", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "path", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "path", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "path", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "path", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "path", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "path", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "path", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "path", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "path", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "path", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".footer[_ngcontent-%COMP%] {\n  width: 100%;\n  border-top: 1px solid #dfdfdf;\n  padding-top: 25px;\n  padding-bottom: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.footer[_ngcontent-%COMP%]   .footer__nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.footer[_ngcontent-%COMP%]   .footer__nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0 16px;\n}\n.footer[_ngcontent-%COMP%]   .footer__nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #000;\n  font-weight: 600;\n}\n.footer[_ngcontent-%COMP%]   .footer__nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 35px;\n}\n.footer[_ngcontent-%COMP%]   .footer__nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.footer[_ngcontent-%COMP%]   .footer__feedback[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 10px 20px;\n  display: flex;\n  flex-direction: row;\n}\n.footer[_ngcontent-%COMP%]   .footer__feedback[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0 16px;\n}\n.footer[_ngcontent-%COMP%]   .footer__feedback[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.footer[_ngcontent-%COMP%]   .footer__feedback[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  max-width: 50px;\n  width: 100%;\n  max-height: 50px;\n  height: 100%;\n}\n@media screen and (max-width: 900px) {\n  .footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .footer[_ngcontent-%COMP%]   .footer__nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .footer[_ngcontent-%COMP%]   .footer__nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 8px 0px;\n  }\n  .footer[_ngcontent-%COMP%]   .footer__nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: none;\n    width: 35px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNKO0FBQ1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNaO0FBQVk7RUFDSSxlQUFBO0FBRWhCO0FBRGdCO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFHcEI7QUFGb0I7RUFDSSxXQUFBO0FBSXhCO0FBRm9CO0VBQ0ksMEJBQUE7QUFJeEI7QUFHUTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBRFo7QUFFWTtFQUNJLGVBQUE7QUFBaEI7QUFDZ0I7RUFDSSxxQkFBQTtBQUNwQjtBQUFvQjtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBRXhCO0FBS0E7RUFDSTtJQUNJLHNCQUFBO0VBRk47RUFJVTtJQUNJLHNCQUFBO0VBRmQ7RUFHYztJQUNJLGdCQUFBO0VBRGxCO0VBR3NCO0lBQ0ksYUFBQTtJQUNBLFdBQUE7RUFEMUI7QUFDRiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RmZGZkZjtcclxuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLmZvb3Rlcl9fbmF2e1xyXG4gICAgICAgIHVse1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZvb3Rlcl9fZmVlZGJhY2t7XHJcbiAgICAgICAgdWx7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAyMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHN2Z3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjkwMHB4KXtcclxuICAgIC5mb290ZXJ7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAuZm9vdGVyX19uYXZ7XHJcbiAgICAgICAgICAgIHVse1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "QSvI":
/*!******************************************************************************!*\
  !*** ./src/app/components/router/nikita-krushko/nikita-krushko.component.ts ***!
  \******************************************************************************/
/*! exports provided: NikitaKrushkoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NikitaKrushkoComponent", function() { return NikitaKrushkoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NikitaKrushkoComponent {
    constructor() { }
    ngOnInit() {
    }
}
NikitaKrushkoComponent.ɵfac = function NikitaKrushkoComponent_Factory(t) { return new (t || NikitaKrushkoComponent)(); };
NikitaKrushkoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NikitaKrushkoComponent, selectors: [["app-nikita-krushko"]], decls: 2, vars: 0, template: function NikitaKrushkoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "nikita-krushko works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuaWtpdGEta3J1c2hrby5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "SUY4":
/*!********************************************************************!*\
  !*** ./src/app/components/router/aventader/aventader.component.ts ***!
  \********************************************************************/
/*! exports provided: AventaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AventaderComponent", function() { return AventaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AventaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
AventaderComponent.ɵfac = function AventaderComponent_Factory(t) { return new (t || AventaderComponent)(); };
AventaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AventaderComponent, selectors: [["app-aventader"]], decls: 2, vars: 0, template: function AventaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "aventader works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdmVudGFkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 31, vars: 0, consts: [[1, "wrapper"], [1, "header"], [1, "header__inner"], ["routerLink", "home", 1, "logo"], ["src", "../assets/logo.png", "alt", "Logo", 1, "icon-logo"], ["type", "checkbox", "id", "nav-toggle", 1, "nav-toggle"], ["for", "nav-toggle", 1, "nav-toggle-label"], [1, "nav"], ["routerLink", "uiux", "routerLinkActive", "active"], ["routerLink", "illustrations", "routerLinkActive", "active"], ["routerLink", "motiondesign", "routerLinkActive", "active"], ["routerLink", "gamedesign", "routerLinkActive", "active"], ["routerLink", "webdevelopment", "routerLinkActive", "active"], ["aria-hidden", "true", 1, "nav__line"], ["routerLink", "Our-team", "routerLinkActive", "active"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "UI & UX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Illustrations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Motion Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Game Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Web Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Our Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  padding: 0 20px;\n  max-width: 1440px;\n}\n\n.header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  z-index: 10;\n}\n\n.header__inner[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 35px;\n  max-height: 35px;\n  display: block;\n}\n\n.nav-toggle[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.nav-toggle-label[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: none;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.nav-toggle-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .nav-toggle-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before, .nav-toggle-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  display: block;\n  width: 22px;\n  height: 2px;\n  background: #000;\n  border-radius: 999px;\n  position: relative;\n  transition: all 0.25s ease;\n}\n\n.nav-toggle-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before, .nav-toggle-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n}\n\n.nav-toggle-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before {\n  top: -6px;\n}\n\n.nav-toggle-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  top: 6px;\n}\n\n.nav-toggle[_ngcontent-%COMP%]:checked    + .nav-toggle-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: transparent;\n}\n\n.nav-toggle[_ngcontent-%COMP%]:checked    + .nav-toggle-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before {\n  top: 0;\n  transform: rotate(45deg);\n}\n\n.nav-toggle[_ngcontent-%COMP%]:checked    + .nav-toggle-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  top: 0;\n  transform: rotate(-45deg);\n}\n\n.nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 16px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.nav[_ngcontent-%COMP%]   li.nav__line[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 20px;\n  background: #c5c5c5;\n  margin: 0 8px;\n}\n\n.nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000;\n  text-decoration: none;\n  font-size: 14px;\n  line-height: 22px;\n  font-weight: 600;\n  position: relative;\n  padding-bottom: 4px;\n}\n\n.nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 2px;\n  width: 0;\n  background: #ea5641;\n  transition: width 0.2s ease;\n}\n\n.nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover::after, .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]::after {\n  width: 100%;\n}\n\n@media screen and (min-width: 1300px) {\n  .wrapper[_ngcontent-%COMP%] {\n    padding: 0 240px;\n  }\n}\n\n@media screen and (max-width: 1299px) and (min-width: 1200px) {\n  .wrapper[_ngcontent-%COMP%] {\n    padding: 0 180px;\n  }\n}\n\n@media screen and (max-width: 1199px) and (min-width: 998px) {\n  .wrapper[_ngcontent-%COMP%] {\n    padding: 0 120px;\n  }\n}\n\n@media screen and (max-width: 997px) and (min-width: 779px) {\n  .wrapper[_ngcontent-%COMP%] {\n    padding: 0 80px;\n  }\n}\n\n@media screen and (max-width: 778px) {\n  .wrapper[_ngcontent-%COMP%] {\n    padding: 0 20px;\n  }\n}\n\n@media screen and (max-width: 998px) {\n  .header[_ngcontent-%COMP%] {\n    height: 56px;\n  }\n  .header__inner[_ngcontent-%COMP%] {\n    position: relative;\n  }\n\n  .nav-toggle-label[_ngcontent-%COMP%] {\n    display: flex;\n  }\n\n  .nav[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 56px;\n    left: -20px;\n    right: -20px;\n    background: #ffffff;\n    border-bottom: 1px solid #e5e5e5;\n    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);\n    padding: 12px 20px 16px;\n    transform: translateY(-12px);\n    opacity: 0;\n    pointer-events: none;\n    transition: all 0.25s ease;\n  }\n  .nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 4px;\n  }\n  .nav[_ngcontent-%COMP%]   li.nav__line[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 32px;\n    font-weight: 500;\n  }\n  .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::after {\n    height: 1px;\n  }\n\n  .nav-toggle[_ngcontent-%COMP%]:checked    ~ .nav[_ngcontent-%COMP%] {\n    transform: translateY(0);\n    opacity: 1;\n    pointer-events: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFERjs7QUFHRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQURKOztBQU1BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBS0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBSEo7O0FBT0E7RUFDRSxhQUFBO0FBSkY7O0FBUUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUxGOztBQU9FOzs7RUFHRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQUxKOztBQVFFOztFQUVFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7QUFOSjs7QUFTRTtFQUNFLFNBQUE7QUFQSjs7QUFVRTtFQUNFLFFBQUE7QUFSSjs7QUFXQTtFQUNFLHVCQUFBO0FBUkY7O0FBV0E7RUFDRSxNQUFBO0VBQ0Esd0JBQUE7QUFSRjs7QUFXQTtFQUNFLE1BQUE7RUFDQSx5QkFBQTtBQVJGOztBQVlFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQVRKOztBQWFJO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFYTjs7QUFjSTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQVpOOztBQWNNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUFaUjs7QUFlTTtFQUVFLFdBQUE7QUFkUjs7QUFtQkE7RUFDRTtJQUNFLGdCQUFBO0VBaEJGO0FBQ0Y7O0FBbUJBO0VBQ0U7SUFDRSxnQkFBQTtFQWpCRjtBQUNGOztBQW9CQTtFQUNFO0lBQ0UsZ0JBQUE7RUFsQkY7QUFDRjs7QUFxQkE7RUFDRTtJQUNFLGVBQUE7RUFuQkY7QUFDRjs7QUFzQkE7RUFDRTtJQUNFLGVBQUE7RUFwQkY7QUFDRjs7QUF3QkE7RUFDRTtJQUNFLFlBQUE7RUF0QkY7RUF3QkU7SUFDRSxrQkFBQTtFQXRCSjs7RUEwQkE7SUFDRSxhQUFBO0VBdkJGOztFQTJCQTtJQUNFLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQ0FBQTtJQUNBLDBDQUFBO0lBQ0EsdUJBQUE7SUFDQSw0QkFBQTtJQUNBLFVBQUE7SUFDQSxvQkFBQTtJQUNBLDBCQUFBO0VBeEJGO0VBMEJFO0lBQ0Usc0JBQUE7SUFDQSx1QkFBQTtJQUNBLFFBQUE7RUF4Qko7RUE0Qkk7SUFDRSxhQUFBO0VBMUJOO0VBNkJJO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7RUEzQk47RUE2Qk07SUFDRSxXQUFBO0VBM0JSOztFQWtDQTtJQUNFLHdCQUFBO0lBQ0EsVUFBQTtJQUNBLG9CQUFBO0VBL0JGO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi53cmFwcGVyIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XHJcbn1cclxuXHJcblxyXG4uaGVhZGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDY0cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxMDtcclxuXHJcbiAgJl9faW5uZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbn1cclxuXHJcblxyXG4ubG9nbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAzNXB4O1xyXG4gICAgbWF4LWhlaWdodDogMzVweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuLm5hdi10b2dnbGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4ubmF2LXRvZ2dsZS1sYWJlbCB7XHJcbiAgd2lkdGg6IDMycHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIHNwYW4sXHJcbiAgc3Bhbjo6YmVmb3JlLFxyXG4gIHNwYW46OmFmdGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDIycHg7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xyXG4gIH1cclxuXHJcbiAgc3Bhbjo6YmVmb3JlLFxyXG4gIHNwYW46OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuXHJcbiAgc3Bhbjo6YmVmb3JlIHtcclxuICAgIHRvcDogLTZweDtcclxuICB9XHJcblxyXG4gIHNwYW46OmFmdGVyIHtcclxuICAgIHRvcDogNnB4O1xyXG4gIH1cclxufVxyXG4ubmF2LXRvZ2dsZTpjaGVja2VkICsgLm5hdi10b2dnbGUtbGFiZWwgc3BhbiB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5uYXYtdG9nZ2xlOmNoZWNrZWQgKyAubmF2LXRvZ2dsZS1sYWJlbCBzcGFuOjpiZWZvcmUge1xyXG4gIHRvcDogMDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuXHJcbi5uYXYtdG9nZ2xlOmNoZWNrZWQgKyAubmF2LXRvZ2dsZS1sYWJlbCBzcGFuOjphZnRlciB7XHJcbiAgdG9wOiAwO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbn1cclxuXHJcbi5uYXYge1xyXG4gIHVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGdhcDogMTZweDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgbGkge1xyXG4gICAgJi5uYXZfX2xpbmUge1xyXG4gICAgICB3aWR0aDogMXB4O1xyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNjNWM1YzU7XHJcbiAgICAgIG1hcmdpbjogMCA4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcclxuXHJcbiAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZWE1NjQxO1xyXG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuMnMgZWFzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3Zlcjo6YWZ0ZXIsXHJcbiAgICAgICYuYWN0aXZlOjphZnRlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTMwMHB4KSB7XHJcbiAgLndyYXBwZXIge1xyXG4gICAgcGFkZGluZzogMCAyNDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyOTlweCkgYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC53cmFwcGVyIHtcclxuICAgIHBhZGRpbmc6IDAgMTgwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIGFuZCAobWluLXdpZHRoOiA5OThweCkge1xyXG4gIC53cmFwcGVyIHtcclxuICAgIHBhZGRpbmc6IDAgMTIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTdweCkgYW5kIChtaW4td2lkdGg6IDc3OXB4KSB7XHJcbiAgLndyYXBwZXIge1xyXG4gICAgcGFkZGluZzogMCA4MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzc4cHgpIHtcclxuICAud3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTk4cHgpIHtcclxuICAuaGVhZGVyIHtcclxuICAgIGhlaWdodDogNTZweDtcclxuXHJcbiAgICAmX19pbm5lciB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5uYXYtdG9nZ2xlLWxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxuXHJcbiAgLm5hdiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDU2cHg7XHJcbiAgICBsZWZ0OiAtMjBweDsgIC8vINGH0YLQvtCx0Ysg0L/QtdGA0LXQutGA0YvRgtGMIHBhZGRpbmcgd3JhcHBlclxyXG4gICAgcmlnaHQ6IC0yMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xyXG4gICAgcGFkZGluZzogMTJweCAyMHB4IDE2cHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEycHgpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XHJcblxyXG4gICAgdWwge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgZ2FwOiA0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgbGkge1xyXG4gICAgICAmLm5hdl9fbGluZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcblxyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC5uYXYtdG9nZ2xlOmNoZWNrZWQgfiAubmF2IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_router_uiux_uiux_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/router/uiux/uiux.component */ "HKpF");
/* harmony import */ var _components_router_motion_design_motion_design_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/router/motion-design/motion-design.component */ "adGc");
/* harmony import */ var _components_router_illustration_illustration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/router/illustration/illustration.component */ "07VQ");
/* harmony import */ var _components_router_web_dev_web_dev_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/router/web-dev/web-dev.component */ "sTXB");
/* harmony import */ var _components_router_gamedev_gamedev_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/router/gamedev/gamedev.component */ "AmQA");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_router_error_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/router/error/error.component */ "c+o9");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_home_releases_releases_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/home/releases/releases.component */ "6bL0");
/* harmony import */ var _components_router_gamedesign_gamedesign_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/router/gamedesign/gamedesign.component */ "/Ir9");
/* harmony import */ var _components_router_our_team_our_team_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/router/our-team/our-team.component */ "Gfp6");
/* harmony import */ var _components_router_wrincied_wrincied_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/router/wrincied/wrincied.component */ "qaYn");
/* harmony import */ var _components_router_nikita_krushko_nikita_krushko_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/router/nikita-krushko/nikita-krushko.component */ "QSvI");
/* harmony import */ var _components_router_felix_trex_felix_trex_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/router/felix-trex/felix-trex.component */ "nFn2");
/* harmony import */ var _components_router_aventader_aventader_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/router/aventader/aventader.component */ "SUY4");
/* harmony import */ var _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/slider/slider.component */ "+zoA");
/* harmony import */ var _components_home_homeart_homeart_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/home/homeart/homeart.component */ "5MbP");
/* harmony import */ var _components_router_anton_anton_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/router/anton/anton.component */ "Jkzo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ "fXoL");




//Components





















//Components
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({ providers: [
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_router_uiux_uiux_component__WEBPACK_IMPORTED_MODULE_5__["UIUXComponent"],
        _components_router_motion_design_motion_design_component__WEBPACK_IMPORTED_MODULE_6__["MotionDesignComponent"],
        _components_router_illustration_illustration_component__WEBPACK_IMPORTED_MODULE_7__["IllustrationComponent"],
        _components_router_web_dev_web_dev_component__WEBPACK_IMPORTED_MODULE_8__["WebDevComponent"],
        _components_router_gamedev_gamedev_component__WEBPACK_IMPORTED_MODULE_9__["GamedevComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
        _components_router_error_error_component__WEBPACK_IMPORTED_MODULE_11__["ErrorComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
        _components_home_releases_releases_component__WEBPACK_IMPORTED_MODULE_14__["ReleasesComponent"],
        _components_router_gamedesign_gamedesign_component__WEBPACK_IMPORTED_MODULE_15__["GamedesignComponent"],
        _components_router_our_team_our_team_component__WEBPACK_IMPORTED_MODULE_16__["OurTeamComponent"],
        _components_router_wrincied_wrincied_component__WEBPACK_IMPORTED_MODULE_17__["WrinciedComponent"],
        _components_router_nikita_krushko_nikita_krushko_component__WEBPACK_IMPORTED_MODULE_18__["NikitaKrushkoComponent"],
        _components_router_felix_trex_felix_trex_component__WEBPACK_IMPORTED_MODULE_19__["FelixTrexComponent"],
        _components_router_aventader_aventader_component__WEBPACK_IMPORTED_MODULE_20__["AventaderComponent"],
        _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_21__["SliderComponent"],
        _components_home_homeart_homeart_component__WEBPACK_IMPORTED_MODULE_22__["HomeartComponent"],
        _components_router_anton_anton_component__WEBPACK_IMPORTED_MODULE_23__["AntonComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"]] }); })();


/***/ }),

/***/ "adGc":
/*!****************************************************************************!*\
  !*** ./src/app/components/router/motion-design/motion-design.component.ts ***!
  \****************************************************************************/
/*! exports provided: MotionDesignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotionDesignComponent", function() { return MotionDesignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");


class MotionDesignComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.titleService.setTitle("Motion Design");
    }
}
MotionDesignComponent.ɵfac = function MotionDesignComponent_Factory(t) { return new (t || MotionDesignComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
MotionDesignComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MotionDesignComponent, selectors: [["app-motion-design"]], decls: 2, vars: 0, template: function MotionDesignComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "motion-design works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb3Rpb24tZGVzaWduLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "c+o9":
/*!************************************************************!*\
  !*** ./src/app/components/router/error/error.component.ts ***!
  \************************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../footer/footer.component */ "LmEr");




class ErrorComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.titleService.setTitle("Page not Found 404");
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 16, vars: 0, consts: [[1, "error-container"], [1, "four"], [1, "screen-reader-text"], [1, "zero"], [1, "link-container"], ["routerLink", "/"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "404 Page Not Found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Go back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-footer");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:400,600,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Catamaran:400,800\");\n.error-container[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 106px;\n  font-family: \"Catamaran\", sans-serif;\n  font-weight: 800;\n  margin: 70px 15px;\n}\n.error-container[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n}\n.error-container[_ngcontent-%COMP%]    > span.four[_ngcontent-%COMP%] {\n  width: 136px;\n  height: 43px;\n  border-radius: 999px;\n  background: linear-gradient(140deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.07) 43%, transparent 44%, transparent 100%), linear-gradient(105deg, transparent 0%, transparent 40%, rgba(0, 0, 0, 0.06) 41%, rgba(0, 0, 0, 0.07) 76%, transparent 77%, transparent 100%), linear-gradient(to right, #d89ca4, #e27b7e);\n}\n.error-container[_ngcontent-%COMP%]    > span.four[_ngcontent-%COMP%]:before, .error-container[_ngcontent-%COMP%]    > span.four[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  border-radius: 999px;\n}\n.error-container[_ngcontent-%COMP%]    > span.four[_ngcontent-%COMP%]:before {\n  width: 43px;\n  height: 156px;\n  left: 60px;\n  bottom: -43px;\n  background: linear-gradient(128deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.07) 40%, transparent 41%, transparent 100%), linear-gradient(116deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.07) 50%, transparent 51%, transparent 100%), linear-gradient(to top, #99749D, #B895AB, #CC9AA6, #D7969E, #E0787F);\n}\n.error-container[_ngcontent-%COMP%]    > span.four[_ngcontent-%COMP%]:after {\n  width: 137px;\n  height: 43px;\n  transform: rotate(-49.5deg);\n  left: -18px;\n  bottom: 36px;\n  background: linear-gradient(to right, #99749D, #B895AB, #CC9AA6, #D7969E, #E0787F);\n}\n.error-container[_ngcontent-%COMP%]    > span.zero[_ngcontent-%COMP%] {\n  vertical-align: text-top;\n  width: 156px;\n  height: 156px;\n  border-radius: 999px;\n  background: linear-gradient(-45deg, transparent 0%, rgba(0, 0, 0, 0.06) 50%, transparent 51%, transparent 100%), linear-gradient(to top right, #99749D, #99749D, #B895AB, #CC9AA6, #D7969E, #ED8687, #ED8687);\n  overflow: hidden;\n  animation: bgshadow 5s infinite;\n}\n.error-container[_ngcontent-%COMP%]    > span.zero[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  transform: rotate(45deg);\n  width: 90px;\n  height: 90px;\n  background-color: transparent;\n  left: 0px;\n  bottom: 0px;\n  background: linear-gradient(95deg, transparent 0%, transparent 8%, rgba(0, 0, 0, 0.07) 9%, transparent 50%, transparent 100%), linear-gradient(85deg, transparent 0%, transparent 19%, rgba(0, 0, 0, 0.05) 20%, rgba(0, 0, 0, 0.07) 91%, transparent 92%, transparent 100%);\n}\n.error-container[_ngcontent-%COMP%]    > span.zero[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  border-radius: 999px;\n  width: 70px;\n  height: 70px;\n  left: 43px;\n  bottom: 43px;\n  background: #FDFAF5;\n  box-shadow: -2px 2px 2px 0px rgba(0, 0, 0, 0.1);\n}\n.screen-reader-text[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -9999em;\n  left: -9999em;\n}\n@keyframes bgshadow {\n  0% {\n    box-shadow: inset -160px 160px 0px 5px rgba(0, 0, 0, 0.4);\n  }\n  45% {\n    box-shadow: inset 0px 0px 0px 0px rgba(0, 0, 0, 0.1);\n  }\n  55% {\n    box-shadow: inset 0px 0px 0px 0px rgba(0, 0, 0, 0.1);\n  }\n  100% {\n    box-shadow: inset 160px -160px 0px 5px rgba(0, 0, 0, 0.4);\n  }\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\napp-footer[_ngcontent-%COMP%] {\n  display: none;\n}\nbody[_ngcontent-%COMP%] {\n  background-color: #FDFAF5;\n  margin-bottom: 50px;\n}\nhtml[_ngcontent-%COMP%], button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", Helvetica, sans-serif;\n  color: #bbb;\n}\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 30px 15px;\n}\n.zoom-area[_ngcontent-%COMP%] {\n  max-width: 490px;\n  margin: 30px auto 30px;\n  font-size: 19px;\n  text-align: center;\n}\n.link-container[_ngcontent-%COMP%] {\n  text-align: center;\n}\na[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 13px;\n  background-color: #de7e85;\n  padding: 10px 15px;\n  border-radius: 0;\n  color: #fff;\n  display: inline-block;\n  margin-right: 5px;\n  margin-bottom: 30px;\n  line-height: 1.5;\n  text-decoration: none;\n  margin-top: 50px;\n  letter-spacing: 1px;\n}\napp-footer[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZXJyb3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsNkVBQUE7QUFDQSx3RUFBQTtBQUNSO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGO0FBQ0E7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FBRUY7QUFBQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxrVEFDRTtBQUVKO0FBRUE7O0VBRUUsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7QUFDQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSx3U0FDRTtBQUNKO0FBR0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrRkFBQTtBQUFGO0FBR0E7RUFDRSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSw2TUFBQTtFQUVBLGdCQUFBO0VBQ0EsK0JBQUE7QUFERjtBQUdBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsMlFBQ0U7QUFESjtBQUlBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7QUFERjtBQUlBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQURKO0FBSUE7RUFDRTtJQUNFLHlEQUFBO0VBREY7RUFHQTtJQUNFLG9EQUFBO0VBREY7RUFHQTtJQUNFLG9EQUFBO0VBREY7RUFHQTtJQUNFLHlEQUFBO0VBREY7QUFDRjtBQUlBLGVBQUE7QUFDQTtFQUdJLHNCQUFBO0FBRko7QUFJQTtFQUNJLGFBQUE7QUFESjtBQUdBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtBQUFGO0FBRUE7RUFDSSxnREFBQTtFQUNBLFdBQUE7QUFDSjtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUVGO0FBQUE7RUFDRSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBR0Y7QUFEQTtFQUNFLGtCQUFBO0FBSUY7QUFGQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0YsZ0JBQUE7RUFDQSxtQkFBQTtBQUtGO0FBSEE7RUFDRSxhQUFBO0FBTUYiLCJmaWxlIjoiZXJyb3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDYwMCw3MDAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1DYXRhbWFyYW46NDAwLDgwMCcpO1xyXG4uZXJyb3ItY29udGFpbmVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxMDZweDtcclxuICBmb250LWZhbWlseTogJ0NhdGFtYXJhbicsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBtYXJnaW46IDcwcHggMTVweDtcclxufVxyXG4uZXJyb3ItY29udGFpbmVyID4gc3BhbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uZXJyb3ItY29udGFpbmVyID4gc3Bhbi5mb3VyIHtcclxuICB3aWR0aDogMTM2cHg7XHJcbiAgaGVpZ2h0OiA0M3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGJhY2tncm91bmQ6XHJcbiAgICBsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCByZ2JhKDAsIDAsIDAsIDAuMSkgMCUsIHJnYmEoMCwgMCwgMCwgMC4wNykgNDMlLCB0cmFuc3BhcmVudCA0NCUsIHRyYW5zcGFyZW50IDEwMCUpLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KDEwNWRlZywgdHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDQwJSwgcmdiYSgwLCAwLCAwLCAwLjA2KSA0MSUsIHJnYmEoMCwgMCwgMCwgMC4wNykgNzYlLCB0cmFuc3BhcmVudCA3NyUsIHRyYW5zcGFyZW50IDEwMCUpLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZDg5Y2E0LCAjZTI3YjdlKTtcclxufVxyXG4uZXJyb3ItY29udGFpbmVyID4gc3Bhbi5mb3VyOmJlZm9yZSxcclxuLmVycm9yLWNvbnRhaW5lciA+IHNwYW4uZm91cjphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG59XHJcbi5lcnJvci1jb250YWluZXIgPiBzcGFuLmZvdXI6YmVmb3JlIHtcclxuICB3aWR0aDogNDNweDtcclxuICBoZWlnaHQ6IDE1NnB4O1xyXG4gIGxlZnQ6IDYwcHg7XHJcbiAgYm90dG9tOiAtNDNweDtcclxuICBiYWNrZ3JvdW5kOlxyXG4gICAgbGluZWFyLWdyYWRpZW50KDEyOGRlZywgcmdiYSgwLCAwLCAwLCAwLjEpIDAlLCByZ2JhKDAsIDAsIDAsIDAuMDcpIDQwJSwgdHJhbnNwYXJlbnQgNDElLCB0cmFuc3BhcmVudCAxMDAlKSxcclxuICAgIGxpbmVhci1ncmFkaWVudCgxMTZkZWcsIHJnYmEoMCwgMCwgMCwgMC4xKSAwJSwgcmdiYSgwLCAwLCAwLCAwLjA3KSA1MCUsIHRyYW5zcGFyZW50IDUxJSwgdHJhbnNwYXJlbnQgMTAwJSksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjOTk3NDlELCAjQjg5NUFCLCAjQ0M5QUE2LCAjRDc5NjlFLCAjRTA3ODdGKTtcclxufVxyXG4uZXJyb3ItY29udGFpbmVyID4gc3Bhbi5mb3VyOmFmdGVyIHtcclxuICB3aWR0aDogMTM3cHg7XHJcbiAgaGVpZ2h0OiA0M3B4O1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC00OS41ZGVnKTtcclxuICBsZWZ0OiAtMThweDtcclxuICBib3R0b206IDM2cHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOTk3NDlELCAjQjg5NUFCLCAjQ0M5QUE2LCAjRDc5NjlFLCAjRTA3ODdGKTtcclxufVxyXG5cclxuLmVycm9yLWNvbnRhaW5lciA+IHNwYW4uemVybyB7XHJcbiAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xyXG4gIHdpZHRoOiAxNTZweDtcclxuICBoZWlnaHQ6IDE1NnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHRyYW5zcGFyZW50IDAlLCByZ2JhKDAsIDAsIDAsIDAuMDYpIDUwJSwgIHRyYW5zcGFyZW50IDUxJSwgdHJhbnNwYXJlbnQgMTAwJSksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAjOTk3NDlELCAjOTk3NDlELCAjQjg5NUFCLCAjQ0M5QUE2LCAjRDc5NjlFLCAjRUQ4Njg3LCAjRUQ4Njg3KTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGFuaW1hdGlvbjogYmdzaGFkb3cgNXMgaW5maW5pdGU7XHJcbn1cclxuLmVycm9yLWNvbnRhaW5lciA+IHNwYW4uemVybzpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgd2lkdGg6IDkwcHg7XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGxlZnQ6IDBweDtcclxuICBib3R0b206IDBweDtcclxuICBiYWNrZ3JvdW5kOlxyXG4gICAgbGluZWFyLWdyYWRpZW50KDk1ZGVnLCB0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgOCUsIHJnYmEoMCwgMCwgMCwgMC4wNykgOSUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQgMTAwJSksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoODVkZWcsIHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCAxOSUsIHJnYmEoMCwgMCwgMCwgMC4wNSkgMjAlLCByZ2JhKDAsIDAsIDAsIDAuMDcpIDkxJSwgdHJhbnNwYXJlbnQgOTIlLCB0cmFuc3BhcmVudCAxMDAlKTtcclxufVxyXG4uZXJyb3ItY29udGFpbmVyID4gc3Bhbi56ZXJvOmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIGxlZnQ6IDQzcHg7XHJcbiAgYm90dG9tOiA0M3B4O1xyXG4gIGJhY2tncm91bmQ6ICNGREZBRjU7XHJcbiAgYm94LXNoYWRvdzogLTJweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5zY3JlZW4tcmVhZGVyLXRleHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtOTk5OWVtO1xyXG4gICAgbGVmdDogLTk5OTllbTtcclxufVxyXG4gICAgXHJcbkBrZXlmcmFtZXMgYmdzaGFkb3cge1xyXG4gIDAlIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IC0xNjBweCAxNjBweCAwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICB9XHJcbiAgNDUlIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgfVxyXG4gIDU1JSB7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDE2MHB4IC0xNjBweCAwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICB9XHJcbn1cclxuXHJcbi8qIGRlbW8gc3R1ZmYgKi9cclxuKiB7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbmFwcC1mb290ZXJ7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGREZBRjU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5odG1sLCBidXR0b24sIGlucHV0LCBzZWxlY3QsIHRleHRhcmVhIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjYmJiO1xyXG59XHJcbmgxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAzMHB4IDE1cHg7XHJcbn1cclxuLnpvb20tYXJlYSB7IFxyXG4gIG1heC13aWR0aDogNDkwcHg7XHJcbiAgbWFyZ2luOiAzMHB4IGF1dG8gMzBweDtcclxuICBmb250LXNpemU6IDE5cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5saW5rLWNvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmEge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlN2U4NTtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcbmFwcC1mb290ZXJ7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "nFn2":
/*!**********************************************************************!*\
  !*** ./src/app/components/router/felix-trex/felix-trex.component.ts ***!
  \**********************************************************************/
/*! exports provided: FelixTrexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FelixTrexComponent", function() { return FelixTrexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FelixTrexComponent {
    constructor() { }
    ngOnInit() {
    }
}
FelixTrexComponent.ɵfac = function FelixTrexComponent_Factory(t) { return new (t || FelixTrexComponent)(); };
FelixTrexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FelixTrexComponent, selectors: [["app-felix-trex"]], decls: 2, vars: 0, template: function FelixTrexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "felix-trex works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWxpeC10cmV4LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "qaYn":
/*!******************************************************************!*\
  !*** ./src/app/components/router/wrincied/wrincied.component.ts ***!
  \******************************************************************/
/*! exports provided: WrinciedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrinciedComponent", function() { return WrinciedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class WrinciedComponent {
    constructor() { }
    ngOnInit() {
    }
}
WrinciedComponent.ɵfac = function WrinciedComponent_Factory(t) { return new (t || WrinciedComponent)(); };
WrinciedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WrinciedComponent, selectors: [["app-wrincied"]], decls: 2, vars: 0, template: function WrinciedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "wrincied works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3cmluY2llZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "sTXB":
/*!****************************************************************!*\
  !*** ./src/app/components/router/web-dev/web-dev.component.ts ***!
  \****************************************************************/
/*! exports provided: WebDevComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebDevComponent", function() { return WebDevComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");


class WebDevComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.titleService.setTitle("Web development");
    }
}
WebDevComponent.ɵfac = function WebDevComponent_Factory(t) { return new (t || WebDevComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
WebDevComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WebDevComponent, selectors: [["app-web-dev"]], decls: 2, vars: 0, template: function WebDevComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "web-dev works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWItZGV2LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_router_uiux_uiux_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/router/uiux/uiux.component */ "HKpF");
/* harmony import */ var _components_router_illustration_illustration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/router/illustration/illustration.component */ "07VQ");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_router_error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/router/error/error.component */ "c+o9");
/* harmony import */ var _components_router_our_team_our_team_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/router/our-team/our-team.component */ "Gfp6");
/* harmony import */ var _components_router_wrincied_wrincied_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/router/wrincied/wrincied.component */ "qaYn");
/* harmony import */ var _components_router_nikita_krushko_nikita_krushko_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/router/nikita-krushko/nikita-krushko.component */ "QSvI");
/* harmony import */ var _components_router_felix_trex_felix_trex_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/router/felix-trex/felix-trex.component */ "nFn2");
/* harmony import */ var _components_router_aventader_aventader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/router/aventader/aventader.component */ "SUY4");
/* harmony import */ var _components_router_anton_anton_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/router/anton/anton.component */ "Jkzo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");













const routes = [
    {
        path: '',
        redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
    },
    {
        path: 'uiux',
        component: _components_router_uiux_uiux_component__WEBPACK_IMPORTED_MODULE_1__["UIUXComponent"],
    },
    {
        path: 'illustrations',
        component: _components_router_illustration_illustration_component__WEBPACK_IMPORTED_MODULE_2__["IllustrationComponent"],
    },
    {
        path: 'webdevelopment',
        //WebDevComponent
        component: _components_router_error_error_component__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"]
    },
    {
        path: 'motiondesign',
        //MotionDesignComponent
        component: _components_router_error_error_component__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"]
    },
    {
        path: 'gamedesign',
        //GamedesignComponent
        component: _components_router_error_error_component__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"]
    },
    {
        path: 'Our-team',
        component: _components_router_our_team_our_team_component__WEBPACK_IMPORTED_MODULE_5__["OurTeamComponent"],
        children: [
            {
                path: 'Head-Developer',
                component: _components_router_wrincied_wrincied_component__WEBPACK_IMPORTED_MODULE_6__["WrinciedComponent"]
            },
            {
                path: 'Illustrator',
                component: _components_router_nikita_krushko_nikita_krushko_component__WEBPACK_IMPORTED_MODULE_7__["NikitaKrushkoComponent"]
            },
            {
                path: 'GameDesigner',
                component: _components_router_felix_trex_felix_trex_component__WEBPACK_IMPORTED_MODULE_8__["FelixTrexComponent"]
            },
            {
                path: 'Manager',
                component: _components_router_aventader_aventader_component__WEBPACK_IMPORTED_MODULE_9__["AventaderComponent"]
            },
            {
                path: 'Developer',
                component: _components_router_anton_anton_component__WEBPACK_IMPORTED_MODULE_10__["AntonComponent"]
            }
        ]
    },
    {
        path: '**',
        component: _components_router_error_error_component__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
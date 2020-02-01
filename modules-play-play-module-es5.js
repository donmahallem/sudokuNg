function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-play-play-module"], {
  /***/
  "./node_modules/pug-loader/index.js!./src/app/modules/play/component/sudoku.component.pug":
  /*!***************************************************************************************!*\
    !*** ./node_modules/pug-loader!./src/app/modules/play/component/sudoku.component.pug ***!
    \***************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPugLoaderIndexJsSrcAppModulesPlayComponentSudokuComponentPug(module, exports, __webpack_require__) {
    var pug = __webpack_require__(
    /*! ../../../../../node_modules/pug-runtime/index.js */
    "./node_modules/pug-runtime/index.js");

    function template(locals) {
      var pug_html = "",
          pug_mixins = {},
          pug_interp;

      for (var x = 0; x < 9; x++) {
        for (var y = 0; y < 9; y++) {
          pug_html = pug_html + "<button" + (pug.attr("mat-button", true, true, true) + pug.attr("(click)", "setValue(" + x + "," + y + ",0)", true, true) + " value=\"#{ x } #{ y }\"" + pug.attr("id", "cell_" + x + "" + y, true, true) + " type=\"number\" min=\"1\" max=\"9\"") + ">" + pug.escape(null == (pug_interp = "" + x + "" + y) ? "" : pug_interp) + "</button>";
        }
      }

      ;
      return pug_html;
    }

    ;
    module.exports = template;
    /***/
  },

  /***/
  "./src/app/modules/play/component/index.ts":
  /*!*************************************************!*\
    !*** ./src/app/modules/play/component/index.ts ***!
    \*************************************************/

  /*! exports provided: SudokuComponent */

  /***/
  function srcAppModulesPlayComponentIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _sudoku_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./sudoku.component */
    "./src/app/modules/play/component/sudoku.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SudokuComponent", function () {
      return _sudoku_component__WEBPACK_IMPORTED_MODULE_1__["SudokuComponent"];
    });
    /***/

  },

  /***/
  "./src/app/modules/play/component/sudoku.component.pug":
  /*!*************************************************************!*\
    !*** ./src/app/modules/play/component/sudoku.component.pug ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function srcAppModulesPlayComponentSudokuComponentPug(module, exports, __webpack_require__) {
    var req = __webpack_require__(
    /*! !./node_modules/pug-loader!./src/app/modules/play/component/sudoku.component.pug */
    "./node_modules/pug-loader/index.js!./src/app/modules/play/component/sudoku.component.pug");

    module.exports = (req['default'] || req).apply(req, []);
    /***/
  },

  /***/
  "./src/app/modules/play/component/sudoku.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/modules/play/component/sudoku.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPlayComponentSudokuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  width: 80vh;\n  height: 80vh;\n  margin: auto auto;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n  grid-auto-rows: 1fr;\n  max-height: 800px;\n  max-width: 800px;\n  border: 1px solid black;\n}\n:host button {\n  margin: 0px;\n  padding: 0px;\n  -webkit-box-flex: 1;\n          flex: 1;\n  grid-auto-rows: 1fr;\n}\n:host button:before:nth-child(0) {\n  content: \" \";\n  display: block;\n  width: 0px;\n  padding-top: 100%;\n  /* Percentage value in padding derived from the width  */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N1ZG9rdU5nL3N1ZG9rdU5nL3NyYy9hcHAvbW9kdWxlcy9wbGF5L2NvbXBvbmVudC9zdWRva3UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcGxheS9jb21wb25lbnQvc3Vkb2t1LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSwwREFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBUmM7RUFTZCxnQkFUYztFQVVkLHVCQUFBO0FDREo7QURFSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0VBQ0EsbUJBQUE7QUNBUjtBREVJO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFBa0Isd0RBQUE7QUNDMUIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BsYXkvY29tcG9uZW50L3N1ZG9rdS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmaWVsZF9zaXplOiA4MDtcbiRzdWRva3VfbWF4X3NpemU6IDgwMHB4O1xuOmhvc3R7XG4gICAgd2lkdGg6ODB2aDtcbiAgICBoZWlnaHQ6ODB2aDtcbiAgICBtYXJnaW46YXV0byBhdXRvO1xuICAgIGRpc3BsYXk6Z3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xuICAgIGdyaWQtYXV0by1yb3dzOiAxZnI7XG4gICAgbWF4LWhlaWdodDokc3Vkb2t1X21heF9zaXplO1xuICAgIG1heC13aWR0aDokc3Vkb2t1X21heF9zaXplO1xuICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XG4gICAgYnV0dG9ue1xuICAgICAgICBtYXJnaW46MHB4O1xuICAgICAgICBwYWRkaW5nOjBweDtcbiAgICAgICAgZmxleDoxO1xuICAgICAgICBncmlkLWF1dG8tcm93czogMWZyOyAgIFxuICAgIH1cbiAgICBidXR0b246YmVmb3JlOm50aC1jaGlsZCgwKXtcbiAgICAgICAgY29udGVudDogJyAnO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDBweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwMCU7LyogUGVyY2VudGFnZSB2YWx1ZSBpbiBwYWRkaW5nIGRlcml2ZWQgZnJvbSB0aGUgd2lkdGggICovXG4gICAgfVxuICAgIFxufSIsIjpob3N0IHtcbiAgd2lkdGg6IDgwdmg7XG4gIGhlaWdodDogODB2aDtcbiAgbWFyZ2luOiBhdXRvIGF1dG87XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XG4gIGdyaWQtYXV0by1yb3dzOiAxZnI7XG4gIG1heC1oZWlnaHQ6IDgwMHB4O1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cbjpob3N0IGJ1dHRvbiB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGZsZXg6IDE7XG4gIGdyaWQtYXV0by1yb3dzOiAxZnI7XG59XG46aG9zdCBidXR0b246YmVmb3JlOm50aC1jaGlsZCgwKSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDBweDtcbiAgcGFkZGluZy10b3A6IDEwMCU7XG4gIC8qIFBlcmNlbnRhZ2UgdmFsdWUgaW4gcGFkZGluZyBkZXJpdmVkIGZyb20gdGhlIHdpZHRoICAqL1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/play/component/sudoku.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/modules/play/component/sudoku.component.ts ***!
    \************************************************************/

  /*! exports provided: SudokuComponent */

  /***/
  function srcAppModulesPlayComponentSudokuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SudokuComponent", function () {
      return SudokuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SudokuComponent =
    /*#__PURE__*/
    function () {
      function SudokuComponent() {
        _classCallCheck(this, SudokuComponent);

        this.title = 'sudokuNg';
        this.field = new Array(9).fill(0).map(function (val) {
          return new Array(9).fill(0);
        });
      }

      _createClass(SudokuComponent, [{
        key: "setValue",
        value: function setValue(x, y, value) {
          console.log(x, y, value);
          this.field[x][y] = value;
          console.log(this.field);
        }
      }]);

      return SudokuComponent;
    }();

    SudokuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sudoku-field',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sudoku.component.pug */
      "./src/app/modules/play/component/sudoku.component.pug")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sudoku.component.scss */
      "./src/app/modules/play/component/sudoku.component.scss")).default]
    })], SudokuComponent);
    /***/
  },

  /***/
  "./src/app/modules/play/play-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/modules/play/play-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: PlayRoutingModule */

  /***/
  function srcAppModulesPlayPlayRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayRoutingModule", function () {
      return PlayRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _component_sudoku_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./component/sudoku.component */
    "./src/app/modules/play/component/sudoku.component.ts");

    var playRoutes = [{
      component: _component_sudoku_component__WEBPACK_IMPORTED_MODULE_3__["SudokuComponent"],
      path: '**'
    }];

    var PlayRoutingModule = function PlayRoutingModule() {
      _classCallCheck(this, PlayRoutingModule);
    };

    PlayRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(playRoutes)]
    })], PlayRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/play/play.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/modules/play/play.module.ts ***!
    \*********************************************/

  /*! exports provided: PlayModule */

  /***/
  function srcAppModulesPlayPlayModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayModule", function () {
      return PlayModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./component */
    "./src/app/modules/play/component/index.ts");
    /* harmony import */


    var _play_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./play-routing.module */
    "./src/app/modules/play/play-routing.module.ts");

    var PlayModule = function PlayModule() {
      _classCallCheck(this, PlayModule);
    };

    PlayModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_component__WEBPACK_IMPORTED_MODULE_4__["SudokuComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _play_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlayRoutingModule"]]
    })], PlayModule);
    /***/
  }
}]);
//# sourceMappingURL=modules-play-play-module-es5.js.map
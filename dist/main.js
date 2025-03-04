/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    padding: 0;\n    margin: 0;\n}\n\nbody {\n    background-color: rgb(27, 30, 34);\n}\n\nh1,\nh2 {\n    color: white;\n    font-family: sans-serif;\n    display: flex;\n    justify-content: center;\n}\n\nh1 {\n    font-size: 4em;\n    margin: 24px;\n}\n\nh2 {\n    font-size: 1.5em;\n    align-items: center;\n    justify-content: space-evenly;\n    margin: 23px;\n}\n\n.axis-control-container {\n    display: flex;\n    justify-content: center;\n}\n\n.axis-control:hover {\n    background-color: #00b4d8;\n    color: black;\n}\n\n.axis-control {\n    font-size: 16px;\n    margin: 20px;\n    padding: 10px 20px 10px 20px;\n    background-color: rgb(27, 30, 34);\n    border: 2px solid #00b4d8;\n    color: #00b4d8;\n    cursor: pointer;\n}\n\n.grid {\n    display: grid;\n    grid-template-rows: repeat(10, 40px);\n    grid-template-columns: repeat(10, 40px);\n    border: 3px solid white;\n}\n\n.grid div {\n    background-color: #0068c9;\n    border: 2px solid white;\n    cursor: pointer;\n}\n\n.grid .high-light {\n    background-color: #00b4d8;\n}\n\n.grid .error-high-light,\n.grid .ship.error-high-light {\n    background-color: #fc6868;\n}\n\n.grid .ship {\n    background-color: #4e4e4e;\n}\n\n.grid-container {\n    display: flex;\n    margin: auto;\n    align-items: center;\n    width: 400px;\n    height: 400px;\n    justify-content: center;\n    align-items: center;\n    gap: 5em;\n}\n\n.grid .miss-attack {\n    background-color: grey;\n}\n\n.grid .hit-attack {\n    background-color: #ff0000;\n}\n\n.pop-up {\n    width: 400px;\n    height: 250px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    background: white;\n    top: 38%;\n    left: 37%;\n    border-radius: 6px;\n    pointer-events: auto;\n    z-index: 999;\n}\n\n.message{\n    font-size: 2em;\n    font-family: sans-serif;\n}\n\n.restart-btn{\n    font-family: sans-serif;\n    font-size: 1.2em;\n    border: #4e4e4e 2px solid;\n    background-color: white;\n    margin-left: 4px;\n    margin-top: 24px;\n    cursor: pointer;\n    padding: 12px 15px 12px 12px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
281202
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_DOMhandle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/DOMhandle */ \"./src/modules/DOMhandle.js\");\n\n\n\n\n(0,_modules_DOMhandle__WEBPACK_IMPORTED_MODULE_1__.generateGameBoard)(\"placement\");\n(0,_modules_DOMhandle__WEBPACK_IMPORTED_MODULE_1__.gameBoard)();\n\n\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/DOMhandle.js":
/*!**********************************!*\
  !*** ./src/modules/DOMhandle.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gameBoard: () => (/* binding */ gameBoard),\n/* harmony export */   generateGameBoard: () => (/* binding */ generateGameBoard)\n/* harmony export */ });\n/* harmony import */ var _placeShip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./placeShip */ \"./src/modules/placeShip.js\");\n/* harmony import */ var _enemyBoardDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enemyBoardDOM */ \"./src/modules/enemyBoardDOM.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/modules/player.js\");\n\n\n\n\nlet shipIdx = 0;\nlet isHorizontal = false;\nconst SHIP_LENGTHS = [2, 3, 3, 4, 5];\n\n\nfunction updateTitle() {\n    const title = document.querySelector('h2');\n    title.innerHTML = '';\n\n    const titleAllay = document.createElement('span');\n    const titleEnemy = document.createElement('span');\n\n    titleAllay.innerText = 'Allay Water';\n    titleEnemy.innerText = 'Enemy Water';\n\n    titleAllay.style.marginLeft = \"18px\";\n    titleEnemy.style.marginRight = \"18px\";\n\n    title.appendChild(titleAllay);\n    title.appendChild(titleEnemy);\n\n}\n\nfunction generateGameBoard(mode) {\n    let grid;\n    let gridContainer;\n\n    if (mode === \"placement\")\n        grid = document.querySelector('.grid');\n\n    else if (mode === \"enemy\") {\n        grid = document.createElement('div');\n        gridContainer = document.querySelector('.grid-container');\n        grid.className = 'grid';\n    }\n\n    for (let row = 1; row <= 10; row++) {\n        for (let column = 1; column <= 10; column++) {\n            const cell = document.createElement('div');\n            cell.id = `${row}${column}`;\n            grid.appendChild(cell);\n        }\n    }\n\n    if (mode === \"enemy\") {\n        gridContainer.appendChild(grid);\n        (0,_enemyBoardDOM__WEBPACK_IMPORTED_MODULE_1__.highlightAreaEnemyBoard)(grid.childNodes);\n    }\n\n}\n\nfunction axisControl() {\n    const horizontalBtn = document.querySelector('.axis-control');\n    horizontalBtn.addEventListener('click', () => {\n        isHorizontal = !isHorizontal;\n        horizontalBtn.textContent = isHorizontal ? 'Horizontal' : 'Vertical';\n    });\n}\n\nfunction disableShipPlacement() {\n    const gridCells = document.querySelectorAll('.grid div');\n    const horizontalBtn = document.querySelector('.axis-control');\n\n    horizontalBtn.style.display = 'none';\n\n    gridCells.forEach(cell => {\n        cell.style.cursor = 'not-allowed';\n    });\n}\n\nfunction parseCellId(cellId) {\n    if (cellId.startsWith('10')) {\n        return {\n            row: 10,\n            col: cellId.length > 2 ? parseInt(cellId.slice(2)) : 10\n        };\n    }\n    return {\n        row: parseInt(cellId[0]),\n        col: parseInt(cellId.slice(1))\n    };\n}\n\nfunction highlightArea(cell, mode = 'add') {\n    const { row, col } = parseCellId(cell.id);\n    const currentShipLength = SHIP_LENGTHS[shipIdx];\n\n    let isWithinBounds = false;\n    const targetCells = [];\n    let shipOverlap = false;\n\n    if (isHorizontal) {\n        isWithinBounds = col + currentShipLength <= 11;\n    } else {\n        isWithinBounds = row + currentShipLength <= 11;\n    }\n\n    for (let offset = 0; offset < currentShipLength; offset++) {\n        const targetRow = isHorizontal ? row : row + offset;\n        const targetCol = isHorizontal ? col + offset : col;\n\n        if (targetRow > 10 || targetCol > 10) break;\n\n        const targetCellId = `${targetRow}${targetCol}`;\n        const targetCell = document.getElementById(targetCellId);\n\n        if (!targetCell) break;\n        if (targetCell.classList.contains('ship')) shipOverlap = true;\n\n        targetCells.push(targetCell);\n    }\n\n    if (mode === 'add') {\n        targetCells.forEach(cell => {\n            cell.classList.add(\n                isWithinBounds && !shipOverlap ? 'high-light' : 'error-high-light'\n            );\n        });\n\n        if (isWithinBounds && !shipOverlap) {\n            cell.addEventListener('click', () => placeShip(row, col), { once: true });\n        }\n    } else {\n        targetCells.forEach(cell => {\n            cell.classList.remove('high-light', 'error-high-light');\n        });\n    }\n}\n\nfunction placeShip(startRow, startCol) {\n    if (shipIdx >= SHIP_LENGTHS.length) return;\n\n    const shipLength = SHIP_LENGTHS[shipIdx];\n    const targetCells = [];\n    let shipOverlap = false;\n\n    for (let offset = 0; offset < shipLength; offset++) {\n        const targetRow = isHorizontal ? startRow : startRow + offset;\n        const targetCol = isHorizontal ? startCol + offset : startCol;\n\n        if (targetRow > 10 || targetCol > 10) {\n            shipOverlap = true;\n            break;\n        }\n\n        const targetCellId = `${targetRow}${targetCol}`;\n        const targetCell = document.getElementById(targetCellId);\n\n        if (!targetCell || targetCell.classList.contains('ship')) {\n            shipOverlap = true;\n            break;\n        }\n\n        targetCells.push(targetCell);\n    }\n\n    if (!shipOverlap && targetCells.length === shipLength) {\n        targetCells.forEach(cell => cell.classList.add('ship'));\n        (0,_placeShip__WEBPACK_IMPORTED_MODULE_0__.createShip)(shipLength, targetCells.map(cell => cell.id), 'ally');\n        shipIdx++;\n\n        if (shipIdx === SHIP_LENGTHS.length) {\n            disableShipPlacement();\n            generateGameBoard(\"enemy\");\n            (0,_enemyBoardDOM__WEBPACK_IMPORTED_MODULE_1__.generateEnemyShipPositions)();\n            (0,_player__WEBPACK_IMPORTED_MODULE_2__.gameLoop)();\n            updateTitle();\n        }\n    }\n}\n\nfunction gameBoard() {\n    const gridCells = document.querySelectorAll('.grid div');\n    gridCells.forEach(cell => {\n        cell.addEventListener('mouseover', () => highlightArea(cell, 'add'));\n        cell.addEventListener('mouseout', () => highlightArea(cell, 'remove'));\n    });\n}\n\naxisControl();\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/DOMhandle.js?");

/***/ }),

/***/ "./src/modules/enemyBoardDOM.js":
/*!**************************************!*\
  !*** ./src/modules/enemyBoardDOM.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateEnemyShipPositions: () => (/* binding */ generateEnemyShipPositions),\n/* harmony export */   highlightAreaEnemyBoard: () => (/* binding */ highlightAreaEnemyBoard)\n/* harmony export */ });\n/* harmony import */ var _placeShip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./placeShip */ \"./src/modules/placeShip.js\");\n\n\nfunction highlightAreaEnemyBoard(grid) {\n    grid.forEach((cell) => {\n        cell.addEventListener('mouseover', () => cell.classList.add('high-light'));\n        cell.addEventListener('mouseout', () => cell.classList.remove('high-light'));\n    });\n}\n\nfunction generateEnemyShipPositions() {\n    const shipsLength = [2, 3, 3, 4, 5];\n    let shipIdx = 0;\n    const occupiedCells = new Set();\n\n    function isValidPlacement(positions) {\n        return positions.every(cell => !occupiedCells.has(cell));\n    }\n\n    function placeShip(positions) {\n        positions.forEach(cell => occupiedCells.add(cell));\n    }\n\n    while (shipIdx < shipsLength.length) {\n        const startRow = Math.floor((Math.random() * 10) + 1);\n        const startCol = Math.floor((Math.random() * 10) + 1);\n        const isHorizontal = Math.round(Math.random());\n        const shipSize = shipsLength[shipIdx];\n\n\n        let positions = [];\n\n        if (isHorizontal && startCol + shipSize - 1 <= 10) {\n            positions = Array.from({ length: shipSize }, (_, pos) => `${startRow}${startCol + pos}`);\n        }\n        else if (!isHorizontal && startRow + shipSize - 1 <= 10) {\n            positions = Array.from({ length: shipSize }, (_, pos) => `${startRow + pos}${startCol}`);\n        }\n\n\n        if (positions.length && isValidPlacement(positions)) {\n            (0,_placeShip__WEBPACK_IMPORTED_MODULE_0__.createShip)(shipSize, positions, 'enemy');\n            placeShip(positions);\n            shipIdx++;\n        }\n\n    }\n\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/enemyBoardDOM.js?");

/***/ }),

/***/ "./src/modules/placeShip.js":
/*!**********************************!*\
  !*** ./src/modules/placeShip.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createShip: () => (/* binding */ createShip),\n/* harmony export */   registerHit: () => (/* binding */ registerHit)\n/* harmony export */ });\nconst allyShipsPositions = [];\nconst allyShips = [];\nconst enemyShipsPositions = [];\nconst enemyShips = [];\n\nfunction createShip(length, positions, player) {\n    const ship = {\n        length,\n        positions,\n        hits: new Set(),\n        get isSunk() {\n            return this.hits.size === this.length;\n        }\n    };\n\n    if (player === 'ally') {\n        allyShipsPositions.push(...positions);\n        allyShips.push(ship);\n    } else if (player === 'enemy') {\n        enemyShipsPositions.push(...positions);\n        enemyShips.push(ship);\n    }\n}\n\nfunction registerHit(position, player) {\n    const ships = player === 'ally' ? allyShips : enemyShips;\n\n    for (const ship of ships) {\n        if (ship.positions.includes(position)) {\n            ship.hits.add(position);\n            const allSunk = ships.every(ship => ship.isSunk);\n            return { hit: true, gameOver: allSunk };\n        }\n    }\n    return { hit: false, gameOver: false };\n}\n\n\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/placeShip.js?");

/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   allyAttack: () => (/* binding */ allyAttack),\n/* harmony export */   enemyAttack: () => (/* binding */ enemyAttack),\n/* harmony export */   gameLoop: () => (/* binding */ gameLoop)\n/* harmony export */ });\n/* harmony import */ var _placeShip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./placeShip */ \"./src/modules/placeShip.js\");\n\n\nconst occupiedCells = new Set();\nlet isPlayerTurn = true;\n\nfunction winMessage (player) {\n    const body = document.querySelector('body');\n    const container = document.createElement('div');\n\n    const popUp = document.createElement('div');\n    \n    popUp.className = 'pop-up';\n\n    const message = document.createElement('p');\n    const restartBtn = document.createElement('button');\n\n    message.innerText = player === 'ally' ? 'You Won' : 'You lost';\n    message.className = 'message';\n\n    restartBtn.innerText = 'Play again';\n    restartBtn.className = 'restart-btn';\n\n    container.appendChild(message);\n    container.appendChild(restartBtn);\n\n    popUp.appendChild(container);\n\n    body.appendChild(popUp);\n    body.style.pointerEvents = 'none';\n    \n    restartBtn.addEventListener('click', ()=>{\n        location.reload();\n    });\n\n}\n\n\nfunction allyAttack() {\n    const grid = document.querySelectorAll('.grid:nth-of-type(2) div');\n    grid.forEach((cell) => {\n        if (!isPlayerTurn) return;\n\n        cell.addEventListener('click', () => {\n            const { hit, gameOver } = (0,_placeShip__WEBPACK_IMPORTED_MODULE_0__.registerHit)(cell.id, 'enemy');\n            cell.classList.add(hit ? 'hit-attack' : 'miss-attack');\n            cell.style = \"cursor: not-allowed;\";\n\n            if(gameOver)\n                winMessage(\"ally\");\n\n            isPlayerTurn = false;\n            setTimeout(enemyAttack, 1000);\n        }, { once: true });\n    });\n}\n\nfunction generateAttackPosition() {\n\n    let position;\n    do {\n        const startRow = Math.floor((Math.random() * 10) + 1);\n        const startCol = Math.floor((Math.random() * 10) + 1);\n\n        position = `${startRow}${startCol}`;\n\n    } while (occupiedCells.has(position));\n\n    return position;\n}\n\n\nfunction enemyAttack() {\n    const grid = Array.from(document.querySelectorAll('.grid div'));\n\n    const position = generateAttackPosition();\n\n    const targetCell = grid.find(cell => cell.id === position);\n    if (targetCell) {\n        const { hit, gameOver } = (0,_placeShip__WEBPACK_IMPORTED_MODULE_0__.registerHit)(targetCell.id, 'ally');\n        targetCell.classList.add(hit ? 'hit-attack' : 'miss-attack');\n        occupiedCells.add(position);\n        if(gameOver)\n            winMessage(\"enemy\");\n    }\n    isPlayerTurn = true;\n}\n\nfunction gameLoop() {\n    allyAttack();\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/player.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
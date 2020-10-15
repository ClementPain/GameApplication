/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Home.js":
/*!************************!*\
  !*** ./src/js/Home.js ***!
  \************************/
/*! namespace exports */
/*! export Home [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Home\": () => /* binding */ Home\n/* harmony export */ });\n\n\nvar Home = function Home() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n  console.log(\"Home\", argument);\n};\n\n//# sourceURL=webpack://projet/./src/js/Home.js?");

/***/ }),

/***/ "./src/js/PageDetail.js":
/*!******************************!*\
  !*** ./src/js/PageDetail.js ***!
  \******************************/
/*! namespace exports */
/*! export PageDetail [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageDetail\": () => /* binding */ PageDetail\n/* harmony export */ });\n/* harmony import */ var _PageList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageList */ \"./src/js/PageList.js\");\n\n\n\nvar PageDetail = function PageDetail(argument) {\n  var render = function render() {\n    pageContent.innerHTML = \"\\n      <section class=\\\"page-detail\\\">\\n        <div class=\\\"article row\\\">\\n          <div class=\\\"col-md-4\\\">\\n            <img class=\\\"img-fluid rounded\\\" src=\\\"\\\">\\n          </div>\\n\\n          <div class=\\\"col-md-8\\\">\\n            <h1 class=\\\"title\\\"></h1>\\n            <p class=\\\"release-date\\\">Release date : <span></span></p>\\n            <p class=\\\"developers\\\">Studio : </p>\\n            <p class=\\\"publishers\\\">Editeurs : </p>\\n            <p class=\\\"genres\\\">Genres : </p>\\n            <p class=\\\"tags\\\">Tags : </p>\\n            <p class=\\\"description\\\"></p>\\n            <p class=\\\"website\\\"></p>\\n          </div>\\n        </div>\\n      </section>\\n    \";\n    preparePage();\n  };\n\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.replace(/\\s+/g, \"-\");\n\n    var fetchGame = function fetchGame(url, argument) {\n      var finalURL = url + argument;\n      fetch(\"\".concat(finalURL)).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        var background_image_additional = response.background_image_additional,\n            name = response.name,\n            released = response.released,\n            developers = response.developers,\n            publishers = response.publishers,\n            genres = response.genres,\n            tags = response.tags,\n            description = response.description,\n            website = response.website;\n        console.log(response);\n        var articleDOM = document.querySelector(\".page-detail .article\");\n        articleDOM.querySelector(\"img\").src = background_image_additional;\n        articleDOM.querySelector(\"h1.title\").innerHTML = name;\n        articleDOM.querySelector(\"p.release-date span\").innerHTML = released;\n        articleDOM.querySelector(\"p.developers\").innerHTML += developers[0].name;\n        argumentEvent(\"developers\", developers[0].id, articleDOM.querySelector(\"p.developers\"));\n        publishers.forEach(function (obj) {\n          articleDOM.querySelector(\"p.publishers\").innerHTML += obj.name;\n\n          if (publishers.indexOf(obj) != publishers.length - 1) {\n            articleDOM.querySelector(\"p.publishers\").innerHTML += \", \";\n          }\n\n          ;\n        });\n        genres.forEach(function (obj) {\n          articleDOM.querySelector(\"p.genres\").innerHTML += \"<span id=\\\"genre_\".concat(obj.id, \"\\\">\").concat(obj.name, \"</span>\");\n\n          if (genres.indexOf(obj) != genres.length - 1) {\n            articleDOM.querySelector(\"p.genres\").innerHTML += \", \";\n          }\n\n          ;\n          argumentEvent(\"genres\", obj.id, articleDOM.querySelector(\"p.genres\").querySelector(\"span#genre_\".concat(obj.id)));\n        });\n        tags.forEach(function (obj) {\n          articleDOM.querySelector(\"p.tags\").innerHTML += \"<span id=\\\"tag_\".concat(obj.id, \"\\\">\").concat(obj.name, \"</span>\");\n\n          if (tags.indexOf(obj) != tags.length - 1) {\n            articleDOM.querySelector(\"p.tags\").innerHTML += \", \";\n          }\n\n          ;\n          argumentEvent(\"tags\", obj.id, articleDOM.querySelector(\"p.genres\").querySelector(\"span#tag_\".concat(obj.id)));\n        });\n        articleDOM.querySelector(\"p.description\").innerHTML = description;\n        articleDOM.querySelector(\"p.website\").innerHTML = website;\n      });\n    };\n\n    fetchGame(\"https://api.rawg.io/api/games/\", cleanedArgument);\n  };\n\n  var argumentEvent = function argumentEvent(argument_name, argument_id, pageElement) {\n    pageElement.addEventListener('click', function (e) {\n      e.preventDefault();\n      var arrayDeveloper = [{\n        name: argument_name,\n        id: argument_id\n      }];\n      (0,_PageList__WEBPACK_IMPORTED_MODULE_0__.PageList)(\"\", 0, arrayDeveloper);\n    });\n  };\n\n  render();\n};\n\n//# sourceURL=webpack://projet/./src/js/PageDetail.js?");

/***/ }),

/***/ "./src/js/PageList.js":
/*!****************************!*\
  !*** ./src/js/PageList.js ***!
  \****************************/
/*! namespace exports */
/*! export PageList [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageList\": () => /* binding */ PageList\n/* harmony export */ });\n/* harmony import */ var _composants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./composants */ \"./src/js/composants.js\");\n\n\n\nvar PageList = function PageList() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n  var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  var otherArguments = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];\n\n  var render = function render() {\n    pageContent.innerHTML = \"\\n      <section class=\\\"page-list\\\">\\n        <div class=\\\"articles\\\"><span>...loading</span></div>\\n      </section>\\n    \";\n    preparePage();\n    document.querySelector(\".page-list .articles span\").innerHTML = \"\";\n  };\n\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.replace(/\\s+/g, \"-\");\n\n    var fetchList = function fetchList(url) {\n      fetch(prepareURL(url)).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        returnArticles(response.results);\n      });\n    };\n\n    var prepareURL = function prepareURL(url) {\n      var finalURL = url;\n\n      if (argument) {\n        finalURL += 'search=' + argument + '&';\n      }\n\n      otherArguments.forEach(function (arg) {\n        finalURL += \"\".concat(arg.name, \"=\") + arg.id.toString();\n\n        if (otherArguments.last !== arg) {\n          finalURL += '&';\n        }\n\n        ;\n      });\n      console.log(finalURL);\n      return finalURL;\n    };\n\n    fetchList(\"https://api.rawg.io/api/games?\");\n  };\n\n  var returnArticles = function returnArticles(responseResults) {\n    var article;\n    var articles = [];\n    responseResults.sort(function (a, b) {\n      return new Date(a.released) < new Date(b.released);\n    });\n\n    for (var i = times; i < times + 9; i++) {\n      if (article = responseResults[i]) {\n        document.querySelector(\".page-list .articles\").innerHTML += (0,_composants__WEBPACK_IMPORTED_MODULE_0__.cardGame)(article.name, platformsList(article.platforms), article.id, article.background_image);\n        articles.push(responseResults[i]);\n      }\n    }\n\n    cardHovered(articles);\n  };\n\n  var platformsList = function platformsList(platforms) {\n    var list = \"\";\n    platforms.forEach(function (obj) {\n      list += obj.platform.name;\n\n      if (platforms.indexOf(obj) != platforms.length - 1) {\n        list += \", \";\n      }\n\n      ;\n    });\n    return list;\n  };\n\n  var cardHovered = function cardHovered(articles) {\n    var cardImg;\n    var genres;\n    articles.forEach(function (article) {\n      cardImg = document.getElementById(\"img_\".concat(article.id));\n      cardImg.addEventListener('mouseenter', function (e) {\n        e.preventDefault();\n        genres = article.genres.map(function (genre) {\n          return genre.name;\n        }).join(', ');\n        document.getElementById(\"img_\".concat(article.id)).innerHTML = (0,_composants__WEBPACK_IMPORTED_MODULE_0__.changeCardGame)(article.rating, article.ratings_count, article.released, genres);\n      });\n      cardImg.addEventListener('mouseleave', function (e) {\n        e.preventDefault();\n        document.getElementById(\"img_\".concat(article.id)).innerHTML = \"<img class=\\\"card-img-left img-fluid rounded\\\" src=\".concat(article.background_image, \">\");\n      });\n    });\n  };\n\n  times === 0 ? render() : preparePage();\n};\n\n//# sourceURL=webpack://projet/./src/js/PageList.js?");

/***/ }),

/***/ "./src/js/composants.js":
/*!******************************!*\
  !*** ./src/js/composants.js ***!
  \******************************/
/*! namespace exports */
/*! export cardGame [provided] [no usage info] [missing usage info prevents renaming] */
/*! export changeCardGame [provided] [no usage info] [missing usage info prevents renaming] */
/*! export showMore [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cardGame\": () => /* binding */ cardGame,\n/* harmony export */   \"changeCardGame\": () => /* binding */ changeCardGame,\n/* harmony export */   \"showMore\": () => /* binding */ showMore\n/* harmony export */ });\n\n\nvar cardGame = function cardGame(name, platforms, id, url_img) {\n  return \"\\n  <div class='cardGame row mb-4' id=\\\"card_\".concat(id, \"\\\">\\n    <div class=\\\"col-md-4\\\" id=\\\"img_\").concat(id, \"\\\">\\n      <img class=\\\"card-img-left img-fluid rounded\\\" src=\").concat(url_img, \">\\n    </div>\\n    <div class = \\\"col-md-8\\\">\\n      <h1>\").concat(name, \"</h1>\\n      <p>\").concat(platforms, \"</p>\\n      <a href = '#pagedetail/\").concat(id, \"'>D\\xE9tails du jeu</a>\\n      \\n    </div>\\n  </div>\\n  \\n  <div class = \\\"modal fade\\\" id=\\\"modalGame\").concat(id, \"\\\">\\n    <div class=\\\"modal-dialog\\\">\\n      <div class = \\\"modal-header\\\">\\n        <h1>\").concat(name, \"</h1>\\n      </div>\\n      <div class=\\\"modal-body\\\">\\n        This is my body\\n      </div>\\n      <div class=\\\"modal-footer\\\">\\n        <a href = '#pagedetail/\").concat(id, \"'>\").concat(id, \"</a>\\n        <input class=\\\"btn btn-default\\\" value=\\\"close\\\">\\n      </div>\\n    </div>\\n  </div>\\n  \");\n};\n\nvar changeCardGame = function changeCardGame(rating, nb_rating, released, genres) {\n  return \"\\n  <p class=\\\"rating\\\">Note : \".concat(rating, \"</p>\\n  <p class=\\\"rating_count\\\">Nombre de notes : \").concat(nb_rating, \"</p>\\n  <p class=\\\"release-date\\\">Date de sortie : \").concat(released, \"</p>\\n  <p class=\\\"genres\\\">Genres : \").concat(genres, \"</p>\\n  \");\n};\n\nvar showMore = function showMore() {\n  return \"\\n  <div class=\\\"row justify-content-end\\\">\\n    <div class=\\\"col-md-4\\\" id=\\\"showMore\\\">Voir Plus</div>\\n  </div>\\n  \";\n};\n\n//# sourceURL=webpack://projet/./src/js/composants.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _PageList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageList */ \"./src/js/PageList.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ \"./src/js/routes.js\");\n\n\n\n // Routes\n\nvar pageArgument;\n\nvar setRoute = function setRoute() {\n  var path = window.location.hash.substring(1).split(\"/\");\n  pageArgument = path[1] || \"\";\n  var pageContent = document.getElementById(\"pageContent\");\n  _routes__WEBPACK_IMPORTED_MODULE_1__.routes[path[0]](pageArgument);\n  return true;\n};\n\nwindow.addEventListener(\"hashchange\", function () {\n  return setRoute();\n});\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  return setRoute();\n}); // Input\n\nvar formElement = document.querySelector('#searchGameForm');\nvar searchCriterion;\nvar platformCriterion = [];\nformElement.buttonElement.addEventListener('click', function (event) {\n  event.preventDefault();\n  searchCriterion = formElement.searchElement.value;\n\n  if (formElement.platforms_list.value != -1) {\n    platformCriterion = [{\n      name: \"platforms\",\n      id: formElement.platforms_list.value\n    }];\n  }\n\n  ;\n  (0,_PageList__WEBPACK_IMPORTED_MODULE_0__.PageList)(searchCriterion, 0, platformCriterion);\n  resetCriteria();\n});\n\nvar platforms = function platforms(url) {\n  fetch(url).then(function (response) {\n    return response.json();\n  }).then(function (response) {\n    response.results.forEach(function (obj) {\n      formElement.platforms_list.innerHTML += \"<option value=\\\"\".concat(obj.id, \"\\\"> \").concat(obj.name, \" </option>\");\n    });\n  });\n};\n\nplatforms(\"https://api.rawg.io/api/platforms\");\n\nvar resetCriteria = function resetCriteria() {\n  showMoreElement.innerHTML = \"Voir Plus\";\n  searchItems = 0;\n}; // Voir plus\n\n\nvar showMoreElement = document.getElementById(\"showMore\");\nvar searchItems = 0;\nshowMoreElement.addEventListener('click', function (event) {\n  event.preventDefault();\n  searchItems += 9;\n  (0,_PageList__WEBPACK_IMPORTED_MODULE_0__.PageList)(searchCriterion, searchItems, platformCriterion);\n\n  if (searchItems === 18) {\n    showMoreElement.innerHTML = \"\";\n  }\n\n  ; // delete showMoreGames if the button was used twice\n});\n\n//# sourceURL=webpack://projet/./src/js/index.js?");

/***/ }),

/***/ "./src/js/routes.js":
/*!**************************!*\
  !*** ./src/js/routes.js ***!
  \**************************/
/*! namespace exports */
/*! export routes [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"routes\": () => /* binding */ routes\n/* harmony export */ });\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home */ \"./src/js/Home.js\");\n/* harmony import */ var _PageList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageList */ \"./src/js/PageList.js\");\n/* harmony import */ var _PageDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageDetail */ \"./src/js/PageDetail.js\");\n\n\n\n\nvar routes = {\n  \"\": _Home__WEBPACK_IMPORTED_MODULE_2__.Home,\n  \"pagelist\": _PageList__WEBPACK_IMPORTED_MODULE_0__.PageList,\n  \"pagedetail\": _PageDetail__WEBPACK_IMPORTED_MODULE_1__.PageDetail\n};\n\n//# sourceURL=webpack://projet/./src/js/routes.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
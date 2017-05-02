/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_header_component__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__(1);




const components = [
  __WEBPACK_IMPORTED_MODULE_0__header_header_component__["a" /* HeaderComponent */],
  __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */],
  __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */]
]

components.forEach(component => customElements.define(component.selector, component))


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_template__ = __webpack_require__(2);


class DashboardComponent extends HTMLElement {
  static get selector () { return 'app-dashboard' }

  constructor() {                   
    super();   
    this.setDefaultValues()
    this.render()                      
  }

  setDefaultValues () {
    this.user = {};
    this.user.name = 'Jessica Parker'
    this.user.location = 'Newport Beach, CA'
    this.user.phone = '(949)325-68594'
    this.user.page = 'www.seller.com'
  }

  render () {
    const temp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dashboard_template__["a" /* default */])({
      user: this.user
    })

    this.innerHTML = `
      ${temp}
    `

    this.addEventListeners()
  }

  resetDropdown () {
    let dropList = this.querySelectorAll('.dropdown-detail.active')
    dropList.forEach(function(value, key) {
      value.setAttribute('class', 'dropdown-detail')
    })
  }

  editDetail (elem) {
    let dropDown = elem.parentElement.lastElementChild
    let classes = 'dropdown-detail active'
    this.resetDropdown()
    dropDown.setAttribute('class', classes)
  }

  setValues (elem) {
    let val = elem.parentElement.parentElement.children[1].firstElementChild.value
    let typeOf = elem.parentElement.parentElement.children[1].firstElementChild.getAttribute('name')
    switch(typeOf) {
      case "name":
          this.user.name = val
          break;
      case "page":
          this.user.page = val
          break;
      case "phone":
          this.user.phone = val
          break;
      case "location":
          this.user.location = val
          break;
    }
    this.render()
  }

  addEventListeners () {
    this.querySelectorAll('.item-edit').forEach(element => element.addEventListener('click', () => this.editDetail(element)))
    this.querySelectorAll('.save').forEach(element => element.addEventListener('click', () => this.setValues(element)))
    this.querySelectorAll('.cancel').forEach(element => element.addEventListener('click', () => this.resetDropdown()))
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DashboardComponent;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (({ user }) => {
	return `	  
		<app-header></app-header>
	  <div class="wrapper-dashboard">
	  	<div class="dashboard-profile">
	  		<div class="come-back">
		  		<button class="btn"><a href="index.html">Log Out</a></button>
		  	</div>
		  	<div class="dashboard-info">
		  		<div class="info-image">
		  			<div class="bg-image"></div>
		  		</div>
		  		<div class="info-detail">
		  			<div class="info-name">
		  				<h5>${user.name}</h5>
		  			</div>
		  			<div class="info-location"><i class="ion-ios-location-outline"></i>${user.location}</div>
		  			<div class="info-phone"><i class="ion-ios-telephone-outline"></i>${user.phone}</div>
		  		</div>
		  		<div class="info-upload">
		  			<button class="btn-large"><i class="ion-ios-camera"></i> Upload Cover Image</button>
		  		</div>
		  		<div class="info-stars">
		  			<i class="ion-android-star"></i>
		  			<i class="ion-android-star"></i>
		  			<i class="ion-android-star"></i>
		  			<i class="ion-android-star"></i>
		  			<i class="ion-ios-star-outline"></i>
		  			<p>6 Reviews</p>
		  		</div>
		  	</div>
	  	</div>
	  	<div class="dashboard-tabs">
	      <ul class="tabs">
	        <li class="tab"><a class="active" href="#test1">About</a></li>
	        <li class="tab"><a href="#test2">Settings</a></li>
	        <li class="tab"><a href="#test3">Option 1</a></li>
	        <li class="tab"><a href="#test4">Option 2</a></li>
	        <li class="tab"><a href="#test5">Option 3</a></li>
	      </ul>
	      <span class="follow"><i class="ion-ios-plus"></i> 15 Followers</span>
		  </div>
	  	<div class="dashboard-detail">
	  		<div id="test1" class="col s12">
	  			<h5>Profile info</h5>
	  			<div class="detail-content">
	  				<div class="detail-item">
	  					<div class="item name">${user.name}</div>
	  					<div class="item-edit"><i class="ion-edit"></i></div>
	  					<div class="dropdown-detail">
	  						<h5>Name</h5>
	  						<div class="input-field">
							    <input id="email" type="text" name="name" value="${user.name}">
						  	</div>
						  	<div class="drop-action">
						  		<button class="btn save">Save</button>
						  		<button class="btn cancel">Cancel</button>
						  	</div>
	  					</div>
  					</div>
	  				<div class="detail-item">
	  					<div class="item"><span class="ion-earth"></span> ${user.page}</div>
	  					<div class="item-edit"><i class="ion-edit"></i></div>
	  					<div class="dropdown-detail">
	  						<h5>Web Page</h5>
	  						<div class="input-field">
							    <input id="email" type="text" name="page" value="${user.page}">
						  	</div>
						  	<div class="drop-action">
						  		<button class="btn save">Save</button>
						  		<button class="btn cancel">Cancel</button>
						  	</div>
	  					</div>
  					</div>
	  				<div class="detail-item">
	  					<div class="item"><span class="ion-ios-telephone-outline"></span> ${user.phone}</div>
	  					<div class="item-edit"><i class="ion-edit"></i></div>
	  					<div class="dropdown-detail">
	  						<h5>Phone Number</h5>
	  						<div class="input-field">
							    <input id="email" type="text" name="phone" value="${user.phone}">
						  	</div>
						  	<div class="drop-action">
						  		<button class="btn save">Save</button>
						  		<button class="btn cancel">Cancel</button>
						  	</div>
	  					</div>
  					</div>
	  				<div class="detail-item">
	  					<div class="item"><span class="ion-ios-home-outline"></span> ${user.location}</div>
	  					<div class="item-edit"><i class="ion-edit"></i></div>
	  					<div class="dropdown-detail">
	  						<h5>City, State & Zip</h5>
	  						<div class="input-field">
							    <input id="email" type="text" name="location" value="${user.location}">
						  	</div>
						  	<div class="drop-action">
						  		<button class="btn save">Save</button>
						  		<button class="btn cancel">Cancel</button>
						  	</div>
	  					</div>
  					</div>
	  			</div>
	  		</div>
	  	</div>
	  </div>
	`
});


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_template__ = __webpack_require__(4);


class LoginComponent extends HTMLElement {
  static get selector () { return 'app-login' }

  constructor() {                   
    super();   
    this.setDefaultValues()
    this.render()                      
  }

  setDefaultValues () {
    
  }

  render () {
    const temp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__login_template__["a" /* default */])()

    this.innerHTML = `
      ${temp}
    `

    this.addEventListeners()
  }

  addEventListeners () {
    // this.element.querySelector('app-datepicker').addEventListener('selected-date', ({ detail }) => this.updateDate(detail))
    // this.element.querySelector('app-datepicker-filter').addEventListener('selected-filter', ({ detail }) => this.updateFilter(detail))
    // this.element.querySelector('app-timepicker').addEventListener('selected-time', ({ detail }) => this.updateTime(detail))
    // this.element.querySelector('.save').addEventListener('click', () => this.saveAppointment())
    // this.element.querySelector('.cancel').addEventListener('click', () => this.cancelAppointment())
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LoginComponent;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (() => {
	return `
  	<app-header></app-header>
		<div class="wrapper-login card-panel center-align">
			<div class="login-head">
				<h5 class="">Login</h5>
			</div>
			<div class="login-body">
		  	<div class="input-field">
			    <input id="email" type="text">
			    <label for="email" class="">Email</label>
		  	</div>
		  	<div class="input-field">
			    <input id="password" type="text">
			    <label for="password" class="">Password</label>
		  	</div>
		  	<div class="terms">
		  		<p class="">By singnig up or clicking continue, I confirm that I have read and agree to the <a>Terms</a> to the <a>Privacy Policy</a></p>
		  	</div>
		  	<div class="login-btn">
		  		<button class="btn-large"><a href="profile.html">Login</a></button>
		  	</div>
		  </div>
		</div>
	`
});


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_template__ = __webpack_require__(7);


class HeaderComponent extends HTMLElement {
  static get selector () { return 'app-header' }

  constructor() {                   
    super();   
    this.setDefaultValues()
    this.render()                      
  }

  setDefaultValues () {
    
  }

  render () {
    const temp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__header_template__["a" /* default */])()

    this.innerHTML = `
      ${temp}
    `

    this.addEventListeners()
  }

  addEventListeners () {
      
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HeaderComponent;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (() => {
	return `
		<header></header>
	`
});


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
(function() {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 4378:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "@material-ui/styles"
var styles_ = __webpack_require__(4047);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js
var CssBaseline = __webpack_require__(5834);
// EXTERNAL MODULE: ./src/theme.js
var theme = __webpack_require__(7067);
// EXTERNAL MODULE: ./redux/store.js + 9 modules
var store = __webpack_require__(8283);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./pages/_app.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function MyApp(props) {
  const {
    Component,
    pageProps
  } = props;
  const router = (0,router_.useRouter)();
  external_react_default().useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []); // React.useEffect(() => {
  //   if (window.performance) {
  //     console.info("window.performance work's fine on this browser")
  //   }
  //   if (performance.navigation.type == 1) {
  //     router.push('/')
  //   } else {
  //     console.info('This page is not reloaded')
  //   }
  // }, [])

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "My page"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "minimum-scale=1, initial-scale=1, width=device-width"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(styles_.ThemeProvider, {
      theme: theme/* default */.Z,
      children: [/*#__PURE__*/jsx_runtime_.jsx(CssBaseline/* default */.ZP, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
    })]
  });
}

/* harmony default export */ var _app = (store/* wrapper.withRedux */.Y.withRedux(MyApp));

/***/ }),

/***/ 4129:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": function() { return /* binding */ ACCOUNT_DETAILS; },
/* harmony export */   "v": function() { return /* binding */ ACCOUNT_TABLE; }
/* harmony export */ });
const ACCOUNT_DETAILS = "ACCOUNT_DETAILS";
const ACCOUNT_TABLE = "ACCOUNT_TABLE";

/***/ }),

/***/ 7695:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": function() { return /* binding */ CURRENT_ASSIGNMENT; },
/* harmony export */   "O": function() { return /* binding */ SOURCE_ASSIGNMENT; }
/* harmony export */ });
const CURRENT_ASSIGNMENT = "CURRENT_ASSIGNMENT";
const SOURCE_ASSIGNMENT = "SOURCE_ASSIGNMENT";

/***/ }),

/***/ 9831:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "or": function() { return /* binding */ STAGE; },
/* harmony export */   "wy": function() { return /* binding */ PERIOD_NAME; },
/* harmony export */   "iC": function() { return /* binding */ ACCOUNT_NAME; }
/* harmony export */ });
const STAGE = "STAGE";
const PERIOD_NAME = "PERIOD_NAME";
const ACCOUNT_NAME = "ACCOUNT_NAME";

/***/ }),

/***/ 4061:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fT": function() { return /* binding */ DATA_MANAGER; },
/* harmony export */   "cY": function() { return /* binding */ DRIVER; },
/* harmony export */   "rj": function() { return /* binding */ MODEL_STATS; },
/* harmony export */   "vr": function() { return /* binding */ DB_CONNECTION; }
/* harmony export */ });
const DATA_MANAGER = "DATA_MANAGER";
const DRIVER = "DRIVER";
const MODEL_STATS = "MODEL_STATS";
const DB_CONNECTION = "DB_CONNECTION";

/***/ }),

/***/ 8283:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ redux_store; },
  "Y": function() { return /* binding */ wrapper; }
});

// EXTERNAL MODULE: ./redux/Header/Headertypes.js
var Headertypes = __webpack_require__(9831);
;// CONCATENATED MODULE: ./redux/Header/Headerreducers.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const intialstate = {
  stage: "",
  period: "",
  account: []
};

const Headerreducers = (state = intialstate, action) => {
  switch (action.type) {
    case Headertypes/* STAGE */.or:
      return _objectSpread(_objectSpread({}, state), {}, {
        stage: action.payload
      });

    case Headertypes/* PERIOD_NAME */.wy:
      return _objectSpread(_objectSpread({}, state), {}, {
        period: action.payload
      });

    case Headertypes/* ACCOUNT_NAME */.iC:
      return _objectSpread(_objectSpread({}, state), {}, {
        account: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ var Header_Headerreducers = (Headerreducers);
// EXTERNAL MODULE: ./redux/Modal/modaltypes.js
var modaltypes = __webpack_require__(4061);
;// CONCATENATED MODULE: ./redux/Modal/modalreducers.js
function modalreducers_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function modalreducers_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { modalreducers_ownKeys(Object(source), true).forEach(function (key) { modalreducers_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { modalreducers_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function modalreducers_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const modalreducers_intialstate = {
  datamanager: "",
  driver: "",
  modelstats: "",
  dbconnection: ""
};

const modalreducer = (state = modalreducers_intialstate, action) => {
  switch (action.type) {
    case modaltypes/* DATA_MANAGER */.fT:
      return modalreducers_objectSpread(modalreducers_objectSpread({}, state), {}, {
        datamanager: action.payload
      });

    case modaltypes/* DRIVER */.cY:
      return modalreducers_objectSpread(modalreducers_objectSpread({}, state), {}, {
        driver: action.payload
      });

    case modaltypes/* MODEL_STATS */.rj:
      return modalreducers_objectSpread(modalreducers_objectSpread({}, state), {}, {
        modelstats: action.payload
      });

    case modaltypes/* DB_CONNECTION */.vr:
      return modalreducers_objectSpread(modalreducers_objectSpread({}, state), {}, {
        dbconnection: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ var modalreducers = (modalreducer);
;// CONCATENATED MODULE: ./redux/Login/logintypes.js
const LOGIN_DATA = "LOGIN_DATA";
;// CONCATENATED MODULE: ./redux/Login/loginreducers.js
function loginreducers_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function loginreducers_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { loginreducers_ownKeys(Object(source), true).forEach(function (key) { loginreducers_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { loginreducers_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function loginreducers_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const loginreducers_intialstate = {
  data: [{
    auth: false,
    username: ""
  }]
};

const loginreducer = (state = loginreducers_intialstate, action) => {
  switch (action.type) {
    case LOGIN_DATA:
      return loginreducers_objectSpread(loginreducers_objectSpread({}, state), {}, {
        data: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ var loginreducers = (loginreducer);
// EXTERNAL MODULE: ./redux/Driver/drivertypes.js
var drivertypes = __webpack_require__(7695);
;// CONCATENATED MODULE: ./redux/Driver/driverreducers.js
function driverreducers_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function driverreducers_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { driverreducers_ownKeys(Object(source), true).forEach(function (key) { driverreducers_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { driverreducers_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function driverreducers_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const driverreducers_intialstate = {
  data: [],
  source: []
};

const driverreducer = (state = driverreducers_intialstate, action) => {
  switch (action.type) {
    case drivertypes/* CURRENT_ASSIGNMENT */.B:
      return driverreducers_objectSpread(driverreducers_objectSpread({}, state), {}, {
        data: action.payload
      });

    case drivertypes/* SOURCE_ASSIGNMENT */.O:
      return driverreducers_objectSpread(driverreducers_objectSpread({}, state), {}, {
        source: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ var driverreducers = (driverreducer);
// EXTERNAL MODULE: ./redux/Account/Accounttypes.js
var Accounttypes = __webpack_require__(4129);
;// CONCATENATED MODULE: ./redux/Account/Accountreducers.js
function Accountreducers_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Accountreducers_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Accountreducers_ownKeys(Object(source), true).forEach(function (key) { Accountreducers_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Accountreducers_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Accountreducers_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const Accountreducers_intialstate = {
  accountdetails: [],
  accounttable: []
};

const Accountreducers = (state = Accountreducers_intialstate, action) => {
  switch (action.type) {
    case Accounttypes/* ACCOUNT_DETAILS */.e:
      return Accountreducers_objectSpread(Accountreducers_objectSpread({}, state), {}, {
        accountdetails: action.payload
      });

    case Accounttypes/* ACCOUNT_TABLE */.v:
      return Accountreducers_objectSpread(Accountreducers_objectSpread({}, state), {}, {
        accounttable: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ var Account_Accountreducers = (Accountreducers);
;// CONCATENATED MODULE: external "redux"
var external_redux_namespaceObject = require("redux");;
;// CONCATENATED MODULE: external "redux-thunk"
var external_redux_thunk_namespaceObject = require("redux-thunk");;
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
;// CONCATENATED MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");;
;// CONCATENATED MODULE: ./redux/store.js








const rootReducers = (0,external_redux_namespaceObject.combineReducers)({
  header: Header_Headerreducers,
  account: Account_Accountreducers,
  modal: modalreducers,
  login: loginreducers,
  driver: driverreducers
});
const middleware = [(external_redux_thunk_default())];

const makeStore = () => (0,external_redux_namespaceObject.createStore)(rootReducers, (0,external_redux_namespaceObject.compose)((0,external_redux_namespaceObject.applyMiddleware)(...middleware)));

const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(makeStore);
const store = (0,external_redux_namespaceObject.createStore)(rootReducers);
/* harmony default export */ var redux_store = (store);

/***/ }),

/***/ 7067:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8225);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


let theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)({
  palette: {
    primary: {
      light: '#63ccff',
      main: '#810000',
      dark: '#006db3'
    }
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5
    }
  },
  shape: {
    borderRadius: 8
  },
  props: {
    MuiTab: {
      disableRipple: true
    }
  },
  mixins: {
    toolbar: {
      minHeight: 48
    }
  }
});
theme = _objectSpread(_objectSpread({}, theme), {}, {
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: 'white',
        top: "none"
      }
    },
    MuiButton: {
      label: {
        textTransform: 'none'
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none'
        }
      }
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing(1)
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.white
      }
    },
    MuiTab: {
      root: {
        textTransform: 'none',
        margin: '0 16px',
        minWidth: 0,
        padding: 0,
        [theme.breakpoints.up('md')]: {
          padding: 0,
          minWidth: 0
        }
      }
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing(1)
      }
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4
      }
    },
    MuiDivider: {
      root: {
        backgroundColor: '#404854'
      }
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium
      }
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
        marginRight: 0,
        '& svg': {
          fontSize: 20
        }
      }
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32
      }
    }
  }
});
/* harmony default export */ __webpack_exports__["Z"] = (theme);

/***/ }),

/***/ 4047:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/styles");;

/***/ }),

/***/ 9137:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/system");;

/***/ }),

/***/ 2958:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/utils");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 4229:
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [8225,5834], function() { return __webpack_exec__(4378); });
module.exports = __webpack_exports__;

})();
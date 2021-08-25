exports.id = 3373;
exports.ids = [3373];
exports.modules = {

/***/ 3373:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1120);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8286);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9513);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(282);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);










const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "50ch"
    }
  },
  singleline: {
    "&.MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  },
  input: {
    display: "flex",
    flexDirection: "column"
  },
  button: {
    display: "flex",
    justifyContent: "flex-end"
  }
}));

const Drivedictionary = () => {
  const classes = useStyles();
  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("Controlled");
  const [definition, setDefinition] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);
  const [source, setSource] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);
  const [sourcecontact, setSourcecontact] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);
  const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state);
  const [definevalue, setDefinevalue] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
  const [sourcevalue, setSourcevalue] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
  const [contactvalue, setContactvalue] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
  const [dictionary, setDictionary] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
  const [Status, setStatus] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    axios__WEBPACK_IMPORTED_MODULE_5___default().get("http://[::1]:3000/driverDictionary/findBydriver", {
      params: {
        driver: data.account.accountdetails[0].driver
      }
    }).then(res => setDictionary(res.data));
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (dictionary[0] !== undefined) {
      setDefinevalue(dictionary[0].definition ? dictionary[0].definition : "");
      setSourcevalue(dictionary[0].source ? dictionary[0].source : "");
      setContactvalue(dictionary[0].sourceContact ? dictionary[0].sourceContact : "");
    }
  }, [dictionary]);

  const handleChange = event => {
    setValue(event.target.value);
  };

  const onSubmit = () => {
    // axios.patch(`http://[::1]:3000/driverDictionary/updateDriverDict?driver=${data.account.accountdetails[0].driver}&definition=${definevalue}&source=${sourcevalue}&sourceContact=${contactvalue}`).then(res=>console.log(res)).catch(err=>console.log(err))
    if (dictionary.length !== 0) {
      let obj = {
        driver: data.account.accountdetails[0].driver,
        definition: definevalue,
        source: sourcevalue,
        sourceContact: contactvalue
      };
      axios__WEBPACK_IMPORTED_MODULE_5___default()({
        method: "patch",
        url: "http://[::1]:3000/driverDictionary/updateDriverDict",
        params: obj
      }).then(res => {
        if (res.statusText === "OK") {
          setDefinition(true);
          setSource(true);
          setSourcecontact(true);
        }
      }).catch(err => console.log(err));
    } else {
      let event = new Date();
      let obj = {
        driver: data.account.accountdetails[0].driver,
        definition: definevalue,
        source: sourcevalue,
        sourceContact: contactvalue,
        "modBy": 0,
        "modTime": event.toISOString()
      };
      axios__WEBPACK_IMPORTED_MODULE_5___default()({
        method: "post",
        url: "http://[::1]:3000/driver-dictionaries",
        data: obj
      }).then(res => {
        if (res.statusText === "OK") {
          setDefinition(true);
          setSource(true);
          setSourcecontact(true);
        }
      }).catch(err => console.log(err));
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: classes.input,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
          id: "outlined-multiline-static",
          label: "Definition",
          multiline: true,
          disabled: definition,
          rows: 2,
          value: definevalue,
          variant: "outlined",
          onChange: e => setDefinevalue(e.target.value)
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
          onClick: () => setDefinition(!definition),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_2___default()), {
            style: {
              fontSize: 14
            }
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
          id: "outlined-multiline-static",
          label: "Source",
          multiline: true,
          className: classes.singleline,
          disabled: source,
          value: sourcevalue,
          variant: "outlined",
          onChange: e => setSourcevalue(e.target.value)
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
          onClick: () => setSource(!source),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_2___default()), {
            style: {
              fontSize: 14
            }
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
          id: "outlined-multiline-static",
          label: "Source Contact",
          multiline: true,
          className: classes.singleline,
          disabled: sourcecontact,
          value: contactvalue,
          variant: "outlined",
          onChange: e => setContactvalue(e.target.value)
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
          onClick: () => setSourcecontact(!sourcecontact),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_2___default()), {
            style: {
              fontSize: 14
            }
          })
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: classes.button,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
        onClick: () => onSubmit(),
        variant: "contained",
        color: "primary",
        size: "small",
        children: "Add/Update"
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Drivedictionary);

/***/ })

};
;
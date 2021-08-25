exports.id = 465;
exports.ids = [465];
exports.modules = {

/***/ 6635:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1120);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5639);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(194);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9513);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9414);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3372);
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8777);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_inputs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(64);
/* harmony import */ var _JSON_costtypes_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5440);
/* harmony import */ var _material_ui_icons_Build__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5697);
/* harmony import */ var _material_ui_icons_Build__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Build__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2230);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1664);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);




















const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z)(theme => ({
  container: {
    minWidth: 650,
    height: "100%",
    padding: "10px"
  },
  title: {
    fontSize: "16px",
    fontWeight: "bolder"
  },
  refer: {
    fontSize: "10px",
    color: "lightgrey"
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    padding: 10,
    border: "1px solid #810000",
    borderRadius: "12px"
  },
  form: {
    display: "flex",
    justifyContent: "space-between"
  },
  contents: {
    width: "30%",
    paddingRight: "12px"
  },
  formtitle: {
    textAlign: "left",
    fontSize: "14px",
    fontWeight: "bolder",
    display: "flex",
    alignItems: "center",
    height: "40px"
  },
  formdetails: {
    textAlign: "left",
    paddingLeft: 10,
    paddingTop: 5
  },
  iconalign: {
    paddingLeft: 10,
    display: "flex",
    alignItems: "center"
  },
  buttonicon: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "50%"
  },
  margin: {
    margin: theme.spacing(1)
  }
})); // const basic = [{_id:"", refNum:"", driver:"",profile:"",period:"",driverLink:[{_id:"",driverName:"",driverType:""driverAssociation:""}],costLink:{_id:"",refNum:"",
//   period:"",
//   cost:"",
//   costType:"",
//   modBy:"",
//   modTime:""},
//   volLink:{_id:"",
//   refNum:"",
//   period:"",
//   volume:"",
//   uom:""}
// }]

const Details = props => {
  const classes = useStyles();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useDispatch)();
  const [rawdata, setRawdata] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
  const [accountdata, setAccountdata] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
  const reduxdata = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)(state => state.header);
  const [drivers, setDriver] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  const [profile, setProfile] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  const [total, setTotal] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  const [costtype, setCosttype] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  const [volume, setVolume] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  const [uom, setUom] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_13__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    console.log(reduxdata);
    {
      reduxdata.account[0] && axios__WEBPACK_IMPORTED_MODULE_11___default().get("http://[::1]:3000/api/account-drivers/accountDetails", {
        params: {
          period: reduxdata.period,
          refNum: reduxdata.account[0].refNum
        }
      }).then(res => (setRawdata(res.data.length !== 0 ? res.data : ["No data"]), console.log(res.data))).catch(err => console.log("error"));
    }
  }, [reduxdata]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let tempdata = [];

    if (rawdata[0] !== "No data") {
      let temp = rawdata.filter(item => reduxdata.period === item.period && reduxdata.account[0].refNum === item.refNum);

      if (temp[0] !== "No data") {
        setAccountdata([...temp]);
      } else {
        setAccountdata(["No data"]);
      }
    } else {
      setAccountdata(["No data"]);
    }
  }, [rawdata]);

  const handleClick = e => {
    e.preventDefault();
    router.push("/Driverbuild");
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    dispatch((0,_redux__WEBPACK_IMPORTED_MODULE_15__/* .Accountdetails */ .t)(accountdata));
  }, [accountdata]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
    children: accountdata.length === 0 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.form,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: classes.contents,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: classes.formtitle,
            children: ["Driver ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.IconButton, {
              onClick: () => setDriver(!drivers),
              className: classes.iconalign,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_2___default()), {
                style: {
                  fontSize: 14
                }
              })
            })]
          }), drivers ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: classes.formdetails,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inputs__WEBPACK_IMPORTED_MODULE_7__/* .BootstrapTextfield */ .TS, {
              size: "small",
              id: "",
              variant: "outlined"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: classes.buttonicon,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_12__.default, {
                href: "/Driverbuild",
                as: "/Driverbuild",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.IconButton // onClick={(e)=>handleClick(e)}
                , {
                  size: "small",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Build__WEBPACK_IMPORTED_MODULE_9___default()), {
                    color: "primary",
                    fontSize: "inherit"
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.IconButton, {
                size: "small",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_4___default()), {
                  color: "primary",
                  fontSize: "inherit"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.IconButton, {
                size: "small",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5___default()), {
                  color: "primary",
                  fontSize: "inherit"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.IconButton, {
                size: "small",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3___default()), {
                  color: "primary",
                  fontSize: "inherit"
                })
              })]
            })]
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: classes.formdetails,
            children: accountdata[0] !== "No data" ? accountdata[0].driverLink[0] && accountdata[0].driverLink[0].driverName : ""
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: classes.contents,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: classes.formtitle,
            children: "Association"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: classes.formdetails,
            children: accountdata[0] !== "No data" ? accountdata[0].driverLink[0] && accountdata[0].driverLink[0].driverAssociation : ""
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: classes.contents,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: classes.formtitle,
            children: ["Profile", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.IconButton, {
              className: classes.iconalign,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_2___default()), {
                onClick: () => setProfile(!profile),
                style: {
                  fontSize: 14
                }
              })
            })]
          }), profile ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: classes.formdetails,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inputs__WEBPACK_IMPORTED_MODULE_7__/* .BootstrapTextfield */ .TS, {
              size: "small",
              id: "",
              variant: "outlined"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: classes.buttonicon,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.IconButton, {
                size: "small",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_4___default()), {
                  color: "primary",
                  fontSize: "inherit"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.IconButton, {
                size: "small",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5___default()), {
                  color: "primary",
                  fontSize: "inherit"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.IconButton, {
                size: "small",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3___default()), {
                  color: "primary",
                  fontSize: "inherit"
                })
              })]
            })]
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: classes.formdetails,
            children: accountdata[0] !== "No data" ? accountdata[0] && accountdata[0].profile : ""
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: classes.contents
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.form,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: classes.contents,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: classes.formtitle,
            children: ["Total Cost", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.IconButton, {
              className: classes.iconalign,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_2___default()), {
                onClick: () => setTotal(!total),
                style: {
                  fontSize: 14
                }
              })
            })]
          }), total ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: classes.formdetails,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inputs__WEBPACK_IMPORTED_MODULE_7__/* .BootstrapInputnumber */ .$B, {
              className: classes.input,
              type: "number",
              size: "small",
              id: "",
              variant: "outlined"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: classes.buttonicon,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.IconButton, {
                size: "small",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_4___default()), {
                  color: "primary",
                  fontSize: "inherit"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.IconButton, {
                size: "small",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5___default()), {
                  color: "primary",
                  fontSize: "inherit"
                })
              })]
            })]
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: classes.formdetails,
            children: accountdata[0] !== "No data" ? accountdata[0].costLink[0] && accountdata[0].costLink[0].cost : ""
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: classes.contents,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: classes.formtitle,
            children: ["Cost Type", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.IconButton, {
              className: classes.iconalign,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_2___default()), {
                onClick: () => setCosttype(!costtype),
                style: {
                  fontSize: 14
                }
              })
            })]
          }), costtype ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: classes.formdetails,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, {
              labelId: "demo-customized-select-label",
              id: "demo-customized-select",
              input: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inputs__WEBPACK_IMPORTED_MODULE_7__/* .Bootstrapdropdown */ .AO, {}),
              children: _JSON_costtypes_json__WEBPACK_IMPORTED_MODULE_8__.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_17__/* .default */ .Z, {
                value: item,
                children: item.costtype
              }))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: classes.buttonicon,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.IconButton, {
                size: "small",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_4___default()), {
                  color: "primary",
                  fontSize: "inherit"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.IconButton, {
                size: "small",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5___default()), {
                  color: "primary",
                  fontSize: "inherit"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.IconButton, {
                size: "small",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3___default()), {
                  color: "primary",
                  fontSize: "inherit"
                })
              })]
            })]
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: classes.formdetails,
            children: accountdata[0] !== "No data" ? accountdata[0].costLink[0] && accountdata[0].costLink[0].costType : ""
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: classes.contents,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: classes.formtitle,
            children: ["Volume", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.IconButton, {
              className: classes.iconalign,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_2___default()), {
                onClick: () => setVolume(!volume),
                style: {
                  fontSize: 14
                }
              })
            })]
          }), volume ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: classes.formdetails,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inputs__WEBPACK_IMPORTED_MODULE_7__/* .BootstrapInputnumber */ .$B, {
              type: "number",
              size: "small",
              id: "",
              variant: "outlined"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: classes.buttonicon,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.IconButton, {
                size: "small",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_4___default()), {
                  color: "primary",
                  fontSize: "inherit"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.IconButton, {
                size: "small",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5___default()), {
                  color: "primary",
                  fontSize: "inherit"
                })
              })]
            })]
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: classes.formdetails,
            children: accountdata[0] !== "No data" ? accountdata[0].volLink[0] && accountdata[0].volLink[0].volume : ""
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: classes.contents,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: classes.formtitle,
            children: ["UOM", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.IconButton, {
              className: classes.iconalign,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_2___default()), {
                onClick: () => setUom(!uom),
                style: {
                  fontSize: 14
                }
              })
            })]
          }), uom ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: classes.formdetails,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inputs__WEBPACK_IMPORTED_MODULE_7__/* .BootstrapTextfield */ .TS, {
              type: "number",
              size: "small",
              id: "",
              variant: "outlined"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: classes.buttonicon,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.IconButton, {
                size: "small",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_4___default()), {
                  color: "primary",
                  fontSize: "inherit"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.IconButton, {
                size: "small",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5___default()), {
                  color: "primary",
                  fontSize: "inherit"
                })
              })]
            })]
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: classes.formdetails,
            children: accountdata[0] !== "No data" ? accountdata[0].volLink[0] && accountdata[0].volLink[0].uom : ""
          })]
        })]
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Details);

/***/ }),

/***/ 5440:
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('[{"_id":{"$oid":"60deb6899f1f335410eddb31"},"costtype":"INR","__v":0},{"_id":{"$oid":"60deb6b19f1f335410eddb33"},"costtype":"USD","__v":0},{"_id":{"$oid":"60deb6b89f1f335410eddb35"},"costtype":"FTE","__v":0}]');

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;
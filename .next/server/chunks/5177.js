exports.id = 5177;
exports.ids = [5177];
exports.modules = {

/***/ 5177:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Treeview; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1120);
/* harmony import */ var _material_ui_lab_TreeView__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5425);
/* harmony import */ var _material_ui_lab_TreeItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(131);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2318);
/* harmony import */ var _material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1084);
/* harmony import */ var _material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8567);
/* harmony import */ var _material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_inputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64);
/* harmony import */ var _JSON_TreeNodes_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7305);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6908);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4436);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3700);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(194);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(282);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












 // dropdown








function StyledTreeItem(props) {
  const classes = (0,_components_inputs__WEBPACK_IMPORTED_MODULE_4__/* .useTreeItemStyles */ .AC)();

  const {
    labelText,
    labelIcon: LabelIcon,
    labelInfo,
    color,
    bgColor
  } = props,
        other = _objectWithoutProperties(props, ["labelText", "labelIcon", "labelInfo", "color", "bgColor"]);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_lab_TreeItem__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, _objectSpread({
    label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: classes.labelRoot,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
        variant: "body2",
        className: classes.labelText,
        children: labelText
      })
    }),
    style: {
      '--tree-view-color': color,
      '--tree-view-bg-color': bgColor,
      '--tree-view-height': 38
    },
    classes: {
      root: classes.root,
      content: classes.content,
      expanded: classes.expanded,
      selected: classes.selected,
      group: classes.group,
      label: classes.label
    }
  }, other));
}

const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z)({
  root: {
    height: 157,
    flexGrow: 1,
    overflow: "auto",
    border: "1px solid",
    margin: 10,
    borderRadius: 6
  },
  formControl: {
    marginRight: 5,
    minWidth: 120
  },
  labelname: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "75%",
    transform: "translate(14px,3px) scale(1)",
    "&.MuiInputLabel-outlined.MuiInputLabel-shrink": {
      // transform: "translate(14px, 0px) scale(0.75)"
      display: "none"
    }
  },
  treeviewtop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  checkbox: {
    "&.MuiCheckbox-colorSecondary.Mui-checked": {
      color: "#810000"
    }
  }
});
function Treeview({
  setData
}) {
  const classes = useStyles();
  const {
    0: datum,
    1: setDatum
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: Treeitems,
    1: setTreeitems
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([..._JSON_TreeNodes_json__WEBPACK_IMPORTED_MODULE_5__]);
  const Treeview = [];
  const {
    0: selected,
    1: setSelected
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  let {
    0: node,
    1: setNode
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
  const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(state => state.header.stage);
  const period = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(state => state.header.period);
  const state = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(state => state.account.accountdetails);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const temptreeview = fetch("http://[::1]:3000/center-hierarchies/treeview");
    temptreeview.then(res => res.json()).then(tempdata => setTreeitems(tempdata));
    setData("");
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    Treeitems.map(item => {
      if (item.stage === data) {
        Treeview.push(item);
      }
    }); // to get the higher node

    Treeview.map(item => {
      if (node < item.Node) {
        node = item.Node;
      }
    });
    setNode(node);

    for (let i = node; i > 0; i--) {
      Treeview.map((key, index) => {
        if (key.Node === i) {
          Object.assign(key, {
            ["checked"]: false
          });

          if (key.treeView.length !== 0) {
            key.treeView.map(item => {
              Object.assign(item, {
                ["checked"]: false
              });
            });
          }
        }
      });
    } // to push the tree nodes inside the other nodes


    let deletenode = [];

    for (let i = node; i > 0; i--) {
      Treeview.map((key, index) => {
        if (key.Node === i) {
          Treeview.map(item => {
            if (item.refNum === key.parentRefNum) {
              const bool = item.treeView.some(item => item._id === key._id);
              {
                !bool ? item.treeView = [...item.treeView, key] : item.treeView = [...item.treeView];
              }
              deletenode.push(index);
            }
          });
        }
      });
    }

    let tempdata = [];

    for (let i = 0; i < Treeview.length; i++) {
      if (!deletenode.includes(i)) {
        tempdata.push(Treeview[i]);
      }
    }

    setDatum([...tempdata]);
  }, [_JSON_TreeNodes_json__WEBPACK_IMPORTED_MODULE_5__, Treeitems]);

  const Treeitem = props => {
    const {
      parent
    } = props;
    return props.data.map(item => {
      return !(item.treeView === undefined || item.treeView.length === 0) ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledTreeItem, {
        nodeId: item._id,
        labelText: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Checkbox, {
            className: classes.checkbox,
            checked: item.checked,
            onClick: e => handleselectall(e, item)
          }), " ", item.name]
        }),
        color: "#810000",
        bgColor: "#EEEBDD",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Treeitem, {
          data: item.treeView,
          parent: parent
        })
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledTreeItem, {
        nodeId: item._id.$oid,
        labelText: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Checkbox, {
            className: classes.checkbox,
            checked: item.checked,
            onClick: e => handlecheckbox(props.data, item, parent)
          }), " ", item.name]
        }),
        color: "#810000",
        bgColor: "#EEEBDD"
      });
    });
  };

  const selectall = props => {
    props["checked"] = true;

    if (props.treeView === undefined) {
      selected.push(props);
    }

    setSelected([...selected]);
    let a = props;

    if (a.treeView && a.treeView.length !== 0 || a.treeView !== undefined) {
      for (let i = 0; i < a.treeView.length; i++) {
        a.treeView[i]["checked"] = true;
        selectall(a.treeView[i]);
      }
    }
  };

  const unselectall = props => {
    props["checked"] = false;

    if (props.treeView === undefined) {
      const index = selected.findIndex(item => item.name === props.name);
      selected.splice(index, 1);
    }

    setSelected([...selected]);
    let a = props;

    if (a.treeView && a.treeView.length !== 0 || a.treeView !== undefined) {
      for (let i = 0; i < a.treeView.length; i++) {
        a.treeView[i]["checked"] = false;
        unselectall(a.treeView[i]);
      }
    }
  }; // for single select 


  const selectparent = (props, state) => {
    let parentrefnum = props;
    let value = state;

    for (let i = node; i > 0; i--) {
      Treeitems.map(item => {
        if (parentrefnum === item.refNum) {
          if (item.treeView !== undefined && item.treeView.length !== 0) {
            const status = item.treeView.every(key => key["checked"] === true);

            if (status) {
              item["checked"] = true;
              parentrefnum = item.parentRefNum;
            } else {
              item["checked"] = false;
              parentrefnum = item.parentRefNum;
            }
          } else {
            item["checked"] = value;
            parentrefnum = item.parentRefNum;
          }
        }
      });
    }
  };

  const handleselectall = (e, props) => {
    if (props["checked"] === false) {
      props["checked"] = true;

      if (props.treeView.length !== 0) {
        for (let i = 0; i < props.treeView.length; i++) {
          selectall(props.treeView[i]);
        }
      }

      selectparent(props.parentRefNum, true);
    } else if (props["checked"] === true) {
      props["checked"] = false;

      if (props.treeView.length !== 0) {
        for (let i = 0; i < props.treeView.length; i++) {
          unselectall(props.treeView[i]);
        }
      }

      selectparent(props.parentRefNum, false);
    }

    setDatum([...datum]);
  };

  const handlecheckbox = (item, props, data) => {
    let count = 0;

    if (props["checked"] === false) {
      selected.push(props);
      setSelected([...selected]);
      props["checked"] = true;
    } else {
      props["checked"] = false;
      const a = selected.findIndex(item => item.name === props.name);
      selected.splice(a, 1);
      setSelected([...selected]);
    }

    item.length !== 0 && item.map(key => {
      if (key["checked"] === true) {
        count = count + 1;
      }
    });

    if (count === item.length && data !== undefined) {
      let parentrefnum = props.parentRefNum;
      let value = true;
      selectparent(parentrefnum, value);
    } else if (data !== undefined) {
      let parentrefnum = props.parentRefNum;
      let value = false;
      selectparent(parentrefnum, value);
    }

    setDatum([...datum]);
  };

  const refresh = props => {
    props.map(item => {
      item["checked"] = false;

      if (item.treeView !== undefined) {
        item["checked"] = false;
        refresh(item.treeView);
      }
    });
  };

  const Addassignment = () => {
    selected.map(item => {
      axios__WEBPACK_IMPORTED_MODULE_8___default().get("http://[::1]:3000/account-drivers/accountDetails", {
        params: {
          period: period,
          refNum: item.refNum
        }
      }).then(res => {
        console.log(res.data);
        let final = {
          refNum: item.refNum,
          period: period,
          driver: state[0].driverLink[0].driverName,
          profile: state[0].profile
        };
        axios__WEBPACK_IMPORTED_MODULE_8___default()({
          method: "patch",
          url: "http://[::1]:3000/account-drivers/assignDriverProfile",
          params: final
        }).then(res => {
          if (res.statusText === "OK") {
            setData("OK");
          }
        });
      }).catch(err => console.log(err));
      datum.map(item => {
        item["checked"] = false;
        item.treeView !== undefined && refresh(item.treeView);
      });
      setDatum([...datum]);
      dispatch((0,_redux__WEBPACK_IMPORTED_MODULE_12__/* .source */ .q)(selected));
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: classes.treeviewtop,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
        variant: "outlined",
        disabled: true,
        className: classes.formControl,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
          className: classes.labelname,
          id: "demo-simple-select-outlined-label",
          children: "Financial"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z, {
          labelId: "demo-simple-select-outlined-label",
          id: "demo-simple-select-outlined",
          label: "Age",
          input: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inputs__WEBPACK_IMPORTED_MODULE_4__/* .Bootstrapdropdownlong */ .xi, {})
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, {
        variant: "contained",
        color: "primary",
        onClick: Addassignment,
        size: "small",
        children: "Assign Selected"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_lab_TreeView__WEBPACK_IMPORTED_MODULE_17__/* .default */ .Z, {
      className: classes.root,
      defaultExpanded: ['3'],
      defaultCollapseIcon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_2___default()), {}),
      defaultExpandIcon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_3___default()), {}),
      defaultEndIcon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
          width: 24
        }
      }),
      children: datum.map(item => {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledTreeItem, {
          nodeId: item._id,
          labelText: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Checkbox, {
              className: classes.checkbox,
              checked: item.checked,
              onClick: e => item.treeView.length !== 0 ? handleselectall(e, item) : handlecheckbox([], item)
            }), " ", item.name]
          }),
          color: "#810000",
          bgColor: "#EEEBDD",
          children: item.treeView.length !== 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Treeitem, {
            data: item.treeView,
            parent: item
          })
        });
      })
    })]
  });
}

/***/ }),

/***/ 6908:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": function() { return /* binding */ drivers; },
/* harmony export */   "q": function() { return /* binding */ source; }
/* harmony export */ });
/* harmony import */ var _drivertypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7695);

const drivers = data => {
  return {
    type: _drivertypes__WEBPACK_IMPORTED_MODULE_0__/* .CURRENT_ASSIGNMENT */ .B,
    payload: data
  };
};
const source = data => {
  return {
    type: _drivertypes__WEBPACK_IMPORTED_MODULE_0__/* .SOURCE_ASSIGNMENT */ .O,
    payload: data
  };
};

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

/***/ })

};
;
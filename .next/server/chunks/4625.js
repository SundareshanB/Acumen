exports.id = 4625;
exports.ids = [4625];
exports.modules = {

/***/ 4625:
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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1120);
/* harmony import */ var _material_ui_lab_TreeView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5425);
/* harmony import */ var _material_ui_lab_TreeItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(131);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2318);
/* harmony import */ var _material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1084);
/* harmony import */ var _material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8567);
/* harmony import */ var _material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_inputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64);
/* harmony import */ var _JSON_TreeNodes_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7305);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);


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

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_lab_TreeItem__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, _objectSpread({
    label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: classes.labelRoot,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
        variant: "body2",
        className: classes.labelText,
        children: labelText
      })
    }),
    style: {
      '--tree-view-color': color,
      '--tree-view-bg-color': bgColor
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

const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)({
  root: {
    height: 177,
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
  }
});
function Treeview({
  setSelectedlabel
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
  let {
    0: node,
    1: setNode
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(state => state.header.stage);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const temptreeview = fetch("http://[::1]:3000/center-hierarchies/treeview");
    temptreeview.then(res => res.json()).then(tempdata => setTreeitems(tempdata));
  }, [data]);
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
    }); // to push the tree nodes inside the other nodes

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

  const handleClick = props => {
    setSelectedlabel([props]);
  };

  const Treeitem = props => {
    return props.data.map(item => {
      return !(item.treeView === undefined || item.treeView.length === 0) ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledTreeItem, {
        nodeId: item._id,
        labelText: item.name,
        color: "#810000",
        bgColor: "#EEEBDD",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Treeitem, {
          data: item.treeView
        })
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledTreeItem, {
        onClick: () => handleClick(item),
        nodeId: item._id,
        labelText: item.name,
        color: "#810000",
        bgColor: "#EEEBDD"
      });
    });
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_lab_TreeView__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
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
          onClick: () => {
            item.treeView.length === 0 && handleClick(item);
          },
          labelText: item.name,
          color: "#810000",
          bgColor: "#EEEBDD",
          children: item.treeView.length !== 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Treeitem, {
            data: item.treeView
          })
        });
      })
    })
  });
}

/***/ })

};
;
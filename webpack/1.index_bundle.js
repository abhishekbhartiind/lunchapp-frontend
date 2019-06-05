(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/components/shared/customLoadingOverlay.js":
/*!*******************************************************!*\
  !*** ./src/components/shared/customLoadingOverlay.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = CustomLoadingOverlay;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _antd = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction CustomLoadingOverlay() {\n  return _react.default.createElement(_antd.Spin, {\n    tip: \"Loading...\"\n  });\n}\n\n//# sourceURL=webpack:///./src/components/shared/customLoadingOverlay.js?");

/***/ }),

/***/ "./src/components/shared/customNoRowsOverlay.js":
/*!******************************************************!*\
  !*** ./src/components/shared/customNoRowsOverlay.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = CustomNoRowsOverlay;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _antd = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction CustomNoRowsOverlay() {\n  return _react.default.createElement(_antd.Empty, {\n    image: \"https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original\",\n    imageStyle: {\n      height: 100\n    },\n    description: _react.default.createElement(\"span\", null, \"No Data\")\n  });\n}\n\n//# sourceURL=webpack:///./src/components/shared/customNoRowsOverlay.js?");

/***/ }),

/***/ "./src/pages/apps/dashboard/index.js":
/*!*******************************************!*\
  !*** ./src/pages/apps/dashboard/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _reactApollo = __webpack_require__(/*! react-apollo */ \"./node_modules/react-apollo/react-apollo.esm.js\");\n\nvar _graphqlTag = _interopRequireDefault(__webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\"));\n\nvar _agGridReact = __webpack_require__(/*! ag-grid-react */ \"./node_modules/ag-grid-react/main.js\");\n\nvar _customLoadingOverlay = _interopRequireDefault(__webpack_require__(/*! ../../../components/shared/customLoadingOverlay */ \"./src/components/shared/customLoadingOverlay.js\"));\n\nvar _customNoRowsOverlay = _interopRequireDefault(__webpack_require__(/*! ../../../components/shared/customNoRowsOverlay */ \"./src/components/shared/customNoRowsOverlay.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n\\tquery {\\n\\t\\tusers {\\n\\t\\t\\t_id\\n\\t\\t\\tusername\\n\\t\\t\\temail\\n\\t\\t\\tfirstLetterOfEmail\\n\\t\\t\\tchats {\\n\\t\\t\\t\\t_id\\n\\t\\t\\t\\tusers {\\n\\t\\t\\t\\t\\t_id\\n\\t\\t\\t\\t}\\n\\t\\t\\t\\tmessages {\\n\\t\\t\\t\\t\\t_id\\n\\t\\t\\t\\t}\\n\\t\\t\\t\\tlastMessage {\\n\\t\\t\\t\\t\\t_id\\n\\t\\t\\t\\t}\\n\\t\\t\\t}\\n\\t\\t}\\n\\t}\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction Dashboard(props) {\n  var _useState = (0, _react.useState)(null),\n      _useState2 = _slicedToArray(_useState, 2),\n      rowData = _useState2[0],\n      setRowData = _useState2[1];\n\n  var columnDefs = [{\n    headerName: 'Id',\n    field: '_id',\n    filter: 'agTextColumnFilter',\n    // suppressMenu: true,\n    // enablePivot: true,\n    // rowGroup: true\n    // suppressSizeToFit: true,\n    checkboxSelection: function checkboxSelection(params) {\n      return params.columnApi.getRowGroupColumns().length === 0;\n    },\n    headerCheckboxSelection: function headerCheckboxSelection(params) {\n      return params.columnApi.getRowGroupColumns().length === 0;\n    }\n  }, {\n    headerName: 'Email',\n    field: 'email',\n    filter: 'agTextColumnFilter'\n  }, {\n    headerName: 'Username',\n    field: 'username',\n    filter: 'agTextColumnFilter'\n  }];\n  var defaultColDef = {\n    sortable: true,\n    filter: true,\n    resizable: true\n  };\n  var frameworkComponents = {\n    customLoadingOverlay: _customLoadingOverlay.default,\n    customNoRowsOverlay: _customNoRowsOverlay.default\n  };\n  var loadingOverlayComponent = 'customLoadingOverlay'; // const loadingOverlayComponentParams = {\n  // \tloadingMessage: 'One moment please...'\n  // }\n\n  var noRowsOverlayComponent = 'customNoRowsOverlay'; // const noRowsOverlayComponentParams = {\n  // \tnoRowsMessageFunc: 'Sorry - no rows! at: ' + new Date()\n  // }\n  // const autoGroupColumnDef = {\n  // \theaderName: 'Model',\n  // \tfield: 'model',\n  // \tcellRenderer: 'agGroupCellRenderer',\n  // \tcellRendererParams: {\n  // \t\tcheckbox: true\n  // \t}\n  // }\n\n  var statusBar = {\n    statusPanels: [{\n      statusPanel: 'agTotalRowCountComponent',\n      align: 'left'\n    }, {\n      statusPanel: 'agFilteredRowCountComponent'\n    }, {\n      statusPanel: 'agSelectedRowCountComponent'\n    }, {\n      statusPanel: 'agAggregationComponent'\n    }]\n  };\n\n  function onGridReady(params) {\n    this.gridApi = params.api;\n    this.gridColumnApi = params.columnApi;\n    props.client.query({\n      query: USERS\n    }).then(function (res) {\n      setRowData(res.data.users);\n    }).catch(function (err) {\n      console.log(err);\n    });\n    this.gridApi.sizeColumnsToFit();\n  }\n\n  return _react.default.createElement(_react.default.Fragment, null, \"Dashboard\", _react.default.createElement(\"div\", {\n    className: \"ag-theme-balham\",\n    style: {\n      height: '500px',\n      width: '100%'\n    }\n  }, _react.default.createElement(_agGridReact.AgGridReact, {\n    columnDefs: columnDefs,\n    defaultColDef: defaultColDef,\n    animateRows: true,\n    rowData: rowData,\n    onGridReady: onGridReady,\n    floatingFilter: true,\n    rowSelection: 'multiple' // groupSelectsChildren={true}\n    // autoGroupColumnDef={autoGroupColumnDef}\n    ,\n    frameworkComponents: frameworkComponents,\n    loadingOverlayComponent: loadingOverlayComponent // loadingOverlayComponentParams={\n    // \tloadingOverlayComponentParams\n    // }\n    ,\n    noRowsOverlayComponent: noRowsOverlayComponent // noRowsOverlayComponentParams={\n    // \tnoRowsOverlayComponentParams\n    // }\n    // onFirstDataRendered={this.onFirstDataRendered.bind(this)}\n    ,\n    enableRangeSelection: true,\n    statusBar: statusBar,\n    pagination: true // debug={true}\n\n  })));\n}\n\nvar USERS = (0, _graphqlTag.default)(_templateObject());\n\nvar _default = (0, _reactApollo.withApollo)(Dashboard);\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/pages/apps/dashboard/index.js?");

/***/ })

}]);
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var kinds = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502'
};

var Alert = function Alert(_ref) {
  var children = _ref.children,
      kind = _ref.kind,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["children", "kind"]);
  return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    style: {
      padding: 20,
      background: kinds[kind] || 'white',
      borderRadius: 3,
      color: 'white'
    }
  }, rest), children);
};

var _default = Alert;
exports["default"] = _default;
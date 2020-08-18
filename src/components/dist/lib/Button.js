"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n  ", ";\n  cursor: pointer;\n  margin: 3px 5px;\n  border: none;\n  border-radius: 3px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var scales = {
  small: "\n    padding: 5px 10px;\n    font-size: 14px;\n  ",
  normal: "\n    padding: 10px 20px;\n    font-size: 16px;\n  ",
  big: "\n    padding: 20px 30px;\n    font-size: 18px;\n  "
};

var kind = function kind(outline) {
  return function (bg, color) {
    var boxShadowColor = outline ? bg : 'transparent';
    var backgroundColor = outline ? 'transparent' : bg;
    return "\n    background: ".concat(backgroundColor, ";\n    box-shadow: inset 0 0 0 1px ").concat(boxShadowColor, ";\n    color: ").concat(outline ? bg : color, ";\n    transition: all .3s;\n\n    &:hover {\n      box-shadow: inset 0 0 0 1000px ").concat(boxShadowColor, ";\n      color: ").concat(color, ";\n    }\n  ");
  };
};

var kinds = function kinds(outline) {
  var get = kind(outline);
  return {
    primary: get('#1FB6FF', 'white'),
    secondary: get('#5352ED', 'white'),
    cancel: get('#FF4949', 'white'),
    dark: get('#273444', 'white'),
    gray: get('#8492A6', 'white')
  };
};

var getScale = function getScale(_ref) {
  var _ref$scale = _ref.scale,
      scale = _ref$scale === void 0 ? 'normal' : _ref$scale;
  return scales[scale];
};

var getKind = function getKind(_ref2) {
  var _ref2$kind = _ref2.kind,
      kind = _ref2$kind === void 0 ? 'primary' : _ref2$kind,
      _ref2$outline = _ref2.outline,
      outline = _ref2$outline === void 0 ? false : _ref2$outline;
  return kinds(outline)[kind];
};

var ButtonStyled = (0, _styled["default"])('button')(_templateObject(), getKind, getScale);

var Button = function Button(_ref3) {
  var children = _ref3.children,
      props = (0, _objectWithoutProperties2["default"])(_ref3, ["children"]);
  return /*#__PURE__*/_react["default"].createElement(ButtonStyled, props, children);
};

var _default = Button;
exports["default"] = _default;
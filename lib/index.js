'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = require('styled-components');
var styled__default = _interopDefault(styled);

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var font = styled.css(["text-transform:uppercase;font-size:1.5em;font-weight:bold;letter-spacing:4px;"]);
var shape = styled.css(["border:none;border-radius:5px;padding:10px 20px;"]);
var primaryColors = styled.css(["background:#5cdb95;color:#05385b;"]);

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper = styled__default.button(_templateObject(), font, primaryColors, shape);
function Button(_ref) {
  var text = _ref.text,
      onClick = _ref.onClick;
  return React.createElement(Wrapper, {
    onClick: onClick
  }, text);
}

exports.Button = Button;
//# sourceMappingURL=index.js.map

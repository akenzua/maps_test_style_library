import React from 'react';
import styled, { css } from 'styled-components';

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

var font = css(["text-transform:uppercase;font-size:1.5em;font-weight:bold;letter-spacing:4px;"]);
var shape = css(["border:none;border-radius:5px;padding:10px 20px;"]);
var primaryColors = css(["background:#5cdb95;color:#05385b;"]);

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper = styled.button(_templateObject(), font, primaryColors, shape);
function Button(_ref) {
  var text = _ref.text,
      onClick = _ref.onClick;
  return React.createElement(Wrapper, {
    onClick: onClick
  }, text);
}

export { Button };
//# sourceMappingURL=index.es.js.map

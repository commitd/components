// required until https://github.com/NV/CSSOM/pull/111 and version in jest updated
CSSMediaRule.prototype.insertRule = CSSStyleSheet.prototype.insertRule

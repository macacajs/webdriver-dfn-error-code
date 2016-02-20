/* ================================================================
 * webdriver-dfn-error-code by xdf(xudafeng[at]126.com)
 *
 * first created at : Sat Feb 20 2016 15:52:03 GMT+0800 (CST)
 *
 * ================================================================
 * Copyright  xdf
 *
 * Licensed under the MIT License
 * You may not use this file except in compliance with the License.
 *
 * ================================================================ */

'use strict';

var WebdriverErrorCode = require('..');

describe('test', function() {
  it('should be ok', function() {
    WebdriverErrorCode.should.be.Object;
  });
});

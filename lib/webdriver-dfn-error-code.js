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

const codes = {
  Success: {
    code: 0,
    description: 'The command executed successfully.'
  },
  NoSuchDriver: {
    code: 6,
    description: 'A session is either terminated or not started'
  },
  NoSuchElement: {
    code: 7,
    description: 'An element could not be located on the page using the given search parameters.'
  },
  NoSuchFrame: {
    code: 8,
    description: 'A request to switch to a frame could not be satisfied because the frame could not be found.'
  },
  UnknownCommand: {
    code: 9,
    description: 'The requested resource could not be found, or a request was received using an HTTP method that is not supported by the mapped resource.'
  },
  StaleElementReference: {
    code: 10,
    description: 'An element command failed because the referenced element is no longer attached to the DOM.'
  },
  ElementNotVisible: {
    code: 11,
    description: 'An element command could not be completed because the element is not visible on the page.'
  },
  InvalidElementState: {
    code: 12,
    description: 'An element command could not be completed because the element is in an invalid state (e.g. attempting to click a disabled element).'
  },
  UnknownError: {
    code: 13,
    description: 'An unknown server-side error occurred while processing the command.'
  },
  ElementIsNotSelectable: {
    code: 15,
    description: 'An attempt was made to select an element that cannot be selected.'
  },
  JavaScriptError: {
    code: 17,
    description: 'An error occurred while executing user supplied !JavaScript.'
  },
  XPathLookupError: {
    code: 19,
    description: 'An error occurred while searching for an element by XPath.'
  },
  Timeout: {
    code: 21,
    description: 'An operation did not complete before its timeout expired.'
  },
  NoSuchWindow: {
    code: 23,
    description: 'A request to switch to a different window could not be satisfied because the window could not be found.'
  },
  InvalidCookieDomain: {
    code: 24,
    description: 'An illegal attempt was made to set a cookie under a different domain than the current page.'
  },
  UnableToSetCookie: {
    code: 25,
    description: 'A request to set a cookie\'s value could not be satisfied.'
  },
  UnexpectedAlertOpen: {
    code: 26,
    description: 'A modal dialog was open, blocking this operation'
  },
  NoAlertOpenError: {
    code: 27,
    description: 'An attempt was made to operate on a modal dialog when one was not open.'
  },
  ScriptTimeout: {
    code: 28,
    description: 'A script did not complete before its timeout expired.'
  },
  InvalidElementCoordinates: {
    code: 29,
    description: 'The coordinates provided to an interactions operation are invalid.'
  },
  IMENotAvailable: {
    code: 30,
    description: 'IME was not available.'
  },
  IMEEngineActivationFailed: {
    code: 31,
    description: 'An IME engine could not be started.'
  },
  InvalidSelector: {
    code: 32,
    description: 'Argument was an invalid selector (e.g. XPath/CSS).'
  },
  SessionNotCreatedException: {
    code: 33,
    description: 'A new session could not be created.'
  },
  MoveTargetOutOfBounds: {
    code: 34,
    description: 'Target provided for a move action is out of bounds.'
  }
};

const errors = {};

function customizeError(errorName, defaultMsg) {
  return function(msg, screen, stacktrace) {
    this.name = errorName;
    this.message = msg || defaultMsg;
    this.screen = screen;
    this.stacktrace = stacktrace;
    Object.setPrototypeOf(this.constructor.prototype, Error.prototype);
    Error.captureStackTrace(this, this.constructor);
  };
}

Object.keys(codes).map(function(name) {
  const defaultMsg = codes[name]['description'];
  errors[name] = customizeError(name, defaultMsg);
});

errors['NotImplementedError'] = customizeError('NotImplementedError', 'The method is not implemented yet.');
errors['NoContextError'] = customizeError('NoContextError', 'The Context does not exist.');

exports.codes = codes;
exports.errors = errors;
exports.getErrorByCode = function(code) {
  var error = null;

  Object.keys(codes).forEach(function(item) {
    if (codes[item].code === code) {
      error = item;
    }
  });
  return error;
};

'use strict';

function select(selector, scope = document) {
  return scope.querySelector(selector);
}

function listen(event, selector, callback) {
  return selector.addEventListener(event, callback);
}

const pageWidth = select('.width');
const pageHeight = select('.height');
const orient = select('.orient'); // Uncaught SyntaxError: Identifier 'orient' has already been declared

function windowInfo() {
  pageWidth.innerText = `${window.innerWidth}px`;
  pageHeight.innerText = `${window.innerHeight}px`;
  orient.innerText =
    window.innerWidth >= window.innerHeight ? 'landscape' : 'portrait';
}

listen('load', window, () => {
  windowInfo();
});
listen('resize', window, () => {
  windowInfo();
});

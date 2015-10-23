(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var GoodGuy = function GoodGuy() {

  this.health = 100;

  this.hit = function (num) {
    var hitPoints = num || 10;
    return this.health = this.health - hitPoints;
  };
};

exports["default"] = GoodGuy;
module.exports = exports["default"];

},{}],2:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _goodguy = require('./goodguy');

var _goodguy2 = _interopRequireDefault(_goodguy);

(function () {
  'use strict';

  describe('About My Good Guy', function () {

    beforeEach(function () {
      window.x = new _goodguy2['default']();
    });

    describe('creating a good guy', function () {
      it('should create an instance of Good Guy', function () {
        expect(x instanceof _goodguy2['default']).to.equal(true);
      });
    });

    describe('my player health', function () {
      it('should have full health upon creation', function () {
        expect(x.health).to.equal(100);
      });
    });

    describe('player taking damage', function () {
      it('should lower the score, after getting hit', function () {
        x.hit();
        expect(x.health).to.be.below(100);
      });
    });
  });
})();

},{"./goodguy":1}]},{},[2])


//# sourceMappingURL=tests.js.map

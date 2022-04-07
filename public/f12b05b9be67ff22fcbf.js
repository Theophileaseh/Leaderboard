/* eslint-disable */
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// import _ from '/lodash'; // eslint-disable-line
import './style.css';
import './modules/leaderScore.js';
import './modules/dom.js';
var newGame = new Game();
var creatGame = document.getElementById('refresh');
creatGame.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return newGame.create();

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));
var refreshButt = document.getElementById('refresh');
refreshButt.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
  var scores;
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return newGame.getScores();

        case 2:
          scores = _context2.sent;
          creatHtml(scores.result);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
})));
var submButt = document.getElementById('submitBtn');
submButt.addEventListener('click', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
    var userName, userScore;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            e.preventDefault();
            userName = document.getElementById('username');
            userScore = document.getElementById('userscore');
            creatSubhtml(userName.value, userScore.value);
            _context3.next = 6;
            return newGame.addNewscore(userName.value, userScore.value);

          case 6:
            userName.value = '';
            userScore.value = '';

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}());
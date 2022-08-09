/* eslint-disable */
/** *** */ (() => { // webpackBootstrap
/** *** */ 	const __webpack_modules__ = ({

    /***/ './src/index.js':
    /*! **********************!*\
  !*** ./src/index.js ***!
  \********************* */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ const _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ './src/style.css');
      /* harmony import */ const _modules_leaderScore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/leaderScore.js */ './src/modules/leaderScore.js');
      /* harmony import */ const _modules_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/dom.js */ './src/modules/dom.js');
      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var { value } = info; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

      function _asyncToGenerator(fn) {
        return function () {
          const self = this; const
            args = arguments; return new Promise((resolve, reject) => { const gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err); } _next(undefined); });
        };
      }

      // import _ from '/lodash'; // eslint-disable-line

      const newGame = new _modules_leaderScore_js__WEBPACK_IMPORTED_MODULE_1__.default();
      const creatGame = document.getElementById('refresh');
      creatGame.addEventListener('click', /* #__PURE__ */_asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap((_context) => {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return newGame.create();

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee);
      })));
      const refreshButt = document.getElementById('refresh');
      refreshButt.addEventListener('click', /* #__PURE__ */_asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee2() {
        let scores;
        return regeneratorRuntime.wrap((_context2) => {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return newGame.getScores();

              case 2:
                scores = _context2.sent;
                (0, _modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.creatHtml)(scores.result);

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2);
      })));
      const submButt = document.getElementById('submitBtn');
      submButt.addEventListener('click', /* #__PURE__ */(function () {
        const _ref3 = _asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee3(e) {
          let userName; let
            userScore;
          return regeneratorRuntime.wrap((_context3) => {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  e.preventDefault();
                  userName = document.getElementById('username');
                  userScore = document.getElementById('userscore');
                  (0, _modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.creatSubhtml)(userName.value, userScore.value);
                  _context3.next = 6;
                  return newGame.addNewscore(userName.value, userScore.value);

                case 6:
                  userName.value = '';
                  userScore.value = '';

                case 8:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function (_x) {
          return _ref3.apply(this, arguments);
        };
      }()));
      /***/ }),

    /***/ './src/modules/api.js':
    /*! ****************************!*\
  !*** ./src/modules/api.js ***!
  \*************************** */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ addScore: () => (/* binding */ addScore),
        /* harmony export */ createGame: () => (/* binding */ createGame),
        /* harmony export */ getGamescore: () => (/* binding */ getGamescore),
        /* harmony export */ });
      /* harmony import */ const cross_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cross-fetch */ './node_modules/cross-fetch/dist/browser-ponyfill.js');
      /* harmony import */ const cross_fetch__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(cross_fetch__WEBPACK_IMPORTED_MODULE_0__);
      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var { value } = info; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

      function _asyncToGenerator(fn) {
        return function () {
          const self = this; const
            args = arguments; return new Promise((resolve, reject) => { const gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err); } _next(undefined); });
        };
      }

      var createGame = /* #__PURE__ */(function () {
        const _ref = _asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee() {
          let res; let
            resParse;
          return regeneratorRuntime.wrap((_context) => {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return cross_fetch__WEBPACK_IMPORTED_MODULE_0___default()('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/');

                case 2:
                  res = _context.sent;
                  _context.next = 5;
                  return res.json();

                case 5:
                  resParse = _context.sent;
                  return _context.abrupt('return', resParse.result);

                case 7:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function createGame() {
          return _ref.apply(this, arguments);
        };
      }());
      var getGamescore = /* #__PURE__ */(function () {
        const _ref2 = _asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee2() {
          let id;
          let res;
          let resParse;
          let scores;
          const _args2 = arguments;
          return regeneratorRuntime.wrap((_context2) => {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  id = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : y6HPZg0cyzKNDBfXdFk3;
                  _context2.next = 3;
                  return cross_fetch__WEBPACK_IMPORTED_MODULE_0___default()('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/'.concat(id, '/scores'));

                case 3:
                  res = _context2.sent;
                  resParse = res.json();
                  _context2.next = 7;
                  return resParse;

                case 7:
                  scores = _context2.sent;
                  return _context2.abrupt('return', scores);

                case 9:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function getGamescore() {
          return _ref2.apply(this, arguments);
        };
      }());
      var addScore = /* #__PURE__ */(function () {
        const _ref3 = _asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee3(userName, userScore, id) {
          let resp; let
            respPar;
          return regeneratorRuntime.wrap((_context3) => {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return cross_fetch__WEBPACK_IMPORTED_MODULE_0___default()('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/'.concat(id, '/scores'), {
                    method: 'POST',
                    body: JSON.stringify({
                      user: userName,
                      score: userScore,
                    }),
                    headers: {
                      'Content-type': 'application/json; charset=UTF-8',
                    },
                  });

                case 2:
                  resp = _context3.sent;
                  _context3.next = 5;
                  return resp.json();

                case 5:
                  respPar = _context3.sent;
                  return _context3.abrupt('return', respPar.result);

                case 7:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function addScore(_x, _x2, _x3) {
          return _ref3.apply(this, arguments);
        };
      }());
      /***/ }),

    /***/ './src/modules/dom.js':
    /*! ****************************!*\
  !*** ./src/modules/dom.js ***!
  \*************************** */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ creatHtml: () => (/* binding */ creatHtml),
        /* harmony export */ creatSubhtml: () => (/* binding */ creatSubhtml),
        /* harmony export */ });
      let flag = true;
      function creatHtml(game) {
        const list = document.getElementById('scoreList');
        list.innerHTML = '';
        game.forEach((item) => {
          const listelem = document.createElement('li');
          listelem.className = 'single-score';
          listelem.innerText = ''.concat(item.user, ': ').concat(item.score);

          if (flag === false) {
            listelem.style.background = 'rgb(231 231 231)';
            listelem.style.color = '#120212';
          }

          list.appendChild(listelem);
          flag = !flag;
        });
      }
      function creatSubhtml(userName, userScore) {
        const list = document.getElementById('scoreList');
        const listelem = document.createElement('li');
        listelem.className = 'single-score';
        listelem.innerText = ''.concat(userName, ': ').concat(userScore);

        if (flag === false) {
          listelem.style.background = 'rgb(231 231 231)';
          listelem.style.color = '#120212';
        }

        list.appendChild(listelem);
        flag = !flag;
      }
      /***/ }),

    /***/ './src/modules/leaderScore.js':
    /*! ************************************!*\
  !*** ./src/modules/leaderScore.js ***!
  \*********************************** */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => (/* binding */ Game),
        /* harmony export */ });
      /* harmony import */ const _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ './src/modules/api.js');
      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var { value } = info; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

      function _asyncToGenerator(fn) {
        return function () {
          const self = this; const
            args = arguments; return new Promise((resolve, reject) => { const gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err); } _next(undefined); });
        };
      }

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

      function _defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

      function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, 'prototype', { writable: false }); return Constructor; }

      // Fetching Scores from the API

      var Game = /* #__PURE__ */(function () {
        function Game() {
          _classCallCheck(this, Game);
        }

        _createClass(Game, [{
          key: 'create',
          value: // eslint-disable-next-line class-methods-use-this
    (function () {
      const _create = _asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _api_js__WEBPACK_IMPORTED_MODULE_0__.createGame)();

              case 2:
                this.gameId = _context.sent;
                this.gameId = this.gameId.replace(/Game with ID: /g, '').replace(/ added./g, '');
                return _context.abrupt('return', this.gameId);

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function create() {
        return _create.apply(this, arguments);
      }

      return create;
    }()), // eslint-disable-next-line class-methods-use-this

        }, {
          key: 'getScores',
          value: (function () {
            const _getScores = _asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee2() {
              let score;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return (0, _api_js__WEBPACK_IMPORTED_MODULE_0__.getGamescore)(this.gameId);

                    case 2:
                      score = _context2.sent;
                      return _context2.abrupt('return', score);

                    case 4:
                    case 'end':
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function getScores() {
              return _getScores.apply(this, arguments);
            }

            return getScores;
          }()), // eslint-disable-next-line class-methods-use-this

        }, {
          key: 'addNewscore',
          value: (function () {
            const _addNewscore = _asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee3(userName, userScore) {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return (0, _api_js__WEBPACK_IMPORTED_MODULE_0__.addScore)(userName, userScore, this.gameId);

                    case 2:
                    case 'end':
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function addNewscore(_x, _x2) {
              return _addNewscore.apply(this, arguments);
            }

            return addNewscore;
          }()),
        }]);

        return Game;
      }());
      /***/ }),

    /***/ './node_modules/babel-regenerator-runtime/runtime.js':
    /*! ***********************************************************!*\
  !*** ./node_modules/babel-regenerator-runtime/runtime.js ***!
  \********************************************************** */
    /***/ (function (module, __unused_webpack_exports, __webpack_require__) {
      /**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

      !(function (global) {
        const hasOwn = Object.prototype.hasOwnProperty;
        let undefined; // More compressible than void 0.
        const iteratorSymbol = typeof Symbol === 'function' && Symbol.iterator || '@@iterator';

        const inModule = 'object' === 'object';
        let runtime = global.regeneratorRuntime;
        if (runtime) {
          if (inModule) {
            // If regeneratorRuntime is defined globally and we're in a module,
            // make the exports object identical to regeneratorRuntime.
            module.exports = runtime;
          }
          // Don't bother evaluating the rest of this file if the runtime was
          // already defined globally.
          return;
        }

        // Define the runtime globally (as expected by generated code) as either
        // module.exports (if we're in a module) or a new, empty object.
        runtime = global.regeneratorRuntime = inModule ? module.exports : {};

        function wrap(innerFn, outerFn, self, tryLocsList) {
          // If outerFn provided, then outerFn.prototype instanceof Generator.
          const generator = Object.create((outerFn || Generator).prototype);
          const context = new Context(tryLocsList || []);

          // The ._invoke method unifies the implementations of the .next,
          // .throw, and .return methods.
          generator._invoke = makeInvokeMethod(innerFn, self, context);

          return generator;
        }
        runtime.wrap = wrap;

        // Try/catch helper to minimize deoptimizations. Returns a completion
        // record like context.tryEntries[i].completion. This interface could
        // have been (and was previously) designed to take a closure to be
        // invoked without arguments, but in all the cases we care about we
        // already have an existing method we want to call, so there's no need
        // to create a new function object. We can even get away with assuming
        // the method takes exactly one argument, since that happens to be true
        // in every case, so we don't have to touch the arguments object. The
        // only additional allocation required is the completion record, which
        // has a stable shape and so hopefully should be cheap to allocate.
        function tryCatch(fn, obj, arg) {
          try {
            return { type: 'normal', arg: fn.call(obj, arg) };
          } catch (err) {
            return { type: 'throw', arg: err };
          }
        }

        const GenStateSuspendedStart = 'suspendedStart';
        const GenStateSuspendedYield = 'suspendedYield';
        const GenStateExecuting = 'executing';
        const GenStateCompleted = 'completed';

        // Returning this object from the innerFn has the same effect as
        // breaking out of the dispatch switch statement.
        const ContinueSentinel = {};

        // Dummy constructor functions that we use as the .constructor and
        // .constructor.prototype properties for functions that return Generator
        // objects. For full spec compliance, you may wish to configure your
        // minifier not to mangle the names of these two functions.
        function Generator() {}
        function GeneratorFunction() {}
        function GeneratorFunctionPrototype() {}

        const Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
        GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
        GeneratorFunctionPrototype.constructor = GeneratorFunction;
        GeneratorFunction.displayName = 'GeneratorFunction';

        // Helper for defining the .next, .throw, and .return methods of the
        // Iterator interface in terms of a single ._invoke method.
        function defineIteratorMethods(prototype) {
          ['next', 'throw', 'return'].forEach((method) => {
            prototype[method] = function (arg) {
              return this._invoke(method, arg);
            };
          });
        }

        runtime.isGeneratorFunction = function (genFun) {
          const ctor = typeof genFun === 'function' && genFun.constructor;
          return ctor
            ? ctor === GeneratorFunction
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        || (ctor.displayName || ctor.name) === 'GeneratorFunction'
            : false;
        };

        runtime.mark = function (genFun) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
          } else {
            genFun.__proto__ = GeneratorFunctionPrototype;
          }
          genFun.prototype = Object.create(Gp);
          return genFun;
        };

        // Within the body of any async function, `await x` is transformed to
        // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
        // `value instanceof AwaitArgument` to determine if the yielded value is
        // meant to be awaited. Some may consider the name of this method too
        // cutesy, but they are curmudgeons.
        runtime.awrap = function (arg) {
          return new AwaitArgument(arg);
        };

        function AwaitArgument(arg) {
          this.arg = arg;
        }

        function AsyncIterator(generator) {
          // This invoke function is written in a style that assumes some
          // calling function (or Promise) will handle exceptions.
          function invoke(method, arg) {
            const result = generator[method](arg);
            const { value } = result;
            return value instanceof AwaitArgument
              ? Promise.resolve(value.arg).then(invokeNext, invokeThrow)
              : Promise.resolve(value).then((unwrapped) => {
                // When a yielded Promise is resolved, its final value becomes
                // the .value of the Promise<{value,done}> result for the
                // current iteration. If the Promise is rejected, however, the
                // result for this iteration will be rejected with the same
                // reason. Note that rejections of yielded Promises are not
                // thrown back into the generator function, as is the case
                // when an awaited Promise is rejected. This difference in
                // behavior between yield and await is important, because it
                // allows the consumer to decide what to do with the yielded
                // rejection (swallow it and continue, manually .throw it back
                // into the generator, abandon iteration, whatever). With
                // await, by contrast, there is no opportunity to examine the
                // rejection reason outside the generator function, so the
                // only option is to throw it from the await expression, and
                // let the generator function handle the exception.
                result.value = unwrapped;
                return result;
              });
          }

          if (typeof process === 'object' && process.domain) {
            invoke = process.domain.bind(invoke);
          }

          var invokeNext = invoke.bind(generator, 'next');
          var invokeThrow = invoke.bind(generator, 'throw');
          const invokeReturn = invoke.bind(generator, 'return');
          let previousPromise;

          function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
              return invoke(method, arg);
            }

            return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg,
        ) : new Promise((resolve) => {
          resolve(callInvokeWithMethodAndArg());
        });
          }

          // Define the unified helper method that is used to implement .next,
          // .throw, and .return (see defineIteratorMethods).
          this._invoke = enqueue;
        }

        defineIteratorMethods(AsyncIterator.prototype);

        // Note that simple async functions are implemented on top of
        // AsyncIterator objects; they just return a Promise for the value of
        // the final result produced by the iterator.
        runtime.async = function (innerFn, outerFn, self, tryLocsList) {
          const iter = new AsyncIterator(
            wrap(innerFn, outerFn, self, tryLocsList),
          );

          return runtime.isGeneratorFunction(outerFn)
            ? iter // If outerFn is a generator, return the full iterator.
            : iter.next().then((result) => (result.done ? result.value : iter.next()));
        };

        function makeInvokeMethod(innerFn, self, context) {
          let state = GenStateSuspendedStart;

          return function invoke(method, arg) {
            if (state === GenStateExecuting) {
              throw new Error('Generator is already running');
            }

            if (state === GenStateCompleted) {
              if (method === 'throw') {
                throw arg;
              }

              // Be forgiving, per 25.3.3.3.3 of the spec:
              // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
              return doneResult();
            }

            while (true) {
              const { delegate } = context;
              if (delegate) {
                if (method === 'return'
              || (method === 'throw' && delegate.iterator[method] === undefined)) {
                  // A return or throw (when the delegate iterator has no throw
                  // method) always terminates the yield* loop.
                  context.delegate = null;

                  // If the delegate iterator has a return method, give it a
                  // chance to clean up.
                  const returnMethod = delegate.iterator.return;
                  if (returnMethod) {
                    var record = tryCatch(returnMethod, delegate.iterator, arg);
                    if (record.type === 'throw') {
                      // If the return method threw an exception, let that
                      // exception prevail over the original return or throw.
                      method = 'throw';
                      arg = record.arg;
                      continue;
                    }
                  }

                  if (method === 'return') {
                    // Continue with the outer return, now that the delegate
                    // iterator has been terminated.
                    continue;
                  }
                }

                var record = tryCatch(
                  delegate.iterator[method],
                  delegate.iterator,
                  arg,
                );

                if (record.type === 'throw') {
                  context.delegate = null;

                  // Like returning generator.throw(uncaught), but without the
                  // overhead of an extra function call.
                  method = 'throw';
                  arg = record.arg;
                  continue;
                }

                // Delegate generator ran and handled its own exceptions so
                // regardless of what the method was, we continue as if it is
                // "next" with an undefined arg.
                method = 'next';
                arg = undefined;

                var info = record.arg;
                if (info.done) {
                  context[delegate.resultName] = info.value;
                  context.next = delegate.nextLoc;
                } else {
                  state = GenStateSuspendedYield;
                  return info;
                }

                context.delegate = null;
              }

              if (method === 'next') {
                context._sent = arg;

                if (state === GenStateSuspendedYield) {
                  context.sent = arg;
                } else {
                  context.sent = undefined;
                }
              } else if (method === 'throw') {
                if (state === GenStateSuspendedStart) {
                  state = GenStateCompleted;
                  throw arg;
                }

                if (context.dispatchException(arg)) {
                  // If the dispatched exception was caught by a catch block,
                  // then let that catch block handle the exception normally.
                  method = 'next';
                  arg = undefined;
                }
              } else if (method === 'return') {
                context.abrupt('return', arg);
              }

              state = GenStateExecuting;

              var record = tryCatch(innerFn, self, context);
              if (record.type === 'normal') {
                // If an exception is thrown from innerFn, we leave state ===
                // GenStateExecuting and loop back for another invocation.
                state = context.done
                  ? GenStateCompleted
                  : GenStateSuspendedYield;

                var info = {
                  value: record.arg,
                  done: context.done,
                };

                if (record.arg === ContinueSentinel) {
                  if (context.delegate && method === 'next') {
                    // Deliberately forget the last sent value so that we don't
                    // accidentally pass it on to the delegate.
                    arg = undefined;
                  }
                } else {
                  return info;
                }
              } else if (record.type === 'throw') {
                state = GenStateCompleted;
                // Dispatch the exception by looping back around to the
                // context.dispatchException(arg) call above.
                method = 'throw';
                arg = record.arg;
              }
            }
          };
        }

        // Define Generator.prototype.{next,throw,return} in terms of the
        // unified ._invoke helper method.
        defineIteratorMethods(Gp);

        Gp[iteratorSymbol] = function () {
          return this;
        };

        Gp.toString = function () {
          return '[object Generator]';
        };

        function pushTryEntry(locs) {
          const entry = { tryLoc: locs[0] };

          if (1 in locs) {
            entry.catchLoc = locs[1];
          }

          if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
          }

          this.tryEntries.push(entry);
        }

        function resetTryEntry(entry) {
          const record = entry.completion || {};
          record.type = 'normal';
          delete record.arg;
          entry.completion = record;
        }

        function Context(tryLocsList) {
          // The root entry object (effectively a try statement without a catch
          // or a finally block) gives us a place to store values thrown from
          // locations where there is no enclosing try statement.
          this.tryEntries = [{ tryLoc: 'root' }];
          tryLocsList.forEach(pushTryEntry, this);
          this.reset(true);
        }

        runtime.keys = function (object) {
          const keys = [];
          for (const key in object) {
            keys.push(key);
          }
          keys.reverse();

          // Rather than returning an object with a next method, we keep
          // things simple and return the next function itself.
          return function next() {
            while (keys.length) {
              const key = keys.pop();
              if (key in object) {
                next.value = key;
                next.done = false;
                return next;
              }
            }

            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
          };
        };

        function values(iterable) {
          if (iterable) {
            const iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) {
              return iteratorMethod.call(iterable);
            }

            if (typeof iterable.next === 'function') {
              return iterable;
            }

            if (!isNaN(iterable.length)) {
              let i = -1; const
                next = function next() {
                  while (++i < iterable.length) {
                    if (hasOwn.call(iterable, i)) {
                      next.value = iterable[i];
                      next.done = false;
                      return next;
                    }
                  }

                  next.value = undefined;
                  next.done = true;

                  return next;
                };

              return next.next = next;
            }
          }

          // Return an iterator with no values.
          return { next: doneResult };
        }
        runtime.values = values;

        function doneResult() {
          return { value: undefined, done: true };
        }

        Context.prototype = {
          constructor: Context,

          reset(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            this.sent = undefined;
            this.done = false;
            this.delegate = null;

            this.tryEntries.forEach(resetTryEntry);

            if (!skipTempReset) {
              for (const name in this) {
                // Not sure about the optimal order of these conditions:
                if (name.charAt(0) === 't'
              && hasOwn.call(this, name)
              && !isNaN(+name.slice(1))) {
                  this[name] = undefined;
                }
              }
            }
          },

          stop() {
            this.done = true;

            const rootEntry = this.tryEntries[0];
            const rootRecord = rootEntry.completion;
            if (rootRecord.type === 'throw') {
              throw rootRecord.arg;
            }

            return this.rval;
          },

          dispatchException(exception) {
            if (this.done) {
              throw exception;
            }

            const context = this;
            function handle(loc, caught) {
              record.type = 'throw';
              record.arg = exception;
              context.next = loc;
              return !!caught;
            }

            for (let i = this.tryEntries.length - 1; i >= 0; --i) {
              const entry = this.tryEntries[i];
              var record = entry.completion;

              if (entry.tryLoc === 'root') {
                // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle('end');
              }

              if (entry.tryLoc <= this.prev) {
                const hasCatch = hasOwn.call(entry, 'catchLoc');
                const hasFinally = hasOwn.call(entry, 'finallyLoc');

                if (hasCatch && hasFinally) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  } if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                } else if (hasCatch) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  }
                } else if (hasFinally) {
                  if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                } else {
                  throw new Error('try statement without catch or finally');
                }
              }
            }
          },

          abrupt(type, arg) {
            for (let i = this.tryEntries.length - 1; i >= 0; --i) {
              const entry = this.tryEntries[i];
              if (entry.tryLoc <= this.prev
            && hasOwn.call(entry, 'finallyLoc')
            && this.prev < entry.finallyLoc) {
                var finallyEntry = entry;
                break;
              }
            }

            if (finallyEntry
          && (type === 'break'
           || type === 'continue')
          && finallyEntry.tryLoc <= arg
          && arg <= finallyEntry.finallyLoc) {
              // Ignore the finally entry if control is not jumping to a
              // location outside the try/catch block.
              finallyEntry = null;
            }

            const record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;

            if (finallyEntry) {
              this.next = finallyEntry.finallyLoc;
            } else {
              this.complete(record);
            }

            return ContinueSentinel;
          },

          complete(record, afterLoc) {
            if (record.type === 'throw') {
              throw record.arg;
            }

            if (record.type === 'break'
          || record.type === 'continue') {
              this.next = record.arg;
            } else if (record.type === 'return') {
              this.rval = record.arg;
              this.next = 'end';
            } else if (record.type === 'normal' && afterLoc) {
              this.next = afterLoc;
            }
          },

          finish(finallyLoc) {
            for (let i = this.tryEntries.length - 1; i >= 0; --i) {
              const entry = this.tryEntries[i];
              if (entry.finallyLoc === finallyLoc) {
                this.complete(entry.completion, entry.afterLoc);
                resetTryEntry(entry);
                return ContinueSentinel;
              }
            }
          },

          catch(tryLoc) {
            for (let i = this.tryEntries.length - 1; i >= 0; --i) {
              const entry = this.tryEntries[i];
              if (entry.tryLoc === tryLoc) {
                const record = entry.completion;
                if (record.type === 'throw') {
                  var thrown = record.arg;
                  resetTryEntry(entry);
                }
                return thrown;
              }
            }

            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error('illegal catch attempt');
          },

          delegateYield(iterable, resultName, nextLoc) {
            this.delegate = {
              iterator: values(iterable),
              resultName,
              nextLoc,
            };

            return ContinueSentinel;
          },
        };
      }(
        // Among the various tricks for obtaining a reference to the global
        // object, this seems to be the most reliable technique that does not
        // use indirect eval (which violates Content Security Policy).
        typeof __webpack_require__.g === 'object' ? __webpack_require__.g
          : typeof window === 'object' ? window
            : typeof self === 'object' ? self : this,
      ));
      /***/ }),

    /***/ './node_modules/cross-fetch/dist/browser-ponyfill.js':
    /*! ***********************************************************!*\
  !*** ./node_modules/cross-fetch/dist/browser-ponyfill.js ***!
  \********************************************************** */
    /***/ (function (module, exports) {
      const global = typeof self !== 'undefined' ? self : this;
      const __self__ = (function () {
        function F() {
          this.fetch = false;
          this.DOMException = global.DOMException;
        }
        F.prototype = global;
        return new F();
      }());
      (function (self) {
        const irrelevant = (function (exports) {
          const support = {
            searchParams: 'URLSearchParams' in self,
            iterable: 'Symbol' in self && 'iterator' in Symbol,
            blob:
      'FileReader' in self
      && 'Blob' in self
      && (function () {
        try {
          new Blob();
          return true;
        } catch (e) {
          return false;
        }
      }()),
            formData: 'FormData' in self,
            arrayBuffer: 'ArrayBuffer' in self,
          };

          function isDataView(obj) {
            return obj && DataView.prototype.isPrototypeOf(obj);
          }

          if (support.arrayBuffer) {
            const viewClasses = [
              '[object Int8Array]',
              '[object Uint8Array]',
              '[object Uint8ClampedArray]',
              '[object Int16Array]',
              '[object Uint16Array]',
              '[object Int32Array]',
              '[object Uint32Array]',
              '[object Float32Array]',
              '[object Float64Array]',
            ];

            var isArrayBufferView = ArrayBuffer.isView
      || function (obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
      };
          }

          function normalizeName(name) {
            if (typeof name !== 'string') {
              name = String(name);
            }
            if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
              throw new TypeError('Invalid character in header field name');
            }
            return name.toLowerCase();
          }

          function normalizeValue(value) {
            if (typeof value !== 'string') {
              value = String(value);
            }
            return value;
          }

          // Build a destructive iterator for the value list
          function iteratorFor(items) {
            const iterator = {
              next() {
                const value = items.shift();
                return { done: value === undefined, value };
              },
            };

            if (support.iterable) {
              iterator[Symbol.iterator] = function () {
                return iterator;
              };
            }

            return iterator;
          }

          function Headers(headers) {
            this.map = {};

            if (headers instanceof Headers) {
              headers.forEach(function (value, name) {
                this.append(name, value);
              }, this);
            } else if (Array.isArray(headers)) {
              headers.forEach(function (header) {
                this.append(header[0], header[1]);
              }, this);
            } else if (headers) {
              Object.getOwnPropertyNames(headers).forEach(function (name) {
                this.append(name, headers[name]);
              }, this);
            }
          }

          Headers.prototype.append = function (name, value) {
            name = normalizeName(name);
            value = normalizeValue(value);
            const oldValue = this.map[name];
            this.map[name] = oldValue ? `${oldValue}, ${value}` : value;
          };

          Headers.prototype.delete = function (name) {
            delete this.map[normalizeName(name)];
          };

          Headers.prototype.get = function (name) {
            name = normalizeName(name);
            return this.has(name) ? this.map[name] : null;
          };

          Headers.prototype.has = function (name) {
            return this.map.hasOwnProperty(normalizeName(name));
          };

          Headers.prototype.set = function (name, value) {
            this.map[normalizeName(name)] = normalizeValue(value);
          };

          Headers.prototype.forEach = function (callback, thisArg) {
            for (const name in this.map) {
              if (this.map.hasOwnProperty(name)) {
                callback.call(thisArg, this.map[name], name, this);
              }
            }
          };

          Headers.prototype.keys = function () {
            const items = [];
            this.forEach((value, name) => {
              items.push(name);
            });
            return iteratorFor(items);
          };

          Headers.prototype.values = function () {
            const items = [];
            this.forEach((value) => {
              items.push(value);
            });
            return iteratorFor(items);
          };

          Headers.prototype.entries = function () {
            const items = [];
            this.forEach((value, name) => {
              items.push([name, value]);
            });
            return iteratorFor(items);
          };

          if (support.iterable) {
            Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
          }

          function consumed(body) {
            if (body.bodyUsed) {
              return Promise.reject(new TypeError('Already read'));
            }
            body.bodyUsed = true;
          }

          function fileReaderReady(reader) {
            return new Promise((resolve, reject) => {
              reader.onload = function () {
                resolve(reader.result);
              };
              reader.onerror = function () {
                reject(reader.error);
              };
            });
          }

          function readBlobAsArrayBuffer(blob) {
            const reader = new FileReader();
            const promise = fileReaderReady(reader);
            reader.readAsArrayBuffer(blob);
            return promise;
          }

          function readBlobAsText(blob) {
            const reader = new FileReader();
            const promise = fileReaderReady(reader);
            reader.readAsText(blob);
            return promise;
          }

          function readArrayBufferAsText(buf) {
            const view = new Uint8Array(buf);
            const chars = new Array(view.length);

            for (let i = 0; i < view.length; i++) {
              chars[i] = String.fromCharCode(view[i]);
            }
            return chars.join('');
          }

          function bufferClone(buf) {
            if (buf.slice) {
              return buf.slice(0);
            }
            const view = new Uint8Array(buf.byteLength);
            view.set(new Uint8Array(buf));
            return view.buffer;
          }

          function Body() {
            this.bodyUsed = false;

            this._initBody = function (body) {
              this._bodyInit = body;
              if (!body) {
                this._bodyText = '';
              } else if (typeof body === 'string') {
                this._bodyText = body;
              } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
                this._bodyBlob = body;
              } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
                this._bodyFormData = body;
              } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                this._bodyText = body.toString();
              } else if (support.arrayBuffer && support.blob && isDataView(body)) {
                this._bodyArrayBuffer = bufferClone(body.buffer);
                // IE 10-11 can't handle a DataView body.
                this._bodyInit = new Blob([this._bodyArrayBuffer]);
              } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
                this._bodyArrayBuffer = bufferClone(body);
              } else {
                this._bodyText = body = Object.prototype.toString.call(body);
              }

              if (!this.headers.get('content-type')) {
                if (typeof body === 'string') {
                  this.headers.set('content-type', 'text/plain;charset=UTF-8');
                } else if (this._bodyBlob && this._bodyBlob.type) {
                  this.headers.set('content-type', this._bodyBlob.type);
                } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                  this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                }
              }
            };

            if (support.blob) {
              this.blob = function () {
                const rejected = consumed(this);
                if (rejected) {
                  return rejected;
                }

                if (this._bodyBlob) {
                  return Promise.resolve(this._bodyBlob);
                } if (this._bodyArrayBuffer) {
                  return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                } if (this._bodyFormData) {
                  throw new Error('could not read FormData body as blob');
                } else {
                  return Promise.resolve(new Blob([this._bodyText]));
                }
              };

              this.arrayBuffer = function () {
                if (this._bodyArrayBuffer) {
                  return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
                }
                return this.blob().then(readBlobAsArrayBuffer);
              };
            }

            this.text = function () {
              const rejected = consumed(this);
              if (rejected) {
                return rejected;
              }

              if (this._bodyBlob) {
                return readBlobAsText(this._bodyBlob);
              } if (this._bodyArrayBuffer) {
                return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
              } if (this._bodyFormData) {
                throw new Error('could not read FormData body as text');
              } else {
                return Promise.resolve(this._bodyText);
              }
            };

            if (support.formData) {
              this.formData = function () {
                return this.text().then(decode);
              };
            }

            this.json = function () {
              return this.text().then(JSON.parse);
            };

            return this;
          }

          // HTTP methods whose capitalization should be normalized
          const methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

          function normalizeMethod(method) {
            const upcased = method.toUpperCase();
            return methods.indexOf(upcased) > -1 ? upcased : method;
          }

          function Request(input, options) {
            options = options || {};
            let { body } = options;

            if (input instanceof Request) {
              if (input.bodyUsed) {
                throw new TypeError('Already read');
              }
              this.url = input.url;
              this.credentials = input.credentials;
              if (!options.headers) {
                this.headers = new Headers(input.headers);
              }
              this.method = input.method;
              this.mode = input.mode;
              this.signal = input.signal;
              if (!body && input._bodyInit != null) {
                body = input._bodyInit;
                input.bodyUsed = true;
              }
            } else {
              this.url = String(input);
            }

            this.credentials = options.credentials || this.credentials || 'same-origin';
            if (options.headers || !this.headers) {
              this.headers = new Headers(options.headers);
            }
            this.method = normalizeMethod(options.method || this.method || 'GET');
            this.mode = options.mode || this.mode || null;
            this.signal = options.signal || this.signal;
            this.referrer = null;

            if ((this.method === 'GET' || this.method === 'HEAD') && body) {
              throw new TypeError('Body not allowed for GET or HEAD requests');
            }
            this._initBody(body);
          }

          Request.prototype.clone = function () {
            return new Request(this, { body: this._bodyInit });
          };

          function decode(body) {
            const form = new FormData();
            body
              .trim()
              .split('&')
              .forEach((bytes) => {
                if (bytes) {
                  const split = bytes.split('=');
                  const name = split.shift().replace(/\+/g, ' ');
                  const value = split.join('=').replace(/\+/g, ' ');
                  form.append(decodeURIComponent(name), decodeURIComponent(value));
                }
              });
            return form;
          }

          function parseHeaders(rawHeaders) {
            const headers = new Headers();
            // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
            // https://tools.ietf.org/html/rfc7230#section-3.2
            const preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
            preProcessedHeaders.split(/\r?\n/).forEach((line) => {
              const parts = line.split(':');
              const key = parts.shift().trim();
              if (key) {
                const value = parts.join(':').trim();
                headers.append(key, value);
              }
            });
            return headers;
          }

          Body.call(Request.prototype);

          function Response(bodyInit, options) {
            if (!options) {
              options = {};
            }

            this.type = 'default';
            this.status = options.status === undefined ? 200 : options.status;
            this.ok = this.status >= 200 && this.status < 300;
            this.statusText = 'statusText' in options ? options.statusText : 'OK';
            this.headers = new Headers(options.headers);
            this.url = options.url || '';
            this._initBody(bodyInit);
          }

          Body.call(Response.prototype);

          Response.prototype.clone = function () {
            return new Response(this._bodyInit, {
              status: this.status,
              statusText: this.statusText,
              headers: new Headers(this.headers),
              url: this.url,
            });
          };

          Response.error = function () {
            const response = new Response(null, { status: 0, statusText: '' });
            response.type = 'error';
            return response;
          };

          const redirectStatuses = [301, 302, 303, 307, 308];

          Response.redirect = function (url, status) {
            if (redirectStatuses.indexOf(status) === -1) {
              throw new RangeError('Invalid status code');
            }

            return new Response(null, { status, headers: { location: url } });
          };

          exports.DOMException = self.DOMException;
          try {
            new exports.DOMException();
          } catch (err) {
            exports.DOMException = function (message, name) {
              this.message = message;
              this.name = name;
              const error = Error(message);
              this.stack = error.stack;
            };
            exports.DOMException.prototype = Object.create(Error.prototype);
            exports.DOMException.prototype.constructor = exports.DOMException;
          }

          function fetch(input, init) {
            return new Promise((resolve, reject) => {
              const request = new Request(input, init);

              if (request.signal && request.signal.aborted) {
                return reject(new exports.DOMException('Aborted', 'AbortError'));
              }

              const xhr = new XMLHttpRequest();

              function abortXhr() {
                xhr.abort();
              }

              xhr.onload = function () {
                const options = {
                  status: xhr.status,
                  statusText: xhr.statusText,
                  headers: parseHeaders(xhr.getAllResponseHeaders() || ''),
                };
                options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
                const body = 'response' in xhr ? xhr.response : xhr.responseText;
                resolve(new Response(body, options));
              };

              xhr.onerror = function () {
                reject(new TypeError('Network request failed'));
              };

              xhr.ontimeout = function () {
                reject(new TypeError('Network request failed'));
              };

              xhr.onabort = function () {
                reject(new exports.DOMException('Aborted', 'AbortError'));
              };

              xhr.open(request.method, request.url, true);

              if (request.credentials === 'include') {
                xhr.withCredentials = true;
              } else if (request.credentials === 'omit') {
                xhr.withCredentials = false;
              }

              if ('responseType' in xhr && support.blob) {
                xhr.responseType = 'blob';
              }

              request.headers.forEach((value, name) => {
                xhr.setRequestHeader(name, value);
              });

              if (request.signal) {
                request.signal.addEventListener('abort', abortXhr);

                xhr.onreadystatechange = function () {
                  // DONE (success or failure)
                  if (xhr.readyState === 4) {
                    request.signal.removeEventListener('abort', abortXhr);
                  }
                };
              }

              xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
            });
          }

          fetch.polyfill = true;

          if (!self.fetch) {
            self.fetch = fetch;
            self.Headers = Headers;
            self.Request = Request;
            self.Response = Response;
          }

          exports.Headers = Headers;
          exports.Request = Request;
          exports.Response = Response;
          exports.fetch = fetch;

          Object.defineProperty(exports, '__esModule', { value: true });

          return exports;
        }({}));
      }(__self__));
      __self__.fetch.ponyfill = true;
      // Remove "polyfill" property added by whatwg-fetch
      delete __self__.fetch.polyfill;
      // Choose between native implementation (global) or custom implementation (__self__)
      // var ctx = global.fetch ? global : __self__;
      const ctx = __self__; // this line disable service worker support temporarily
      exports = ctx.fetch; // To enable: import fetch from 'cross-fetch'
      exports.default = ctx.fetch; // For TypeScript consumers without esModuleInterop.
      exports.fetch = ctx.fetch; // To enable: import {fetch} from 'cross-fetch'
      exports.Headers = ctx.Headers;
      exports.Request = ctx.Request;
      exports.Response = ctx.Response;
      module.exports = exports;
      /***/ }),

    /***/ './node_modules/css-loader/dist/cjs.js!./src/style.css':
    /*! *************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \************************************************************ */
    /***/ ((module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => (__WEBPACK_DEFAULT_EXPORT__),
        /* harmony export */ });
      /* harmony import */ const _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ './node_modules/css-loader/dist/runtime/sourceMaps.js');
      /* harmony import */ const _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */ const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js');
      /* harmony import */ const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /* #__PURE__ */__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
      // Imports

      const ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
      ___CSS_LOADER_EXPORT___.push([module.id, '@import url(https://fonts.googleapis.com/css?family=Lobster);']);
      // Module
      ___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  margin: 0;\r\n  padding: 0;\r\n  background: #120212;\r\n  font-family: 'Lobster', sans-serif;\r\n}\r\n\r\n.head {\r\n  margin-top: 15% !important;\r\n  color: #fff;\r\n}\r\n\r\n.heading {\r\n  font-size: 45px;\r\n}\r\n\r\n.head,\r\n.main {\r\n  width: 500px;\r\n  margin: 0 auto;\r\n  color: #fff;\r\n}\r\n\r\n.main {\r\n  display: flex;\r\n  gap: 70px;\r\n}\r\n\r\n.scores {\r\n  width: 50%;\r\n}\r\n\r\n.refresh {\r\n  display: flex;\r\n  gap: 10px;\r\n  align-items: center;\r\n}\r\n\r\n.recent-scores {\r\n  font-size: 23px;\r\n}\r\n\r\n.refresh-btn {\r\n  height: max-content;\r\n}\r\n\r\n.main-scores {\r\n  border: 2px solid #fff;\r\n  border-radius: 3px;\r\n  width: 100%;\r\n  padding: 10px;\r\n  max-height: 200px;\r\n  overflow-y: auto;\r\n  color: #fff;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.score-list {\r\n  padding: 0;\r\n}\r\n\r\n.single-score {\r\n  list-style: none;\r\n  font-size: 20px;\r\n  padding: 8px;\r\n  width: 90%;\r\n}\r\n\r\n.add-scores {\r\n  width: 50%;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-end;\r\n  gap: 20px;\r\n}\r\n\r\ninput {\r\n  height: 31px;\r\n  width: 100%;\r\n  border-radius: 3px;\r\n  padding: 5px;\r\n}\r\n\r\n.submit {\r\n  border: none;\r\n  padding: 8px 15px;\r\n  border-radius: 3px;\r\n  color: #120212;\r\n}\r\n\r\n.submit:hover {\r\n  border: 2px solid #fff;\r\n  background: #120212;\r\n  color: #fff;\r\n}\r\n", '', {
        version: 3, sources: ['webpack://./src/style.css'], names: [], mappings: 'AAEA;EACE,SAAS;EACT,UAAU;EACV,mBAAmB;EACnB,kCAAkC;AACpC;;AAEA;EACE,0BAA0B;EAC1B,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;;EAEE,YAAY;EACZ,cAAc;EACd,WAAW;AACb;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,gBAAgB;EAChB,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;AACb', sourcesContent: ["@import url('https://fonts.googleapis.com/css?family=Lobster');\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  background: #120212;\r\n  font-family: 'Lobster', sans-serif;\r\n}\r\n\r\n.head {\r\n  margin-top: 15% !important;\r\n  color: #fff;\r\n}\r\n\r\n.heading {\r\n  font-size: 45px;\r\n}\r\n\r\n.head,\r\n.main {\r\n  width: 500px;\r\n  margin: 0 auto;\r\n  color: #fff;\r\n}\r\n\r\n.main {\r\n  display: flex;\r\n  gap: 70px;\r\n}\r\n\r\n.scores {\r\n  width: 50%;\r\n}\r\n\r\n.refresh {\r\n  display: flex;\r\n  gap: 10px;\r\n  align-items: center;\r\n}\r\n\r\n.recent-scores {\r\n  font-size: 23px;\r\n}\r\n\r\n.refresh-btn {\r\n  height: max-content;\r\n}\r\n\r\n.main-scores {\r\n  border: 2px solid #fff;\r\n  border-radius: 3px;\r\n  width: 100%;\r\n  padding: 10px;\r\n  max-height: 200px;\r\n  overflow-y: auto;\r\n  color: #fff;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.score-list {\r\n  padding: 0;\r\n}\r\n\r\n.single-score {\r\n  list-style: none;\r\n  font-size: 20px;\r\n  padding: 8px;\r\n  width: 90%;\r\n}\r\n\r\n.add-scores {\r\n  width: 50%;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-end;\r\n  gap: 20px;\r\n}\r\n\r\ninput {\r\n  height: 31px;\r\n  width: 100%;\r\n  border-radius: 3px;\r\n  padding: 5px;\r\n}\r\n\r\n.submit {\r\n  border: none;\r\n  padding: 8px 15px;\r\n  border-radius: 3px;\r\n  color: #120212;\r\n}\r\n\r\n.submit:hover {\r\n  border: 2px solid #fff;\r\n  background: #120212;\r\n  color: #fff;\r\n}\r\n"], sourceRoot: '',
      }]);
      // Exports
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);
      /***/ }),

    /***/ './node_modules/css-loader/dist/runtime/api.js':
    /*! *****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \**************************************************** */
    /***/ ((module) => {
      /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
      module.exports = function (cssWithMappingToString) {
        const list = []; // return the list of modules as css string

        list.toString = function toString() {
          return this.map((item) => {
            let content = '';
            const needLayer = typeof item[5] !== 'undefined';

            if (item[4]) {
              content += '@supports ('.concat(item[4], ') {');
            }

            if (item[2]) {
              content += '@media '.concat(item[2], ' {');
            }

            if (needLayer) {
              content += '@layer'.concat(item[5].length > 0 ? ' '.concat(item[5]) : '', ' {');
            }

            content += cssWithMappingToString(item);

            if (needLayer) {
              content += '}';
            }

            if (item[2]) {
              content += '}';
            }

            if (item[4]) {
              content += '}';
            }

            return content;
          }).join('');
        }; // import a list of modules into the list

        list.i = function i(modules, media, dedupe, supports, layer) {
          if (typeof modules === 'string') {
            modules = [[null, modules, undefined]];
          }

          const alreadyImportedModules = {};

          if (dedupe) {
            for (let k = 0; k < this.length; k++) {
              const id = this[k][0];

              if (id != null) {
                alreadyImportedModules[id] = true;
              }
            }
          }

          for (let _k = 0; _k < modules.length; _k++) {
            const item = [].concat(modules[_k]);

            if (dedupe && alreadyImportedModules[item[0]]) {
              continue;
            }

            if (typeof layer !== 'undefined') {
              if (typeof item[5] === 'undefined') {
                item[5] = layer;
              } else {
                item[1] = '@layer'.concat(item[5].length > 0 ? ' '.concat(item[5]) : '', ' {').concat(item[1], '}');
                item[5] = layer;
              }
            }

            if (media) {
              if (!item[2]) {
                item[2] = media;
              } else {
                item[1] = '@media '.concat(item[2], ' {').concat(item[1], '}');
                item[2] = media;
              }
            }

            if (supports) {
              if (!item[4]) {
                item[4] = ''.concat(supports);
              } else {
                item[1] = '@supports ('.concat(item[4], ') {').concat(item[1], '}');
                item[4] = supports;
              }
            }

            list.push(item);
          }
        };

        return list;
      };
      /***/ }),

    /***/ './node_modules/css-loader/dist/runtime/sourceMaps.js':
    /*! ************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*********************************************************** */
    /***/ ((module) => {
      module.exports = function (item) {
        const content = item[1];
        const cssMapping = item[3];

        if (!cssMapping) {
          return content;
        }

        if (typeof btoa === 'function') {
          const base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
          const data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(base64);
          const sourceMapping = '/*# '.concat(data, ' */');
          const sourceURLs = cssMapping.sources.map((source) => '/*# sourceURL='.concat(cssMapping.sourceRoot || '').concat(source, ' */'));
          return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
        }

        return [content].join('\n');
      };
      /***/ }),

    /***/ './src/style.css':
    /*! ***********************!*\
  !*** ./src/style.css ***!
  \********************** */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => (__WEBPACK_DEFAULT_EXPORT__),
        /* harmony export */ });
      /* harmony import */ const _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js');
      /* harmony import */ const _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */ const _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ './node_modules/style-loader/dist/runtime/styleDomAPI.js');
      /* harmony import */ const _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /* #__PURE__ */__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */ const _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ './node_modules/style-loader/dist/runtime/insertBySelector.js');
      /* harmony import */ const _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /* #__PURE__ */__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */ const _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js');
      /* harmony import */ const _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /* #__PURE__ */__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */ const _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ './node_modules/style-loader/dist/runtime/insertStyleElement.js');
      /* harmony import */ const _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /* #__PURE__ */__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */ const _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ './node_modules/style-loader/dist/runtime/styleTagTransform.js');
      /* harmony import */ const _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /* #__PURE__ */__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */ const _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ './node_modules/css-loader/dist/cjs.js!./src/style.css');

      const options = {};

      options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
      options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, 'head');

      options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
      options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

      const update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);

      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);
      /***/ }),

    /***/ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js':
    /*! ****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*************************************************************************** */
    /***/ ((module) => {
      const stylesInDOM = [];

      function getIndexByIdentifier(identifier) {
        let result = -1;

        for (let i = 0; i < stylesInDOM.length; i++) {
          if (stylesInDOM[i].identifier === identifier) {
            result = i;
            break;
          }
        }

        return result;
      }

      function modulesToDom(list, options) {
        const idCountMap = {};
        const identifiers = [];

        for (let i = 0; i < list.length; i++) {
          const item = list[i];
          const id = options.base ? item[0] + options.base : item[0];
          const count = idCountMap[id] || 0;
          const identifier = ''.concat(id, ' ').concat(count);
          idCountMap[id] = count + 1;
          const indexByIdentifier = getIndexByIdentifier(identifier);
          const obj = {
            css: item[1],
            media: item[2],
            sourceMap: item[3],
            supports: item[4],
            layer: item[5],
          };

          if (indexByIdentifier !== -1) {
            stylesInDOM[indexByIdentifier].references++;
            stylesInDOM[indexByIdentifier].updater(obj);
          } else {
            const updater = addElementStyle(obj, options);
            options.byIndex = i;
            stylesInDOM.splice(i, 0, {
              identifier,
              updater,
              references: 1,
            });
          }

          identifiers.push(identifier);
        }

        return identifiers;
      }

      function addElementStyle(obj, options) {
        const api = options.domAPI(options);
        api.update(obj);

        const updater = function updater(newObj) {
          if (newObj) {
            if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
              return;
            }

            api.update(obj = newObj);
          } else {
            api.remove();
          }
        };

        return updater;
      }

      module.exports = function (list, options) {
        options = options || {};
        list = list || [];
        let lastIdentifiers = modulesToDom(list, options);
        return function update(newList) {
          newList = newList || [];

          for (let i = 0; i < lastIdentifiers.length; i++) {
            const identifier = lastIdentifiers[i];
            const index = getIndexByIdentifier(identifier);
            stylesInDOM[index].references--;
          }

          const newLastIdentifiers = modulesToDom(newList, options);

          for (let _i = 0; _i < lastIdentifiers.length; _i++) {
            const _identifier = lastIdentifiers[_i];

            const _index = getIndexByIdentifier(_identifier);

            if (stylesInDOM[_index].references === 0) {
              stylesInDOM[_index].updater();

              stylesInDOM.splice(_index, 1);
            }
          }

          lastIdentifiers = newLastIdentifiers;
        };
      };
      /***/ }),

    /***/ './node_modules/style-loader/dist/runtime/insertBySelector.js':
    /*! ********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \******************************************************************* */
    /***/ ((module) => {
      const memo = {};
      /* istanbul ignore next  */

      function getTarget(target) {
        if (typeof memo[target] === 'undefined') {
          let styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

          if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
            try {
              // This will throw an exception if access to iframe is blocked
              // due to cross-origin restrictions
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              // istanbul ignore next
              styleTarget = null;
            }
          }

          memo[target] = styleTarget;
        }

        return memo[target];
      }
      /* istanbul ignore next  */

      function insertBySelector(insert, style) {
        const target = getTarget(insert);

        if (!target) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }

        target.appendChild(style);
      }

      module.exports = insertBySelector;
      /***/ }),

    /***/ './node_modules/style-loader/dist/runtime/insertStyleElement.js':
    /*! **********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \********************************************************************* */
    /***/ ((module) => {
      /* istanbul ignore next  */
      function insertStyleElement(options) {
        const element = document.createElement('style');
        options.setAttributes(element, options.attributes);
        options.insert(element, options.options);
        return element;
      }

      module.exports = insertStyleElement;
      /***/ }),

    /***/ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js':
    /*! **********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \********************************************************************************* */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      /* istanbul ignore next  */
      function setAttributesWithoutAttributes(styleElement) {
        const nonce = true ? __webpack_require__.nc : 0;

        if (nonce) {
          styleElement.setAttribute('nonce', nonce);
        }
      }

      module.exports = setAttributesWithoutAttributes;
      /***/ }),

    /***/ './node_modules/style-loader/dist/runtime/styleDomAPI.js':
    /*! ***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \************************************************************** */
    /***/ ((module) => {
      /* istanbul ignore next  */
      function apply(styleElement, options, obj) {
        let css = '';

        if (obj.supports) {
          css += '@supports ('.concat(obj.supports, ') {');
        }

        if (obj.media) {
          css += '@media '.concat(obj.media, ' {');
        }

        const needLayer = typeof obj.layer !== 'undefined';

        if (needLayer) {
          css += '@layer'.concat(obj.layer.length > 0 ? ' '.concat(obj.layer) : '', ' {');
        }

        css += obj.css;

        if (needLayer) {
          css += '}';
        }

        if (obj.media) {
          css += '}';
        }

        if (obj.supports) {
          css += '}';
        }

        const { sourceMap } = obj;

        if (sourceMap && typeof btoa !== 'undefined') {
          css += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), ' */');
        } // For old IE

        /* istanbul ignore if  */

        options.styleTagTransform(css, styleElement, options.options);
      }

      function removeStyleElement(styleElement) {
        // istanbul ignore if
        if (styleElement.parentNode === null) {
          return false;
        }

        styleElement.parentNode.removeChild(styleElement);
      }
      /* istanbul ignore next  */

      function domAPI(options) {
        const styleElement = options.insertStyleElement(options);
        return {
          update: function update(obj) {
            apply(styleElement, options, obj);
          },
          remove: function remove() {
            removeStyleElement(styleElement);
          },
        };
      }

      module.exports = domAPI;
      /***/ }),

    /***/ './node_modules/style-loader/dist/runtime/styleTagTransform.js':
    /*! *********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \******************************************************************** */
    /***/ ((module) => {
      /* istanbul ignore next  */
      function styleTagTransform(css, styleElement) {
        if (styleElement.styleSheet) {
          styleElement.styleSheet.cssText = css;
        } else {
          while (styleElement.firstChild) {
            styleElement.removeChild(styleElement.firstChild);
          }

          styleElement.appendChild(document.createTextNode(css));
        }
      }

      module.exports = styleTagTransform;
      /***/ }),

    /** *** */ 	});
  /** ********************************************************************* */
  /** *** */ 	// The module cache
  /** *** */ 	const __webpack_module_cache__ = {};
  /** *** */
  /** *** */ 	// The require function
  /** *** */ 	function __webpack_require__(moduleId) {
    /** *** */ 		// Check if module is in cache
    /** *** */ 		const cachedModule = __webpack_module_cache__[moduleId];
    /** *** */ 		if (cachedModule !== undefined) {
      /** *** */ 			return cachedModule.exports;
      /** *** */ 		}
    /** *** */ 		// Create a new module (and put it into the cache)
    /** *** */ 		const module = __webpack_module_cache__[moduleId] = {
      /** *** */ 			id: moduleId,
      /** *** */ 			// no module.loaded needed
      /** *** */ 			exports: {},
      /** *** */ 		};
    /** *** */
    /** *** */ 		// Execute the module function
    /** *** */ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /** *** */
    /** *** */ 		// Return the exports of the module
    /** *** */ 		return module.exports;
    /** *** */ 	}
  /** *** */
  /** ********************************************************************* */
  /** *** */ 	/* webpack/runtime/compat get default export */
  /** *** */ 	(() => {
    /** *** */ 		// getDefaultExport function for compatibility with non-harmony modules
    /** *** */ 		__webpack_require__.n = (module) => {
      /** *** */ 			const getter = module && module.__esModule
      /** *** */ 				? () => (module.default)
      /** *** */ 				: () => (module);
      /** *** */ 			__webpack_require__.d(getter, { a: getter });
      /** *** */ 			return getter;
      /** *** */ 		};
    /** *** */ 	})();
  /** *** */
  /** *** */ 	/* webpack/runtime/define property getters */
  /** *** */ 	(() => {
    /** *** */ 		// define getter functions for harmony exports
    /** *** */ 		__webpack_require__.d = (exports, definition) => {
      /** *** */ 			for (const key in definition) {
        /** *** */ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /** *** */ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /** *** */ 				}
        /** *** */ 			}
      /** *** */ 		};
    /** *** */ 	})();
  /** *** */
  /** *** */ 	/* webpack/runtime/global */
  /** *** */ 	(() => {
    /** *** */ 		__webpack_require__.g = (function () {
      /** *** */ 			if (typeof globalThis === 'object') return globalThis;
      /** *** */ 			try {
        /** *** */ 				return this || new Function('return this')();
        /** *** */ 			} catch (e) {
        /** *** */ 				if (typeof window === 'object') return window;
        /** *** */ 			}
      /** *** */ 		}());
    /** *** */ 	})();
  /** *** */
  /** *** */ 	/* webpack/runtime/hasOwnProperty shorthand */
  /** *** */ 	(() => {
    /** *** */ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
    /** *** */ 	})();
  /** *** */
  /** *** */ 	/* webpack/runtime/make namespace object */
  /** *** */ 	(() => {
    /** *** */ 		// define __esModule on exports
    /** *** */ 		__webpack_require__.r = (exports) => {
      /** *** */ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /** *** */ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /** *** */ 			}
      /** *** */ 			Object.defineProperty(exports, '__esModule', { value: true });
      /** *** */ 		};
    /** *** */ 	})();
  /** *** */
  /** ********************************************************************* */
  /** *** */
  /** *** */ 	// startup
  /** *** */ 	// Load entry module and return exports
  /** *** */ 	// This entry module is referenced by other modules so it can't be inlined
  /** *** */ 	__webpack_require__('./node_modules/babel-regenerator-runtime/runtime.js');
  /** *** */ 	const __webpack_exports__ = __webpack_require__('./src/index.js');
/** *** */
/** *** */ })();

// # sourceMappingURL=bundle.js.map
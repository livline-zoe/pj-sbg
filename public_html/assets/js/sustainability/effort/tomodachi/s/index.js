! function (e) {
    var t = {};

    function i(n) {
      if (t[n]) return t[n].exports;
      var r = t[n] = {
        i: n,
        l: !1,
        exports: {}
      };
      return e[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports
    }
    i.m = e, i.c = t, i.d = function (e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: n
      })
    }, i.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      })
    }, i.t = function (e, t) {
      if (1 & t && (e = i(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (i.r(n), Object.defineProperty(n, "default", {
          enumerable: !0,
          value: e
        }), 2 & t && "string" != typeof e)
        for (var r in e) i.d(n, r, function (t) {
          return e[t]
        }.bind(null, r));
      return n
    }, i.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default
      } : function () {
        return e
      };
      return i.d(t, "a", t), t
    }, i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i(i.s = 5)
  }([function (e, t) {
    var i = !1;
    try {
      var n = Object.defineProperty({}, "passive", {
        get: function () {
          i = !0
        }
      });
      window.addEventListener("testPassive", null, n), window.removeEventListener("testPassive", null, n)
    } catch (e) {}
    e.exports = i
  }, function (e, t, i) {
    (function (t, i) {
      var n;
      n = function () {
        "use strict";

        function e(e) {
          return "function" == typeof e
        }
        var n = Array.isArray ? Array.isArray : function (e) {
            return "[object Array]" === Object.prototype.toString.call(e)
          },
          r = 0,
          o = undefined,
          a = undefined,
          s = function (e, t) {
            p[r] = e, p[r + 1] = t, 2 === (r += 2) && (a ? a(g) : w())
          };
        var l = "undefined" != typeof window ? window : undefined,
          u = l || {},
          c = u.MutationObserver || u.WebKitMutationObserver,
          d = "undefined" == typeof self && undefined !== t && "[object process]" === {}.toString.call(t),
          h = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

        function f() {
          var e = setTimeout;
          return function () {
            return e(g, 1)
          }
        }
        var p = new Array(1e3);

        function g() {
          for (var e = 0; e < r; e += 2) {
            (0, p[e])(p[e + 1]), p[e] = undefined, p[e + 1] = undefined
          }
          r = 0
        }
        var m, y, v, b, w = undefined;

        function x(e, t) {
          var i = this,
            n = new this.constructor(E);
          undefined === n[T] && q(n);
          var r = i._state;
          if (r) {
            var o = arguments[r - 1];
            s(function () {
              return j(r, n, o, i._result)
            })
          } else M(i, n, e, t);
          return n
        }

        function S(e) {
          if (e && "object" == typeof e && e.constructor === this) return e;
          var t = new this(E);
          return N(t, e), t
        }
        d ? w = function () {
          return t.nextTick(g)
        } : c ? (y = 0, v = new c(g), b = document.createTextNode(""), v.observe(b, {
          characterData: !0
        }), w = function () {
          b.data = y = ++y % 2
        }) : h ? ((m = new MessageChannel).port1.onmessage = g, w = function () {
          return m.port2.postMessage(0)
        }) : w = undefined === l ? function () {
          try {
            var e = Function("return this")().require("vertx");
            return undefined !== (o = e.runOnLoop || e.runOnContext) ? function () {
              o(g)
            } : f()
          } catch (e) {
            return f()
          }
        }() : f();
        var T = Math.random().toString(36).substring(2);

        function E() {}
        var P = undefined,
          C = 1,
          k = 2,
          V = {
            error: null
          };

        function A(e) {
          try {
            return e.then
          } catch (e) {
            return V.error = e, V
          }
        }

        function F(t, i, n) {
          i.constructor === t.constructor && n === x && i.constructor.resolve === S ? function (e, t) {
            t._state === C ? O(e, t._result) : t._state === k ? _(e, t._result) : M(t, undefined, function (t) {
              return N(e, t)
            }, function (t) {
              return _(e, t)
            })
          }(t, i) : n === V ? (_(t, V.error), V.error = null) : undefined === n ? O(t, i) : e(n) ? function (e, t, i) {
            s(function (e) {
              var n = !1,
                r = function (e, t, i, n) {
                  try {
                    e.call(t, i, n)
                  } catch (e) {
                    return e
                  }
                }(i, t, function (i) {
                  n || (n = !0, t !== i ? N(e, i) : O(e, i))
                }, function (t) {
                  n || (n = !0, _(e, t))
                }, e._label);
              !n && r && (n = !0, _(e, r))
            }, e)
          }(t, i, n) : O(t, i)
        }

        function N(e, t) {
          var i, n;
          e === t ? _(e, new TypeError("You cannot resolve a promise with itself")) : (n = typeof (i = t), null === i || "object" !== n && "function" !== n ? O(e, t) : F(e, t, A(t)))
        }

        function L(e) {
          e._onerror && e._onerror(e._result), B(e)
        }

        function O(e, t) {
          e._state === P && (e._result = t, e._state = C, 0 !== e._subscribers.length && s(B, e))
        }

        function _(e, t) {
          e._state === P && (e._state = k, e._result = t, s(L, e))
        }

        function M(e, t, i, n) {
          var r = e._subscribers,
            o = r.length;
          e._onerror = null, r[o] = t, r[o + C] = i, r[o + k] = n, 0 === o && e._state && s(B, e)
        }

        function B(e) {
          var t = e._subscribers,
            i = e._state;
          if (0 !== t.length) {
            for (var n = undefined, r = undefined, o = e._result, a = 0; a < t.length; a += 3) n = t[a], r = t[a + i], n ? j(i, n, r, o) : r(o);
            e._subscribers.length = 0
          }
        }

        function j(t, i, n, r) {
          var o = e(n),
            a = undefined,
            s = undefined,
            l = undefined,
            u = undefined;
          if (o) {
            if ((a = function (e, t) {
                try {
                  return e(t)
                } catch (e) {
                  return V.error = e, V
                }
              }(n, r)) === V ? (u = !0, s = a.error, a.error = null) : l = !0, i === a) return void _(i, new TypeError("A promises callback cannot return that same promise."))
          } else a = r, l = !0;
          i._state !== P || (o && l ? N(i, a) : u ? _(i, s) : t === C ? O(i, a) : t === k && _(i, a))
        }
        var H = 0;

        function q(e) {
          e[T] = H++, e._state = undefined, e._result = undefined, e._subscribers = []
        }
        var R = function () {
          function e(e, t) {
            this._instanceConstructor = e, this.promise = new e(E), this.promise[T] || q(this.promise), n(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? O(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && O(this.promise, this._result))) : _(this.promise, new Error("Array Methods must be provided an Array"))
          }
          return e.prototype._enumerate = function (e) {
            for (var t = 0; this._state === P && t < e.length; t++) this._eachEntry(e[t], t)
          }, e.prototype._eachEntry = function (e, t) {
            var i = this._instanceConstructor,
              n = i.resolve;
            if (n === S) {
              var r = A(e);
              if (r === x && e._state !== P) this._settledAt(e._state, t, e._result);
              else if ("function" != typeof r) this._remaining--, this._result[t] = e;
              else if (i === I) {
                var o = new i(E);
                F(o, e, r), this._willSettleAt(o, t)
              } else this._willSettleAt(new i(function (t) {
                return t(e)
              }), t)
            } else this._willSettleAt(n(e), t)
          }, e.prototype._settledAt = function (e, t, i) {
            var n = this.promise;
            n._state === P && (this._remaining--, e === k ? _(n, i) : this._result[t] = i), 0 === this._remaining && O(n, this._result)
          }, e.prototype._willSettleAt = function (e, t) {
            var i = this;
            M(e, undefined, function (e) {
              return i._settledAt(C, t, e)
            }, function (e) {
              return i._settledAt(k, t, e)
            })
          }, e
        }();
        var I = function () {
          function e(t) {
            this[T] = H++, this._result = this._state = undefined, this._subscribers = [], E !== t && ("function" != typeof t && function () {
              throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
            }(), this instanceof e ? function (e, t) {
              try {
                t(function (t) {
                  N(e, t)
                }, function (t) {
                  _(e, t)
                })
              } catch (t) {
                _(e, t)
              }
            }(this, t) : function () {
              throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
            }())
          }
          return e.prototype.catch = function (e) {
            return this.then(null, e)
          }, e.prototype.finally = function (e) {
            var t = this.constructor;
            return this.then(function (i) {
              return t.resolve(e()).then(function () {
                return i
              })
            }, function (i) {
              return t.resolve(e()).then(function () {
                throw i
              })
            })
          }, e
        }();
        return I.prototype.then = x, I.all = function (e) {
          return new R(this, e).promise
        }, I.race = function (e) {
          var t = this;
          return n(e) ? new t(function (i, n) {
            for (var r = e.length, o = 0; o < r; o++) t.resolve(e[o]).then(i, n)
          }) : new t(function (e, t) {
            return t(new TypeError("You must pass an array to race."))
          })
        }, I.resolve = S, I.reject = function (e) {
          var t = new this(E);
          return _(t, e), t
        }, I._setScheduler = function (e) {
          a = e
        }, I._setAsap = function (e) {
          s = e
        }, I._asap = s, I.polyfill = function () {
          var e = undefined;
          if (undefined !== i) e = i;
          else if ("undefined" != typeof self) e = self;
          else try {
            e = Function("return this")()
          } catch (e) {
            throw new Error("polyfill failed because global object is unavailable in this environment")
          }
          var t = e.Promise;
          if (t) {
            var n = null;
            try {
              n = Object.prototype.toString.call(t.resolve())
            } catch (e) {}
            if ("[object Promise]" === n && !t.cast) return
          }
          e.Promise = I
        }, I.Promise = I, I
      }, e.exports = n()
    }).call(this, i(3), i(4))
  }, function (e, t, i) {
    var n, r; 
    ! function (e) {
      "use strict";

      function t(e) {
        var t = e.length,
          n = i.type(e);
        return "function" !== n && !i.isWindow(e) && (!(1 !== e.nodeType || !t) || "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
      }
      if (!e.jQuery) {
        var i = function (e, t) {
          return new i.fn.init(e, t)
        };
        i.isWindow = function (e) {
          return e && e === e.window
        }, i.type = function (e) {
          return e ? "object" == typeof e || "function" == typeof e ? r[a.call(e)] || "object" : typeof e : e + ""
        }, i.isArray = Array.isArray || function (e) {
          return "array" === i.type(e)
        }, i.isPlainObject = function (e) {
          var t;
          if (!e || "object" !== i.type(e) || e.nodeType || i.isWindow(e)) return !1;
          try {
            if (e.constructor && !o.call(e, "constructor") && !o.call(e.constructor.prototype, "isPrototypeOf")) return !1
          } catch (e) {
            return !1
          }
          for (t in e);
          return undefined === t || o.call(e, t)
        }, i.each = function (e, i, n) {
          var r = 0,
            o = e.length,
            a = t(e);
          if (n) {
            if (a)
              for (; r < o && !1 !== i.apply(e[r], n); r++);
            else
              for (r in e)
                if (e.hasOwnProperty(r) && !1 === i.apply(e[r], n)) break
          } else if (a)
            for (; r < o && !1 !== i.call(e[r], r, e[r]); r++);
          else
            for (r in e)
              if (e.hasOwnProperty(r) && !1 === i.call(e[r], r, e[r])) break;
          return e
        }, i.data = function (e, t, r) {
          if (undefined === r) {
            var o = e[i.expando],
              a = o && n[o];
            if (undefined === t) return a;
            if (a && t in a) return a[t]
          } else if (undefined !== t) {
            var s = e[i.expando] || (e[i.expando] = ++i.uuid);
            return n[s] = n[s] || {}, n[s][t] = r, r
          }
        }, i.removeData = function (e, t) {
          var r = e[i.expando],
            o = r && n[r];
          o && (t ? i.each(t, function (e, t) {
            delete o[t]
          }) : delete n[r])
        }, i.extend = function () {
          var e, t, n, r, o, a, s = arguments[0] || {},
            l = 1,
            u = arguments.length,
            c = !1;
          for ("boolean" == typeof s && (c = s, s = arguments[l] || {}, l++), "object" != typeof s && "function" !== i.type(s) && (s = {}), l === u && (s = this, l--); l < u; l++)
            if (o = arguments[l])
              for (r in o) o.hasOwnProperty(r) && (e = s[r], s !== (n = o[r]) && (c && n && (i.isPlainObject(n) || (t = i.isArray(n))) ? (t ? (t = !1, a = e && i.isArray(e) ? e : []) : a = e && i.isPlainObject(e) ? e : {}, s[r] = i.extend(c, a, n)) : undefined !== n && (s[r] = n)));
          return s
        }, i.queue = function (e, n, r) {
          if (e) {
            n = (n || "fx") + "queue";
            var o = i.data(e, n);
            return r ? (!o || i.isArray(r) ? o = i.data(e, n, function (e, i) {
              var n = [];
              return e && (t(Object(e)) ? function (e, t) {
                for (var i = +t.length, n = 0, r = e.length; n < i;) e[r++] = t[n++];
                if (i != i)
                  for (; undefined !== t[n];) e[r++] = t[n++];
                e.length = r
              }(n, "string" == typeof e ? [e] : e) : [].push.call(n, e)), n
            }(r)) : o.push(r), o) : o || []
          }
        }, i.dequeue = function (e, t) {
          i.each(e.nodeType ? [e] : e, function (e, n) {
            t = t || "fx";
            var r = i.queue(n, t),
              o = r.shift();
            "inprogress" === o && (o = r.shift()), o && ("fx" === t && r.unshift("inprogress"), o.call(n, function () {
              i.dequeue(n, t)
            }))
          })
        }, i.fn = i.prototype = {
          init: function (e) {
            if (e.nodeType) return this[0] = e, this;
            throw new Error("Not a DOM node.")
          },
          offset: function () {
            var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
              top: 0,
              left: 0
            };
            return {
              top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
              left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
            }
          },
          position: function () {
            var e = this[0],
              t = function (e) {
                for (var t = e.offsetParent; t && "html" !== t.nodeName.toLowerCase() && t.style && "static" === t.style.position.toLowerCase();) t = t.offsetParent;
                return t || document
              }(e),
              n = this.offset(),
              r = /^(?:body|html)$/i.test(t.nodeName) ? {
                top: 0,
                left: 0
              } : i(t).offset();
            return n.top -= parseFloat(e.style.marginTop) || 0, n.left -= parseFloat(e.style.marginLeft) || 0, t.style && (r.top += parseFloat(t.style.borderTopWidth) || 0, r.left += parseFloat(t.style.borderLeftWidth) || 0), {
              top: n.top - r.top,
              left: n.left - r.left
            }
          }
        };
        var n = {};
        i.expando = "velocity" + (new Date).getTime(), i.uuid = 0;
        for (var r = {}, o = r.hasOwnProperty, a = r.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++) r["[object " + s[l] + "]"] = s[l].toLowerCase();
        i.fn.init.prototype = i.fn, e.Velocity = {
          Utilities: i
        }
      }
    }(window),
    function (o) {
      "use strict";
      "object" == typeof e && "object" == typeof e.exports ? e.exports = o() : undefined === (r = "function" == typeof (n = o) ? n.call(t, i, t, e) : n) || (e.exports = r)
    }(function () {
      "use strict";
      return function (e, t, i, n) {
        function r(e) {
          return v.isWrapped(e) ? e = m.call(e) : v.isNode(e) && (e = [e]), e
        }

        function o(e) {
          var t = h.data(e, "velocity");
          return null === t ? n : t
        }

        function a(e, t) {
          var i = o(e);
          i && i.delayTimer && !i.delayPaused && (i.delayRemaining = i.delay - t + i.delayBegin, i.delayPaused = !0, clearTimeout(i.delayTimer.setTimeout))
        }

        function s(e, t) {
          var i = o(e);
          i && i.delayTimer && i.delayPaused && (i.delayPaused = !1, i.delayTimer.setTimeout = setTimeout(i.delayTimer.next, i.delayRemaining))
        }

        function l(e, i, n, r) {
          function o(e, t) {
            return 1 - 3 * t + 3 * e
          }

          function a(e, t) {
            return 3 * t - 6 * e
          }

          function s(e) {
            return 3 * e
          }

          function l(e, t, i) {
            return ((o(t, i) * e + a(t, i)) * e + s(t)) * e
          }

          function u(e, t, i) {
            return 3 * o(t, i) * e * e + 2 * a(t, i) * e + s(t)
          }

          function c(t, i) {
            for (var r = 0; r < f; ++r) {
              var o = u(i, e, n);
              if (0 === o) return i;
              i -= (l(i, e, n) - t) / o
            }
            return i
          }

          function d(t, i, r) {
            var o, a, s = 0;
            do {
              (o = l(a = i + (r - i) / 2, e, n) - t) > 0 ? r = a : i = a
            } while (Math.abs(o) > g && ++s < m);
            return a
          }

          function h() {
            S = !0, e === i && n === r || function () {
              for (var t = 0; t < y; ++t) x[t] = l(t * v, e, n)
            }()
          }
          var f = 4,
            p = .001,
            g = 1e-7,
            m = 10,
            y = 11,
            v = 1 / (y - 1),
            b = "Float32Array" in t;
          if (4 !== arguments.length) return !1;
          for (var w = 0; w < 4; ++w)
            if ("number" != typeof arguments[w] || isNaN(arguments[w]) || !isFinite(arguments[w])) return !1;
          e = Math.min(e, 1), n = Math.min(n, 1), e = Math.max(e, 0), n = Math.max(n, 0);
          var x = b ? new Float32Array(y) : new Array(y),
            S = !1,
            T = function (t) {
              return S || h(), e === i && n === r ? t : 0 === t ? 0 : 1 === t ? 1 : l(function (t) {
                for (var i = 0, r = 1, o = y - 1; r !== o && x[r] <= t; ++r) i += v;
                var a = i + (t - x[--r]) / (x[r + 1] - x[r]) * v,
                  s = u(a, e, n);
                return s >= p ? c(t, a) : 0 === s ? a : d(t, i, i + v)
              }(t), i, r)
            };
          T.getControlPoints = function () {
            return [{
              x: e,
              y: i
            }, {
              x: n,
              y: r
            }]
          };
          var E = "generateBezier(" + [e, i, n, r] + ")";
          return T.toString = function () {
            return E
          }, T
        }

        function u(e, t) {
          var i = e;
          return v.isString(e) ? S.Easings[e] || (i = !1) : i = v.isArray(e) && 1 === e.length ? function (e) {
            return function (t) {
              return Math.round(t * e) * (1 / e)
            }
          }.apply(null, e) : v.isArray(e) && 2 === e.length ? T.apply(null, e.concat([t])) : !(!v.isArray(e) || 4 !== e.length) && l.apply(null, e), !1 === i && (i = S.Easings[S.defaults.easing] ? S.defaults.easing : x), i
        }

        function c(e) {
          if (e) {
            var t = S.timestamp && !0 !== e ? e : g.now(),
              i = S.State.calls.length;
            i > 1e4 && (S.State.calls = function (e) {
              for (var t = -1, i = e ? e.length : 0, n = []; ++t < i;) {
                var r = e[t];
                r && n.push(r)
              }
              return n
            }(S.State.calls), i = S.State.calls.length);
            for (var r = 0; r < i; r++)
              if (S.State.calls[r]) {
                var a = S.State.calls[r],
                  s = a[0],
                  l = a[2],
                  u = a[3],
                  p = !u,
                  m = null,
                  y = a[5],
                  b = a[6];
                if (u || (u = S.State.calls[r][3] = t - 16), y) {
                  if (!0 !== y.resume) continue;
                  u = a[3] = Math.round(t - b - 16), a[5] = null
                }
                b = a[6] = t - u;
                for (var w = Math.min(b / l.duration, 1), x = 0, T = s.length; x < T; x++) {
                  var P = s[x],
                    k = P.element;
                  if (o(k)) {
                    var V = !1;
                    if (l.display !== n && null !== l.display && "none" !== l.display) {
                      if ("flex" === l.display) {
                        h.each(["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"], function (e, t) {
                          E.setPropertyValue(k, "display", t)
                        })
                      }
                      E.setPropertyValue(k, "display", l.display)
                    }
                    for (var A in l.visibility !== n && "hidden" !== l.visibility && E.setPropertyValue(k, "visibility", l.visibility), P)
                      if (P.hasOwnProperty(A) && "element" !== A) {
                        var F, N = P[A],
                          L = v.isString(N.easing) ? S.Easings[N.easing] : N.easing;
                        if (v.isString(N.pattern)) {
                          var O = 1 === w ? function (e, t, i) {
                            var n = N.endValue[t];
                            return i ? Math.round(n) : n
                          } : function (e, t, i) {
                            var n = N.startValue[t],
                              r = N.endValue[t] - n,
                              o = n + r * L(w, l, r);
                            return i ? Math.round(o) : o
                          };
                          F = N.pattern.replace(/{(\d+)(!)?}/g, O)
                        } else if (1 === w) F = N.endValue;
                        else {
                          var _ = N.endValue - N.startValue;
                          F = N.startValue + _ * L(w, l, _)
                        }
                        if (!p && F === N.currentValue) continue;
                        if (N.currentValue = F, "tween" === A) m = F;
                        else {
                          var M;
                          if (E.Hooks.registered[A]) {
                            M = E.Hooks.getRoot(A);
                            var B = o(k).rootPropertyValueCache[M];
                            B && (N.rootPropertyValue = B)
                          }
                          var j = E.setPropertyValue(k, A, N.currentValue + (f < 9 && 0 === parseFloat(F) ? "" : N.unitType), N.rootPropertyValue, N.scrollData);
                          E.Hooks.registered[A] && (E.Normalizations.registered[M] ? o(k).rootPropertyValueCache[M] = E.Normalizations.registered[M]("extract", null, j[1]) : o(k).rootPropertyValueCache[M] = j[1]), "transform" === j[0] && (V = !0)
                        }
                      }
                    l.mobileHA && o(k).transformCache.translate3d === n && (o(k).transformCache.translate3d = "(0px, 0px, 0px)", V = !0), V && E.flushTransformCache(k)
                  }
                }
                l.display !== n && "none" !== l.display && (S.State.calls[r][2].display = !1), l.visibility !== n && "hidden" !== l.visibility && (S.State.calls[r][2].visibility = !1), l.progress && l.progress.call(a[1], a[1], w, Math.max(0, u + l.duration - t), u, m), 1 === w && d(r)
              }
          }
          S.State.isTicking && C(c)
        }

        function d(e, t) {
          if (!S.State.calls[e]) return !1;
          for (var i = S.State.calls[e][0], r = S.State.calls[e][1], a = S.State.calls[e][2], s = S.State.calls[e][4], l = !1, u = 0, c = i.length; u < c; u++) {
            var d = i[u].element;
            t || a.loop || ("none" === a.display && E.setPropertyValue(d, "display", a.display), "hidden" === a.visibility && E.setPropertyValue(d, "visibility", a.visibility));
            var f = o(d);
            if (!0 !== a.loop && (h.queue(d)[1] === n || !/\.velocityQueueEntryFlag/i.test(h.queue(d)[1])) && f) {
              f.isAnimating = !1, f.rootPropertyValueCache = {};
              var p = !1;
              h.each(E.Lists.transforms3D, function (e, t) {
                var i = /^scale/.test(t) ? 1 : 0,
                  r = f.transformCache[t];
                f.transformCache[t] !== n && new RegExp("^\\(" + i + "[^.]").test(r) && (p = !0, delete f.transformCache[t])
              }), a.mobileHA && (p = !0, delete f.transformCache.translate3d), p && E.flushTransformCache(d), E.Values.removeClass(d, "velocity-animating")
            }
            if (!t && a.complete && !a.loop && u === c - 1) try {
              a.complete.call(r, r)
            } catch (e) {
              setTimeout(function () {
                throw e
              }, 1)
            }
            s && !0 !== a.loop && s(r), f && !0 === a.loop && !t && (h.each(f.tweensContainer, function (e, t) {
              if (/^rotate/.test(e) && (parseFloat(t.startValue) - parseFloat(t.endValue)) % 360 == 0) {
                var i = t.startValue;
                t.startValue = t.endValue, t.endValue = i
              }
              /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
            }), S(d, "reverse", {
              loop: !0,
              delay: a.delay
            })), !1 !== a.queue && h.dequeue(d, a.queue)
          }
          S.State.calls[e] = !1;
          for (var g = 0, m = S.State.calls.length; g < m; g++)
            if (!1 !== S.State.calls[g]) {
              l = !0;
              break
            }!1 === l && (S.State.isTicking = !1, delete S.State.calls, S.State.calls = [])
        }
        var h, f = function () {
            if (i.documentMode) return i.documentMode;
            for (var e = 7; e > 4; e--) {
              var t = i.createElement("div");
              if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, e
            }
            return n
          }(),
          p = function () {
            var e = 0;
            return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function (t) {
              var i, n = (new Date).getTime();
              return i = Math.max(0, 16 - (n - e)), e = n + i, setTimeout(function () {
                t(n + i)
              }, i)
            }
          }(),
          g = function () {
            var e = t.performance || {};
            if ("function" != typeof e.now) {
              var i = e.timing && e.timing.navigationStart ? e.timing.navigationStart : (new Date).getTime();
              e.now = function () {
                return (new Date).getTime() - i
              }
            }
            return e
          }(),
          m = function () {
            var e = Array.prototype.slice;
            try {
              return e.call(i.documentElement), e
            } catch (t) {
              return function (t, i) {
                var n = this.length;
                if ("number" != typeof t && (t = 0), "number" != typeof i && (i = n), this.slice) return e.call(this, t, i);
                var r, o = [],
                  a = t >= 0 ? t : Math.max(0, n + t),
                  s = (i < 0 ? n + i : Math.min(i, n)) - a;
                if (s > 0)
                  if (o = new Array(s), this.charAt)
                    for (r = 0; r < s; r++) o[r] = this.charAt(a + r);
                  else
                    for (r = 0; r < s; r++) o[r] = this[a + r];
                return o
              }
            }
          }(),
          y = function () {
            return Array.prototype.includes ? function (e, t) {
              return e.includes(t)
            } : Array.prototype.indexOf ? function (e, t) {
              return e.indexOf(t) >= 0
            } : function (e, t) {
              for (var i = 0; i < e.length; i++)
                if (e[i] === t) return !0;
              return !1
            }
          },
          v = {
            isNumber: function (e) {
              return "number" == typeof e
            },
            isString: function (e) {
              return "string" == typeof e
            },
            isArray: Array.isArray || function (e) {
              return "[object Array]" === Object.prototype.toString.call(e)
            },
            isFunction: function (e) {
              return "[object Function]" === Object.prototype.toString.call(e)
            },
            isNode: function (e) {
              return e && e.nodeType
            },
            isWrapped: function (e) {
              return e && e !== t && v.isNumber(e.length) && !v.isString(e) && !v.isFunction(e) && !v.isNode(e) && (0 === e.length || v.isNode(e[0]))
            },
            isSVG: function (e) {
              return t.SVGElement && e instanceof t.SVGElement
            },
            isEmptyObject: function (e) {
              for (var t in e)
                if (e.hasOwnProperty(t)) return !1;
              return !0
            }
          },
          b = !1;
        if (e.fn && e.fn.jquery ? (h = e, b = !0) : h = t.Velocity.Utilities, f <= 8 && !b) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (!(f <= 7)) {
          var w = 400,
            x = "swing",
            S = {
              State: {
                isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t.navigator.userAgent),
                isAndroid: /Android/i.test(t.navigator.userAgent),
                isGingerbread: /Android 2\.3\.[3-7]/i.test(t.navigator.userAgent),
                isChrome: t.chrome,
                isFirefox: /Firefox/i.test(t.navigator.userAgent),
                prefixElement: i.createElement("div"),
                prefixMatches: {},
                scrollAnchor: null,
                scrollPropertyLeft: null,
                scrollPropertyTop: null,
                isTicking: !1,
                calls: [],
                delayedElements: {
                  count: 0
                }
              },
              CSS: {},
              Utilities: h,
              Redirects: {},
              Easings: {},
              Promise: t.Promise,
              defaults: {
                queue: "",
                duration: w,
                easing: x,
                begin: n,
                complete: n,
                progress: n,
                display: n,
                visibility: n,
                loop: !1,
                delay: !1,
                mobileHA: !0,
                _cacheValues: !0,
                promiseRejectEmpty: !0
              },
              init: function (e) {
                h.data(e, "velocity", {
                  isSVG: v.isSVG(e),
                  isAnimating: !1,
                  computedStyle: null,
                  tweensContainer: null,
                  rootPropertyValueCache: {},
                  transformCache: {}
                })
              },
              hook: null,
              mock: !1,
              version: {
                major: 1,
                minor: 5,
                patch: 2
              },
              debug: !1,
              timestamp: !0,
              pauseAll: function (e) {
                var t = (new Date).getTime();
                h.each(S.State.calls, function (t, i) {
                  if (i) {
                    if (e !== n && (i[2].queue !== e || !1 === i[2].queue)) return !0;
                    i[5] = {
                      resume: !1
                    }
                  }
                }), h.each(S.State.delayedElements, function (e, i) {
                  i && a(i, t)
                })
              },
              resumeAll: function (e) {
                (new Date).getTime();
                h.each(S.State.calls, function (t, i) {
                  if (i) {
                    if (e !== n && (i[2].queue !== e || !1 === i[2].queue)) return !0;
                    i[5] && (i[5].resume = !0)
                  }
                }), h.each(S.State.delayedElements, function (e, t) {
                  t && s(t)
                })
              }
            };
          t.pageYOffset !== n ? (S.State.scrollAnchor = t, S.State.scrollPropertyLeft = "pageXOffset", S.State.scrollPropertyTop = "pageYOffset") : (S.State.scrollAnchor = i.documentElement || i.body.parentNode || i.body, S.State.scrollPropertyLeft = "scrollLeft", S.State.scrollPropertyTop = "scrollTop");
          var T = function () {
            function e(e) {
              return -e.tension * e.x - e.friction * e.v
            }

            function t(t, i, n) {
              var r = {
                x: t.x + n.dx * i,
                v: t.v + n.dv * i,
                tension: t.tension,
                friction: t.friction
              };
              return {
                dx: r.v,
                dv: e(r)
              }
            }

            function i(i, n) {
              var r = {
                  dx: i.v,
                  dv: e(i)
                },
                o = t(i, .5 * n, r),
                a = t(i, .5 * n, o),
                s = t(i, n, a),
                l = 1 / 6 * (r.dx + 2 * (o.dx + a.dx) + s.dx),
                u = 1 / 6 * (r.dv + 2 * (o.dv + a.dv) + s.dv);
              return i.x = i.x + l * n, i.v = i.v + u * n, i
            }
            return function e(t, n, r) {
              var o, a, s, l = {
                  x: -1,
                  v: 0,
                  tension: null,
                  friction: null
                },
                u = [0],
                c = 0;
              for (t = parseFloat(t) || 500, n = parseFloat(n) || 20, r = r || null, l.tension = t, l.friction = n, (o = null !== r) ? a = (c = e(t, n)) / r * .016 : a = .016; s = i(s || l, a), u.push(1 + s.x), c += 16, Math.abs(s.x) > 1e-4 && Math.abs(s.v) > 1e-4;);
              return o ? function (e) {
                return u[e * (u.length - 1) | 0]
              } : c
            }
          }();
          S.Easings = {
            linear: function (e) {
              return e
            },
            swing: function (e) {
              return .5 - Math.cos(e * Math.PI) / 2
            },
            spring: function (e) {
              return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
            }
          }, h.each([
            ["ease", [.25, .1, .25, 1]],
            ["ease-in", [.42, 0, 1, 1]],
            ["ease-out", [0, 0, .58, 1]],
            ["ease-in-out", [.42, 0, .58, 1]],
            ["easeInSine", [.47, 0, .745, .715]],
            ["easeOutSine", [.39, .575, .565, 1]],
            ["easeInOutSine", [.445, .05, .55, .95]],
            ["easeInQuad", [.55, .085, .68, .53]],
            ["easeOutQuad", [.25, .46, .45, .94]],
            ["easeInOutQuad", [.455, .03, .515, .955]],
            ["easeInCubic", [.55, .055, .675, .19]],
            ["easeOutCubic", [.215, .61, .355, 1]],
            ["easeInOutCubic", [.645, .045, .355, 1]],
            ["easeInQuart", [.895, .03, .685, .22]],
            ["easeOutQuart", [.165, .84, .44, 1]],
            ["easeInOutQuart", [.77, 0, .175, 1]],
            ["easeInQuint", [.755, .05, .855, .06]],
            ["easeOutQuint", [.23, 1, .32, 1]],
            ["easeInOutQuint", [.86, 0, .07, 1]],
            ["easeInExpo", [.95, .05, .795, .035]],
            ["easeOutExpo", [.19, 1, .22, 1]],
            ["easeInOutExpo", [1, 0, 0, 1]],
            ["easeInCirc", [.6, .04, .98, .335]],
            ["easeOutCirc", [.075, .82, .165, 1]],
            ["easeInOutCirc", [.785, .135, .15, .86]]
          ], function (e, t) {
            S.Easings[t[0]] = l.apply(null, t[1])
          });
          var E = S.CSS = {
            RegEx: {
              isHex: /^#([A-f\d]{3}){1,2}$/i,
              valueUnwrap: /^[A-z]+\((.*)\)$/i,
              wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
              valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
            },
            Lists: {
              colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
              transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
              transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
              units: ["%", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "cm", "mm", "Q", "in", "pc", "pt", "px", "deg", "grad", "rad", "turn", "s", "ms"],
              colorNames: {
                aliceblue: "240,248,255",
                antiquewhite: "250,235,215",
                aquamarine: "127,255,212",
                aqua: "0,255,255",
                azure: "240,255,255",
                beige: "245,245,220",
                bisque: "255,228,196",
                black: "0,0,0",
                blanchedalmond: "255,235,205",
                blueviolet: "138,43,226",
                blue: "0,0,255",
                brown: "165,42,42",
                burlywood: "222,184,135",
                cadetblue: "95,158,160",
                chartreuse: "127,255,0",
                chocolate: "210,105,30",
                coral: "255,127,80",
                cornflowerblue: "100,149,237",
                cornsilk: "255,248,220",
                crimson: "220,20,60",
                cyan: "0,255,255",
                darkblue: "0,0,139",
                darkcyan: "0,139,139",
                darkgoldenrod: "184,134,11",
                darkgray: "169,169,169",
                darkgrey: "169,169,169",
                darkgreen: "0,100,0",
                darkkhaki: "189,183,107",
                darkmagenta: "139,0,139",
                darkolivegreen: "85,107,47",
                darkorange: "255,140,0",
                darkorchid: "153,50,204",
                darkred: "139,0,0",
                darksalmon: "233,150,122",
                darkseagreen: "143,188,143",
                darkslateblue: "72,61,139",
                darkslategray: "47,79,79",
                darkturquoise: "0,206,209",
                darkviolet: "148,0,211",
                deeppink: "255,20,147",
                deepskyblue: "0,191,255",
                dimgray: "105,105,105",
                dimgrey: "105,105,105",
                dodgerblue: "30,144,255",
                firebrick: "178,34,34",
                floralwhite: "255,250,240",
                forestgreen: "34,139,34",
                fuchsia: "255,0,255",
                gainsboro: "220,220,220",
                ghostwhite: "248,248,255",
                gold: "255,215,0",
                goldenrod: "218,165,32",
                gray: "128,128,128",
                grey: "128,128,128",
                greenyellow: "173,255,47",
                green: "0,128,0",
                honeydew: "240,255,240",
                hotpink: "255,105,180",
                indianred: "205,92,92",
                indigo: "75,0,130",
                ivory: "255,255,240",
                khaki: "240,230,140",
                lavenderblush: "255,240,245",
                lavender: "230,230,250",
                lawngreen: "124,252,0",
                lemonchiffon: "255,250,205",
                lightblue: "173,216,230",
                lightcoral: "240,128,128",
                lightcyan: "224,255,255",
                lightgoldenrodyellow: "250,250,210",
                lightgray: "211,211,211",
                lightgrey: "211,211,211",
                lightgreen: "144,238,144",
                lightpink: "255,182,193",
                lightsalmon: "255,160,122",
                lightseagreen: "32,178,170",
                lightskyblue: "135,206,250",
                lightslategray: "119,136,153",
                lightsteelblue: "176,196,222",
                lightyellow: "255,255,224",
                limegreen: "50,205,50",
                lime: "0,255,0",
                linen: "250,240,230",
                magenta: "255,0,255",
                maroon: "128,0,0",
                mediumaquamarine: "102,205,170",
                mediumblue: "0,0,205",
                mediumorchid: "186,85,211",
                mediumpurple: "147,112,219",
                mediumseagreen: "60,179,113",
                mediumslateblue: "123,104,238",
                mediumspringgreen: "0,250,154",
                mediumturquoise: "72,209,204",
                mediumvioletred: "199,21,133",
                midnightblue: "25,25,112",
                mintcream: "245,255,250",
                mistyrose: "255,228,225",
                moccasin: "255,228,181",
                navajowhite: "255,222,173",
                navy: "0,0,128",
                oldlace: "253,245,230",
                olivedrab: "107,142,35",
                olive: "128,128,0",
                orangered: "255,69,0",
                orange: "255,165,0",
                orchid: "218,112,214",
                palegoldenrod: "238,232,170",
                palegreen: "152,251,152",
                paleturquoise: "175,238,238",
                palevioletred: "219,112,147",
                papayawhip: "255,239,213",
                peachpuff: "255,218,185",
                peru: "205,133,63",
                pink: "255,192,203",
                plum: "221,160,221",
                powderblue: "176,224,230",
                purple: "128,0,128",
                red: "255,0,0",
                rosybrown: "188,143,143",
                royalblue: "65,105,225",
                saddlebrown: "139,69,19",
                salmon: "250,128,114",
                sandybrown: "244,164,96",
                seagreen: "46,139,87",
                seashell: "255,245,238",
                sienna: "160,82,45",
                silver: "192,192,192",
                skyblue: "135,206,235",
                slateblue: "106,90,205",
                slategray: "112,128,144",
                snow: "255,250,250",
                springgreen: "0,255,127",
                steelblue: "70,130,180",
                tan: "210,180,140",
                teal: "0,128,128",
                thistle: "216,191,216",
                tomato: "255,99,71",
                turquoise: "64,224,208",
                violet: "238,130,238",
                wheat: "245,222,179",
                whitesmoke: "245,245,245",
                white: "255,255,255",
                yellowgreen: "154,205,50",
                yellow: "255,255,0"
              }
            },
            Hooks: {
              templates: {
                textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                backgroundPosition: ["X Y", "0% 0%"],
                transformOrigin: ["X Y Z", "50% 50% 0px"],
                perspectiveOrigin: ["X Y", "50% 50%"]
              },
              registered: {},
              register: function () {
                for (var e = 0; e < E.Lists.colors.length; e++) {
                  var t = "color" === E.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                  E.Hooks.templates[E.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                }
                var i, n, r;
                if (f)
                  for (i in E.Hooks.templates)
                    if (E.Hooks.templates.hasOwnProperty(i)) {
                      r = (n = E.Hooks.templates[i])[0].split(" ");
                      var o = n[1].match(E.RegEx.valueSplit);
                      "Color" === r[0] && (r.push(r.shift()), o.push(o.shift()), E.Hooks.templates[i] = [r.join(" "), o.join(" ")])
                    }
                for (i in E.Hooks.templates)
                  if (E.Hooks.templates.hasOwnProperty(i))
                    for (var a in r = (n = E.Hooks.templates[i])[0].split(" "))
                      if (r.hasOwnProperty(a)) {
                        var s = i + r[a],
                          l = a;
                        E.Hooks.registered[s] = [i, l]
                      }
              },
              getRoot: function (e) {
                var t = E.Hooks.registered[e];
                return t ? t[0] : e
              },
              getUnit: function (e, t) {
                var i = (e.substr(t || 0, 5).match(/^[a-z%]+/) || [])[0] || "";
                return i && y(E.Lists.units, i) ? i : ""
              },
              fixColors: function (e) {
                return e.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function (e, t, i) {
                  return E.Lists.colorNames.hasOwnProperty(i) ? (t || "rgba(") + E.Lists.colorNames[i] + (t ? "" : ",1)") : t + i
                })
              },
              cleanRootPropertyValue: function (e, t) {
                return E.RegEx.valueUnwrap.test(t) && (t = t.match(E.RegEx.valueUnwrap)[1]), E.Values.isCSSNullValue(t) && (t = E.Hooks.templates[e][1]), t
              },
              extractValue: function (e, t) {
                var i = E.Hooks.registered[e];
                if (i) {
                  var n = i[0],
                    r = i[1];
                  return (t = E.Hooks.cleanRootPropertyValue(n, t)).toString().match(E.RegEx.valueSplit)[r]
                }
                return t
              },
              injectValue: function (e, t, i) {
                var n = E.Hooks.registered[e];
                if (n) {
                  var r, o = n[0],
                    a = n[1];
                  return (r = (i = E.Hooks.cleanRootPropertyValue(o, i)).toString().match(E.RegEx.valueSplit))[a] = t, r.join(" ")
                }
                return i
              }
            },
            Normalizations: {
              registered: {
                clip: function (e, t, i) {
                  switch (e) {
                  case "name":
                    return "clip";
                  case "extract":
                    var n;
                    return E.RegEx.wrappedValueAlreadyExtracted.test(i) ? n = i : n = (n = i.toString().match(E.RegEx.valueUnwrap)) ? n[1].replace(/,(\s+)?/g, " ") : i, n;
                  case "inject":
                    return "rect(" + i + ")"
                  }
                },
                blur: function (e, t, i) {
                  switch (e) {
                  case "name":
                    return S.State.isFirefox ? "filter" : "-webkit-filter";
                  case "extract":
                    var n = parseFloat(i);
                    if (!n && 0 !== n) {
                      var r = i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                      n = r ? r[1] : 0
                    }
                    return n;
                  case "inject":
                    return parseFloat(i) ? "blur(" + i + ")" : "none"
                  }
                },
                opacity: function (e, t, i) {
                  if (f <= 8) switch (e) {
                  case "name":
                    return "filter";
                  case "extract":
                    var n = i.toString().match(/alpha\(opacity=(.*)\)/i);
                    return n ? n[1] / 100 : 1;
                  case "inject":
                    return t.style.zoom = 1, parseFloat(i) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")"
                  } else switch (e) {
                  case "name":
                    return "opacity";
                  case "extract":
                  case "inject":
                    return i
                  }
                }
              },
              register: function () {
                function e(e, t, i) {
                  if ("border-box" === E.getPropertyValue(t, "boxSizing").toString().toLowerCase() === (i || !1)) {
                    var n, r, o = 0,
                      a = "width" === e ? ["Left", "Right"] : ["Top", "Bottom"],
                      s = ["padding" + a[0], "padding" + a[1], "border" + a[0] + "Width", "border" + a[1] + "Width"];
                    for (n = 0; n < s.length; n++) r = parseFloat(E.getPropertyValue(t, s[n])), isNaN(r) || (o += r);
                    return i ? -o : o
                  }
                  return 0
                }

                function t(t, i) {
                  return function (n, r, o) {
                    switch (n) {
                    case "name":
                      return t;
                    case "extract":
                      return parseFloat(o) + e(t, r, i);
                    case "inject":
                      return parseFloat(o) - e(t, r, i) + "px"
                    }
                  }
                }
                f && !(f > 9) || S.State.isGingerbread || (E.Lists.transformsBase = E.Lists.transformsBase.concat(E.Lists.transforms3D));
                for (var i = 0; i < E.Lists.transformsBase.length; i++) ! function () {
                  var e = E.Lists.transformsBase[i];
                  E.Normalizations.registered[e] = function (t, i, r) {
                    switch (t) {
                    case "name":
                      return "transform";
                    case "extract":
                      return o(i) === n || o(i).transformCache[e] === n ? /^scale/i.test(e) ? 1 : 0 : o(i).transformCache[e].replace(/[()]/g, "");
                    case "inject":
                      var a = !1;
                      switch (e.substr(0, e.length - 1)) {
                      case "translate":
                        a = !/(%|px|em|rem|vw|vh|\d)$/i.test(r);
                        break;
                      case "scal":
                      case "scale":
                        S.State.isAndroid && o(i).transformCache[e] === n && r < 1 && (r = 1), a = !/(\d)$/i.test(r);
                        break;
                      case "skew":
                      case "rotate":
                        a = !/(deg|\d)$/i.test(r)
                      }
                      return a || (o(i).transformCache[e] = "(" + r + ")"), o(i).transformCache[e]
                    }
                  }
                }();
                for (var r = 0; r < E.Lists.colors.length; r++) ! function () {
                  var e = E.Lists.colors[r];
                  E.Normalizations.registered[e] = function (t, i, r) {
                    switch (t) {
                    case "name":
                      return e;
                    case "extract":
                      var o;
                      if (E.RegEx.wrappedValueAlreadyExtracted.test(r)) o = r;
                      else {
                        var a, s = {
                          black: "rgb(0, 0, 0)",
                          blue: "rgb(0, 0, 255)",
                          gray: "rgb(128, 128, 128)",
                          green: "rgb(0, 128, 0)",
                          red: "rgb(255, 0, 0)",
                          white: "rgb(255, 255, 255)"
                        };
                        /^[A-z]+$/i.test(r) ? a = s[r] !== n ? s[r] : s.black : E.RegEx.isHex.test(r) ? a = "rgb(" + E.Values.hexToRgb(r).join(" ") + ")" : /^rgba?\(/i.test(r) || (a = s.black), o = (a || r).toString().match(E.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                      }
                      return (!f || f > 8) && 3 === o.split(" ").length && (o += " 1"), o;
                    case "inject":
                      return /^rgb/.test(r) ? r : (f <= 8 ? 4 === r.split(" ").length && (r = r.split(/\s+/).slice(0, 3).join(" ")) : 3 === r.split(" ").length && (r += " 1"), (f <= 8 ? "rgb" : "rgba") + "(" + r.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")")
                    }
                  }
                }();
                E.Normalizations.registered.innerWidth = t("width", !0), E.Normalizations.registered.innerHeight = t("height", !0), E.Normalizations.registered.outerWidth = t("width"), E.Normalizations.registered.outerHeight = t("height")
              }
            },
            Names: {
              camelCase: function (e) {
                return e.replace(/-(\w)/g, function (e, t) {
                  return t.toUpperCase()
                })
              },
              SVGAttribute: function (e) {
                var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                return (f || S.State.isAndroid && !S.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
              },
              prefixCheck: function (e) {
                if (S.State.prefixMatches[e]) return [S.State.prefixMatches[e], !0];
                for (var t = ["", "Webkit", "Moz", "ms", "O"], i = 0, n = t.length; i < n; i++) {
                  var r;
                  if (r = 0 === i ? e : t[i] + e.replace(/^\w/, function (e) {
                      return e.toUpperCase()
                    }), v.isString(S.State.prefixElement.style[r])) return S.State.prefixMatches[e] = r, [r, !0]
                }
                return [e, !1]
              }
            },
            Values: {
              hexToRgb: function (e) {
                var t;
                return e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, i, n) {
                  return t + t + i + i + n + n
                }), (t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e)) ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
              },
              isCSSNullValue: function (e) {
                return !e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
              },
              getUnitType: function (e) {
                return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
              },
              getDisplayType: function (e) {
                var t = e && e.tagName.toString().toLowerCase();
                return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
              },
              addClass: function (e, t) {
                if (e)
                  if (e.classList) e.classList.add(t);
                  else if (v.isString(e.className)) e.className += (e.className.length ? " " : "") + t;
                else {
                  var i = e.getAttribute(f <= 7 ? "className" : "class") || "";
                  e.setAttribute("class", i + (i ? " " : "") + t)
                }
              },
              removeClass: function (e, t) {
                if (e)
                  if (e.classList) e.classList.remove(t);
                  else if (v.isString(e.className)) e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ");
                else {
                  var i = e.getAttribute(f <= 7 ? "className" : "class") || "";
                  e.setAttribute("class", i.replace(new RegExp("(^|s)" + t.split(" ").join("|") + "(s|$)", "gi"), " "))
                }
              }
            },
            getPropertyValue: function (e, i, r, a) {
              function s(e, i) {
                var r = 0;
                if (f <= 8) r = h.css(e, i);
                else {
                  var l = !1;
                  /^(width|height)$/.test(i) && 0 === E.getPropertyValue(e, "display") && (l = !0, E.setPropertyValue(e, "display", E.Values.getDisplayType(e)));
                  var u, c = function () {
                    l && E.setPropertyValue(e, "display", "none")
                  };
                  if (!a) {
                    if ("height" === i && "border-box" !== E.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                      var d = e.offsetHeight - (parseFloat(E.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(E.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(E.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(E.getPropertyValue(e, "paddingBottom")) || 0);
                      return c(), d
                    }
                    if ("width" === i && "border-box" !== E.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                      var p = e.offsetWidth - (parseFloat(E.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(E.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(E.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(E.getPropertyValue(e, "paddingRight")) || 0);
                      return c(), p
                    }
                  }
                  u = o(e) === n ? t.getComputedStyle(e, null) : o(e).computedStyle ? o(e).computedStyle : o(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === i && (i = "borderTopColor"), "" !== (r = 9 === f && "filter" === i ? u.getPropertyValue(i) : u[i]) && null !== r || (r = e.style[i]), c()
                }
                if ("auto" === r && /^(top|right|bottom|left)$/i.test(i)) {
                  var g = s(e, "position");
                  ("fixed" === g || "absolute" === g && /top|left/i.test(i)) && (r = h(e).position()[i] + "px")
                }
                return r
              }
              var l;
              if (E.Hooks.registered[i]) {
                var u = i,
                  c = E.Hooks.getRoot(u);
                r === n && (r = E.getPropertyValue(e, E.Names.prefixCheck(c)[0])), E.Normalizations.registered[c] && (r = E.Normalizations.registered[c]("extract", e, r)), l = E.Hooks.extractValue(u, r)
              } else if (E.Normalizations.registered[i]) {
                var d, p;
                "transform" !== (d = E.Normalizations.registered[i]("name", e)) && (p = s(e, E.Names.prefixCheck(d)[0]), E.Values.isCSSNullValue(p) && E.Hooks.templates[i] && (p = E.Hooks.templates[i][1])), l = E.Normalizations.registered[i]("extract", e, p)
              }
              if (!/^[\d-]/.test(l)) {
                var g = o(e);
                if (g && g.isSVG && E.Names.SVGAttribute(i))
                  if (/^(height|width)$/i.test(i)) try {
                    l = e.getBBox()[i]
                  } catch (e) {
                    l = 0
                  } else l = e.getAttribute(i);
                  else l = s(e, E.Names.prefixCheck(i)[0])
              }
              return E.Values.isCSSNullValue(l) && (l = 0), S.debug, l
            },
            setPropertyValue: function (e, i, n, r, a) {
              var s = i;
              if ("scroll" === i) a.container ? a.container["scroll" + a.direction] = n : "Left" === a.direction ? t.scrollTo(n, a.alternateValue) : t.scrollTo(a.alternateValue, n);
              else if (E.Normalizations.registered[i] && "transform" === E.Normalizations.registered[i]("name", e)) E.Normalizations.registered[i]("inject", e, n), s = "transform", n = o(e).transformCache[i];
              else {
                if (E.Hooks.registered[i]) {
                  var l = i,
                    u = E.Hooks.getRoot(i);
                  r = r || E.getPropertyValue(e, u), n = E.Hooks.injectValue(l, n, r), i = u
                }
                if (E.Normalizations.registered[i] && (n = E.Normalizations.registered[i]("inject", e, n), i = E.Normalizations.registered[i]("name", e)), s = E.Names.prefixCheck(i)[0], f <= 8) try {
                  e.style[s] = n
                } catch (e) {
                  S.debug
                } else {
                  var c = o(e);
                  c && c.isSVG && E.Names.SVGAttribute(i) ? e.setAttribute(i, n) : e.style[s] = n
                }
                S.debug
              }
              return [s, n]
            },
            flushTransformCache: function (e) {
              var t = "",
                i = o(e);
              if ((f || S.State.isAndroid && !S.State.isChrome) && i && i.isSVG) {
                var n = function (t) {
                    return parseFloat(E.getPropertyValue(e, t))
                  },
                  r = {
                    translate: [n("translateX"), n("translateY")],
                    skewX: [n("skewX")],
                    skewY: [n("skewY")],
                    scale: 1 !== n("scale") ? [n("scale"), n("scale")] : [n("scaleX"), n("scaleY")],
                    rotate: [n("rotateZ"), 0, 0]
                  };
                h.each(o(e).transformCache, function (e) {
                  /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), r[e] && (t += e + "(" + r[e].join(" ") + ") ", delete r[e])
                })
              } else {
                var a, s;
                h.each(o(e).transformCache, function (i) {
                  if (a = o(e).transformCache[i], "transformPerspective" === i) return s = a, !0;
                  9 === f && "rotateZ" === i && (i = "rotate"), t += i + a + " "
                }), s && (t = "perspective" + s + " " + t)
              }
              E.setPropertyValue(e, "transform", t)
            }
          };
          E.Hooks.register(), E.Normalizations.register(), S.hook = function (e, t, i) {
            var a;
            return e = r(e), h.each(e, function (e, r) {
              if (o(r) === n && S.init(r), i === n) a === n && (a = E.getPropertyValue(r, t));
              else {
                var s = E.setPropertyValue(r, t, i);
                "transform" === s[0] && S.CSS.flushTransformCache(r), a = s
              }
            }), a
          };
          var P = function () {
            function e() {
              return p ? k.promise || null : g
            }

            function l(e, r) {
              function a(a) {
                var f, p;
                if (l.begin && 0 === F) try {
                  l.begin.call(b, b)
                } catch (e) {
                  setTimeout(function () {
                    throw e
                  }, 1)
                }
                if ("scroll" === V) {
                  var g, m, w, P = /^x$/i.test(l.axis) ? "Left" : "Top",
                    C = parseFloat(l.offset) || 0;
                  l.container ? v.isWrapped(l.container) || v.isNode(l.container) ? (l.container = l.container[0] || l.container, w = (g = l.container["scroll" + P]) + h(e).position()[P.toLowerCase()] + C) : l.container = null : (g = S.State.scrollAnchor[S.State["scrollProperty" + P]], m = S.State.scrollAnchor[S.State["scrollProperty" + ("Left" === P ? "Top" : "Left")]], w = h(e).offset()[P.toLowerCase()] + C), d = {
                    scroll: {
                      rootPropertyValue: !1,
                      startValue: g,
                      currentValue: g,
                      endValue: w,
                      unitType: "",
                      easing: l.easing,
                      scrollData: {
                        container: l.container,
                        direction: P,
                        alternateValue: m
                      }
                    },
                    element: e
                  }, S.debug && d.scroll
                } else if ("reverse" === V) {
                  if (!(f = o(e))) return;
                  if (!f.tweensContainer) return void h.dequeue(e, l.queue);
                  for (var N in "none" === f.opts.display && (f.opts.display = "auto"), "hidden" === f.opts.visibility && (f.opts.visibility = "visible"), f.opts.loop = !1, f.opts.begin = null, f.opts.complete = null, T.easing || delete l.easing, T.duration || delete l.duration, l = h.extend({}, f.opts, l), p = h.extend(!0, {}, f ? f.tweensContainer : null))
                    if (p.hasOwnProperty(N) && "element" !== N) {
                      var L = p[N].startValue;
                      p[N].startValue = p[N].currentValue = p[N].endValue, p[N].endValue = L, v.isEmptyObject(T) || (p[N].easing = l.easing), S.debug && JSON.stringify(p[N])
                    }
                  d = p
                } else if ("start" === V) {
                  (f = o(e)) && f.tweensContainer && !0 === f.isAnimating && (p = f.tweensContainer);
                  var O = function (r, o) {
                    var a, u = E.Hooks.getRoot(r),
                      c = !1,
                      g = o[0],
                      m = o[1],
                      y = o[2];
                    if (f && f.isSVG || "tween" === u || !1 !== E.Names.prefixCheck(u)[1] || E.Normalizations.registered[u] !== n) {
                      (l.display !== n && null !== l.display && "none" !== l.display || l.visibility !== n && "hidden" !== l.visibility) && /opacity|filter/.test(r) && !y && 0 !== g && (y = 0), l._cacheValues && p && p[r] ? (y === n && (y = p[r].endValue + p[r].unitType), c = f.rootPropertyValueCache[u]) : E.Hooks.registered[r] ? y === n ? (c = E.getPropertyValue(e, u), y = E.getPropertyValue(e, r, c)) : c = E.Hooks.templates[u][1] : y === n && (y = E.getPropertyValue(e, r));
                      var b, w, x, T = !1,
                        P = function (e, t) {
                          var i, n;
                          return n = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (e) {
                            return i = e, ""
                          }), i || (i = E.Values.getUnitType(e)), [n, i]
                        };
                      if (y !== g && v.isString(y) && v.isString(g)) {
                        a = "";
                        var C = 0,
                          k = 0,
                          V = [],
                          A = [],
                          F = 0,
                          N = 0,
                          L = 0;
                        for (y = E.Hooks.fixColors(y), g = E.Hooks.fixColors(g); C < y.length && k < g.length;) {
                          var O = y[C],
                            _ = g[k];
                          if (/[\d\.-]/.test(O) && /[\d\.-]/.test(_)) {
                            for (var M = O, B = _, H = ".", q = "."; ++C < y.length;) {
                              if ((O = y[C]) === H) H = "..";
                              else if (!/\d/.test(O)) break;
                              M += O
                            }
                            for (; ++k < g.length;) {
                              if ((_ = g[k]) === q) q = "..";
                              else if (!/\d/.test(_)) break;
                              B += _
                            }
                            var R = E.Hooks.getUnit(y, C),
                              I = E.Hooks.getUnit(g, k);
                            if (C += R.length, k += I.length, R === I) M === B ? a += M + R : (a += "{" + V.length + (N ? "!" : "") + "}" + R, V.push(parseFloat(M)), A.push(parseFloat(B)));
                            else {
                              var z = parseFloat(M),
                                U = parseFloat(B);
                              a += (F < 5 ? "calc" : "") + "(" + (z ? "{" + V.length + (N ? "!" : "") + "}" : "0") + R + " + " + (U ? "{" + (V.length + (z ? 1 : 0)) + (N ? "!" : "") + "}" : "0") + I + ")", z && (V.push(z), A.push(0)), U && (V.push(0), A.push(U))
                            }
                          } else {
                            if (O !== _) {
                              F = 0;
                              break
                            }
                            a += O, C++, k++, 0 === F && "c" === O || 1 === F && "a" === O || 2 === F && "l" === O || 3 === F && "c" === O || F >= 4 && "(" === O ? F++ : (F && F < 5 || F >= 4 && ")" === O && --F < 5) && (F = 0), 0 === N && "r" === O || 1 === N && "g" === O || 2 === N && "b" === O || 3 === N && "a" === O || N >= 3 && "(" === O ? (3 === N && "a" === O && (L = 1), N++) : L && "," === O ? ++L > 3 && (N = L = 0) : (L && N < (L ? 5 : 4) || N >= (L ? 4 : 3) && ")" === O && --N < (L ? 5 : 4)) && (N = L = 0)
                          }
                        }
                        C === y.length && k === g.length || (S.debug, a = n), a && (V.length ? (S.debug, y = V, g = A, w = x = "") : a = n)
                      }
                      if (a || (y = (b = P(r, y))[0], x = b[1], g = (b = P(r, g))[0].replace(/^([+-\/*])=/, function (e, t) {
                          return T = t, ""
                        }), w = b[1], y = parseFloat(y) || 0, g = parseFloat(g) || 0, "%" === w && (/^(fontSize|lineHeight)$/.test(r) ? (g /= 100, w = "em") : /^scale/.test(r) ? (g /= 100, w = "") : /(Red|Green|Blue)$/i.test(r) && (g = g / 100 * 255, w = ""))), /[\/*]/.test(T)) w = x;
                      else if (x !== w && 0 !== y)
                        if (0 === g) w = x;
                        else {
                          s = s || function () {
                            var n = {
                                myParent: e.parentNode || i.body,
                                position: E.getPropertyValue(e, "position"),
                                fontSize: E.getPropertyValue(e, "fontSize")
                              },
                              r = n.position === j.lastPosition && n.myParent === j.lastParent,
                              o = n.fontSize === j.lastFontSize;
                            j.lastParent = n.myParent, j.lastPosition = n.position, j.lastFontSize = n.fontSize;
                            var a = {};
                            if (o && r) a.emToPx = j.lastEmToPx, a.percentToPxWidth = j.lastPercentToPxWidth, a.percentToPxHeight = j.lastPercentToPxHeight;
                            else {
                              var s = f && f.isSVG ? i.createElementNS("http://www.w3.org/2000/svg", "rect") : i.createElement("div");
                              S.init(s), n.myParent.appendChild(s), h.each(["overflow", "overflowX", "overflowY"], function (e, t) {
                                S.CSS.setPropertyValue(s, t, "hidden")
                              }), S.CSS.setPropertyValue(s, "position", n.position), S.CSS.setPropertyValue(s, "fontSize", n.fontSize), S.CSS.setPropertyValue(s, "boxSizing", "content-box"), h.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (e, t) {
                                S.CSS.setPropertyValue(s, t, "100%")
                              }), S.CSS.setPropertyValue(s, "paddingLeft", "100em"), a.percentToPxWidth = j.lastPercentToPxWidth = (parseFloat(E.getPropertyValue(s, "width", null, !0)) || 1) / 100, a.percentToPxHeight = j.lastPercentToPxHeight = (parseFloat(E.getPropertyValue(s, "height", null, !0)) || 1) / 100, a.emToPx = j.lastEmToPx = (parseFloat(E.getPropertyValue(s, "paddingLeft")) || 1) / 100, n.myParent.removeChild(s)
                            }
                            return null === j.remToPx && (j.remToPx = parseFloat(E.getPropertyValue(i.body, "fontSize")) || 16), null === j.vwToPx && (j.vwToPx = parseFloat(t.innerWidth) / 100, j.vhToPx = parseFloat(t.innerHeight) / 100), a.remToPx = j.remToPx, a.vwToPx = j.vwToPx, a.vhToPx = j.vhToPx, S.debug >= 1 && JSON.stringify(a), a
                          }();
                          var W = /margin|padding|left|right|width|text|word|letter/i.test(r) || /X$/.test(r) || "x" === r ? "x" : "y";
                          switch (x) {
                          case "%":
                            y *= "x" === W ? s.percentToPxWidth : s.percentToPxHeight;
                            break;
                          case "px":
                            break;
                          default:
                            y *= s[x + "ToPx"]
                          }
                          switch (w) {
                          case "%":
                            y *= 1 / ("x" === W ? s.percentToPxWidth : s.percentToPxHeight);
                            break;
                          case "px":
                            break;
                          default:
                            y *= 1 / s[w + "ToPx"]
                          }
                        }
                      switch (T) {
                      case "+":
                        g = y + g;
                        break;
                      case "-":
                        g = y - g;
                        break;
                      case "*":
                        g *= y;
                        break;
                      case "/":
                        g = y / g
                      }
                      d[r] = {
                        rootPropertyValue: c,
                        startValue: y,
                        currentValue: y,
                        endValue: g,
                        unitType: w,
                        easing: m
                      }, a && (d[r].pattern = a), S.debug && JSON.stringify(d[r])
                    } else S.debug
                  };
                  for (var _ in x)
                    if (x.hasOwnProperty(_)) {
                      var M = E.Names.camelCase(_),
                        B = function (t, i) {
                          var n, o, a;
                          return v.isFunction(t) && (t = t.call(e, r, A)), v.isArray(t) ? (n = t[0], !v.isArray(t[1]) && /^[\d-]/.test(t[1]) || v.isFunction(t[1]) || E.RegEx.isHex.test(t[1]) ? a = t[1] : v.isString(t[1]) && !E.RegEx.isHex.test(t[1]) && S.Easings[t[1]] || v.isArray(t[1]) ? (o = u(t[1], l.duration), a = t[2]) : a = t[1] || t[2]) : n = t, o = o || l.easing, v.isFunction(n) && (n = n.call(e, r, A)), v.isFunction(a) && (a = a.call(e, r, A)), [n || 0, o, a]
                        }(x[_]);
                      if (y(E.Lists.colors, M)) {
                        var q = B[0],
                          R = B[1],
                          I = B[2];
                        if (E.RegEx.isHex.test(q)) {
                          for (var z = ["Red", "Green", "Blue"], U = E.Values.hexToRgb(q), W = I ? E.Values.hexToRgb(I) : n, $ = 0; $ < z.length; $++) {
                            var D = [U[$]];
                            R && D.push(R), W !== n && D.push(W[$]), O(M + z[$], D)
                          }
                          continue
                        }
                      }
                      O(M, B)
                    }
                  d.element = e
                }
                d.element && (E.Values.addClass(e, "velocity-animating"), H.push(d), (f = o(e)) && ("" === l.queue && (f.tweensContainer = d, f.opts = l), f.isAnimating = !0), F === A - 1 ? (S.State.calls.push([H, b, l, null, k.resolver, null, 0]), !1 === S.State.isTicking && (S.State.isTicking = !0, c())) : F++)
              }
              var s, l = h.extend({}, S.defaults, T),
                d = {};
              switch (o(e) === n && S.init(e), parseFloat(l.delay) && !1 !== l.queue && h.queue(e, l.queue, function (t, i) {
                if (!0 === i) return !0;
                S.velocityQueueEntryFlag = !0;
                var n = S.State.delayedElements.count++;
                S.State.delayedElements[n] = e;
                var r = function (e) {
                  return function () {
                    S.State.delayedElements[e] = !1, t()
                  }
                }(n);
                o(e).delayBegin = (new Date).getTime(), o(e).delay = parseFloat(l.delay), o(e).delayTimer = {
                  setTimeout: setTimeout(t, parseFloat(l.delay)),
                  next: r
                }
              }), l.duration.toString().toLowerCase()) {
              case "fast":
                l.duration = 200;
                break;
              case "normal":
                l.duration = w;
                break;
              case "slow":
                l.duration = 600;
                break;
              default:
                l.duration = parseFloat(l.duration) || 1
              }
              if (!1 !== S.mock && (!0 === S.mock ? l.duration = l.delay = 1 : (l.duration *= parseFloat(S.mock) || 1, l.delay *= parseFloat(S.mock) || 1)), l.easing = u(l.easing, l.duration), l.begin && !v.isFunction(l.begin) && (l.begin = null), l.progress && !v.isFunction(l.progress) && (l.progress = null), l.complete && !v.isFunction(l.complete) && (l.complete = null), l.display !== n && null !== l.display && (l.display = l.display.toString().toLowerCase(), "auto" === l.display && (l.display = S.CSS.Values.getDisplayType(e))), l.visibility !== n && null !== l.visibility && (l.visibility = l.visibility.toString().toLowerCase()), l.mobileHA = l.mobileHA && S.State.isMobile && !S.State.isGingerbread, !1 === l.queue)
                if (l.delay) {
                  var f = S.State.delayedElements.count++;
                  S.State.delayedElements[f] = e;
                  var p = function (e) {
                    return function () {
                      S.State.delayedElements[e] = !1, a()
                    }
                  }(f);
                  o(e).delayBegin = (new Date).getTime(), o(e).delay = parseFloat(l.delay), o(e).delayTimer = {
                    setTimeout: setTimeout(a, parseFloat(l.delay)),
                    next: p
                  }
                } else a();
              else h.queue(e, l.queue, function (e, t) {
                if (!0 === t) return k.promise && k.resolver(b), !0;
                S.velocityQueueEntryFlag = !0, a()
              });
              "" !== l.queue && "fx" !== l.queue || "inprogress" === h.queue(e)[0] || h.dequeue(e)
            }
            var f, p, g, m, b, x, T, C = arguments[0] && (arguments[0].p || h.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || v.isString(arguments[0].properties));
            v.isWrapped(this) ? (p = !1, m = 0, b = this, g = this) : (p = !0, m = 1, b = C ? arguments[0].elements || arguments[0].e : arguments[0]);
            var k = {
              promise: null,
              resolver: null,
              rejecter: null
            };
            if (p && S.Promise && (k.promise = new S.Promise(function (e, t) {
                k.resolver = e, k.rejecter = t
              })), C ? (x = arguments[0].properties || arguments[0].p, T = arguments[0].options || arguments[0].o) : (x = arguments[m], T = arguments[m + 1]), b = r(b)) {
              var V, A = b.length,
                F = 0;
              if (!/^(stop|finish|finishAll|pause|resume)$/i.test(x) && !h.isPlainObject(T)) {
                T = {};
                for (var N = m + 1; N < arguments.length; N++) v.isArray(arguments[N]) || !/^(fast|normal|slow)$/i.test(arguments[N]) && !/^\d/.test(arguments[N]) ? v.isString(arguments[N]) || v.isArray(arguments[N]) ? T.easing = arguments[N] : v.isFunction(arguments[N]) && (T.complete = arguments[N]) : T.duration = arguments[N]
              }
              switch (x) {
              case "scroll":
                V = "scroll";
                break;
              case "reverse":
                V = "reverse";
                break;
              case "pause":
                var L = (new Date).getTime();
                return h.each(b, function (e, t) {
                  a(t, L)
                }), h.each(S.State.calls, function (e, t) {
                  var i = !1;
                  t && h.each(t[1], function (e, r) {
                    var o = T === n ? "" : T;
                    return !0 !== o && t[2].queue !== o && (T !== n || !1 !== t[2].queue) || (h.each(b, function (e, n) {
                      if (n === r) return t[5] = {
                        resume: !1
                      }, i = !0, !1
                    }), !i && undefined)
                  })
                }), e();
              case "resume":
                return h.each(b, function (e, t) {
                  s(t)
                }), h.each(S.State.calls, function (e, t) {
                  var i = !1;
                  t && h.each(t[1], function (e, r) {
                    var o = T === n ? "" : T;
                    return !0 !== o && t[2].queue !== o && (T !== n || !1 !== t[2].queue) || !t[5] || (h.each(b, function (e, n) {
                      if (n === r) return t[5].resume = !0, i = !0, !1
                    }), !i && undefined)
                  })
                }), e();
              case "finish":
              case "finishAll":
              case "stop":
                h.each(b, function (e, t) {
                  o(t) && o(t).delayTimer && (clearTimeout(o(t).delayTimer.setTimeout), o(t).delayTimer.next && o(t).delayTimer.next(), delete o(t).delayTimer), "finishAll" !== x || !0 !== T && !v.isString(T) || (h.each(h.queue(t, v.isString(T) ? T : ""), function (e, t) {
                    v.isFunction(t) && t()
                  }), h.queue(t, v.isString(T) ? T : "", []))
                });
                var O = [];
                return h.each(S.State.calls, function (e, t) {
                  t && h.each(t[1], function (i, r) {
                    var a = T === n ? "" : T;
                    if (!0 !== a && t[2].queue !== a && (T !== n || !1 !== t[2].queue)) return !0;
                    h.each(b, function (i, n) {
                      if (n === r)
                        if ((!0 === T || v.isString(T)) && (h.each(h.queue(n, v.isString(T) ? T : ""), function (e, t) {
                            v.isFunction(t) && t(null, !0)
                          }), h.queue(n, v.isString(T) ? T : "", [])), "stop" === x) {
                          var s = o(n);
                          s && s.tweensContainer && (!0 === a || "" === a) && h.each(s.tweensContainer, function (e, t) {
                            t.endValue = t.currentValue
                          }), O.push(e)
                        } else "finish" !== x && "finishAll" !== x || (t[2].duration = 1)
                    })
                  })
                }), "stop" === x && (h.each(O, function (e, t) {
                  d(t, !0)
                }), k.promise && k.resolver(b)), e();
              default:
                if (!h.isPlainObject(x) || v.isEmptyObject(x)) {
                  if (v.isString(x) && S.Redirects[x]) {
                    var _ = (f = h.extend({}, T)).duration,
                      M = f.delay || 0;
                    return !0 === f.backwards && (b = h.extend(!0, [], b).reverse()), h.each(b, function (e, t) {
                      parseFloat(f.stagger) ? f.delay = M + parseFloat(f.stagger) * e : v.isFunction(f.stagger) && (f.delay = M + f.stagger.call(t, e, A)), f.drag && (f.duration = parseFloat(_) || (/^(callout|transition)/.test(x) ? 1e3 : w), f.duration = Math.max(f.duration * (f.backwards ? 1 - e / A : (e + 1) / A), .75 * f.duration, 200)), S.Redirects[x].call(t, t, f || {}, e, A, b, k.promise ? k : n)
                    }), e()
                  }
                  var B = "Velocity: First argument (" + x + ") was not a property map, a known action, or a registered redirect. Aborting.";
                  return k.promise ? k.rejecter(new Error(B)) : t.console, e()
                }
                V = "start"
              }
              var j = {
                  lastParent: null,
                  lastPosition: null,
                  lastFontSize: null,
                  lastPercentToPxWidth: null,
                  lastPercentToPxHeight: null,
                  lastEmToPx: null,
                  remToPx: null,
                  vwToPx: null,
                  vhToPx: null
                },
                H = [];
              h.each(b, function (e, t) {
                v.isNode(t) && l(t, e)
              }), (f = h.extend({}, S.defaults, T)).loop = parseInt(f.loop, 10);
              var q = 2 * f.loop - 1;
              if (f.loop)
                for (var R = 0; R < q; R++) {
                  var I = {
                    delay: f.delay,
                    progress: f.progress
                  };
                  R === q - 1 && (I.display = f.display, I.visibility = f.visibility, I.complete = f.complete), P(b, "reverse", I)
                }
              return e()
            }
            k.promise && (x && T && !1 === T.promiseRejectEmpty ? k.resolver() : k.rejecter())
          };
          (S = h.extend(P, S)).animate = P;
          var C = t.requestAnimationFrame || p;
          if (!S.State.isMobile && i.hidden !== n) {
            var k = function () {
              i.hidden ? (C = function (e) {
                return setTimeout(function () {
                  e(!0)
                }, 16)
              }, c()) : C = t.requestAnimationFrame || p
            };
            k(), i.addEventListener("visibilitychange", k)
          }
          return e.Velocity = S, e !== t && (e.fn.velocity = P, e.fn.velocity.defaults = S.defaults), h.each(["Down", "Up"], function (e, t) {
            S.Redirects["slide" + t] = function (e, i, r, o, a, s) {
              var l = h.extend({}, i),
                u = l.begin,
                c = l.complete,
                d = {},
                f = {
                  height: "",
                  marginTop: "",
                  marginBottom: "",
                  paddingTop: "",
                  paddingBottom: ""
                };
              l.display === n && (l.display = "Down" === t ? "inline" === S.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function () {
                for (var i in 0 === r && u && u.call(a, a), f)
                  if (f.hasOwnProperty(i)) {
                    d[i] = e.style[i];
                    var n = E.getPropertyValue(e, i);
                    f[i] = "Down" === t ? [n, 0] : [0, n]
                  }
                d.overflow = e.style.overflow, e.style.overflow = "hidden"
              }, l.complete = function () {
                for (var t in d) d.hasOwnProperty(t) && (e.style[t] = d[t]);
                r === o - 1 && (c && c.call(a, a), s && s.resolver(a))
              }, S(e, f, l)
            }
          }), h.each(["In", "Out"], function (e, t) {
            S.Redirects["fade" + t] = function (e, i, r, o, a, s) {
              var l = h.extend({}, i),
                u = l.complete,
                c = {
                  opacity: "In" === t ? 1 : 0
                };
              0 !== r && (l.begin = null), l.complete = r !== o - 1 ? null : function () {
                u && u.call(a, a), s && s.resolver(a)
              }, l.display === n && (l.display = "In" === t ? "auto" : "none"), S(this, c, l)
            }
          }), S
        }
        jQuery.fn.velocity = jQuery.fn.animate
      }(window.jQuery || window.Zepto || window, window, window ? window.document : undefined)
    })
  }, function (e, t) {
    var i, n, r = e.exports = {};

    function o() {
      throw new Error("setTimeout has not been defined")
    }

    function a() {
      throw new Error("clearTimeout has not been defined")
    }

    function s(e) {
      if (i === setTimeout) return setTimeout(e, 0);
      if ((i === o || !i) && setTimeout) return i = setTimeout, setTimeout(e, 0);
      try {
        return i(e, 0)
      } catch (t) {
        try {
          return i.call(null, e, 0)
        } catch (t) {
          return i.call(this, e, 0)
        }
      }
    }! function () {
      try {
        i = "function" == typeof setTimeout ? setTimeout : o
      } catch (e) {
        i = o
      }
      try {
        n = "function" == typeof clearTimeout ? clearTimeout : a
      } catch (e) {
        n = a
      }
    }();
    var l, u = [],
      c = !1,
      d = -1;

    function h() {
      c && l && (c = !1, l.length ? u = l.concat(u) : d = -1, u.length && f())
    }

    function f() {
      if (!c) {
        var e = s(h);
        c = !0;
        for (var t = u.length; t;) {
          for (l = u, u = []; ++d < t;) l && l[d].run();
          d = -1, t = u.length
        }
        l = null, c = !1,
          function (e) {
            if (n === clearTimeout) return clearTimeout(e);
            if ((n === a || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
            try {
              n(e)
            } catch (t) {
              try {
                return n.call(null, e)
              } catch (t) {
                return n.call(this, e)
              }
            }
          }(e)
      }
    }

    function p(e, t) {
      this.fun = e, this.array = t
    }

    function g() {}
    r.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
      u.push(new p(e, t)), 1 !== u.length || c || s(f)
    }, p.prototype.run = function () {
      this.fun.apply(null, this.array)
    }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = g, r.addListener = g, r.once = g, r.off = g, r.removeListener = g, r.removeAllListeners = g, r.emit = g, r.prependListener = g, r.prependOnceListener = g, r.listeners = function (e) {
      return []
    }, r.binding = function (e) {
      throw new Error("process.binding is not supported")
    }, r.cwd = function () {
      return "/"
    }, r.chdir = function (e) {
      throw new Error("process.chdir is not supported")
    }, r.umask = function () {
      return 0
    }
  }, function (e, t) {
    var i;
    i = function () {
      return this
    }();
    try {
      i = i || Function("return this")() || (0, eval)("this")
    } catch (e) {
      "object" == typeof window && (i = window)
    }
    e.exports = i
  }, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(0),
      r = i.n(n),
      o = function () {
        function e(e) {
          this.isEnable = !1, this.hash = e, this.scrollTopDiffSpace = 0, this.handleLoadBind = this.handleLoad.bind(this), "string" == typeof this.hash && (this.isEnable = !0)
        }
        var t = e.prototype;
        return t.bind = function () {
          this.isEnable && window.addEventListener("load", this.handleLoadBind, !!r.a && {
            passive: !1,
            once: !0
          })
        }, t.unbind = function () {
          window.removeEventListener("load", this.handleLoadBind, !!r.a && {
            passive: !1,
            once: !0
          })
        }, t.setShiftPixel = function (e) {
          "number" == typeof e && (this.scrollTopDiffSpace = e)
        }, t.handleLoad = function () {
          var t = this;
          if (this.isEnable) {
            this.targetEl = document.getElementById(this.hash.replace(/^#/, ""));
            var i = document.querySelector("#sbg-appshell-v1-header").getBoundingClientRect().height;
            null !== this.targetEl && setTimeout(function () {
              e.scrollTo(t.targetEl, i + t.scrollTopDiffSpace)
            }, 0)
          }
          this.unbind()
        }, e.scrollTo = function (e, t) {
          undefined === t && (t = 0);
          var i = e.getBoundingClientRect().top - t;
          window.scrollBy(0, i)
        }, e
      }(),
      a = i(1),
      s = i.n(a).a.Promise,
      l = window.Velocity,
      u = i(2),
      c = i.n(u);
    l ? window.Velocity = l : delete window.Velocity;
    var d, h = c.a,
      f = function () {
        function e() {
          this.el = document.querySelector("#sbg-appshell-v1-header-info"), null === this.el ? this.isExist = !1 : this.isExist = !0
        }
        var t = e.prototype;
        return t.open = function (e) {
          var t = this,
            i = window.getComputedStyle(this.el).height;
          this.el.style.height = "auto";
          var n = window.getComputedStyle(this.el).height;
          return this.el.style.height = i, new s(function (i) {
            h(t.el, "stop"), h(t.el, {
              height: n
            }, {
              duration: e || 300,
              easing: "ease-out",
              complete: function () {
                i()
              }
            })
          })
        }, t.immediateOpen = function () {
          this.el.style.height = "auto"
        }, t.close = function (e) {
          var t = this;
          return new s(function (i) {
            h(t.el, "stop"), h(t.el, {
              height: 0
            }, {
              duration: e || 300,
              easing: "ease-out",
              complete: function () {
                i()
              }
            })
          })
        }, e
      }();
    "function" != typeof window.CustomEvent ? (d = function (e, t) {
      undefined === t && (t = {
        bubbles: !1,
        cancelable: !1,
        detail: undefined
      });
      var i = t.bubbles || !1,
        n = t.cancelable || !1,
        r = t.detail || undefined;
      t.bubbles && delete t.bubbles, t.cancelable && delete t.cancelable;
      var o = document.createEvent("CustomEvent");
      return o.initCustomEvent(e, i, n, r), o
    }).prototype = window.Event.prototype : d = window.CustomEvent;
    var p, g = d,
      m = ((p = document.createElement("div")).style.position = "-webkit-sticky", p.style.position = "sticky", !!p.style.position);

    function y(e) {
      if (undefined === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }
    var v = function (e) {
        var t, i;

        function n() {
          var t;
          return (t = e.call(this) || this).el = document.querySelector("#sbg-appshell-v1-header-fixed-area .sbg-appshell-v1-header-fixed-area_inner"), t.setFixedItem(t.el), t.setContainer(document.querySelector("#sbg-appshell-v1-header-fixed-area")), t.buttonMenu = t.el.querySelector('[data-sbg-appshell-v1-button="category-menu"]'), t.className.fixed = "sbg-appshell-v1-header-fixed-area--fixed", t.className.animate = "sbg-appshell-v1-header-fixed-area--animate", t.className.sticky = "sbg-appshell-v1-header-fixed-area--sticky", t.buttonClassName = {
            open: "sbg-appshell-v1-header_menu-button--open",
            close: "sbg-appshell-v1-header_menu-button--close"
          }, t.EVENT = {
            BUTTON_MENU_CLICK: "BUTTON_MENU_CLICK"
          }, t.EVENT_OBJECT = {}, Object.keys(t.EVENT).forEach(function (e) {
            t.EVENT_OBJECT[e] = new g(t.EVENT[e], {
              bubbles: !0,
              detail: undefined
            })
          }), t.handleClickMenuBind = t.handleClickMenu.bind(y(y(t))), t.isAutoFixedMode = !0, t.isFixedMode = !1, t.isSupportSticky && t.container.classList.add(t.className.sticky), t
        }
        i = e, (t = n).prototype = Object.create(i.prototype), t.prototype.constructor = t, t.__proto__ = i;
        var o = n.prototype;
        return o.bind = function () {
          this.stickyViewBind(), this.buttonMenu.addEventListener("click", this.handleClickMenuBind, !!r.a && {
            passive: !0,
            once: !1
          })
        }, o.unbind = function () {
          this.stickyViewUnbind(), this.buttonMenu.removeEventListener("click", this.handleClickMenuBind, !!r.a && {
            passive: !0,
            once: !1
          })
        }, o.stickyViewBind = function () {
          e.prototype.bind.call(this)
        }, o.stickyViewUnbind = function () {
          e.prototype.unbind.call(this)
        }, o.handleClickMenu = function () {
          this.menuToggle()
        }, o.menuToggle = function () {
          this.buttonMenu.dispatchEvent(this.EVENT_OBJECT.BUTTON_MENU_CLICK)
        }, o.useFixedMode = function () {
          var e = this;
          this.isAutoFixedMode = !1, this.isFixedMode = !0, this.buttonMenu.classList.remove(this.buttonClassName.close), this.buttonMenu.classList.add(this.buttonClassName.open), "fixed" !== window.getComputedStyle(this.fixedItem).position && (this.fixedItem.style.top = this.fixedItem.getBoundingClientRect().top + "px", this.positionFixed());
          var t;
          return 0 !== this.fixedItem.getBoundingClientRect().top ? t = new s(function (t) {
            h(e.fixedItem, "stop"), h(e.fixedItem, {
              top: 0
            }, {
              duration: 300,
              easing: "ease-out",
              complete: function () {
                t()
              }
            })
          }) : (this.container.classList.add(this.className.animate), t = new s(function (t) {
            setTimeout(function () {
              e.container.classList.remove(e.className.animate), t()
            }, 300)
          })), t
        }, o.useAutoFixedMode = function (e) {
          var t = this;
          return this.isAutoFixedMode = !0, this.isFixedMode = !1, this.buttonMenu.classList.remove(this.buttonClassName.open), this.buttonMenu.classList.add(this.buttonClassName.close), new s(function (i) {
            h(t.fixedItem, "stop"), h(t.fixedItem, {
              top: e
            }, {
              duration: 300,
              easing: "ease-out",
              complete: function () {
                var e = t.fixedItem.getAttribute("style").replace(/(\s|^)top\s*:\s*[^;]*;/, "");
                "" === e ? t.fixedItem.removeAttribute("style") : t.fixedItem.setAttribute("style", e), i()
              }
            })
          })
        }, o.useStaticMode = function () {
          this.fixedItem.style.position = "static"
        }, o.forceFixed = function (e) {
          this.fixedItem.style.top = parseFloat(e, 10) + "px"
        }, n
      }(function () {
        function e(e, t) {
          t && this.setFixedItem(t), e && this.setContainer(e), this.handleScrollBind = this.handleScroll.bind(this), this.scrollingElement = "scrollingElement" in document ? document.scrollingElement : -1 != navigator.userAgent.indexOf("WebKit") ? document.body : document.documentElement, this.isFixed = !1, this.isSupportSticky = m, this.className = {
            fixed: "fixed"
          }
        }
        var t = e.prototype;
        return t.setFixedItem = function (e) {
          this.fixedItem = e
        }, t.setContainer = function (e) {
          this.container = e
        }, t.bind = function () {
          this.isSupportSticky || window.addEventListener("scroll", this.handleScrollBind, !!r.a && {
            passive: !0,
            once: !1
          })
        }, t.unbind = function () {
          this.isSupportSticky || window.addEventListener("scroll", this.handleScrollBind, !!r.a && {
            passive: !0,
            once: !1
          })
        }, t.handleScroll = function () {
          this.updateMode()
        }, t.updateMode = function () {
          if (this.container.getBoundingClientRect().top < 0) {
            if (this.isFixed) return;
            this.isFixed = !0, this.positionFixed()
          } else {
            if (!this.isFixed) return;
            this.isFixed = !1, this.positionStatic()
          }
        }, t.positionFixed = function () {
          this.container.style.height = this.fixedItem.getBoundingClientRect().height + "px", this.container.classList.add(this.className.fixed)
        }, t.positionStatic = function () {
          this.container.style.height = "auto", this.container.classList.remove(this.className.fixed)
        }, e
      }()),
      b = function () {
        function e() {
          this.el = document.querySelector("#sbg-appshell-v1-contents"), this.className = {
            invisible: "sbg-appshell-v1-contents--invisible"
          }, this.show()
        }
        var t = e.prototype;
        return t.bind = function () {}, t.unbind = function () {}, t.hide = function () {
          this.el.classList.add(this.className.invisible)
        }, t.show = function () {
          this.el.classList.remove(this.className.invisible)
        }, e
      }(),
      w = function () {
        function e() {
          this.el = document.querySelector("#sbg-appshell-v1-category-footer"), this.className = {
            invisible: "sbg-appshell-v1-category-footer--invisible"
          }, null !== this.el ? (this.isExist = !0, this.show()) : this.isExist = !1
        }
        var t = e.prototype;
        return t.bind = function () {}, t.unbind = function () {}, t.hide = function () {
          this.el.classList.add(this.className.invisible)
        }, t.show = function () {
          this.el.classList.remove(this.className.invisible)
        }, e
      }(),
      x = function () {
        function e() {
          this.el = document.querySelector("#sbg-appshell-v1-menu"), this.className = {
            show: "sbg-appshell-v1-menu--show",
            hide: "sbg-appshell-v1-menu--hide"
          }, this.hide()
        }
        var t = e.prototype;
        return t.useStaticMode = function () {
          this.el.style.position = "static", this.el.style.top = "auto"
        }, t.useFixedMode = function (e) {
          this.el.style.top = parseInt(e, 10) + this.el.getBoundingClientRect().top + "px", this.el.style.position = "fixed"
        }, t.show = function (e) {
          var t = this;
          return this.el.classList.add(this.className.show), this.el.classList.remove(this.className.hide), this.el.style.top = (e || 0) + "px", this.el.style.opacity = 0, this.el.style.display = "block", new s(function (e) {
            h(t.el, "stop"), h(t.el, {
              opacity: 1
            }, {
              duration: 300,
              easing: "ease-out",
              complete: function () {
                e()
              }
            })
          })
        }, t.hide = function () {
          var e = this;
          return this.el.style.opacity = 1, this.el.style.position = "fixed", new s(function (t) {
            h(e.el, "stop"), h(e.el, {
              opacity: 0
            }, {
              duration: 300,
              easing: "ease-out",
              complete: function () {
                e.el.classList.add(e.className.hide), e.el.classList.remove(e.className.show), t()
              },
              display: "none"
            })
          })
        }, t.fixBackgroundHeight = function () {
          this.el.style.minHeight = window.innerHeight - this.el.getBoundingClientRect().top + "px"
        }, e
      }(),
      S = function () {
        function e() {
          this.el = document.querySelector("#sbg-appshell-v1-footer"), null === this.el ? this.isExist = !1 : this.isExist = !0
        }
        var t = e.prototype;
        return t.open = function (e) {
          var t = this,
            i = window.getComputedStyle(this.el).height;
          this.el.style.height = "auto";
          var n = window.getComputedStyle(this.el).height;
          return this.el.style.height = i, new s(function (i) {
            h(t.el, "stop"), h(t.el, {
              height: n
            }, {
              duration: e || 300,
              easing: "ease-out",
              complete: function () {
                i()
              }
            })
          })
        }, t.immediateOpen = function () {
          this.el.style.height = "auto"
        }, t.immediateClose = function () {
          this.el.style.height = "0px"
        }, t.close = function (e) {
          var t = this;
          return new s(function (i) {
            h(t.el, "stop"), h(t.el, {
              height: 0
            }, {
              duration: e || 300,
              easing: "ease-out",
              complete: function () {
                i()
              }
            })
          })
        }, e
      }(),
      T = function () {
        function e() {
          this.el = document.querySelector("#sbg-appshell-v1"), this.pagetop = "", this.headerInfo = new f, this.headerFixedArea = new v, this.contents = new b, this.categoryFooter = new w, this.menu = new x, this.footer = new S, this.scrollingElement = "scrollingElement" in document ? document.scrollingElement : -1 != navigator.userAgent.indexOf("WebKit") ? document.body : document.documentElement, this.usingAnimation = !1, this.isMenuOpen = !1, this.handleButtonMenuClickBind = this.handleButtonMenuClick.bind(this), this.handleOrientationChangeBind = this.handleOrientationChange.bind(this), this.handleLoadBind = this.handleLoad.bind(this)
        }
        var t = e.prototype;
        return t.bind = function () {
          this.headerFixedArea.bind(), this.el.addEventListener(this.headerFixedArea.EVENT.BUTTON_MENU_CLICK, this.handleButtonMenuClickBind, !!r.a && {
            passive: !0,
            once: !1
          }), window.addEventListener("load", this.handleLoadBind, !!r.a && {
            passive: !0,
            once: !0
          }), window.addEventListener("orientationchange", this.handleOrientationChangeBind, !!r.a && {
            passive: !0,
            once: !1
          })
        }, t.unbind = function () {}, t.handleButtonMenuClick = function () {
          this.isMenuOpen ? this.closeMenu() : this.openMenu()
        }, t.handleOrientationChange = function () {
          var e = this;
          this.el.style.minHeight = "0px", setTimeout(function () {
            e.menu.fixBackgroundHeight()
          }, 300)
        }, t.handleLoad = function () {
          this.menu.fixBackgroundHeight()
        }, t.openMenu = function () {
          var e = this;
          if (this.headerFixedArea.EVENT.BUTTON_MENU_CLICK, !this.usingAnimation) {
            this.usingAnimation = !0, this.pagetop || (this.pagetop = document.getElementById("nav-top-area")), this.pagetop && (this.pagetop.style.transition = "none", this.pagetop.style.opacity = "0"), this.scrollY = this.scrollingElement.scrollTop, this.scrollY, this.categoryHeaderTop = this.headerFixedArea.el.getBoundingClientRect().top, this.categoryFooter.isExist && this.categoryFooter.hide(), this.menu.useFixedMode(), this.headerFixedArea.stickyViewUnbind();
            var t = [this.headerFixedArea.useFixedMode(), this.menu.show(this.headerFixedArea.el.getBoundingClientRect().height)];
            this.headerInfo.isExist && t.push(this.headerInfo.close()), s.all(t).then(function () {
              if (e.headerFixedArea.EVENT.BUTTON_MENU_CLICK, e.scrollingElement.scrollTop = 0, e.contents.hide(), e.footer.isExist && t.push(e.footer.immediateClose()), e.menu.useStaticMode(), e.menu.fixBackgroundHeight(), e.usingAnimation = !1, e.isMenuOpen = !0, e.pagetop) {
                var i = e.pagetop.getAttribute("style");
                i.replace(/opacity\s*:\s*[^;]*;/, ""), i.replace(/transition\s*:\s*[^;]*;/, ""), "" === (i = i.replace(/opacity\s*:\s*[^;]*;/, "").replace(/transition\s*:\s*[^;]*;/, "").trim()) ? e.pagetop.removeAttribute("style") : e.pagetop.setAttribute("style", i)
              }
            })
          }
        }, t.closeMenu = function () {
          var e = this;
          if (this.headerFixedArea.EVENT.BUTTON_MENU_CLICK, !this.usingAnimation) {
            this.usingAnimation = !0, this.menu.useFixedMode(this.scrollingElement.scrollTop), this.contents.show(), this.categoryFooter.isExist && this.categoryFooter.show(), this.headerInfo.isExist && this.headerInfo.immediateOpen(), this.footer.isExist && this.footer.immediateOpen(), this.scrollingElement.scrollTop = this.scrollY;
            var t = [this.headerFixedArea.useAutoFixedMode(this.categoryHeaderTop), this.menu.hide()];
            s.all(t).then(function () {
              e.headerFixedArea.EVENT.BUTTON_MENU_CLICK, e.headerFixedArea.updateMode(), e.headerFixedArea.stickyViewBind(), e.usingAnimation = !1, e.isMenuOpen = !1
            }), this.categoryHeaderTop = null
          }
        }, e
      }(),
      E = {
        japanese: {
          "/site/": {
            ca: "GROUP"
          },
          "/corp/": {
            ca: "GROUP"
          }
        },
        english: {
          "/site/": {
            ca: "GROUP"
          },
          "/corp/": {
            ca: "GROUP"
          }
        }
      },
      P = function (e) {
        var t = {},
          i = e.location.pathname;
        t.isEnglish = /^\/en\//.test(i);
        try {
          t.isEnglish ? t.category = i.match(/^\/en(\/[^/]*\/)/)[1] : t.category = i.match(/^(\/[^/]*\/)/)[1]
        } catch (e) {
          t.category = ""
        }
        try {
          t.isEnglish ? t.subcategory = i.match(/^\/en(\/[^/]*\/[^/]*\/)/)[1] : t.subcategory = i.match(/^(\/[^/]*\/[^/]*\/)/)[1]
        } catch (e) {
          t.subcategory = ""
        }
        return t
      }(window),
      C = function () {
        var e = {},
          t = "" === P.category ? "/site/" : P.category;
        try {
          e = P.isEnglish ? E.english[t] || E.english["/site/"] : E.japanese[t] || E.japanese["/site/"]
        } catch (t) {
          e = P.isEnglish ? E.english["/site/"] : E.japanese["/site/"]
        }
        return e
      }(),
      k = function () {
        var e = this;
        this.el = document.querySelector("#sbg-appshell-v1-menu_sitesearch"), this.param = C, Object.keys(this.param).forEach(function (t) {
          e.el.querySelector('input[name="' + t + '"]').value = e.param[t]
        })
      };
    window.SB_ALL = window.SB_ALL || {}, window.SB_ALL.SUNSHINE = window.SB_ALL.SUNSHINE || {}, window.SB_ALL.HashMoveAssist = o;
    var V = new o(window.location.hash);
    V.setShiftPixel(5), V.bind(), window.addEventListener("DOMContentLoaded", function () {
      window.SB_ALL.SUNSHINE.Sitesearch = new k
    })
  }]);
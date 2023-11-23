!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var i = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          n.d(
            r,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 122));
})([
  function (e, t, n) {
    "use strict";
    (function (e) {
      n.d(t, "a", function () {
        return a;
      }),
        n.d(t, "b", function () {
          return g;
        }),
        n.d(t, "c", function () {
          return v;
        }),
        n.d(t, "d", function () {
          return s;
        }),
        n.d(t, "e", function () {
          return o;
        }),
        n.d(t, "f", function () {
          return E;
        }),
        n.d(t, "g", function () {
          return b;
        }),
        n.d(t, "h", function () {
          return I;
        }),
        n.d(t, "i", function () {
          return k;
        }),
        n.d(t, "j", function () {
          return c;
        }),
        n.d(t, "k", function () {
          return l;
        }),
        n.d(t, "l", function () {
          return y;
        }),
        n.d(t, "m", function () {
          return d;
        }),
        n.d(t, "n", function () {
          return f;
        }),
        n.d(t, "o", function () {
          return u;
        }),
        n.d(t, "p", function () {
          return h;
        }),
        n.d(t, "q", function () {
          return _;
        }),
        n.d(t, "r", function () {
          return S;
        }),
        n.d(t, "s", function () {
          return p;
        });
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      const r = function (e) {
          const t = [];
          let n = 0;
          for (let r = 0; r < e.length; r++) {
            let i = e.charCodeAt(r);
            i < 128
              ? (t[n++] = i)
              : i < 2048
              ? ((t[n++] = (i >> 6) | 192), (t[n++] = (63 & i) | 128))
              : 55296 == (64512 & i) &&
                r + 1 < e.length &&
                56320 == (64512 & e.charCodeAt(r + 1))
              ? ((i = 65536 + ((1023 & i) << 10) + (1023 & e.charCodeAt(++r))),
                (t[n++] = (i >> 18) | 240),
                (t[n++] = ((i >> 12) & 63) | 128),
                (t[n++] = ((i >> 6) & 63) | 128),
                (t[n++] = (63 & i) | 128))
              : ((t[n++] = (i >> 12) | 224),
                (t[n++] = ((i >> 6) & 63) | 128),
                (t[n++] = (63 & i) | 128));
          }
          return t;
        },
        i = {
          byteToCharMap_: null,
          charToByteMap_: null,
          byteToCharMapWebSafe_: null,
          charToByteMapWebSafe_: null,
          ENCODED_VALS_BASE:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
          get ENCODED_VALS() {
            return this.ENCODED_VALS_BASE + "+/=";
          },
          get ENCODED_VALS_WEBSAFE() {
            return this.ENCODED_VALS_BASE + "-_.";
          },
          HAS_NATIVE_SUPPORT: "function" == typeof atob,
          encodeByteArray(e, t) {
            if (!Array.isArray(e))
              throw Error("encodeByteArray takes an array as a parameter");
            this.init_();
            const n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
              r = [];
            for (let t = 0; t < e.length; t += 3) {
              const i = e[t],
                o = t + 1 < e.length,
                s = o ? e[t + 1] : 0,
                a = t + 2 < e.length,
                c = a ? e[t + 2] : 0,
                u = i >> 2,
                l = ((3 & i) << 4) | (s >> 4);
              let h = ((15 & s) << 2) | (c >> 6),
                d = 63 & c;
              a || ((d = 64), o || (h = 64)), r.push(n[u], n[l], n[h], n[d]);
            }
            return r.join("");
          },
          encodeString(e, t) {
            return this.HAS_NATIVE_SUPPORT && !t
              ? btoa(e)
              : this.encodeByteArray(r(e), t);
          },
          decodeString(e, t) {
            return this.HAS_NATIVE_SUPPORT && !t
              ? atob(e)
              : (function (e) {
                  const t = [];
                  let n = 0,
                    r = 0;
                  for (; n < e.length; ) {
                    const i = e[n++];
                    if (i < 128) t[r++] = String.fromCharCode(i);
                    else if (i > 191 && i < 224) {
                      const o = e[n++];
                      t[r++] = String.fromCharCode(((31 & i) << 6) | (63 & o));
                    } else if (i > 239 && i < 365) {
                      const o =
                        (((7 & i) << 18) |
                          ((63 & e[n++]) << 12) |
                          ((63 & e[n++]) << 6) |
                          (63 & e[n++])) -
                        65536;
                      (t[r++] = String.fromCharCode(55296 + (o >> 10))),
                        (t[r++] = String.fromCharCode(56320 + (1023 & o)));
                    } else {
                      const o = e[n++],
                        s = e[n++];
                      t[r++] = String.fromCharCode(
                        ((15 & i) << 12) | ((63 & o) << 6) | (63 & s)
                      );
                    }
                  }
                  return t.join("");
                })(this.decodeStringToByteArray(e, t));
          },
          decodeStringToByteArray(e, t) {
            this.init_();
            const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
              r = [];
            for (let t = 0; t < e.length; ) {
              const i = n[e.charAt(t++)],
                o = t < e.length ? n[e.charAt(t)] : 0;
              ++t;
              const s = t < e.length ? n[e.charAt(t)] : 64;
              ++t;
              const a = t < e.length ? n[e.charAt(t)] : 64;
              if ((++t, null == i || null == o || null == s || null == a))
                throw Error();
              const c = (i << 2) | (o >> 4);
              if ((r.push(c), 64 !== s)) {
                const e = ((o << 4) & 240) | (s >> 2);
                if ((r.push(e), 64 !== a)) {
                  const e = ((s << 6) & 192) | a;
                  r.push(e);
                }
              }
            }
            return r;
          },
          init_() {
            if (!this.byteToCharMap_) {
              (this.byteToCharMap_ = {}),
                (this.charToByteMap_ = {}),
                (this.byteToCharMapWebSafe_ = {}),
                (this.charToByteMapWebSafe_ = {});
              for (let e = 0; e < this.ENCODED_VALS.length; e++)
                (this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e)),
                  (this.charToByteMap_[this.byteToCharMap_[e]] = e),
                  (this.byteToCharMapWebSafe_[e] =
                    this.ENCODED_VALS_WEBSAFE.charAt(e)),
                  (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] =
                    e),
                  e >= this.ENCODED_VALS_BASE.length &&
                    ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] =
                      e),
                    (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] =
                      e));
            }
          },
        },
        o = function (e) {
          return (function (e) {
            const t = r(e);
            return i.encodeByteArray(t, !0);
          })(e).replace(/\./g, "");
        },
        s = function (e) {
          try {
            return i.decodeString(e, !0);
          } catch (e) {
            console.error("base64Decode failed: ", e);
          }
          return null;
        };
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      class a {
        constructor() {
          (this.reject = () => {}),
            (this.resolve = () => {}),
            (this.promise = new Promise((e, t) => {
              (this.resolve = e), (this.reject = t);
            }));
        }
        wrapCallback(e) {
          return (t, n) => {
            t ? this.reject(t) : this.resolve(n),
              "function" == typeof e &&
                (this.promise.catch(() => {}), 1 === e.length ? e(t) : e(t, n));
          };
        }
      }
      /**
       * @license
       * Copyright 2021 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      function c() {
        return "undefined" != typeof navigator &&
          "string" == typeof navigator.userAgent
          ? navigator.userAgent
          : "";
      }
      function u() {
        return (
          "undefined" != typeof window &&
          !!(window.cordova || window.phonegap || window.PhoneGap) &&
          /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(c())
        );
      }
      function l() {
        const e =
          "object" == typeof chrome
            ? chrome.runtime
            : "object" == typeof browser
            ? browser.runtime
            : void 0;
        return "object" == typeof e && void 0 !== e.id;
      }
      function h() {
        return (
          "object" == typeof navigator && "ReactNative" === navigator.product
        );
      }
      function d() {
        const e = c();
        return e.indexOf("MSIE ") >= 0 || e.indexOf("Trident/") >= 0;
      }
      function f() {
        return "object" == typeof indexedDB;
      }
      function p() {
        return new Promise((e, t) => {
          try {
            let n = !0;
            const r = "validate-browser-context-for-indexeddb-analytics-module",
              i = self.indexedDB.open(r);
            (i.onsuccess = () => {
              i.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0);
            }),
              (i.onupgradeneeded = () => {
                n = !1;
              }),
              (i.onerror = () => {
                var e;
                t(
                  (null === (e = i.error) || void 0 === e
                    ? void 0
                    : e.message) || ""
                );
              });
          } catch (e) {
            t(e);
          }
        });
      }
      class v extends Error {
        constructor(e, t, n) {
          super(t),
            (this.code = e),
            (this.customData = n),
            (this.name = "FirebaseError"),
            Object.setPrototypeOf(this, v.prototype),
            Error.captureStackTrace &&
              Error.captureStackTrace(this, g.prototype.create);
        }
      }
      class g {
        constructor(e, t, n) {
          (this.service = e), (this.serviceName = t), (this.errors = n);
        }
        create(e, ...t) {
          const n = t[0] || {},
            r = `${this.service}/${e}`,
            i = this.errors[e],
            o = i
              ? (function (e, t) {
                  return e.replace(m, (e, n) => {
                    const r = t[n];
                    return null != r ? String(r) : `<${n}?>`;
                  });
                })(i, n)
              : "Error",
            s = `${this.serviceName}: ${o} (${r}).`;
          return new v(r, s, n);
        }
      }
      const m = /\{\$([^}]+)}/g;
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function y(e) {
        for (const t in e)
          if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
        return !0;
      }
      function b(e, t) {
        if (e === t) return !0;
        const n = Object.keys(e),
          r = Object.keys(t);
        for (const i of n) {
          if (!r.includes(i)) return !1;
          const n = e[i],
            o = t[i];
          if (w(n) && w(o)) {
            if (!b(n, o)) return !1;
          } else if (n !== o) return !1;
        }
        for (const e of r) if (!n.includes(e)) return !1;
        return !0;
      }
      function w(e) {
        return null !== e && "object" == typeof e;
      }
      /**
       * @license
       * Copyright 2022 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      function _(e) {
        const t = [];
        for (const [n, r] of Object.entries(e))
          Array.isArray(r)
            ? r.forEach((e) => {
                t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e));
              })
            : t.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
        return t.length ? "&" + t.join("&") : "";
      }
      function S(e) {
        const t = {};
        return (
          e
            .replace(/^\?/, "")
            .split("&")
            .forEach((e) => {
              if (e) {
                const [n, r] = e.split("=");
                t[decodeURIComponent(n)] = decodeURIComponent(r);
              }
            }),
          t
        );
      }
      function I(e) {
        const t = e.indexOf("?");
        if (!t) return "";
        const n = e.indexOf("#", t);
        return e.substring(t, n > 0 ? n : void 0);
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function E(e, t) {
        const n = new O(e, t);
        return n.subscribe.bind(n);
      }
      class O {
        constructor(e, t) {
          (this.observers = []),
            (this.unsubscribes = []),
            (this.observerCount = 0),
            (this.task = Promise.resolve()),
            (this.finalized = !1),
            (this.onNoObservers = t),
            this.task
              .then(() => {
                e(this);
              })
              .catch((e) => {
                this.error(e);
              });
        }
        next(e) {
          this.forEachObserver((t) => {
            t.next(e);
          });
        }
        error(e) {
          this.forEachObserver((t) => {
            t.error(e);
          }),
            this.close(e);
        }
        complete() {
          this.forEachObserver((e) => {
            e.complete();
          }),
            this.close();
        }
        subscribe(e, t, n) {
          let r;
          if (void 0 === e && void 0 === t && void 0 === n)
            throw new Error("Missing Observer.");
          (r = (function (e, t) {
            if ("object" != typeof e || null === e) return !1;
            for (const n of t)
              if (n in e && "function" == typeof e[n]) return !0;
            return !1;
          })(e, ["next", "error", "complete"])
            ? e
            : { next: e, error: t, complete: n }),
            void 0 === r.next && (r.next = T),
            void 0 === r.error && (r.error = T),
            void 0 === r.complete && (r.complete = T);
          const i = this.unsubscribeOne.bind(this, this.observers.length);
          return (
            this.finalized &&
              this.task.then(() => {
                try {
                  this.finalError ? r.error(this.finalError) : r.complete();
                } catch (e) {}
              }),
            this.observers.push(r),
            i
          );
        }
        unsubscribeOne(e) {
          void 0 !== this.observers &&
            void 0 !== this.observers[e] &&
            (delete this.observers[e],
            (this.observerCount -= 1),
            0 === this.observerCount &&
              void 0 !== this.onNoObservers &&
              this.onNoObservers(this));
        }
        forEachObserver(e) {
          if (!this.finalized)
            for (let t = 0; t < this.observers.length; t++) this.sendOne(t, e);
        }
        sendOne(e, t) {
          this.task.then(() => {
            if (void 0 !== this.observers && void 0 !== this.observers[e])
              try {
                t(this.observers[e]);
              } catch (e) {
                "undefined" != typeof console &&
                  console.error &&
                  console.error(e);
              }
          });
        }
        close(e) {
          this.finalized ||
            ((this.finalized = !0),
            void 0 !== e && (this.finalError = e),
            this.task.then(() => {
              (this.observers = void 0), (this.onNoObservers = void 0);
            }));
        }
      }
      function T() {}
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * @license
       * Copyright 2021 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      function k(e) {
        return e && e._delegate ? e._delegate : e;
      }
    }).call(this, n(310));
  },
  function (e, t, n) {
    var r = n(2),
      i = n(8),
      o = n(15),
      s = n(12),
      a = n(18),
      c = function (e, t, n) {
        var u,
          l,
          h,
          d,
          f = e & c.F,
          p = e & c.G,
          v = e & c.S,
          g = e & c.P,
          m = e & c.B,
          y = p ? r : v ? r[t] || (r[t] = {}) : (r[t] || {}).prototype,
          b = p ? i : i[t] || (i[t] = {}),
          w = b.prototype || (b.prototype = {});
        for (u in (p && (n = t), n))
          (h = ((l = !f && y && void 0 !== y[u]) ? y : n)[u]),
            (d =
              m && l
                ? a(h, r)
                : g && "function" == typeof h
                ? a(Function.call, h)
                : h),
            y && s(y, u, h, e & c.U),
            b[u] != h && o(b, u, d),
            g && w[u] != h && (w[u] = h);
      };
    (r.core = i),
      (c.F = 1),
      (c.G = 2),
      (c.S = 4),
      (c.P = 8),
      (c.B = 16),
      (c.W = 32),
      (c.U = 64),
      (c.R = 128),
      (e.exports = c);
  },
  function (e, t) {
    var n = (e.exports =
      "undefined" != typeof window && window.Math == Math
        ? window
        : "undefined" != typeof self && self.Math == Math
        ? self
        : Function("return this")());
    "number" == typeof __g && (__g = n);
  },
  function (e, t) {
    e.exports = function (e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    };
  },
  function (e, t, n) {
    var r = n(5);
    e.exports = function (e) {
      if (!r(e)) throw TypeError(e + " is not an object!");
      return e;
    };
  },
  function (e, t) {
    e.exports = function (e) {
      return "object" == typeof e ? null !== e : "function" == typeof e;
    };
  },
  function (e, t, n) {
    var r = n(49)("wks"),
      i = n(30),
      o = n(2).Symbol,
      s = "function" == typeof o;
    (e.exports = function (e) {
      return r[e] || (r[e] = (s && o[e]) || (s ? o : i)("Symbol." + e));
    }).store = r;
  },
  function (e, t, n) {
    var r = n(20),
      i = Math.min;
    e.exports = function (e) {
      return e > 0 ? i(r(e), 9007199254740991) : 0;
    };
  },
  function (e, t) {
    var n = (e.exports = { version: "2.6.12" });
    "number" == typeof __e && (__e = n);
  },
  function (e, t, n) {
    e.exports = !n(3)(function () {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    });
  },
  function (e, t, n) {
    var r = n(4),
      i = n(89),
      o = n(27),
      s = Object.defineProperty;
    t.f = n(9)
      ? Object.defineProperty
      : function (e, t, n) {
          if ((r(e), (t = o(t, !0)), r(n), i))
            try {
              return s(e, t, n);
            } catch (e) {}
          if ("get" in n || "set" in n)
            throw TypeError("Accessors not supported!");
          return "value" in n && (e[t] = n.value), e;
        };
  },
  function (e, t, n) {
    var r = n(25);
    e.exports = function (e) {
      return Object(r(e));
    };
  },
  function (e, t, n) {
    var r = n(2),
      i = n(15),
      o = n(14),
      s = n(30)("src"),
      a = n(127),
      c = ("" + a).split("toString");
    (n(8).inspectSource = function (e) {
      return a.call(e);
    }),
      (e.exports = function (e, t, n, a) {
        var u = "function" == typeof n;
        u && (o(n, "name") || i(n, "name", t)),
          e[t] !== n &&
            (u && (o(n, s) || i(n, s, e[t] ? "" + e[t] : c.join(String(t)))),
            e === r
              ? (e[t] = n)
              : a
              ? e[t]
                ? (e[t] = n)
                : i(e, t, n)
              : (delete e[t], i(e, t, n)));
      })(Function.prototype, "toString", function () {
        return ("function" == typeof this && this[s]) || a.call(this);
      });
  },
  function (e, t, n) {
    var r = n(1),
      i = n(3),
      o = n(25),
      s = /"/g,
      a = function (e, t, n, r) {
        var i = String(o(e)),
          a = "<" + t;
        return (
          "" !== n &&
            (a += " " + n + '="' + String(r).replace(s, "&quot;") + '"'),
          a + ">" + i + "</" + t + ">"
        );
      };
    e.exports = function (e, t) {
      var n = {};
      (n[e] = t(a)),
        r(
          r.P +
            r.F *
              i(function () {
                var t = ""[e]('"');
                return t !== t.toLowerCase() || t.split('"').length > 3;
              }),
          "String",
          n
        );
    };
  },
  function (e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function (e, t) {
      return n.call(e, t);
    };
  },
  function (e, t, n) {
    var r = n(10),
      i = n(29);
    e.exports = n(9)
      ? function (e, t, n) {
          return r.f(e, t, i(1, n));
        }
      : function (e, t, n) {
          return (e[t] = n), e;
        };
  },
  function (e, t, n) {
    var r = n(45),
      i = n(25);
    e.exports = function (e) {
      return r(i(e));
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(3);
    e.exports = function (e, t) {
      return (
        !!e &&
        r(function () {
          t ? e.call(null, function () {}, 1) : e.call(null);
        })
      );
    };
  },
  function (e, t, n) {
    var r = n(19);
    e.exports = function (e, t, n) {
      if ((r(e), void 0 === t)) return e;
      switch (n) {
        case 1:
          return function (n) {
            return e.call(t, n);
          };
        case 2:
          return function (n, r) {
            return e.call(t, n, r);
          };
        case 3:
          return function (n, r, i) {
            return e.call(t, n, r, i);
          };
      }
      return function () {
        return e.apply(t, arguments);
      };
    };
  },
  function (e, t) {
    e.exports = function (e) {
      if ("function" != typeof e) throw TypeError(e + " is not a function!");
      return e;
    };
  },
  function (e, t) {
    var n = Math.ceil,
      r = Math.floor;
    e.exports = function (e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? r : n)(e);
    };
  },
  function (e, t, n) {
    var r = n(46),
      i = n(29),
      o = n(16),
      s = n(27),
      a = n(14),
      c = n(89),
      u = Object.getOwnPropertyDescriptor;
    t.f = n(9)
      ? u
      : function (e, t) {
          if (((e = o(e)), (t = s(t, !0)), c))
            try {
              return u(e, t);
            } catch (e) {}
          if (a(e, t)) return i(!r.f.call(e, t), e[t]);
        };
  },
  function (e, t, n) {
    var r = n(1),
      i = n(8),
      o = n(3);
    e.exports = function (e, t) {
      var n = (i.Object || {})[e] || Object[e],
        s = {};
      (s[e] = t(n)),
        r(
          r.S +
            r.F *
              o(function () {
                n(1);
              }),
          "Object",
          s
        );
    };
  },
  function (e, t, n) {
    var r = n(18),
      i = n(45),
      o = n(11),
      s = n(7),
      a = n(105);
    e.exports = function (e, t) {
      var n = 1 == e,
        c = 2 == e,
        u = 3 == e,
        l = 4 == e,
        h = 6 == e,
        d = 5 == e || h,
        f = t || a;
      return function (t, a, p) {
        for (
          var v,
            g,
            m = o(t),
            y = i(m),
            b = r(a, p, 3),
            w = s(y.length),
            _ = 0,
            S = n ? f(t, w) : c ? f(t, 0) : void 0;
          w > _;
          _++
        )
          if ((d || _ in y) && ((g = b((v = y[_]), _, m)), e))
            if (n) S[_] = g;
            else if (g)
              switch (e) {
                case 3:
                  return !0;
                case 5:
                  return v;
                case 6:
                  return _;
                case 2:
                  S.push(v);
              }
            else if (l) return !1;
        return h ? -1 : u || l ? l : S;
      };
    };
  },
  function (e, t) {
    var n = {}.toString;
    e.exports = function (e) {
      return n.call(e).slice(8, -1);
    };
  },
  function (e, t) {
    e.exports = function (e) {
      if (null == e) throw TypeError("Can't call method on  " + e);
      return e;
    };
  },
  function (e, t, n) {
    "use strict";
    if (n(9)) {
      var r = n(31),
        i = n(2),
        o = n(3),
        s = n(1),
        a = n(60),
        c = n(85),
        u = n(18),
        l = n(43),
        h = n(29),
        d = n(15),
        f = n(44),
        p = n(20),
        v = n(7),
        g = n(116),
        m = n(33),
        y = n(27),
        b = n(14),
        w = n(47),
        _ = n(5),
        S = n(11),
        I = n(77),
        E = n(34),
        O = n(36),
        T = n(35).f,
        k = n(79),
        x = n(30),
        A = n(6),
        P = n(23),
        L = n(50),
        C = n(48),
        N = n(81),
        R = n(41),
        M = n(53),
        D = n(42),
        j = n(80),
        F = n(107),
        B = n(10),
        U = n(21),
        q = B.f,
        V = U.f,
        H = i.RangeError,
        W = i.TypeError,
        z = i.Uint8Array,
        G = Array.prototype,
        K = c.ArrayBuffer,
        $ = c.DataView,
        J = P(0),
        Y = P(2),
        Z = P(3),
        X = P(4),
        Q = P(5),
        ee = P(6),
        te = L(!0),
        ne = L(!1),
        re = N.values,
        ie = N.keys,
        oe = N.entries,
        se = G.lastIndexOf,
        ae = G.reduce,
        ce = G.reduceRight,
        ue = G.join,
        le = G.sort,
        he = G.slice,
        de = G.toString,
        fe = G.toLocaleString,
        pe = A("iterator"),
        ve = A("toStringTag"),
        ge = x("typed_constructor"),
        me = x("def_constructor"),
        ye = a.CONSTR,
        be = a.TYPED,
        we = a.VIEW,
        _e = P(1, function (e, t) {
          return Te(C(e, e[me]), t);
        }),
        Se = o(function () {
          return 1 === new z(new Uint16Array([1]).buffer)[0];
        }),
        Ie =
          !!z &&
          !!z.prototype.set &&
          o(function () {
            new z(1).set({});
          }),
        Ee = function (e, t) {
          var n = p(e);
          if (n < 0 || n % t) throw H("Wrong offset!");
          return n;
        },
        Oe = function (e) {
          if (_(e) && be in e) return e;
          throw W(e + " is not a typed array!");
        },
        Te = function (e, t) {
          if (!_(e) || !(ge in e))
            throw W("It is not a typed array constructor!");
          return new e(t);
        },
        ke = function (e, t) {
          return xe(C(e, e[me]), t);
        },
        xe = function (e, t) {
          for (var n = 0, r = t.length, i = Te(e, r); r > n; ) i[n] = t[n++];
          return i;
        },
        Ae = function (e, t, n) {
          q(e, t, {
            get: function () {
              return this._d[n];
            },
          });
        },
        Pe = function (e) {
          var t,
            n,
            r,
            i,
            o,
            s,
            a = S(e),
            c = arguments.length,
            l = c > 1 ? arguments[1] : void 0,
            h = void 0 !== l,
            d = k(a);
          if (null != d && !I(d)) {
            for (s = d.call(a), r = [], t = 0; !(o = s.next()).done; t++)
              r.push(o.value);
            a = r;
          }
          for (
            h && c > 2 && (l = u(l, arguments[2], 2)),
              t = 0,
              n = v(a.length),
              i = Te(this, n);
            n > t;
            t++
          )
            i[t] = h ? l(a[t], t) : a[t];
          return i;
        },
        Le = function () {
          for (var e = 0, t = arguments.length, n = Te(this, t); t > e; )
            n[e] = arguments[e++];
          return n;
        },
        Ce =
          !!z &&
          o(function () {
            fe.call(new z(1));
          }),
        Ne = function () {
          return fe.apply(Ce ? he.call(Oe(this)) : Oe(this), arguments);
        },
        Re = {
          copyWithin: function (e, t) {
            return F.call(
              Oe(this),
              e,
              t,
              arguments.length > 2 ? arguments[2] : void 0
            );
          },
          every: function (e) {
            return X(Oe(this), e, arguments.length > 1 ? arguments[1] : void 0);
          },
          fill: function (e) {
            return j.apply(Oe(this), arguments);
          },
          filter: function (e) {
            return ke(
              this,
              Y(Oe(this), e, arguments.length > 1 ? arguments[1] : void 0)
            );
          },
          find: function (e) {
            return Q(Oe(this), e, arguments.length > 1 ? arguments[1] : void 0);
          },
          findIndex: function (e) {
            return ee(
              Oe(this),
              e,
              arguments.length > 1 ? arguments[1] : void 0
            );
          },
          forEach: function (e) {
            J(Oe(this), e, arguments.length > 1 ? arguments[1] : void 0);
          },
          indexOf: function (e) {
            return ne(
              Oe(this),
              e,
              arguments.length > 1 ? arguments[1] : void 0
            );
          },
          includes: function (e) {
            return te(
              Oe(this),
              e,
              arguments.length > 1 ? arguments[1] : void 0
            );
          },
          join: function (e) {
            return ue.apply(Oe(this), arguments);
          },
          lastIndexOf: function (e) {
            return se.apply(Oe(this), arguments);
          },
          map: function (e) {
            return _e(
              Oe(this),
              e,
              arguments.length > 1 ? arguments[1] : void 0
            );
          },
          reduce: function (e) {
            return ae.apply(Oe(this), arguments);
          },
          reduceRight: function (e) {
            return ce.apply(Oe(this), arguments);
          },
          reverse: function () {
            for (
              var e, t = Oe(this).length, n = Math.floor(t / 2), r = 0;
              r < n;

            )
              (e = this[r]), (this[r++] = this[--t]), (this[t] = e);
            return this;
          },
          some: function (e) {
            return Z(Oe(this), e, arguments.length > 1 ? arguments[1] : void 0);
          },
          sort: function (e) {
            return le.call(Oe(this), e);
          },
          subarray: function (e, t) {
            var n = Oe(this),
              r = n.length,
              i = m(e, r);
            return new (C(n, n[me]))(
              n.buffer,
              n.byteOffset + i * n.BYTES_PER_ELEMENT,
              v((void 0 === t ? r : m(t, r)) - i)
            );
          },
        },
        Me = function (e, t) {
          return ke(this, he.call(Oe(this), e, t));
        },
        De = function (e) {
          Oe(this);
          var t = Ee(arguments[1], 1),
            n = this.length,
            r = S(e),
            i = v(r.length),
            o = 0;
          if (i + t > n) throw H("Wrong length!");
          for (; o < i; ) this[t + o] = r[o++];
        },
        je = {
          entries: function () {
            return oe.call(Oe(this));
          },
          keys: function () {
            return ie.call(Oe(this));
          },
          values: function () {
            return re.call(Oe(this));
          },
        },
        Fe = function (e, t) {
          return (
            _(e) &&
            e[be] &&
            "symbol" != typeof t &&
            t in e &&
            String(+t) == String(t)
          );
        },
        Be = function (e, t) {
          return Fe(e, (t = y(t, !0))) ? h(2, e[t]) : V(e, t);
        },
        Ue = function (e, t, n) {
          return !(Fe(e, (t = y(t, !0))) && _(n) && b(n, "value")) ||
            b(n, "get") ||
            b(n, "set") ||
            n.configurable ||
            (b(n, "writable") && !n.writable) ||
            (b(n, "enumerable") && !n.enumerable)
            ? q(e, t, n)
            : ((e[t] = n.value), e);
        };
      ye || ((U.f = Be), (B.f = Ue)),
        s(s.S + s.F * !ye, "Object", {
          getOwnPropertyDescriptor: Be,
          defineProperty: Ue,
        }),
        o(function () {
          de.call({});
        }) &&
          (de = fe =
            function () {
              return ue.call(this);
            });
      var qe = f({}, Re);
      f(qe, je),
        d(qe, pe, je.values),
        f(qe, {
          slice: Me,
          set: De,
          constructor: function () {},
          toString: de,
          toLocaleString: Ne,
        }),
        Ae(qe, "buffer", "b"),
        Ae(qe, "byteOffset", "o"),
        Ae(qe, "byteLength", "l"),
        Ae(qe, "length", "e"),
        q(qe, ve, {
          get: function () {
            return this[be];
          },
        }),
        (e.exports = function (e, t, n, c) {
          var u = e + ((c = !!c) ? "Clamped" : "") + "Array",
            h = "get" + e,
            f = "set" + e,
            p = i[u],
            m = p || {},
            y = p && O(p),
            b = !p || !a.ABV,
            S = {},
            I = p && p.prototype,
            k = function (e, n) {
              q(e, n, {
                get: function () {
                  return (function (e, n) {
                    var r = e._d;
                    return r.v[h](n * t + r.o, Se);
                  })(this, n);
                },
                set: function (e) {
                  return (function (e, n, r) {
                    var i = e._d;
                    c &&
                      (r =
                        (r = Math.round(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r),
                      i.v[f](n * t + i.o, r, Se);
                  })(this, n, e);
                },
                enumerable: !0,
              });
            };
          b
            ? ((p = n(function (e, n, r, i) {
                l(e, p, u, "_d");
                var o,
                  s,
                  a,
                  c,
                  h = 0,
                  f = 0;
                if (_(n)) {
                  if (
                    !(
                      n instanceof K ||
                      "ArrayBuffer" == (c = w(n)) ||
                      "SharedArrayBuffer" == c
                    )
                  )
                    return be in n ? xe(p, n) : Pe.call(p, n);
                  (o = n), (f = Ee(r, t));
                  var m = n.byteLength;
                  if (void 0 === i) {
                    if (m % t) throw H("Wrong length!");
                    if ((s = m - f) < 0) throw H("Wrong length!");
                  } else if ((s = v(i) * t) + f > m) throw H("Wrong length!");
                  a = s / t;
                } else (a = g(n)), (o = new K((s = a * t)));
                for (
                  d(e, "_d", { b: o, o: f, l: s, e: a, v: new $(o) });
                  h < a;

                )
                  k(e, h++);
              })),
              (I = p.prototype = E(qe)),
              d(I, "constructor", p))
            : (o(function () {
                p(1);
              }) &&
                o(function () {
                  new p(-1);
                }) &&
                M(function (e) {
                  new p(), new p(null), new p(1.5), new p(e);
                }, !0)) ||
              ((p = n(function (e, n, r, i) {
                var o;
                return (
                  l(e, p, u),
                  _(n)
                    ? n instanceof K ||
                      "ArrayBuffer" == (o = w(n)) ||
                      "SharedArrayBuffer" == o
                      ? void 0 !== i
                        ? new m(n, Ee(r, t), i)
                        : void 0 !== r
                        ? new m(n, Ee(r, t))
                        : new m(n)
                      : be in n
                      ? xe(p, n)
                      : Pe.call(p, n)
                    : new m(g(n))
                );
              })),
              J(
                y !== Function.prototype ? T(m).concat(T(y)) : T(m),
                function (e) {
                  e in p || d(p, e, m[e]);
                }
              ),
              (p.prototype = I),
              r || (I.constructor = p));
          var x = I[pe],
            A = !!x && ("values" == x.name || null == x.name),
            P = je.values;
          d(p, ge, !0),
            d(I, be, u),
            d(I, we, !0),
            d(I, me, p),
            (c ? new p(1)[ve] == u : ve in I) ||
              q(I, ve, {
                get: function () {
                  return u;
                },
              }),
            (S[u] = p),
            s(s.G + s.W + s.F * (p != m), S),
            s(s.S, u, { BYTES_PER_ELEMENT: t }),
            s(
              s.S +
                s.F *
                  o(function () {
                    m.of.call(p, 1);
                  }),
              u,
              { from: Pe, of: Le }
            ),
            "BYTES_PER_ELEMENT" in I || d(I, "BYTES_PER_ELEMENT", t),
            s(s.P, u, Re),
            D(u),
            s(s.P + s.F * Ie, u, { set: De }),
            s(s.P + s.F * !A, u, je),
            r || I.toString == de || (I.toString = de),
            s(
              s.P +
                s.F *
                  o(function () {
                    new p(1).slice();
                  }),
              u,
              { slice: Me }
            ),
            s(
              s.P +
                s.F *
                  (o(function () {
                    return (
                      [1, 2].toLocaleString() != new p([1, 2]).toLocaleString()
                    );
                  }) ||
                    !o(function () {
                      I.toLocaleString.call([1, 2]);
                    })),
              u,
              { toLocaleString: Ne }
            ),
            (R[u] = A ? x : P),
            r || A || d(I, pe, P);
        });
    } else e.exports = function () {};
  },
  function (e, t, n) {
    var r = n(5);
    e.exports = function (e, t) {
      if (!r(e)) return e;
      var n, i;
      if (t && "function" == typeof (n = e.toString) && !r((i = n.call(e))))
        return i;
      if ("function" == typeof (n = e.valueOf) && !r((i = n.call(e)))) return i;
      if (!t && "function" == typeof (n = e.toString) && !r((i = n.call(e))))
        return i;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function (e, t, n) {
    var r = n(30)("meta"),
      i = n(5),
      o = n(14),
      s = n(10).f,
      a = 0,
      c =
        Object.isExtensible ||
        function () {
          return !0;
        },
      u = !n(3)(function () {
        return c(Object.preventExtensions({}));
      }),
      l = function (e) {
        s(e, r, { value: { i: "O" + ++a, w: {} } });
      },
      h = (e.exports = {
        KEY: r,
        NEED: !1,
        fastKey: function (e, t) {
          if (!i(e))
            return "symbol" == typeof e
              ? e
              : ("string" == typeof e ? "S" : "P") + e;
          if (!o(e, r)) {
            if (!c(e)) return "F";
            if (!t) return "E";
            l(e);
          }
          return e[r].i;
        },
        getWeak: function (e, t) {
          if (!o(e, r)) {
            if (!c(e)) return !0;
            if (!t) return !1;
            l(e);
          }
          return e[r].w;
        },
        onFreeze: function (e) {
          return u && h.NEED && c(e) && !o(e, r) && l(e), e;
        },
      });
  },
  function (e, t) {
    e.exports = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t,
      };
    };
  },
  function (e, t) {
    var n = 0,
      r = Math.random();
    e.exports = function (e) {
      return "Symbol(".concat(
        void 0 === e ? "" : e,
        ")_",
        (++n + r).toString(36)
      );
    };
  },
  function (e, t) {
    e.exports = !1;
  },
  function (e, t, n) {
    var r = n(91),
      i = n(64);
    e.exports =
      Object.keys ||
      function (e) {
        return r(e, i);
      };
  },
  function (e, t, n) {
    var r = n(20),
      i = Math.max,
      o = Math.min;
    e.exports = function (e, t) {
      return (e = r(e)) < 0 ? i(e + t, 0) : o(e, t);
    };
  },
  function (e, t, n) {
    var r = n(4),
      i = n(92),
      o = n(64),
      s = n(63)("IE_PROTO"),
      a = function () {},
      c = function () {
        var e,
          t = n(61)("iframe"),
          r = o.length;
        for (
          t.style.display = "none",
            n(65).appendChild(t),
            t.src = "javascript:",
            (e = t.contentWindow.document).open(),
            e.write("<script>document.F=Object</script>"),
            e.close(),
            c = e.F;
          r--;

        )
          delete c.prototype[o[r]];
        return c();
      };
    e.exports =
      Object.create ||
      function (e, t) {
        var n;
        return (
          null !== e
            ? ((a.prototype = r(e)),
              (n = new a()),
              (a.prototype = null),
              (n[s] = e))
            : (n = c()),
          void 0 === t ? n : i(n, t)
        );
      };
  },
  function (e, t, n) {
    var r = n(91),
      i = n(64).concat("length", "prototype");
    t.f =
      Object.getOwnPropertyNames ||
      function (e) {
        return r(e, i);
      };
  },
  function (e, t, n) {
    var r = n(14),
      i = n(11),
      o = n(63)("IE_PROTO"),
      s = Object.prototype;
    e.exports =
      Object.getPrototypeOf ||
      function (e) {
        return (
          (e = i(e)),
          r(e, o)
            ? e[o]
            : "function" == typeof e.constructor && e instanceof e.constructor
            ? e.constructor.prototype
            : e instanceof Object
            ? s
            : null
        );
      };
  },
  function (e, t, n) {
    var r = n(6)("unscopables"),
      i = Array.prototype;
    null == i[r] && n(15)(i, r, {}),
      (e.exports = function (e) {
        i[r][e] = !0;
      });
  },
  function (e, t, n) {
    var r = n(5);
    e.exports = function (e, t) {
      if (!r(e) || e._t !== t)
        throw TypeError("Incompatible receiver, " + t + " required!");
      return e;
    };
  },
  function (e, t, n) {
    var r = n(10).f,
      i = n(14),
      o = n(6)("toStringTag");
    e.exports = function (e, t, n) {
      e &&
        !i((e = n ? e : e.prototype), o) &&
        r(e, o, { configurable: !0, value: t });
    };
  },
  function (e, t, n) {
    var r = n(1),
      i = n(25),
      o = n(3),
      s = n(67),
      a = "[" + s + "]",
      c = RegExp("^" + a + a + "*"),
      u = RegExp(a + a + "*$"),
      l = function (e, t, n) {
        var i = {},
          a = o(function () {
            return !!s[e]() || "​" != "​"[e]();
          }),
          c = (i[e] = a ? t(h) : s[e]);
        n && (i[n] = c), r(r.P + r.F * a, "String", i);
      },
      h = (l.trim = function (e, t) {
        return (
          (e = String(i(e))),
          1 & t && (e = e.replace(c, "")),
          2 & t && (e = e.replace(u, "")),
          e
        );
      });
    e.exports = l;
  },
  function (e, t) {
    e.exports = {};
  },
  function (e, t, n) {
    "use strict";
    var r = n(2),
      i = n(10),
      o = n(9),
      s = n(6)("species");
    e.exports = function (e) {
      var t = r[e];
      o &&
        t &&
        !t[s] &&
        i.f(t, s, {
          configurable: !0,
          get: function () {
            return this;
          },
        });
    };
  },
  function (e, t) {
    e.exports = function (e, t, n, r) {
      if (!(e instanceof t) || (void 0 !== r && r in e))
        throw TypeError(n + ": incorrect invocation!");
      return e;
    };
  },
  function (e, t, n) {
    var r = n(12);
    e.exports = function (e, t, n) {
      for (var i in t) r(e, i, t[i], n);
      return e;
    };
  },
  function (e, t, n) {
    var r = n(24);
    e.exports = Object("z").propertyIsEnumerable(0)
      ? Object
      : function (e) {
          return "String" == r(e) ? e.split("") : Object(e);
        };
  },
  function (e, t) {
    t.f = {}.propertyIsEnumerable;
  },
  function (e, t, n) {
    var r = n(24),
      i = n(6)("toStringTag"),
      o =
        "Arguments" ==
        r(
          (function () {
            return arguments;
          })()
        );
    e.exports = function (e) {
      var t, n, s;
      return void 0 === e
        ? "Undefined"
        : null === e
        ? "Null"
        : "string" ==
          typeof (n = (function (e, t) {
            try {
              return e[t];
            } catch (e) {}
          })((t = Object(e)), i))
        ? n
        : o
        ? r(t)
        : "Object" == (s = r(t)) && "function" == typeof t.callee
        ? "Arguments"
        : s;
    };
  },
  function (e, t, n) {
    var r = n(4),
      i = n(19),
      o = n(6)("species");
    e.exports = function (e, t) {
      var n,
        s = r(e).constructor;
      return void 0 === s || null == (n = r(s)[o]) ? t : i(n);
    };
  },
  function (e, t, n) {
    var r = n(8),
      i = n(2),
      o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
    (e.exports = function (e, t) {
      return o[e] || (o[e] = void 0 !== t ? t : {});
    })("versions", []).push({
      version: r.version,
      mode: n(31) ? "pure" : "global",
      copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
    });
  },
  function (e, t, n) {
    var r = n(16),
      i = n(7),
      o = n(33);
    e.exports = function (e) {
      return function (t, n, s) {
        var a,
          c = r(t),
          u = i(c.length),
          l = o(s, u);
        if (e && n != n) {
          for (; u > l; ) if ((a = c[l++]) != a) return !0;
        } else
          for (; u > l; l++)
            if ((e || l in c) && c[l] === n) return e || l || 0;
        return !e && -1;
      };
    };
  },
  function (e, t) {
    t.f = Object.getOwnPropertySymbols;
  },
  function (e, t, n) {
    var r = n(24);
    e.exports =
      Array.isArray ||
      function (e) {
        return "Array" == r(e);
      };
  },
  function (e, t, n) {
    var r = n(6)("iterator"),
      i = !1;
    try {
      var o = [7][r]();
      (o.return = function () {
        i = !0;
      }),
        Array.from(o, function () {
          throw 2;
        });
    } catch (e) {}
    e.exports = function (e, t) {
      if (!t && !i) return !1;
      var n = !1;
      try {
        var o = [7],
          s = o[r]();
        (s.next = function () {
          return { done: (n = !0) };
        }),
          (o[r] = function () {
            return s;
          }),
          e(o);
      } catch (e) {}
      return n;
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(4);
    e.exports = function () {
      var e = r(this),
        t = "";
      return (
        e.global && (t += "g"),
        e.ignoreCase && (t += "i"),
        e.multiline && (t += "m"),
        e.unicode && (t += "u"),
        e.sticky && (t += "y"),
        t
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(47),
      i = RegExp.prototype.exec;
    e.exports = function (e, t) {
      var n = e.exec;
      if ("function" == typeof n) {
        var o = n.call(e, t);
        if ("object" != typeof o)
          throw new TypeError(
            "RegExp exec method returned something other than an Object or null"
          );
        return o;
      }
      if ("RegExp" !== r(e))
        throw new TypeError("RegExp#exec called on incompatible receiver");
      return i.call(e, t);
    };
  },
  function (e, t, n) {
    "use strict";
    n(109);
    var r = n(12),
      i = n(15),
      o = n(3),
      s = n(25),
      a = n(6),
      c = n(82),
      u = a("species"),
      l = !o(function () {
        var e = /./;
        return (
          (e.exec = function () {
            var e = [];
            return (e.groups = { a: "7" }), e;
          }),
          "7" !== "".replace(e, "$<a>")
        );
      }),
      h = (function () {
        var e = /(?:)/,
          t = e.exec;
        e.exec = function () {
          return t.apply(this, arguments);
        };
        var n = "ab".split(e);
        return 2 === n.length && "a" === n[0] && "b" === n[1];
      })();
    e.exports = function (e, t, n) {
      var d = a(e),
        f = !o(function () {
          var t = {};
          return (
            (t[d] = function () {
              return 7;
            }),
            7 != ""[e](t)
          );
        }),
        p = f
          ? !o(function () {
              var t = !1,
                n = /a/;
              return (
                (n.exec = function () {
                  return (t = !0), null;
                }),
                "split" === e &&
                  ((n.constructor = {}),
                  (n.constructor[u] = function () {
                    return n;
                  })),
                n[d](""),
                !t
              );
            })
          : void 0;
      if (!f || !p || ("replace" === e && !l) || ("split" === e && !h)) {
        var v = /./[d],
          g = n(s, d, ""[e], function (e, t, n, r, i) {
            return t.exec === c
              ? f && !i
                ? { done: !0, value: v.call(t, n, r) }
                : { done: !0, value: e.call(n, t, r) }
              : { done: !1 };
          }),
          m = g[0],
          y = g[1];
        r(String.prototype, e, m),
          i(
            RegExp.prototype,
            d,
            2 == t
              ? function (e, t) {
                  return y.call(e, this, t);
                }
              : function (e) {
                  return y.call(e, this);
                }
          );
      }
    };
  },
  function (e, t, n) {
    var r = n(18),
      i = n(104),
      o = n(77),
      s = n(4),
      a = n(7),
      c = n(79),
      u = {},
      l = {};
    ((t = e.exports =
      function (e, t, n, h, d) {
        var f,
          p,
          v,
          g,
          m = d
            ? function () {
                return e;
              }
            : c(e),
          y = r(n, h, t ? 2 : 1),
          b = 0;
        if ("function" != typeof m) throw TypeError(e + " is not iterable!");
        if (o(m)) {
          for (f = a(e.length); f > b; b++)
            if ((g = t ? y(s((p = e[b]))[0], p[1]) : y(e[b])) === u || g === l)
              return g;
        } else
          for (v = m.call(e); !(p = v.next()).done; )
            if ((g = i(v, y, p.value, t)) === u || g === l) return g;
      }).BREAK = u),
      (t.RETURN = l);
  },
  function (e, t, n) {
    var r = n(2).navigator;
    e.exports = (r && r.userAgent) || "";
  },
  function (e, t, n) {
    "use strict";
    var r = n(2),
      i = n(1),
      o = n(12),
      s = n(44),
      a = n(28),
      c = n(57),
      u = n(43),
      l = n(5),
      h = n(3),
      d = n(53),
      f = n(39),
      p = n(68);
    e.exports = function (e, t, n, v, g, m) {
      var y = r[e],
        b = y,
        w = g ? "set" : "add",
        _ = b && b.prototype,
        S = {},
        I = function (e) {
          var t = _[e];
          o(
            _,
            e,
            "delete" == e || "has" == e
              ? function (e) {
                  return !(m && !l(e)) && t.call(this, 0 === e ? 0 : e);
                }
              : "get" == e
              ? function (e) {
                  return m && !l(e) ? void 0 : t.call(this, 0 === e ? 0 : e);
                }
              : "add" == e
              ? function (e) {
                  return t.call(this, 0 === e ? 0 : e), this;
                }
              : function (e, n) {
                  return t.call(this, 0 === e ? 0 : e, n), this;
                }
          );
        };
      if (
        "function" == typeof b &&
        (m ||
          (_.forEach &&
            !h(function () {
              new b().entries().next();
            })))
      ) {
        var E = new b(),
          O = E[w](m ? {} : -0, 1) != E,
          T = h(function () {
            E.has(1);
          }),
          k = d(function (e) {
            new b(e);
          }),
          x =
            !m &&
            h(function () {
              for (var e = new b(), t = 5; t--; ) e[w](t, t);
              return !e.has(-0);
            });
        k ||
          (((b = t(function (t, n) {
            u(t, b, e);
            var r = p(new y(), t, b);
            return null != n && c(n, g, r[w], r), r;
          })).prototype = _),
          (_.constructor = b)),
          (T || x) && (I("delete"), I("has"), g && I("get")),
          (x || O) && I(w),
          m && _.clear && delete _.clear;
      } else
        (b = v.getConstructor(t, e, g, w)), s(b.prototype, n), (a.NEED = !0);
      return (
        f(b, e),
        (S[e] = b),
        i(i.G + i.W + i.F * (b != y), S),
        m || v.setStrong(b, e, g),
        b
      );
    };
  },
  function (e, t, n) {
    for (
      var r,
        i = n(2),
        o = n(15),
        s = n(30),
        a = s("typed_array"),
        c = s("view"),
        u = !(!i.ArrayBuffer || !i.DataView),
        l = u,
        h = 0,
        d =
          "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(
            ","
          );
      h < 9;

    )
      (r = i[d[h++]])
        ? (o(r.prototype, a, !0), o(r.prototype, c, !0))
        : (l = !1);
    e.exports = { ABV: u, CONSTR: l, TYPED: a, VIEW: c };
  },
  function (e, t, n) {
    var r = n(5),
      i = n(2).document,
      o = r(i) && r(i.createElement);
    e.exports = function (e) {
      return o ? i.createElement(e) : {};
    };
  },
  function (e, t, n) {
    t.f = n(6);
  },
  function (e, t, n) {
    var r = n(49)("keys"),
      i = n(30);
    e.exports = function (e) {
      return r[e] || (r[e] = i(e));
    };
  },
  function (e, t) {
    e.exports =
      "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
        ","
      );
  },
  function (e, t, n) {
    var r = n(2).document;
    e.exports = r && r.documentElement;
  },
  function (e, t, n) {
    var r = n(5),
      i = n(4),
      o = function (e, t) {
        if ((i(e), !r(t) && null !== t))
          throw TypeError(t + ": can't set as prototype!");
      };
    e.exports = {
      set:
        Object.setPrototypeOf ||
        ("__proto__" in {}
          ? (function (e, t, r) {
              try {
                (r = n(18)(
                  Function.call,
                  n(21).f(Object.prototype, "__proto__").set,
                  2
                ))(e, []),
                  (t = !(e instanceof Array));
              } catch (e) {
                t = !0;
              }
              return function (e, n) {
                return o(e, n), t ? (e.__proto__ = n) : r(e, n), e;
              };
            })({}, !1)
          : void 0),
      check: o,
    };
  },
  function (e, t) {
    e.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff";
  },
  function (e, t, n) {
    var r = n(5),
      i = n(66).set;
    e.exports = function (e, t, n) {
      var o,
        s = t.constructor;
      return (
        s !== n &&
          "function" == typeof s &&
          (o = s.prototype) !== n.prototype &&
          r(o) &&
          i &&
          i(e, o),
        e
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(20),
      i = n(25);
    e.exports = function (e) {
      var t = String(i(this)),
        n = "",
        o = r(e);
      if (o < 0 || o == 1 / 0) throw RangeError("Count can't be negative");
      for (; o > 0; (o >>>= 1) && (t += t)) 1 & o && (n += t);
      return n;
    };
  },
  function (e, t) {
    e.exports =
      Math.sign ||
      function (e) {
        return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1;
      };
  },
  function (e, t) {
    var n = Math.expm1;
    e.exports =
      !n ||
      n(10) > 22025.465794806718 ||
      n(10) < 22025.465794806718 ||
      -2e-17 != n(-2e-17)
        ? function (e) {
            return 0 == (e = +e)
              ? e
              : e > -1e-6 && e < 1e-6
              ? e + (e * e) / 2
              : Math.exp(e) - 1;
          }
        : n;
  },
  function (e, t, n) {
    var r = n(20),
      i = n(25);
    e.exports = function (e) {
      return function (t, n) {
        var o,
          s,
          a = String(i(t)),
          c = r(n),
          u = a.length;
        return c < 0 || c >= u
          ? e
            ? ""
            : void 0
          : (o = a.charCodeAt(c)) < 55296 ||
            o > 56319 ||
            c + 1 === u ||
            (s = a.charCodeAt(c + 1)) < 56320 ||
            s > 57343
          ? e
            ? a.charAt(c)
            : o
          : e
          ? a.slice(c, c + 2)
          : s - 56320 + ((o - 55296) << 10) + 65536;
      };
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(31),
      i = n(1),
      o = n(12),
      s = n(15),
      a = n(41),
      c = n(103),
      u = n(39),
      l = n(36),
      h = n(6)("iterator"),
      d = !([].keys && "next" in [].keys()),
      f = function () {
        return this;
      };
    e.exports = function (e, t, n, p, v, g, m) {
      c(n, t, p);
      var y,
        b,
        w,
        _ = function (e) {
          if (!d && e in O) return O[e];
          switch (e) {
            case "keys":
            case "values":
              return function () {
                return new n(this, e);
              };
          }
          return function () {
            return new n(this, e);
          };
        },
        S = t + " Iterator",
        I = "values" == v,
        E = !1,
        O = e.prototype,
        T = O[h] || O["@@iterator"] || (v && O[v]),
        k = T || _(v),
        x = v ? (I ? _("entries") : k) : void 0,
        A = ("Array" == t && O.entries) || T;
      if (
        (A &&
          (w = l(A.call(new e()))) !== Object.prototype &&
          w.next &&
          (u(w, S, !0), r || "function" == typeof w[h] || s(w, h, f)),
        I &&
          T &&
          "values" !== T.name &&
          ((E = !0),
          (k = function () {
            return T.call(this);
          })),
        (r && !m) || (!d && !E && O[h]) || s(O, h, k),
        (a[t] = k),
        (a[S] = f),
        v)
      )
        if (
          ((y = {
            values: I ? k : _("values"),
            keys: g ? k : _("keys"),
            entries: x,
          }),
          m)
        )
          for (b in y) b in O || o(O, b, y[b]);
        else i(i.P + i.F * (d || E), t, y);
      return y;
    };
  },
  function (e, t, n) {
    var r = n(75),
      i = n(25);
    e.exports = function (e, t, n) {
      if (r(t)) throw TypeError("String#" + n + " doesn't accept regex!");
      return String(i(e));
    };
  },
  function (e, t, n) {
    var r = n(5),
      i = n(24),
      o = n(6)("match");
    e.exports = function (e) {
      var t;
      return r(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == i(e));
    };
  },
  function (e, t, n) {
    var r = n(6)("match");
    e.exports = function (e) {
      var t = /./;
      try {
        "/./"[e](t);
      } catch (n) {
        try {
          return (t[r] = !1), !"/./"[e](t);
        } catch (e) {}
      }
      return !0;
    };
  },
  function (e, t, n) {
    var r = n(41),
      i = n(6)("iterator"),
      o = Array.prototype;
    e.exports = function (e) {
      return void 0 !== e && (r.Array === e || o[i] === e);
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(10),
      i = n(29);
    e.exports = function (e, t, n) {
      t in e ? r.f(e, t, i(0, n)) : (e[t] = n);
    };
  },
  function (e, t, n) {
    var r = n(47),
      i = n(6)("iterator"),
      o = n(41);
    e.exports = n(8).getIteratorMethod = function (e) {
      if (null != e) return e[i] || e["@@iterator"] || o[r(e)];
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(11),
      i = n(33),
      o = n(7);
    e.exports = function (e) {
      for (
        var t = r(this),
          n = o(t.length),
          s = arguments.length,
          a = i(s > 1 ? arguments[1] : void 0, n),
          c = s > 2 ? arguments[2] : void 0,
          u = void 0 === c ? n : i(c, n);
        u > a;

      )
        t[a++] = e;
      return t;
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(37),
      i = n(108),
      o = n(41),
      s = n(16);
    (e.exports = n(73)(
      Array,
      "Array",
      function (e, t) {
        (this._t = s(e)), (this._i = 0), (this._k = t);
      },
      function () {
        var e = this._t,
          t = this._k,
          n = this._i++;
        return !e || n >= e.length
          ? ((this._t = void 0), i(1))
          : i(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]]);
      },
      "values"
    )),
      (o.Arguments = o.Array),
      r("keys"),
      r("values"),
      r("entries");
  },
  function (e, t, n) {
    "use strict";
    var r,
      i,
      o = n(54),
      s = RegExp.prototype.exec,
      a = String.prototype.replace,
      c = s,
      u =
        ((r = /a/),
        (i = /b*/g),
        s.call(r, "a"),
        s.call(i, "a"),
        0 !== r.lastIndex || 0 !== i.lastIndex),
      l = void 0 !== /()??/.exec("")[1];
    (u || l) &&
      (c = function (e) {
        var t,
          n,
          r,
          i,
          c = this;
        return (
          l && (n = new RegExp("^" + c.source + "$(?!\\s)", o.call(c))),
          u && (t = c.lastIndex),
          (r = s.call(c, e)),
          u && r && (c.lastIndex = c.global ? r.index + r[0].length : t),
          l &&
            r &&
            r.length > 1 &&
            a.call(r[0], n, function () {
              for (i = 1; i < arguments.length - 2; i++)
                void 0 === arguments[i] && (r[i] = void 0);
            }),
          r
        );
      }),
      (e.exports = c);
  },
  function (e, t, n) {
    "use strict";
    var r = n(72)(!0);
    e.exports = function (e, t, n) {
      return t + (n ? r(e, t).length : 1);
    };
  },
  function (e, t, n) {
    var r,
      i,
      o,
      s = n(18),
      a = n(97),
      c = n(65),
      u = n(61),
      l = n(2),
      h = l.process,
      d = l.setImmediate,
      f = l.clearImmediate,
      p = l.MessageChannel,
      v = l.Dispatch,
      g = 0,
      m = {},
      y = function () {
        var e = +this;
        if (m.hasOwnProperty(e)) {
          var t = m[e];
          delete m[e], t();
        }
      },
      b = function (e) {
        y.call(e.data);
      };
    (d && f) ||
      ((d = function (e) {
        for (var t = [], n = 1; arguments.length > n; ) t.push(arguments[n++]);
        return (
          (m[++g] = function () {
            a("function" == typeof e ? e : Function(e), t);
          }),
          r(g),
          g
        );
      }),
      (f = function (e) {
        delete m[e];
      }),
      "process" == n(24)(h)
        ? (r = function (e) {
            h.nextTick(s(y, e, 1));
          })
        : v && v.now
        ? (r = function (e) {
            v.now(s(y, e, 1));
          })
        : p
        ? ((o = (i = new p()).port2),
          (i.port1.onmessage = b),
          (r = s(o.postMessage, o, 1)))
        : l.addEventListener &&
          "function" == typeof postMessage &&
          !l.importScripts
        ? ((r = function (e) {
            l.postMessage(e + "", "*");
          }),
          l.addEventListener("message", b, !1))
        : (r =
            "onreadystatechange" in u("script")
              ? function (e) {
                  c.appendChild(u("script")).onreadystatechange = function () {
                    c.removeChild(this), y.call(e);
                  };
                }
              : function (e) {
                  setTimeout(s(y, e, 1), 0);
                })),
      (e.exports = { set: d, clear: f });
  },
  function (e, t, n) {
    "use strict";
    var r = n(2),
      i = n(9),
      o = n(31),
      s = n(60),
      a = n(15),
      c = n(44),
      u = n(3),
      l = n(43),
      h = n(20),
      d = n(7),
      f = n(116),
      p = n(35).f,
      v = n(10).f,
      g = n(80),
      m = n(39),
      y = r.ArrayBuffer,
      b = r.DataView,
      w = r.Math,
      _ = r.RangeError,
      S = r.Infinity,
      I = y,
      E = w.abs,
      O = w.pow,
      T = w.floor,
      k = w.log,
      x = w.LN2,
      A = i ? "_b" : "buffer",
      P = i ? "_l" : "byteLength",
      L = i ? "_o" : "byteOffset";
    function C(e, t, n) {
      var r,
        i,
        o,
        s = new Array(n),
        a = 8 * n - t - 1,
        c = (1 << a) - 1,
        u = c >> 1,
        l = 23 === t ? O(2, -24) - O(2, -77) : 0,
        h = 0,
        d = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
      for (
        (e = E(e)) != e || e === S
          ? ((i = e != e ? 1 : 0), (r = c))
          : ((r = T(k(e) / x)),
            e * (o = O(2, -r)) < 1 && (r--, (o *= 2)),
            (e += r + u >= 1 ? l / o : l * O(2, 1 - u)) * o >= 2 &&
              (r++, (o /= 2)),
            r + u >= c
              ? ((i = 0), (r = c))
              : r + u >= 1
              ? ((i = (e * o - 1) * O(2, t)), (r += u))
              : ((i = e * O(2, u - 1) * O(2, t)), (r = 0)));
        t >= 8;
        s[h++] = 255 & i, i /= 256, t -= 8
      );
      for (r = (r << t) | i, a += t; a > 0; s[h++] = 255 & r, r /= 256, a -= 8);
      return (s[--h] |= 128 * d), s;
    }
    function N(e, t, n) {
      var r,
        i = 8 * n - t - 1,
        o = (1 << i) - 1,
        s = o >> 1,
        a = i - 7,
        c = n - 1,
        u = e[c--],
        l = 127 & u;
      for (u >>= 7; a > 0; l = 256 * l + e[c], c--, a -= 8);
      for (
        r = l & ((1 << -a) - 1), l >>= -a, a += t;
        a > 0;
        r = 256 * r + e[c], c--, a -= 8
      );
      if (0 === l) l = 1 - s;
      else {
        if (l === o) return r ? NaN : u ? -S : S;
        (r += O(2, t)), (l -= s);
      }
      return (u ? -1 : 1) * r * O(2, l - t);
    }
    function R(e) {
      return (e[3] << 24) | (e[2] << 16) | (e[1] << 8) | e[0];
    }
    function M(e) {
      return [255 & e];
    }
    function D(e) {
      return [255 & e, (e >> 8) & 255];
    }
    function j(e) {
      return [255 & e, (e >> 8) & 255, (e >> 16) & 255, (e >> 24) & 255];
    }
    function F(e) {
      return C(e, 52, 8);
    }
    function B(e) {
      return C(e, 23, 4);
    }
    function U(e, t, n) {
      v(e.prototype, t, {
        get: function () {
          return this[n];
        },
      });
    }
    function q(e, t, n, r) {
      var i = f(+n);
      if (i + t > e[P]) throw _("Wrong index!");
      var o = e[A]._b,
        s = i + e[L],
        a = o.slice(s, s + t);
      return r ? a : a.reverse();
    }
    function V(e, t, n, r, i, o) {
      var s = f(+n);
      if (s + t > e[P]) throw _("Wrong index!");
      for (var a = e[A]._b, c = s + e[L], u = r(+i), l = 0; l < t; l++)
        a[c + l] = u[o ? l : t - l - 1];
    }
    if (s.ABV) {
      if (
        !u(function () {
          y(1);
        }) ||
        !u(function () {
          new y(-1);
        }) ||
        u(function () {
          return new y(), new y(1.5), new y(NaN), "ArrayBuffer" != y.name;
        })
      ) {
        for (
          var H,
            W = ((y = function (e) {
              return l(this, y), new I(f(e));
            }).prototype = I.prototype),
            z = p(I),
            G = 0;
          z.length > G;

        )
          (H = z[G++]) in y || a(y, H, I[H]);
        o || (W.constructor = y);
      }
      var K = new b(new y(2)),
        $ = b.prototype.setInt8;
      K.setInt8(0, 2147483648),
        K.setInt8(1, 2147483649),
        (!K.getInt8(0) && K.getInt8(1)) ||
          c(
            b.prototype,
            {
              setInt8: function (e, t) {
                $.call(this, e, (t << 24) >> 24);
              },
              setUint8: function (e, t) {
                $.call(this, e, (t << 24) >> 24);
              },
            },
            !0
          );
    } else
      (y = function (e) {
        l(this, y, "ArrayBuffer");
        var t = f(e);
        (this._b = g.call(new Array(t), 0)), (this[P] = t);
      }),
        (b = function (e, t, n) {
          l(this, b, "DataView"), l(e, y, "DataView");
          var r = e[P],
            i = h(t);
          if (i < 0 || i > r) throw _("Wrong offset!");
          if (i + (n = void 0 === n ? r - i : d(n)) > r)
            throw _("Wrong length!");
          (this[A] = e), (this[L] = i), (this[P] = n);
        }),
        i &&
          (U(y, "byteLength", "_l"),
          U(b, "buffer", "_b"),
          U(b, "byteLength", "_l"),
          U(b, "byteOffset", "_o")),
        c(b.prototype, {
          getInt8: function (e) {
            return (q(this, 1, e)[0] << 24) >> 24;
          },
          getUint8: function (e) {
            return q(this, 1, e)[0];
          },
          getInt16: function (e) {
            var t = q(this, 2, e, arguments[1]);
            return (((t[1] << 8) | t[0]) << 16) >> 16;
          },
          getUint16: function (e) {
            var t = q(this, 2, e, arguments[1]);
            return (t[1] << 8) | t[0];
          },
          getInt32: function (e) {
            return R(q(this, 4, e, arguments[1]));
          },
          getUint32: function (e) {
            return R(q(this, 4, e, arguments[1])) >>> 0;
          },
          getFloat32: function (e) {
            return N(q(this, 4, e, arguments[1]), 23, 4);
          },
          getFloat64: function (e) {
            return N(q(this, 8, e, arguments[1]), 52, 8);
          },
          setInt8: function (e, t) {
            V(this, 1, e, M, t);
          },
          setUint8: function (e, t) {
            V(this, 1, e, M, t);
          },
          setInt16: function (e, t) {
            V(this, 2, e, D, t, arguments[2]);
          },
          setUint16: function (e, t) {
            V(this, 2, e, D, t, arguments[2]);
          },
          setInt32: function (e, t) {
            V(this, 4, e, j, t, arguments[2]);
          },
          setUint32: function (e, t) {
            V(this, 4, e, j, t, arguments[2]);
          },
          setFloat32: function (e, t) {
            V(this, 4, e, B, t, arguments[2]);
          },
          setFloat64: function (e, t) {
            V(this, 8, e, F, t, arguments[2]);
          },
        });
    m(y, "ArrayBuffer"),
      m(b, "DataView"),
      a(b.prototype, s.VIEW, !0),
      (t.ArrayBuffer = y),
      (t.DataView = b);
  },
  function (e, t) {
    var n = (e.exports =
      "undefined" != typeof window && window.Math == Math
        ? window
        : "undefined" != typeof self && self.Math == Math
        ? self
        : Function("return this")());
    "number" == typeof __g && (__g = n);
  },
  function (e, t) {
    e.exports = function (e) {
      return "object" == typeof e ? null !== e : "function" == typeof e;
    };
  },
  function (e, t, n) {
    e.exports = !n(121)(function () {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    });
  },
  function (e, t, n) {
    e.exports =
      !n(9) &&
      !n(3)(function () {
        return (
          7 !=
          Object.defineProperty(n(61)("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (e, t, n) {
    var r = n(2),
      i = n(8),
      o = n(31),
      s = n(62),
      a = n(10).f;
    e.exports = function (e) {
      var t = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
      "_" == e.charAt(0) || e in t || a(t, e, { value: s.f(e) });
    };
  },
  function (e, t, n) {
    var r = n(14),
      i = n(16),
      o = n(50)(!1),
      s = n(63)("IE_PROTO");
    e.exports = function (e, t) {
      var n,
        a = i(e),
        c = 0,
        u = [];
      for (n in a) n != s && r(a, n) && u.push(n);
      for (; t.length > c; ) r(a, (n = t[c++])) && (~o(u, n) || u.push(n));
      return u;
    };
  },
  function (e, t, n) {
    var r = n(10),
      i = n(4),
      o = n(32);
    e.exports = n(9)
      ? Object.defineProperties
      : function (e, t) {
          i(e);
          for (var n, s = o(t), a = s.length, c = 0; a > c; )
            r.f(e, (n = s[c++]), t[n]);
          return e;
        };
  },
  function (e, t, n) {
    var r = n(16),
      i = n(35).f,
      o = {}.toString,
      s =
        "object" == typeof window && window && Object.getOwnPropertyNames
          ? Object.getOwnPropertyNames(window)
          : [];
    e.exports.f = function (e) {
      return s && "[object Window]" == o.call(e)
        ? (function (e) {
            try {
              return i(e);
            } catch (e) {
              return s.slice();
            }
          })(e)
        : i(r(e));
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(9),
      i = n(32),
      o = n(51),
      s = n(46),
      a = n(11),
      c = n(45),
      u = Object.assign;
    e.exports =
      !u ||
      n(3)(function () {
        var e = {},
          t = {},
          n = Symbol(),
          r = "abcdefghijklmnopqrst";
        return (
          (e[n] = 7),
          r.split("").forEach(function (e) {
            t[e] = e;
          }),
          7 != u({}, e)[n] || Object.keys(u({}, t)).join("") != r
        );
      })
        ? function (e, t) {
            for (
              var n = a(e), u = arguments.length, l = 1, h = o.f, d = s.f;
              u > l;

            )
              for (
                var f,
                  p = c(arguments[l++]),
                  v = h ? i(p).concat(h(p)) : i(p),
                  g = v.length,
                  m = 0;
                g > m;

              )
                (f = v[m++]), (r && !d.call(p, f)) || (n[f] = p[f]);
            return n;
          }
        : u;
  },
  function (e, t) {
    e.exports =
      Object.is ||
      function (e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
      };
  },
  function (e, t, n) {
    "use strict";
    var r = n(19),
      i = n(5),
      o = n(97),
      s = [].slice,
      a = {},
      c = function (e, t, n) {
        if (!(t in a)) {
          for (var r = [], i = 0; i < t; i++) r[i] = "a[" + i + "]";
          a[t] = Function("F,a", "return new F(" + r.join(",") + ")");
        }
        return a[t](e, n);
      };
    e.exports =
      Function.bind ||
      function (e) {
        var t = r(this),
          n = s.call(arguments, 1),
          a = function () {
            var r = n.concat(s.call(arguments));
            return this instanceof a ? c(t, r.length, r) : o(t, r, e);
          };
        return i(t.prototype) && (a.prototype = t.prototype), a;
      };
  },
  function (e, t) {
    e.exports = function (e, t, n) {
      var r = void 0 === n;
      switch (t.length) {
        case 0:
          return r ? e() : e.call(n);
        case 1:
          return r ? e(t[0]) : e.call(n, t[0]);
        case 2:
          return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
        case 3:
          return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
        case 4:
          return r
            ? e(t[0], t[1], t[2], t[3])
            : e.call(n, t[0], t[1], t[2], t[3]);
      }
      return e.apply(n, t);
    };
  },
  function (e, t, n) {
    var r = n(2).parseInt,
      i = n(40).trim,
      o = n(67),
      s = /^[-+]?0[xX]/;
    e.exports =
      8 !== r(o + "08") || 22 !== r(o + "0x16")
        ? function (e, t) {
            var n = i(String(e), 3);
            return r(n, t >>> 0 || (s.test(n) ? 16 : 10));
          }
        : r;
  },
  function (e, t, n) {
    var r = n(2).parseFloat,
      i = n(40).trim;
    e.exports =
      1 / r(n(67) + "-0") != -1 / 0
        ? function (e) {
            var t = i(String(e), 3),
              n = r(t);
            return 0 === n && "-" == t.charAt(0) ? -0 : n;
          }
        : r;
  },
  function (e, t, n) {
    var r = n(24);
    e.exports = function (e, t) {
      if ("number" != typeof e && "Number" != r(e)) throw TypeError(t);
      return +e;
    };
  },
  function (e, t, n) {
    var r = n(5),
      i = Math.floor;
    e.exports = function (e) {
      return !r(e) && isFinite(e) && i(e) === e;
    };
  },
  function (e, t) {
    e.exports =
      Math.log1p ||
      function (e) {
        return (e = +e) > -1e-8 && e < 1e-8 ? e - (e * e) / 2 : Math.log(1 + e);
      };
  },
  function (e, t, n) {
    "use strict";
    var r = n(34),
      i = n(29),
      o = n(39),
      s = {};
    n(15)(s, n(6)("iterator"), function () {
      return this;
    }),
      (e.exports = function (e, t, n) {
        (e.prototype = r(s, { next: i(1, n) })), o(e, t + " Iterator");
      });
  },
  function (e, t, n) {
    var r = n(4);
    e.exports = function (e, t, n, i) {
      try {
        return i ? t(r(n)[0], n[1]) : t(n);
      } catch (t) {
        var o = e.return;
        throw (void 0 !== o && r(o.call(e)), t);
      }
    };
  },
  function (e, t, n) {
    var r = n(217);
    e.exports = function (e, t) {
      return new (r(e))(t);
    };
  },
  function (e, t, n) {
    var r = n(19),
      i = n(11),
      o = n(45),
      s = n(7);
    e.exports = function (e, t, n, a, c) {
      r(t);
      var u = i(e),
        l = o(u),
        h = s(u.length),
        d = c ? h - 1 : 0,
        f = c ? -1 : 1;
      if (n < 2)
        for (;;) {
          if (d in l) {
            (a = l[d]), (d += f);
            break;
          }
          if (((d += f), c ? d < 0 : h <= d))
            throw TypeError("Reduce of empty array with no initial value");
        }
      for (; c ? d >= 0 : h > d; d += f) d in l && (a = t(a, l[d], d, u));
      return a;
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(11),
      i = n(33),
      o = n(7);
    e.exports =
      [].copyWithin ||
      function (e, t) {
        var n = r(this),
          s = o(n.length),
          a = i(e, s),
          c = i(t, s),
          u = arguments.length > 2 ? arguments[2] : void 0,
          l = Math.min((void 0 === u ? s : i(u, s)) - c, s - a),
          h = 1;
        for (
          c < a && a < c + l && ((h = -1), (c += l - 1), (a += l - 1));
          l-- > 0;

        )
          c in n ? (n[a] = n[c]) : delete n[a], (a += h), (c += h);
        return n;
      };
  },
  function (e, t) {
    e.exports = function (e, t) {
      return { value: t, done: !!e };
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(82);
    n(1)({ target: "RegExp", proto: !0, forced: r !== /./.exec }, { exec: r });
  },
  function (e, t, n) {
    n(9) &&
      "g" != /./g.flags &&
      n(10).f(RegExp.prototype, "flags", { configurable: !0, get: n(54) });
  },
  function (e, t, n) {
    "use strict";
    var r,
      i,
      o,
      s,
      a = n(31),
      c = n(2),
      u = n(18),
      l = n(47),
      h = n(1),
      d = n(5),
      f = n(19),
      p = n(43),
      v = n(57),
      g = n(48),
      m = n(84).set,
      y = n(237)(),
      b = n(112),
      w = n(238),
      _ = n(58),
      S = n(113),
      I = c.TypeError,
      E = c.process,
      O = E && E.versions,
      T = (O && O.v8) || "",
      k = c.Promise,
      x = "process" == l(E),
      A = function () {},
      P = (i = b.f),
      L = !!(function () {
        try {
          var e = k.resolve(1),
            t = ((e.constructor = {})[n(6)("species")] = function (e) {
              e(A, A);
            });
          return (
            (x || "function" == typeof PromiseRejectionEvent) &&
            e.then(A) instanceof t &&
            0 !== T.indexOf("6.6") &&
            -1 === _.indexOf("Chrome/66")
          );
        } catch (e) {}
      })(),
      C = function (e) {
        var t;
        return !(!d(e) || "function" != typeof (t = e.then)) && t;
      },
      N = function (e, t) {
        if (!e._n) {
          e._n = !0;
          var n = e._c;
          y(function () {
            for (
              var r = e._v,
                i = 1 == e._s,
                o = 0,
                s = function (t) {
                  var n,
                    o,
                    s,
                    a = i ? t.ok : t.fail,
                    c = t.resolve,
                    u = t.reject,
                    l = t.domain;
                  try {
                    a
                      ? (i || (2 == e._h && D(e), (e._h = 1)),
                        !0 === a
                          ? (n = r)
                          : (l && l.enter(),
                            (n = a(r)),
                            l && (l.exit(), (s = !0))),
                        n === t.promise
                          ? u(I("Promise-chain cycle"))
                          : (o = C(n))
                          ? o.call(n, c, u)
                          : c(n))
                      : u(r);
                  } catch (e) {
                    l && !s && l.exit(), u(e);
                  }
                };
              n.length > o;

            )
              s(n[o++]);
            (e._c = []), (e._n = !1), t && !e._h && R(e);
          });
        }
      },
      R = function (e) {
        m.call(c, function () {
          var t,
            n,
            r,
            i = e._v,
            o = M(e);
          if (
            (o &&
              ((t = w(function () {
                x
                  ? E.emit("unhandledRejection", i, e)
                  : (n = c.onunhandledrejection)
                  ? n({ promise: e, reason: i })
                  : (r = c.console) &&
                    r.error &&
                    r.error("Unhandled promise rejection", i);
              })),
              (e._h = x || M(e) ? 2 : 1)),
            (e._a = void 0),
            o && t.e)
          )
            throw t.v;
        });
      },
      M = function (e) {
        return 1 !== e._h && 0 === (e._a || e._c).length;
      },
      D = function (e) {
        m.call(c, function () {
          var t;
          x
            ? E.emit("rejectionHandled", e)
            : (t = c.onrejectionhandled) && t({ promise: e, reason: e._v });
        });
      },
      j = function (e) {
        var t = this;
        t._d ||
          ((t._d = !0),
          ((t = t._w || t)._v = e),
          (t._s = 2),
          t._a || (t._a = t._c.slice()),
          N(t, !0));
      },
      F = function (e) {
        var t,
          n = this;
        if (!n._d) {
          (n._d = !0), (n = n._w || n);
          try {
            if (n === e) throw I("Promise can't be resolved itself");
            (t = C(e))
              ? y(function () {
                  var r = { _w: n, _d: !1 };
                  try {
                    t.call(e, u(F, r, 1), u(j, r, 1));
                  } catch (e) {
                    j.call(r, e);
                  }
                })
              : ((n._v = e), (n._s = 1), N(n, !1));
          } catch (e) {
            j.call({ _w: n, _d: !1 }, e);
          }
        }
      };
    L ||
      ((k = function (e) {
        p(this, k, "Promise", "_h"), f(e), r.call(this);
        try {
          e(u(F, this, 1), u(j, this, 1));
        } catch (e) {
          j.call(this, e);
        }
      }),
      ((r = function (e) {
        (this._c = []),
          (this._a = void 0),
          (this._s = 0),
          (this._d = !1),
          (this._v = void 0),
          (this._h = 0),
          (this._n = !1);
      }).prototype = n(44)(k.prototype, {
        then: function (e, t) {
          var n = P(g(this, k));
          return (
            (n.ok = "function" != typeof e || e),
            (n.fail = "function" == typeof t && t),
            (n.domain = x ? E.domain : void 0),
            this._c.push(n),
            this._a && this._a.push(n),
            this._s && N(this, !1),
            n.promise
          );
        },
        catch: function (e) {
          return this.then(void 0, e);
        },
      })),
      (o = function () {
        var e = new r();
        (this.promise = e),
          (this.resolve = u(F, e, 1)),
          (this.reject = u(j, e, 1));
      }),
      (b.f = P =
        function (e) {
          return e === k || e === s ? new o(e) : i(e);
        })),
      h(h.G + h.W + h.F * !L, { Promise: k }),
      n(39)(k, "Promise"),
      n(42)("Promise"),
      (s = n(8).Promise),
      h(h.S + h.F * !L, "Promise", {
        reject: function (e) {
          var t = P(this);
          return (0, t.reject)(e), t.promise;
        },
      }),
      h(h.S + h.F * (a || !L), "Promise", {
        resolve: function (e) {
          return S(a && this === s ? k : this, e);
        },
      }),
      h(
        h.S +
          h.F *
            !(
              L &&
              n(53)(function (e) {
                k.all(e).catch(A);
              })
            ),
        "Promise",
        {
          all: function (e) {
            var t = this,
              n = P(t),
              r = n.resolve,
              i = n.reject,
              o = w(function () {
                var n = [],
                  o = 0,
                  s = 1;
                v(e, !1, function (e) {
                  var a = o++,
                    c = !1;
                  n.push(void 0),
                    s++,
                    t.resolve(e).then(function (e) {
                      c || ((c = !0), (n[a] = e), --s || r(n));
                    }, i);
                }),
                  --s || r(n);
              });
            return o.e && i(o.v), n.promise;
          },
          race: function (e) {
            var t = this,
              n = P(t),
              r = n.reject,
              i = w(function () {
                v(e, !1, function (e) {
                  t.resolve(e).then(n.resolve, r);
                });
              });
            return i.e && r(i.v), n.promise;
          },
        }
      );
  },
  function (e, t, n) {
    "use strict";
    var r = n(19);
    function i(e) {
      var t, n;
      (this.promise = new e(function (e, r) {
        if (void 0 !== t || void 0 !== n)
          throw TypeError("Bad Promise constructor");
        (t = e), (n = r);
      })),
        (this.resolve = r(t)),
        (this.reject = r(n));
    }
    e.exports.f = function (e) {
      return new i(e);
    };
  },
  function (e, t, n) {
    var r = n(4),
      i = n(5),
      o = n(112);
    e.exports = function (e, t) {
      if ((r(e), i(t) && t.constructor === e)) return t;
      var n = o.f(e);
      return (0, n.resolve)(t), n.promise;
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(10).f,
      i = n(34),
      o = n(44),
      s = n(18),
      a = n(43),
      c = n(57),
      u = n(73),
      l = n(108),
      h = n(42),
      d = n(9),
      f = n(28).fastKey,
      p = n(38),
      v = d ? "_s" : "size",
      g = function (e, t) {
        var n,
          r = f(t);
        if ("F" !== r) return e._i[r];
        for (n = e._f; n; n = n.n) if (n.k == t) return n;
      };
    e.exports = {
      getConstructor: function (e, t, n, u) {
        var l = e(function (e, r) {
          a(e, l, t, "_i"),
            (e._t = t),
            (e._i = i(null)),
            (e._f = void 0),
            (e._l = void 0),
            (e[v] = 0),
            null != r && c(r, n, e[u], e);
        });
        return (
          o(l.prototype, {
            clear: function () {
              for (var e = p(this, t), n = e._i, r = e._f; r; r = r.n)
                (r.r = !0), r.p && (r.p = r.p.n = void 0), delete n[r.i];
              (e._f = e._l = void 0), (e[v] = 0);
            },
            delete: function (e) {
              var n = p(this, t),
                r = g(n, e);
              if (r) {
                var i = r.n,
                  o = r.p;
                delete n._i[r.i],
                  (r.r = !0),
                  o && (o.n = i),
                  i && (i.p = o),
                  n._f == r && (n._f = i),
                  n._l == r && (n._l = o),
                  n[v]--;
              }
              return !!r;
            },
            forEach: function (e) {
              p(this, t);
              for (
                var n,
                  r = s(e, arguments.length > 1 ? arguments[1] : void 0, 3);
                (n = n ? n.n : this._f);

              )
                for (r(n.v, n.k, this); n && n.r; ) n = n.p;
            },
            has: function (e) {
              return !!g(p(this, t), e);
            },
          }),
          d &&
            r(l.prototype, "size", {
              get: function () {
                return p(this, t)[v];
              },
            }),
          l
        );
      },
      def: function (e, t, n) {
        var r,
          i,
          o = g(e, t);
        return (
          o
            ? (o.v = n)
            : ((e._l = o =
                {
                  i: (i = f(t, !0)),
                  k: t,
                  v: n,
                  p: (r = e._l),
                  n: void 0,
                  r: !1,
                }),
              e._f || (e._f = o),
              r && (r.n = o),
              e[v]++,
              "F" !== i && (e._i[i] = o)),
          e
        );
      },
      getEntry: g,
      setStrong: function (e, t, n) {
        u(
          e,
          t,
          function (e, n) {
            (this._t = p(e, t)), (this._k = n), (this._l = void 0);
          },
          function () {
            for (var e = this._k, t = this._l; t && t.r; ) t = t.p;
            return this._t && (this._l = t = t ? t.n : this._t._f)
              ? l(0, "keys" == e ? t.k : "values" == e ? t.v : [t.k, t.v])
              : ((this._t = void 0), l(1));
          },
          n ? "entries" : "values",
          !n,
          !0
        ),
          h(t);
      },
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(44),
      i = n(28).getWeak,
      o = n(4),
      s = n(5),
      a = n(43),
      c = n(57),
      u = n(23),
      l = n(14),
      h = n(38),
      d = u(5),
      f = u(6),
      p = 0,
      v = function (e) {
        return e._l || (e._l = new g());
      },
      g = function () {
        this.a = [];
      },
      m = function (e, t) {
        return d(e.a, function (e) {
          return e[0] === t;
        });
      };
    (g.prototype = {
      get: function (e) {
        var t = m(this, e);
        if (t) return t[1];
      },
      has: function (e) {
        return !!m(this, e);
      },
      set: function (e, t) {
        var n = m(this, e);
        n ? (n[1] = t) : this.a.push([e, t]);
      },
      delete: function (e) {
        var t = f(this.a, function (t) {
          return t[0] === e;
        });
        return ~t && this.a.splice(t, 1), !!~t;
      },
    }),
      (e.exports = {
        getConstructor: function (e, t, n, o) {
          var u = e(function (e, r) {
            a(e, u, t, "_i"),
              (e._t = t),
              (e._i = p++),
              (e._l = void 0),
              null != r && c(r, n, e[o], e);
          });
          return (
            r(u.prototype, {
              delete: function (e) {
                if (!s(e)) return !1;
                var n = i(e);
                return !0 === n
                  ? v(h(this, t)).delete(e)
                  : n && l(n, this._i) && delete n[this._i];
              },
              has: function (e) {
                if (!s(e)) return !1;
                var n = i(e);
                return !0 === n ? v(h(this, t)).has(e) : n && l(n, this._i);
              },
            }),
            u
          );
        },
        def: function (e, t, n) {
          var r = i(o(t), !0);
          return !0 === r ? v(e).set(t, n) : (r[e._i] = n), e;
        },
        ufstore: v,
      });
  },
  function (e, t, n) {
    var r = n(20),
      i = n(7);
    e.exports = function (e) {
      if (void 0 === e) return 0;
      var t = r(e),
        n = i(t);
      if (t !== n) throw RangeError("Wrong length!");
      return n;
    };
  },
  function (e, t, n) {
    var r = n(35),
      i = n(51),
      o = n(4),
      s = n(2).Reflect;
    e.exports =
      (s && s.ownKeys) ||
      function (e) {
        var t = r.f(o(e)),
          n = i.f;
        return n ? t.concat(n(e)) : t;
      };
  },
  function (e, t, n) {
    var r = n(7),
      i = n(69),
      o = n(25);
    e.exports = function (e, t, n, s) {
      var a = String(o(e)),
        c = a.length,
        u = void 0 === n ? " " : String(n),
        l = r(t);
      if (l <= c || "" == u) return a;
      var h = l - c,
        d = i.call(u, Math.ceil(h / u.length));
      return d.length > h && (d = d.slice(0, h)), s ? d + a : a + d;
    };
  },
  function (e, t, n) {
    var r = n(9),
      i = n(32),
      o = n(16),
      s = n(46).f;
    e.exports = function (e) {
      return function (t) {
        for (var n, a = o(t), c = i(a), u = c.length, l = 0, h = []; u > l; )
          (n = c[l++]), (r && !s.call(a, n)) || h.push(e ? [n, a[n]] : a[n]);
        return h;
      };
    };
  },
  function (e, t) {
    var n = (e.exports = { version: "2.6.12" });
    "number" == typeof __e && (__e = n);
  },
  function (e, t) {
    e.exports = function (e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    };
  },
  function (e, t, n) {
    n(123), (e.exports = n(309));
  },
  function (e, t, n) {
    "use strict";
    n(124);
    var r,
      i = (r = n(296)) && r.__esModule ? r : { default: r };
    i.default._babelPolyfill &&
      "undefined" != typeof console &&
      console.warn &&
      console.warn(
        "@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended and may have consequences if different versions of the polyfills are applied sequentially. If you do need to load the polyfill more than once, use @babel/polyfill/noConflict instead to bypass the warning."
      ),
      (i.default._babelPolyfill = !0);
  },
  function (e, t, n) {
    "use strict";
    n(125),
      n(268),
      n(270),
      n(273),
      n(275),
      n(277),
      n(279),
      n(281),
      n(283),
      n(285),
      n(287),
      n(289),
      n(291),
      n(295);
  },
  function (e, t, n) {
    n(126),
      n(129),
      n(130),
      n(131),
      n(132),
      n(133),
      n(134),
      n(135),
      n(136),
      n(137),
      n(138),
      n(139),
      n(140),
      n(141),
      n(142),
      n(143),
      n(144),
      n(145),
      n(146),
      n(147),
      n(148),
      n(149),
      n(150),
      n(151),
      n(152),
      n(153),
      n(154),
      n(155),
      n(156),
      n(157),
      n(158),
      n(159),
      n(160),
      n(161),
      n(162),
      n(163),
      n(164),
      n(165),
      n(166),
      n(167),
      n(168),
      n(169),
      n(170),
      n(172),
      n(173),
      n(174),
      n(175),
      n(176),
      n(177),
      n(178),
      n(179),
      n(180),
      n(181),
      n(182),
      n(183),
      n(184),
      n(185),
      n(186),
      n(187),
      n(188),
      n(189),
      n(190),
      n(191),
      n(192),
      n(193),
      n(194),
      n(195),
      n(196),
      n(197),
      n(198),
      n(199),
      n(200),
      n(201),
      n(202),
      n(203),
      n(204),
      n(205),
      n(207),
      n(208),
      n(210),
      n(211),
      n(212),
      n(213),
      n(214),
      n(215),
      n(216),
      n(218),
      n(219),
      n(220),
      n(221),
      n(222),
      n(223),
      n(224),
      n(225),
      n(226),
      n(227),
      n(228),
      n(229),
      n(230),
      n(81),
      n(231),
      n(109),
      n(232),
      n(110),
      n(233),
      n(234),
      n(235),
      n(236),
      n(111),
      n(239),
      n(240),
      n(241),
      n(242),
      n(243),
      n(244),
      n(245),
      n(246),
      n(247),
      n(248),
      n(249),
      n(250),
      n(251),
      n(252),
      n(253),
      n(254),
      n(255),
      n(256),
      n(257),
      n(258),
      n(259),
      n(260),
      n(261),
      n(262),
      n(263),
      n(264),
      n(265),
      n(266),
      n(267),
      (e.exports = n(8));
  },
  function (e, t, n) {
    "use strict";
    var r = n(2),
      i = n(14),
      o = n(9),
      s = n(1),
      a = n(12),
      c = n(28).KEY,
      u = n(3),
      l = n(49),
      h = n(39),
      d = n(30),
      f = n(6),
      p = n(62),
      v = n(90),
      g = n(128),
      m = n(52),
      y = n(4),
      b = n(5),
      w = n(11),
      _ = n(16),
      S = n(27),
      I = n(29),
      E = n(34),
      O = n(93),
      T = n(21),
      k = n(51),
      x = n(10),
      A = n(32),
      P = T.f,
      L = x.f,
      C = O.f,
      N = r.Symbol,
      R = r.JSON,
      M = R && R.stringify,
      D = f("_hidden"),
      j = f("toPrimitive"),
      F = {}.propertyIsEnumerable,
      B = l("symbol-registry"),
      U = l("symbols"),
      q = l("op-symbols"),
      V = Object.prototype,
      H = "function" == typeof N && !!k.f,
      W = r.QObject,
      z = !W || !W.prototype || !W.prototype.findChild,
      G =
        o &&
        u(function () {
          return (
            7 !=
            E(
              L({}, "a", {
                get: function () {
                  return L(this, "a", { value: 7 }).a;
                },
              })
            ).a
          );
        })
          ? function (e, t, n) {
              var r = P(V, t);
              r && delete V[t], L(e, t, n), r && e !== V && L(V, t, r);
            }
          : L,
      K = function (e) {
        var t = (U[e] = E(N.prototype));
        return (t._k = e), t;
      },
      $ =
        H && "symbol" == typeof N.iterator
          ? function (e) {
              return "symbol" == typeof e;
            }
          : function (e) {
              return e instanceof N;
            },
      J = function (e, t, n) {
        return (
          e === V && J(q, t, n),
          y(e),
          (t = S(t, !0)),
          y(n),
          i(U, t)
            ? (n.enumerable
                ? (i(e, D) && e[D][t] && (e[D][t] = !1),
                  (n = E(n, { enumerable: I(0, !1) })))
                : (i(e, D) || L(e, D, I(1, {})), (e[D][t] = !0)),
              G(e, t, n))
            : L(e, t, n)
        );
      },
      Y = function (e, t) {
        y(e);
        for (var n, r = g((t = _(t))), i = 0, o = r.length; o > i; )
          J(e, (n = r[i++]), t[n]);
        return e;
      },
      Z = function (e) {
        var t = F.call(this, (e = S(e, !0)));
        return (
          !(this === V && i(U, e) && !i(q, e)) &&
          (!(t || !i(this, e) || !i(U, e) || (i(this, D) && this[D][e])) || t)
        );
      },
      X = function (e, t) {
        if (((e = _(e)), (t = S(t, !0)), e !== V || !i(U, t) || i(q, t))) {
          var n = P(e, t);
          return (
            !n || !i(U, t) || (i(e, D) && e[D][t]) || (n.enumerable = !0), n
          );
        }
      },
      Q = function (e) {
        for (var t, n = C(_(e)), r = [], o = 0; n.length > o; )
          i(U, (t = n[o++])) || t == D || t == c || r.push(t);
        return r;
      },
      ee = function (e) {
        for (
          var t, n = e === V, r = C(n ? q : _(e)), o = [], s = 0;
          r.length > s;

        )
          !i(U, (t = r[s++])) || (n && !i(V, t)) || o.push(U[t]);
        return o;
      };
    H ||
      (a(
        (N = function () {
          if (this instanceof N)
            throw TypeError("Symbol is not a constructor!");
          var e = d(arguments.length > 0 ? arguments[0] : void 0),
            t = function (n) {
              this === V && t.call(q, n),
                i(this, D) && i(this[D], e) && (this[D][e] = !1),
                G(this, e, I(1, n));
            };
          return o && z && G(V, e, { configurable: !0, set: t }), K(e);
        }).prototype,
        "toString",
        function () {
          return this._k;
        }
      ),
      (T.f = X),
      (x.f = J),
      (n(35).f = O.f = Q),
      (n(46).f = Z),
      (k.f = ee),
      o && !n(31) && a(V, "propertyIsEnumerable", Z, !0),
      (p.f = function (e) {
        return K(f(e));
      })),
      s(s.G + s.W + s.F * !H, { Symbol: N });
    for (
      var te =
          "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
            ","
          ),
        ne = 0;
      te.length > ne;

    )
      f(te[ne++]);
    for (var re = A(f.store), ie = 0; re.length > ie; ) v(re[ie++]);
    s(s.S + s.F * !H, "Symbol", {
      for: function (e) {
        return i(B, (e += "")) ? B[e] : (B[e] = N(e));
      },
      keyFor: function (e) {
        if (!$(e)) throw TypeError(e + " is not a symbol!");
        for (var t in B) if (B[t] === e) return t;
      },
      useSetter: function () {
        z = !0;
      },
      useSimple: function () {
        z = !1;
      },
    }),
      s(s.S + s.F * !H, "Object", {
        create: function (e, t) {
          return void 0 === t ? E(e) : Y(E(e), t);
        },
        defineProperty: J,
        defineProperties: Y,
        getOwnPropertyDescriptor: X,
        getOwnPropertyNames: Q,
        getOwnPropertySymbols: ee,
      });
    var oe = u(function () {
      k.f(1);
    });
    s(s.S + s.F * oe, "Object", {
      getOwnPropertySymbols: function (e) {
        return k.f(w(e));
      },
    }),
      R &&
        s(
          s.S +
            s.F *
              (!H ||
                u(function () {
                  var e = N();
                  return (
                    "[null]" != M([e]) ||
                    "{}" != M({ a: e }) ||
                    "{}" != M(Object(e))
                  );
                })),
          "JSON",
          {
            stringify: function (e) {
              for (var t, n, r = [e], i = 1; arguments.length > i; )
                r.push(arguments[i++]);
              if (((n = t = r[1]), (b(t) || void 0 !== e) && !$(e)))
                return (
                  m(t) ||
                    (t = function (e, t) {
                      if (
                        ("function" == typeof n && (t = n.call(this, e, t)),
                        !$(t))
                      )
                        return t;
                    }),
                  (r[1] = t),
                  M.apply(R, r)
                );
            },
          }
        ),
      N.prototype[j] || n(15)(N.prototype, j, N.prototype.valueOf),
      h(N, "Symbol"),
      h(Math, "Math", !0),
      h(r.JSON, "JSON", !0);
  },
  function (e, t, n) {
    e.exports = n(49)("native-function-to-string", Function.toString);
  },
  function (e, t, n) {
    var r = n(32),
      i = n(51),
      o = n(46);
    e.exports = function (e) {
      var t = r(e),
        n = i.f;
      if (n)
        for (var s, a = n(e), c = o.f, u = 0; a.length > u; )
          c.call(e, (s = a[u++])) && t.push(s);
      return t;
    };
  },
  function (e, t, n) {
    var r = n(1);
    r(r.S, "Object", { create: n(34) });
  },
  function (e, t, n) {
    var r = n(1);
    r(r.S + r.F * !n(9), "Object", { defineProperty: n(10).f });
  },
  function (e, t, n) {
    var r = n(1);
    r(r.S + r.F * !n(9), "Object", { defineProperties: n(92) });
  },
  function (e, t, n) {
    var r = n(16),
      i = n(21).f;
    n(22)("getOwnPropertyDescriptor", function () {
      return function (e, t) {
        return i(r(e), t);
      };
    });
  },
  function (e, t, n) {
    var r = n(11),
      i = n(36);
    n(22)("getPrototypeOf", function () {
      return function (e) {
        return i(r(e));
      };
    });
  },
  function (e, t, n) {
    var r = n(11),
      i = n(32);
    n(22)("keys", function () {
      return function (e) {
        return i(r(e));
      };
    });
  },
  function (e, t, n) {
    n(22)("getOwnPropertyNames", function () {
      return n(93).f;
    });
  },
  function (e, t, n) {
    var r = n(5),
      i = n(28).onFreeze;
    n(22)("freeze", function (e) {
      return function (t) {
        return e && r(t) ? e(i(t)) : t;
      };
    });
  },
  function (e, t, n) {
    var r = n(5),
      i = n(28).onFreeze;
    n(22)("seal", function (e) {
      return function (t) {
        return e && r(t) ? e(i(t)) : t;
      };
    });
  },
  function (e, t, n) {
    var r = n(5),
      i = n(28).onFreeze;
    n(22)("preventExtensions", function (e) {
      return function (t) {
        return e && r(t) ? e(i(t)) : t;
      };
    });
  },
  function (e, t, n) {
    var r = n(5);
    n(22)("isFrozen", function (e) {
      return function (t) {
        return !r(t) || (!!e && e(t));
      };
    });
  },
  function (e, t, n) {
    var r = n(5);
    n(22)("isSealed", function (e) {
      return function (t) {
        return !r(t) || (!!e && e(t));
      };
    });
  },
  function (e, t, n) {
    var r = n(5);
    n(22)("isExtensible", function (e) {
      return function (t) {
        return !!r(t) && (!e || e(t));
      };
    });
  },
  function (e, t, n) {
    var r = n(1);
    r(r.S + r.F, "Object", { assign: n(94) });
  },
  function (e, t, n) {
    var r = n(1);
    r(r.S, "Object", { is: n(95) });
  },
  function (e, t, n) {
    var r = n(1);
    r(r.S, "Object", { setPrototypeOf: n(66).set });
  },
  function (e, t, n) {
    "use strict";
    var r = n(47),
      i = {};
    (i[n(6)("toStringTag")] = "z"),
      i + "" != "[object z]" &&
        n(12)(
          Object.prototype,
          "toString",
          function () {
            return "[object " + r(this) + "]";
          },
          !0
        );
  },
  function (e, t, n) {
    var r = n(1);
    r(r.P, "Function", { bind: n(96) });
  },
  function (e, t, n) {
    var r = n(10).f,
      i = Function.prototype,
      o = /^\s*function ([^ (]*)/;
    "name" in i ||
      (n(9) &&
        r(i, "name", {
          configurable: !0,
          get: function () {
            try {
              return ("" + this).match(o)[1];
            } catch (e) {
              return "";
            }
          },
        }));
  },
  function (e, t, n) {
    "use strict";
    var r = n(5),
      i = n(36),
      o = n(6)("hasInstance"),
      s = Function.prototype;
    o in s ||
      n(10).f(s, o, {
        value: function (e) {
          if ("function" != typeof this || !r(e)) return !1;
          if (!r(this.prototype)) return e instanceof this;
          for (; (e = i(e)); ) if (this.prototype === e) return !0;
          return !1;
        },
      });
  },
  function (e, t, n) {
    var r = n(1),
      i = n(98);
    r(r.G + r.F * (parseInt != i), { parseInt: i });
  },
  function (e, t, n) {
    var r = n(1),
      i = n(99);
    r(r.G + r.F * (parseFloat != i), { parseFloat: i });
  },
  function (e, t, n) {
    "use strict";
    var r = n(2),
      i = n(14),
      o = n(24),
      s = n(68),
      a = n(27),
      c = n(3),
      u = n(35).f,
      l = n(21).f,
      h = n(10).f,
      d = n(40).trim,
      f = r.Number,
      p = f,
      v = f.prototype,
      g = "Number" == o(n(34)(v)),
      m = "trim" in String.prototype,
      y = function (e) {
        var t = a(e, !1);
        if ("string" == typeof t && t.length > 2) {
          var n,
            r,
            i,
            o = (t = m ? t.trim() : d(t, 3)).charCodeAt(0);
          if (43 === o || 45 === o) {
            if (88 === (n = t.charCodeAt(2)) || 120 === n) return NaN;
          } else if (48 === o) {
            switch (t.charCodeAt(1)) {
              case 66:
              case 98:
                (r = 2), (i = 49);
                break;
              case 79:
              case 111:
                (r = 8), (i = 55);
                break;
              default:
                return +t;
            }
            for (var s, c = t.slice(2), u = 0, l = c.length; u < l; u++)
              if ((s = c.charCodeAt(u)) < 48 || s > i) return NaN;
            return parseInt(c, r);
          }
        }
        return +t;
      };
    if (!f(" 0o1") || !f("0b1") || f("+0x1")) {
      f = function (e) {
        var t = arguments.length < 1 ? 0 : e,
          n = this;
        return n instanceof f &&
          (g
            ? c(function () {
                v.valueOf.call(n);
              })
            : "Number" != o(n))
          ? s(new p(y(t)), n, f)
          : y(t);
      };
      for (
        var b,
          w = n(9)
            ? u(p)
            : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(
                ","
              ),
          _ = 0;
        w.length > _;
        _++
      )
        i(p, (b = w[_])) && !i(f, b) && h(f, b, l(p, b));
      (f.prototype = v), (v.constructor = f), n(12)(r, "Number", f);
    }
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(20),
      o = n(100),
      s = n(69),
      a = (1).toFixed,
      c = Math.floor,
      u = [0, 0, 0, 0, 0, 0],
      l = "Number.toFixed: incorrect invocation!",
      h = function (e, t) {
        for (var n = -1, r = t; ++n < 6; )
          (r += e * u[n]), (u[n] = r % 1e7), (r = c(r / 1e7));
      },
      d = function (e) {
        for (var t = 6, n = 0; --t >= 0; )
          (n += u[t]), (u[t] = c(n / e)), (n = (n % e) * 1e7);
      },
      f = function () {
        for (var e = 6, t = ""; --e >= 0; )
          if ("" !== t || 0 === e || 0 !== u[e]) {
            var n = String(u[e]);
            t = "" === t ? n : t + s.call("0", 7 - n.length) + n;
          }
        return t;
      },
      p = function (e, t, n) {
        return 0 === t
          ? n
          : t % 2 == 1
          ? p(e, t - 1, n * e)
          : p(e * e, t / 2, n);
      };
    r(
      r.P +
        r.F *
          ((!!a &&
            ("0.000" !== (8e-5).toFixed(3) ||
              "1" !== (0.9).toFixed(0) ||
              "1.25" !== (1.255).toFixed(2) ||
              "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0))) ||
            !n(3)(function () {
              a.call({});
            })),
      "Number",
      {
        toFixed: function (e) {
          var t,
            n,
            r,
            a,
            c = o(this, l),
            u = i(e),
            v = "",
            g = "0";
          if (u < 0 || u > 20) throw RangeError(l);
          if (c != c) return "NaN";
          if (c <= -1e21 || c >= 1e21) return String(c);
          if ((c < 0 && ((v = "-"), (c = -c)), c > 1e-21))
            if (
              ((n =
                (t =
                  (function (e) {
                    for (var t = 0, n = e; n >= 4096; ) (t += 12), (n /= 4096);
                    for (; n >= 2; ) (t += 1), (n /= 2);
                    return t;
                  })(c * p(2, 69, 1)) - 69) < 0
                  ? c * p(2, -t, 1)
                  : c / p(2, t, 1)),
              (n *= 4503599627370496),
              (t = 52 - t) > 0)
            ) {
              for (h(0, n), r = u; r >= 7; ) h(1e7, 0), (r -= 7);
              for (h(p(10, r, 1), 0), r = t - 1; r >= 23; )
                d(1 << 23), (r -= 23);
              d(1 << r), h(1, 1), d(2), (g = f());
            } else h(0, n), h(1 << -t, 0), (g = f() + s.call("0", u));
          return (g =
            u > 0
              ? v +
                ((a = g.length) <= u
                  ? "0." + s.call("0", u - a) + g
                  : g.slice(0, a - u) + "." + g.slice(a - u))
              : v + g);
        },
      }
    );
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(3),
      o = n(100),
      s = (1).toPrecision;
    r(
      r.P +
        r.F *
          (i(function () {
            return "1" !== s.call(1, void 0);
          }) ||
            !i(function () {
              s.call({});
            })),
      "Number",
      {
        toPrecision: function (e) {
          var t = o(this, "Number#toPrecision: incorrect invocation!");
          return void 0 === e ? s.call(t) : s.call(t, e);
        },
      }
    );
  },
  function (e, t, n) {
    var r = n(1);
    r(r.S, "Number", { EPSILON: Math.pow(2, -52) });
  },
  function (e, t, n) {
    var r = n(1),
      i = n(2).isFinite;
    r(r.S, "Number", {
      isFinite: function (e) {
        return "number" == typeof e && i(e);
      },
    });
  },
  function (e, t, n) {
    var r = n(1);
    r(r.S, "Number", { isInteger: n(101) });
  },
  function (e, t, n) {
    var r = n(1);
    r(r.S, "Number", {
      isNaN: function (e) {
        return e != e;
      },
    });
  },
  function (e, t, n) {
    var r = n(1),
      i = n(101),
      o = Math.abs;
    r(r.S, "Number", {
      isSafeInteger: function (e) {
        return i(e) && o(e) <= 9007199254740991;
      },
    });
  },
  function (e, t, n) {
    var r = n(1);
    r(r.S, "Number", { MAX_SAFE_INTEGER: 9007199254740991 });
  },
  function (e, t, n) {
    var r = n(1);
    r(r.S, "Number", { MIN_SAFE_INTEGER: -9007199254740991 });
  },
  function (e, t, n) {
    var r = n(1),
      i = n(99);
    r(r.S + r.F * (Number.parseFloat != i), "Number", { parseFloat: i });
  },
  function (e, t, n) {
    var r = n(1),
      i = n(98);
    r(r.S + r.F * (Number.parseInt != i), "Number", { parseInt: i });
  },
  function (e, t, n) {
    var r = n(1),
      i = n(102),
      o = Math.sqrt,
      s = Math.acosh;
    r(
      r.S +
        r.F *
          !(s && 710 == Math.floor(s(Number.MAX_VALUE)) && s(1 / 0) == 1 / 0),
      "Math",
      {
        acosh: function (e) {
          return (e = +e) < 1
            ? NaN
            : e > 94906265.62425156
            ? Math.log(e) + Math.LN2
            : i(e - 1 + o(e - 1) * o(e + 1));
        },
      }
    );
  },
  function (e, t, n) {
    var r = n(1),
      i = Math.asinh;
    r(r.S + r.F * !(i && 1 / i(0) > 0), "Math", {
      asinh: function e(t) {
        return isFinite((t = +t)) && 0 != t
          ? t < 0
            ? -e(-t)
            : Math.log(t + Math.sqrt(t * t + 1))
          : t;
      },
    });
  },
  function (e, t, n) {
    var r = n(1),
      i = Math.atanh;
    r(r.S + r.F * !(i && 1 / i(-0) < 0), "Math", {
      atanh: function (e) {
        return 0 == (e = +e) ? e : Math.log((1 + e) / (1 - e)) / 2;
      },
    });
  },
  function (e, t, n) {
    var r = n(1),
      i = n(70);
    r(r.S, "Math", {
      cbrt: function (e) {
        return i((e = +e)) * Math.pow(Math.abs(e), 1 / 3);
      },
    });
  },
  function (e, t, n) {
    var r = n(1);
    r(r.S, "Math", {
      clz32: function (e) {
        return (e >>>= 0)
          ? 31 - Math.floor(Math.log(e + 0.5) * Math.LOG2E)
          : 32;
      },
    });
  },
  function (e, t, n) {
    var r = n(1),
      i = Math.exp;
    r(r.S, "Math", {
      cosh: function (e) {
        return (i((e = +e)) + i(-e)) / 2;
      },
    });
  },
  function (e, t, n) {
    var r = n(1),
      i = n(71);
    r(r.S + r.F * (i != Math.expm1), "Math", { expm1: i });
  },
  function (e, t, n) {
    var r = n(1);
    r(r.S, "Math", { fround: n(171) });
  },
  function (e, t, n) {
    var r = n(70),
      i = Math.pow,
      o = i(2, -52),
      s = i(2, -23),
      a = i(2, 127) * (2 - s),
      c = i(2, -126);
    e.exports =
      Math.fround ||
      function (e) {
        var t,
          n,
          i = Math.abs(e),
          u = r(e);
        return i < c
          ? u * (i / c / s + 1 / o - 1 / o) * c * s
          : (n = (t = (1 + s / o) * i) - (t - i)) > a || n != n
          ? u * (1 / 0)
          : u * n;
      };
  },
  function (e, t, n) {
    var r = n(1),
      i = Math.abs;
    r(r.S, "Math", {
      hypot: function (e, t) {
        for (var n, r, o = 0, s = 0, a = arguments.length, c = 0; s < a; )
          c < (n = i(arguments[s++]))
            ? ((o = o * (r = c / n) * r + 1), (c = n))
            : (o += n > 0 ? (r = n / c) * r : n);
        return c === 1 / 0 ? 1 / 0 : c * Math.sqrt(o);
      },
    });
  },
  function (e, t, n) {
    var r = n(1),
      i = Math.imul;
    r(
      r.S +
        r.F *
          n(3)(function () {
            return -5 != i(4294967295, 5) || 2 != i.length;
          }),
      "Math",
      {
        imul: function (e, t) {
          var n = +e,
            r = +t,
            i = 65535 & n,
            o = 65535 & r;
          return (
            0 |
            (i * o +
              ((((65535 & (n >>> 16)) * o + i * (65535 & (r >>> 16))) << 16) >>>
                0))
          );
        },
      }
    );
  },
  function (e, t, n) {
    var r = n(1);
    r(r.S, "Math", {
      log10: function (e) {
        return Math.log(e) * Math.LOG10E;
      },
    });
  },
  function (e, t, n) {
    var r = n(1);
    r(r.S, "Math", { log1p: n(102) });
  },
  function (e, t, n) {
    var r = n(1);
    r(r.S, "Math", {
      log2: function (e) {
        return Math.log(e) / Math.LN2;
      },
    });
  },
  function (e, t, n) {
    var r = n(1);
    r(r.S, "Math", { sign: n(70) });
  },
  function (e, t, n) {
    var r = n(1),
      i = n(71),
      o = Math.exp;
    r(
      r.S +
        r.F *
          n(3)(function () {
            return -2e-17 != !Math.sinh(-2e-17);
          }),
      "Math",
      {
        sinh: function (e) {
          return Math.abs((e = +e)) < 1
            ? (i(e) - i(-e)) / 2
            : (o(e - 1) - o(-e - 1)) * (Math.E / 2);
        },
      }
    );
  },
  function (e, t, n) {
    var r = n(1),
      i = n(71),
      o = Math.exp;
    r(r.S, "Math", {
      tanh: function (e) {
        var t = i((e = +e)),
          n = i(-e);
        return t == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (t - n) / (o(e) + o(-e));
      },
    });
  },
  function (e, t, n) {
    var r = n(1);
    r(r.S, "Math", {
      trunc: function (e) {
        return (e > 0 ? Math.floor : Math.ceil)(e);
      },
    });
  },
  function (e, t, n) {
    var r = n(1),
      i = n(33),
      o = String.fromCharCode,
      s = String.fromCodePoint;
    r(r.S + r.F * (!!s && 1 != s.length), "String", {
      fromCodePoint: function (e) {
        for (var t, n = [], r = arguments.length, s = 0; r > s; ) {
          if (((t = +arguments[s++]), i(t, 1114111) !== t))
            throw RangeError(t + " is not a valid code point");
          n.push(
            t < 65536
              ? o(t)
              : o(55296 + ((t -= 65536) >> 10), (t % 1024) + 56320)
          );
        }
        return n.join("");
      },
    });
  },
  function (e, t, n) {
    var r = n(1),
      i = n(16),
      o = n(7);
    r(r.S, "String", {
      raw: function (e) {
        for (
          var t = i(e.raw),
            n = o(t.length),
            r = arguments.length,
            s = [],
            a = 0;
          n > a;

        )
          s.push(String(t[a++])), a < r && s.push(String(arguments[a]));
        return s.join("");
      },
    });
  },
  function (e, t, n) {
    "use strict";
    n(40)("trim", function (e) {
      return function () {
        return e(this, 3);
      };
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(72)(!0);
    n(73)(
      String,
      "String",
      function (e) {
        (this._t = String(e)), (this._i = 0);
      },
      function () {
        var e,
          t = this._t,
          n = this._i;
        return n >= t.length
          ? { value: void 0, done: !0 }
          : ((e = r(t, n)), (this._i += e.length), { value: e, done: !1 });
      }
    );
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(72)(!1);
    r(r.P, "String", {
      codePointAt: function (e) {
        return i(this, e);
      },
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(7),
      o = n(74),
      s = "".endsWith;
    r(r.P + r.F * n(76)("endsWith"), "String", {
      endsWith: function (e) {
        var t = o(this, e, "endsWith"),
          n = arguments.length > 1 ? arguments[1] : void 0,
          r = i(t.length),
          a = void 0 === n ? r : Math.min(i(n), r),
          c = String(e);
        return s ? s.call(t, c, a) : t.slice(a - c.length, a) === c;
      },
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(74);
    r(r.P + r.F * n(76)("includes"), "String", {
      includes: function (e) {
        return !!~i(this, e, "includes").indexOf(
          e,
          arguments.length > 1 ? arguments[1] : void 0
        );
      },
    });
  },
  function (e, t, n) {
    var r = n(1);
    r(r.P, "String", { repeat: n(69) });
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(7),
      o = n(74),
      s = "".startsWith;
    r(r.P + r.F * n(76)("startsWith"), "String", {
      startsWith: function (e) {
        var t = o(this, e, "startsWith"),
          n = i(
            Math.min(arguments.length > 1 ? arguments[1] : void 0, t.length)
          ),
          r = String(e);
        return s ? s.call(t, r, n) : t.slice(n, n + r.length) === r;
      },
    });
  },
  function (e, t, n) {
    "use strict";
    n(13)("anchor", function (e) {
      return function (t) {
        return e(this, "a", "name", t);
      };
    });
  },
  function (e, t, n) {
    "use strict";
    n(13)("big", function (e) {
      return function () {
        return e(this, "big", "", "");
      };
    });
  },
  function (e, t, n) {
    "use strict";
    n(13)("blink", function (e) {
      return function () {
        return e(this, "blink", "", "");
      };
    });
  },
  function (e, t, n) {
    "use strict";
    n(13)("bold", function (e) {
      return function () {
        return e(this, "b", "", "");
      };
    });
  },
  function (e, t, n) {
    "use strict";
    n(13)("fixed", function (e) {
      return function () {
        return e(this, "tt", "", "");
      };
    });
  },
  function (e, t, n) {
    "use strict";
    n(13)("fontcolor", function (e) {
      return function (t) {
        return e(this, "font", "color", t);
      };
    });
  },
  function (e, t, n) {
    "use strict";
    n(13)("fontsize", function (e) {
      return function (t) {
        return e(this, "font", "size", t);
      };
    });
  },
  function (e, t, n) {
    "use strict";
    n(13)("italics", function (e) {
      return function () {
        return e(this, "i", "", "");
      };
    });
  },
  function (e, t, n) {
    "use strict";
    n(13)("link", function (e) {
      return function (t) {
        return e(this, "a", "href", t);
      };
    });
  },
  function (e, t, n) {
    "use strict";
    n(13)("small", function (e) {
      return function () {
        return e(this, "small", "", "");
      };
    });
  },
  function (e, t, n) {
    "use strict";
    n(13)("strike", function (e) {
      return function () {
        return e(this, "strike", "", "");
      };
    });
  },
  function (e, t, n) {
    "use strict";
    n(13)("sub", function (e) {
      return function () {
        return e(this, "sub", "", "");
      };
    });
  },
  function (e, t, n) {
    "use strict";
    n(13)("sup", function (e) {
      return function () {
        return e(this, "sup", "", "");
      };
    });
  },
  function (e, t, n) {
    var r = n(1);
    r(r.S, "Date", {
      now: function () {
        return new Date().getTime();
      },
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(11),
      o = n(27);
    r(
      r.P +
        r.F *
          n(3)(function () {
            return (
              null !== new Date(NaN).toJSON() ||
              1 !==
                Date.prototype.toJSON.call({
                  toISOString: function () {
                    return 1;
                  },
                })
            );
          }),
      "Date",
      {
        toJSON: function (e) {
          var t = i(this),
            n = o(t);
          return "number" != typeof n || isFinite(n) ? t.toISOString() : null;
        },
      }
    );
  },
  function (e, t, n) {
    var r = n(1),
      i = n(206);
    r(r.P + r.F * (Date.prototype.toISOString !== i), "Date", {
      toISOString: i,
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(3),
      i = Date.prototype.getTime,
      o = Date.prototype.toISOString,
      s = function (e) {
        return e > 9 ? e : "0" + e;
      };
    e.exports =
      r(function () {
        return "0385-07-25T07:06:39.999Z" != o.call(new Date(-50000000000001));
      }) ||
      !r(function () {
        o.call(new Date(NaN));
      })
        ? function () {
            if (!isFinite(i.call(this))) throw RangeError("Invalid time value");
            var e = this,
              t = e.getUTCFullYear(),
              n = e.getUTCMilliseconds(),
              r = t < 0 ? "-" : t > 9999 ? "+" : "";
            return (
              r +
              ("00000" + Math.abs(t)).slice(r ? -6 : -4) +
              "-" +
              s(e.getUTCMonth() + 1) +
              "-" +
              s(e.getUTCDate()) +
              "T" +
              s(e.getUTCHours()) +
              ":" +
              s(e.getUTCMinutes()) +
              ":" +
              s(e.getUTCSeconds()) +
              "." +
              (n > 99 ? n : "0" + s(n)) +
              "Z"
            );
          }
        : o;
  },
  function (e, t, n) {
    var r = Date.prototype,
      i = r.toString,
      o = r.getTime;
    new Date(NaN) + "" != "Invalid Date" &&
      n(12)(r, "toString", function () {
        var e = o.call(this);
        return e == e ? i.call(this) : "Invalid Date";
      });
  },
  function (e, t, n) {
    var r = n(6)("toPrimitive"),
      i = Date.prototype;
    r in i || n(15)(i, r, n(209));
  },
  function (e, t, n) {
    "use strict";
    var r = n(4),
      i = n(27);
    e.exports = function (e) {
      if ("string" !== e && "number" !== e && "default" !== e)
        throw TypeError("Incorrect hint");
      return i(r(this), "number" != e);
    };
  },
  function (e, t, n) {
    var r = n(1);
    r(r.S, "Array", { isArray: n(52) });
  },
  function (e, t, n) {
    "use strict";
    var r = n(18),
      i = n(1),
      o = n(11),
      s = n(104),
      a = n(77),
      c = n(7),
      u = n(78),
      l = n(79);
    i(
      i.S +
        i.F *
          !n(53)(function (e) {
            Array.from(e);
          }),
      "Array",
      {
        from: function (e) {
          var t,
            n,
            i,
            h,
            d = o(e),
            f = "function" == typeof this ? this : Array,
            p = arguments.length,
            v = p > 1 ? arguments[1] : void 0,
            g = void 0 !== v,
            m = 0,
            y = l(d);
          if (
            (g && (v = r(v, p > 2 ? arguments[2] : void 0, 2)),
            null == y || (f == Array && a(y)))
          )
            for (n = new f((t = c(d.length))); t > m; m++)
              u(n, m, g ? v(d[m], m) : d[m]);
          else
            for (h = y.call(d), n = new f(); !(i = h.next()).done; m++)
              u(n, m, g ? s(h, v, [i.value, m], !0) : i.value);
          return (n.length = m), n;
        },
      }
    );
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(78);
    r(
      r.S +
        r.F *
          n(3)(function () {
            function e() {}
            return !(Array.of.call(e) instanceof e);
          }),
      "Array",
      {
        of: function () {
          for (
            var e = 0,
              t = arguments.length,
              n = new ("function" == typeof this ? this : Array)(t);
            t > e;

          )
            i(n, e, arguments[e++]);
          return (n.length = t), n;
        },
      }
    );
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(16),
      o = [].join;
    r(r.P + r.F * (n(45) != Object || !n(17)(o)), "Array", {
      join: function (e) {
        return o.call(i(this), void 0 === e ? "," : e);
      },
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(65),
      o = n(24),
      s = n(33),
      a = n(7),
      c = [].slice;
    r(
      r.P +
        r.F *
          n(3)(function () {
            i && c.call(i);
          }),
      "Array",
      {
        slice: function (e, t) {
          var n = a(this.length),
            r = o(this);
          if (((t = void 0 === t ? n : t), "Array" == r))
            return c.call(this, e, t);
          for (
            var i = s(e, n), u = s(t, n), l = a(u - i), h = new Array(l), d = 0;
            d < l;
            d++
          )
            h[d] = "String" == r ? this.charAt(i + d) : this[i + d];
          return h;
        },
      }
    );
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(19),
      o = n(11),
      s = n(3),
      a = [].sort,
      c = [1, 2, 3];
    r(
      r.P +
        r.F *
          (s(function () {
            c.sort(void 0);
          }) ||
            !s(function () {
              c.sort(null);
            }) ||
            !n(17)(a)),
      "Array",
      {
        sort: function (e) {
          return void 0 === e ? a.call(o(this)) : a.call(o(this), i(e));
        },
      }
    );
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(23)(0),
      o = n(17)([].forEach, !0);
    r(r.P + r.F * !o, "Array", {
      forEach: function (e) {
        return i(this, e, arguments[1]);
      },
    });
  },
  function (e, t, n) {
    var r = n(5),
      i = n(52),
      o = n(6)("species");
    e.exports = function (e) {
      var t;
      return (
        i(e) &&
          ("function" != typeof (t = e.constructor) ||
            (t !== Array && !i(t.prototype)) ||
            (t = void 0),
          r(t) && null === (t = t[o]) && (t = void 0)),
        void 0 === t ? Array : t
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(23)(1);
    r(r.P + r.F * !n(17)([].map, !0), "Array", {
      map: function (e) {
        return i(this, e, arguments[1]);
      },
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(23)(2);
    r(r.P + r.F * !n(17)([].filter, !0), "Array", {
      filter: function (e) {
        return i(this, e, arguments[1]);
      },
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(23)(3);
    r(r.P + r.F * !n(17)([].some, !0), "Array", {
      some: function (e) {
        return i(this, e, arguments[1]);
      },
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(23)(4);
    r(r.P + r.F * !n(17)([].every, !0), "Array", {
      every: function (e) {
        return i(this, e, arguments[1]);
      },
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(106);
    r(r.P + r.F * !n(17)([].reduce, !0), "Array", {
      reduce: function (e) {
        return i(this, e, arguments.length, arguments[1], !1);
      },
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(106);
    r(r.P + r.F * !n(17)([].reduceRight, !0), "Array", {
      reduceRight: function (e) {
        return i(this, e, arguments.length, arguments[1], !0);
      },
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(50)(!1),
      o = [].indexOf,
      s = !!o && 1 / [1].indexOf(1, -0) < 0;
    r(r.P + r.F * (s || !n(17)(o)), "Array", {
      indexOf: function (e) {
        return s ? o.apply(this, arguments) || 0 : i(this, e, arguments[1]);
      },
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(16),
      o = n(20),
      s = n(7),
      a = [].lastIndexOf,
      c = !!a && 1 / [1].lastIndexOf(1, -0) < 0;
    r(r.P + r.F * (c || !n(17)(a)), "Array", {
      lastIndexOf: function (e) {
        if (c) return a.apply(this, arguments) || 0;
        var t = i(this),
          n = s(t.length),
          r = n - 1;
        for (
          arguments.length > 1 && (r = Math.min(r, o(arguments[1]))),
            r < 0 && (r = n + r);
          r >= 0;
          r--
        )
          if (r in t && t[r] === e) return r || 0;
        return -1;
      },
    });
  },
  function (e, t, n) {
    var r = n(1);
    r(r.P, "Array", { copyWithin: n(107) }), n(37)("copyWithin");
  },
  function (e, t, n) {
    var r = n(1);
    r(r.P, "Array", { fill: n(80) }), n(37)("fill");
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(23)(5),
      o = !0;
    "find" in [] &&
      Array(1).find(function () {
        o = !1;
      }),
      r(r.P + r.F * o, "Array", {
        find: function (e) {
          return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
      }),
      n(37)("find");
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(23)(6),
      o = "findIndex",
      s = !0;
    o in [] &&
      Array(1)[o](function () {
        s = !1;
      }),
      r(r.P + r.F * s, "Array", {
        findIndex: function (e) {
          return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
      }),
      n(37)(o);
  },
  function (e, t, n) {
    n(42)("Array");
  },
  function (e, t, n) {
    var r = n(2),
      i = n(68),
      o = n(10).f,
      s = n(35).f,
      a = n(75),
      c = n(54),
      u = r.RegExp,
      l = u,
      h = u.prototype,
      d = /a/g,
      f = /a/g,
      p = new u(d) !== d;
    if (
      n(9) &&
      (!p ||
        n(3)(function () {
          return (
            (f[n(6)("match")] = !1),
            u(d) != d || u(f) == f || "/a/i" != u(d, "i")
          );
        }))
    ) {
      u = function (e, t) {
        var n = this instanceof u,
          r = a(e),
          o = void 0 === t;
        return !n && r && e.constructor === u && o
          ? e
          : i(
              p
                ? new l(r && !o ? e.source : e, t)
                : l(
                    (r = e instanceof u) ? e.source : e,
                    r && o ? c.call(e) : t
                  ),
              n ? this : h,
              u
            );
      };
      for (
        var v = function (e) {
            (e in u) ||
              o(u, e, {
                configurable: !0,
                get: function () {
                  return l[e];
                },
                set: function (t) {
                  l[e] = t;
                },
              });
          },
          g = s(l),
          m = 0;
        g.length > m;

      )
        v(g[m++]);
      (h.constructor = u), (u.prototype = h), n(12)(r, "RegExp", u);
    }
    n(42)("RegExp");
  },
  function (e, t, n) {
    "use strict";
    n(110);
    var r = n(4),
      i = n(54),
      o = n(9),
      s = /./.toString,
      a = function (e) {
        n(12)(RegExp.prototype, "toString", e, !0);
      };
    n(3)(function () {
      return "/a/b" != s.call({ source: "a", flags: "b" });
    })
      ? a(function () {
          var e = r(this);
          return "/".concat(
            e.source,
            "/",
            "flags" in e
              ? e.flags
              : !o && e instanceof RegExp
              ? i.call(e)
              : void 0
          );
        })
      : "toString" != s.name &&
        a(function () {
          return s.call(this);
        });
  },
  function (e, t, n) {
    "use strict";
    var r = n(4),
      i = n(7),
      o = n(83),
      s = n(55);
    n(56)("match", 1, function (e, t, n, a) {
      return [
        function (n) {
          var r = e(this),
            i = null == n ? void 0 : n[t];
          return void 0 !== i ? i.call(n, r) : new RegExp(n)[t](String(r));
        },
        function (e) {
          var t = a(n, e, this);
          if (t.done) return t.value;
          var c = r(e),
            u = String(this);
          if (!c.global) return s(c, u);
          var l = c.unicode;
          c.lastIndex = 0;
          for (var h, d = [], f = 0; null !== (h = s(c, u)); ) {
            var p = String(h[0]);
            (d[f] = p),
              "" === p && (c.lastIndex = o(u, i(c.lastIndex), l)),
              f++;
          }
          return 0 === f ? null : d;
        },
      ];
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(4),
      i = n(11),
      o = n(7),
      s = n(20),
      a = n(83),
      c = n(55),
      u = Math.max,
      l = Math.min,
      h = Math.floor,
      d = /\$([$&`']|\d\d?|<[^>]*>)/g,
      f = /\$([$&`']|\d\d?)/g;
    n(56)("replace", 2, function (e, t, n, p) {
      return [
        function (r, i) {
          var o = e(this),
            s = null == r ? void 0 : r[t];
          return void 0 !== s ? s.call(r, o, i) : n.call(String(o), r, i);
        },
        function (e, t) {
          var i = p(n, e, this, t);
          if (i.done) return i.value;
          var h = r(e),
            d = String(this),
            f = "function" == typeof t;
          f || (t = String(t));
          var g = h.global;
          if (g) {
            var m = h.unicode;
            h.lastIndex = 0;
          }
          for (var y = []; ; ) {
            var b = c(h, d);
            if (null === b) break;
            if ((y.push(b), !g)) break;
            "" === String(b[0]) && (h.lastIndex = a(d, o(h.lastIndex), m));
          }
          for (var w, _ = "", S = 0, I = 0; I < y.length; I++) {
            b = y[I];
            for (
              var E = String(b[0]),
                O = u(l(s(b.index), d.length), 0),
                T = [],
                k = 1;
              k < b.length;
              k++
            )
              T.push(void 0 === (w = b[k]) ? w : String(w));
            var x = b.groups;
            if (f) {
              var A = [E].concat(T, O, d);
              void 0 !== x && A.push(x);
              var P = String(t.apply(void 0, A));
            } else P = v(E, d, O, T, x, t);
            O >= S && ((_ += d.slice(S, O) + P), (S = O + E.length));
          }
          return _ + d.slice(S);
        },
      ];
      function v(e, t, r, o, s, a) {
        var c = r + e.length,
          u = o.length,
          l = f;
        return (
          void 0 !== s && ((s = i(s)), (l = d)),
          n.call(a, l, function (n, i) {
            var a;
            switch (i.charAt(0)) {
              case "$":
                return "$";
              case "&":
                return e;
              case "`":
                return t.slice(0, r);
              case "'":
                return t.slice(c);
              case "<":
                a = s[i.slice(1, -1)];
                break;
              default:
                var l = +i;
                if (0 === l) return n;
                if (l > u) {
                  var d = h(l / 10);
                  return 0 === d
                    ? n
                    : d <= u
                    ? void 0 === o[d - 1]
                      ? i.charAt(1)
                      : o[d - 1] + i.charAt(1)
                    : n;
                }
                a = o[l - 1];
            }
            return void 0 === a ? "" : a;
          })
        );
      }
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(4),
      i = n(95),
      o = n(55);
    n(56)("search", 1, function (e, t, n, s) {
      return [
        function (n) {
          var r = e(this),
            i = null == n ? void 0 : n[t];
          return void 0 !== i ? i.call(n, r) : new RegExp(n)[t](String(r));
        },
        function (e) {
          var t = s(n, e, this);
          if (t.done) return t.value;
          var a = r(e),
            c = String(this),
            u = a.lastIndex;
          i(u, 0) || (a.lastIndex = 0);
          var l = o(a, c);
          return (
            i(a.lastIndex, u) || (a.lastIndex = u), null === l ? -1 : l.index
          );
        },
      ];
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(75),
      i = n(4),
      o = n(48),
      s = n(83),
      a = n(7),
      c = n(55),
      u = n(82),
      l = n(3),
      h = Math.min,
      d = [].push,
      f = "length",
      p = !l(function () {
        RegExp(4294967295, "y");
      });
    n(56)("split", 2, function (e, t, n, l) {
      var v;
      return (
        (v =
          "c" == "abbc".split(/(b)*/)[1] ||
          4 != "test".split(/(?:)/, -1)[f] ||
          2 != "ab".split(/(?:ab)*/)[f] ||
          4 != ".".split(/(.?)(.?)/)[f] ||
          ".".split(/()()/)[f] > 1 ||
          "".split(/.?/)[f]
            ? function (e, t) {
                var i = String(this);
                if (void 0 === e && 0 === t) return [];
                if (!r(e)) return n.call(i, e, t);
                for (
                  var o,
                    s,
                    a,
                    c = [],
                    l =
                      (e.ignoreCase ? "i" : "") +
                      (e.multiline ? "m" : "") +
                      (e.unicode ? "u" : "") +
                      (e.sticky ? "y" : ""),
                    h = 0,
                    p = void 0 === t ? 4294967295 : t >>> 0,
                    v = new RegExp(e.source, l + "g");
                  (o = u.call(v, i)) &&
                  !(
                    (s = v.lastIndex) > h &&
                    (c.push(i.slice(h, o.index)),
                    o[f] > 1 && o.index < i[f] && d.apply(c, o.slice(1)),
                    (a = o[0][f]),
                    (h = s),
                    c[f] >= p)
                  );

                )
                  v.lastIndex === o.index && v.lastIndex++;
                return (
                  h === i[f]
                    ? (!a && v.test("")) || c.push("")
                    : c.push(i.slice(h)),
                  c[f] > p ? c.slice(0, p) : c
                );
              }
            : "0".split(void 0, 0)[f]
            ? function (e, t) {
                return void 0 === e && 0 === t ? [] : n.call(this, e, t);
              }
            : n),
        [
          function (n, r) {
            var i = e(this),
              o = null == n ? void 0 : n[t];
            return void 0 !== o ? o.call(n, i, r) : v.call(String(i), n, r);
          },
          function (e, t) {
            var r = l(v, e, this, t, v !== n);
            if (r.done) return r.value;
            var u = i(e),
              d = String(this),
              f = o(u, RegExp),
              g = u.unicode,
              m =
                (u.ignoreCase ? "i" : "") +
                (u.multiline ? "m" : "") +
                (u.unicode ? "u" : "") +
                (p ? "y" : "g"),
              y = new f(p ? u : "^(?:" + u.source + ")", m),
              b = void 0 === t ? 4294967295 : t >>> 0;
            if (0 === b) return [];
            if (0 === d.length) return null === c(y, d) ? [d] : [];
            for (var w = 0, _ = 0, S = []; _ < d.length; ) {
              y.lastIndex = p ? _ : 0;
              var I,
                E = c(y, p ? d : d.slice(_));
              if (
                null === E ||
                (I = h(a(y.lastIndex + (p ? 0 : _)), d.length)) === w
              )
                _ = s(d, _, g);
              else {
                if ((S.push(d.slice(w, _)), S.length === b)) return S;
                for (var O = 1; O <= E.length - 1; O++)
                  if ((S.push(E[O]), S.length === b)) return S;
                _ = w = I;
              }
            }
            return S.push(d.slice(w)), S;
          },
        ]
      );
    });
  },
  function (e, t, n) {
    var r = n(2),
      i = n(84).set,
      o = r.MutationObserver || r.WebKitMutationObserver,
      s = r.process,
      a = r.Promise,
      c = "process" == n(24)(s);
    e.exports = function () {
      var e,
        t,
        n,
        u = function () {
          var r, i;
          for (c && (r = s.domain) && r.exit(); e; ) {
            (i = e.fn), (e = e.next);
            try {
              i();
            } catch (r) {
              throw (e ? n() : (t = void 0), r);
            }
          }
          (t = void 0), r && r.enter();
        };
      if (c)
        n = function () {
          s.nextTick(u);
        };
      else if (!o || (r.navigator && r.navigator.standalone))
        if (a && a.resolve) {
          var l = a.resolve(void 0);
          n = function () {
            l.then(u);
          };
        } else
          n = function () {
            i.call(r, u);
          };
      else {
        var h = !0,
          d = document.createTextNode("");
        new o(u).observe(d, { characterData: !0 }),
          (n = function () {
            d.data = h = !h;
          });
      }
      return function (r) {
        var i = { fn: r, next: void 0 };
        t && (t.next = i), e || ((e = i), n()), (t = i);
      };
    };
  },
  function (e, t) {
    e.exports = function (e) {
      try {
        return { e: !1, v: e() };
      } catch (e) {
        return { e: !0, v: e };
      }
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(114),
      i = n(38);
    e.exports = n(59)(
      "Map",
      function (e) {
        return function () {
          return e(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      },
      {
        get: function (e) {
          var t = r.getEntry(i(this, "Map"), e);
          return t && t.v;
        },
        set: function (e, t) {
          return r.def(i(this, "Map"), 0 === e ? 0 : e, t);
        },
      },
      r,
      !0
    );
  },
  function (e, t, n) {
    "use strict";
    var r = n(114),
      i = n(38);
    e.exports = n(59)(
      "Set",
      function (e) {
        return function () {
          return e(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      },
      {
        add: function (e) {
          return r.def(i(this, "Set"), (e = 0 === e ? 0 : e), e);
        },
      },
      r
    );
  },
  function (e, t, n) {
    "use strict";
    var r,
      i = n(2),
      o = n(23)(0),
      s = n(12),
      a = n(28),
      c = n(94),
      u = n(115),
      l = n(5),
      h = n(38),
      d = n(38),
      f = !i.ActiveXObject && "ActiveXObject" in i,
      p = a.getWeak,
      v = Object.isExtensible,
      g = u.ufstore,
      m = function (e) {
        return function () {
          return e(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      },
      y = {
        get: function (e) {
          if (l(e)) {
            var t = p(e);
            return !0 === t
              ? g(h(this, "WeakMap")).get(e)
              : t
              ? t[this._i]
              : void 0;
          }
        },
        set: function (e, t) {
          return u.def(h(this, "WeakMap"), e, t);
        },
      },
      b = (e.exports = n(59)("WeakMap", m, y, u, !0, !0));
    d &&
      f &&
      (c((r = u.getConstructor(m, "WeakMap")).prototype, y),
      (a.NEED = !0),
      o(["delete", "has", "get", "set"], function (e) {
        var t = b.prototype,
          n = t[e];
        s(t, e, function (t, i) {
          if (l(t) && !v(t)) {
            this._f || (this._f = new r());
            var o = this._f[e](t, i);
            return "set" == e ? this : o;
          }
          return n.call(this, t, i);
        });
      }));
  },
  function (e, t, n) {
    "use strict";
    var r = n(115),
      i = n(38);
    n(59)(
      "WeakSet",
      function (e) {
        return function () {
          return e(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      },
      {
        add: function (e) {
          return r.def(i(this, "WeakSet"), e, !0);
        },
      },
      r,
      !1,
      !0
    );
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(60),
      o = n(85),
      s = n(4),
      a = n(33),
      c = n(7),
      u = n(5),
      l = n(2).ArrayBuffer,
      h = n(48),
      d = o.ArrayBuffer,
      f = o.DataView,
      p = i.ABV && l.isView,
      v = d.prototype.slice,
      g = i.VIEW;
    r(r.G + r.W + r.F * (l !== d), { ArrayBuffer: d }),
      r(r.S + r.F * !i.CONSTR, "ArrayBuffer", {
        isView: function (e) {
          return (p && p(e)) || (u(e) && g in e);
        },
      }),
      r(
        r.P +
          r.U +
          r.F *
            n(3)(function () {
              return !new d(2).slice(1, void 0).byteLength;
            }),
        "ArrayBuffer",
        {
          slice: function (e, t) {
            if (void 0 !== v && void 0 === t) return v.call(s(this), e);
            for (
              var n = s(this).byteLength,
                r = a(e, n),
                i = a(void 0 === t ? n : t, n),
                o = new (h(this, d))(c(i - r)),
                u = new f(this),
                l = new f(o),
                p = 0;
              r < i;

            )
              l.setUint8(p++, u.getUint8(r++));
            return o;
          },
        }
      ),
      n(42)("ArrayBuffer");
  },
  function (e, t, n) {
    var r = n(1);
    r(r.G + r.W + r.F * !n(60).ABV, { DataView: n(85).DataView });
  },
  function (e, t, n) {
    n(26)("Int8", 1, function (e) {
      return function (t, n, r) {
        return e(this, t, n, r);
      };
    });
  },
  function (e, t, n) {
    n(26)("Uint8", 1, function (e) {
      return function (t, n, r) {
        return e(this, t, n, r);
      };
    });
  },
  function (e, t, n) {
    n(26)(
      "Uint8",
      1,
      function (e) {
        return function (t, n, r) {
          return e(this, t, n, r);
        };
      },
      !0
    );
  },
  function (e, t, n) {
    n(26)("Int16", 2, function (e) {
      return function (t, n, r) {
        return e(this, t, n, r);
      };
    });
  },
  function (e, t, n) {
    n(26)("Uint16", 2, function (e) {
      return function (t, n, r) {
        return e(this, t, n, r);
      };
    });
  },
  function (e, t, n) {
    n(26)("Int32", 4, function (e) {
      return function (t, n, r) {
        return e(this, t, n, r);
      };
    });
  },
  function (e, t, n) {
    n(26)("Uint32", 4, function (e) {
      return function (t, n, r) {
        return e(this, t, n, r);
      };
    });
  },
  function (e, t, n) {
    n(26)("Float32", 4, function (e) {
      return function (t, n, r) {
        return e(this, t, n, r);
      };
    });
  },
  function (e, t, n) {
    n(26)("Float64", 8, function (e) {
      return function (t, n, r) {
        return e(this, t, n, r);
      };
    });
  },
  function (e, t, n) {
    var r = n(1),
      i = n(19),
      o = n(4),
      s = (n(2).Reflect || {}).apply,
      a = Function.apply;
    r(
      r.S +
        r.F *
          !n(3)(function () {
            s(function () {});
          }),
      "Reflect",
      {
        apply: function (e, t, n) {
          var r = i(e),
            c = o(n);
          return s ? s(r, t, c) : a.call(r, t, c);
        },
      }
    );
  },
  function (e, t, n) {
    var r = n(1),
      i = n(34),
      o = n(19),
      s = n(4),
      a = n(5),
      c = n(3),
      u = n(96),
      l = (n(2).Reflect || {}).construct,
      h = c(function () {
        function e() {}
        return !(l(function () {}, [], e) instanceof e);
      }),
      d = !c(function () {
        l(function () {});
      });
    r(r.S + r.F * (h || d), "Reflect", {
      construct: function (e, t) {
        o(e), s(t);
        var n = arguments.length < 3 ? e : o(arguments[2]);
        if (d && !h) return l(e, t, n);
        if (e == n) {
          switch (t.length) {
            case 0:
              return new e();
            case 1:
              return new e(t[0]);
            case 2:
              return new e(t[0], t[1]);
            case 3:
              return new e(t[0], t[1], t[2]);
            case 4:
              return new e(t[0], t[1], t[2], t[3]);
          }
          var r = [null];
          return r.push.apply(r, t), new (u.apply(e, r))();
        }
        var c = n.prototype,
          f = i(a(c) ? c : Object.prototype),
          p = Function.apply.call(e, f, t);
        return a(p) ? p : f;
      },
    });
  },
  function (e, t, n) {
    var r = n(10),
      i = n(1),
      o = n(4),
      s = n(27);
    i(
      i.S +
        i.F *
          n(3)(function () {
            Reflect.defineProperty(r.f({}, 1, { value: 1 }), 1, { value: 2 });
          }),
      "Reflect",
      {
        defineProperty: function (e, t, n) {
          o(e), (t = s(t, !0)), o(n);
          try {
            return r.f(e, t, n), !0;
          } catch (e) {
            return !1;
          }
        },
      }
    );
  },
  function (e, t, n) {
    var r = n(1),
      i = n(21).f,
      o = n(4);
    r(r.S, "Reflect", {
      deleteProperty: function (e, t) {
        var n = i(o(e), t);
        return !(n && !n.configurable) && delete e[t];
      },
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(4),
      o = function (e) {
        (this._t = i(e)), (this._i = 0);
        var t,
          n = (this._k = []);
        for (t in e) n.push(t);
      };
    n(103)(o, "Object", function () {
      var e,
        t = this._k;
      do {
        if (this._i >= t.length) return { value: void 0, done: !0 };
      } while (!((e = t[this._i++]) in this._t));
      return { value: e, done: !1 };
    }),
      r(r.S, "Reflect", {
        enumerate: function (e) {
          return new o(e);
        },
      });
  },
  function (e, t, n) {
    var r = n(21),
      i = n(36),
      o = n(14),
      s = n(1),
      a = n(5),
      c = n(4);
    s(s.S, "Reflect", {
      get: function e(t, n) {
        var s,
          u,
          l = arguments.length < 3 ? t : arguments[2];
        return c(t) === l
          ? t[n]
          : (s = r.f(t, n))
          ? o(s, "value")
            ? s.value
            : void 0 !== s.get
            ? s.get.call(l)
            : void 0
          : a((u = i(t)))
          ? e(u, n, l)
          : void 0;
      },
    });
  },
  function (e, t, n) {
    var r = n(21),
      i = n(1),
      o = n(4);
    i(i.S, "Reflect", {
      getOwnPropertyDescriptor: function (e, t) {
        return r.f(o(e), t);
      },
    });
  },
  function (e, t, n) {
    var r = n(1),
      i = n(36),
      o = n(4);
    r(r.S, "Reflect", {
      getPrototypeOf: function (e) {
        return i(o(e));
      },
    });
  },
  function (e, t, n) {
    var r = n(1);
    r(r.S, "Reflect", {
      has: function (e, t) {
        return t in e;
      },
    });
  },
  function (e, t, n) {
    var r = n(1),
      i = n(4),
      o = Object.isExtensible;
    r(r.S, "Reflect", {
      isExtensible: function (e) {
        return i(e), !o || o(e);
      },
    });
  },
  function (e, t, n) {
    var r = n(1);
    r(r.S, "Reflect", { ownKeys: n(117) });
  },
  function (e, t, n) {
    var r = n(1),
      i = n(4),
      o = Object.preventExtensions;
    r(r.S, "Reflect", {
      preventExtensions: function (e) {
        i(e);
        try {
          return o && o(e), !0;
        } catch (e) {
          return !1;
        }
      },
    });
  },
  function (e, t, n) {
    var r = n(10),
      i = n(21),
      o = n(36),
      s = n(14),
      a = n(1),
      c = n(29),
      u = n(4),
      l = n(5);
    a(a.S, "Reflect", {
      set: function e(t, n, a) {
        var h,
          d,
          f = arguments.length < 4 ? t : arguments[3],
          p = i.f(u(t), n);
        if (!p) {
          if (l((d = o(t)))) return e(d, n, a, f);
          p = c(0);
        }
        if (s(p, "value")) {
          if (!1 === p.writable || !l(f)) return !1;
          if ((h = i.f(f, n))) {
            if (h.get || h.set || !1 === h.writable) return !1;
            (h.value = a), r.f(f, n, h);
          } else r.f(f, n, c(0, a));
          return !0;
        }
        return void 0 !== p.set && (p.set.call(f, a), !0);
      },
    });
  },
  function (e, t, n) {
    var r = n(1),
      i = n(66);
    i &&
      r(r.S, "Reflect", {
        setPrototypeOf: function (e, t) {
          i.check(e, t);
          try {
            return i.set(e, t), !0;
          } catch (e) {
            return !1;
          }
        },
      });
  },
  function (e, t, n) {
    n(269), (e.exports = n(8).Array.includes);
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(50)(!0);
    r(r.P, "Array", {
      includes: function (e) {
        return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
      },
    }),
      n(37)("includes");
  },
  function (e, t, n) {
    n(271), (e.exports = n(8).Array.flatMap);
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(272),
      o = n(11),
      s = n(7),
      a = n(19),
      c = n(105);
    r(r.P, "Array", {
      flatMap: function (e) {
        var t,
          n,
          r = o(this);
        return (
          a(e),
          (t = s(r.length)),
          (n = c(r, 0)),
          i(n, r, r, t, 0, 1, e, arguments[1]),
          n
        );
      },
    }),
      n(37)("flatMap");
  },
  function (e, t, n) {
    "use strict";
    var r = n(52),
      i = n(5),
      o = n(7),
      s = n(18),
      a = n(6)("isConcatSpreadable");
    e.exports = function e(t, n, c, u, l, h, d, f) {
      for (var p, v, g = l, m = 0, y = !!d && s(d, f, 3); m < u; ) {
        if (m in c) {
          if (
            ((p = y ? y(c[m], m, n) : c[m]),
            (v = !1),
            i(p) && (v = void 0 !== (v = p[a]) ? !!v : r(p)),
            v && h > 0)
          )
            g = e(t, n, p, o(p.length), g, h - 1) - 1;
          else {
            if (g >= 9007199254740991) throw TypeError();
            t[g] = p;
          }
          g++;
        }
        m++;
      }
      return g;
    };
  },
  function (e, t, n) {
    n(274), (e.exports = n(8).String.padStart);
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(118),
      o = n(58),
      s = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);
    r(r.P + r.F * s, "String", {
      padStart: function (e) {
        return i(this, e, arguments.length > 1 ? arguments[1] : void 0, !0);
      },
    });
  },
  function (e, t, n) {
    n(276), (e.exports = n(8).String.padEnd);
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(118),
      o = n(58),
      s = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);
    r(r.P + r.F * s, "String", {
      padEnd: function (e) {
        return i(this, e, arguments.length > 1 ? arguments[1] : void 0, !1);
      },
    });
  },
  function (e, t, n) {
    n(278), (e.exports = n(8).String.trimLeft);
  },
  function (e, t, n) {
    "use strict";
    n(40)(
      "trimLeft",
      function (e) {
        return function () {
          return e(this, 1);
        };
      },
      "trimStart"
    );
  },
  function (e, t, n) {
    n(280), (e.exports = n(8).String.trimRight);
  },
  function (e, t, n) {
    "use strict";
    n(40)(
      "trimRight",
      function (e) {
        return function () {
          return e(this, 2);
        };
      },
      "trimEnd"
    );
  },
  function (e, t, n) {
    n(282), (e.exports = n(62).f("asyncIterator"));
  },
  function (e, t, n) {
    n(90)("asyncIterator");
  },
  function (e, t, n) {
    n(284), (e.exports = n(8).Object.getOwnPropertyDescriptors);
  },
  function (e, t, n) {
    var r = n(1),
      i = n(117),
      o = n(16),
      s = n(21),
      a = n(78);
    r(r.S, "Object", {
      getOwnPropertyDescriptors: function (e) {
        for (
          var t, n, r = o(e), c = s.f, u = i(r), l = {}, h = 0;
          u.length > h;

        )
          void 0 !== (n = c(r, (t = u[h++]))) && a(l, t, n);
        return l;
      },
    });
  },
  function (e, t, n) {
    n(286), (e.exports = n(8).Object.values);
  },
  function (e, t, n) {
    var r = n(1),
      i = n(119)(!1);
    r(r.S, "Object", {
      values: function (e) {
        return i(e);
      },
    });
  },
  function (e, t, n) {
    n(288), (e.exports = n(8).Object.entries);
  },
  function (e, t, n) {
    var r = n(1),
      i = n(119)(!0);
    r(r.S, "Object", {
      entries: function (e) {
        return i(e);
      },
    });
  },
  function (e, t, n) {
    "use strict";
    n(111), n(290), (e.exports = n(8).Promise.finally);
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(8),
      o = n(2),
      s = n(48),
      a = n(113);
    r(r.P + r.R, "Promise", {
      finally: function (e) {
        var t = s(this, i.Promise || o.Promise),
          n = "function" == typeof e;
        return this.then(
          n
            ? function (n) {
                return a(t, e()).then(function () {
                  return n;
                });
              }
            : e,
          n
            ? function (n) {
                return a(t, e()).then(function () {
                  throw n;
                });
              }
            : e
        );
      },
    });
  },
  function (e, t, n) {
    n(292), n(293), n(294), (e.exports = n(8));
  },
  function (e, t, n) {
    var r = n(2),
      i = n(1),
      o = n(58),
      s = [].slice,
      a = /MSIE .\./.test(o),
      c = function (e) {
        return function (t, n) {
          var r = arguments.length > 2,
            i = !!r && s.call(arguments, 2);
          return e(
            r
              ? function () {
                  ("function" == typeof t ? t : Function(t)).apply(this, i);
                }
              : t,
            n
          );
        };
      };
    i(i.G + i.B + i.F * a, {
      setTimeout: c(r.setTimeout),
      setInterval: c(r.setInterval),
    });
  },
  function (e, t, n) {
    var r = n(1),
      i = n(84);
    r(r.G + r.B, { setImmediate: i.set, clearImmediate: i.clear });
  },
  function (e, t, n) {
    for (
      var r = n(81),
        i = n(32),
        o = n(12),
        s = n(2),
        a = n(15),
        c = n(41),
        u = n(6),
        l = u("iterator"),
        h = u("toStringTag"),
        d = c.Array,
        f = {
          CSSRuleList: !0,
          CSSStyleDeclaration: !1,
          CSSValueList: !1,
          ClientRectList: !1,
          DOMRectList: !1,
          DOMStringList: !1,
          DOMTokenList: !0,
          DataTransferItemList: !1,
          FileList: !1,
          HTMLAllCollection: !1,
          HTMLCollection: !1,
          HTMLFormElement: !1,
          HTMLSelectElement: !1,
          MediaList: !0,
          MimeTypeArray: !1,
          NamedNodeMap: !1,
          NodeList: !0,
          PaintRequestList: !1,
          Plugin: !1,
          PluginArray: !1,
          SVGLengthList: !1,
          SVGNumberList: !1,
          SVGPathSegList: !1,
          SVGPointList: !1,
          SVGStringList: !1,
          SVGTransformList: !1,
          SourceBufferList: !1,
          StyleSheetList: !0,
          TextTrackCueList: !1,
          TextTrackList: !1,
          TouchList: !1,
        },
        p = i(f),
        v = 0;
      v < p.length;
      v++
    ) {
      var g,
        m = p[v],
        y = f[m],
        b = s[m],
        w = b && b.prototype;
      if (w && (w[l] || a(w, l, d), w[h] || a(w, h, m), (c[m] = d), y))
        for (g in r) w[g] || o(w, g, r[g], !0);
    }
  },
  function (e, t, n) {
    var r = (function (e) {
      "use strict";
      var t = Object.prototype,
        n = t.hasOwnProperty,
        r = "function" == typeof Symbol ? Symbol : {},
        i = r.iterator || "@@iterator",
        o = r.asyncIterator || "@@asyncIterator",
        s = r.toStringTag || "@@toStringTag";
      function a(e, t, n) {
        return (
          Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          e[t]
        );
      }
      try {
        a({}, "");
      } catch (e) {
        a = function (e, t, n) {
          return (e[t] = n);
        };
      }
      function c(e, t, n, r) {
        var i = t && t.prototype instanceof h ? t : h,
          o = Object.create(i.prototype),
          s = new I(r || []);
        return (
          (o._invoke = (function (e, t, n) {
            var r = "suspendedStart";
            return function (i, o) {
              if ("executing" === r)
                throw new Error("Generator is already running");
              if ("completed" === r) {
                if ("throw" === i) throw o;
                return O();
              }
              for (n.method = i, n.arg = o; ; ) {
                var s = n.delegate;
                if (s) {
                  var a = w(s, n);
                  if (a) {
                    if (a === l) continue;
                    return a;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                r = "executing";
                var c = u(e, t, n);
                if ("normal" === c.type) {
                  if (
                    ((r = n.done ? "completed" : "suspendedYield"), c.arg === l)
                  )
                    continue;
                  return { value: c.arg, done: n.done };
                }
                "throw" === c.type &&
                  ((r = "completed"), (n.method = "throw"), (n.arg = c.arg));
              }
            };
          })(e, n, s)),
          o
        );
      }
      function u(e, t, n) {
        try {
          return { type: "normal", arg: e.call(t, n) };
        } catch (e) {
          return { type: "throw", arg: e };
        }
      }
      e.wrap = c;
      var l = {};
      function h() {}
      function d() {}
      function f() {}
      var p = {};
      a(p, i, function () {
        return this;
      });
      var v = Object.getPrototypeOf,
        g = v && v(v(E([])));
      g && g !== t && n.call(g, i) && (p = g);
      var m = (f.prototype = h.prototype = Object.create(p));
      function y(e) {
        ["next", "throw", "return"].forEach(function (t) {
          a(e, t, function (e) {
            return this._invoke(t, e);
          });
        });
      }
      function b(e, t) {
        var r;
        this._invoke = function (i, o) {
          function s() {
            return new t(function (r, s) {
              !(function r(i, o, s, a) {
                var c = u(e[i], e, o);
                if ("throw" !== c.type) {
                  var l = c.arg,
                    h = l.value;
                  return h && "object" == typeof h && n.call(h, "__await")
                    ? t.resolve(h.__await).then(
                        function (e) {
                          r("next", e, s, a);
                        },
                        function (e) {
                          r("throw", e, s, a);
                        }
                      )
                    : t.resolve(h).then(
                        function (e) {
                          (l.value = e), s(l);
                        },
                        function (e) {
                          return r("throw", e, s, a);
                        }
                      );
                }
                a(c.arg);
              })(i, o, r, s);
            });
          }
          return (r = r ? r.then(s, s) : s());
        };
      }
      function w(e, t) {
        var n = e.iterator[t.method];
        if (void 0 === n) {
          if (((t.delegate = null), "throw" === t.method)) {
            if (
              e.iterator.return &&
              ((t.method = "return"),
              (t.arg = void 0),
              w(e, t),
              "throw" === t.method)
            )
              return l;
            (t.method = "throw"),
              (t.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return l;
        }
        var r = u(n, e.iterator, t.arg);
        if ("throw" === r.type)
          return (t.method = "throw"), (t.arg = r.arg), (t.delegate = null), l;
        var i = r.arg;
        return i
          ? i.done
            ? ((t[e.resultName] = i.value),
              (t.next = e.nextLoc),
              "return" !== t.method && ((t.method = "next"), (t.arg = void 0)),
              (t.delegate = null),
              l)
            : i
          : ((t.method = "throw"),
            (t.arg = new TypeError("iterator result is not an object")),
            (t.delegate = null),
            l);
      }
      function _(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]),
          2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
          this.tryEntries.push(t);
      }
      function S(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
      }
      function I(e) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          e.forEach(_, this),
          this.reset(!0);
      }
      function E(e) {
        if (e) {
          var t = e[i];
          if (t) return t.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var r = -1,
              o = function t() {
                for (; ++r < e.length; )
                  if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                return (t.value = void 0), (t.done = !0), t;
              };
            return (o.next = o);
          }
        }
        return { next: O };
      }
      function O() {
        return { value: void 0, done: !0 };
      }
      return (
        (d.prototype = f),
        a(m, "constructor", f),
        a(f, "constructor", d),
        (d.displayName = a(f, s, "GeneratorFunction")),
        (e.isGeneratorFunction = function (e) {
          var t = "function" == typeof e && e.constructor;
          return (
            !!t &&
            (t === d || "GeneratorFunction" === (t.displayName || t.name))
          );
        }),
        (e.mark = function (e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, f)
              : ((e.__proto__ = f), a(e, s, "GeneratorFunction")),
            (e.prototype = Object.create(m)),
            e
          );
        }),
        (e.awrap = function (e) {
          return { __await: e };
        }),
        y(b.prototype),
        a(b.prototype, o, function () {
          return this;
        }),
        (e.AsyncIterator = b),
        (e.async = function (t, n, r, i, o) {
          void 0 === o && (o = Promise);
          var s = new b(c(t, n, r, i), o);
          return e.isGeneratorFunction(n)
            ? s
            : s.next().then(function (e) {
                return e.done ? e.value : s.next();
              });
        }),
        y(m),
        a(m, s, "Generator"),
        a(m, i, function () {
          return this;
        }),
        a(m, "toString", function () {
          return "[object Generator]";
        }),
        (e.keys = function (e) {
          var t = [];
          for (var n in e) t.push(n);
          return (
            t.reverse(),
            function n() {
              for (; t.length; ) {
                var r = t.pop();
                if (r in e) return (n.value = r), (n.done = !1), n;
              }
              return (n.done = !0), n;
            }
          );
        }),
        (e.values = E),
        (I.prototype = {
          constructor: I,
          reset: function (e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(S),
              !e)
            )
              for (var t in this)
                "t" === t.charAt(0) &&
                  n.call(this, t) &&
                  !isNaN(+t.slice(1)) &&
                  (this[t] = void 0);
          },
          stop: function () {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval;
          },
          dispatchException: function (e) {
            if (this.done) throw e;
            var t = this;
            function r(n, r) {
              return (
                (s.type = "throw"),
                (s.arg = e),
                (t.next = n),
                r && ((t.method = "next"), (t.arg = void 0)),
                !!r
              );
            }
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var o = this.tryEntries[i],
                s = o.completion;
              if ("root" === o.tryLoc) return r("end");
              if (o.tryLoc <= this.prev) {
                var a = n.call(o, "catchLoc"),
                  c = n.call(o, "finallyLoc");
                if (a && c) {
                  if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                } else if (a) {
                  if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                } else {
                  if (!c)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                }
              }
            }
          },
          abrupt: function (e, t) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var i = this.tryEntries[r];
              if (
                i.tryLoc <= this.prev &&
                n.call(i, "finallyLoc") &&
                this.prev < i.finallyLoc
              ) {
                var o = i;
                break;
              }
            }
            o &&
              ("break" === e || "continue" === e) &&
              o.tryLoc <= t &&
              t <= o.finallyLoc &&
              (o = null);
            var s = o ? o.completion : {};
            return (
              (s.type = e),
              (s.arg = t),
              o
                ? ((this.method = "next"), (this.next = o.finallyLoc), l)
                : this.complete(s)
            );
          },
          complete: function (e, t) {
            if ("throw" === e.type) throw e.arg;
            return (
              "break" === e.type || "continue" === e.type
                ? (this.next = e.arg)
                : "return" === e.type
                ? ((this.rval = this.arg = e.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === e.type && t && (this.next = t),
              l
            );
          },
          finish: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.finallyLoc === e)
                return this.complete(n.completion, n.afterLoc), S(n), l;
            }
          },
          catch: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.tryLoc === e) {
                var r = n.completion;
                if ("throw" === r.type) {
                  var i = r.arg;
                  S(n);
                }
                return i;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (e, t, n) {
            return (
              (this.delegate = { iterator: E(e), resultName: t, nextLoc: n }),
              "next" === this.method && (this.arg = void 0),
              l
            );
          },
        }),
        e
      );
    })(e.exports);
    try {
      regeneratorRuntime = r;
    } catch (e) {
      "object" == typeof globalThis
        ? (globalThis.regeneratorRuntime = r)
        : Function("r", "regeneratorRuntime = r")(r);
    }
  },
  function (e, t, n) {
    n(297), (e.exports = n(120).global);
  },
  function (e, t, n) {
    var r = n(298);
    r(r.G, { global: n(86) });
  },
  function (e, t, n) {
    var r = n(86),
      i = n(120),
      o = n(299),
      s = n(301),
      a = n(308),
      c = function (e, t, n) {
        var u,
          l,
          h,
          d = e & c.F,
          f = e & c.G,
          p = e & c.S,
          v = e & c.P,
          g = e & c.B,
          m = e & c.W,
          y = f ? i : i[t] || (i[t] = {}),
          b = y.prototype,
          w = f ? r : p ? r[t] : (r[t] || {}).prototype;
        for (u in (f && (n = t), n))
          ((l = !d && w && void 0 !== w[u]) && a(y, u)) ||
            ((h = l ? w[u] : n[u]),
            (y[u] =
              f && "function" != typeof w[u]
                ? n[u]
                : g && l
                ? o(h, r)
                : m && w[u] == h
                ? (function (e) {
                    var t = function (t, n, r) {
                      if (this instanceof e) {
                        switch (arguments.length) {
                          case 0:
                            return new e();
                          case 1:
                            return new e(t);
                          case 2:
                            return new e(t, n);
                        }
                        return new e(t, n, r);
                      }
                      return e.apply(this, arguments);
                    };
                    return (t.prototype = e.prototype), t;
                  })(h)
                : v && "function" == typeof h
                ? o(Function.call, h)
                : h),
            v &&
              (((y.virtual || (y.virtual = {}))[u] = h),
              e & c.R && b && !b[u] && s(b, u, h)));
      };
    (c.F = 1),
      (c.G = 2),
      (c.S = 4),
      (c.P = 8),
      (c.B = 16),
      (c.W = 32),
      (c.U = 64),
      (c.R = 128),
      (e.exports = c);
  },
  function (e, t, n) {
    var r = n(300);
    e.exports = function (e, t, n) {
      if ((r(e), void 0 === t)) return e;
      switch (n) {
        case 1:
          return function (n) {
            return e.call(t, n);
          };
        case 2:
          return function (n, r) {
            return e.call(t, n, r);
          };
        case 3:
          return function (n, r, i) {
            return e.call(t, n, r, i);
          };
      }
      return function () {
        return e.apply(t, arguments);
      };
    };
  },
  function (e, t) {
    e.exports = function (e) {
      if ("function" != typeof e) throw TypeError(e + " is not a function!");
      return e;
    };
  },
  function (e, t, n) {
    var r = n(302),
      i = n(307);
    e.exports = n(88)
      ? function (e, t, n) {
          return r.f(e, t, i(1, n));
        }
      : function (e, t, n) {
          return (e[t] = n), e;
        };
  },
  function (e, t, n) {
    var r = n(303),
      i = n(304),
      o = n(306),
      s = Object.defineProperty;
    t.f = n(88)
      ? Object.defineProperty
      : function (e, t, n) {
          if ((r(e), (t = o(t, !0)), r(n), i))
            try {
              return s(e, t, n);
            } catch (e) {}
          if ("get" in n || "set" in n)
            throw TypeError("Accessors not supported!");
          return "value" in n && (e[t] = n.value), e;
        };
  },
  function (e, t, n) {
    var r = n(87);
    e.exports = function (e) {
      if (!r(e)) throw TypeError(e + " is not an object!");
      return e;
    };
  },
  function (e, t, n) {
    e.exports =
      !n(88) &&
      !n(121)(function () {
        return (
          7 !=
          Object.defineProperty(n(305)("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (e, t, n) {
    var r = n(87),
      i = n(86).document,
      o = r(i) && r(i.createElement);
    e.exports = function (e) {
      return o ? i.createElement(e) : {};
    };
  },
  function (e, t, n) {
    var r = n(87);
    e.exports = function (e, t) {
      if (!r(e)) return e;
      var n, i;
      if (t && "function" == typeof (n = e.toString) && !r((i = n.call(e))))
        return i;
      if ("function" == typeof (n = e.valueOf) && !r((i = n.call(e)))) return i;
      if (!t && "function" == typeof (n = e.toString) && !r((i = n.call(e))))
        return i;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t,
      };
    };
  },
  function (e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function (e, t) {
      return n.call(e, t);
    };
  },
  function (e, t, n) {
    n(312), n(311);
  },
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t, n) {},
  function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0);
    class i {
      constructor(e, t, n) {
        (this.name = e),
          (this.instanceFactory = t),
          (this.type = n),
          (this.multipleInstances = !1),
          (this.serviceProps = {}),
          (this.instantiationMode = "LAZY"),
          (this.onInstanceCreated = null);
      }
      setInstantiationMode(e) {
        return (this.instantiationMode = e), this;
      }
      setMultipleInstances(e) {
        return (this.multipleInstances = e), this;
      }
      setServiceProps(e) {
        return (this.serviceProps = e), this;
      }
      setInstanceCreatedCallback(e) {
        return (this.onInstanceCreated = e), this;
      }
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    class o {
      constructor(e, t) {
        (this.name = e),
          (this.container = t),
          (this.component = null),
          (this.instances = new Map()),
          (this.instancesDeferred = new Map()),
          (this.instancesOptions = new Map()),
          (this.onInitCallbacks = new Map());
      }
      get(e) {
        const t = this.normalizeInstanceIdentifier(e);
        if (!this.instancesDeferred.has(t)) {
          const e = new r.a();
          if (
            (this.instancesDeferred.set(t, e),
            this.isInitialized(t) || this.shouldAutoInitialize())
          )
            try {
              const n = this.getOrInitializeService({ instanceIdentifier: t });
              n && e.resolve(n);
            } catch (e) {}
        }
        return this.instancesDeferred.get(t).promise;
      }
      getImmediate(e) {
        var t;
        const n = this.normalizeInstanceIdentifier(
            null == e ? void 0 : e.identifier
          ),
          r =
            null !== (t = null == e ? void 0 : e.optional) && void 0 !== t && t;
        if (!this.isInitialized(n) && !this.shouldAutoInitialize()) {
          if (r) return null;
          throw Error(`Service ${this.name} is not available`);
        }
        try {
          return this.getOrInitializeService({ instanceIdentifier: n });
        } catch (e) {
          if (r) return null;
          throw e;
        }
      }
      getComponent() {
        return this.component;
      }
      setComponent(e) {
        if (e.name !== this.name)
          throw Error(
            `Mismatching Component ${e.name} for Provider ${this.name}.`
          );
        if (this.component)
          throw Error(`Component for ${this.name} has already been provided`);
        if (((this.component = e), this.shouldAutoInitialize())) {
          if (
            (function (e) {
              return "EAGER" === e.instantiationMode;
            })(
              /**
               * @license
               * Copyright 2019 Google LLC
               *
               * Licensed under the Apache License, Version 2.0 (the "License");
               * you may not use this file except in compliance with the License.
               * You may obtain a copy of the License at
               *
               *   http://www.apache.org/licenses/LICENSE-2.0
               *
               * Unless required by applicable law or agreed to in writing, software
               * distributed under the License is distributed on an "AS IS" BASIS,
               * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
               * See the License for the specific language governing permissions and
               * limitations under the License.
               */ e
            )
          )
            try {
              this.getOrInitializeService({ instanceIdentifier: "[DEFAULT]" });
            } catch (e) {}
          for (const [e, t] of this.instancesDeferred.entries()) {
            const n = this.normalizeInstanceIdentifier(e);
            try {
              const e = this.getOrInitializeService({ instanceIdentifier: n });
              t.resolve(e);
            } catch (e) {}
          }
        }
      }
      clearInstance(e = "[DEFAULT]") {
        this.instancesDeferred.delete(e),
          this.instancesOptions.delete(e),
          this.instances.delete(e);
      }
      async delete() {
        const e = Array.from(this.instances.values());
        await Promise.all([
          ...e.filter((e) => "INTERNAL" in e).map((e) => e.INTERNAL.delete()),
          ...e.filter((e) => "_delete" in e).map((e) => e._delete()),
        ]);
      }
      isComponentSet() {
        return null != this.component;
      }
      isInitialized(e = "[DEFAULT]") {
        return this.instances.has(e);
      }
      getOptions(e = "[DEFAULT]") {
        return this.instancesOptions.get(e) || {};
      }
      initialize(e = {}) {
        const { options: t = {} } = e,
          n = this.normalizeInstanceIdentifier(e.instanceIdentifier);
        if (this.isInitialized(n))
          throw Error(`${this.name}(${n}) has already been initialized`);
        if (!this.isComponentSet())
          throw Error(`Component ${this.name} has not been registered yet`);
        const r = this.getOrInitializeService({
          instanceIdentifier: n,
          options: t,
        });
        for (const [e, t] of this.instancesDeferred.entries()) {
          n === this.normalizeInstanceIdentifier(e) && t.resolve(r);
        }
        return r;
      }
      onInit(e, t) {
        var n;
        const r = this.normalizeInstanceIdentifier(t),
          i =
            null !== (n = this.onInitCallbacks.get(r)) && void 0 !== n
              ? n
              : new Set();
        i.add(e), this.onInitCallbacks.set(r, i);
        const o = this.instances.get(r);
        return (
          o && e(o, r),
          () => {
            i.delete(e);
          }
        );
      }
      invokeOnInitCallbacks(e, t) {
        const n = this.onInitCallbacks.get(t);
        if (n)
          for (const r of n)
            try {
              r(e, t);
            } catch (e) {}
      }
      getOrInitializeService({ instanceIdentifier: e, options: t = {} }) {
        let n = this.instances.get(e);
        if (
          !n &&
          this.component &&
          ((n = this.component.instanceFactory(this.container, {
            instanceIdentifier: ((r = e), "[DEFAULT]" === r ? void 0 : r),
            options: t,
          })),
          this.instances.set(e, n),
          this.instancesOptions.set(e, t),
          this.invokeOnInitCallbacks(n, e),
          this.component.onInstanceCreated)
        )
          try {
            this.component.onInstanceCreated(this.container, e, n);
          } catch (e) {}
        var r;
        return n || null;
      }
      normalizeInstanceIdentifier(e = "[DEFAULT]") {
        return this.component
          ? this.component.multipleInstances
            ? e
            : "[DEFAULT]"
          : e;
      }
      shouldAutoInitialize() {
        return (
          !!this.component && "EXPLICIT" !== this.component.instantiationMode
        );
      }
    }
    class s {
      constructor(e) {
        (this.name = e), (this.providers = new Map());
      }
      addComponent(e) {
        const t = this.getProvider(e.name);
        if (t.isComponentSet())
          throw new Error(
            `Component ${e.name} has already been registered with ${this.name}`
          );
        t.setComponent(e);
      }
      addOrOverwriteComponent(e) {
        this.getProvider(e.name).isComponentSet() &&
          this.providers.delete(e.name),
          this.addComponent(e);
      }
      getProvider(e) {
        if (this.providers.has(e)) return this.providers.get(e);
        const t = new o(e, this);
        return this.providers.set(e, t), t;
      }
      getProviders() {
        return Array.from(this.providers.values());
      }
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ const a = [];
    var c;
    !(function (e) {
      (e[(e.DEBUG = 0)] = "DEBUG"),
        (e[(e.VERBOSE = 1)] = "VERBOSE"),
        (e[(e.INFO = 2)] = "INFO"),
        (e[(e.WARN = 3)] = "WARN"),
        (e[(e.ERROR = 4)] = "ERROR"),
        (e[(e.SILENT = 5)] = "SILENT");
    })(c || (c = {}));
    const u = {
        debug: c.DEBUG,
        verbose: c.VERBOSE,
        info: c.INFO,
        warn: c.WARN,
        error: c.ERROR,
        silent: c.SILENT,
      },
      l = c.INFO,
      h = {
        [c.DEBUG]: "log",
        [c.VERBOSE]: "log",
        [c.INFO]: "info",
        [c.WARN]: "warn",
        [c.ERROR]: "error",
      },
      d = (e, t, ...n) => {
        if (t < e.logLevel) return;
        const r = new Date().toISOString(),
          i = h[t];
        if (!i)
          throw new Error(
            `Attempted to log a message with an invalid logType (value: ${t})`
          );
        console[i](`[${r}]  ${e.name}:`, ...n);
      };
    class f {
      constructor(e) {
        (this.name = e),
          (this._logLevel = l),
          (this._logHandler = d),
          (this._userLogHandler = null),
          a.push(this);
      }
      get logLevel() {
        return this._logLevel;
      }
      set logLevel(e) {
        if (!(e in c))
          throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
        this._logLevel = e;
      }
      setLogLevel(e) {
        this._logLevel = "string" == typeof e ? u[e] : e;
      }
      get logHandler() {
        return this._logHandler;
      }
      set logHandler(e) {
        if ("function" != typeof e)
          throw new TypeError(
            "Value assigned to `logHandler` must be a function"
          );
        this._logHandler = e;
      }
      get userLogHandler() {
        return this._userLogHandler;
      }
      set userLogHandler(e) {
        this._userLogHandler = e;
      }
      debug(...e) {
        this._userLogHandler && this._userLogHandler(this, c.DEBUG, ...e),
          this._logHandler(this, c.DEBUG, ...e);
      }
      log(...e) {
        this._userLogHandler && this._userLogHandler(this, c.VERBOSE, ...e),
          this._logHandler(this, c.VERBOSE, ...e);
      }
      info(...e) {
        this._userLogHandler && this._userLogHandler(this, c.INFO, ...e),
          this._logHandler(this, c.INFO, ...e);
      }
      warn(...e) {
        this._userLogHandler && this._userLogHandler(this, c.WARN, ...e),
          this._logHandler(this, c.WARN, ...e);
      }
      error(...e) {
        this._userLogHandler && this._userLogHandler(this, c.ERROR, ...e),
          this._logHandler(this, c.ERROR, ...e);
      }
    }
    let p, v;
    const g = new WeakMap(),
      m = new WeakMap(),
      y = new WeakMap(),
      b = new WeakMap(),
      w = new WeakMap();
    let _ = {
      get(e, t, n) {
        if (e instanceof IDBTransaction) {
          if ("done" === t) return m.get(e);
          if ("objectStoreNames" === t) return e.objectStoreNames || y.get(e);
          if ("store" === t)
            return n.objectStoreNames[1]
              ? void 0
              : n.objectStore(n.objectStoreNames[0]);
        }
        return E(e[t]);
      },
      set: (e, t, n) => ((e[t] = n), !0),
      has: (e, t) =>
        (e instanceof IDBTransaction && ("done" === t || "store" === t)) ||
        t in e,
    };
    function S(e) {
      return e !== IDBDatabase.prototype.transaction ||
        "objectStoreNames" in IDBTransaction.prototype
        ? (
            v ||
            (v = [
              IDBCursor.prototype.advance,
              IDBCursor.prototype.continue,
              IDBCursor.prototype.continuePrimaryKey,
            ])
          ).includes(e)
          ? function (...t) {
              return e.apply(O(this), t), E(g.get(this));
            }
          : function (...t) {
              return E(e.apply(O(this), t));
            }
        : function (t, ...n) {
            const r = e.call(O(this), t, ...n);
            return y.set(r, t.sort ? t.sort() : [t]), E(r);
          };
    }
    function I(e) {
      return "function" == typeof e
        ? S(e)
        : (e instanceof IDBTransaction &&
            (function (e) {
              if (m.has(e)) return;
              const t = new Promise((t, n) => {
                const r = () => {
                    e.removeEventListener("complete", i),
                      e.removeEventListener("error", o),
                      e.removeEventListener("abort", o);
                  },
                  i = () => {
                    t(), r();
                  },
                  o = () => {
                    n(e.error || new DOMException("AbortError", "AbortError")),
                      r();
                  };
                e.addEventListener("complete", i),
                  e.addEventListener("error", o),
                  e.addEventListener("abort", o);
              });
              m.set(e, t);
            })(e),
          (t = e),
          (
            p ||
            (p = [
              IDBDatabase,
              IDBObjectStore,
              IDBIndex,
              IDBCursor,
              IDBTransaction,
            ])
          ).some((e) => t instanceof e)
            ? new Proxy(e, _)
            : e);
      var t;
    }
    function E(e) {
      if (e instanceof IDBRequest)
        return (function (e) {
          const t = new Promise((t, n) => {
            const r = () => {
                e.removeEventListener("success", i),
                  e.removeEventListener("error", o);
              },
              i = () => {
                t(E(e.result)), r();
              },
              o = () => {
                n(e.error), r();
              };
            e.addEventListener("success", i), e.addEventListener("error", o);
          });
          return (
            t
              .then((t) => {
                t instanceof IDBCursor && g.set(t, e);
              })
              .catch(() => {}),
            w.set(t, e),
            t
          );
        })(e);
      if (b.has(e)) return b.get(e);
      const t = I(e);
      return t !== e && (b.set(e, t), w.set(t, e)), t;
    }
    const O = (e) => w.get(e);
    const T = ["get", "getKey", "getAll", "getAllKeys", "count"],
      k = ["put", "add", "delete", "clear"],
      x = new Map();
    function A(e, t) {
      if (!(e instanceof IDBDatabase) || t in e || "string" != typeof t) return;
      if (x.get(t)) return x.get(t);
      const n = t.replace(/FromIndex$/, ""),
        r = t !== n,
        i = k.includes(n);
      if (
        !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
        (!i && !T.includes(n))
      )
        return;
      const o = async function (e, ...t) {
        const o = this.transaction(e, i ? "readwrite" : "readonly");
        let s = o.store;
        return (
          r && (s = s.index(t.shift())),
          (await Promise.all([s[n](...t), i && o.done]))[0]
        );
      };
      return x.set(t, o), o;
    }
    _ = ((e) => ({
      ...e,
      get: (t, n, r) => A(t, n) || e.get(t, n, r),
      has: (t, n) => !!A(t, n) || e.has(t, n),
    }))(_);
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    class P {
      constructor(e) {
        this.container = e;
      }
      getPlatformInfoString() {
        return this.container
          .getProviders()
          .map((e) => {
            if (
              (function (e) {
                const t = e.getComponent();
                return "VERSION" === (null == t ? void 0 : t.type);
              })(e)
            ) {
              const t = e.getImmediate();
              return `${t.library}/${t.version}`;
            }
            return null;
          })
          .filter((e) => e)
          .join(" ");
      }
    }
    const L = "@firebase/app",
      C = new f("@firebase/app"),
      N = {
        [L]: "fire-core",
        "@firebase/app-compat": "fire-core-compat",
        "@firebase/analytics": "fire-analytics",
        "@firebase/analytics-compat": "fire-analytics-compat",
        "@firebase/app-check": "fire-app-check",
        "@firebase/app-check-compat": "fire-app-check-compat",
        "@firebase/auth": "fire-auth",
        "@firebase/auth-compat": "fire-auth-compat",
        "@firebase/database": "fire-rtdb",
        "@firebase/database-compat": "fire-rtdb-compat",
        "@firebase/functions": "fire-fn",
        "@firebase/functions-compat": "fire-fn-compat",
        "@firebase/installations": "fire-iid",
        "@firebase/installations-compat": "fire-iid-compat",
        "@firebase/messaging": "fire-fcm",
        "@firebase/messaging-compat": "fire-fcm-compat",
        "@firebase/performance": "fire-perf",
        "@firebase/performance-compat": "fire-perf-compat",
        "@firebase/remote-config": "fire-rc",
        "@firebase/remote-config-compat": "fire-rc-compat",
        "@firebase/storage": "fire-gcs",
        "@firebase/storage-compat": "fire-gcs-compat",
        "@firebase/firestore": "fire-fst",
        "@firebase/firestore-compat": "fire-fst-compat",
        "fire-js": "fire-js",
        firebase: "fire-js-all",
      },
      R = new Map(),
      M = new Map();
    function D(e, t) {
      try {
        e.container.addComponent(t);
      } catch (n) {
        C.debug(
          `Component ${t.name} failed to register with FirebaseApp ${e.name}`,
          n
        );
      }
    }
    function j(e) {
      const t = e.name;
      if (M.has(t))
        return (
          C.debug(`There were multiple attempts to register component ${t}.`),
          !1
        );
      M.set(t, e);
      for (const t of R.values()) D(t, e);
      return !0;
    }
    function F(e, t) {
      const n = e.container
        .getProvider("heartbeat")
        .getImmediate({ optional: !0 });
      return n && n.triggerHeartbeat(), e.container.getProvider(t);
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    const B = {
        "no-app":
          "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
        "bad-app-name": "Illegal App name: '{$appName}",
        "duplicate-app":
          "Firebase App named '{$appName}' already exists with different options or config",
        "app-deleted": "Firebase App named '{$appName}' already deleted",
        "invalid-app-argument":
          "firebase.{$appName}() takes either no argument or a Firebase App instance.",
        "invalid-log-argument":
          "First argument to `onLog` must be null or a function.",
        "storage-open":
          "Error thrown when opening storage. Original error: {$originalErrorMessage}.",
        "storage-get":
          "Error thrown when reading from storage. Original error: {$originalErrorMessage}.",
        "storage-set":
          "Error thrown when writing to storage. Original error: {$originalErrorMessage}.",
        "storage-delete":
          "Error thrown when deleting from storage. Original error: {$originalErrorMessage}.",
      },
      U = new r.b("app", "Firebase", B);
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    class q {
      constructor(e, t, n) {
        (this._isDeleted = !1),
          (this._options = Object.assign({}, e)),
          (this._config = Object.assign({}, t)),
          (this._name = t.name),
          (this._automaticDataCollectionEnabled =
            t.automaticDataCollectionEnabled),
          (this._container = n),
          this.container.addComponent(new i("app", () => this, "PUBLIC"));
      }
      get automaticDataCollectionEnabled() {
        return this.checkDestroyed(), this._automaticDataCollectionEnabled;
      }
      set automaticDataCollectionEnabled(e) {
        this.checkDestroyed(), (this._automaticDataCollectionEnabled = e);
      }
      get name() {
        return this.checkDestroyed(), this._name;
      }
      get options() {
        return this.checkDestroyed(), this._options;
      }
      get config() {
        return this.checkDestroyed(), this._config;
      }
      get container() {
        return this._container;
      }
      get isDeleted() {
        return this._isDeleted;
      }
      set isDeleted(e) {
        this._isDeleted = e;
      }
      checkDestroyed() {
        if (this.isDeleted)
          throw U.create("app-deleted", { appName: this._name });
      }
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ function V(e, t, n) {
      var r;
      let o = null !== (r = N[e]) && void 0 !== r ? r : e;
      n && (o += "-" + n);
      const s = o.match(/\s|\//),
        a = t.match(/\s|\//);
      if (s || a) {
        const e = [`Unable to register library "${o}" with version "${t}":`];
        return (
          s &&
            e.push(
              `library name "${o}" contains illegal characters (whitespace or "/")`
            ),
          s && a && e.push("and"),
          a &&
            e.push(
              `version name "${t}" contains illegal characters (whitespace or "/")`
            ),
          void C.warn(e.join(" "))
        );
      }
      j(new i(o + "-version", () => ({ library: o, version: t }), "VERSION"));
    }
    /**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    const H = "firebase-heartbeat-store";
    let W = null;
    function z() {
      return (
        W ||
          (W = (function (
            e,
            t,
            { blocked: n, upgrade: r, blocking: i, terminated: o } = {}
          ) {
            const s = indexedDB.open(e, t),
              a = E(s);
            return (
              r &&
                s.addEventListener("upgradeneeded", (e) => {
                  r(E(s.result), e.oldVersion, e.newVersion, E(s.transaction));
                }),
              n && s.addEventListener("blocked", () => n()),
              a
                .then((e) => {
                  o && e.addEventListener("close", () => o()),
                    i && e.addEventListener("versionchange", () => i());
                })
                .catch(() => {}),
              a
            );
          })("firebase-heartbeat-database", 1, {
            upgrade: (e, t) => {
              switch (t) {
                case 0:
                  e.createObjectStore(H);
              }
            },
          }).catch((e) => {
            throw U.create("storage-open", { originalErrorMessage: e.message });
          })),
        W
      );
    }
    async function G(e, t) {
      var n;
      try {
        const n = (await z()).transaction(H, "readwrite"),
          r = n.objectStore(H);
        return await r.put(t, K(e)), n.done;
      } catch (e) {
        throw U.create("storage-set", {
          originalErrorMessage:
            null === (n = e) || void 0 === n ? void 0 : n.message,
        });
      }
    }
    function K(e) {
      return `${e.name}!${e.options.appId}`;
    }
    /**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ class $ {
      constructor(e) {
        (this.container = e), (this._heartbeatsCache = null);
        const t = this.container.getProvider("app").getImmediate();
        (this._storage = new Y(t)),
          (this._heartbeatsCachePromise = this._storage
            .read()
            .then((e) => ((this._heartbeatsCache = e), e)));
      }
      async triggerHeartbeat() {
        const e = this.container
            .getProvider("platform-logger")
            .getImmediate()
            .getPlatformInfoString(),
          t = J();
        if (
          (null === this._heartbeatsCache &&
            (this._heartbeatsCache = await this._heartbeatsCachePromise),
          this._heartbeatsCache.lastSentHeartbeatDate !== t &&
            !this._heartbeatsCache.heartbeats.some((e) => e.date === t))
        )
          return (
            this._heartbeatsCache.heartbeats.push({ date: t, agent: e }),
            (this._heartbeatsCache.heartbeats =
              this._heartbeatsCache.heartbeats.filter((e) => {
                const t = new Date(e.date).valueOf();
                return Date.now() - t <= 2592e6;
              })),
            this._storage.overwrite(this._heartbeatsCache)
          );
      }
      async getHeartbeatsHeader() {
        if (
          (null === this._heartbeatsCache &&
            (await this._heartbeatsCachePromise),
          null === this._heartbeatsCache ||
            0 === this._heartbeatsCache.heartbeats.length)
        )
          return "";
        const e = J(),
          { heartbeatsToSend: t, unsentEntries: n } = (function (e, t = 1024) {
            const n = [];
            let r = e.slice();
            for (const i of e) {
              const e = n.find((e) => e.agent === i.agent);
              if (e) {
                if ((e.dates.push(i.date), Z(n) > t)) {
                  e.dates.pop();
                  break;
                }
              } else if (
                (n.push({ agent: i.agent, dates: [i.date] }), Z(n) > t)
              ) {
                n.pop();
                break;
              }
              r = r.slice(1);
            }
            return { heartbeatsToSend: n, unsentEntries: r };
          })(this._heartbeatsCache.heartbeats),
          i = Object(r.e)(JSON.stringify({ version: 2, heartbeats: t }));
        return (
          (this._heartbeatsCache.lastSentHeartbeatDate = e),
          n.length > 0
            ? ((this._heartbeatsCache.heartbeats = n),
              await this._storage.overwrite(this._heartbeatsCache))
            : ((this._heartbeatsCache.heartbeats = []),
              this._storage.overwrite(this._heartbeatsCache)),
          i
        );
      }
    }
    function J() {
      return new Date().toISOString().substring(0, 10);
    }
    class Y {
      constructor(e) {
        (this.app = e),
          (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
      }
      async runIndexedDBEnvironmentCheck() {
        return (
          !!Object(r.n)() &&
          Object(r.s)()
            .then(() => !0)
            .catch(() => !1)
        );
      }
      async read() {
        if (await this._canUseIndexedDBPromise) {
          return (
            (await (async function (e) {
              var t;
              try {
                return (await z()).transaction(H).objectStore(H).get(K(e));
              } catch (e) {
                throw U.create("storage-get", {
                  originalErrorMessage:
                    null === (t = e) || void 0 === t ? void 0 : t.message,
                });
              }
            })(this.app)) || { heartbeats: [] }
          );
        }
        return { heartbeats: [] };
      }
      async overwrite(e) {
        var t;
        if (await this._canUseIndexedDBPromise) {
          const n = await this.read();
          return G(this.app, {
            lastSentHeartbeatDate:
              null !== (t = e.lastSentHeartbeatDate) && void 0 !== t
                ? t
                : n.lastSentHeartbeatDate,
            heartbeats: e.heartbeats,
          });
        }
      }
      async add(e) {
        var t;
        if (await this._canUseIndexedDBPromise) {
          const n = await this.read();
          return G(this.app, {
            lastSentHeartbeatDate:
              null !== (t = e.lastSentHeartbeatDate) && void 0 !== t
                ? t
                : n.lastSentHeartbeatDate,
            heartbeats: [...n.heartbeats, ...e.heartbeats],
          });
        }
      }
    }
    function Z(e) {
      return Object(r.e)(JSON.stringify({ version: 2, heartbeats: e })).length;
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ var X;
    (X = ""),
      j(new i("platform-logger", (e) => new P(e), "PRIVATE")),
      j(new i("heartbeat", (e) => new $(e), "PRIVATE")),
      V(L, "0.7.29", X),
      V(L, "0.7.29", "esm2017"),
      V("fire-js", "");
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    V("firebase", "9.9.1", "app");
    function Q(e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var i = 0;
        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
            (n[r[i]] = e[r[i]]);
      }
      return n;
    }
    Object.create;
    Object.create;
    function ee() {
      return {
        "dependent-sdk-initialized-before-auth":
          "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
      };
    }
    const te = ee,
      ne = new r.b("auth", "Firebase", {
        "dependent-sdk-initialized-before-auth":
          "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
      }),
      re = new f("@firebase/auth");
    function ie(e, ...t) {
      re.logLevel <= c.ERROR && re.error("Auth (9.9.1): " + e, ...t);
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ function oe(e, ...t) {
      throw ce(e, ...t);
    }
    function se(e, ...t) {
      return ce(e, ...t);
    }
    function ae(e, t, n) {
      const i = Object.assign(Object.assign({}, te()), { [t]: n });
      return new r.b("auth", "Firebase", i).create(t, { appName: e.name });
    }
    function ce(e, ...t) {
      if ("string" != typeof e) {
        const n = t[0],
          r = [...t.slice(1)];
        return r[0] && (r[0].appName = e.name), e._errorFactory.create(n, ...r);
      }
      return ne.create(e, ...t);
    }
    function ue(e, t, ...n) {
      if (!e) throw ce(t, ...n);
    }
    function le(e) {
      const t = "INTERNAL ASSERTION FAILED: " + e;
      throw (ie(t), new Error(t));
    }
    function he(e, t) {
      e || le(t);
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ const de = new Map();
    function fe(e) {
      he(e instanceof Function, "Expected a class definition");
      let t = de.get(e);
      return t
        ? (he(t instanceof e, "Instance stored in cache mismatched with class"),
          t)
        : ((t = new e()), de.set(e, t), t);
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function pe() {
      var e;
      return (
        ("undefined" != typeof self &&
          (null === (e = self.location) || void 0 === e ? void 0 : e.href)) ||
        ""
      );
    }
    function ve() {
      return "http:" === ge() || "https:" === ge();
    }
    function ge() {
      var e;
      return (
        ("undefined" != typeof self &&
          (null === (e = self.location) || void 0 === e
            ? void 0
            : e.protocol)) ||
        null
      );
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    class me {
      constructor(e, t) {
        (this.shortDelay = e),
          (this.longDelay = t),
          he(t > e, "Short delay should be less than long delay!"),
          (this.isMobile = Object(r.o)() || Object(r.p)());
      }
      get() {
        return "undefined" != typeof navigator &&
          navigator &&
          "onLine" in navigator &&
          "boolean" == typeof navigator.onLine &&
          (ve() || Object(r.k)() || "connection" in navigator) &&
          !navigator.onLine
          ? Math.min(5e3, this.shortDelay)
          : this.isMobile
          ? this.longDelay
          : this.shortDelay;
      }
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ function ye(e, t) {
      he(e.emulator, "Emulator should always be set here");
      const { url: n } = e.emulator;
      return t ? `${n}${t.startsWith("/") ? t.slice(1) : t}` : n;
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ class be {
      static initialize(e, t, n) {
        (this.fetchImpl = e),
          t && (this.headersImpl = t),
          n && (this.responseImpl = n);
      }
      static fetch() {
        return this.fetchImpl
          ? this.fetchImpl
          : "undefined" != typeof self && "fetch" in self
          ? self.fetch
          : void le(
              "Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
            );
      }
      static headers() {
        return this.headersImpl
          ? this.headersImpl
          : "undefined" != typeof self && "Headers" in self
          ? self.Headers
          : void le(
              "Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
            );
      }
      static response() {
        return this.responseImpl
          ? this.responseImpl
          : "undefined" != typeof self && "Response" in self
          ? self.Response
          : void le(
              "Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
            );
      }
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ const we = {
        CREDENTIAL_MISMATCH: "custom-token-mismatch",
        MISSING_CUSTOM_TOKEN: "internal-error",
        INVALID_IDENTIFIER: "invalid-email",
        MISSING_CONTINUE_URI: "internal-error",
        INVALID_PASSWORD: "wrong-password",
        MISSING_PASSWORD: "internal-error",
        EMAIL_EXISTS: "email-already-in-use",
        PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
        INVALID_IDP_RESPONSE: "invalid-credential",
        INVALID_PENDING_TOKEN: "invalid-credential",
        FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
        MISSING_REQ_TYPE: "internal-error",
        EMAIL_NOT_FOUND: "user-not-found",
        RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
        EXPIRED_OOB_CODE: "expired-action-code",
        INVALID_OOB_CODE: "invalid-action-code",
        MISSING_OOB_CODE: "internal-error",
        CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
        INVALID_ID_TOKEN: "invalid-user-token",
        TOKEN_EXPIRED: "user-token-expired",
        USER_NOT_FOUND: "user-token-expired",
        TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
        INVALID_CODE: "invalid-verification-code",
        INVALID_SESSION_INFO: "invalid-verification-id",
        INVALID_TEMPORARY_PROOF: "invalid-credential",
        MISSING_SESSION_INFO: "missing-verification-id",
        SESSION_EXPIRED: "code-expired",
        MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
        UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
        INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
        ADMIN_ONLY_OPERATION: "admin-restricted-operation",
        INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
        MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
        MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
        MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
        SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
        SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
        BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
      },
      _e = new me(3e4, 6e4);
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ function Se(e, t) {
      return e.tenantId && !t.tenantId
        ? Object.assign(Object.assign({}, t), { tenantId: e.tenantId })
        : t;
    }
    async function Ie(e, t, n, i, o = {}) {
      return Ee(e, o, async () => {
        let o = {},
          s = {};
        i && ("GET" === t ? (s = i) : (o = { body: JSON.stringify(i) }));
        const a = Object(r.q)(Object.assign({ key: e.config.apiKey }, s)).slice(
            1
          ),
          c = await e._getAdditionalHeaders();
        return (
          (c["Content-Type"] = "application/json"),
          e.languageCode && (c["X-Firebase-Locale"] = e.languageCode),
          be.fetch()(
            Te(e, e.config.apiHost, n, a),
            Object.assign(
              { method: t, headers: c, referrerPolicy: "no-referrer" },
              o
            )
          )
        );
      });
    }
    async function Ee(e, t, n) {
      e._canInitEmulator = !1;
      const i = Object.assign(Object.assign({}, we), t);
      try {
        const t = new ke(e),
          r = await Promise.race([n(), t.promise]);
        t.clearNetworkTimeout();
        const o = await r.json();
        if ("needConfirmation" in o)
          throw xe(e, "account-exists-with-different-credential", o);
        if (r.ok && !("errorMessage" in o)) return o;
        {
          const t = r.ok ? o.errorMessage : o.error.message,
            [n, s] = t.split(" : ");
          if ("FEDERATED_USER_ID_ALREADY_LINKED" === n)
            throw xe(e, "credential-already-in-use", o);
          if ("EMAIL_EXISTS" === n) throw xe(e, "email-already-in-use", o);
          if ("USER_DISABLED" === n) throw xe(e, "user-disabled", o);
          const a = i[n] || n.toLowerCase().replace(/[_\s]+/g, "-");
          if (s) throw ae(e, a, s);
          oe(e, a);
        }
      } catch (t) {
        if (t instanceof r.c) throw t;
        oe(e, "network-request-failed");
      }
    }
    async function Oe(e, t, n, r, i = {}) {
      const o = await Ie(e, t, n, r, i);
      return (
        "mfaPendingCredential" in o &&
          oe(e, "multi-factor-auth-required", { _serverResponse: o }),
        o
      );
    }
    function Te(e, t, n, r) {
      const i = `${t}${n}?${r}`;
      return e.config.emulator
        ? ye(e.config, i)
        : `${e.config.apiScheme}://${i}`;
    }
    class ke {
      constructor(e) {
        (this.auth = e),
          (this.timer = null),
          (this.promise = new Promise((e, t) => {
            this.timer = setTimeout(
              () => t(se(this.auth, "network-request-failed")),
              _e.get()
            );
          }));
      }
      clearNetworkTimeout() {
        clearTimeout(this.timer);
      }
    }
    function xe(e, t, n) {
      const r = { appName: e.name };
      n.email && (r.email = n.email),
        n.phoneNumber && (r.phoneNumber = n.phoneNumber);
      const i = se(e, t, r);
      return (i.customData._tokenResponse = n), i;
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function Ae(e) {
      if (e)
        try {
          const t = new Date(Number(e));
          if (!isNaN(t.getTime())) return t.toUTCString();
        } catch (e) {}
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ function Pe(e) {
      return 1e3 * Number(e);
    }
    function Le(e) {
      var t;
      const [n, i, o] = e.split(".");
      if (void 0 === n || void 0 === i || void 0 === o)
        return ie("JWT malformed, contained fewer than 3 sections"), null;
      try {
        const e = Object(r.d)(i);
        return e
          ? JSON.parse(e)
          : (ie("Failed to decode base64 JWT payload"), null);
      } catch (e) {
        return (
          ie(
            "Caught error parsing JWT payload as JSON",
            null === (t = e) || void 0 === t ? void 0 : t.toString()
          ),
          null
        );
      }
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    async function Ce(e, t, n = !1) {
      if (n) return t;
      try {
        return await t;
      } catch (t) {
        throw (
          (t instanceof r.c &&
            (function ({ code: e }) {
              return (
                "auth/user-disabled" === e || "auth/user-token-expired" === e
              );
            })(
              /**
               * @license
               * Copyright 2020 Google LLC
               *
               * Licensed under the Apache License, Version 2.0 (the "License");
               * you may not use this file except in compliance with the License.
               * You may obtain a copy of the License at
               *
               *   http://www.apache.org/licenses/LICENSE-2.0
               *
               * Unless required by applicable law or agreed to in writing, software
               * distributed under the License is distributed on an "AS IS" BASIS,
               * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
               * See the License for the specific language governing permissions and
               * limitations under the License.
               */ t
            ) &&
            e.auth.currentUser === e &&
            (await e.auth.signOut()),
          t)
        );
      }
    }
    class Ne {
      constructor(e) {
        (this.user = e),
          (this.isRunning = !1),
          (this.timerId = null),
          (this.errorBackoff = 3e4);
      }
      _start() {
        this.isRunning || ((this.isRunning = !0), this.schedule());
      }
      _stop() {
        this.isRunning &&
          ((this.isRunning = !1),
          null !== this.timerId && clearTimeout(this.timerId));
      }
      getInterval(e) {
        var t;
        if (e) {
          const e = this.errorBackoff;
          return (this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4)), e;
        }
        {
          this.errorBackoff = 3e4;
          const e =
            (null !== (t = this.user.stsTokenManager.expirationTime) &&
            void 0 !== t
              ? t
              : 0) -
            Date.now() -
            3e5;
          return Math.max(0, e);
        }
      }
      schedule(e = !1) {
        if (!this.isRunning) return;
        const t = this.getInterval(e);
        this.timerId = setTimeout(async () => {
          await this.iteration();
        }, t);
      }
      async iteration() {
        var e;
        try {
          await this.user.getIdToken(!0);
        } catch (t) {
          return void (
            "auth/network-request-failed" ===
              (null === (e = t) || void 0 === e ? void 0 : e.code) &&
            this.schedule(!0)
          );
        }
        this.schedule();
      }
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ class Re {
      constructor(e, t) {
        (this.createdAt = e), (this.lastLoginAt = t), this._initializeTime();
      }
      _initializeTime() {
        (this.lastSignInTime = Ae(this.lastLoginAt)),
          (this.creationTime = Ae(this.createdAt));
      }
      _copy(e) {
        (this.createdAt = e.createdAt),
          (this.lastLoginAt = e.lastLoginAt),
          this._initializeTime();
      }
      toJSON() {
        return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
      }
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ async function Me(e) {
      var t;
      const n = e.auth,
        r = await e.getIdToken(),
        i = await Ce(
          e,
          (async function (e, t) {
            return Ie(e, "POST", "/v1/accounts:lookup", t);
          })(n, { idToken: r })
        );
      ue(null == i ? void 0 : i.users.length, n, "internal-error");
      const o = i.users[0];
      e._notifyReloadListener(o);
      const s = (
        null === (t = o.providerUserInfo) || void 0 === t ? void 0 : t.length
      )
        ? o.providerUserInfo.map((e) => {
            var { providerId: t } = e,
              n = Q(e, ["providerId"]);
            return {
              providerId: t,
              uid: n.rawId || "",
              displayName: n.displayName || null,
              email: n.email || null,
              phoneNumber: n.phoneNumber || null,
              photoURL: n.photoUrl || null,
            };
          })
        : [];
      const a =
        ((c = e.providerData),
        (u = s),
        [
          ...c.filter((e) => !u.some((t) => t.providerId === e.providerId)),
          ...u,
        ]);
      var c, u;
      const l = e.isAnonymous,
        h = !((e.email && o.passwordHash) || (null == a ? void 0 : a.length)),
        d = !!l && h,
        f = {
          uid: o.localId,
          displayName: o.displayName || null,
          photoURL: o.photoUrl || null,
          email: o.email || null,
          emailVerified: o.emailVerified || !1,
          phoneNumber: o.phoneNumber || null,
          tenantId: o.tenantId || null,
          providerData: a,
          metadata: new Re(o.createdAt, o.lastLoginAt),
          isAnonymous: d,
        };
      Object.assign(e, f);
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    class De {
      constructor() {
        (this.refreshToken = null),
          (this.accessToken = null),
          (this.expirationTime = null);
      }
      get isExpired() {
        return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
      }
      updateFromServerResponse(e) {
        ue(e.idToken, "internal-error"),
          ue(void 0 !== e.idToken, "internal-error"),
          ue(void 0 !== e.refreshToken, "internal-error");
        const t =
          "expiresIn" in e && void 0 !== e.expiresIn
            ? Number(e.expiresIn)
            : (function (e) {
                const t = Le(e);
                return (
                  ue(t, "internal-error"),
                  ue(void 0 !== t.exp, "internal-error"),
                  ue(void 0 !== t.iat, "internal-error"),
                  Number(t.exp) - Number(t.iat)
                );
              })(e.idToken);
        this.updateTokensAndExpiration(e.idToken, e.refreshToken, t);
      }
      async getToken(e, t = !1) {
        return (
          ue(!this.accessToken || this.refreshToken, e, "user-token-expired"),
          t || !this.accessToken || this.isExpired
            ? this.refreshToken
              ? (await this.refresh(e, this.refreshToken), this.accessToken)
              : null
            : this.accessToken
        );
      }
      clearRefreshToken() {
        this.refreshToken = null;
      }
      async refresh(e, t) {
        const {
          accessToken: n,
          refreshToken: i,
          expiresIn: o,
        } = await /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        (async function (e, t) {
          const n = await Ee(e, {}, async () => {
            const n = Object(r.q)({
                grant_type: "refresh_token",
                refresh_token: t,
              }).slice(1),
              { tokenApiHost: i, apiKey: o } = e.config,
              s = Te(e, i, "/v1/token", "key=" + o),
              a = await e._getAdditionalHeaders();
            return (
              (a["Content-Type"] = "application/x-www-form-urlencoded"),
              be.fetch()(s, { method: "POST", headers: a, body: n })
            );
          });
          return {
            accessToken: n.access_token,
            expiresIn: n.expires_in,
            refreshToken: n.refresh_token,
          };
        })(e, t);
        this.updateTokensAndExpiration(n, i, Number(o));
      }
      updateTokensAndExpiration(e, t, n) {
        (this.refreshToken = t || null),
          (this.accessToken = e || null),
          (this.expirationTime = Date.now() + 1e3 * n);
      }
      static fromJSON(e, t) {
        const { refreshToken: n, accessToken: r, expirationTime: i } = t,
          o = new De();
        return (
          n &&
            (ue("string" == typeof n, "internal-error", { appName: e }),
            (o.refreshToken = n)),
          r &&
            (ue("string" == typeof r, "internal-error", { appName: e }),
            (o.accessToken = r)),
          i &&
            (ue("number" == typeof i, "internal-error", { appName: e }),
            (o.expirationTime = i)),
          o
        );
      }
      toJSON() {
        return {
          refreshToken: this.refreshToken,
          accessToken: this.accessToken,
          expirationTime: this.expirationTime,
        };
      }
      _assign(e) {
        (this.accessToken = e.accessToken),
          (this.refreshToken = e.refreshToken),
          (this.expirationTime = e.expirationTime);
      }
      _clone() {
        return Object.assign(new De(), this.toJSON());
      }
      _performRefresh() {
        return le("not implemented");
      }
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ function je(e, t) {
      ue("string" == typeof e || void 0 === e, "internal-error", {
        appName: t,
      });
    }
    class Fe {
      constructor(e) {
        var { uid: t, auth: n, stsTokenManager: r } = e,
          i = Q(e, ["uid", "auth", "stsTokenManager"]);
        (this.providerId = "firebase"),
          (this.proactiveRefresh = new Ne(this)),
          (this.reloadUserInfo = null),
          (this.reloadListener = null),
          (this.uid = t),
          (this.auth = n),
          (this.stsTokenManager = r),
          (this.accessToken = r.accessToken),
          (this.displayName = i.displayName || null),
          (this.email = i.email || null),
          (this.emailVerified = i.emailVerified || !1),
          (this.phoneNumber = i.phoneNumber || null),
          (this.photoURL = i.photoURL || null),
          (this.isAnonymous = i.isAnonymous || !1),
          (this.tenantId = i.tenantId || null),
          (this.providerData = i.providerData ? [...i.providerData] : []),
          (this.metadata = new Re(
            i.createdAt || void 0,
            i.lastLoginAt || void 0
          ));
      }
      async getIdToken(e) {
        const t = await Ce(this, this.stsTokenManager.getToken(this.auth, e));
        return (
          ue(t, this.auth, "internal-error"),
          this.accessToken !== t &&
            ((this.accessToken = t),
            await this.auth._persistUserIfCurrent(this),
            this.auth._notifyListenersIfCurrent(this)),
          t
        );
      }
      getIdTokenResult(e) {
        return (async function (e, t = !1) {
          const n = Object(r.i)(e),
            i = await n.getIdToken(t),
            o = Le(i);
          ue(o && o.exp && o.auth_time && o.iat, n.auth, "internal-error");
          const s = "object" == typeof o.firebase ? o.firebase : void 0,
            a = null == s ? void 0 : s.sign_in_provider;
          return {
            claims: o,
            token: i,
            authTime: Ae(Pe(o.auth_time)),
            issuedAtTime: Ae(Pe(o.iat)),
            expirationTime: Ae(Pe(o.exp)),
            signInProvider: a || null,
            signInSecondFactor:
              (null == s ? void 0 : s.sign_in_second_factor) || null,
          };
        })(this, e);
      }
      reload() {
        return (async function (e) {
          const t = Object(r.i)(e);
          await Me(t),
            await t.auth._persistUserIfCurrent(t),
            t.auth._notifyListenersIfCurrent(t);
        })(this);
      }
      _assign(e) {
        this !== e &&
          (ue(this.uid === e.uid, this.auth, "internal-error"),
          (this.displayName = e.displayName),
          (this.photoURL = e.photoURL),
          (this.email = e.email),
          (this.emailVerified = e.emailVerified),
          (this.phoneNumber = e.phoneNumber),
          (this.isAnonymous = e.isAnonymous),
          (this.tenantId = e.tenantId),
          (this.providerData = e.providerData.map((e) => Object.assign({}, e))),
          this.metadata._copy(e.metadata),
          this.stsTokenManager._assign(e.stsTokenManager));
      }
      _clone(e) {
        return new Fe(
          Object.assign(Object.assign({}, this), {
            auth: e,
            stsTokenManager: this.stsTokenManager._clone(),
          })
        );
      }
      _onReload(e) {
        ue(!this.reloadListener, this.auth, "internal-error"),
          (this.reloadListener = e),
          this.reloadUserInfo &&
            (this._notifyReloadListener(this.reloadUserInfo),
            (this.reloadUserInfo = null));
      }
      _notifyReloadListener(e) {
        this.reloadListener
          ? this.reloadListener(e)
          : (this.reloadUserInfo = e);
      }
      _startProactiveRefresh() {
        this.proactiveRefresh._start();
      }
      _stopProactiveRefresh() {
        this.proactiveRefresh._stop();
      }
      async _updateTokensIfNecessary(e, t = !1) {
        let n = !1;
        e.idToken &&
          e.idToken !== this.stsTokenManager.accessToken &&
          (this.stsTokenManager.updateFromServerResponse(e), (n = !0)),
          t && (await Me(this)),
          await this.auth._persistUserIfCurrent(this),
          n && this.auth._notifyListenersIfCurrent(this);
      }
      async delete() {
        const e = await this.getIdToken();
        return (
          await Ce(
            this,
            (async function (e, t) {
              return Ie(e, "POST", "/v1/accounts:delete", t);
            })(this.auth, { idToken: e })
          ),
          this.stsTokenManager.clearRefreshToken(),
          this.auth.signOut()
        );
      }
      toJSON() {
        return Object.assign(
          Object.assign(
            {
              uid: this.uid,
              email: this.email || void 0,
              emailVerified: this.emailVerified,
              displayName: this.displayName || void 0,
              isAnonymous: this.isAnonymous,
              photoURL: this.photoURL || void 0,
              phoneNumber: this.phoneNumber || void 0,
              tenantId: this.tenantId || void 0,
              providerData: this.providerData.map((e) => Object.assign({}, e)),
              stsTokenManager: this.stsTokenManager.toJSON(),
              _redirectEventId: this._redirectEventId,
            },
            this.metadata.toJSON()
          ),
          { apiKey: this.auth.config.apiKey, appName: this.auth.name }
        );
      }
      get refreshToken() {
        return this.stsTokenManager.refreshToken || "";
      }
      static _fromJSON(e, t) {
        var n, r, i, o, s, a, c, u;
        const l = null !== (n = t.displayName) && void 0 !== n ? n : void 0,
          h = null !== (r = t.email) && void 0 !== r ? r : void 0,
          d = null !== (i = t.phoneNumber) && void 0 !== i ? i : void 0,
          f = null !== (o = t.photoURL) && void 0 !== o ? o : void 0,
          p = null !== (s = t.tenantId) && void 0 !== s ? s : void 0,
          v = null !== (a = t._redirectEventId) && void 0 !== a ? a : void 0,
          g = null !== (c = t.createdAt) && void 0 !== c ? c : void 0,
          m = null !== (u = t.lastLoginAt) && void 0 !== u ? u : void 0,
          {
            uid: y,
            emailVerified: b,
            isAnonymous: w,
            providerData: _,
            stsTokenManager: S,
          } = t;
        ue(y && S, e, "internal-error");
        const I = De.fromJSON(this.name, S);
        ue("string" == typeof y, e, "internal-error"),
          je(l, e.name),
          je(h, e.name),
          ue("boolean" == typeof b, e, "internal-error"),
          ue("boolean" == typeof w, e, "internal-error"),
          je(d, e.name),
          je(f, e.name),
          je(p, e.name),
          je(v, e.name),
          je(g, e.name),
          je(m, e.name);
        const E = new Fe({
          uid: y,
          auth: e,
          email: h,
          emailVerified: b,
          displayName: l,
          isAnonymous: w,
          photoURL: f,
          phoneNumber: d,
          tenantId: p,
          stsTokenManager: I,
          createdAt: g,
          lastLoginAt: m,
        });
        return (
          _ &&
            Array.isArray(_) &&
            (E.providerData = _.map((e) => Object.assign({}, e))),
          v && (E._redirectEventId = v),
          E
        );
      }
      static async _fromIdTokenResponse(e, t, n = !1) {
        const r = new De();
        r.updateFromServerResponse(t);
        const i = new Fe({
          uid: t.localId,
          auth: e,
          stsTokenManager: r,
          isAnonymous: n,
        });
        return await Me(i), i;
      }
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ class Be {
      constructor() {
        (this.type = "NONE"), (this.storage = {});
      }
      async _isAvailable() {
        return !0;
      }
      async _set(e, t) {
        this.storage[e] = t;
      }
      async _get(e) {
        const t = this.storage[e];
        return void 0 === t ? null : t;
      }
      async _remove(e) {
        delete this.storage[e];
      }
      _addListener(e, t) {}
      _removeListener(e, t) {}
    }
    Be.type = "NONE";
    const Ue = Be;
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ function qe(e, t, n) {
      return `firebase:${e}:${t}:${n}`;
    }
    class Ve {
      constructor(e, t, n) {
        (this.persistence = e), (this.auth = t), (this.userKey = n);
        const { config: r, name: i } = this.auth;
        (this.fullUserKey = qe(this.userKey, r.apiKey, i)),
          (this.fullPersistenceKey = qe("persistence", r.apiKey, i)),
          (this.boundEventHandler = t._onStorageEvent.bind(t)),
          this.persistence._addListener(
            this.fullUserKey,
            this.boundEventHandler
          );
      }
      setCurrentUser(e) {
        return this.persistence._set(this.fullUserKey, e.toJSON());
      }
      async getCurrentUser() {
        const e = await this.persistence._get(this.fullUserKey);
        return e ? Fe._fromJSON(this.auth, e) : null;
      }
      removeCurrentUser() {
        return this.persistence._remove(this.fullUserKey);
      }
      savePersistenceForRedirect() {
        return this.persistence._set(
          this.fullPersistenceKey,
          this.persistence.type
        );
      }
      async setPersistence(e) {
        if (this.persistence === e) return;
        const t = await this.getCurrentUser();
        return (
          await this.removeCurrentUser(),
          (this.persistence = e),
          t ? this.setCurrentUser(t) : void 0
        );
      }
      delete() {
        this.persistence._removeListener(
          this.fullUserKey,
          this.boundEventHandler
        );
      }
      static async create(e, t, n = "authUser") {
        if (!t.length) return new Ve(fe(Ue), e, n);
        const r = (
          await Promise.all(
            t.map(async (e) => {
              if (await e._isAvailable()) return e;
            })
          )
        ).filter((e) => e);
        let i = r[0] || fe(Ue);
        const o = qe(n, e.config.apiKey, e.name);
        let s = null;
        for (const n of t)
          try {
            const t = await n._get(o);
            if (t) {
              const r = Fe._fromJSON(e, t);
              n !== i && (s = r), (i = n);
              break;
            }
          } catch (e) {}
        const a = r.filter((e) => e._shouldAllowMigration);
        return i._shouldAllowMigration && a.length
          ? ((i = a[0]),
            s && (await i._set(o, s.toJSON())),
            await Promise.all(
              t.map(async (e) => {
                if (e !== i)
                  try {
                    await e._remove(o);
                  } catch (e) {}
              })
            ),
            new Ve(i, e, n))
          : new Ve(i, e, n);
      }
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ function He(e) {
      const t = e.toLowerCase();
      if (t.includes("opera/") || t.includes("opr/") || t.includes("opios/"))
        return "Opera";
      if (Ke(t)) return "IEMobile";
      if (t.includes("msie") || t.includes("trident/")) return "IE";
      if (t.includes("edge/")) return "Edge";
      if (We(t)) return "Firefox";
      if (t.includes("silk/")) return "Silk";
      if (Je(t)) return "Blackberry";
      if (Ye(t)) return "Webos";
      if (ze(t)) return "Safari";
      if ((t.includes("chrome/") || Ge(t)) && !t.includes("edge/"))
        return "Chrome";
      if ($e(t)) return "Android";
      {
        const t = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
          n = e.match(t);
        if (2 === (null == n ? void 0 : n.length)) return n[1];
      }
      return "Other";
    }
    function We(e = Object(r.j)()) {
      return /firefox\//i.test(e);
    }
    function ze(e = Object(r.j)()) {
      const t = e.toLowerCase();
      return (
        t.includes("safari/") &&
        !t.includes("chrome/") &&
        !t.includes("crios/") &&
        !t.includes("android")
      );
    }
    function Ge(e = Object(r.j)()) {
      return /crios\//i.test(e);
    }
    function Ke(e = Object(r.j)()) {
      return /iemobile/i.test(e);
    }
    function $e(e = Object(r.j)()) {
      return /android/i.test(e);
    }
    function Je(e = Object(r.j)()) {
      return /blackberry/i.test(e);
    }
    function Ye(e = Object(r.j)()) {
      return /webos/i.test(e);
    }
    function Ze(e = Object(r.j)()) {
      return (
        /iphone|ipad|ipod/i.test(e) ||
        (/macintosh/i.test(e) && /mobile/i.test(e))
      );
    }
    function Xe(e = Object(r.j)()) {
      return (
        Ze(e) || $e(e) || Ye(e) || Je(e) || /windows phone/i.test(e) || Ke(e)
      );
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function Qe(e, t = []) {
      let n;
      switch (e) {
        case "Browser":
          n = He(Object(r.j)());
          break;
        case "Worker":
          n = `${He(Object(r.j)())}-${e}`;
          break;
        default:
          n = e;
      }
      return `${n}/JsCore/9.9.1/${t.length ? t.join(",") : "FirebaseCore-web"}`;
    }
    /**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ class et {
      constructor(e) {
        (this.auth = e), (this.queue = []);
      }
      pushCallback(e, t) {
        const n = (t) =>
          new Promise((n, r) => {
            try {
              n(e(t));
            } catch (e) {
              r(e);
            }
          });
        (n.onAbort = t), this.queue.push(n);
        const r = this.queue.length - 1;
        return () => {
          this.queue[r] = () => Promise.resolve();
        };
      }
      async runMiddleware(e) {
        var t;
        if (this.auth.currentUser === e) return;
        const n = [];
        try {
          for (const t of this.queue)
            await t(e), t.onAbort && n.push(t.onAbort);
        } catch (e) {
          n.reverse();
          for (const e of n)
            try {
              e();
            } catch (e) {}
          throw this.auth._errorFactory.create("login-blocked", {
            originalMessage:
              null === (t = e) || void 0 === t ? void 0 : t.message,
          });
        }
      }
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ class tt {
      constructor(e, t, n) {
        (this.app = e),
          (this.heartbeatServiceProvider = t),
          (this.config = n),
          (this.currentUser = null),
          (this.emulatorConfig = null),
          (this.operations = Promise.resolve()),
          (this.authStateSubscription = new rt(this)),
          (this.idTokenSubscription = new rt(this)),
          (this.beforeStateQueue = new et(this)),
          (this.redirectUser = null),
          (this.isProactiveRefreshEnabled = !1),
          (this._canInitEmulator = !0),
          (this._isInitialized = !1),
          (this._deleted = !1),
          (this._initializationPromise = null),
          (this._popupRedirectResolver = null),
          (this._errorFactory = ne),
          (this.lastNotifiedUid = void 0),
          (this.languageCode = null),
          (this.tenantId = null),
          (this.settings = { appVerificationDisabledForTesting: !1 }),
          (this.frameworks = []),
          (this.name = e.name),
          (this.clientVersion = n.sdkClientVersion);
      }
      _initializeWithPersistence(e, t) {
        return (
          t && (this._popupRedirectResolver = fe(t)),
          (this._initializationPromise = this.queue(async () => {
            var n, r;
            if (
              !this._deleted &&
              ((this.persistenceManager = await Ve.create(this, e)),
              !this._deleted)
            ) {
              if (
                null === (n = this._popupRedirectResolver) || void 0 === n
                  ? void 0
                  : n._shouldInitProactively
              )
                try {
                  await this._popupRedirectResolver._initialize(this);
                } catch (e) {}
              await this.initializeCurrentUser(t),
                (this.lastNotifiedUid =
                  (null === (r = this.currentUser) || void 0 === r
                    ? void 0
                    : r.uid) || null),
                this._deleted || (this._isInitialized = !0);
            }
          })),
          this._initializationPromise
        );
      }
      async _onStorageEvent() {
        if (this._deleted) return;
        const e = await this.assertedPersistence.getCurrentUser();
        return this.currentUser || e
          ? this.currentUser && e && this.currentUser.uid === e.uid
            ? (this._currentUser._assign(e),
              void (await this.currentUser.getIdToken()))
            : void (await this._updateCurrentUser(e, !0))
          : void 0;
      }
      async initializeCurrentUser(e) {
        var t;
        const n = await this.assertedPersistence.getCurrentUser();
        let r = n,
          i = !1;
        if (e && this.config.authDomain) {
          await this.getOrInitRedirectPersistenceManager();
          const n =
              null === (t = this.redirectUser) || void 0 === t
                ? void 0
                : t._redirectEventId,
            o = null == r ? void 0 : r._redirectEventId,
            s = await this.tryRedirectSignIn(e);
          (n && n !== o) ||
            !(null == s ? void 0 : s.user) ||
            ((r = s.user), (i = !0));
        }
        if (!r) return this.directlySetCurrentUser(null);
        if (!r._redirectEventId) {
          if (i)
            try {
              await this.beforeStateQueue.runMiddleware(r);
            } catch (e) {
              (r = n),
                this._popupRedirectResolver._overrideRedirectResult(this, () =>
                  Promise.reject(e)
                );
            }
          return r
            ? this.reloadAndSetCurrentUserOrClear(r)
            : this.directlySetCurrentUser(null);
        }
        return (
          ue(this._popupRedirectResolver, this, "argument-error"),
          await this.getOrInitRedirectPersistenceManager(),
          this.redirectUser &&
          this.redirectUser._redirectEventId === r._redirectEventId
            ? this.directlySetCurrentUser(r)
            : this.reloadAndSetCurrentUserOrClear(r)
        );
      }
      async tryRedirectSignIn(e) {
        let t = null;
        try {
          t = await this._popupRedirectResolver._completeRedirectFn(
            this,
            e,
            !0
          );
        } catch (e) {
          await this._setRedirectUser(null);
        }
        return t;
      }
      async reloadAndSetCurrentUserOrClear(e) {
        var t;
        try {
          await Me(e);
        } catch (e) {
          if (
            "auth/network-request-failed" !==
            (null === (t = e) || void 0 === t ? void 0 : t.code)
          )
            return this.directlySetCurrentUser(null);
        }
        return this.directlySetCurrentUser(e);
      }
      useDeviceLanguage() {
        this.languageCode = (function () {
          if ("undefined" == typeof navigator) return null;
          const e = navigator;
          return (e.languages && e.languages[0]) || e.language || null;
        })();
      }
      async _delete() {
        this._deleted = !0;
      }
      async updateCurrentUser(e) {
        const t = e ? Object(r.i)(e) : null;
        return (
          t &&
            ue(
              t.auth.config.apiKey === this.config.apiKey,
              this,
              "invalid-user-token"
            ),
          this._updateCurrentUser(t && t._clone(this))
        );
      }
      async _updateCurrentUser(e, t = !1) {
        if (!this._deleted)
          return (
            e && ue(this.tenantId === e.tenantId, this, "tenant-id-mismatch"),
            t || (await this.beforeStateQueue.runMiddleware(e)),
            this.queue(async () => {
              await this.directlySetCurrentUser(e), this.notifyAuthListeners();
            })
          );
      }
      async signOut() {
        return (
          await this.beforeStateQueue.runMiddleware(null),
          (this.redirectPersistenceManager || this._popupRedirectResolver) &&
            (await this._setRedirectUser(null)),
          this._updateCurrentUser(null, !0)
        );
      }
      setPersistence(e) {
        return this.queue(async () => {
          await this.assertedPersistence.setPersistence(fe(e));
        });
      }
      _getPersistence() {
        return this.assertedPersistence.persistence.type;
      }
      _updateErrorMap(e) {
        this._errorFactory = new r.b("auth", "Firebase", e());
      }
      onAuthStateChanged(e, t, n) {
        return this.registerStateListener(this.authStateSubscription, e, t, n);
      }
      beforeAuthStateChanged(e, t) {
        return this.beforeStateQueue.pushCallback(e, t);
      }
      onIdTokenChanged(e, t, n) {
        return this.registerStateListener(this.idTokenSubscription, e, t, n);
      }
      toJSON() {
        var e;
        return {
          apiKey: this.config.apiKey,
          authDomain: this.config.authDomain,
          appName: this.name,
          currentUser:
            null === (e = this._currentUser) || void 0 === e
              ? void 0
              : e.toJSON(),
        };
      }
      async _setRedirectUser(e, t) {
        const n = await this.getOrInitRedirectPersistenceManager(t);
        return null === e ? n.removeCurrentUser() : n.setCurrentUser(e);
      }
      async getOrInitRedirectPersistenceManager(e) {
        if (!this.redirectPersistenceManager) {
          const t = (e && fe(e)) || this._popupRedirectResolver;
          ue(t, this, "argument-error"),
            (this.redirectPersistenceManager = await Ve.create(
              this,
              [fe(t._redirectPersistence)],
              "redirectUser"
            )),
            (this.redirectUser =
              await this.redirectPersistenceManager.getCurrentUser());
        }
        return this.redirectPersistenceManager;
      }
      async _redirectUserForId(e) {
        var t, n;
        return (
          this._isInitialized && (await this.queue(async () => {})),
          (null === (t = this._currentUser) || void 0 === t
            ? void 0
            : t._redirectEventId) === e
            ? this._currentUser
            : (null === (n = this.redirectUser) || void 0 === n
                ? void 0
                : n._redirectEventId) === e
            ? this.redirectUser
            : null
        );
      }
      async _persistUserIfCurrent(e) {
        if (e === this.currentUser)
          return this.queue(async () => this.directlySetCurrentUser(e));
      }
      _notifyListenersIfCurrent(e) {
        e === this.currentUser && this.notifyAuthListeners();
      }
      _key() {
        return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
      }
      _startProactiveRefresh() {
        (this.isProactiveRefreshEnabled = !0),
          this.currentUser && this._currentUser._startProactiveRefresh();
      }
      _stopProactiveRefresh() {
        (this.isProactiveRefreshEnabled = !1),
          this.currentUser && this._currentUser._stopProactiveRefresh();
      }
      get _currentUser() {
        return this.currentUser;
      }
      notifyAuthListeners() {
        var e, t;
        if (!this._isInitialized) return;
        this.idTokenSubscription.next(this.currentUser);
        const n =
          null !==
            (t =
              null === (e = this.currentUser) || void 0 === e
                ? void 0
                : e.uid) && void 0 !== t
            ? t
            : null;
        this.lastNotifiedUid !== n &&
          ((this.lastNotifiedUid = n),
          this.authStateSubscription.next(this.currentUser));
      }
      registerStateListener(e, t, n, r) {
        if (this._deleted) return () => {};
        const i = "function" == typeof t ? t : t.next.bind(t),
          o = this._isInitialized
            ? Promise.resolve()
            : this._initializationPromise;
        return (
          ue(o, this, "internal-error"),
          o.then(() => i(this.currentUser)),
          "function" == typeof t ? e.addObserver(t, n, r) : e.addObserver(t)
        );
      }
      async directlySetCurrentUser(e) {
        this.currentUser &&
          this.currentUser !== e &&
          (this._currentUser._stopProactiveRefresh(),
          e && this.isProactiveRefreshEnabled && e._startProactiveRefresh()),
          (this.currentUser = e),
          e
            ? await this.assertedPersistence.setCurrentUser(e)
            : await this.assertedPersistence.removeCurrentUser();
      }
      queue(e) {
        return (this.operations = this.operations.then(e, e)), this.operations;
      }
      get assertedPersistence() {
        return (
          ue(this.persistenceManager, this, "internal-error"),
          this.persistenceManager
        );
      }
      _logFramework(e) {
        e &&
          !this.frameworks.includes(e) &&
          (this.frameworks.push(e),
          this.frameworks.sort(),
          (this.clientVersion = Qe(
            this.config.clientPlatform,
            this._getFrameworks()
          )));
      }
      _getFrameworks() {
        return this.frameworks;
      }
      async _getAdditionalHeaders() {
        var e;
        const t = { "X-Client-Version": this.clientVersion };
        this.app.options.appId &&
          (t["X-Firebase-gmpid"] = this.app.options.appId);
        const n = await (null ===
          (e = this.heartbeatServiceProvider.getImmediate({ optional: !0 })) ||
        void 0 === e
          ? void 0
          : e.getHeartbeatsHeader());
        return n && (t["X-Firebase-Client"] = n), t;
      }
    }
    function nt(e) {
      return Object(r.i)(e);
    }
    class rt {
      constructor(e) {
        (this.auth = e),
          (this.observer = null),
          (this.addObserver = Object(r.f)((e) => (this.observer = e)));
      }
      get next() {
        return (
          ue(this.observer, this.auth, "internal-error"),
          this.observer.next.bind(this.observer)
        );
      }
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    class it {
      constructor(e, t) {
        (this.providerId = e), (this.signInMethod = t);
      }
      toJSON() {
        return le("not implemented");
      }
      _getIdTokenResponse(e) {
        return le("not implemented");
      }
      _linkToIdToken(e, t) {
        return le("not implemented");
      }
      _getReauthenticationResolver(e) {
        return le("not implemented");
      }
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ async function ot(e, t) {
      return Ie(e, "POST", "/v1/accounts:update", t);
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    class st extends it {
      constructor(e, t, n, r = null) {
        super("password", n),
          (this._email = e),
          (this._password = t),
          (this._tenantId = r);
      }
      static _fromEmailAndPassword(e, t) {
        return new st(e, t, "password");
      }
      static _fromEmailAndCode(e, t, n = null) {
        return new st(e, t, "emailLink", n);
      }
      toJSON() {
        return {
          email: this._email,
          password: this._password,
          signInMethod: this.signInMethod,
          tenantId: this._tenantId,
        };
      }
      static fromJSON(e) {
        const t = "string" == typeof e ? JSON.parse(e) : e;
        if (
          (null == t ? void 0 : t.email) &&
          (null == t ? void 0 : t.password)
        ) {
          if ("password" === t.signInMethod)
            return this._fromEmailAndPassword(t.email, t.password);
          if ("emailLink" === t.signInMethod)
            return this._fromEmailAndCode(t.email, t.password, t.tenantId);
        }
        return null;
      }
      async _getIdTokenResponse(e) {
        switch (this.signInMethod) {
          case "password":
            /**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            return (async function (e, t) {
              return Oe(e, "POST", "/v1/accounts:signInWithPassword", Se(e, t));
            })(e, {
              returnSecureToken: !0,
              email: this._email,
              password: this._password,
            });
          case "emailLink":
            /**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            return (async function (e, t) {
              return Oe(
                e,
                "POST",
                "/v1/accounts:signInWithEmailLink",
                Se(e, t)
              );
            })(e, { email: this._email, oobCode: this._password });
          default:
            oe(e, "internal-error");
        }
      }
      async _linkToIdToken(e, t) {
        switch (this.signInMethod) {
          case "password":
            return ot(e, {
              idToken: t,
              returnSecureToken: !0,
              email: this._email,
              password: this._password,
            });
          case "emailLink":
            return (async function (e, t) {
              return Oe(
                e,
                "POST",
                "/v1/accounts:signInWithEmailLink",
                Se(e, t)
              );
            })(e, { idToken: t, email: this._email, oobCode: this._password });
          default:
            oe(e, "internal-error");
        }
      }
      _getReauthenticationResolver(e) {
        return this._getIdTokenResponse(e);
      }
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ async function at(e, t) {
      return Oe(e, "POST", "/v1/accounts:signInWithIdp", Se(e, t));
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ class ct extends it {
      constructor() {
        super(...arguments), (this.pendingToken = null);
      }
      static _fromParams(e) {
        const t = new ct(e.providerId, e.signInMethod);
        return (
          e.idToken || e.accessToken
            ? (e.idToken && (t.idToken = e.idToken),
              e.accessToken && (t.accessToken = e.accessToken),
              e.nonce && !e.pendingToken && (t.nonce = e.nonce),
              e.pendingToken && (t.pendingToken = e.pendingToken))
            : e.oauthToken && e.oauthTokenSecret
            ? ((t.accessToken = e.oauthToken), (t.secret = e.oauthTokenSecret))
            : oe("argument-error"),
          t
        );
      }
      toJSON() {
        return {
          idToken: this.idToken,
          accessToken: this.accessToken,
          secret: this.secret,
          nonce: this.nonce,
          pendingToken: this.pendingToken,
          providerId: this.providerId,
          signInMethod: this.signInMethod,
        };
      }
      static fromJSON(e) {
        const t = "string" == typeof e ? JSON.parse(e) : e,
          { providerId: n, signInMethod: r } = t,
          i = Q(t, ["providerId", "signInMethod"]);
        if (!n || !r) return null;
        const o = new ct(n, r);
        return (
          (o.idToken = i.idToken || void 0),
          (o.accessToken = i.accessToken || void 0),
          (o.secret = i.secret),
          (o.nonce = i.nonce),
          (o.pendingToken = i.pendingToken || null),
          o
        );
      }
      _getIdTokenResponse(e) {
        return at(e, this.buildRequest());
      }
      _linkToIdToken(e, t) {
        const n = this.buildRequest();
        return (n.idToken = t), at(e, n);
      }
      _getReauthenticationResolver(e) {
        const t = this.buildRequest();
        return (t.autoCreate = !1), at(e, t);
      }
      buildRequest() {
        const e = { requestUri: "http://localhost", returnSecureToken: !0 };
        if (this.pendingToken) e.pendingToken = this.pendingToken;
        else {
          const t = {};
          this.idToken && (t.id_token = this.idToken),
            this.accessToken && (t.access_token = this.accessToken),
            this.secret && (t.oauth_token_secret = this.secret),
            (t.providerId = this.providerId),
            this.nonce && !this.pendingToken && (t.nonce = this.nonce),
            (e.postBody = Object(r.q)(t));
        }
        return e;
      }
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ const ut = { USER_NOT_FOUND: "user-not-found" };
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    class lt extends it {
      constructor(e) {
        super("phone", "phone"), (this.params = e);
      }
      static _fromVerification(e, t) {
        return new lt({ verificationId: e, verificationCode: t });
      }
      static _fromTokenResponse(e, t) {
        return new lt({ phoneNumber: e, temporaryProof: t });
      }
      _getIdTokenResponse(e) {
        return (async function (e, t) {
          return Oe(e, "POST", "/v1/accounts:signInWithPhoneNumber", Se(e, t));
        })(e, this._makeVerificationRequest());
      }
      _linkToIdToken(e, t) {
        return (async function (e, t) {
          const n = await Oe(
            e,
            "POST",
            "/v1/accounts:signInWithPhoneNumber",
            Se(e, t)
          );
          if (n.temporaryProof)
            throw xe(e, "account-exists-with-different-credential", n);
          return n;
        })(e, Object.assign({ idToken: t }, this._makeVerificationRequest()));
      }
      _getReauthenticationResolver(e) {
        return (async function (e, t) {
          return Oe(
            e,
            "POST",
            "/v1/accounts:signInWithPhoneNumber",
            Se(e, Object.assign(Object.assign({}, t), { operation: "REAUTH" })),
            ut
          );
        })(e, this._makeVerificationRequest());
      }
      _makeVerificationRequest() {
        const {
          temporaryProof: e,
          phoneNumber: t,
          verificationId: n,
          verificationCode: r,
        } = this.params;
        return e && t
          ? { temporaryProof: e, phoneNumber: t }
          : { sessionInfo: n, code: r };
      }
      toJSON() {
        const e = { providerId: this.providerId };
        return (
          this.params.phoneNumber && (e.phoneNumber = this.params.phoneNumber),
          this.params.temporaryProof &&
            (e.temporaryProof = this.params.temporaryProof),
          this.params.verificationCode &&
            (e.verificationCode = this.params.verificationCode),
          this.params.verificationId &&
            (e.verificationId = this.params.verificationId),
          e
        );
      }
      static fromJSON(e) {
        "string" == typeof e && (e = JSON.parse(e));
        const {
          verificationId: t,
          verificationCode: n,
          phoneNumber: r,
          temporaryProof: i,
        } = e;
        return n || t || r || i
          ? new lt({
              verificationId: t,
              verificationCode: n,
              phoneNumber: r,
              temporaryProof: i,
            })
          : null;
      }
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ class ht {
      constructor(e) {
        var t, n, i, o, s, a;
        const c = Object(r.r)(Object(r.h)(e)),
          u = null !== (t = c.apiKey) && void 0 !== t ? t : null,
          l = null !== (n = c.oobCode) && void 0 !== n ? n : null,
          h = (function (e) {
            switch (e) {
              case "recoverEmail":
                return "RECOVER_EMAIL";
              case "resetPassword":
                return "PASSWORD_RESET";
              case "signIn":
                return "EMAIL_SIGNIN";
              case "verifyEmail":
                return "VERIFY_EMAIL";
              case "verifyAndChangeEmail":
                return "VERIFY_AND_CHANGE_EMAIL";
              case "revertSecondFactorAddition":
                return "REVERT_SECOND_FACTOR_ADDITION";
              default:
                return null;
            }
          })(null !== (i = c.mode) && void 0 !== i ? i : null);
        ue(u && l && h, "argument-error"),
          (this.apiKey = u),
          (this.operation = h),
          (this.code = l),
          (this.continueUrl =
            null !== (o = c.continueUrl) && void 0 !== o ? o : null),
          (this.languageCode =
            null !== (s = c.languageCode) && void 0 !== s ? s : null),
          (this.tenantId =
            null !== (a = c.tenantId) && void 0 !== a ? a : null);
      }
      static parseLink(e) {
        const t = (function (e) {
          const t = Object(r.r)(Object(r.h)(e)).link,
            n = t ? Object(r.r)(Object(r.h)(t)).deep_link_id : null,
            i = Object(r.r)(Object(r.h)(e)).deep_link_id;
          return (
            (i ? Object(r.r)(Object(r.h)(i)).link : null) || i || n || t || e
          );
        })(e);
        try {
          return new ht(t);
        } catch (e) {
          return null;
        }
      }
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    class dt {
      constructor() {
        this.providerId = dt.PROVIDER_ID;
      }
      static credential(e, t) {
        return st._fromEmailAndPassword(e, t);
      }
      static credentialWithLink(e, t) {
        const n = ht.parseLink(t);
        return (
          ue(n, "argument-error"), st._fromEmailAndCode(e, n.code, n.tenantId)
        );
      }
    }
    (dt.PROVIDER_ID = "password"),
      (dt.EMAIL_PASSWORD_SIGN_IN_METHOD = "password"),
      (dt.EMAIL_LINK_SIGN_IN_METHOD = "emailLink");
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    class ft {
      constructor(e) {
        (this.providerId = e),
          (this.defaultLanguageCode = null),
          (this.customParameters = {});
      }
      setDefaultLanguage(e) {
        this.defaultLanguageCode = e;
      }
      setCustomParameters(e) {
        return (this.customParameters = e), this;
      }
      getCustomParameters() {
        return this.customParameters;
      }
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ class pt extends ft {
      constructor() {
        super(...arguments), (this.scopes = []);
      }
      addScope(e) {
        return this.scopes.includes(e) || this.scopes.push(e), this;
      }
      getScopes() {
        return [...this.scopes];
      }
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    class vt extends pt {
      constructor() {
        super("facebook.com");
      }
      static credential(e) {
        return ct._fromParams({
          providerId: vt.PROVIDER_ID,
          signInMethod: vt.FACEBOOK_SIGN_IN_METHOD,
          accessToken: e,
        });
      }
      static credentialFromResult(e) {
        return vt.credentialFromTaggedObject(e);
      }
      static credentialFromError(e) {
        return vt.credentialFromTaggedObject(e.customData || {});
      }
      static credentialFromTaggedObject({ _tokenResponse: e }) {
        if (!e || !("oauthAccessToken" in e)) return null;
        if (!e.oauthAccessToken) return null;
        try {
          return vt.credential(e.oauthAccessToken);
        } catch (e) {
          return null;
        }
      }
    }
    (vt.FACEBOOK_SIGN_IN_METHOD = "facebook.com"),
      (vt.PROVIDER_ID = "facebook.com");
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    class gt extends pt {
      constructor() {
        super("google.com"), this.addScope("profile");
      }
      static credential(e, t) {
        return ct._fromParams({
          providerId: gt.PROVIDER_ID,
          signInMethod: gt.GOOGLE_SIGN_IN_METHOD,
          idToken: e,
          accessToken: t,
        });
      }
      static credentialFromResult(e) {
        return gt.credentialFromTaggedObject(e);
      }
      static credentialFromError(e) {
        return gt.credentialFromTaggedObject(e.customData || {});
      }
      static credentialFromTaggedObject({ _tokenResponse: e }) {
        if (!e) return null;
        const { oauthIdToken: t, oauthAccessToken: n } = e;
        if (!t && !n) return null;
        try {
          return gt.credential(t, n);
        } catch (e) {
          return null;
        }
      }
    }
    (gt.GOOGLE_SIGN_IN_METHOD = "google.com"), (gt.PROVIDER_ID = "google.com");
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    class mt extends pt {
      constructor() {
        super("github.com");
      }
      static credential(e) {
        return ct._fromParams({
          providerId: mt.PROVIDER_ID,
          signInMethod: mt.GITHUB_SIGN_IN_METHOD,
          accessToken: e,
        });
      }
      static credentialFromResult(e) {
        return mt.credentialFromTaggedObject(e);
      }
      static credentialFromError(e) {
        return mt.credentialFromTaggedObject(e.customData || {});
      }
      static credentialFromTaggedObject({ _tokenResponse: e }) {
        if (!e || !("oauthAccessToken" in e)) return null;
        if (!e.oauthAccessToken) return null;
        try {
          return mt.credential(e.oauthAccessToken);
        } catch (e) {
          return null;
        }
      }
    }
    (mt.GITHUB_SIGN_IN_METHOD = "github.com"), (mt.PROVIDER_ID = "github.com");
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    class yt extends pt {
      constructor() {
        super("twitter.com");
      }
      static credential(e, t) {
        return ct._fromParams({
          providerId: yt.PROVIDER_ID,
          signInMethod: yt.TWITTER_SIGN_IN_METHOD,
          oauthToken: e,
          oauthTokenSecret: t,
        });
      }
      static credentialFromResult(e) {
        return yt.credentialFromTaggedObject(e);
      }
      static credentialFromError(e) {
        return yt.credentialFromTaggedObject(e.customData || {});
      }
      static credentialFromTaggedObject({ _tokenResponse: e }) {
        if (!e) return null;
        const { oauthAccessToken: t, oauthTokenSecret: n } = e;
        if (!t || !n) return null;
        try {
          return yt.credential(t, n);
        } catch (e) {
          return null;
        }
      }
    }
    (yt.TWITTER_SIGN_IN_METHOD = "twitter.com"),
      (yt.PROVIDER_ID = "twitter.com");
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    class bt {
      constructor(e) {
        (this.user = e.user),
          (this.providerId = e.providerId),
          (this._tokenResponse = e._tokenResponse),
          (this.operationType = e.operationType);
      }
      static async _fromIdTokenResponse(e, t, n, r = !1) {
        const i = await Fe._fromIdTokenResponse(e, n, r),
          o = wt(n);
        return new bt({
          user: i,
          providerId: o,
          _tokenResponse: n,
          operationType: t,
        });
      }
      static async _forOperation(e, t, n) {
        await e._updateTokensIfNecessary(n, !0);
        const r = wt(n);
        return new bt({
          user: e,
          providerId: r,
          _tokenResponse: n,
          operationType: t,
        });
      }
    }
    function wt(e) {
      return e.providerId ? e.providerId : "phoneNumber" in e ? "phone" : null;
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    class _t extends r.c {
      constructor(e, t, n, r) {
        var i;
        super(t.code, t.message),
          (this.operationType = n),
          (this.user = r),
          Object.setPrototypeOf(this, _t.prototype),
          (this.customData = {
            appName: e.name,
            tenantId: null !== (i = e.tenantId) && void 0 !== i ? i : void 0,
            _serverResponse: t.customData._serverResponse,
            operationType: n,
          });
      }
      static _fromErrorAndOperation(e, t, n, r) {
        return new _t(e, t, n, r);
      }
    }
    function St(e, t, n, r) {
      return (
        "reauthenticate" === t
          ? n._getReauthenticationResolver(e)
          : n._getIdTokenResponse(e)
      ).catch((n) => {
        if ("auth/multi-factor-auth-required" === n.code)
          throw _t._fromErrorAndOperation(e, n, t, r);
        throw n;
      });
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ async function It(e, t, n = !1) {
      const r = await Ce(e, t._linkToIdToken(e.auth, await e.getIdToken()), n);
      return bt._forOperation(e, "link", r);
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    async function Et(e, t, n = !1) {
      var r;
      const { auth: i } = e;
      try {
        const r = await Ce(e, St(i, "reauthenticate", t, e), n);
        ue(r.idToken, i, "internal-error");
        const o = Le(r.idToken);
        ue(o, i, "internal-error");
        const { sub: s } = o;
        return (
          ue(e.uid === s, i, "user-mismatch"),
          bt._forOperation(e, "reauthenticate", r)
        );
      } catch (e) {
        throw (
          ("auth/user-not-found" ===
            (null === (r = e) || void 0 === r ? void 0 : r.code) &&
            oe(i, "user-mismatch"),
          e)
        );
      }
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ async function Ot(e, t, n = !1) {
      const r = await St(e, "signIn", t),
        i = await bt._fromIdTokenResponse(e, "signIn", r);
      return n || (await e._updateCurrentUser(i.user)), i;
    }
    new WeakMap();
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    class Tt {
      constructor(e, t) {
        (this.storageRetriever = e), (this.type = t);
      }
      _isAvailable() {
        try {
          return this.storage
            ? (this.storage.setItem("__sak", "1"),
              this.storage.removeItem("__sak"),
              Promise.resolve(!0))
            : Promise.resolve(!1);
        } catch (e) {
          return Promise.resolve(!1);
        }
      }
      _set(e, t) {
        return this.storage.setItem(e, JSON.stringify(t)), Promise.resolve();
      }
      _get(e) {
        const t = this.storage.getItem(e);
        return Promise.resolve(t ? JSON.parse(t) : null);
      }
      _remove(e) {
        return this.storage.removeItem(e), Promise.resolve();
      }
      get storage() {
        return this.storageRetriever();
      }
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ class kt extends Tt {
      constructor() {
        super(() => window.localStorage, "LOCAL"),
          (this.boundEventHandler = (e, t) => this.onStorageEvent(e, t)),
          (this.listeners = {}),
          (this.localCache = {}),
          (this.pollTimer = null),
          (this.safariLocalStorageNotSynced =
            (function () {
              const e = Object(r.j)();
              return ze(e) || Ze(e);
            })() &&
            (function () {
              try {
                return !(!window || window === window.top);
              } catch (e) {
                return !1;
              }
            })()),
          (this.fallbackToPolling = Xe()),
          (this._shouldAllowMigration = !0);
      }
      forAllChangedKeys(e) {
        for (const t of Object.keys(this.listeners)) {
          const n = this.storage.getItem(t),
            r = this.localCache[t];
          n !== r && e(t, r, n);
        }
      }
      onStorageEvent(e, t = !1) {
        if (!e.key)
          return void this.forAllChangedKeys((e, t, n) => {
            this.notifyListeners(e, n);
          });
        const n = e.key;
        if (
          (t ? this.detachListener() : this.stopPolling(),
          this.safariLocalStorageNotSynced)
        ) {
          const r = this.storage.getItem(n);
          if (e.newValue !== r)
            null !== e.newValue
              ? this.storage.setItem(n, e.newValue)
              : this.storage.removeItem(n);
          else if (this.localCache[n] === e.newValue && !t) return;
        }
        const i = () => {
            const e = this.storage.getItem(n);
            (t || this.localCache[n] !== e) && this.notifyListeners(n, e);
          },
          o = this.storage.getItem(n);
        Object(r.m)() &&
        10 === document.documentMode &&
        o !== e.newValue &&
        e.newValue !== e.oldValue
          ? setTimeout(i, 10)
          : i();
      }
      notifyListeners(e, t) {
        this.localCache[e] = t;
        const n = this.listeners[e];
        if (n) for (const e of Array.from(n)) e(t ? JSON.parse(t) : t);
      }
      startPolling() {
        this.stopPolling(),
          (this.pollTimer = setInterval(() => {
            this.forAllChangedKeys((e, t, n) => {
              this.onStorageEvent(
                new StorageEvent("storage", {
                  key: e,
                  oldValue: t,
                  newValue: n,
                }),
                !0
              );
            });
          }, 1e3));
      }
      stopPolling() {
        this.pollTimer &&
          (clearInterval(this.pollTimer), (this.pollTimer = null));
      }
      attachListener() {
        window.addEventListener("storage", this.boundEventHandler);
      }
      detachListener() {
        window.removeEventListener("storage", this.boundEventHandler);
      }
      _addListener(e, t) {
        0 === Object.keys(this.listeners).length &&
          (this.fallbackToPolling
            ? this.startPolling()
            : this.attachListener()),
          this.listeners[e] ||
            ((this.listeners[e] = new Set()),
            (this.localCache[e] = this.storage.getItem(e))),
          this.listeners[e].add(t);
      }
      _removeListener(e, t) {
        this.listeners[e] &&
          (this.listeners[e].delete(t),
          0 === this.listeners[e].size && delete this.listeners[e]),
          0 === Object.keys(this.listeners).length &&
            (this.detachListener(), this.stopPolling());
      }
      async _set(e, t) {
        await super._set(e, t), (this.localCache[e] = JSON.stringify(t));
      }
      async _get(e) {
        const t = await super._get(e);
        return (this.localCache[e] = JSON.stringify(t)), t;
      }
      async _remove(e) {
        await super._remove(e), delete this.localCache[e];
      }
    }
    kt.type = "LOCAL";
    const xt = kt;
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ class At extends Tt {
      constructor() {
        super(() => window.sessionStorage, "SESSION");
      }
      _addListener(e, t) {}
      _removeListener(e, t) {}
    }
    At.type = "SESSION";
    const Pt = At;
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    class Lt {
      constructor(e) {
        (this.eventTarget = e),
          (this.handlersMap = {}),
          (this.boundEventHandler = this.handleEvent.bind(this));
      }
      static _getInstance(e) {
        const t = this.receivers.find((t) => t.isListeningto(e));
        if (t) return t;
        const n = new Lt(e);
        return this.receivers.push(n), n;
      }
      isListeningto(e) {
        return this.eventTarget === e;
      }
      async handleEvent(e) {
        const t = e,
          { eventId: n, eventType: r, data: i } = t.data,
          o = this.handlersMap[r];
        if (!(null == o ? void 0 : o.size)) return;
        t.ports[0].postMessage({ status: "ack", eventId: n, eventType: r });
        const s = Array.from(o).map(async (e) => e(t.origin, i)),
          a = await (function (e) {
            return Promise.all(
              e.map(async (e) => {
                try {
                  return { fulfilled: !0, value: await e };
                } catch (e) {
                  return { fulfilled: !1, reason: e };
                }
              })
            );
          })(s);
        t.ports[0].postMessage({
          status: "done",
          eventId: n,
          eventType: r,
          response: a,
        });
      }
      _subscribe(e, t) {
        0 === Object.keys(this.handlersMap).length &&
          this.eventTarget.addEventListener("message", this.boundEventHandler),
          this.handlersMap[e] || (this.handlersMap[e] = new Set()),
          this.handlersMap[e].add(t);
      }
      _unsubscribe(e, t) {
        this.handlersMap[e] && t && this.handlersMap[e].delete(t),
          (t && 0 !== this.handlersMap[e].size) || delete this.handlersMap[e],
          0 === Object.keys(this.handlersMap).length &&
            this.eventTarget.removeEventListener(
              "message",
              this.boundEventHandler
            );
      }
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function Ct(e = "", t = 10) {
      let n = "";
      for (let e = 0; e < t; e++) n += Math.floor(10 * Math.random());
      return e + n;
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ Lt.receivers = [];
    class Nt {
      constructor(e) {
        (this.target = e), (this.handlers = new Set());
      }
      removeMessageHandler(e) {
        e.messageChannel &&
          (e.messageChannel.port1.removeEventListener("message", e.onMessage),
          e.messageChannel.port1.close()),
          this.handlers.delete(e);
      }
      async _send(e, t, n = 50) {
        const r =
          "undefined" != typeof MessageChannel ? new MessageChannel() : null;
        if (!r) throw new Error("connection_unavailable");
        let i, o;
        return new Promise((s, a) => {
          const c = Ct("", 20);
          r.port1.start();
          const u = setTimeout(() => {
            a(new Error("unsupported_event"));
          }, n);
          (o = {
            messageChannel: r,
            onMessage(e) {
              const t = e;
              if (t.data.eventId === c)
                switch (t.data.status) {
                  case "ack":
                    clearTimeout(u),
                      (i = setTimeout(() => {
                        a(new Error("timeout"));
                      }, 3e3));
                    break;
                  case "done":
                    clearTimeout(i), s(t.data.response);
                    break;
                  default:
                    clearTimeout(u),
                      clearTimeout(i),
                      a(new Error("invalid_response"));
                }
            },
          }),
            this.handlers.add(o),
            r.port1.addEventListener("message", o.onMessage),
            this.target.postMessage({ eventType: e, eventId: c, data: t }, [
              r.port2,
            ]);
        }).finally(() => {
          o && this.removeMessageHandler(o);
        });
      }
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ function Rt() {
      return window;
    }
    /**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function Mt() {
      return (
        void 0 !== Rt().WorkerGlobalScope &&
        "function" == typeof Rt().importScripts
      );
    }
    class Dt {
      constructor(e) {
        this.request = e;
      }
      toPromise() {
        return new Promise((e, t) => {
          this.request.addEventListener("success", () => {
            e(this.request.result);
          }),
            this.request.addEventListener("error", () => {
              t(this.request.error);
            });
        });
      }
    }
    function jt(e, t) {
      return e
        .transaction(["firebaseLocalStorage"], t ? "readwrite" : "readonly")
        .objectStore("firebaseLocalStorage");
    }
    function Ft() {
      const e = indexedDB.open("firebaseLocalStorageDb", 1);
      return new Promise((t, n) => {
        e.addEventListener("error", () => {
          n(e.error);
        }),
          e.addEventListener("upgradeneeded", () => {
            const t = e.result;
            try {
              t.createObjectStore("firebaseLocalStorage", {
                keyPath: "fbase_key",
              });
            } catch (e) {
              n(e);
            }
          }),
          e.addEventListener("success", async () => {
            const n = e.result;
            n.objectStoreNames.contains("firebaseLocalStorage")
              ? t(n)
              : (n.close(),
                await (function () {
                  const e = indexedDB.deleteDatabase("firebaseLocalStorageDb");
                  return new Dt(e).toPromise();
                })(),
                t(await Ft()));
          });
      });
    }
    async function Bt(e, t, n) {
      const r = jt(e, !0).put({ fbase_key: t, value: n });
      return new Dt(r).toPromise();
    }
    function Ut(e, t) {
      const n = jt(e, !0).delete(t);
      return new Dt(n).toPromise();
    }
    class qt {
      constructor() {
        (this.type = "LOCAL"),
          (this._shouldAllowMigration = !0),
          (this.listeners = {}),
          (this.localCache = {}),
          (this.pollTimer = null),
          (this.pendingWrites = 0),
          (this.receiver = null),
          (this.sender = null),
          (this.serviceWorkerReceiverAvailable = !1),
          (this.activeServiceWorker = null),
          (this._workerInitializationPromise =
            this.initializeServiceWorkerMessaging().then(
              () => {},
              () => {}
            ));
      }
      async _openDb() {
        return this.db || (this.db = await Ft()), this.db;
      }
      async _withRetries(e) {
        let t = 0;
        for (;;)
          try {
            const t = await this._openDb();
            return await e(t);
          } catch (e) {
            if (t++ > 3) throw e;
            this.db && (this.db.close(), (this.db = void 0));
          }
      }
      async initializeServiceWorkerMessaging() {
        return Mt() ? this.initializeReceiver() : this.initializeSender();
      }
      async initializeReceiver() {
        (this.receiver = Lt._getInstance(Mt() ? self : null)),
          this.receiver._subscribe("keyChanged", async (e, t) => ({
            keyProcessed: (await this._poll()).includes(t.key),
          })),
          this.receiver._subscribe("ping", async (e, t) => ["keyChanged"]);
      }
      async initializeSender() {
        var e, t;
        if (
          ((this.activeServiceWorker = await (async function () {
            if (
              !(null === navigator || void 0 === navigator
                ? void 0
                : navigator.serviceWorker)
            )
              return null;
            try {
              return (await navigator.serviceWorker.ready).active;
            } catch (e) {
              return null;
            }
          })()),
          !this.activeServiceWorker)
        )
          return;
        this.sender = new Nt(this.activeServiceWorker);
        const n = await this.sender._send("ping", {}, 800);
        n &&
          (null === (e = n[0]) || void 0 === e ? void 0 : e.fulfilled) &&
          (null === (t = n[0]) || void 0 === t
            ? void 0
            : t.value.includes("keyChanged")) &&
          (this.serviceWorkerReceiverAvailable = !0);
      }
      async notifyServiceWorker(e) {
        var t;
        if (
          this.sender &&
          this.activeServiceWorker &&
          ((null ===
            (t =
              null === navigator || void 0 === navigator
                ? void 0
                : navigator.serviceWorker) || void 0 === t
            ? void 0
            : t.controller) || null) === this.activeServiceWorker
        )
          try {
            await this.sender._send(
              "keyChanged",
              { key: e },
              this.serviceWorkerReceiverAvailable ? 800 : 50
            );
          } catch (t) {}
      }
      async _isAvailable() {
        try {
          if (!indexedDB) return !1;
          const e = await Ft();
          return await Bt(e, "__sak", "1"), await Ut(e, "__sak"), !0;
        } catch (e) {}
        return !1;
      }
      async _withPendingWrite(e) {
        this.pendingWrites++;
        try {
          await e();
        } finally {
          this.pendingWrites--;
        }
      }
      async _set(e, t) {
        return this._withPendingWrite(
          async () => (
            await this._withRetries((n) => Bt(n, e, t)),
            (this.localCache[e] = t),
            this.notifyServiceWorker(e)
          )
        );
      }
      async _get(e) {
        const t = await this._withRetries((t) =>
          (async function (e, t) {
            const n = jt(e, !1).get(t),
              r = await new Dt(n).toPromise();
            return void 0 === r ? null : r.value;
          })(t, e)
        );
        return (this.localCache[e] = t), t;
      }
      async _remove(e) {
        return this._withPendingWrite(
          async () => (
            await this._withRetries((t) => Ut(t, e)),
            delete this.localCache[e],
            this.notifyServiceWorker(e)
          )
        );
      }
      async _poll() {
        const e = await this._withRetries((e) => {
          const t = jt(e, !1).getAll();
          return new Dt(t).toPromise();
        });
        if (!e) return [];
        if (0 !== this.pendingWrites) return [];
        const t = [],
          n = new Set();
        for (const { fbase_key: r, value: i } of e)
          n.add(r),
            JSON.stringify(this.localCache[r]) !== JSON.stringify(i) &&
              (this.notifyListeners(r, i), t.push(r));
        for (const e of Object.keys(this.localCache))
          this.localCache[e] &&
            !n.has(e) &&
            (this.notifyListeners(e, null), t.push(e));
        return t;
      }
      notifyListeners(e, t) {
        this.localCache[e] = t;
        const n = this.listeners[e];
        if (n) for (const e of Array.from(n)) e(t);
      }
      startPolling() {
        this.stopPolling(),
          (this.pollTimer = setInterval(async () => this._poll(), 800));
      }
      stopPolling() {
        this.pollTimer &&
          (clearInterval(this.pollTimer), (this.pollTimer = null));
      }
      _addListener(e, t) {
        0 === Object.keys(this.listeners).length && this.startPolling(),
          this.listeners[e] || ((this.listeners[e] = new Set()), this._get(e)),
          this.listeners[e].add(t);
      }
      _removeListener(e, t) {
        this.listeners[e] &&
          (this.listeners[e].delete(t),
          0 === this.listeners[e].size && delete this.listeners[e]),
          0 === Object.keys(this.listeners).length && this.stopPolling();
      }
    }
    qt.type = "LOCAL";
    const Vt = qt;
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ function Ht(e) {
      return new Promise((t, n) => {
        const r = document.createElement("script");
        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        var i, o;
        r.setAttribute("src", e),
          (r.onload = t),
          (r.onerror = (e) => {
            const t = se("internal-error");
            (t.customData = e), n(t);
          }),
          (r.type = "text/javascript"),
          (r.charset = "UTF-8"),
          (null !==
            (o =
              null === (i = document.getElementsByTagName("head")) ||
              void 0 === i
                ? void 0
                : i[0]) && void 0 !== o
            ? o
            : document
          ).appendChild(r);
      });
    }
    function Wt(e) {
      return `__${e}${Math.floor(1e6 * Math.random())}`;
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ class zt {
      constructor(e) {
        (this.auth = e), (this.counter = 1e12), (this._widgets = new Map());
      }
      render(e, t) {
        const n = this.counter;
        return (
          this._widgets.set(n, new Gt(e, this.auth.name, t || {})),
          this.counter++,
          n
        );
      }
      reset(e) {
        var t;
        const n = e || 1e12;
        null === (t = this._widgets.get(n)) || void 0 === t || t.delete(),
          this._widgets.delete(n);
      }
      getResponse(e) {
        var t;
        const n = e || 1e12;
        return (
          (null === (t = this._widgets.get(n)) || void 0 === t
            ? void 0
            : t.getResponse()) || ""
        );
      }
      async execute(e) {
        var t;
        const n = e || 1e12;
        return (
          null === (t = this._widgets.get(n)) || void 0 === t || t.execute(), ""
        );
      }
    }
    class Gt {
      constructor(e, t, n) {
        (this.params = n),
          (this.timerId = null),
          (this.deleted = !1),
          (this.responseToken = null),
          (this.clickHandler = () => {
            this.execute();
          });
        const r = "string" == typeof e ? document.getElementById(e) : e;
        ue(r, "argument-error", { appName: t }),
          (this.container = r),
          (this.isVisible = "invisible" !== this.params.size),
          this.isVisible
            ? this.execute()
            : this.container.addEventListener("click", this.clickHandler);
      }
      getResponse() {
        return this.checkIfDeleted(), this.responseToken;
      }
      delete() {
        this.checkIfDeleted(),
          (this.deleted = !0),
          this.timerId && (clearTimeout(this.timerId), (this.timerId = null)),
          this.container.removeEventListener("click", this.clickHandler);
      }
      execute() {
        this.checkIfDeleted(),
          this.timerId ||
            (this.timerId = window.setTimeout(() => {
              this.responseToken = (function (e) {
                const t = [],
                  n =
                    "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let r = 0; r < e; r++)
                  t.push(n.charAt(Math.floor(Math.random() * n.length)));
                return t.join("");
              })(
                /**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */ 50
              );
              const { callback: e, "expired-callback": t } = this.params;
              if (e)
                try {
                  e(this.responseToken);
                } catch (e) {}
              this.timerId = window.setTimeout(() => {
                if (((this.timerId = null), (this.responseToken = null), t))
                  try {
                    t();
                  } catch (e) {}
                this.isVisible && this.execute();
              }, 6e4);
            }, 500));
      }
      checkIfDeleted() {
        if (this.deleted)
          throw new Error("reCAPTCHA mock was already deleted!");
      }
    }
    const Kt = Wt("rcb"),
      $t = new me(3e4, 6e4);
    class Jt {
      constructor() {
        var e;
        (this.hostLanguage = ""),
          (this.counter = 0),
          (this.librarySeparatelyLoaded = !!(null === (e = Rt().grecaptcha) ||
          void 0 === e
            ? void 0
            : e.render));
      }
      load(e, t = "") {
        return (
          ue(
            (function (e) {
              return e.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(e);
            })(t),
            e,
            "argument-error"
          ),
          this.shouldResolveImmediately(t)
            ? Promise.resolve(Rt().grecaptcha)
            : new Promise((n, i) => {
                const o = Rt().setTimeout(() => {
                  i(se(e, "network-request-failed"));
                }, $t.get());
                Rt()[Kt] = () => {
                  Rt().clearTimeout(o), delete Rt()[Kt];
                  const r = Rt().grecaptcha;
                  if (!r) return void i(se(e, "internal-error"));
                  const s = r.render;
                  (r.render = (e, t) => {
                    const n = s(e, t);
                    return this.counter++, n;
                  }),
                    (this.hostLanguage = t),
                    n(r);
                };
                Ht(
                  "https://www.google.com/recaptcha/api.js??" +
                    Object(r.q)({ onload: Kt, render: "explicit", hl: t })
                ).catch(() => {
                  clearTimeout(o), i(se(e, "internal-error"));
                });
              })
        );
      }
      clearedOneInstance() {
        this.counter--;
      }
      shouldResolveImmediately(e) {
        var t;
        return (
          !!(null === (t = Rt().grecaptcha) || void 0 === t
            ? void 0
            : t.render) &&
          (e === this.hostLanguage ||
            this.counter > 0 ||
            this.librarySeparatelyLoaded)
        );
      }
    }
    class Yt {
      async load(e) {
        return new zt(e);
      }
      clearedOneInstance() {}
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ const Zt = { theme: "light", type: "image" };
    class Xt {
      constructor(e, t = Object.assign({}, Zt), n) {
        (this.parameters = t),
          (this.type = "recaptcha"),
          (this.destroyed = !1),
          (this.widgetId = null),
          (this.tokenChangeListeners = new Set()),
          (this.renderPromise = null),
          (this.recaptcha = null),
          (this.auth = nt(n)),
          (this.isInvisible = "invisible" === this.parameters.size),
          ue(
            "undefined" != typeof document,
            this.auth,
            "operation-not-supported-in-this-environment"
          );
        const r = "string" == typeof e ? document.getElementById(e) : e;
        ue(r, this.auth, "argument-error"),
          (this.container = r),
          (this.parameters.callback = this.makeTokenCallback(
            this.parameters.callback
          )),
          (this._recaptchaLoader = this.auth.settings
            .appVerificationDisabledForTesting
            ? new Yt()
            : new Jt()),
          this.validateStartingState();
      }
      async verify() {
        this.assertNotDestroyed();
        const e = await this.render(),
          t = this.getAssertedRecaptcha(),
          n = t.getResponse(e);
        return (
          n ||
          new Promise((n) => {
            const r = (e) => {
              e && (this.tokenChangeListeners.delete(r), n(e));
            };
            this.tokenChangeListeners.add(r), this.isInvisible && t.execute(e);
          })
        );
      }
      render() {
        try {
          this.assertNotDestroyed();
        } catch (e) {
          return Promise.reject(e);
        }
        return (
          this.renderPromise ||
            (this.renderPromise = this.makeRenderPromise().catch((e) => {
              throw ((this.renderPromise = null), e);
            })),
          this.renderPromise
        );
      }
      _reset() {
        this.assertNotDestroyed(),
          null !== this.widgetId &&
            this.getAssertedRecaptcha().reset(this.widgetId);
      }
      clear() {
        this.assertNotDestroyed(),
          (this.destroyed = !0),
          this._recaptchaLoader.clearedOneInstance(),
          this.isInvisible ||
            this.container.childNodes.forEach((e) => {
              this.container.removeChild(e);
            });
      }
      validateStartingState() {
        ue(!this.parameters.sitekey, this.auth, "argument-error"),
          ue(
            this.isInvisible || !this.container.hasChildNodes(),
            this.auth,
            "argument-error"
          ),
          ue(
            "undefined" != typeof document,
            this.auth,
            "operation-not-supported-in-this-environment"
          );
      }
      makeTokenCallback(e) {
        return (t) => {
          if (
            (this.tokenChangeListeners.forEach((e) => e(t)),
            "function" == typeof e)
          )
            e(t);
          else if ("string" == typeof e) {
            const n = Rt()[e];
            "function" == typeof n && n(t);
          }
        };
      }
      assertNotDestroyed() {
        ue(!this.destroyed, this.auth, "internal-error");
      }
      async makeRenderPromise() {
        if ((await this.init(), !this.widgetId)) {
          let e = this.container;
          if (!this.isInvisible) {
            const t = document.createElement("div");
            e.appendChild(t), (e = t);
          }
          this.widgetId = this.getAssertedRecaptcha().render(
            e,
            this.parameters
          );
        }
        return this.widgetId;
      }
      async init() {
        ue(ve() && !Mt(), this.auth, "internal-error"),
          await (function () {
            let e = null;
            return new Promise((t) => {
              "complete" !== document.readyState
                ? ((e = () => t()), window.addEventListener("load", e))
                : t();
            }).catch((t) => {
              throw (e && window.removeEventListener("load", e), t);
            });
          })(),
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */
          (this.recaptcha = await this._recaptchaLoader.load(
            this.auth,
            this.auth.languageCode || void 0
          ));
        const e = await /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        (async function (e) {
          return (
            (await Ie(e, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
          );
        })(this.auth);
        ue(e, this.auth, "internal-error"), (this.parameters.sitekey = e);
      }
      getAssertedRecaptcha() {
        return ue(this.recaptcha, this.auth, "internal-error"), this.recaptcha;
      }
    }
    async function Qt(e, t, n) {
      var r;
      const i = await n.verify();
      try {
        let o;
        if (
          (ue("string" == typeof i, e, "argument-error"),
          ue("recaptcha" === n.type, e, "argument-error"),
          (o = "string" == typeof t ? { phoneNumber: t } : t),
          "session" in o)
        ) {
          const t = o.session;
          if ("phoneNumber" in o) {
            ue("enroll" === t.type, e, "internal-error");
            return (
              (
                await /**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                (function (e, t) {
                  return Ie(
                    e,
                    "POST",
                    "/v2/accounts/mfaEnrollment:start",
                    Se(e, t)
                  );
                })(e, {
                  idToken: t.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: o.phoneNumber,
                    recaptchaToken: i,
                  },
                })
              ).phoneSessionInfo.sessionInfo
            );
          }
          {
            ue("signin" === t.type, e, "internal-error");
            const n =
              (null === (r = o.multiFactorHint) || void 0 === r
                ? void 0
                : r.uid) || o.multiFactorUid;
            ue(n, e, "missing-multi-factor-info");
            return (
              await (function (e, t) {
                return Ie(e, "POST", "/v2/accounts/mfaSignIn:start", Se(e, t));
              })(e, {
                mfaPendingCredential: t.credential,
                mfaEnrollmentId: n,
                phoneSignInInfo: { recaptchaToken: i },
              })
            ).phoneResponseInfo.sessionInfo;
          }
        }
        {
          const { sessionInfo: t } = await (async function (e, t) {
            return Ie(e, "POST", "/v1/accounts:sendVerificationCode", Se(e, t));
          })(e, { phoneNumber: o.phoneNumber, recaptchaToken: i });
          return t;
        }
      } finally {
        n._reset();
      }
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    class en {
      constructor(e) {
        (this.providerId = en.PROVIDER_ID), (this.auth = nt(e));
      }
      verifyPhoneNumber(e, t) {
        return Qt(this.auth, e, Object(r.i)(t));
      }
      static credential(e, t) {
        return lt._fromVerification(e, t);
      }
      static credentialFromResult(e) {
        const t = e;
        return en.credentialFromTaggedObject(t);
      }
      static credentialFromError(e) {
        return en.credentialFromTaggedObject(e.customData || {});
      }
      static credentialFromTaggedObject({ _tokenResponse: e }) {
        if (!e) return null;
        const { phoneNumber: t, temporaryProof: n } = e;
        return t && n ? lt._fromTokenResponse(t, n) : null;
      }
    }
    /**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function tn(e, t) {
      return t
        ? fe(t)
        : (ue(e._popupRedirectResolver, e, "argument-error"),
          e._popupRedirectResolver);
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ (en.PROVIDER_ID = "phone"), (en.PHONE_SIGN_IN_METHOD = "phone");
    class nn extends it {
      constructor(e) {
        super("custom", "custom"), (this.params = e);
      }
      _getIdTokenResponse(e) {
        return at(e, this._buildIdpRequest());
      }
      _linkToIdToken(e, t) {
        return at(e, this._buildIdpRequest(t));
      }
      _getReauthenticationResolver(e) {
        return at(e, this._buildIdpRequest());
      }
      _buildIdpRequest(e) {
        const t = {
          requestUri: this.params.requestUri,
          sessionId: this.params.sessionId,
          postBody: this.params.postBody,
          tenantId: this.params.tenantId,
          pendingToken: this.params.pendingToken,
          returnSecureToken: !0,
          returnIdpCredential: !0,
        };
        return e && (t.idToken = e), t;
      }
    }
    function rn(e) {
      return Ot(e.auth, new nn(e), e.bypassAuthState);
    }
    function on(e) {
      const { auth: t, user: n } = e;
      return ue(n, t, "internal-error"), Et(n, new nn(e), e.bypassAuthState);
    }
    async function sn(e) {
      const { auth: t, user: n } = e;
      return ue(n, t, "internal-error"), It(n, new nn(e), e.bypassAuthState);
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ class an {
      constructor(e, t, n, r, i = !1) {
        (this.auth = e),
          (this.resolver = n),
          (this.user = r),
          (this.bypassAuthState = i),
          (this.pendingPromise = null),
          (this.eventManager = null),
          (this.filter = Array.isArray(t) ? t : [t]);
      }
      execute() {
        return new Promise(async (e, t) => {
          this.pendingPromise = { resolve: e, reject: t };
          try {
            (this.eventManager = await this.resolver._initialize(this.auth)),
              await this.onExecution(),
              this.eventManager.registerConsumer(this);
          } catch (e) {
            this.reject(e);
          }
        });
      }
      async onAuthEvent(e) {
        const {
          urlResponse: t,
          sessionId: n,
          postBody: r,
          tenantId: i,
          error: o,
          type: s,
        } = e;
        if (o) return void this.reject(o);
        const a = {
          auth: this.auth,
          requestUri: t,
          sessionId: n,
          tenantId: i || void 0,
          postBody: r || void 0,
          user: this.user,
          bypassAuthState: this.bypassAuthState,
        };
        try {
          this.resolve(await this.getIdpTask(s)(a));
        } catch (e) {
          this.reject(e);
        }
      }
      onError(e) {
        this.reject(e);
      }
      getIdpTask(e) {
        switch (e) {
          case "signInViaPopup":
          case "signInViaRedirect":
            return rn;
          case "linkViaPopup":
          case "linkViaRedirect":
            return sn;
          case "reauthViaPopup":
          case "reauthViaRedirect":
            return on;
          default:
            oe(this.auth, "internal-error");
        }
      }
      resolve(e) {
        he(this.pendingPromise, "Pending promise was never set"),
          this.pendingPromise.resolve(e),
          this.unregisterAndCleanUp();
      }
      reject(e) {
        he(this.pendingPromise, "Pending promise was never set"),
          this.pendingPromise.reject(e),
          this.unregisterAndCleanUp();
      }
      unregisterAndCleanUp() {
        this.eventManager && this.eventManager.unregisterConsumer(this),
          (this.pendingPromise = null),
          this.cleanUp();
      }
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ const cn = new me(2e3, 1e4);
    class un extends an {
      constructor(e, t, n, r, i) {
        super(e, t, r, i),
          (this.provider = n),
          (this.authWindow = null),
          (this.pollId = null),
          un.currentPopupAction && un.currentPopupAction.cancel(),
          (un.currentPopupAction = this);
      }
      async executeNotNull() {
        const e = await this.execute();
        return ue(e, this.auth, "internal-error"), e;
      }
      async onExecution() {
        he(1 === this.filter.length, "Popup operations only handle one event");
        const e = Ct();
        (this.authWindow = await this.resolver._openPopup(
          this.auth,
          this.provider,
          this.filter[0],
          e
        )),
          (this.authWindow.associatedEvent = e),
          this.resolver._originValidation(this.auth).catch((e) => {
            this.reject(e);
          }),
          this.resolver._isIframeWebStorageSupported(this.auth, (e) => {
            e || this.reject(se(this.auth, "web-storage-unsupported"));
          }),
          this.pollUserCancellation();
      }
      get eventId() {
        var e;
        return (
          (null === (e = this.authWindow) || void 0 === e
            ? void 0
            : e.associatedEvent) || null
        );
      }
      cancel() {
        this.reject(se(this.auth, "cancelled-popup-request"));
      }
      cleanUp() {
        this.authWindow && this.authWindow.close(),
          this.pollId && window.clearTimeout(this.pollId),
          (this.authWindow = null),
          (this.pollId = null),
          (un.currentPopupAction = null);
      }
      pollUserCancellation() {
        const e = () => {
          var t, n;
          (
            null ===
              (n =
                null === (t = this.authWindow) || void 0 === t
                  ? void 0
                  : t.window) || void 0 === n
              ? void 0
              : n.closed
          )
            ? (this.pollId = window.setTimeout(() => {
                (this.pollId = null),
                  this.reject(se(this.auth, "popup-closed-by-user"));
              }, 2e3))
            : (this.pollId = window.setTimeout(e, cn.get()));
        };
        e();
      }
    }
    un.currentPopupAction = null;
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    const ln = new Map();
    class hn extends an {
      constructor(e, t, n = !1) {
        super(
          e,
          [
            "signInViaRedirect",
            "linkViaRedirect",
            "reauthViaRedirect",
            "unknown",
          ],
          t,
          void 0,
          n
        ),
          (this.eventId = null);
      }
      async execute() {
        let e = ln.get(this.auth._key());
        if (!e) {
          try {
            const t = (await (async function (e, t) {
              const n = pn(t),
                r = fn(e);
              if (!(await r._isAvailable())) return !1;
              const i = "true" === (await r._get(n));
              return await r._remove(n), i;
            })(this.resolver, this.auth))
              ? await super.execute()
              : null;
            e = () => Promise.resolve(t);
          } catch (t) {
            e = () => Promise.reject(t);
          }
          ln.set(this.auth._key(), e);
        }
        return (
          this.bypassAuthState ||
            ln.set(this.auth._key(), () => Promise.resolve(null)),
          e()
        );
      }
      async onAuthEvent(e) {
        if ("signInViaRedirect" === e.type) return super.onAuthEvent(e);
        if ("unknown" !== e.type) {
          if (e.eventId) {
            const t = await this.auth._redirectUserForId(e.eventId);
            if (t) return (this.user = t), super.onAuthEvent(e);
            this.resolve(null);
          }
        } else this.resolve(null);
      }
      async onExecution() {}
      cleanUp() {}
    }
    function dn(e, t) {
      ln.set(e._key(), t);
    }
    function fn(e) {
      return fe(e._redirectPersistence);
    }
    function pn(e) {
      return qe("pendingRedirect", e.config.apiKey, e.name);
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ async function vn(e, t, n = !1) {
      const r = nt(e),
        i = tn(r, t),
        o = new hn(r, i, n),
        s = await o.execute();
      return (
        s &&
          !n &&
          (delete s.user._redirectEventId,
          await r._persistUserIfCurrent(s.user),
          await r._setRedirectUser(null, t)),
        s
      );
    }
    class gn {
      constructor(e) {
        (this.auth = e),
          (this.cachedEventUids = new Set()),
          (this.consumers = new Set()),
          (this.queuedRedirectEvent = null),
          (this.hasHandledPotentialRedirect = !1),
          (this.lastProcessedEventTime = Date.now());
      }
      registerConsumer(e) {
        this.consumers.add(e),
          this.queuedRedirectEvent &&
            this.isEventForConsumer(this.queuedRedirectEvent, e) &&
            (this.sendToConsumer(this.queuedRedirectEvent, e),
            this.saveEventToCache(this.queuedRedirectEvent),
            (this.queuedRedirectEvent = null));
      }
      unregisterConsumer(e) {
        this.consumers.delete(e);
      }
      onEvent(e) {
        if (this.hasEventBeenHandled(e)) return !1;
        let t = !1;
        return (
          this.consumers.forEach((n) => {
            this.isEventForConsumer(e, n) &&
              ((t = !0), this.sendToConsumer(e, n), this.saveEventToCache(e));
          }),
          this.hasHandledPotentialRedirect ||
            !(function (e) {
              switch (e.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return yn(e);
                default:
                  return !1;
              }
            })(
              /**
               * @license
               * Copyright 2020 Google LLC
               *
               * Licensed under the Apache License, Version 2.0 (the "License");
               * you may not use this file except in compliance with the License.
               * You may obtain a copy of the License at
               *
               *   http://www.apache.org/licenses/LICENSE-2.0
               *
               * Unless required by applicable law or agreed to in writing, software
               * distributed under the License is distributed on an "AS IS" BASIS,
               * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
               * See the License for the specific language governing permissions and
               * limitations under the License.
               */ e
            ) ||
            ((this.hasHandledPotentialRedirect = !0),
            t || ((this.queuedRedirectEvent = e), (t = !0))),
          t
        );
      }
      sendToConsumer(e, t) {
        var n;
        if (e.error && !yn(e)) {
          const r =
            (null === (n = e.error.code) || void 0 === n
              ? void 0
              : n.split("auth/")[1]) || "internal-error";
          t.onError(se(this.auth, r));
        } else t.onAuthEvent(e);
      }
      isEventForConsumer(e, t) {
        const n =
          null === t.eventId || (!!e.eventId && e.eventId === t.eventId);
        return t.filter.includes(e.type) && n;
      }
      hasEventBeenHandled(e) {
        return (
          Date.now() - this.lastProcessedEventTime >= 6e5 &&
            this.cachedEventUids.clear(),
          this.cachedEventUids.has(mn(e))
        );
      }
      saveEventToCache(e) {
        this.cachedEventUids.add(mn(e)),
          (this.lastProcessedEventTime = Date.now());
      }
    }
    function mn(e) {
      return [e.type, e.eventId, e.sessionId, e.tenantId]
        .filter((e) => e)
        .join("-");
    }
    function yn({ type: e, error: t }) {
      return (
        "unknown" === e &&
        "auth/no-auth-event" === (null == t ? void 0 : t.code)
      );
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    const bn = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
      wn = /^https?/;
    async function _n(e) {
      if (e.config.emulator) return;
      const { authorizedDomains: t } = await (async function (e, t = {}) {
        return Ie(e, "GET", "/v1/projects", t);
      })(e);
      for (const e of t)
        try {
          if (Sn(e)) return;
        } catch (e) {}
      oe(e, "unauthorized-domain");
    }
    function Sn(e) {
      const t = pe(),
        { protocol: n, hostname: r } = new URL(t);
      if (e.startsWith("chrome-extension://")) {
        const i = new URL(e);
        return "" === i.hostname && "" === r
          ? "chrome-extension:" === n &&
              e.replace("chrome-extension://", "") ===
                t.replace("chrome-extension://", "")
          : "chrome-extension:" === n && i.hostname === r;
      }
      if (!wn.test(n)) return !1;
      if (bn.test(e)) return r === e;
      const i = e.replace(/\./g, "\\.");
      return new RegExp("^(.+\\." + i + "|" + i + ")$", "i").test(r);
    }
    /**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ const In = new me(3e4, 6e4);
    function En() {
      const e = Rt().___jsl;
      if (null == e ? void 0 : e.H)
        for (const t of Object.keys(e.H))
          if (
            ((e.H[t].r = e.H[t].r || []),
            (e.H[t].L = e.H[t].L || []),
            (e.H[t].r = [...e.H[t].L]),
            e.CP)
          )
            for (let t = 0; t < e.CP.length; t++) e.CP[t] = null;
    }
    let On = null;
    function Tn(e) {
      return (
        (On =
          On ||
          (function (e) {
            return new Promise((t, n) => {
              var r, i, o;
              function s() {
                En(),
                  gapi.load("gapi.iframes", {
                    callback: () => {
                      t(gapi.iframes.getContext());
                    },
                    ontimeout: () => {
                      En(), n(se(e, "network-request-failed"));
                    },
                    timeout: In.get(),
                  });
              }
              if (
                null ===
                  (i =
                    null === (r = Rt().gapi) || void 0 === r
                      ? void 0
                      : r.iframes) || void 0 === i
                  ? void 0
                  : i.Iframe
              )
                t(gapi.iframes.getContext());
              else {
                if (
                  !(null === (o = Rt().gapi) || void 0 === o ? void 0 : o.load)
                ) {
                  const t = Wt("iframefcb");
                  return (
                    (Rt()[t] = () => {
                      gapi.load ? s() : n(se(e, "network-request-failed"));
                    }),
                    Ht("https://apis.google.com/js/api.js?onload=" + t).catch(
                      (e) => n(e)
                    )
                  );
                }
                s();
              }
            }).catch((e) => {
              throw ((On = null), e);
            });
          })(e)),
        On
      );
    }
    /**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ const kn = new me(5e3, 15e3),
      xn = {
        style: {
          position: "absolute",
          top: "-100px",
          width: "1px",
          height: "1px",
        },
        "aria-hidden": "true",
        tabindex: "-1",
      },
      An = new Map([
        ["identitytoolkit.googleapis.com", "p"],
        ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
        ["test-identitytoolkit.sandbox.googleapis.com", "t"],
      ]);
    function Pn(e) {
      const t = e.config;
      ue(t.authDomain, e, "auth-domain-config-required");
      const n = t.emulator
          ? ye(t, "emulator/auth/iframe")
          : `https://${e.config.authDomain}/__/auth/iframe`,
        i = { apiKey: t.apiKey, appName: e.name, v: "9.9.1" },
        o = An.get(e.config.apiHost);
      o && (i.eid = o);
      const s = e._getFrameworks();
      return (
        s.length && (i.fw = s.join(",")), `${n}?${Object(r.q)(i).slice(1)}`
      );
    }
    /**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    const Ln = {
      location: "yes",
      resizable: "yes",
      statusbar: "yes",
      toolbar: "no",
    };
    class Cn {
      constructor(e) {
        (this.window = e), (this.associatedEvent = null);
      }
      close() {
        if (this.window)
          try {
            this.window.close();
          } catch (e) {}
      }
    }
    function Nn(e, t, n, i = 500, o = 600) {
      const s = Math.max((window.screen.availHeight - o) / 2, 0).toString(),
        a = Math.max((window.screen.availWidth - i) / 2, 0).toString();
      let c = "";
      const u = Object.assign(Object.assign({}, Ln), {
          width: i.toString(),
          height: o.toString(),
          top: s,
          left: a,
        }),
        l = Object(r.j)().toLowerCase();
      n && (c = Ge(l) ? "_blank" : n),
        We(l) && ((t = t || "http://localhost"), (u.scrollbars = "yes"));
      const h = Object.entries(u).reduce((e, [t, n]) => `${e}${t}=${n},`, "");
      if (
        (function (e = Object(r.j)()) {
          var t;
          return (
            Ze(e) &&
            !!(null === (t = window.navigator) || void 0 === t
              ? void 0
              : t.standalone)
          );
        })(l) &&
        "_self" !== c
      )
        return (
          (function (e, t) {
            const n = document.createElement("a");
            (n.href = e), (n.target = t);
            const r = document.createEvent("MouseEvent");
            r.initMouseEvent(
              "click",
              !0,
              !0,
              window,
              1,
              0,
              0,
              0,
              0,
              !1,
              !1,
              !1,
              !1,
              1,
              null
            ),
              n.dispatchEvent(r);
          })(
            /**
             * @license
             * Copyright 2021 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */ t || "",
            c
          ),
          new Cn(null)
        );
      const d = window.open(t || "", c, h);
      ue(d, e, "popup-blocked");
      try {
        d.focus();
      } catch (e) {}
      return new Cn(d);
    }
    function Rn(e, t, n, i, o, s) {
      ue(e.config.authDomain, e, "auth-domain-config-required"),
        ue(e.config.apiKey, e, "invalid-api-key");
      const a = {
        apiKey: e.config.apiKey,
        appName: e.name,
        authType: n,
        redirectUrl: i,
        v: "9.9.1",
        eventId: o,
      };
      if (t instanceof ft) {
        t.setDefaultLanguage(e.languageCode),
          (a.providerId = t.providerId || ""),
          Object(r.l)(t.getCustomParameters()) ||
            (a.customParameters = JSON.stringify(t.getCustomParameters()));
        for (const [e, t] of Object.entries(s || {})) a[e] = t;
      }
      if (t instanceof pt) {
        const e = t.getScopes().filter((e) => "" !== e);
        e.length > 0 && (a.scopes = e.join(","));
      }
      e.tenantId && (a.tid = e.tenantId);
      const c = a;
      for (const e of Object.keys(c)) void 0 === c[e] && delete c[e];
      return `${(function ({ config: e }) {
        if (!e.emulator) return `https://${e.authDomain}/__/auth/handler`;
        return ye(e, "emulator/auth/handler");
      })(
        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ e
      )}?${Object(r.q)(c).slice(1)}`;
    }
    const Mn = class {
      constructor() {
        (this.eventManagers = {}),
          (this.iframes = {}),
          (this.originValidationPromises = {}),
          (this._redirectPersistence = Pt),
          (this._completeRedirectFn = vn),
          (this._overrideRedirectResult = dn);
      }
      async _openPopup(e, t, n, r) {
        var i;
        he(
          null === (i = this.eventManagers[e._key()]) || void 0 === i
            ? void 0
            : i.manager,
          "_initialize() not called before _openPopup()"
        );
        return Nn(e, Rn(e, t, n, pe(), r), Ct());
      }
      async _openRedirect(e, t, n, r) {
        var i;
        return (
          await this._originValidation(e),
          (i = Rn(e, t, n, pe(), r)),
          (Rt().location.href = i),
          new Promise(() => {})
        );
      }
      _initialize(e) {
        const t = e._key();
        if (this.eventManagers[t]) {
          const { manager: e, promise: n } = this.eventManagers[t];
          return e
            ? Promise.resolve(e)
            : (he(n, "If manager is not set, promise should be"), n);
        }
        const n = this.initAndGetManager(e);
        return (
          (this.eventManagers[t] = { promise: n }),
          n.catch(() => {
            delete this.eventManagers[t];
          }),
          n
        );
      }
      async initAndGetManager(e) {
        const t = await (async function (e) {
            const t = await Tn(e),
              n = Rt().gapi;
            return (
              ue(n, e, "internal-error"),
              t.open(
                {
                  where: document.body,
                  url: Pn(e),
                  messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
                  attributes: xn,
                  dontclear: !0,
                },
                (t) =>
                  new Promise(async (n, r) => {
                    await t.restyle({ setHideOnLeave: !1 });
                    const i = se(e, "network-request-failed"),
                      o = Rt().setTimeout(() => {
                        r(i);
                      }, kn.get());
                    function s() {
                      Rt().clearTimeout(o), n(t);
                    }
                    t.ping(s).then(s, () => {
                      r(i);
                    });
                  })
              )
            );
          })(e),
          n = new gn(e);
        return (
          t.register(
            "authEvent",
            (t) => {
              ue(null == t ? void 0 : t.authEvent, e, "invalid-auth-event");
              return { status: n.onEvent(t.authEvent) ? "ACK" : "ERROR" };
            },
            gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
          ),
          (this.eventManagers[e._key()] = { manager: n }),
          (this.iframes[e._key()] = t),
          n
        );
      }
      _isIframeWebStorageSupported(e, t) {
        this.iframes[e._key()].send(
          "webStorageSupport",
          { type: "webStorageSupport" },
          (n) => {
            var r;
            const i =
              null === (r = null == n ? void 0 : n[0]) || void 0 === r
                ? void 0
                : r.webStorageSupport;
            void 0 !== i && t(!!i), oe(e, "internal-error");
          },
          gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
        );
      }
      _originValidation(e) {
        const t = e._key();
        return (
          this.originValidationPromises[t] ||
            (this.originValidationPromises[t] = _n(e)),
          this.originValidationPromises[t]
        );
      }
      get _shouldInitProactively() {
        return Xe() || ze() || Ze();
      }
    };
    var Dn;
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    class jn {
      constructor(e) {
        (this.auth = e), (this.internalListeners = new Map());
      }
      getUid() {
        var e;
        return (
          this.assertAuthConfigured(),
          (null === (e = this.auth.currentUser) || void 0 === e
            ? void 0
            : e.uid) || null
        );
      }
      async getToken(e) {
        if (
          (this.assertAuthConfigured(),
          await this.auth._initializationPromise,
          !this.auth.currentUser)
        )
          return null;
        return { accessToken: await this.auth.currentUser.getIdToken(e) };
      }
      addAuthTokenListener(e) {
        if ((this.assertAuthConfigured(), this.internalListeners.has(e)))
          return;
        const t = this.auth.onIdTokenChanged((t) => {
          var n;
          e(
            (null === (n = t) || void 0 === n
              ? void 0
              : n.stsTokenManager.accessToken) || null
          );
        });
        this.internalListeners.set(e, t), this.updateProactiveRefresh();
      }
      removeAuthTokenListener(e) {
        this.assertAuthConfigured();
        const t = this.internalListeners.get(e);
        t &&
          (this.internalListeners.delete(e),
          t(),
          this.updateProactiveRefresh());
      }
      assertAuthConfigured() {
        ue(
          this.auth._initializationPromise,
          "dependent-sdk-initialized-before-auth"
        );
      }
      updateProactiveRefresh() {
        this.internalListeners.size > 0
          ? this.auth._startProactiveRefresh()
          : this.auth._stopProactiveRefresh();
      }
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function Fn(
      e = (function (e = "[DEFAULT]") {
        const t = R.get(e);
        if (!t) throw U.create("no-app", { appName: e });
        return t;
      })()
    ) {
      const t = F(e, "auth");
      return t.isInitialized()
        ? t.getImmediate()
        : (function (e, t) {
            const n = F(e, "auth");
            if (n.isInitialized()) {
              const e = n.getImmediate(),
                i = n.getOptions();
              if (Object(r.g)(i, null != t ? t : {})) return e;
              oe(e, "already-initialized");
            }
            return n.initialize({ options: t });
          })(e, { popupRedirectResolver: Mn, persistence: [Vt, xt, Pt] });
    }
    (Dn = "Browser"),
      j(
        new i(
          "auth",
          (e, { options: t }) => {
            const n = e.getProvider("app").getImmediate(),
              r = e.getProvider("heartbeat"),
              { apiKey: i, authDomain: o } = n.options;
            return ((e, n) => {
              ue(i && !i.includes(":"), "invalid-api-key", { appName: e.name }),
                ue(!(null == o ? void 0 : o.includes(":")), "argument-error", {
                  appName: e.name,
                });
              const r = {
                  apiKey: i,
                  authDomain: o,
                  clientPlatform: Dn,
                  apiHost: "identitytoolkit.googleapis.com",
                  tokenApiHost: "securetoken.googleapis.com",
                  apiScheme: "https",
                  sdkClientVersion: Qe(Dn),
                },
                s = new tt(e, n, r);
              return (
                (function (e, t) {
                  const n = (null == t ? void 0 : t.persistence) || [],
                    r = (Array.isArray(n) ? n : [n]).map(fe);
                  (null == t ? void 0 : t.errorMap) &&
                    e._updateErrorMap(t.errorMap),
                    e._initializeWithPersistence(
                      r,
                      null == t ? void 0 : t.popupRedirectResolver
                    );
                })(s, t),
                s
              );
            })(n, r);
          },
          "PUBLIC"
        )
          .setInstantiationMode("EXPLICIT")
          .setInstanceCreatedCallback((e, t, n) => {
            e.getProvider("auth-internal").initialize();
          })
      ),
      j(
        new i(
          "auth-internal",
          (e) => ((e) => new jn(e))(nt(e.getProvider("auth").getImmediate())),
          "PRIVATE"
        ).setInstantiationMode("EXPLICIT")
      ),
      V(
        "@firebase/auth",
        "0.20.5",
        (function (e) {
          switch (e) {
            case "Node":
              return "node";
            case "ReactNative":
              return "rn";
            case "Worker":
              return "webworker";
            case "Cordova":
              return "cordova";
            default:
              return;
          }
        })(Dn)
      ),
      V("@firebase/auth", "0.20.5", "esm2017");
    var Bn =
        "\n    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>\n        <path d='M5 12H19' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' /><path d='M12 5L19 12L12 19' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />\n    </svg>\n",
      Un =
        '\n    <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 413.348 413.348"><path d="M413.348 24.354L388.994 0l-182.32 182.32L24.354 0 0 24.354l182.32 182.32L0 388.994l24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"/></svg>\n',
      qn = {
        list: [
          { n: "Afghanistan", c: "93", i: "AF" },
          { n: "Albania", c: "355", i: "AL" },
          { n: "Algeria", c: "213", i: "DZ" },
          { n: "American Samoa", c: "1684", i: "AS" },
          { n: "Andorra", c: "376", i: "AD" },
          { n: "Angola", c: "244", i: "AO" },
          { n: "Antigua and Barbuda", c: "1268", i: "AG" },
          { n: "Argentina", c: "54", i: "AR" },
          { n: "Armenia", c: "374", i: "AM" },
          { n: "Aruba", c: "297", i: "AW" },
          { n: "Australia", c: "61", i: "AU" },
          { n: "Austria", c: "43", i: "AT" },
          { n: "Azerbaijan", c: "994", i: "AZ" },
          { n: "Bahamas", c: "1242", i: "BS" },
          { n: "Bangladesh", c: "880", i: "BD" },
          { n: "Barbados", c: "1246", i: "BB" },
          { n: "Belarus", c: "375", i: "BY" },
          { n: "Belgium", c: "32", i: "BE" },
          { n: "Belize", c: "501", i: "BZ" },
          { n: "Benin", c: "229", i: "BJ" },
          { n: "Bermuda", c: "1441", i: "BM" },
          { n: "Bhutan", c: "975", i: "BT" },
          { n: "Bolivia", c: "591", i: "BO" },
          { n: "Bosnia and Herzegovina", c: "387", i: "BA" },
          { n: "Botswana", c: "267", i: "BW" },
          { n: "Brazil", c: "55", i: "BR" },
          { n: "Brunei Darussalam", c: "673", i: "BN" },
          { n: "Bulgaria", c: "359", i: "BG" },
          { n: "Burkina Faso", c: "226", i: "BF" },
          { n: "Cambodia", c: "855", i: "KH" },
          { n: "Cameroon", c: "237", i: "CM" },
          { n: "Canada", c: "1", i: "CA" },
          { n: "Cape Verde", c: "238", i: "CV" },
          { n: "Cayman Islands", c: "1345", i: "KY" },
          { n: "Central African Republic", c: "236", i: "CF" },
          { n: "Chile", c: "56", i: "CL" },
          { n: "Colombia", c: "57", i: "CO" },
          { n: "Comoros", c: "269", i: "KM" },
          { n: "Congo", c: "242", i: "CG" },
          { n: "Cook Islands", c: "682", i: "CK" },
          { n: "Costa Rica", c: "506", i: "CR" },
          { n: "Croatia", c: "385", i: "HR" },
          { n: "Cyprus", c: "357", i: "CY" },
          { n: "Czech Republic", c: "420", i: "CZ" },
          { n: "Democratic Republic of the Congo", c: "243", i: "CD" },
          { n: "Denmark", c: "45", i: "DK" },
          { n: "Djibouti", c: "253", i: "DJ" },
          { n: "Dominica", c: "1767", i: "DM" },
          { n: "Dominican Republic", c: "1849", i: "DO" },
          { n: "Ecuador", c: "593", i: "EC" },
          { n: "Egypt", c: "20", i: "EG" },
          { n: "El Salvador", c: "503", i: "SV" },
          { n: "Equatorial Guinea", c: "240", i: "GQ" },
          { n: "Swaziland", c: "268", i: "SZ" },
          { n: "Ethiopia", c: "251", i: "ET" },
          { n: "Falkland Islands (Malvinas)", c: "500", i: "FK" },
          { n: "Faroe Islands", c: "298", i: "FO" },
          { n: "Fiji", c: "679", i: "FJ" },
          { n: "Finland", c: "358", i: "FI" },
          { n: "France", c: "33", i: "FR" },
          { n: "French Guiana", c: "594", i: "GF" },
          { n: "Gabon", c: "241", i: "GA" },
          { n: "Gambia", c: "220", i: "GM" },
          { n: "Georgia", c: "995", i: "GE" },
          { n: "Germany", c: "49", i: "DE" },
          { n: "Ghana", c: "233", i: "GH" },
          { n: "Gibraltar", c: "350", i: "GI" },
          { n: "Greece", c: "30", i: "GR" },
          { n: "Greenland", c: "299", i: "GL" },
          { n: "Grenada", c: "1473", i: "GD" },
          { n: "Guadeloupe", c: "590", i: "GP" },
          { n: "Guatemala", c: "502", i: "GT" },
          { n: "Guernsey", c: "44", i: "GG" },
          { n: "Guyana", c: "592", i: "GY" },
          { n: "Haiti", c: "509", i: "HT" },
          { n: "Honduras", c: "504", i: "HN" },
          { n: "Hong Kong", c: "852", i: "HK" },
          { n: "Hungary", c: "36", i: "HU" },
          { n: "India", c: "91", i: "IN" },
          { n: "Indonesia", c: "62", i: "ID" },
          { n: "Iraq", c: "964", i: "IQ" },
          { n: "Ireland", c: "353", i: "IE" },
          { n: "Isle of Man", c: "44", i: "IM" },
          { n: "Israel", c: "972", i: "IL" },
          { n: "Italy", c: "39", i: "IT" },
          { n: "Ivory Coast", c: "225", i: "CI" },
          { n: "Jamaica", c: "1876", i: "JM" },
          { n: "Japan", c: "81", i: "JP" },
          { n: "Jersey", c: "44", i: "JE" },
          { n: "Jordan", c: "962", i: "JO" },
          { n: "Kazakhstan", c: "77", i: "KZ" },
          { n: "Kenya", c: "254", i: "KE" },
          { n: "Korea, Republic of South Korea", c: "82", i: "KR" },
          { n: "Kuwait", c: "965", i: "KW" },
          { n: "Kyrgyzstan", c: "996", i: "KG" },
          { n: "Laos", c: "856", i: "LA" },
          { n: "Latvia", c: "371", i: "LV" },
          { n: "Lebanon", c: "961", i: "LB" },
          { n: "Lesotho", c: "266", i: "LS" },
          { n: "Libya", c: "218", i: "LY" },
          { n: "Liechtenstein", c: "423", i: "LI" },
          { n: "Lithuania", c: "370", i: "LT" },
          { n: "Luxembourg", c: "352", i: "LU" },
          { n: "Macau", c: "853", i: "MO" },
          { n: "Madagascar", c: "261", i: "MG" },
          { n: "Malawi", c: "265", i: "MW" },
          { n: "Malaysia", c: "60", i: "MY" },
          { n: "Malta", c: "356", i: "MT" },
          { n: "Mauritius", c: "230", i: "MU" },
          { n: "Mayotte", c: "262", i: "YT" },
          { n: "Mexico", c: "52", i: "MX" },
          {
            n: "Micronesia, Federated States of Micronesia",
            c: "691",
            i: "FM",
          },
          { n: "Moldova", c: "373", i: "MD" },
          { n: "Mongolia", c: "976", i: "MN" },
          { n: "Montenegro", c: "382", i: "ME" },
          { n: "Montserrat", c: "1664", i: "MS" },
          { n: "Morocco", c: "212", i: "MA" },
          { n: "Mozambique", c: "258", i: "MZ" },
          { n: "Myanmar", c: "95", i: "MM" },
          { n: "Namibia", c: "264", i: "NA" },
          { n: "Nepal", c: "977", i: "NP" },
          { n: "Netherlands", c: "31", i: "NL" },
          { n: "New Caledonia", c: "687", i: "NC" },
          { n: "New Zealand", c: "64", i: "NZ" },
          { n: "Nicaragua", c: "505", i: "NI" },
          { n: "Niger", c: "227", i: "NE" },
          { n: "Nigeria", c: "234", i: "NG" },
          { n: "Norfolk Island", c: "672", i: "NF" },
          { n: "Macedonia", c: "389", i: "MK" },
          { n: "Norway", c: "47", i: "NO" },
          { n: "Oman", c: "968", i: "OM" },
          { n: "Pakistan", c: "92", i: "PK" },
          { n: "Palestine", c: "970", i: "PS" },
          { n: "Panama", c: "507", i: "PA" },
          { n: "Papua New Guinea", c: "675", i: "PG" },
          { n: "Paraguay", c: "595", i: "PY" },
          { n: "Peru", c: "51", i: "PE" },
          { n: "Philippines", c: "63", i: "PH" },
          { n: "Poland", c: "48", i: "PL" },
          { n: "Portugal", c: "351", i: "PT" },
          { n: "Puerto Rico", c: "1939", i: "PR" },
          { n: "Qatar", c: "974", i: "QA" },
          { n: "Reunion", c: "262", i: "RE" },
          { n: "Romania", c: "40", i: "RO" },
          { n: "Russia", c: "7", i: "RU" },
          { n: "Rwanda", c: "250", i: "RW" },
          {
            n: "Saint Helena, Ascension and Tristan Da Cunha",
            c: "290",
            i: "SH",
          },
          { n: "Saint Kitts and Nevis", c: "1869", i: "KN" },
          { n: "Saint Lucia", c: "1758", i: "LC" },
          { n: "Saint Martin", c: "590", i: "MF" },
          { n: "Saint Pierre and Miquelon", c: "508", i: "PM" },
          { n: "Saint Vincent and the Grenadines", c: "1784", i: "VC" },
          { n: "Samoa", c: "685", i: "WS" },
          { n: "Sao Tome and Principe", c: "239", i: "ST" },
          { n: "Saudi Arabia", c: "966", i: "SA" },
          { n: "Senegal", c: "221", i: "SN" },
          { n: "Serbia", c: "381", i: "RS" },
          { n: "Seychelles", c: "248", i: "SC" },
          { n: "Sierra Leone", c: "232", i: "SL" },
          { n: "Singapore", c: "65", i: "SG" },
          { n: "Slovakia", c: "421", i: "SK" },
          { n: "Slovenia", c: "386", i: "SI" },
          { n: "South Africa", c: "27", i: "ZA" },
          { n: "Spain", c: "34", i: "ES" },
          { n: "Sri Lanka", c: "94", i: "LK" },
          { n: "Suriname", c: "597", i: "SR" },
          { n: "Sweden", c: "46", i: "SE" },
          { n: "Switzerland", c: "41", i: "CH" },
          { n: "Taiwan", c: "886", i: "TW" },
          { n: "Tanzania", c: "255", i: "TZ" },
          { n: "Thailand", c: "66", i: "TH" },
          { n: "Timor-Leste", c: "670", i: "TL" },
          { n: "Togo", c: "228", i: "TG" },
          { n: "Tonga", c: "676", i: "TO" },
          { n: "Trinidad and Tobago", c: "1868", i: "TT" },
          { n: "Turkey", c: "90", i: "TR" },
          { n: "Turkmenistan", c: "993", i: "TM" },
          { n: "Turks and Caicos Islands", c: "1649", i: "TC" },
          { n: "Uganda", c: "256", i: "UG" },
          { n: "Ukraine", c: "380", i: "UA" },
          { n: "United Arab Emirates", c: "971", i: "AE" },
          { n: "United Kingdom", c: "44", i: "GB" },
          { n: "United States", c: "1", i: "US" },
          { n: "Uruguay", c: "598", i: "UY" },
          { n: "Uzbekistan", c: "998", i: "UZ" },
          { n: "Venezuela", c: "58", i: "VE" },
          { n: "Vietnam", c: "84", i: "VN" },
          { n: "Virgin Islands, British", c: "1284", i: "VG" },
          { n: "Virgin Islands, U.S.", c: "1340", i: "VI" },
          { n: "Yemen", c: "967", i: "YE" },
          { n: "Zambia", c: "260", i: "ZM" },
          { n: "Zimbabwe", c: "263", i: "ZW" },
        ],
      },
      Vn = { list: [{ n: "India", c: "91", i: "IN" }] },
      Hn = simplyOtp.language,
      Wn = function (e) {
        var t =
            '<div class="country-selector-main">\n    <div class="selected-country">\n    <div class="country-flag-box">\n    <span class="country-flag {{default_country_selected}}"></span>\n    </div>\n    </div>\n    '.concat(
              '\n    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M1 1L7 7L13 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n    </svg>\n',
              '\n    </div>\n    <ul class="country-selector-list" aria-label="List of countries">{{countryList}}</ul>'
            ),
          n = "",
          r = qn;
        if (!e) {
          simplyOtp.settings.onlyIndia && (r = Vn);
          var i = simplyOtp.language.enableCountries.split(",");
          r.list = r.list.filter(function (e) {
            return i.includes(e.i);
          });
        }
        return (
          r.list.forEach(function (e) {
            var t =
              '<li class="" data-dial-code="{{country_code}}" data-country-code="{{iso_code}}">\n        <div class="country-flag-box">\n        <div class="country-flag {{iso_code}}"></div>\n        </div>\n        <span class="country-name">{{country_name}}</span>\n        <span class="dial-code">+{{country_code}}</span>\n        </li>';
            (t = (t = (t = t.replaceAll("{{country_code}}", e.c)).replaceAll(
              "{{iso_code}}",
              e.i.toLowerCase()
            )).replaceAll("{{country_name}}", e.n)),
              (n += t);
          }),
          (t = (t = t.replaceAll(
            "{{default_country_selected}}",
            "in"
          )).replaceAll("{{countryList}}", n))
        );
      },
      zn = function () {
        var e = Wn(!1),
          t =
            '\n    <div class="input-box-content mobile-no-inner" data-current="mobile">\n    {{country_html}}\n    <input class="olInput user-name-input" placeholder="'.concat(
              Hn.phonePlaceholder,
              '" maxlength="10" name="phone" type="number" />\n    </div>'
            );
        return (t = t.replaceAll("{{country_html}}", e));
      },
      Gn = function () {
        var e = zn(),
          t =
            '\n    <div class="input-box-content email-no-inner" data-current="email">\n    <input class="olInput user-name-input" placeholder="'.concat(
              Hn.emailPlaceholder,
              '" maxlength="" name="email" type="email" />\n    </div>'
            ),
          n = (function () {
            var e = Wn(!0),
              t =
                '\n    <div class="input-box-content whatsapp-no-inner" data-current="whatsapp">\n    {{country_html}}\n    <input class="olInput user-name-input" placeholder="'.concat(
                  Hn.whatsappPlaceholder,
                  '" maxlength="10" name="whatsapp" type="number" />\n    </div>'
                );
            return (t = t.replaceAll("{{country_html}}", e));
          })(),
          r =
            '\n    <div class="login-inputBox">\n    {{phone_html}}\n    {{email_html}}\n    {{whatsapp_html}}\n    </div>';
        return (r = (r = (r = r.replaceAll("{{phone_html}}", e)).replaceAll(
          "{{email_html}}",
          t
        )).replaceAll("{{whatsapp_html}}", n));
      },
      Kn = simplyOtp.language,
      $n = simplyOtp.language,
      Jn = function () {
        var e,
          t =
            '<div class="update-user-box step-box-wrapper hideBox">\n            <h3 class="login-header">'
              .concat(
                $n.accountTitle,
                '</h3>\n            <div class="login-inputBox">\n                <div class="input-box-content">\n                    <input id="first-name" class="olInput update-user-first-name-input" maxlength="" name="name" type="text">\n                    <label for="first-name" class="input__label">First Name</label>\n                </div>\n            </div>\n            <span class="error-message error-fname-message hideBox">Please enter First Name</span>\n            <div class="login-inputBox">\n                <div class="input-box-content">\n                    <input id="last-name" class="olInput update-user-last-name-input" maxlength="" name="name" type="text">\n                    <label for="last-name" class="input__label">Last Name</label>\n                </div>\n            </div>\n            <span class="error-message error-lname-message hideBox">Please enter Last Name</span>\n            <div class="login-inputBox">\n                <div class="input-box-content">\n                    <input\n                    id="email-id"\n                    class="olInput update-user-email-input"\n                    maxlength=""\n                    name="email"\n                    type="email"\n                    required\n                    >\n                    <label for="email-id" class="input__label">Email</label>\n                </div>\n            </div>\n            <span class="error-message error-email-message hideBox">Please enter a valid email</span>\n            <div class="login-inputBox">\n                {{phone_html}}\n            </div>\n            <span class="error-message-phone hideBox">Please enter a valid Phone Number</span>\n            <div class="customFieldsBox">\n                {{custom_fields}}\n            </div>\n            <input class="otp-id" name="otp_id" type="hidden">\n            <div class="update-checkbox-wrapper">\n                <input class="input-checkbox marketing-option" type="checkbox" value="1" checked="checked" name="" id="marketing" />\n                <label class="checkbox-main-label" for="marketing">'
              )
              .concat(
                $n.marketingText,
                '</p>\n            </div>\n            <div class="button-wrapper">\n                <button class="update-btn otp-btn">\n                    <span>'
              )
              .concat($n.updateBtnText, "</span>\n                    ")
              .concat(
                Bn,
                "\n                </button>\n            </div>\n        </div>"
              );
        return (t = (t = t.replaceAll("{{phone_html}}", zn())).replaceAll(
          "{{custom_fields}}",
          ((e = ""),
          simplyOtp.custom_fields.forEach(function (t) {
            var n = "";
            t.required && (n = 'required="required"');
            var r = "";
            t.pattern && (r = 'pattern ="'.concat(t.pattern, '"'));
            var i = "";
            t.patternMessage && (i = 'title ="'.concat(t.patternMessage, '"'));
            var o = "";
            t.length && (o = 'maxlength="'.concat(t.length, '"'));
            var s = "Please enter valid ".concat(t.label, ".");
            if (
              (t.patternMessage && (s = t.patternMessage), "dropdown" == t.type)
            ) {
              var a = "";
              a =
                '\n            <div class="custom_field">\n                <label>'
                  .concat(
                    t.label,
                    '</label>\n                <div class="custom_select">\n                    <select '
                  )
                  .concat(n, " name=")
                  .concat(
                    t.label,
                    '>\n                        <option value="">'
                  )
                  .concat(
                    t.placeholder,
                    '</option>\n                        {{options}}\n                    </select>\n                    <svg aria-hidden="true" focusable="false" viewBox="0 0 10 6">\n                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor">\n                        </path>\n                    </svg>\n                </div>\n                <span class="errormessage error-message-'
                  )
                  .concat(t.label, ' hideBox">')
                  .concat(s, "</span>\n            </div>\n            ");
              var c = t.value.split(","),
                u = "";
              c.forEach(function (e) {
                u += "\n                    <option value="
                  .concat(e, ">\n                        ")
                  .concat(
                    e,
                    "\n                    </option>\n                "
                  );
              }),
                (e += a.replaceAll("{{options}}", u));
            } else if ("date" == t.type) {
              var l;
              (l =
                '\n            <div class="custom_field">\n                <label>'
                  .concat(
                    t.label,
                    '</label>\n                <div class="custom_input input-box-content">\n                    <input type="date" '
                  )
                  .concat(r, " ")
                  .concat(i, " ")
                  .concat(o, ' class="olInput" ')
                  .concat(n, ' name="')
                  .concat(
                    t.label,
                    '"/>\n                </div>\n                <span class="errormessage error-message-'
                  )
                  .concat(t.label, ' hideBox">')
                  .concat(s, "</span>\n            </div>\n            ")),
                (e += l);
            } else {
              var h;
              (h =
                '\n            <div class="custom_field">\n                <div class="custom_input input-box-content">\n                    <input type="text" '
                  .concat(r, " ")
                  .concat(i, " ")
                  .concat(o, ' class="olInput" ')
                  .concat(n, ' name="')
                  .concat(
                    t.label,
                    '"/>\n                    <label class="input__label">'
                  )
                  .concat(
                    t.placeholder,
                    '</label>\n                </div>\n                <span class="errormessage error-message-'
                  )
                  .concat(t.label, ' hideBox">')
                  .concat(s, "</span>\n            </div>\n            ")),
                (e += h);
            }
          }),
          e)
        ));
      };
    function Yn(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Zn(e, t, n) {
      return (
        t && Yn(e.prototype, t),
        n && Yn(e, n),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
      );
    }
    function Xn(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var Qn = Zn(function e(t) {
      var n = this;
      !(function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, e),
        Xn(this, "getLoginComponent", function () {
          return (function () {
            var e =
                "<div class='login-box step-box-wrapper'>\n    <h3 class='login-header'>"
                  .concat(
                    Hn.loginTitle,
                    "</h3>\n    <p class='login-description'>"
                  )
                  .concat(
                    Hn.loginSubTitle,
                    "</p>\n    {{otp_type_html}}\n    <button class='send-btn otp-btn'>\n    <span>Request OTP</span>\n    "
                  )
                  .concat(
                    Bn,
                    "\n    </button>\n    \n    <div class='other-options-box'>\n    <p class='other-options-p'><span>"
                  )
                  .concat(
                    Hn.otherOptionText,
                    "</span></p>\n    <div class='other-options-wrap'>\n    \n    <div class='other-option-inner email-no-inner' data-current='email'>\n    "
                  )
                  .concat(
                    "\n    <svg width='16' height='14' viewBox='0 0 16 14' fill='none' xmlns='http://www.w3.org/2000/svg'>\n        <path d='M2.50016 1.1665H13.8335C14.6127 1.1665 15.2502 1.804 15.2502 2.58317V11.0832C15.2502 11.8623 14.6127 12.4998 13.8335 12.4998H2.50016C1.721 12.4998 1.0835 11.8623 1.0835 11.0832V2.58317C1.0835 1.804 1.721 1.1665 2.50016 1.1665Z' stroke='#4A4A4A' stroke-width='1.25' stroke-linecap='round' stroke-linejoin='round' /><path d='M15.2502 2.58301L8.16683 7.54134L1.0835 2.58301' stroke='#4A4A4A' stroke-width='1.25' stroke-linecap='round' stroke-linejoin='round' />\n    </svg>\n",
                    "\n    <p class='text-wrap'>Email</p>\n    </div>\n    \n    <div class='other-option-inner whatsapp-no-inner' data-current='whatsapp'>\n    "
                  )
                  .concat(
                    "\n    <svg width='15' height='16' viewBox='0 0 15 16' fill='none' xmlns='http://www.w3.org/2000/svg'>\n        <path d='M5.12292 4.39376C5.26072 4.39745 5.41349 4.4049 5.55885 4.72755C5.65523 4.94233 5.8176 5.33775 5.94986 5.65985C6.05278 5.9105 6.13748 6.11675 6.15867 6.15897C6.2071 6.25537 6.23691 6.36661 6.17358 6.49638C6.16611 6.51169 6.15906 6.52633 6.15226 6.54042C6.10146 6.64586 6.0653 6.7209 5.97986 6.81902C5.94473 6.85935 5.90813 6.90357 5.87167 6.94763C5.80755 7.02512 5.74383 7.10211 5.68922 7.1565C5.59237 7.25284 5.49173 7.35676 5.6035 7.54957C5.71533 7.74238 6.10653 8.37652 6.68403 8.88828C7.30489 9.44102 7.84477 9.67395 8.11767 9.7917C8.17066 9.81456 8.21358 9.83308 8.24507 9.84876C8.43885 9.94516 8.55433 9.93032 8.66609 9.80055C8.77792 9.67072 9.15044 9.23684 9.28089 9.04403C9.40756 8.85122 9.53794 8.88089 9.71681 8.94762C9.89562 9.01435 10.8494 9.4816 11.0431 9.57801C11.0814 9.59707 11.1172 9.61425 11.1504 9.63017C11.2852 9.69481 11.3769 9.73875 11.4157 9.80425C11.4641 9.88581 11.4641 10.2715 11.304 10.7239C11.1401 11.1763 10.3502 11.6102 9.99248 11.6436C9.95861 11.6468 9.92491 11.6508 9.89023 11.655C9.56245 11.6947 9.14634 11.745 7.66387 11.1615C5.83715 10.4431 4.63131 8.66086 4.38752 8.30053C4.36827 8.27208 4.35502 8.25249 4.34793 8.24299L4.34381 8.23747C4.23289 8.08906 3.55433 7.18109 3.55433 6.24429C3.55433 5.348 3.99585 4.88137 4.19724 4.66853C4.21 4.65504 4.2218 4.64257 4.23246 4.63108C4.41127 4.43827 4.61995 4.39007 4.75033 4.39007C4.88078 4.39007 5.01116 4.39007 5.12292 4.39376Z' fill='#4A4A4A' /><path fill-rule='evenodd' clip-rule='evenodd' d='M0.0753723 15.0598C0.0137505 15.2835 0.217474 15.4899 0.441954 15.4313L3.91205 14.5249C5.00742 15.1182 6.24066 15.4334 7.49629 15.4334H7.5C11.6319 15.4334 15 12.0848 15 7.9686C15 5.97352 14.2212 4.09708 12.8055 2.68788C11.3897 1.27875 9.50816 0.5 7.49994 0.5C3.36814 0.5 4.77741e-07 3.84862 4.77741e-07 7.9649C-0.000469058 9.27439 0.345173 10.561 1.00223 11.6954L0.0753723 15.0598ZM2.0914 11.9955C2.17185 11.7035 2.13166 11.3914 1.97985 11.1292C1.42239 10.1667 1.12935 9.07517 1.12975 7.9649C1.12975 4.47791 3.98671 1.62975 7.49994 1.62975C9.20955 1.62975 10.8045 2.29027 12.0085 3.48861C13.2111 4.68562 13.8702 6.27386 13.8702 7.9686C13.8702 11.4555 11.0133 14.3037 7.5 14.3037H7.49629C6.42941 14.3037 5.38102 14.0358 4.45013 13.5315C4.19818 13.3951 3.90378 13.3594 3.62654 13.4318L1.54599 13.9753L2.0914 11.9955Z' fill='#4A4A4A' />\n    </svg>\n",
                    "\n    <p class='text-wrap'>Whatsapp</p>\n    </div>\n    <div class='other-option-inner mobile-no-inner' data-current='mobile'>\n    "
                  )
                  .concat(
                    "\n    <svg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 202.592 202.592' style='enable-background:new 0 0 202.592 202.592;' xml:space='preserve'>\n        <g>\n            <g>\n                <path style='fill:#010002;' d='M198.048,160.105l-31.286-31.29c-6.231-6.206-16.552-6.016-23.001,0.433l-15.761,15.761\n                                    c-0.995-0.551-2.026-1.124-3.11-1.732c-9.953-5.515-23.577-13.074-37.914-27.421C72.599,101.48,65.03,87.834,59.5,77.874\n                                    c-0.587-1.056-1.145-2.072-1.696-3.038l10.579-10.565l5.2-5.207c6.46-6.46,6.639-16.778,0.419-23.001L42.715,4.769\n                                    c-6.216-6.216-16.541-6.027-23.001,0.433l-8.818,8.868l0.243,0.24c-2.956,3.772-5.429,8.124-7.265,12.816\n                                    c-1.696,4.466-2.752,8.729-3.235,12.998c-4.13,34.25,11.52,65.55,53.994,108.028c58.711,58.707,106.027,54.273,108.067,54.055\n                                    c4.449-0.53,8.707-1.593,13.038-3.275c4.652-1.818,9.001-4.284,12.769-7.233l0.193,0.168l8.933-8.747\n                                    C204.079,176.661,204.265,166.343,198.048,160.105z M190.683,176.164l-3.937,3.93l-1.568,1.507\n                                    c-2.469,2.387-6.743,5.74-12.984,8.181c-3.543,1.364-7.036,2.24-10.59,2.663c-0.447,0.043-44.95,3.84-100.029-51.235\n                                    C14.743,94.38,7.238,67.395,10.384,41.259c0.394-3.464,1.263-6.95,2.652-10.593c2.462-6.277,5.812-10.547,8.181-13.02l5.443-5.497\n                                    c2.623-2.63,6.714-2.831,9.112-0.433l31.286,31.286c2.394,2.401,2.205,6.492-0.422,9.13L45.507,73.24l1.95,3.282\n                                    c1.084,1.829,2.23,3.879,3.454,6.106c5.812,10.482,13.764,24.83,29.121,40.173c15.317,15.325,29.644,23.27,40.094,29.067\n                                    c2.258,1.249,4.32,2.398,6.17,3.5l3.289,1.95l21.115-21.122c2.634-2.623,6.739-2.817,9.137-0.426l31.272,31.279\n                                    C193.5,169.446,193.31,173.537,190.683,176.164z'/>\n            </g>\n        </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>\n    </svg>\n",
                    "\n    <p class='text-wrap'>Phone</p>\n    </div>\n    </div>\n    </div>\n    </div>"
                  ),
              t = Gn();
            return (e = e.replaceAll("{{otp_type_html}}", t));
          })();
        }),
        Xn(this, "getOtpComponent", function () {
          return '<div class="verify-box step-box-wrapper hideBox">\n            <h3 class="login-header">'
            .concat(
              Kn.otpTitle,
              '</h3>\n            <p class="verify-box-details login-description">'
            )
            .concat(
              Kn.otpSubTitle,
              ' <span>Mobile number</span></p>\n            <div class="mn-container">\n                <p class="user-details">+91 999999999</p>\n                '
            )
            .concat(
              '\n    <svg\n        class="edit-phone bi bi-pencil-fill"\n        fill="currentColor"\n        height="16"\n        viewbox="0 0 16 16"\n        width="16"\n        xmlns="http://www.w3.org/2000/svg"\n    >\n        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>\n    </svg>\n',
              '\n            </div>\n            <input class="verify-otp-id" name="olOtpId" type="hidden">\n            <input class="phoneNo" name="phoneNo" type="hidden">\n            <div class="verify-content">\n                <input type="tel" autocomplete="one-time-code" class="otp-input-main otp-input otp6" maxlength="6">\n            </div>\n            <button class="verify-btn otp-btn">\n                <span>Verify OTP</span>\n                '
            )
            .concat(
              Bn,
              '\n            </button>\n            <div class="resend-otp" id="resend-otp">\n                <p>Didn\'t Receive the OTP?</p>\n                <a class="resend-btn disabled">Resend OTP</a>\n                <p class="count-down-otp"></p>\n            </div>\n        </div>'
            );
        }),
        Xn(this, "getUpdateComponent", function () {
          return Jn();
        }),
        Xn(this, "getCustomFieldComponent", function () {}),
        Xn(this, "createLoginBox", function () {
          var e = document.getElementsByClassName("sotp-widget"),
            t = '\n        <div class="olWrapper" data-selected-country="'
              .concat(
                simplyOtp.settings.selectedCountry,
                '" style="--otp-login-btn-color:'
              )
              .concat(
                simplyOtp.settings.primaryColor,
                '">\n            <div class="ol">\n                {{popup_close}}\n                {{image_content}}\n                {{login_content}}\n                {{otp_content}}\n                {{update_content}}\n            </div>\n            <div class="small-otp-loader">\n                <div class="loader-innerDiv"></div>\n            </div>\n        </div>'
              ),
            r = "";
          simplyOtp.settings.image &&
            (r =
              '\n                <div class="login-img">\n                    <img src="'.concat(
                simplyOtp.settings.image,
                '" alt="login">\n                </div>\n            '
              ));
          var i = "";
          simplyOtp.settings.popup_enabled &&
            (i =
              '\n                <div class="simply-close-btn">\n                    '.concat(
                Un,
                "\n                </div>\n            "
              )),
            (t = (t = (t = (t = (t = t.replaceAll(
              "{{popup_close}}",
              i
            )).replaceAll("{{image_content}}", r)).replaceAll(
              "{{login_content}}",
              n.getLoginComponent()
            )).replaceAll("{{otp_content}}", n.getOtpComponent())).replaceAll(
              "{{update_content}}",
              n.getUpdateComponent()
            )),
            0 == window.simplyOtp.designMode &&
              (t = window.simplyOtp.wrapperHtml);
          for (var o = 0; o < e.length; o++) {
            var s = e[o];
            s.classList.remove("otp-loader"), (s.innerHTML = t);
          }
          if (0 != window.simplyOtp.designMode) {
            simplyOtp.language.phoneEnable
              ? (document.querySelectorAll(".login-box").forEach(function (e) {
                  e.setAttribute("data-active", "mobile");
                }),
                document
                  .querySelectorAll(
                    ".login-box .login-inputBox .mobile-no-inner"
                  )
                  .forEach(function (e) {
                    e.classList.add("active");
                  }))
              : simplyOtp.language.emailEnable
              ? (document.querySelectorAll(".login-box").forEach(function (e) {
                  e.setAttribute("data-active", "email");
                }),
                document
                  .querySelectorAll(
                    ".login-box .login-inputBox .email-no-inner"
                  )
                  .forEach(function (e) {
                    e.classList.add("active");
                  }))
              : simplyOtp.language.whatsappEnable &&
                (document.querySelectorAll(".login-box").forEach(function (e) {
                  e.setAttribute("data-active", "whatsapp");
                }),
                document
                  .querySelectorAll(
                    ".login-box .login-inputBox .whatsapp-no-inner"
                  )
                  .forEach(function (e) {
                    e.classList.add("active");
                  }));
            var a = 3;
            simplyOtp.language.phoneEnable ||
              (a--,
              document
                .querySelectorAll(".login-box .mobile-no-inner")
                .forEach(function (e) {
                  e.classList.add("hideBox"), e.classList.remove("active");
                })),
              simplyOtp.language.emailEnable ||
                (a--,
                document
                  .querySelectorAll(".login-box .email-no-inner")
                  .forEach(function (e) {
                    e.classList.add("hideBox"), e.classList.remove("active");
                  })),
              simplyOtp.language.whatsappEnable ||
                (a--,
                document
                  .querySelectorAll(".login-box .whatsapp-no-inner")
                  .forEach(function (e) {
                    e.classList.add("hideBox"), e.classList.remove("active");
                  })),
              1 == a &&
                document
                  .querySelectorAll(".other-options-p")
                  .forEach(function (e) {
                    e.classList.add("hideBox");
                  }),
              simplyOtp.otp_widgets.btn_bg_color &&
                document.querySelectorAll(".otp-btn").forEach(function (e) {
                  (e.style.color = simplyOtp.language.btn_text_color),
                    (e.style.background = simplyOtp.language.btn_bg_color);
                });
          }
        }),
        (this.parent = t),
        (window.simplyOtp = window.simplyOtp || {}),
        this.createLoginBox();
    });
    function er(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function tr(e, t, n) {
      return (
        t && er(e.prototype, t),
        n && er(e, n),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
      );
    }
    function nr(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var rr = tr(function e() {
      var t = this;
      !(function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, e),
        nr(this, "setDefaultSelectedCountry", function () {
          document
            .querySelectorAll(
              "li[data-country-code='" +
                simplyOtp.settings.selectedCountry +
                "']"
            )
            .forEach(function (e) {
              return e.click();
            });
        }),
        nr(this, "createLoginForm", function () {}),
        nr(this, "clickEvents", function () {
          var e = document.querySelectorAll(".other-option-inner"),
            n = document.querySelectorAll(".country-selector-main"),
            r = document.querySelectorAll(".country-selector-list li"),
            i = document.querySelectorAll(".send-btn"),
            o = document.querySelectorAll(".edit-phone"),
            s = document.querySelectorAll(".resend-btn"),
            a = document.querySelectorAll(".verify-btn"),
            c = document.querySelectorAll(".update-btn"),
            u = document.querySelectorAll(".otp-input-main");
          document.querySelectorAll(".skip-btn").forEach(function (e) {
            e.addEventListener("click", function (n) {
              var r = e.closest(".sotp-widget");
              t.skipNowHandler(r);
            });
          }),
            c.forEach(function (e) {
              e.addEventListener("click", function (n) {
                var r = e.closest(".sotp-widget");
                if (
                  (r
                    .querySelector(".error-fname-message")
                    .classList.add("hideBox"),
                  r
                    .querySelector(".error-lname-message")
                    .classList.add("hideBox"),
                  r
                    .querySelector(".error-email-message")
                    .classList.add("hideBox"),
                  simplyOtp.language.fname_required &&
                    "" ==
                      r.querySelector(".update-user-first-name-input").value)
                )
                  return (
                    r
                      .querySelector(".error-fname-message")
                      .classList.remove("hideBox"),
                    n.preventDefault(),
                    !1
                  );
                if (
                  simplyOtp.language.lname_required &&
                  "" == r.querySelector(".update-user-last-name-input").value
                )
                  return (
                    r
                      .querySelector(".error-lname-message")
                      .classList.remove("hideBox"),
                    n.preventDefault(),
                    !1
                  );
                var i = r.querySelector(".update-user-email-input").value;
                if (
                  "" == r.querySelector(".update-user-email-input").value ||
                  !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                    i
                  )
                )
                  return (
                    r
                      .querySelector(".error-email-message")
                      .classList.remove("hideBox"),
                    n.preventDefault(),
                    !1
                  );
                if (
                  "" ==
                  r.querySelector('.update-user-box input[name="phone"]').value
                )
                  return (
                    r
                      .querySelector(".error-message-phone")
                      .classList.remove("hideBox"),
                    n.preventDefault(),
                    !1
                  );
                var o = !1;
                r
                  .querySelectorAll(".custom_field select")
                  .forEach(function (e) {
                    (e
                      .closest(".custom_field")
                      .querySelector(".errormessage")
                      .classList.add("hideBox"),
                    e.getAttribute("required")) &&
                      ("" != e.value ||
                        (e
                          .closest(".custom_field")
                          .querySelector(".errormessage")
                          .classList.remove("hideBox"),
                        (o = !0),
                        e.setAttribute("isvalid", "true"),
                        console.log(e.validity)));
                  }),
                  r
                    .querySelectorAll(".custom_field input")
                    .forEach(function (e) {
                      var t = e.getAttribute("required");
                      if (
                        (e
                          .closest(".custom_field")
                          .querySelector(".errormessage")
                          .classList.add("hideBox"),
                        t && "" != e.value && e.checkValidity())
                      );
                      else if (t || "" != e.value)
                        if (!t && "" != e.value && e.checkValidity());
                        else {
                          e
                            .closest(".custom_field")
                            .querySelector(".errormessage")
                            .classList.remove("hideBox"),
                            (o = !0),
                            e.setAttribute("isvalid", "true"),
                            console.log(e.validity);
                        }
                      else;
                    }),
                  o || t.updateUserHandler(r);
              });
            }),
            u.forEach(function (e) {
              e.addEventListener("input", function (t) {
                var n = e.closest(".sotp-widget"),
                  r = e.getAttribute("maxlength");
                e.value.length == r && n.querySelector(".verify-btn").click();
              });
            }),
            a.forEach(function (e) {
              e.addEventListener("click", function (n) {
                var r = e.closest(".sotp-widget");
                t.verifyOtpHandler(r);
              });
            }),
            o.forEach(function (e) {
              e.addEventListener("click", function (e) {
                var n = e.currentTarget.closest(".sotp-widget");
                t.goBack(n);
              });
            }),
            i.forEach(function (e) {
              e.addEventListener("click", function (e) {
                var n = e.currentTarget.closest(".sotp-widget");
                t.sendOtpHandler(n);
              });
            }),
            s.forEach(function (e) {
              e.addEventListener("click", function (n) {
                var r = e.closest(".sotp-widget");
                e.classList.contains("disabled") ||
                  (t.countDownStart(r), t.resendOtpHandler(r));
              });
            }),
            e.forEach(function (e) {
              e.addEventListener("click", function (e) {
                var t = e.currentTarget,
                  n = t.closest(".sotp-widget"),
                  r = t.getAttribute("data-current");
                n.querySelector(".login-box").setAttribute("data-active", r),
                  n.querySelectorAll(".user-name-input").forEach(function (e) {
                    var t = e.parentElement.getAttribute("data-current");
                    r == t
                      ? e.parentElement.classList.add("active")
                      : e.parentElement.classList.remove("active");
                  });
              });
            }),
            n.forEach(function (e) {
              e.addEventListener("click", function (e) {
                var t = e.currentTarget.parentElement.querySelector(
                  ".country-selector-list"
                );
                t && t.classList.toggle("active");
              });
            }),
            r.forEach(function (e) {
              e.addEventListener("click", function (e) {
                var t = e.currentTarget,
                  n = t.closest(".sotp-widget"),
                  r = t.closest(".input-box-content"),
                  i = r.querySelectorAll(".country-selector-list li");
                i.length > 0 &&
                  i.forEach(function (e) {
                    e.classList.remove("active");
                  });
                t.getAttribute("data-dial-code");
                var o = t.getAttribute("data-country-code");
                n.setAttribute("data-selected-country", o);
                var s = r.querySelectorAll(".selected-country .country-flag");
                s.length > 0 &&
                  s.forEach(function (e) {
                    e.className = "country-flag " + o;
                  }),
                  i.length > 0 &&
                    i.forEach(function (e) {
                      e.getAttribute("data-country-code") == o &&
                        e.classList.add("active");
                    });
                var a = r.querySelector(".country-selector-list");
                a && a.classList.remove("active");
              });
            }),
            document.addEventListener("wheel", function (e) {
              "number" === document.activeElement.type &&
                document.elementFromPoint(e.x, e.y) == document.activeElement &&
                document.activeElement.blur();
            });
        }),
        nr(this, "setInputEvent", function () {
          var e = t.events,
            n = document.querySelectorAll(".update-user-email-input"),
            r = document.querySelectorAll(".update-user-box input");
          r.length > 0 &&
            r.forEach(function (t) {
              e.forEach(function (e) {
                t.addEventListener(e, function (e) {
                  var t = e.currentTarget,
                    n = t.value;
                  n && n.length > 0
                    ? t.classList.add("is-filled")
                    : t.classList.remove("is-filled");
                });
              });
            }),
            e.forEach(function (e) {
              n.forEach(function (t) {
                t.addEventListener(e, function (e) {
                  t.closest(".sotp-widget")
                    .querySelector(".error-message")
                    .classList.add("hideBox");
                });
              });
            });
        }),
        nr(this, "skipNowHandler", function () {
          t.showLoader(parent), t.otpAction("updateEmail", parent);
        }),
        nr(this, "updateUserHandler", function (e) {
          t.showLoader(e), t.otpAction("updateEmail", e);
        }),
        nr(this, "verifyOtpHandler", function (e) {
          var n = e.querySelector(".otp-input-main"),
            r = Number(e.getAttribute("data-otp-total-attempt"));
          r++,
            e.setAttribute("data-otp-total-attempt", r),
            n.value.length < 4
              ? t.showToastBox(e, "Please enter OTP", !1)
              : (t.showLoader(e), t.otpAction("verifyOTP", e));
        }),
        nr(this, "sendOtp", function (e, n, r) {
          var i = r.querySelector(".verify-otp-id");
          r.querySelector(".verify-box").classList.remove("hideBox"),
            r.querySelector(".update-user-box").classList.add("hideBox"),
            r.querySelector(".login-box").classList.add("hideBox"),
            i.setAttribute("value", e.data.otpId),
            (t.session_otp_id = e.data.otpId);
          var o = r.querySelector(".otp-input-main");
          if (e.data.otpLength) {
            var s;
            (s = e.data.otpLength),
              o.setAttribute("maxlength", s),
              (o.className = o.className + " otp" + s);
          }
          r.setAttribute("data-resend-otp", !1),
            t.showToastBox(r, e.message, !0);
        }),
        nr(this, "countDownStart", function (e) {
          var n = t,
            r = e.querySelector(".count-down-otp"),
            i = e.querySelector(".resend-btn");
          i.classList.add("disabled"), r.classList.remove("hideBox");
          var o,
            s = simplyOtp.settings.resendTime;
          o = setInterval(function () {
            s >= 0
              ? ((r.innerHTML = s < 10 ? "00:0" + s : "00:" + s), s--)
              : (clearInterval(o),
                (s = 0),
                (r.innerHTML = "00:00"),
                i.classList.remove("disabled"),
                r.classList.add("hideBox")),
              (n.stopTimer = function () {
                o &&
                  (clearInterval(o),
                  (s = 0),
                  (r.innerHTML = "00:00"),
                  i.classList.remove("disabled"),
                  r.classList.add("hideBox"));
              });
          }, 1e3);
        }),
        nr(this, "resendOtpHandler", function (e) {
          t.showLoader(e),
            t.otpAction("resendOTP", e),
            t.manageOTPBox(e, !0),
            e.querySelector(".resend-otp").classList.add("hideBox"),
            e.setAttribute("data-resend-otp", !0);
        }),
        nr(this, "goBack", function (e) {
          t.stopTimer(e);
          var n = e.querySelector(".otp-input-main"),
            r = e.querySelector(".verify-btn");
          e.setAttribute("data-resend-otp", !1),
            e.querySelector(".resend-otp").classList.remove("hideBox"),
            n.removeAttribute("disabled"),
            r.removeAttribute("disabled"),
            e.setAttribute("data-otp-total-attempt", 0);
          t.updateActiveOption(e).activeInput;
          e.querySelector(".login-box").classList.remove("hideBox"),
            e.querySelector(".verify-box").classList.add("hideBox"),
            t.manageOTPBox(e, !0);
        }),
        nr(this, "manageOTPBox", function (e, n) {
          var r = e.querySelector(".otp-input-main"),
            i = e.querySelector(".verify-btn");
          0 == n
            ? ((r.value = ""),
              (r.disabled = !0),
              (i.disabled = !0),
              i.classList.add("hideBox"),
              t.stopTimer(e),
              e.getAttribute("data-resend-otp") && t.goBack(e))
            : (r.removeAttribute("disabled"),
              i.removeAttribute("disabled"),
              i.classList.remove("hideBox"));
        }),
        nr(this, "updateActiveOption", function (e) {
          var t = e.querySelector(".input-box-content.active .user-name-input"),
            n = t.parentElement.getAttribute("data-current");
          return { activeInput: t, activeType: n };
        }),
        nr(this, "validateUserName", function (e, t) {
          var n = "",
            r = !1;
          switch (t) {
            case "mobile":
            case "whatsapp":
              (r = !0),
                /^[0-9]{10}$/.test(e)
                  ? ((n = "Please enter valid mobile number"), (r = !0))
                  : ((n = "Please enter valid mobile number"), (r = !1));
              break;
            case "email":
              e.match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              )
                ? (r = !0)
                : ((n = "Please enter valid email id"), (r = !1));
              break;
            default:
              (r = !1), (n = "");
          }
          return { flag: r, msg: n };
        }),
        nr(this, "fetchDomainURI", function () {
          return window.location.port.length, window.location.host;
        }),
        nr(this, "base64url", function (e) {
          return CryptoJS.enc.Base64.stringify(e)
            .replace(/=+$/, "")
            .replace(/\//g, "_");
        }),
        nr(this, "closeToastBox", function () {
          var e = document.querySelectorAll(".toast-box-wrapper");
          e.length > 0 &&
            e.forEach(function (e) {
              e.remove();
            });
        }),
        nr(this, "showToastBox", function (e, n, r, i) {
          var o = r ? "success" : "error",
            s = document.createElement("div");
          s.setAttribute("class", "toast-box-wrapper");
          var a = '<div class="toast-content">\n    <div class="toast-card '
              .concat(o, '">\n    <div class="toast-icon-wrapper">\n    ')
              .concat(
                "success" == o
                  ? '\n    <svg class="feather feather-check" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"/></svg>\n'
                  : '\n    <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 413.348 413.348" fill="red"><path d="M413.348 24.354L388.994 0l-182.32 182.32L24.354 0 0 24.354l182.32 182.32L0 388.994l24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"/></svg>\n',
                '\n    </div>\n    <div class="toast-card-content">\n    <h6 class="toast-title">'
              )
              .concat(
                n,
                '</h6>\n    {{description}}\n    </div>\n    <span class="toast-close-icon">\n    '
              )
              .concat(Un, "\n    </span>\n    </div>\n    </div>\n    "),
            c = "";
          i && (c = '<p class="toast-description">'.concat(i, "</p>")),
            (a = a.replaceAll("{{description}}", c)),
            (s.innerHTML = a),
            t.closeToastBox();
          var u,
            l,
            h = e.querySelector(".step-box-wrapper:not(.hideBox) button");
          h && ((u = s), (l = h).parentNode.insertBefore(u, l.nextSibling)),
            s.classList.add("active");
          var d = document.querySelector(".toast-card .toast-close-icon");
          d &&
            d.addEventListener("click", function () {
              return t.closeToastBox();
            }),
            setTimeout(t.closeToastBox, 4e3);
        }),
        nr(this, "errorHandler", function (e) {
          t.showToastBox(e, "Something went wrong!", !1);
        }),
        nr(this, "requestHandler", function (e, n, r) {
          var i = "".concat(t.appUrl),
            o = simplyOtp.permanentDomain,
            s = n.data,
            a = n.action;
          fetch(i, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              shop_name: o,
              action: a,
            },
            body: s,
          })
            .then(function (e) {
              return e.json();
            })
            .then(function (t) {
              r(t, a, e);
            })
            .catch(function (n) {
              console.log(n), t.errorHandler(e), t.hideLoader(e);
            });
        }),
        nr(this, "updateEmail", function (e, n, r) {
          r.querySelector(".verify-box").classList.add("hideBox"),
            r.querySelector(".update-user-box").classList.remove("hideBox"),
            r.querySelector(".login-box").classList.add("hideBox"),
            t.performLoginAction(e.data.redirect_url);
        }),
        nr(this, "performLoginAction", function (e) {
          try {
            var n = new URL(e).searchParams
                .get("logintoken")
                .split(".")[1]
                .replace("-", "+")
                .replace("_", "/"),
              r = decodeURIComponent(
                atob(n)
                  .split("")
                  .map(function (e) {
                    return (
                      "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
                    );
                  })
                  .join("")
              ),
              i = JSON.parse(r);
            if (
              (document.body.dispatchEvent(new Event("sotp.login")),
              i.jti && i.iss)
            ) {
              var o = i.jti,
                s = i.iss;
              t.createLoginFormAndSubmit(o, s);
            } else window.location = e;
          } catch (t) {
            console.log(t), (window.location = e);
          }
        }),
        nr(this, "createLoginFormAndSubmit", function (e, n) {
          ((document.getElementById("otp-original-email").value = e),
          (document.getElementById("otp-original-password").value = n),
          simplyOtp.settings.goKwik && t.checkout_url.includes("checkout"))
            ? ((document.getElementById("otp-return_to").value =
                location.origin + "/account/login#ref=gokwik"),
              document.getElementsByName("checkout_url").forEach(function (e) {
                e.remove();
              }))
            : "" != t.checkout_url
            ? (document.getElementById("otp-return_to").value = t.checkout_url)
            : document.getElementById("otp-return_to") &&
              document.getElementById("otp-return_to").remove();
          document.getElementById("sotp-form").submit();
        }),
        nr(this, "resendOtp", function (e, n, r) {
          var i = r.querySelector(".verify-otp-id");
          e.data.otpId && i.setAttribute("value", e.data.otpId),
            t.showToastBox(r, e.message, !0);
        }),
        nr(this, "responseHandler", function (e, n, r) {
          t.hideLoader(r);
          var i = r.querySelector(".verify-otp-id");
          if (200 === e.status)
            "verifyOTP" == n
              ? t.verifyOtp(e, n, r)
              : "sendOTP" == n
              ? t.sendOtp(e, n, r)
              : "updateEmail" == n
              ? t.updateEmail(e, n, r)
              : "resendOTP" == n
              ? t.resendOtp(e, n, r)
              : t.showToastBox(r, e.message, !0);
          else if ("updateEmail" == n) t.showToastBox(r, e.message, !1);
          else if ("verifyOTP" != n)
            t.showToastBox(r, e.message, !0),
              e.data && e.data.otpId && i.setAttribute("value", e.data.otpId);
          else {
            (r.querySelector(".otp-input-main").value = ""),
              Number(r.getAttribute("data-otp-total-attempt")) >=
                t.totalAttemptWithSendOTP && t.manageOTPBox(r, !1),
              t.showToastBox(r, "Please enter correct OTP", !1);
          }
        }),
        nr(this, "verifyOtp", function (e, n, r) {
          r.querySelector(".verify-box").classList.add("hideBox"),
            r.querySelector(".login-box").classList.add("hideBox");
          var i = e.data.email,
            o = e.data.phone,
            s = e.data.firstName,
            a = e.data.lastName;
          if (simplyOtp.settings.onlyOTPNoLogin) {
            document.body.dispatchEvent(new Event("sotp.login"));
            var c = { email: i, phone: o, firstName: s, lastName: a };
            simplyOtp.loginEvent(c);
          } else if (e.data.multipass_url) {
            var u = { email: i, phone: o, firstName: s, lastName: a };
            document.body.dispatchEvent(new Event("sotp.login")),
              simplyOtp.loginEvent(u),
              (window.location = e.data.multipass_url);
          } else if (e.data.redirect_url) {
            var l = { email: i, phone: o, firstName: s, lastName: a };
            document.body.dispatchEvent(new Event("sotp.login")),
              simplyOtp.loginEvent(l),
              t.performLoginAction(e.data.redirect_url);
          } else {
            var h = r.querySelector(".update-user-first-name-input"),
              d = r.querySelector(".update-user-last-name-input"),
              f = r.querySelector(".update-user-email-input"),
              p = r.querySelector(".update-user-box input[name='phone']");
            ("" != o && null !== o) ||
              ((f.value = i), f.classList.add("is-filled"));
            var v = h,
              g = d;
            s && ((v.value = s), v.classList.add("is-filled")),
              a && ((g.value = a), g.classList.add("is-filled")),
              "" == o || null === o
                ? (f.disabled = !0)
                : ((p.type = "text"),
                  (p.value = o),
                  p.classList.add("is-filled"),
                  r
                    .querySelector(".update-user-box .country-selector-main")
                    .classList.add("hideBox"),
                  (p.disabled = !0)),
              (r.querySelector(".otp-id").value = t.session_otp_id);
            var m = r.querySelector(".skip-btn");
            m && m.classList.add("hideBox"),
              simplyOtp.settings.skipPage3
                ? ((f.value = i),
                  f.classList.add("is-filled"),
                  r.querySelector(".update-btn").click(),
                  t.showLoader())
                : (r
                    .querySelector(".update-user-box")
                    .classList.remove("hideBox"),
                  document.body.dispatchEvent(new Event("sotp.register")));
          }
        }),
        nr(this, "otpAction", function (e, n) {
          var r,
            i,
            o,
            s,
            a = t.updateActiveOption(n),
            c = a.activeInput.value,
            u = a.activeType,
            l = simplyOtp.permanentDomain,
            h = new URLSearchParams(window.location.search),
            d = Object.fromEntries(h.entries());
          if (
            ("email" != u && (c = t.getDialCode(n) + parseInt(c)),
            (s = d.checkout_url ? d.checkout_url : ""),
            t.settings.pageUrl && (s = t.settings.pageUrl),
            (t.checkout_url = s),
            "sendOTP" == e)
          )
            (o = {
              data: JSON.stringify({
                username: c,
                type: u,
                domain: t.fetchDomainURI(),
                recaptcha_token: t.firebaseToken,
              }),
              action: e,
            }),
              t.requestHandler(n, o, t.responseHandler),
              t.generateFireBaseToken();
          else if ("verifyOTP" == e) {
            (r = n.querySelector(".verify-otp-id").value),
              (i = n.querySelector(".otp-input-main").value),
              (o = {
                data: JSON.stringify({
                  username: c,
                  otp: i,
                  type: u,
                  otp_id: r,
                  checkout_url: s,
                  domain: t.fetchDomainURI(),
                }),
                action: e,
              }),
              t.requestHandler(n, o, t.responseHandler);
          } else if ("resendOTP" == e)
            (o = {
              data: JSON.stringify({
                username: c,
                type: u,
                domain: t.fetchDomainURI(),
                recaptcha_token: t.firebaseToken,
              }),
              action: e,
            }),
              t.requestHandler(n, o, t.responseHandler),
              t.generateFireBaseToken();
          else if ("updateEmail" == e) {
            var f = n.querySelector(".otp-id").value,
              p = n.querySelector(".update-user-first-name-input"),
              v = n.querySelector(".update-user-last-name-input"),
              g = n.querySelector(".update-user-email-input"),
              m = n.querySelector(".update-user-box input[name='phone']"),
              y = p.value,
              b = v.value,
              w = g.value,
              _ = m.value;
            if (!m.disabled) {
              var S = t.getDialCode(n);
              _ && (_ = S + _);
            }
            var I = n.querySelector(".update-user-box .marketing-option"),
              E = !0;
            I && 0 == I.checked && (E = !1);
            var O = [];
            n
              .querySelectorAll(".custom_field select, .custom_field input")
              .forEach(function (e) {
                "" !== e.value && O.push(nr({}, e.name, e.value));
              }),
              (o = {
                data: JSON.stringify({
                  otp_id: f,
                  store_url: l,
                  first_name: y,
                  last_name: b,
                  phone_no: _,
                  email: w,
                  checkout_url: s,
                  accept_email_marketing: E,
                  accept_sms_marketing: E,
                  accept_whatsapp_marketing: E,
                  domain: t.fetchDomainURI(),
                  custom_fields: O,
                }),
                action: e,
              });
            var T = { email: w, phone: _, firstName: y, lastName: b };
            document.body.dispatchEvent(new Event("sotp.register")),
              simplyOtp.signUpEvent(T),
              t.requestHandler(n, o, t.responseHandler),
              t.generateFireBaseToken();
          }
        }),
        nr(this, "showLoader", function (e) {
          var t = e.querySelector(".small-otp-loader"),
            n = e.querySelector(".loader-innerDiv");
          t && n && ((t.style.display = "block"), (n.style.display = "block"));
        }),
        nr(this, "hideLoader", function (e) {
          var t = e.querySelector(".small-otp-loader"),
            n = e.querySelector(".loader-innerDiv");
          (t.style.display = "none"), (n.style.display = "none");
        }),
        nr(this, "getDialCode", function (e) {
          var n = "",
            r = e.getAttribute("data-selected-country");
          if (
            (r || (r = t.selectedCountry),
            e.querySelector(
              '.country-selector-list li[data-country-code="'.concat(r, '"]')
            ))
          ) {
            var i = e
              .querySelector(
                '.country-selector-list li[data-country-code="'.concat(r, '"]')
              )
              .getAttribute("data-dial-code");
            i && (n = "+" + i);
          }
          return n;
        }),
        nr(this, "updateMobile", function (e, n) {
          var r = e.querySelector(".user-details"),
            i = t.getDialCode(e),
            o = n.activeInput.value;
          o.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
            ? (r.innerHTML = "".concat(o))
            : (r.innerHTML = "".concat(i, " ").concat(o));
        }),
        nr(this, "generateFireBaseToken", function (e) {
          try {
            if (window.firebaseApp) {
              t.recaptchaVerifier && t.recaptchaVerifier.clear();
              var n = Fn(window.firebaseApp),
                r = "recaptcha-container-" + t.recaptchaVerifierComponent++,
                i = document.querySelector("#recaptcha-container");
              parent || (i = document.querySelector("#recaptcha-container")),
                (i.innerHTML = "<div id='" + r + "'></div>"),
                (t.recaptchaVerifier = new Xt(
                  r,
                  {
                    size: "invisible",
                    callback: function (n) {
                      console.log("generatefireBaseToken - generated"),
                        console.log(n),
                        (t.firebaseToken = n),
                        e();
                    },
                  },
                  n
                )),
                t.recaptchaVerifier.verify();
            }
          } catch (e) {
            console.log(e);
          }
        }),
        nr(this, "sendOtpHandler", function (e) {
          console.log("error msg remain");
          var n = t.updateActiveOption(e),
            r = n.activeInput.value,
            i = "",
            o = t.validateUserName(r, n.activeType, e);
          if (!o || !o.flag) return (i = o.msg), void t.showToastBox(e, i, !1);
          t.showLoader(e),
            t.otpAction("sendOTP", e),
            t.updateMobile(e, n),
            t.showOtpBox(e, n);
        }),
        nr(this, "showOtpBox", function (e, n) {
          (e.querySelector(".otp-input-main").value = ""),
            e.querySelector(".login-box").classList.add("hideBox"),
            e.querySelector(".verify-box").classList.remove("hideBox");
          var r = e.querySelector(".verify-box-details span");
          if ((t.countDownStart(e), r)) {
            var i = "Mobile number";
            switch (n.activeType) {
              case "whatsapp":
                i = "Whatsapp number";
                break;
              case "email":
                i = "Email id";
            }
            r.textContent = i;
          }
          t.showLoader(e);
        }),
        (this.version = "5"),
        (this.appUrl =
          "https://omqkhavcch.execute-api.ap-south-1.amazonaws.com/simplyotplogin/v" +
          this.version +
          "/otp"),
        (this.checkout_url = ""),
        (this.session_otp_id = ""),
        (window.simplyOtp = window.simplyOtp || {}),
        (this.selectedCountry = null | simplyOtp.settings.selectedCountry),
        (this.events = ["paste", "keydown", "keypress", "keyup", "onchange"]),
        (this.settings = simplyOtp.settings),
        (this.firebaseToken = ""),
        (this.recaptchaVerifier = null),
        (this.recaptchaVerifierComponent = 1),
        (this.totalAttemptWithSendOTP = 2),
        this.createLoginForm(),
        this.clickEvents(),
        this.setInputEvent(),
        this.generateFireBaseToken(),
        this.setDefaultSelectedCountry();
    });
    (window.simplyOtp.initializeSimplyOtp = function () {
      new Qn(), window.simplyOtp.initializeCss();
      var e = document.getElementById("myCss"),
        t = document.querySelectorAll(".olWrapper");
      if (e && t.length > 0) {
        if (
          (t.forEach(function (e) {
            return (e.style.display = "flex");
          }),
          simplyOtp.myFirebaseApi)
        ) {
          var n = JSON.parse(simplyOtp.myFirebaseApi);
          window.firebaseApp = (function (e, t = {}) {
            if ("object" != typeof t) {
              t = { name: t };
            }
            const n = Object.assign(
                { name: "[DEFAULT]", automaticDataCollectionEnabled: !1 },
                t
              ),
              i = n.name;
            if ("string" != typeof i || !i)
              throw U.create("bad-app-name", { appName: String(i) });
            const o = R.get(i);
            if (o) {
              if (Object(r.g)(e, o.options) && Object(r.g)(n, o.config))
                return o;
              throw U.create("duplicate-app", { appName: i });
            }
            const a = new s(i);
            for (const e of M.values()) a.addComponent(e);
            const c = new q(e, n, a);
            return R.set(i, c), c;
          })(n);
        }
        new rr();
      }
    }),
      setTimeout(function () {
        window.simplyOtp.initializeSimplyOtp();
      }, 1e3);
  },
]);

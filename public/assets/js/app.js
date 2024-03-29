!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (x, e) {
  "use strict";
  var t = [],
    C = x.document,
    i = Object.getPrototypeOf,
    a = t.slice,
    g = t.concat,
    l = t.push,
    r = t.indexOf,
    n = {},
    o = n.toString,
    m = n.hasOwnProperty,
    s = m.toString,
    u = s.call(Object),
    v = {},
    y = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
    _ = function (e) {
      return null != e && e === e.window;
    },
    c = { type: !0, src: !0, noModule: !0 };
  function b(e, t, n) {
    var i,
      r = (t = t || C).createElement("script");
    if (((r.text = e), n)) for (i in c) n[i] && (r[i] = n[i]);
    t.head.appendChild(r).parentNode.removeChild(r);
  }
  function E(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? n[o.call(e)] || "object"
      : typeof e;
  }
  var f = "3.3.1",
    T = function (e, t) {
      return new T.fn.init(e, t);
    },
    h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  function d(e) {
    var t = !!e && "length" in e && e.length,
      n = E(e);
    return (
      !y(e) &&
      !_(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (T.fn = T.prototype =
    {
      jquery: f,
      constructor: T,
      length: 0,
      toArray: function () {
        return a.call(this);
      },
      get: function (e) {
        return null == e
          ? a.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = T.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return T.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          T.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(a.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: l,
      sort: t.sort,
      splice: t.splice,
    }),
    (T.extend = T.fn.extend =
      function () {
        var e,
          t,
          n,
          i,
          r,
          o,
          s = arguments[0] || {},
          a = 1,
          l = arguments.length,
          u = !1;
        for (
          "boolean" == typeof s && ((u = s), (s = arguments[a] || {}), a++),
            "object" == typeof s || y(s) || (s = {}),
            a === l && ((s = this), a--);
          a < l;
          a++
        )
          if (null != (e = arguments[a]))
            for (t in e)
              (n = s[t]),
                s !== (i = e[t]) &&
                  (u && i && (T.isPlainObject(i) || (r = Array.isArray(i)))
                    ? (r
                        ? ((r = !1), (o = n && Array.isArray(n) ? n : []))
                        : (o = n && T.isPlainObject(n) ? n : {}),
                      (s[t] = T.extend(u, o, i)))
                    : void 0 !== i && (s[t] = i));
        return s;
      }),
    T.extend({
      expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== o.call(e)) &&
          (!(t = i(e)) ||
            ("function" ==
              typeof (n = m.call(t, "constructor") && t.constructor) &&
              s.call(n) === u))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e) {
        b(e);
      },
      each: function (e, t) {
        var n,
          i = 0;
        if (d(e))
          for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
        else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(h, "");
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (d(Object(e))
              ? T.merge(n, "string" == typeof e ? [e] : e)
              : l.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : r.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
        return (e.length = r), e;
      },
      grep: function (e, t, n) {
        for (var i = [], r = 0, o = e.length, s = !n; r < o; r++)
          !t(e[r], r) !== s && i.push(e[r]);
        return i;
      },
      map: function (e, t, n) {
        var i,
          r,
          o = 0,
          s = [];
        if (d(e))
          for (i = e.length; o < i; o++)
            null != (r = t(e[o], o, n)) && s.push(r);
        else for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
        return g.apply([], s);
      },
      guid: 1,
      support: v,
    }),
    "function" == typeof Symbol && (T.fn[Symbol.iterator] = t[Symbol.iterator]),
    T.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var p = (function (n) {
    var e,
      d,
      b,
      o,
      r,
      p,
      f,
      g,
      E,
      l,
      u,
      w,
      x,
      s,
      C,
      m,
      a,
      c,
      v,
      T = "sizzle" + 1 * new Date(),
      y = n.document,
      S = 0,
      i = 0,
      h = se(),
      _ = se(),
      D = se(),
      A = function (e, t) {
        return e === t && (u = !0), 0;
      },
      N = {}.hasOwnProperty,
      t = [],
      k = t.pop,
      I = t.push,
      j = t.push,
      O = t.slice,
      L = function (e, t) {
        for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
        return -1;
      },
      H =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      P = "[\\x20\\t\\r\\n\\f]",
      R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      M =
        "\\[" +
        P +
        "*(" +
        R +
        ")(?:" +
        P +
        "*([*^$|!~]?=)" +
        P +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        R +
        "))|)" +
        P +
        "*\\]",
      q =
        ":(" +
        R +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        M +
        ")*)|.*)\\)|)",
      W = new RegExp(P + "+", "g"),
      B = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
      F = new RegExp("^" + P + "*," + P + "*"),
      U = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
      $ = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]", "g"),
      K = new RegExp(q),
      Q = new RegExp("^" + R + "$"),
      z = {
        ID: new RegExp("^#(" + R + ")"),
        CLASS: new RegExp("^\\.(" + R + ")"),
        TAG: new RegExp("^(" + R + "|[*])"),
        ATTR: new RegExp("^" + M),
        PSEUDO: new RegExp("^" + q),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            P +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            P +
            "*(?:([+-]|)" +
            P +
            "*(\\d+)|))" +
            P +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + H + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            P +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            P +
            "*((?:-\\d)?\\d*)" +
            P +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      V = /^(?:input|select|textarea|button)$/i,
      Y = /^h\d$/i,
      X = /^[^{]+\{\s*\[native \w/,
      G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      Z = /[+~]/,
      J = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
      ee = function (e, t, n) {
        var i = "0x" + t - 65536;
        return i != i || n
          ? t
          : i < 0
          ? String.fromCharCode(i + 65536)
          : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
      },
      te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ne = function (e, t) {
        return t
          ? "\0" === e
            ? "�"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      ie = function () {
        w();
      },
      re = ye(
        function (e) {
          return !0 === e.disabled && ("form" in e || "label" in e);
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      j.apply((t = O.call(y.childNodes)), y.childNodes),
        t[y.childNodes.length].nodeType;
    } catch (e) {
      j = {
        apply: t.length
          ? function (e, t) {
              I.apply(e, O.call(t));
            }
          : function (e, t) {
              for (var n = e.length, i = 0; (e[n++] = t[i++]); );
              e.length = n - 1;
            },
      };
    }
    function oe(e, t, n, i) {
      var r,
        o,
        s,
        a,
        l,
        u,
        c,
        f = t && t.ownerDocument,
        h = t ? t.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof e || !e || (1 !== h && 9 !== h && 11 !== h))
      )
        return n;
      if (
        !i &&
        ((t ? t.ownerDocument || t : y) !== x && w(t), (t = t || x), C)
      ) {
        if (11 !== h && (l = G.exec(e)))
          if ((r = l[1])) {
            if (9 === h) {
              if (!(s = t.getElementById(r))) return n;
              if (s.id === r) return n.push(s), n;
            } else if (f && (s = f.getElementById(r)) && v(t, s) && s.id === r)
              return n.push(s), n;
          } else {
            if (l[2]) return j.apply(n, t.getElementsByTagName(e)), n;
            if (
              (r = l[3]) &&
              d.getElementsByClassName &&
              t.getElementsByClassName
            )
              return j.apply(n, t.getElementsByClassName(r)), n;
          }
        if (d.qsa && !D[e + " "] && (!m || !m.test(e))) {
          if (1 !== h) (f = t), (c = e);
          else if ("object" !== t.nodeName.toLowerCase()) {
            for (
              (a = t.getAttribute("id"))
                ? (a = a.replace(te, ne))
                : t.setAttribute("id", (a = T)),
                o = (u = p(e)).length;
              o--;

            )
              u[o] = "#" + a + " " + ve(u[o]);
            (c = u.join(",")), (f = (Z.test(e) && ge(t.parentNode)) || t);
          }
          if (c)
            try {
              return j.apply(n, f.querySelectorAll(c)), n;
            } catch (e) {
            } finally {
              a === T && t.removeAttribute("id");
            }
        }
      }
      return g(e.replace(B, "$1"), t, n, i);
    }
    function se() {
      var i = [];
      return function e(t, n) {
        return (
          i.push(t + " ") > b.cacheLength && delete e[i.shift()],
          (e[t + " "] = n)
        );
      };
    }
    function ae(e) {
      return (e[T] = !0), e;
    }
    function le(e) {
      var t = x.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function ue(e, t) {
      for (var n = e.split("|"), i = n.length; i--; ) b.attrHandle[n[i]] = t;
    }
    function ce(e, t) {
      var n = t && e,
        i =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (i) return i;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function fe(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function de(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && re(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function pe(s) {
      return ae(function (o) {
        return (
          (o = +o),
          ae(function (e, t) {
            for (var n, i = s([], e.length, o), r = i.length; r--; )
              e[(n = i[r])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function ge(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    for (e in ((d = oe.support = {}),
    (r = oe.isXML =
      function (e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return !!t && "HTML" !== t.nodeName;
      }),
    (w = oe.setDocument =
      function (e) {
        var t,
          n,
          i = e ? e.ownerDocument || e : y;
        return (
          i !== x &&
            9 === i.nodeType &&
            i.documentElement &&
            ((s = (x = i).documentElement),
            (C = !r(x)),
            y !== x &&
              (n = x.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener("unload", ie, !1)
                : n.attachEvent && n.attachEvent("onunload", ie)),
            (d.attributes = le(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (d.getElementsByTagName = le(function (e) {
              return (
                e.appendChild(x.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (d.getElementsByClassName = X.test(x.getElementsByClassName)),
            (d.getById = le(function (e) {
              return (
                (s.appendChild(e).id = T),
                !x.getElementsByName || !x.getElementsByName(T).length
              );
            })),
            d.getById
              ? ((b.filter.ID = function (e) {
                  var t = e.replace(J, ee);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && C) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((b.filter.ID = function (e) {
                  var n = e.replace(J, ee);
                  return function (e) {
                    var t =
                      void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && C) {
                    var n,
                      i,
                      r,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                      for (r = t.getElementsByName(e), i = 0; (o = r[i++]); )
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (b.find.TAG = d.getElementsByTagName
              ? function (e, t) {
                  return void 0 !== t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : d.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    i = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                    return i;
                  }
                  return o;
                }),
            (b.find.CLASS =
              d.getElementsByClassName &&
              function (e, t) {
                if (void 0 !== t.getElementsByClassName && C)
                  return t.getElementsByClassName(e);
              }),
            (a = []),
            (m = []),
            (d.qsa = X.test(x.querySelectorAll)) &&
              (le(function (e) {
                (s.appendChild(e).innerHTML =
                  "<a id='" +
                  T +
                  "'></a><select id='" +
                  T +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    m.push("[*^$]=" + P + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    m.push("\\[" + P + "*(?:value|" + H + ")"),
                  e.querySelectorAll("[id~=" + T + "-]").length || m.push("~="),
                  e.querySelectorAll(":checked").length || m.push(":checked"),
                  e.querySelectorAll("a#" + T + "+*").length ||
                    m.push(".#.+[+~]");
              }),
              le(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = x.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    m.push("name" + P + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    m.push(":enabled", ":disabled"),
                  (s.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    m.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  m.push(",.*:");
              })),
            (d.matchesSelector = X.test(
              (c =
                s.matches ||
                s.webkitMatchesSelector ||
                s.mozMatchesSelector ||
                s.oMatchesSelector ||
                s.msMatchesSelector)
            )) &&
              le(function (e) {
                (d.disconnectedMatch = c.call(e, "*")),
                  c.call(e, "[s!='']:x"),
                  a.push("!=", q);
              }),
            (m = m.length && new RegExp(m.join("|"))),
            (a = a.length && new RegExp(a.join("|"))),
            (t = X.test(s.compareDocumentPosition)),
            (v =
              t || X.test(s.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      i = t && t.parentNode;
                    return (
                      e === i ||
                      !(
                        !i ||
                        1 !== i.nodeType ||
                        !(n.contains
                          ? n.contains(i)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(i))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                    return !1;
                  }),
            (A = t
              ? function (e, t) {
                  if (e === t) return (u = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) === (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!d.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e === x || (e.ownerDocument === y && v(y, e))
                        ? -1
                        : t === x || (t.ownerDocument === y && v(y, t))
                        ? 1
                        : l
                        ? L(l, e) - L(l, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (u = !0), 0;
                  var n,
                    i = 0,
                    r = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    a = [t];
                  if (!r || !o)
                    return e === x
                      ? -1
                      : t === x
                      ? 1
                      : r
                      ? -1
                      : o
                      ? 1
                      : l
                      ? L(l, e) - L(l, t)
                      : 0;
                  if (r === o) return ce(e, t);
                  for (n = e; (n = n.parentNode); ) s.unshift(n);
                  for (n = t; (n = n.parentNode); ) a.unshift(n);
                  for (; s[i] === a[i]; ) i++;
                  return i
                    ? ce(s[i], a[i])
                    : s[i] === y
                    ? -1
                    : a[i] === y
                    ? 1
                    : 0;
                })),
          x
        );
      }),
    (oe.matches = function (e, t) {
      return oe(e, null, null, t);
    }),
    (oe.matchesSelector = function (e, t) {
      if (
        ((e.ownerDocument || e) !== x && w(e),
        (t = t.replace($, "='$1']")),
        d.matchesSelector &&
          C &&
          !D[t + " "] &&
          (!a || !a.test(t)) &&
          (!m || !m.test(t)))
      )
        try {
          var n = c.call(e, t);
          if (
            n ||
            d.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {}
      return 0 < oe(t, x, null, [e]).length;
    }),
    (oe.contains = function (e, t) {
      return (e.ownerDocument || e) !== x && w(e), v(e, t);
    }),
    (oe.attr = function (e, t) {
      (e.ownerDocument || e) !== x && w(e);
      var n = b.attrHandle[t.toLowerCase()],
        i = n && N.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
      return void 0 !== i
        ? i
        : d.attributes || !C
        ? e.getAttribute(t)
        : (i = e.getAttributeNode(t)) && i.specified
        ? i.value
        : null;
    }),
    (oe.escape = function (e) {
      return (e + "").replace(te, ne);
    }),
    (oe.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (oe.uniqueSort = function (e) {
      var t,
        n = [],
        i = 0,
        r = 0;
      if (
        ((u = !d.detectDuplicates),
        (l = !d.sortStable && e.slice(0)),
        e.sort(A),
        u)
      ) {
        for (; (t = e[r++]); ) t === e[r] && (i = n.push(r));
        for (; i--; ) e.splice(n[i], 1);
      }
      return (l = null), e;
    }),
    (o = oe.getText =
      function (e) {
        var t,
          n = "",
          i = 0,
          r = e.nodeType;
        if (r) {
          if (1 === r || 9 === r || 11 === r) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === r || 4 === r) return e.nodeValue;
        } else for (; (t = e[i++]); ) n += o(t);
        return n;
      }),
    ((b = oe.selectors =
      {
        cacheLength: 50,
        createPseudo: ae,
        match: z,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(J, ee)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(J, ee)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || oe.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && oe.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return z.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    K.test(n) &&
                    (t = p(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(J, ee).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = h[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) &&
                h(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (n, i, r) {
            return function (e) {
              var t = oe.attr(e, n);
              return null == t
                ? "!=" === i
                : !i ||
                    ((t += ""),
                    "=" === i
                      ? t === r
                      : "!=" === i
                      ? t !== r
                      : "^=" === i
                      ? r && 0 === t.indexOf(r)
                      : "*=" === i
                      ? r && -1 < t.indexOf(r)
                      : "$=" === i
                      ? r && t.slice(-r.length) === r
                      : "~=" === i
                      ? -1 < (" " + t.replace(W, " ") + " ").indexOf(r)
                      : "|=" === i &&
                        (t === r || t.slice(0, r.length + 1) === r + "-"));
            };
          },
          CHILD: function (p, e, t, g, m) {
            var v = "nth" !== p.slice(0, 3),
              y = "last" !== p.slice(-4),
              _ = "of-type" === e;
            return 1 === g && 0 === m
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var i,
                    r,
                    o,
                    s,
                    a,
                    l,
                    u = v !== y ? "nextSibling" : "previousSibling",
                    c = e.parentNode,
                    f = _ && e.nodeName.toLowerCase(),
                    h = !n && !_,
                    d = !1;
                  if (c) {
                    if (v) {
                      for (; u; ) {
                        for (s = e; (s = s[u]); )
                          if (
                            _
                              ? s.nodeName.toLowerCase() === f
                              : 1 === s.nodeType
                          )
                            return !1;
                        l = u = "only" === p && !l && "nextSibling";
                      }
                      return !0;
                    }
                    if (((l = [y ? c.firstChild : c.lastChild]), y && h)) {
                      for (
                        d =
                          (a =
                            (i =
                              (r =
                                (o = (s = c)[T] || (s[T] = {}))[s.uniqueID] ||
                                (o[s.uniqueID] = {}))[p] || [])[0] === S &&
                            i[1]) && i[2],
                          s = a && c.childNodes[a];
                        (s = (++a && s && s[u]) || (d = a = 0) || l.pop());

                      )
                        if (1 === s.nodeType && ++d && s === e) {
                          r[p] = [S, a, d];
                          break;
                        }
                    } else if (
                      (h &&
                        (d = a =
                          (i =
                            (r =
                              (o = (s = e)[T] || (s[T] = {}))[s.uniqueID] ||
                              (o[s.uniqueID] = {}))[p] || [])[0] === S && i[1]),
                      !1 === d)
                    )
                      for (
                        ;
                        (s = (++a && s && s[u]) || (d = a = 0) || l.pop()) &&
                        ((_
                          ? s.nodeName.toLowerCase() !== f
                          : 1 !== s.nodeType) ||
                          !++d ||
                          (h &&
                            ((r =
                              (o = s[T] || (s[T] = {}))[s.uniqueID] ||
                              (o[s.uniqueID] = {}))[p] = [S, d]),
                          s !== e));

                      );
                    return (d -= m) === g || (d % g == 0 && 0 <= d / g);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              s =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                oe.error("unsupported pseudo: " + e);
            return s[T]
              ? s(o)
              : 1 < s.length
              ? ((t = [e, e, "", o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? ae(function (e, t) {
                      for (var n, i = s(e, o), r = i.length; r--; )
                        e[(n = L(e, i[r]))] = !(t[n] = i[r]);
                    })
                  : function (e) {
                      return s(e, 0, t);
                    })
              : s;
          },
        },
        pseudos: {
          not: ae(function (e) {
            var i = [],
              r = [],
              a = f(e.replace(B, "$1"));
            return a[T]
              ? ae(function (e, t, n, i) {
                  for (var r, o = a(e, null, i, []), s = e.length; s--; )
                    (r = o[s]) && (e[s] = !(t[s] = r));
                })
              : function (e, t, n) {
                  return (i[0] = e), a(i, null, n, r), (i[0] = null), !r.pop();
                };
          }),
          has: ae(function (t) {
            return function (e) {
              return 0 < oe(t, e).length;
            };
          }),
          contains: ae(function (t) {
            return (
              (t = t.replace(J, ee)),
              function (e) {
                return -1 < (e.textContent || e.innerText || o(e)).indexOf(t);
              }
            );
          }),
          lang: ae(function (n) {
            return (
              Q.test(n || "") || oe.error("unsupported lang: " + n),
              (n = n.replace(J, ee).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = C
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === s;
          },
          focus: function (e) {
            return (
              e === x.activeElement &&
              (!x.hasFocus || x.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: de(!1),
          disabled: de(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return Y.test(e.nodeName);
          },
          input: function (e) {
            return V.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: pe(function () {
            return [0];
          }),
          last: pe(function (e, t) {
            return [t - 1];
          }),
          eq: pe(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: pe(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: pe(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: pe(function (e, t, n) {
            for (var i = n < 0 ? n + t : n; 0 <= --i; ) e.push(i);
            return e;
          }),
          gt: pe(function (e, t, n) {
            for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = fe(e);
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
    function me() {}
    function ve(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
      return i;
    }
    function ye(a, e, t) {
      var l = e.dir,
        u = e.next,
        c = u || l,
        f = t && "parentNode" === c,
        h = i++;
      return e.first
        ? function (e, t, n) {
            for (; (e = e[l]); ) if (1 === e.nodeType || f) return a(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var i,
              r,
              o,
              s = [S, h];
            if (n) {
              for (; (e = e[l]); )
                if ((1 === e.nodeType || f) && a(e, t, n)) return !0;
            } else
              for (; (e = e[l]); )
                if (1 === e.nodeType || f)
                  if (
                    ((r =
                      (o = e[T] || (e[T] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {})),
                    u && u === e.nodeName.toLowerCase())
                  )
                    e = e[l] || e;
                  else {
                    if ((i = r[c]) && i[0] === S && i[1] === h)
                      return (s[2] = i[2]);
                    if (((r[c] = s)[2] = a(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function _e(r) {
      return 1 < r.length
        ? function (e, t, n) {
            for (var i = r.length; i--; ) if (!r[i](e, t, n)) return !1;
            return !0;
          }
        : r[0];
    }
    function be(e, t, n, i, r) {
      for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)
        (o = e[a]) && ((n && !n(o, i, r)) || (s.push(o), u && t.push(a)));
      return s;
    }
    function Ee(d, p, g, m, v, e) {
      return (
        m && !m[T] && (m = Ee(m)),
        v && !v[T] && (v = Ee(v, e)),
        ae(function (e, t, n, i) {
          var r,
            o,
            s,
            a = [],
            l = [],
            u = t.length,
            c =
              e ||
              (function (e, t, n) {
                for (var i = 0, r = t.length; i < r; i++) oe(e, t[i], n);
                return n;
              })(p || "*", n.nodeType ? [n] : n, []),
            f = !d || (!e && p) ? c : be(c, a, d, n, i),
            h = g ? (v || (e ? d : u || m) ? [] : t) : f;
          if ((g && g(f, h, n, i), m))
            for (r = be(h, l), m(r, [], n, i), o = r.length; o--; )
              (s = r[o]) && (h[l[o]] = !(f[l[o]] = s));
          if (e) {
            if (v || d) {
              if (v) {
                for (r = [], o = h.length; o--; )
                  (s = h[o]) && r.push((f[o] = s));
                v(null, (h = []), r, i);
              }
              for (o = h.length; o--; )
                (s = h[o]) &&
                  -1 < (r = v ? L(e, s) : a[o]) &&
                  (e[r] = !(t[r] = s));
            }
          } else (h = be(h === t ? h.splice(u, h.length) : h)), v ? v(null, t, h, i) : j.apply(t, h);
        })
      );
    }
    function we(e) {
      for (
        var r,
          t,
          n,
          i = e.length,
          o = b.relative[e[0].type],
          s = o || b.relative[" "],
          a = o ? 1 : 0,
          l = ye(
            function (e) {
              return e === r;
            },
            s,
            !0
          ),
          u = ye(
            function (e) {
              return -1 < L(r, e);
            },
            s,
            !0
          ),
          c = [
            function (e, t, n) {
              var i =
                (!o && (n || t !== E)) ||
                ((r = t).nodeType ? l(e, t, n) : u(e, t, n));
              return (r = null), i;
            },
          ];
        a < i;
        a++
      )
        if ((t = b.relative[e[a].type])) c = [ye(_e(c), t)];
        else {
          if ((t = b.filter[e[a].type].apply(null, e[a].matches))[T]) {
            for (n = ++a; n < i && !b.relative[e[n].type]; n++);
            return Ee(
              1 < a && _e(c),
              1 < a &&
                ve(
                  e
                    .slice(0, a - 1)
                    .concat({ value: " " === e[a - 2].type ? "*" : "" })
                ).replace(B, "$1"),
              t,
              a < n && we(e.slice(a, n)),
              n < i && we((e = e.slice(n))),
              n < i && ve(e)
            );
          }
          c.push(t);
        }
      return _e(c);
    }
    return (
      (me.prototype = b.filters = b.pseudos),
      (b.setFilters = new me()),
      (p = oe.tokenize =
        function (e, t) {
          var n,
            i,
            r,
            o,
            s,
            a,
            l,
            u = _[e + " "];
          if (u) return t ? 0 : u.slice(0);
          for (s = e, a = [], l = b.preFilter; s; ) {
            for (o in ((n && !(i = F.exec(s))) ||
              (i && (s = s.slice(i[0].length) || s), a.push((r = []))),
            (n = !1),
            (i = U.exec(s)) &&
              ((n = i.shift()),
              r.push({ value: n, type: i[0].replace(B, " ") }),
              (s = s.slice(n.length))),
            b.filter))
              !(i = z[o].exec(s)) ||
                (l[o] && !(i = l[o](i))) ||
                ((n = i.shift()),
                r.push({ value: n, type: o, matches: i }),
                (s = s.slice(n.length)));
            if (!n) break;
          }
          return t ? s.length : s ? oe.error(e) : _(e, a).slice(0);
        }),
      (f = oe.compile =
        function (e, t) {
          var n,
            m,
            v,
            y,
            _,
            i,
            r = [],
            o = [],
            s = D[e + " "];
          if (!s) {
            for (t || (t = p(e)), n = t.length; n--; )
              (s = we(t[n]))[T] ? r.push(s) : o.push(s);
            (s = D(
              e,
              ((m = o),
              (y = 0 < (v = r).length),
              (_ = 0 < m.length),
              (i = function (e, t, n, i, r) {
                var o,
                  s,
                  a,
                  l = 0,
                  u = "0",
                  c = e && [],
                  f = [],
                  h = E,
                  d = e || (_ && b.find.TAG("*", r)),
                  p = (S += null == h ? 1 : Math.random() || 0.1),
                  g = d.length;
                for (
                  r && (E = t === x || t || r);
                  u !== g && null != (o = d[u]);
                  u++
                ) {
                  if (_ && o) {
                    for (
                      s = 0, t || o.ownerDocument === x || (w(o), (n = !C));
                      (a = m[s++]);

                    )
                      if (a(o, t || x, n)) {
                        i.push(o);
                        break;
                      }
                    r && (S = p);
                  }
                  y && ((o = !a && o) && l--, e && c.push(o));
                }
                if (((l += u), y && u !== l)) {
                  for (s = 0; (a = v[s++]); ) a(c, f, t, n);
                  if (e) {
                    if (0 < l) for (; u--; ) c[u] || f[u] || (f[u] = k.call(i));
                    f = be(f);
                  }
                  j.apply(i, f),
                    r &&
                      !e &&
                      0 < f.length &&
                      1 < l + v.length &&
                      oe.uniqueSort(i);
                }
                return r && ((S = p), (E = h)), c;
              }),
              y ? ae(i) : i)
            )).selector = e;
          }
          return s;
        }),
      (g = oe.select =
        function (e, t, n, i) {
          var r,
            o,
            s,
            a,
            l,
            u = "function" == typeof e && e,
            c = !i && p((e = u.selector || e));
          if (((n = n || []), 1 === c.length)) {
            if (
              2 < (o = c[0] = c[0].slice(0)).length &&
              "ID" === (s = o[0]).type &&
              9 === t.nodeType &&
              C &&
              b.relative[o[1].type]
            ) {
              if (!(t = (b.find.ID(s.matches[0].replace(J, ee), t) || [])[0]))
                return n;
              u && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            for (
              r = z.needsContext.test(e) ? 0 : o.length;
              r-- && ((s = o[r]), !b.relative[(a = s.type)]);

            )
              if (
                (l = b.find[a]) &&
                (i = l(
                  s.matches[0].replace(J, ee),
                  (Z.test(o[0].type) && ge(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(r, 1), !(e = i.length && ve(o))))
                  return j.apply(n, i), n;
                break;
              }
          }
          return (
            (u || f(e, c))(
              i,
              t,
              !C,
              n,
              !t || (Z.test(e) && ge(t.parentNode)) || t
            ),
            n
          );
        }),
      (d.sortStable = T.split("").sort(A).join("") === T),
      (d.detectDuplicates = !!u),
      w(),
      (d.sortDetached = le(function (e) {
        return 1 & e.compareDocumentPosition(x.createElement("fieldset"));
      })),
      le(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        ue("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (d.attributes &&
        le(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        ue("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      le(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        ue(H, function (e, t, n) {
          var i;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (i = e.getAttributeNode(t)) && i.specified
              ? i.value
              : null;
        }),
      oe
    );
  })(x);
  (T.find = p),
    (T.expr = p.selectors),
    (T.expr[":"] = T.expr.pseudos),
    (T.uniqueSort = T.unique = p.uniqueSort),
    (T.text = p.getText),
    (T.isXMLDoc = p.isXML),
    (T.contains = p.contains),
    (T.escapeSelector = p.escape);
  var w = function (e, t, n) {
      for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (r && T(e).is(n)) break;
          i.push(e);
        }
      return i;
    },
    S = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    D = T.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function k(e, n, i) {
    return y(n)
      ? T.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== i;
        })
      : n.nodeType
      ? T.grep(e, function (e) {
          return (e === n) !== i;
        })
      : "string" != typeof n
      ? T.grep(e, function (e) {
          return -1 < r.call(n, e) !== i;
        })
      : T.filter(n, e, i);
  }
  (T.filter = function (e, t, n) {
    var i = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === i.nodeType
        ? T.find.matchesSelector(i, e)
          ? [i]
          : []
        : T.find.matches(
            e,
            T.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    T.fn.extend({
      find: function (e) {
        var t,
          n,
          i = this.length,
          r = this;
        if ("string" != typeof e)
          return this.pushStack(
            T(e).filter(function () {
              for (t = 0; t < i; t++) if (T.contains(r[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < i; t++) T.find(e, r[t], n);
        return 1 < i ? T.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(k(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(k(this, e || [], !0));
      },
      is: function (e) {
        return !!k(this, "string" == typeof e && D.test(e) ? T(e) : e || [], !1)
          .length;
      },
    });
  var I,
    j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((T.fn.init = function (e, t, n) {
    var i, r;
    if (!e) return this;
    if (((n = n || I), "string" == typeof e)) {
      if (
        !(i =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : j.exec(e)) ||
        (!i[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (
          ((t = t instanceof T ? t[0] : t),
          T.merge(
            this,
            T.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : C, !0)
          ),
          N.test(i[1]) && T.isPlainObject(t))
        )
          for (i in t) y(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this;
      }
      return (
        (r = C.getElementById(i[2])) && ((this[0] = r), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : y(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(T)
      : T.makeArray(e, this);
  }).prototype = T.fn),
    (I = T(C));
  var O = /^(?:parents|prev(?:Until|All))/,
    L = { children: !0, contents: !0, next: !0, prev: !0 };
  function H(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  T.fn.extend({
    has: function (e) {
      var t = T(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (T.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        i = 0,
        r = this.length,
        o = [],
        s = "string" != typeof e && T(e);
      if (!D.test(e))
        for (; i < r; i++)
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (s
                ? -1 < s.index(n)
                : 1 === n.nodeType && T.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? T.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? r.call(T(e), this[0])
          : r.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    T.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return w(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return w(e, "parentNode", n);
        },
        next: function (e) {
          return H(e, "nextSibling");
        },
        prev: function (e) {
          return H(e, "previousSibling");
        },
        nextAll: function (e) {
          return w(e, "nextSibling");
        },
        prevAll: function (e) {
          return w(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return w(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return w(e, "previousSibling", n);
        },
        siblings: function (e) {
          return S((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return S(e.firstChild);
        },
        contents: function (e) {
          return A(e, "iframe")
            ? e.contentDocument
            : (A(e, "template") && (e = e.content || e),
              T.merge([], e.childNodes));
        },
      },
      function (i, r) {
        T.fn[i] = function (e, t) {
          var n = T.map(this, r, e);
          return (
            "Until" !== i.slice(-5) && (t = e),
            t && "string" == typeof t && (n = T.filter(t, n)),
            1 < this.length &&
              (L[i] || T.uniqueSort(n), O.test(i) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var P = /[^\x20\t\r\n\f]+/g;
  function R(e) {
    return e;
  }
  function M(e) {
    throw e;
  }
  function q(e, t, n, i) {
    var r;
    try {
      e && y((r = e.promise))
        ? r.call(e).done(t).fail(n)
        : e && y((r = e.then))
        ? r.call(e, t, n)
        : t.apply(void 0, [e].slice(i));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (T.Callbacks = function (i) {
    var e, n;
    i =
      "string" == typeof i
        ? ((e = i),
          (n = {}),
          T.each(e.match(P) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : T.extend({}, i);
    var r,
      t,
      o,
      s,
      a = [],
      l = [],
      u = -1,
      c = function () {
        for (s = s || i.once, o = r = !0; l.length; u = -1)
          for (t = l.shift(); ++u < a.length; )
            !1 === a[u].apply(t[0], t[1]) &&
              i.stopOnFalse &&
              ((u = a.length), (t = !1));
        i.memory || (t = !1), (r = !1), s && (a = t ? [] : "");
      },
      f = {
        add: function () {
          return (
            a &&
              (t && !r && ((u = a.length - 1), l.push(t)),
              (function n(e) {
                T.each(e, function (e, t) {
                  y(t)
                    ? (i.unique && f.has(t)) || a.push(t)
                    : t && t.length && "string" !== E(t) && n(t);
                });
              })(arguments),
              t && !r && c()),
            this
          );
        },
        remove: function () {
          return (
            T.each(arguments, function (e, t) {
              for (var n; -1 < (n = T.inArray(t, a, n)); )
                a.splice(n, 1), n <= u && u--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < T.inArray(e, a) : 0 < a.length;
        },
        empty: function () {
          return a && (a = []), this;
        },
        disable: function () {
          return (s = l = []), (a = t = ""), this;
        },
        disabled: function () {
          return !a;
        },
        lock: function () {
          return (s = l = []), t || r || (a = t = ""), this;
        },
        locked: function () {
          return !!s;
        },
        fireWith: function (e, t) {
          return (
            s ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              l.push(t),
              r || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    T.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              T.Callbacks("memory"),
              T.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              T.Callbacks("once memory"),
              T.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              T.Callbacks("once memory"),
              T.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          r = "pending",
          s = {
            state: function () {
              return r;
            },
            always: function () {
              return a.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return s.then(null, e);
            },
            pipe: function () {
              var r = arguments;
              return T.Deferred(function (i) {
                T.each(o, function (e, t) {
                  var n = y(r[t[4]]) && r[t[4]];
                  a[t[1]](function () {
                    var e = n && n.apply(this, arguments);
                    e && y(e.promise)
                      ? e
                          .promise()
                          .progress(i.notify)
                          .done(i.resolve)
                          .fail(i.reject)
                      : i[t[0] + "With"](this, n ? [e] : arguments);
                  });
                }),
                  (r = null);
              }).promise();
            },
            then: function (t, n, i) {
              var l = 0;
              function u(r, o, s, a) {
                return function () {
                  var n = this,
                    i = arguments,
                    e = function () {
                      var e, t;
                      if (!(r < l)) {
                        if ((e = s.apply(n, i)) === o.promise())
                          throw new TypeError("Thenable self-resolution");
                        (t =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          y(t)
                            ? a
                              ? t.call(e, u(l, o, R, a), u(l, o, M, a))
                              : (l++,
                                t.call(
                                  e,
                                  u(l, o, R, a),
                                  u(l, o, M, a),
                                  u(l, o, R, o.notifyWith)
                                ))
                            : (s !== R && ((n = void 0), (i = [e])),
                              (a || o.resolveWith)(n, i));
                      }
                    },
                    t = a
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            T.Deferred.exceptionHook &&
                              T.Deferred.exceptionHook(e, t.stackTrace),
                              l <= r + 1 &&
                                (s !== M && ((n = void 0), (i = [e])),
                                o.rejectWith(n, i));
                          }
                        };
                  r
                    ? t()
                    : (T.Deferred.getStackHook &&
                        (t.stackTrace = T.Deferred.getStackHook()),
                      x.setTimeout(t));
                };
              }
              return T.Deferred(function (e) {
                o[0][3].add(u(0, e, y(i) ? i : R, e.notifyWith)),
                  o[1][3].add(u(0, e, y(t) ? t : R)),
                  o[2][3].add(u(0, e, y(n) ? n : M));
              }).promise();
            },
            promise: function (e) {
              return null != e ? T.extend(e, s) : s;
            },
          },
          a = {};
        return (
          T.each(o, function (e, t) {
            var n = t[2],
              i = t[5];
            (s[t[1]] = n.add),
              i &&
                n.add(
                  function () {
                    r = i;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (a[t[0]] = function () {
                return (
                  a[t[0] + "With"](this === a ? void 0 : this, arguments), this
                );
              }),
              (a[t[0] + "With"] = n.fireWith);
          }),
          s.promise(a),
          e && e.call(a, a),
          a
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          i = Array(t),
          r = a.call(arguments),
          o = T.Deferred(),
          s = function (t) {
            return function (e) {
              (i[t] = this),
                (r[t] = 1 < arguments.length ? a.call(arguments) : e),
                --n || o.resolveWith(i, r);
            };
          };
        if (
          n <= 1 &&
          (q(e, o.done(s(t)).resolve, o.reject, !n),
          "pending" === o.state() || y(r[t] && r[t].then))
        )
          return o.then();
        for (; t--; ) q(r[t], s(t), o.reject);
        return o.promise();
      },
    });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (T.Deferred.exceptionHook = function (e, t) {
    x.console &&
      x.console.warn &&
      e &&
      W.test(e.name) &&
      x.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (T.readyException = function (e) {
      x.setTimeout(function () {
        throw e;
      });
    });
  var B = T.Deferred();
  function F() {
    C.removeEventListener("DOMContentLoaded", F),
      x.removeEventListener("load", F),
      T.ready();
  }
  (T.fn.ready = function (e) {
    return (
      B.then(e).catch(function (e) {
        T.readyException(e);
      }),
      this
    );
  }),
    T.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --T.readyWait : T.isReady) ||
          ((T.isReady = !0) !== e && 0 < --T.readyWait) ||
          B.resolveWith(C, [T]);
      },
    }),
    (T.ready.then = B.then),
    "complete" === C.readyState ||
    ("loading" !== C.readyState && !C.documentElement.doScroll)
      ? x.setTimeout(T.ready)
      : (C.addEventListener("DOMContentLoaded", F),
        x.addEventListener("load", F));
  var U = function (e, t, n, i, r, o, s) {
      var a = 0,
        l = e.length,
        u = null == n;
      if ("object" === E(n))
        for (a in ((r = !0), n)) U(e, t, a, n[a], !0, o, s);
      else if (
        void 0 !== i &&
        ((r = !0),
        y(i) || (s = !0),
        u &&
          (s
            ? (t.call(e, i), (t = null))
            : ((u = t),
              (t = function (e, t, n) {
                return u.call(T(e), n);
              }))),
        t)
      )
        for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
      return r ? e : u ? t.call(e) : l ? t(e[0], n) : o;
    },
    $ = /^-ms-/,
    K = /-([a-z])/g;
  function Q(e, t) {
    return t.toUpperCase();
  }
  function z(e) {
    return e.replace($, "ms-").replace(K, Q);
  }
  var V = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function Y() {
    this.expando = T.expando + Y.uid++;
  }
  (Y.uid = 1),
    (Y.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            V(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var i,
          r = this.cache(e);
        if ("string" == typeof t) r[z(t)] = n;
        else for (i in t) r[z(i)] = t[i];
        return r;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][z(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          i = e[this.expando];
        if (void 0 !== i) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(z)
              : (t = z(t)) in i
              ? [t]
              : t.match(P) || []).length;
            for (; n--; ) delete i[t[n]];
          }
          (void 0 === t || T.isEmptyObject(i)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !T.isEmptyObject(t);
      },
    });
  var X = new Y(),
    G = new Y(),
    Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    J = /[A-Z]/g;
  function ee(e, t, n) {
    var i, r;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((i = "data-" + t.replace(J, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(i)))
      ) {
        try {
          n =
            "true" === (r = n) ||
            ("false" !== r &&
              ("null" === r
                ? null
                : r === +r + ""
                ? +r
                : Z.test(r)
                ? JSON.parse(r)
                : r));
        } catch (e) {}
        G.set(e, t, n);
      } else n = void 0;
    return n;
  }
  T.extend({
    hasData: function (e) {
      return G.hasData(e) || X.hasData(e);
    },
    data: function (e, t, n) {
      return G.access(e, t, n);
    },
    removeData: function (e, t) {
      G.remove(e, t);
    },
    _data: function (e, t, n) {
      return X.access(e, t, n);
    },
    _removeData: function (e, t) {
      X.remove(e, t);
    },
  }),
    T.fn.extend({
      data: function (n, e) {
        var t,
          i,
          r,
          o = this[0],
          s = o && o.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((r = G.get(o)), 1 === o.nodeType && !X.get(o, "hasDataAttrs"))
          ) {
            for (t = s.length; t--; )
              s[t] &&
                0 === (i = s[t].name).indexOf("data-") &&
                ((i = z(i.slice(5))), ee(o, i, r[i]));
            X.set(o, "hasDataAttrs", !0);
          }
          return r;
        }
        return "object" == typeof n
          ? this.each(function () {
              G.set(this, n);
            })
          : U(
              this,
              function (e) {
                var t;
                if (o && void 0 === e)
                  return void 0 !== (t = G.get(o, n))
                    ? t
                    : void 0 !== (t = ee(o, n))
                    ? t
                    : void 0;
                this.each(function () {
                  G.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          G.remove(this, e);
        });
      },
    }),
    T.extend({
      queue: function (e, t, n) {
        var i;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (i = X.get(e, t)),
            n &&
              (!i || Array.isArray(n)
                ? (i = X.access(e, t, T.makeArray(n)))
                : i.push(n)),
            i || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = T.queue(e, t),
          i = n.length,
          r = n.shift(),
          o = T._queueHooks(e, t);
        "inprogress" === r && ((r = n.shift()), i--),
          r &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            r.call(
              e,
              function () {
                T.dequeue(e, t);
              },
              o
            )),
          !i && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          X.get(e, n) ||
          X.access(e, n, {
            empty: T.Callbacks("once memory").add(function () {
              X.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    T.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? T.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = T.queue(this, t, n);
                T._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && T.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          T.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          i = 1,
          r = T.Deferred(),
          o = this,
          s = this.length,
          a = function () {
            --i || r.resolveWith(o, [o]);
          };
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          s--;

        )
          (n = X.get(o[s], e + "queueHooks")) &&
            n.empty &&
            (i++, n.empty.add(a));
        return a(), r.promise(t);
      },
    });
  var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
    ie = ["Top", "Right", "Bottom", "Left"],
    re = function (e, t) {
      return (
        "none" === (e = t || e).style.display ||
        ("" === e.style.display &&
          T.contains(e.ownerDocument, e) &&
          "none" === T.css(e, "display"))
      );
    },
    oe = function (e, t, n, i) {
      var r,
        o,
        s = {};
      for (o in t) (s[o] = e.style[o]), (e.style[o] = t[o]);
      for (o in ((r = n.apply(e, i || [])), t)) e.style[o] = s[o];
      return r;
    };
  function se(e, t, n, i) {
    var r,
      o,
      s = 20,
      a = i
        ? function () {
            return i.cur();
          }
        : function () {
            return T.css(e, t, "");
          },
      l = a(),
      u = (n && n[3]) || (T.cssNumber[t] ? "" : "px"),
      c = (T.cssNumber[t] || ("px" !== u && +l)) && ne.exec(T.css(e, t));
    if (c && c[3] !== u) {
      for (l /= 2, u = u || c[3], c = +l || 1; s--; )
        T.style(e, t, c + u),
          (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0),
          (c /= o);
      (c *= 2), T.style(e, t, c + u), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +l || 0),
        (r = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        i && ((i.unit = u), (i.start = c), (i.end = r))),
      r
    );
  }
  var ae = {};
  function le(e, t) {
    for (var n, i, r, o, s, a, l, u = [], c = 0, f = e.length; c < f; c++)
      (i = e[c]).style &&
        ((n = i.style.display),
        t
          ? ("none" === n &&
              ((u[c] = X.get(i, "display") || null),
              u[c] || (i.style.display = "")),
            "" === i.style.display &&
              re(i) &&
              (u[c] =
                ((l = s = o = void 0),
                (s = (r = i).ownerDocument),
                (a = r.nodeName),
                (l = ae[a]) ||
                  ((o = s.body.appendChild(s.createElement(a))),
                  (l = T.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === l && (l = "block"),
                  (ae[a] = l)))))
          : "none" !== n && ((u[c] = "none"), X.set(i, "display", n)));
    for (c = 0; c < f; c++) null != u[c] && (e[c].style.display = u[c]);
    return e;
  }
  T.fn.extend({
    show: function () {
      return le(this, !0);
    },
    hide: function () {
      return le(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            re(this) ? T(this).show() : T(this).hide();
          });
    },
  });
  var ue = /^(?:checkbox|radio)$/i,
    ce = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    fe = /^$|^module$|\/(?:java|ecma)script/i,
    he = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  function de(e, t) {
    var n;
    return (
      (n =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && A(e, t)) ? T.merge([e], n) : n
    );
  }
  function pe(e, t) {
    for (var n = 0, i = e.length; n < i; n++)
      X.set(e[n], "globalEval", !t || X.get(t[n], "globalEval"));
  }
  (he.optgroup = he.option),
    (he.tbody = he.tfoot = he.colgroup = he.caption = he.thead),
    (he.th = he.td);
  var ge,
    me,
    ve = /<|&#?\w+;/;
  function ye(e, t, n, i, r) {
    for (
      var o,
        s,
        a,
        l,
        u,
        c,
        f = t.createDocumentFragment(),
        h = [],
        d = 0,
        p = e.length;
      d < p;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === E(o)) T.merge(h, o.nodeType ? [o] : o);
        else if (ve.test(o)) {
          for (
            s = s || f.appendChild(t.createElement("div")),
              a = (ce.exec(o) || ["", ""])[1].toLowerCase(),
              l = he[a] || he._default,
              s.innerHTML = l[1] + T.htmlPrefilter(o) + l[2],
              c = l[0];
            c--;

          )
            s = s.lastChild;
          T.merge(h, s.childNodes), ((s = f.firstChild).textContent = "");
        } else h.push(t.createTextNode(o));
    for (f.textContent = "", d = 0; (o = h[d++]); )
      if (i && -1 < T.inArray(o, i)) r && r.push(o);
      else if (
        ((u = T.contains(o.ownerDocument, o)),
        (s = de(f.appendChild(o), "script")),
        u && pe(s),
        n)
      )
        for (c = 0; (o = s[c++]); ) fe.test(o.type || "") && n.push(o);
    return f;
  }
  (ge = C.createDocumentFragment().appendChild(C.createElement("div"))),
    (me = C.createElement("input")).setAttribute("type", "radio"),
    me.setAttribute("checked", "checked"),
    me.setAttribute("name", "t"),
    ge.appendChild(me),
    (v.checkClone = ge.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ge.innerHTML = "<textarea>x</textarea>"),
    (v.noCloneChecked = !!ge.cloneNode(!0).lastChild.defaultValue);
  var _e = C.documentElement,
    be = /^key/,
    Ee = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    we = /^([^.]*)(?:\.(.+)|)/;
  function xe() {
    return !0;
  }
  function Ce() {
    return !1;
  }
  function Te() {
    try {
      return C.activeElement;
    } catch (e) {}
  }
  function Se(e, t, n, i, r, o) {
    var s, a;
    if ("object" == typeof t) {
      for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), t))
        Se(e, a, n, i, t[a], o);
      return e;
    }
    if (
      (null == i && null == r
        ? ((r = n), (i = n = void 0))
        : null == r &&
          ("string" == typeof n
            ? ((r = i), (i = void 0))
            : ((r = i), (i = n), (n = void 0))),
      !1 === r)
    )
      r = Ce;
    else if (!r) return e;
    return (
      1 === o &&
        ((s = r),
        ((r = function (e) {
          return T().off(e), s.apply(this, arguments);
        }).guid = s.guid || (s.guid = T.guid++))),
      e.each(function () {
        T.event.add(this, t, r, i, n);
      })
    );
  }
  (T.event = {
    global: {},
    add: function (t, e, n, i, r) {
      var o,
        s,
        a,
        l,
        u,
        c,
        f,
        h,
        d,
        p,
        g,
        m = X.get(t);
      if (m)
        for (
          n.handler && ((n = (o = n).handler), (r = o.selector)),
            r && T.find.matchesSelector(_e, r),
            n.guid || (n.guid = T.guid++),
            (l = m.events) || (l = m.events = {}),
            (s = m.handle) ||
              (s = m.handle =
                function (e) {
                  return void 0 !== T && T.event.triggered !== e.type
                    ? T.event.dispatch.apply(t, arguments)
                    : void 0;
                }),
            u = (e = (e || "").match(P) || [""]).length;
          u--;

        )
          (d = g = (a = we.exec(e[u]) || [])[1]),
            (p = (a[2] || "").split(".").sort()),
            d &&
              ((f = T.event.special[d] || {}),
              (d = (r ? f.delegateType : f.bindType) || d),
              (f = T.event.special[d] || {}),
              (c = T.extend(
                {
                  type: d,
                  origType: g,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: r,
                  needsContext: r && T.expr.match.needsContext.test(r),
                  namespace: p.join("."),
                },
                o
              )),
              (h = l[d]) ||
                (((h = l[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, i, p, s)) ||
                  (t.addEventListener && t.addEventListener(d, s))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              r ? h.splice(h.delegateCount++, 0, c) : h.push(c),
              (T.event.global[d] = !0));
    },
    remove: function (e, t, n, i, r) {
      var o,
        s,
        a,
        l,
        u,
        c,
        f,
        h,
        d,
        p,
        g,
        m = X.hasData(e) && X.get(e);
      if (m && (l = m.events)) {
        for (u = (t = (t || "").match(P) || [""]).length; u--; )
          if (
            ((d = g = (a = we.exec(t[u]) || [])[1]),
            (p = (a[2] || "").split(".").sort()),
            d)
          ) {
            for (
              f = T.event.special[d] || {},
                h = l[(d = (i ? f.delegateType : f.bindType) || d)] || [],
                a =
                  a[2] &&
                  new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                s = o = h.length;
              o--;

            )
              (c = h[o]),
                (!r && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (a && !a.test(c.namespace)) ||
                  (i && i !== c.selector && ("**" !== i || !c.selector)) ||
                  (h.splice(o, 1),
                  c.selector && h.delegateCount--,
                  f.remove && f.remove.call(e, c));
            s &&
              !h.length &&
              ((f.teardown && !1 !== f.teardown.call(e, p, m.handle)) ||
                T.removeEvent(e, d, m.handle),
              delete l[d]);
          } else for (d in l) T.event.remove(e, d + t[u], n, i, !0);
        T.isEmptyObject(l) && X.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        i,
        r,
        o,
        s,
        a = T.event.fix(e),
        l = new Array(arguments.length),
        u = (X.get(this, "events") || {})[a.type] || [],
        c = T.event.special[a.type] || {};
      for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
      if (
        ((a.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, a))
      ) {
        for (
          s = T.event.handlers.call(this, a, u), t = 0;
          (r = s[t++]) && !a.isPropagationStopped();

        )
          for (
            a.currentTarget = r.elem, n = 0;
            (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();

          )
            (a.rnamespace && !a.rnamespace.test(o.namespace)) ||
              ((a.handleObj = o),
              (a.data = o.data),
              void 0 !==
                (i = (
                  (T.event.special[o.origType] || {}).handle || o.handler
                ).apply(r.elem, l)) &&
                !1 === (a.result = i) &&
                (a.preventDefault(), a.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function (e, t) {
      var n,
        i,
        r,
        o,
        s,
        a = [],
        l = t.delegateCount,
        u = e.target;
      if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
        for (; u !== this; u = u.parentNode || this)
          if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
            for (o = [], s = {}, n = 0; n < l; n++)
              void 0 === s[(r = (i = t[n]).selector + " ")] &&
                (s[r] = i.needsContext
                  ? -1 < T(r, this).index(u)
                  : T.find(r, this, null, [u]).length),
                s[r] && o.push(i);
            o.length && a.push({ elem: u, handlers: o });
          }
      return (
        (u = this), l < t.length && a.push({ elem: u, handlers: t.slice(l) }), a
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(T.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: y(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[T.expando] ? e : new T.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== Te() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          if (this === Te() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          if ("checkbox" === this.type && this.click && A(this, "input"))
            return this.click(), !1;
        },
        _default: function (e) {
          return A(e.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (T.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (T.Event = function (e, t) {
      if (!(this instanceof T.Event)) return new T.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? xe
              : Ce),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && T.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[T.expando] = !0);
    }),
    (T.Event.prototype = {
      constructor: T.Event,
      isDefaultPrevented: Ce,
      isPropagationStopped: Ce,
      isImmediatePropagationStopped: Ce,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = xe),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = xe),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = xe),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    T.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && be.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && Ee.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      T.event.addProp
    ),
    T.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, r) {
        T.event.special[e] = {
          delegateType: r,
          bindType: r,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              i = e.handleObj;
            return (
              (n && (n === this || T.contains(this, n))) ||
                ((e.type = i.origType),
                (t = i.handler.apply(this, arguments)),
                (e.type = r)),
              t
            );
          },
        };
      }
    ),
    T.fn.extend({
      on: function (e, t, n, i) {
        return Se(this, e, t, n, i);
      },
      one: function (e, t, n, i) {
        return Se(this, e, t, n, i, 1);
      },
      off: function (e, t, n) {
        var i, r;
        if (e && e.preventDefault && e.handleObj)
          return (
            (i = e.handleObj),
            T(e.delegateTarget).off(
              i.namespace ? i.origType + "." + i.namespace : i.origType,
              i.selector,
              i.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (r in e) this.off(r, t, e[r]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Ce),
          this.each(function () {
            T.event.remove(this, e, n, t);
          })
        );
      },
    });
  var De =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    Ae = /<script|<style|<link/i,
    Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
    ke = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Ie(e, t) {
    return (
      (A(e, "table") &&
        A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        T(e).children("tbody")[0]) ||
      e
    );
  }
  function je(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function Oe(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Le(e, t) {
    var n, i, r, o, s, a, l, u;
    if (1 === t.nodeType) {
      if (
        X.hasData(e) &&
        ((o = X.access(e)), (s = X.set(t, o)), (u = o.events))
      )
        for (r in (delete s.handle, (s.events = {}), u))
          for (n = 0, i = u[r].length; n < i; n++) T.event.add(t, r, u[r][n]);
      G.hasData(e) && ((a = G.access(e)), (l = T.extend({}, a)), G.set(t, l));
    }
  }
  function He(n, i, r, o) {
    i = g.apply([], i);
    var e,
      t,
      s,
      a,
      l,
      u,
      c = 0,
      f = n.length,
      h = f - 1,
      d = i[0],
      p = y(d);
    if (p || (1 < f && "string" == typeof d && !v.checkClone && Ne.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        p && (i[0] = d.call(this, e, t.html())), He(t, i, r, o);
      });
    if (
      f &&
      ((t = (e = ye(i, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (a = (s = T.map(de(e, "script"), je)).length; c < f; c++)
        (l = e),
          c !== h &&
            ((l = T.clone(l, !0, !0)), a && T.merge(s, de(l, "script"))),
          r.call(n[c], l, c);
      if (a)
        for (u = s[s.length - 1].ownerDocument, T.map(s, Oe), c = 0; c < a; c++)
          (l = s[c]),
            fe.test(l.type || "") &&
              !X.access(l, "globalEval") &&
              T.contains(u, l) &&
              (l.src && "module" !== (l.type || "").toLowerCase()
                ? T._evalUrl && T._evalUrl(l.src)
                : b(l.textContent.replace(ke, ""), u, l));
    }
    return n;
  }
  function Pe(e, t, n) {
    for (var i, r = t ? T.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
      n || 1 !== i.nodeType || T.cleanData(de(i)),
        i.parentNode &&
          (n && T.contains(i.ownerDocument, i) && pe(de(i, "script")),
          i.parentNode.removeChild(i));
    return e;
  }
  T.extend({
    htmlPrefilter: function (e) {
      return e.replace(De, "<$1></$2>");
    },
    clone: function (e, t, n) {
      var i,
        r,
        o,
        s,
        a,
        l,
        u,
        c = e.cloneNode(!0),
        f = T.contains(e.ownerDocument, e);
      if (
        !(
          v.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          T.isXMLDoc(e)
        )
      )
        for (s = de(c), i = 0, r = (o = de(e)).length; i < r; i++)
          (a = o[i]),
            (l = s[i]),
            void 0,
            "input" === (u = l.nodeName.toLowerCase()) && ue.test(a.type)
              ? (l.checked = a.checked)
              : ("input" !== u && "textarea" !== u) ||
                (l.defaultValue = a.defaultValue);
      if (t)
        if (n)
          for (o = o || de(e), s = s || de(c), i = 0, r = o.length; i < r; i++)
            Le(o[i], s[i]);
        else Le(e, c);
      return (
        0 < (s = de(c, "script")).length && pe(s, !f && de(e, "script")), c
      );
    },
    cleanData: function (e) {
      for (var t, n, i, r = T.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (V(n)) {
          if ((t = n[X.expando])) {
            if (t.events)
              for (i in t.events)
                r[i] ? T.event.remove(n, i) : T.removeEvent(n, i, t.handle);
            n[X.expando] = void 0;
          }
          n[G.expando] && (n[G.expando] = void 0);
        }
    },
  }),
    T.fn.extend({
      detach: function (e) {
        return Pe(this, e, !0);
      },
      remove: function (e) {
        return Pe(this, e);
      },
      text: function (e) {
        return U(
          this,
          function (e) {
            return void 0 === e
              ? T.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return He(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Ie(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return He(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Ie(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (T.cleanData(de(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return T.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return U(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              i = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !Ae.test(e) &&
              !he[(ce.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = T.htmlPrefilter(e);
              try {
                for (; n < i; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (T.cleanData(de(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return He(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            T.inArray(this, n) < 0 &&
              (T.cleanData(de(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    T.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, s) {
        T.fn[e] = function (e) {
          for (var t, n = [], i = T(e), r = i.length - 1, o = 0; o <= r; o++)
            (t = o === r ? this : this.clone(!0)),
              T(i[o])[s](t),
              l.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var Re = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
    Me = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = x), t.getComputedStyle(e);
    },
    qe = new RegExp(ie.join("|"), "i");
  function We(e, t, n) {
    var i,
      r,
      o,
      s,
      a = e.style;
    return (
      (n = n || Me(e)) &&
        ("" !== (s = n.getPropertyValue(t) || n[t]) ||
          T.contains(e.ownerDocument, e) ||
          (s = T.style(e, t)),
        !v.pixelBoxStyles() &&
          Re.test(s) &&
          qe.test(t) &&
          ((i = a.width),
          (r = a.minWidth),
          (o = a.maxWidth),
          (a.minWidth = a.maxWidth = a.width = s),
          (s = n.width),
          (a.width = i),
          (a.minWidth = r),
          (a.maxWidth = o))),
      void 0 !== s ? s + "" : s
    );
  }
  function Be(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (l) {
        (a.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (l.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          _e.appendChild(a).appendChild(l);
        var e = x.getComputedStyle(l);
        (n = "1%" !== e.top),
          (s = 12 === t(e.marginLeft)),
          (l.style.right = "60%"),
          (o = 36 === t(e.right)),
          (i = 36 === t(e.width)),
          (l.style.position = "absolute"),
          (r = 36 === l.offsetWidth || "absolute"),
          _e.removeChild(a),
          (l = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      i,
      r,
      o,
      s,
      a = C.createElement("div"),
      l = C.createElement("div");
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (v.clearCloneStyle = "content-box" === l.style.backgroundClip),
      T.extend(v, {
        boxSizingReliable: function () {
          return e(), i;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), s;
        },
        scrollboxSize: function () {
          return e(), r;
        },
      }));
  })();
  var Fe = /^(none|table(?!-c[ea]).+)/,
    Ue = /^--/,
    $e = { position: "absolute", visibility: "hidden", display: "block" },
    Ke = { letterSpacing: "0", fontWeight: "400" },
    Qe = ["Webkit", "Moz", "ms"],
    ze = C.createElement("div").style;
  function Ve(e) {
    var t = T.cssProps[e];
    return (
      t ||
        (t = T.cssProps[e] =
          (function (e) {
            if (e in ze) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = Qe.length; n--; )
              if ((e = Qe[n] + t) in ze) return e;
          })(e) || e),
      t
    );
  }
  function Ye(e, t, n) {
    var i = ne.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
  }
  function Xe(e, t, n, i, r, o) {
    var s = "width" === t ? 1 : 0,
      a = 0,
      l = 0;
    if (n === (i ? "border" : "content")) return 0;
    for (; s < 4; s += 2)
      "margin" === n && (l += T.css(e, n + ie[s], !0, r)),
        i
          ? ("content" === n && (l -= T.css(e, "padding" + ie[s], !0, r)),
            "margin" !== n &&
              (l -= T.css(e, "border" + ie[s] + "Width", !0, r)))
          : ((l += T.css(e, "padding" + ie[s], !0, r)),
            "padding" !== n
              ? (l += T.css(e, "border" + ie[s] + "Width", !0, r))
              : (a += T.css(e, "border" + ie[s] + "Width", !0, r)));
    return (
      !i &&
        0 <= o &&
        (l += Math.max(
          0,
          Math.ceil(
            e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - 0.5
          )
        )),
      l
    );
  }
  function Ge(e, t, n) {
    var i = Me(e),
      r = We(e, t, i),
      o = "border-box" === T.css(e, "boxSizing", !1, i),
      s = o;
    if (Re.test(r)) {
      if (!n) return r;
      r = "auto";
    }
    return (
      (s = s && (v.boxSizingReliable() || r === e.style[t])),
      ("auto" === r ||
        (!parseFloat(r) && "inline" === T.css(e, "display", !1, i))) &&
        ((r = e["offset" + t[0].toUpperCase() + t.slice(1)]), (s = !0)),
      (r = parseFloat(r) || 0) +
        Xe(e, t, n || (o ? "border" : "content"), s, i, r) +
        "px"
    );
  }
  function Ze(e, t, n, i, r) {
    return new Ze.prototype.init(e, t, n, i, r);
  }
  T.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = We(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var r,
          o,
          s,
          a = z(t),
          l = Ue.test(t),
          u = e.style;
        if (
          (l || (t = Ve(a)), (s = T.cssHooks[t] || T.cssHooks[a]), void 0 === n)
        )
          return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : u[t];
        "string" === (o = typeof n) &&
          (r = ne.exec(n)) &&
          r[1] &&
          ((n = se(e, t, r)), (o = "number")),
          null != n &&
            n == n &&
            ("number" === o &&
              (n += (r && r[3]) || (T.cssNumber[a] ? "" : "px")),
            v.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (u[t] = "inherit"),
            (s && "set" in s && void 0 === (n = s.set(e, n, i))) ||
              (l ? u.setProperty(t, n) : (u[t] = n)));
      }
    },
    css: function (e, t, n, i) {
      var r,
        o,
        s,
        a = z(t);
      return (
        Ue.test(t) || (t = Ve(a)),
        (s = T.cssHooks[t] || T.cssHooks[a]) &&
          "get" in s &&
          (r = s.get(e, !0, n)),
        void 0 === r && (r = We(e, t, i)),
        "normal" === r && t in Ke && (r = Ke[t]),
        "" === n || n
          ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r)
          : r
      );
    },
  }),
    T.each(["height", "width"], function (e, a) {
      T.cssHooks[a] = {
        get: function (e, t, n) {
          if (t)
            return !Fe.test(T.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Ge(e, a, n)
              : oe(e, $e, function () {
                  return Ge(e, a, n);
                });
        },
        set: function (e, t, n) {
          var i,
            r = Me(e),
            o = "border-box" === T.css(e, "boxSizing", !1, r),
            s = n && Xe(e, a, n, o, r);
          return (
            o &&
              v.scrollboxSize() === r.position &&
              (s -= Math.ceil(
                e["offset" + a[0].toUpperCase() + a.slice(1)] -
                  parseFloat(r[a]) -
                  Xe(e, a, "border", !1, r) -
                  0.5
              )),
            s &&
              (i = ne.exec(t)) &&
              "px" !== (i[3] || "px") &&
              ((e.style[a] = t), (t = T.css(e, a))),
            Ye(0, t, s)
          );
        },
      };
    }),
    (T.cssHooks.marginLeft = Be(v.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(We(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              oe(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    T.each({ margin: "", padding: "", border: "Width" }, function (r, o) {
      (T.cssHooks[r + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[r + ie[t] + o] = i[t] || i[t - 2] || i[0];
          return n;
        },
      }),
        "margin" !== r && (T.cssHooks[r + o].set = Ye);
    }),
    T.fn.extend({
      css: function (e, t) {
        return U(
          this,
          function (e, t, n) {
            var i,
              r,
              o = {},
              s = 0;
            if (Array.isArray(t)) {
              for (i = Me(e), r = t.length; s < r; s++)
                o[t[s]] = T.css(e, t[s], !1, i);
              return o;
            }
            return void 0 !== n ? T.style(e, t, n) : T.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((T.Tween = Ze).prototype = {
      constructor: Ze,
      init: function (e, t, n, i, r, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = r || T.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = o || (T.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = Ze.propHooks[this.prop];
        return e && e.get ? e.get(this) : Ze.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = Ze.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                T.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : Ze.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = Ze.prototype),
    ((Ze.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = T.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          T.fx.step[e.prop]
            ? T.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (null == e.elem.style[T.cssProps[e.prop]] && !T.cssHooks[e.prop])
            ? (e.elem[e.prop] = e.now)
            : T.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = Ze.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (T.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (T.fx = Ze.prototype.init),
    (T.fx.step = {});
  var Je,
    et,
    tt,
    nt,
    it = /^(?:toggle|show|hide)$/,
    rt = /queueHooks$/;
  function ot() {
    et &&
      (!1 === C.hidden && x.requestAnimationFrame
        ? x.requestAnimationFrame(ot)
        : x.setTimeout(ot, T.fx.interval),
      T.fx.tick());
  }
  function st() {
    return (
      x.setTimeout(function () {
        Je = void 0;
      }),
      (Je = Date.now())
    );
  }
  function at(e, t) {
    var n,
      i = 0,
      r = { height: e };
    for (t = t ? 1 : 0; i < 4; i += 2 - t)
      r["margin" + (n = ie[i])] = r["padding" + n] = e;
    return t && (r.opacity = r.width = e), r;
  }
  function lt(e, t, n) {
    for (
      var i,
        r = (ut.tweeners[t] || []).concat(ut.tweeners["*"]),
        o = 0,
        s = r.length;
      o < s;
      o++
    )
      if ((i = r[o].call(n, t, e))) return i;
  }
  function ut(o, e, t) {
    var n,
      s,
      i = 0,
      r = ut.prefilters.length,
      a = T.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (s) return !1;
        for (
          var e = Je || st(),
            t = Math.max(0, u.startTime + u.duration - e),
            n = 1 - (t / u.duration || 0),
            i = 0,
            r = u.tweens.length;
          i < r;
          i++
        )
          u.tweens[i].run(n);
        return (
          a.notifyWith(o, [u, n, t]),
          n < 1 && r
            ? t
            : (r || a.notifyWith(o, [u, 1, 0]), a.resolveWith(o, [u]), !1)
        );
      },
      u = a.promise({
        elem: o,
        props: T.extend({}, e),
        opts: T.extend(!0, { specialEasing: {}, easing: T.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: Je || st(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = T.Tween(
            o,
            u.opts,
            e,
            t,
            u.opts.specialEasing[e] || u.opts.easing
          );
          return u.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? u.tweens.length : 0;
          if (s) return this;
          for (s = !0; t < n; t++) u.tweens[t].run(1);
          return (
            e
              ? (a.notifyWith(o, [u, 1, 0]), a.resolveWith(o, [u, e]))
              : a.rejectWith(o, [u, e]),
            this
          );
        },
      }),
      c = u.props;
    for (
      !(function (e, t) {
        var n, i, r, o, s;
        for (n in e)
          if (
            ((r = t[(i = z(n))]),
            (o = e[n]),
            Array.isArray(o) && ((r = o[1]), (o = e[n] = o[0])),
            n !== i && ((e[i] = o), delete e[n]),
            (s = T.cssHooks[i]) && ("expand" in s))
          )
            for (n in ((o = s.expand(o)), delete e[i], o))
              (n in e) || ((e[n] = o[n]), (t[n] = r));
          else t[i] = r;
      })(c, u.opts.specialEasing);
      i < r;
      i++
    )
      if ((n = ut.prefilters[i].call(u, o, c, u.opts)))
        return (
          y(n.stop) &&
            (T._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      T.map(c, lt, u),
      y(u.opts.start) && u.opts.start.call(o, u),
      u
        .progress(u.opts.progress)
        .done(u.opts.done, u.opts.complete)
        .fail(u.opts.fail)
        .always(u.opts.always),
      T.fx.timer(T.extend(l, { elem: o, anim: u, queue: u.opts.queue })),
      u
    );
  }
  (T.Animation = T.extend(ut, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return se(n.elem, e, ne.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      y(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
      for (var n, i = 0, r = e.length; i < r; i++)
        (n = e[i]),
          (ut.tweeners[n] = ut.tweeners[n] || []),
          ut.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var i,
          r,
          o,
          s,
          a,
          l,
          u,
          c,
          f = "width" in t || "height" in t,
          h = this,
          d = {},
          p = e.style,
          g = e.nodeType && re(e),
          m = X.get(e, "fxshow");
        for (i in (n.queue ||
          (null == (s = T._queueHooks(e, "fx")).unqueued &&
            ((s.unqueued = 0),
            (a = s.empty.fire),
            (s.empty.fire = function () {
              s.unqueued || a();
            })),
          s.unqueued++,
          h.always(function () {
            h.always(function () {
              s.unqueued--, T.queue(e, "fx").length || s.empty.fire();
            });
          })),
        t))
          if (((r = t[i]), it.test(r))) {
            if (
              (delete t[i],
              (o = o || "toggle" === r),
              r === (g ? "hide" : "show"))
            ) {
              if ("show" !== r || !m || void 0 === m[i]) continue;
              g = !0;
            }
            d[i] = (m && m[i]) || T.style(e, i);
          }
        if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(d))
          for (i in (f &&
            1 === e.nodeType &&
            ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
            null == (u = m && m.display) && (u = X.get(e, "display")),
            "none" === (c = T.css(e, "display")) &&
              (u
                ? (c = u)
                : (le([e], !0),
                  (u = e.style.display || u),
                  (c = T.css(e, "display")),
                  le([e]))),
            ("inline" === c || ("inline-block" === c && null != u)) &&
              "none" === T.css(e, "float") &&
              (l ||
                (h.done(function () {
                  p.display = u;
                }),
                null == u && ((c = p.display), (u = "none" === c ? "" : c))),
              (p.display = "inline-block"))),
          n.overflow &&
            ((p.overflow = "hidden"),
            h.always(function () {
              (p.overflow = n.overflow[0]),
                (p.overflowX = n.overflow[1]),
                (p.overflowY = n.overflow[2]);
            })),
          (l = !1),
          d))
            l ||
              (m
                ? "hidden" in m && (g = m.hidden)
                : (m = X.access(e, "fxshow", { display: u })),
              o && (m.hidden = !g),
              g && le([e], !0),
              h.done(function () {
                for (i in (g || le([e]), X.remove(e, "fxshow"), d))
                  T.style(e, i, d[i]);
              })),
              (l = lt(g ? m[i] : 0, i, h)),
              i in m ||
                ((m[i] = l.start), g && ((l.end = l.start), (l.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? ut.prefilters.unshift(e) : ut.prefilters.push(e);
    },
  })),
    (T.speed = function (e, t, n) {
      var i =
        e && "object" == typeof e
          ? T.extend({}, e)
          : {
              complete: n || (!n && t) || (y(e) && e),
              duration: e,
              easing: (n && t) || (t && !y(t) && t),
            };
      return (
        T.fx.off
          ? (i.duration = 0)
          : "number" != typeof i.duration &&
            (i.duration in T.fx.speeds
              ? (i.duration = T.fx.speeds[i.duration])
              : (i.duration = T.fx.speeds._default)),
        (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
        (i.old = i.complete),
        (i.complete = function () {
          y(i.old) && i.old.call(this), i.queue && T.dequeue(this, i.queue);
        }),
        i
      );
    }),
    T.fn.extend({
      fadeTo: function (e, t, n, i) {
        return this.filter(re)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, i);
      },
      animate: function (t, e, n, i) {
        var r = T.isEmptyObject(t),
          o = T.speed(e, n, i),
          s = function () {
            var e = ut(this, T.extend({}, t), o);
            (r || X.get(this, "finish")) && e.stop(!0);
          };
        return (
          (s.finish = s),
          r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        );
      },
      stop: function (r, e, o) {
        var s = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          "string" != typeof r && ((o = e), (e = r), (r = void 0)),
          e && !1 !== r && this.queue(r || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != r && r + "queueHooks",
              n = T.timers,
              i = X.get(this);
            if (t) i[t] && i[t].stop && s(i[t]);
            else for (t in i) i[t] && i[t].stop && rt.test(t) && s(i[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != r && n[t].queue !== r) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || T.dequeue(this, r);
          })
        );
      },
      finish: function (s) {
        return (
          !1 !== s && (s = s || "fx"),
          this.each(function () {
            var e,
              t = X.get(this),
              n = t[s + "queue"],
              i = t[s + "queueHooks"],
              r = T.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                T.queue(this, s, []),
                i && i.stop && i.stop.call(this, !0),
                e = r.length;
              e--;

            )
              r[e].elem === this &&
                r[e].queue === s &&
                (r[e].anim.stop(!0), r.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    T.each(["toggle", "show", "hide"], function (e, i) {
      var r = T.fn[i];
      T.fn[i] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? r.apply(this, arguments)
          : this.animate(at(i, !0), e, t, n);
      };
    }),
    T.each(
      {
        slideDown: at("show"),
        slideUp: at("hide"),
        slideToggle: at("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, i) {
        T.fn[e] = function (e, t, n) {
          return this.animate(i, e, t, n);
        };
      }
    ),
    (T.timers = []),
    (T.fx.tick = function () {
      var e,
        t = 0,
        n = T.timers;
      for (Je = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || T.fx.stop(), (Je = void 0);
    }),
    (T.fx.timer = function (e) {
      T.timers.push(e), T.fx.start();
    }),
    (T.fx.interval = 13),
    (T.fx.start = function () {
      et || ((et = !0), ot());
    }),
    (T.fx.stop = function () {
      et = null;
    }),
    (T.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (T.fn.delay = function (i, e) {
      return (
        (i = (T.fx && T.fx.speeds[i]) || i),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = x.setTimeout(e, i);
          t.stop = function () {
            x.clearTimeout(n);
          };
        })
      );
    }),
    (tt = C.createElement("input")),
    (nt = C.createElement("select").appendChild(C.createElement("option"))),
    (tt.type = "checkbox"),
    (v.checkOn = "" !== tt.value),
    (v.optSelected = nt.selected),
    ((tt = C.createElement("input")).value = "t"),
    (tt.type = "radio"),
    (v.radioValue = "t" === tt.value);
  var ct,
    ft = T.expr.attrHandle;
  T.fn.extend({
    attr: function (e, t) {
      return U(this, T.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        T.removeAttr(this, e);
      });
    },
  }),
    T.extend({
      attr: function (e, t, n) {
        var i,
          r,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return void 0 === e.getAttribute
            ? T.prop(e, t, n)
            : ((1 === o && T.isXMLDoc(e)) ||
                (r =
                  T.attrHooks[t.toLowerCase()] ||
                  (T.expr.match.bool.test(t) ? ct : void 0)),
              void 0 !== n
                ? null === n
                  ? void T.removeAttr(e, t)
                  : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                  ? i
                  : (e.setAttribute(t, n + ""), n)
                : r && "get" in r && null !== (i = r.get(e, t))
                ? i
                : null == (i = T.find.attr(e, t))
                ? void 0
                : i);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!v.radioValue && "radio" === t && A(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          i = 0,
          r = t && t.match(P);
        if (r && 1 === e.nodeType) for (; (n = r[i++]); ) e.removeAttribute(n);
      },
    }),
    (ct = {
      set: function (e, t, n) {
        return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var s = ft[t] || T.find.attr;
      ft[t] = function (e, t, n) {
        var i,
          r,
          o = t.toLowerCase();
        return (
          n ||
            ((r = ft[o]),
            (ft[o] = i),
            (i = null != s(e, t, n) ? o : null),
            (ft[o] = r)),
          i
        );
      };
    });
  var ht = /^(?:input|select|textarea|button)$/i,
    dt = /^(?:a|area)$/i;
  function pt(e) {
    return (e.match(P) || []).join(" ");
  }
  function gt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function mt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(P)) || [];
  }
  T.fn.extend({
    prop: function (e, t) {
      return U(this, T.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[T.propFix[e] || e];
      });
    },
  }),
    T.extend({
      prop: function (e, t, n) {
        var i,
          r,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && T.isXMLDoc(e)) ||
              ((t = T.propFix[t] || t), (r = T.propHooks[t])),
            void 0 !== n
              ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                ? i
                : (e[t] = n)
              : r && "get" in r && null !== (i = r.get(e, t))
              ? i
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = T.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : ht.test(e.nodeName) || (dt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    v.optSelected ||
      (T.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    T.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        T.propFix[this.toLowerCase()] = this;
      }
    ),
    T.fn.extend({
      addClass: function (t) {
        var e,
          n,
          i,
          r,
          o,
          s,
          a,
          l = 0;
        if (y(t))
          return this.each(function (e) {
            T(this).addClass(t.call(this, e, gt(this)));
          });
        if ((e = mt(t)).length)
          for (; (n = this[l++]); )
            if (((r = gt(n)), (i = 1 === n.nodeType && " " + pt(r) + " "))) {
              for (s = 0; (o = e[s++]); )
                i.indexOf(" " + o + " ") < 0 && (i += o + " ");
              r !== (a = pt(i)) && n.setAttribute("class", a);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          i,
          r,
          o,
          s,
          a,
          l = 0;
        if (y(t))
          return this.each(function (e) {
            T(this).removeClass(t.call(this, e, gt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((e = mt(t)).length)
          for (; (n = this[l++]); )
            if (((r = gt(n)), (i = 1 === n.nodeType && " " + pt(r) + " "))) {
              for (s = 0; (o = e[s++]); )
                for (; -1 < i.indexOf(" " + o + " "); )
                  i = i.replace(" " + o + " ", " ");
              r !== (a = pt(i)) && n.setAttribute("class", a);
            }
        return this;
      },
      toggleClass: function (r, t) {
        var o = typeof r,
          s = "string" === o || Array.isArray(r);
        return "boolean" == typeof t && s
          ? t
            ? this.addClass(r)
            : this.removeClass(r)
          : y(r)
          ? this.each(function (e) {
              T(this).toggleClass(r.call(this, e, gt(this), t), t);
            })
          : this.each(function () {
              var e, t, n, i;
              if (s)
                for (t = 0, n = T(this), i = mt(r); (e = i[t++]); )
                  n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              else
                (void 0 !== r && "boolean" !== o) ||
                  ((e = gt(this)) && X.set(this, "__className__", e),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      e || !1 === r ? "" : X.get(this, "__className__") || ""
                    ));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          i = 0;
        for (t = " " + e + " "; (n = this[i++]); )
          if (1 === n.nodeType && -1 < (" " + pt(gt(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var vt = /\r/g;
  T.fn.extend({
    val: function (n) {
      var i,
        e,
        r,
        t = this[0];
      return arguments.length
        ? ((r = y(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = r ? n.call(this, e, T(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : Array.isArray(t) &&
                  (t = T.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((i =
                T.valHooks[this.type] ||
                T.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in i &&
                void 0 !== i.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
        ? (i = T.valHooks[t.type] || T.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in i &&
          void 0 !== (e = i.get(t, "value"))
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(vt, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    T.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = T.find.attr(e, "value");
            return null != t ? t : pt(T.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              i,
              r = e.options,
              o = e.selectedIndex,
              s = "select-one" === e.type,
              a = s ? null : [],
              l = s ? o + 1 : r.length;
            for (i = o < 0 ? l : s ? o : 0; i < l; i++)
              if (
                ((n = r[i]).selected || i === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
              ) {
                if (((t = T(n).val()), s)) return t;
                a.push(t);
              }
            return a;
          },
          set: function (e, t) {
            for (
              var n, i, r = e.options, o = T.makeArray(t), s = r.length;
              s--;

            )
              ((i = r[s]).selected =
                -1 < T.inArray(T.valHooks.option.get(i), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    T.each(["radio", "checkbox"], function () {
      (T.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < T.inArray(T(e).val(), t));
        },
      }),
        v.checkOn ||
          (T.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (v.focusin = "onfocusin" in x);
  var yt = /^(?:focusinfocus|focusoutblur)$/,
    _t = function (e) {
      e.stopPropagation();
    };
  T.extend(T.event, {
    trigger: function (e, t, n, i) {
      var r,
        o,
        s,
        a,
        l,
        u,
        c,
        f,
        h = [n || C],
        d = m.call(e, "type") ? e.type : e,
        p = m.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((o = f = s = n = n || C),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !yt.test(d + T.event.triggered) &&
          (-1 < d.indexOf(".") && ((d = (p = d.split(".")).shift()), p.sort()),
          (l = d.indexOf(":") < 0 && "on" + d),
          ((e = e[T.expando]
            ? e
            : new T.Event(d, "object" == typeof e && e)).isTrigger = i ? 2 : 3),
          (e.namespace = p.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : T.makeArray(t, [e])),
          (c = T.event.special[d] || {}),
          i || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!i && !c.noBubble && !_(n)) {
          for (
            a = c.delegateType || d, yt.test(a + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            h.push(o), (s = o);
          s === (n.ownerDocument || C) &&
            h.push(s.defaultView || s.parentWindow || x);
        }
        for (r = 0; (o = h[r++]) && !e.isPropagationStopped(); )
          (f = o),
            (e.type = 1 < r ? a : c.bindType || d),
            (u = (X.get(o, "events") || {})[e.type] && X.get(o, "handle")) &&
              u.apply(o, t),
            (u = l && o[l]) &&
              u.apply &&
              V(o) &&
              ((e.result = u.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          i ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(h.pop(), t)) ||
            !V(n) ||
            (l &&
              y(n[d]) &&
              !_(n) &&
              ((s = n[l]) && (n[l] = null),
              (T.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, _t),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, _t),
              (T.event.triggered = void 0),
              s && (n[l] = s))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var i = T.extend(new T.Event(), n, { type: e, isSimulated: !0 });
      T.event.trigger(i, null, t);
    },
  }),
    T.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          T.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return T.event.trigger(e, t, n, !0);
      },
    }),
    v.focusin ||
      T.each({ focus: "focusin", blur: "focusout" }, function (n, i) {
        var r = function (e) {
          T.event.simulate(i, e.target, T.event.fix(e));
        };
        T.event.special[i] = {
          setup: function () {
            var e = this.ownerDocument || this,
              t = X.access(e, i);
            t || e.addEventListener(n, r, !0), X.access(e, i, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this,
              t = X.access(e, i) - 1;
            t
              ? X.access(e, i, t)
              : (e.removeEventListener(n, r, !0), X.remove(e, i));
          },
        };
      });
  var bt = x.location,
    Et = Date.now(),
    wt = /\?/;
  T.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;
    try {
      t = new x.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }
    return (
      (t && !t.getElementsByTagName("parsererror").length) ||
        T.error("Invalid XML: " + e),
      t
    );
  };
  var xt = /\[\]$/,
    Ct = /\r?\n/g,
    Tt = /^(?:submit|button|image|reset|file)$/i,
    St = /^(?:input|select|textarea|keygen)/i;
  function Dt(n, e, i, r) {
    var t;
    if (Array.isArray(e))
      T.each(e, function (e, t) {
        i || xt.test(n)
          ? r(n, t)
          : Dt(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              i,
              r
            );
      });
    else if (i || "object" !== E(e)) r(n, e);
    else for (t in e) Dt(n + "[" + t + "]", e[t], i, r);
  }
  (T.param = function (e, t) {
    var n,
      i = [],
      r = function (e, t) {
        var n = y(t) ? t() : t;
        i[i.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (Array.isArray(e) || (e.jquery && !T.isPlainObject(e)))
      T.each(e, function () {
        r(this.name, this.value);
      });
    else for (n in e) Dt(n, e[n], t, r);
    return i.join("&");
  }),
    T.fn.extend({
      serialize: function () {
        return T.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = T.prop(this, "elements");
          return e ? T.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !T(this).is(":disabled") &&
              St.test(this.nodeName) &&
              !Tt.test(e) &&
              (this.checked || !ue.test(e))
            );
          })
          .map(function (e, t) {
            var n = T(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? T.map(n, function (e) {
                  return { name: t.name, value: e.replace(Ct, "\r\n") };
                })
              : { name: t.name, value: n.replace(Ct, "\r\n") };
          })
          .get();
      },
    });
  var At = /%20/g,
    Nt = /#.*$/,
    kt = /([?&])_=[^&]*/,
    It = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    jt = /^(?:GET|HEAD)$/,
    Ot = /^\/\//,
    Lt = {},
    Ht = {},
    Pt = "*/".concat("*"),
    Rt = C.createElement("a");
  function Mt(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        i = 0,
        r = e.toLowerCase().match(P) || [];
      if (y(t))
        for (; (n = r[i++]); )
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function qt(t, r, o, s) {
    var a = {},
      l = t === Ht;
    function u(e) {
      var i;
      return (
        (a[e] = !0),
        T.each(t[e] || [], function (e, t) {
          var n = t(r, o, s);
          return "string" != typeof n || l || a[n]
            ? l
              ? !(i = n)
              : void 0
            : (r.dataTypes.unshift(n), u(n), !1);
        }),
        i
      );
    }
    return u(r.dataTypes[0]) || (!a["*"] && u("*"));
  }
  function Wt(e, t) {
    var n,
      i,
      r = T.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
    return i && T.extend(!0, e, i), e;
  }
  (Rt.href = bt.href),
    T.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: bt.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            bt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Pt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": T.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Wt(Wt(e, T.ajaxSettings), t) : Wt(T.ajaxSettings, e);
      },
      ajaxPrefilter: Mt(Lt),
      ajaxTransport: Mt(Ht),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          h,
          n,
          d,
          i,
          p,
          g,
          r,
          o,
          m = T.ajaxSetup({}, t),
          v = m.context || m,
          y = m.context && (v.nodeType || v.jquery) ? T(v) : T.event,
          _ = T.Deferred(),
          b = T.Callbacks("once memory"),
          E = m.statusCode || {},
          s = {},
          a = {},
          l = "canceled",
          w = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (p) {
                if (!n)
                  for (n = {}; (t = It.exec(h)); ) n[t[1].toLowerCase()] = t[2];
                t = n[e.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function () {
              return p ? h : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == p &&
                  ((e = a[e.toLowerCase()] = a[e.toLowerCase()] || e),
                  (s[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == p && (m.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (p) w.always(e[w.status]);
                else for (t in e) E[t] = [E[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || l;
              return c && c.abort(t), u(0, t), this;
            },
          };
        if (
          (_.promise(w),
          (m.url = ((e || m.url || bt.href) + "").replace(
            Ot,
            bt.protocol + "//"
          )),
          (m.type = t.method || t.type || m.method || m.type),
          (m.dataTypes = (m.dataType || "*").toLowerCase().match(P) || [""]),
          null == m.crossDomain)
        ) {
          i = C.createElement("a");
          try {
            (i.href = m.url),
              (i.href = i.href),
              (m.crossDomain =
                Rt.protocol + "//" + Rt.host != i.protocol + "//" + i.host);
          } catch (e) {
            m.crossDomain = !0;
          }
        }
        if (
          (m.data &&
            m.processData &&
            "string" != typeof m.data &&
            (m.data = T.param(m.data, m.traditional)),
          qt(Lt, m, t, w),
          p)
        )
          return w;
        for (r in ((g = T.event && m.global) &&
          0 == T.active++ &&
          T.event.trigger("ajaxStart"),
        (m.type = m.type.toUpperCase()),
        (m.hasContent = !jt.test(m.type)),
        (f = m.url.replace(Nt, "")),
        m.hasContent
          ? m.data &&
            m.processData &&
            0 ===
              (m.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (m.data = m.data.replace(At, "+"))
          : ((o = m.url.slice(f.length)),
            m.data &&
              (m.processData || "string" == typeof m.data) &&
              ((f += (wt.test(f) ? "&" : "?") + m.data), delete m.data),
            !1 === m.cache &&
              ((f = f.replace(kt, "$1")),
              (o = (wt.test(f) ? "&" : "?") + "_=" + Et++ + o)),
            (m.url = f + o)),
        m.ifModified &&
          (T.lastModified[f] &&
            w.setRequestHeader("If-Modified-Since", T.lastModified[f]),
          T.etag[f] && w.setRequestHeader("If-None-Match", T.etag[f])),
        ((m.data && m.hasContent && !1 !== m.contentType) || t.contentType) &&
          w.setRequestHeader("Content-Type", m.contentType),
        w.setRequestHeader(
          "Accept",
          m.dataTypes[0] && m.accepts[m.dataTypes[0]]
            ? m.accepts[m.dataTypes[0]] +
                ("*" !== m.dataTypes[0] ? ", " + Pt + "; q=0.01" : "")
            : m.accepts["*"]
        ),
        m.headers))
          w.setRequestHeader(r, m.headers[r]);
        if (m.beforeSend && (!1 === m.beforeSend.call(v, w, m) || p))
          return w.abort();
        if (
          ((l = "abort"),
          b.add(m.complete),
          w.done(m.success),
          w.fail(m.error),
          (c = qt(Ht, m, t, w)))
        ) {
          if (((w.readyState = 1), g && y.trigger("ajaxSend", [w, m]), p))
            return w;
          m.async &&
            0 < m.timeout &&
            (d = x.setTimeout(function () {
              w.abort("timeout");
            }, m.timeout));
          try {
            (p = !1), c.send(s, u);
          } catch (e) {
            if (p) throw e;
            u(-1, e);
          }
        } else u(-1, "No Transport");
        function u(e, t, n, i) {
          var r,
            o,
            s,
            a,
            l,
            u = t;
          p ||
            ((p = !0),
            d && x.clearTimeout(d),
            (c = void 0),
            (h = i || ""),
            (w.readyState = 0 < e ? 4 : 0),
            (r = (200 <= e && e < 300) || 304 === e),
            n &&
              (a = (function (e, t, n) {
                for (
                  var i, r, o, s, a = e.contents, l = e.dataTypes;
                  "*" === l[0];

                )
                  l.shift(),
                    void 0 === i &&
                      (i = e.mimeType || t.getResponseHeader("Content-Type"));
                if (i)
                  for (r in a)
                    if (a[r] && a[r].test(i)) {
                      l.unshift(r);
                      break;
                    }
                if (l[0] in n) o = l[0];
                else {
                  for (r in n) {
                    if (!l[0] || e.converters[r + " " + l[0]]) {
                      o = r;
                      break;
                    }
                    s || (s = r);
                  }
                  o = o || s;
                }
                if (o) return o !== l[0] && l.unshift(o), n[o];
              })(m, w, n)),
            (a = (function (e, t, n, i) {
              var r,
                o,
                s,
                a,
                l,
                u = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
              for (o = c.shift(); o; )
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (l = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = l;
                  else if ("*" !== l && l !== o) {
                    if (!(s = u[l + " " + o] || u["* " + o]))
                      for (r in u)
                        if (
                          (a = r.split(" "))[1] === o &&
                          (s = u[l + " " + a[0]] || u["* " + a[0]])
                        ) {
                          !0 === s
                            ? (s = u[r])
                            : !0 !== u[r] && ((o = a[0]), c.unshift(a[1]));
                          break;
                        }
                    if (!0 !== s)
                      if (s && e.throws) t = s(t);
                      else
                        try {
                          t = s(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: s
                              ? e
                              : "No conversion from " + l + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(m, a, w, r)),
            r
              ? (m.ifModified &&
                  ((l = w.getResponseHeader("Last-Modified")) &&
                    (T.lastModified[f] = l),
                  (l = w.getResponseHeader("etag")) && (T.etag[f] = l)),
                204 === e || "HEAD" === m.type
                  ? (u = "nocontent")
                  : 304 === e
                  ? (u = "notmodified")
                  : ((u = a.state), (o = a.data), (r = !(s = a.error))))
              : ((s = u), (!e && u) || ((u = "error"), e < 0 && (e = 0))),
            (w.status = e),
            (w.statusText = (t || u) + ""),
            r ? _.resolveWith(v, [o, u, w]) : _.rejectWith(v, [w, u, s]),
            w.statusCode(E),
            (E = void 0),
            g && y.trigger(r ? "ajaxSuccess" : "ajaxError", [w, m, r ? o : s]),
            b.fireWith(v, [w, u]),
            g &&
              (y.trigger("ajaxComplete", [w, m]),
              --T.active || T.event.trigger("ajaxStop")));
        }
        return w;
      },
      getJSON: function (e, t, n) {
        return T.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return T.get(e, void 0, t, "script");
      },
    }),
    T.each(["get", "post"], function (e, r) {
      T[r] = function (e, t, n, i) {
        return (
          y(t) && ((i = i || n), (n = t), (t = void 0)),
          T.ajax(
            T.extend(
              { url: e, type: r, dataType: i, data: t, success: n },
              T.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    (T._evalUrl = function (e) {
      return T.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    T.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (y(e) && (e = e.call(this[0])),
            (t = T(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return y(n)
          ? this.each(function (e) {
              T(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = T(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = y(t);
        return this.each(function (e) {
          T(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              T(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (T.expr.pseudos.hidden = function (e) {
      return !T.expr.pseudos.visible(e);
    }),
    (T.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (T.ajaxSettings.xhr = function () {
      try {
        return new x.XMLHttpRequest();
      } catch (e) {}
    });
  var Bt = { 0: 200, 1223: 204 },
    Ft = T.ajaxSettings.xhr();
  (v.cors = !!Ft && "withCredentials" in Ft),
    (v.ajax = Ft = !!Ft),
    T.ajaxTransport(function (r) {
      var o, s;
      if (v.cors || (Ft && !r.crossDomain))
        return {
          send: function (e, t) {
            var n,
              i = r.xhr();
            if (
              (i.open(r.type, r.url, r.async, r.username, r.password),
              r.xhrFields)
            )
              for (n in r.xhrFields) i[n] = r.xhrFields[n];
            for (n in (r.mimeType &&
              i.overrideMimeType &&
              i.overrideMimeType(r.mimeType),
            r.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              i.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o =
                    s =
                    i.onload =
                    i.onerror =
                    i.onabort =
                    i.ontimeout =
                    i.onreadystatechange =
                      null),
                  "abort" === e
                    ? i.abort()
                    : "error" === e
                    ? "number" != typeof i.status
                      ? t(0, "error")
                      : t(i.status, i.statusText)
                    : t(
                        Bt[i.status] || i.status,
                        i.statusText,
                        "text" !== (i.responseType || "text") ||
                          "string" != typeof i.responseText
                          ? { binary: i.response }
                          : { text: i.responseText },
                        i.getAllResponseHeaders()
                      ));
              };
            }),
              (i.onload = o()),
              (s = i.onerror = i.ontimeout = o("error")),
              void 0 !== i.onabort
                ? (i.onabort = s)
                : (i.onreadystatechange = function () {
                    4 === i.readyState &&
                      x.setTimeout(function () {
                        o && s();
                      });
                  }),
              (o = o("abort"));
            try {
              i.send((r.hasContent && r.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    T.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    T.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return T.globalEval(e), e;
        },
      },
    }),
    T.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    T.ajaxTransport("script", function (n) {
      var i, r;
      if (n.crossDomain)
        return {
          send: function (e, t) {
            (i = T("<script>")
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (r = function (e) {
                  i.remove(),
                    (r = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                })
              )),
              C.head.appendChild(i[0]);
          },
          abort: function () {
            r && r();
          },
        };
    });
  var Ut,
    $t = [],
    Kt = /(=)\?(?=&|$)|\?\?/;
  T.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = $t.pop() || T.expando + "_" + Et++;
      return (this[e] = !0), e;
    },
  }),
    T.ajaxPrefilter("json jsonp", function (e, t, n) {
      var i,
        r,
        o,
        s =
          !1 !== e.jsonp &&
          (Kt.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Kt.test(e.data) &&
              "data");
      if (s || "jsonp" === e.dataTypes[0])
        return (
          (i = e.jsonpCallback =
            y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          s
            ? (e[s] = e[s].replace(Kt, "$1" + i))
            : !1 !== e.jsonp &&
              (e.url += (wt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
          (e.converters["script json"] = function () {
            return o || T.error(i + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (r = x[i]),
          (x[i] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === r ? T(x).removeProp(i) : (x[i] = r),
              e[i] && ((e.jsonpCallback = t.jsonpCallback), $t.push(i)),
              o && y(r) && r(o[0]),
              (o = r = void 0);
          }),
          "script"
        );
    }),
    (v.createHTMLDocument =
      (((Ut = C.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Ut.childNodes.length)),
    (T.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (v.createHTMLDocument
              ? (((i = (t =
                  C.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = C.location.href),
                t.head.appendChild(i))
              : (t = C)),
          (o = !n && []),
          (r = N.exec(e))
            ? [t.createElement(r[1])]
            : ((r = ye([e], t, o)),
              o && o.length && T(o).remove(),
              T.merge([], r.childNodes)));
      var i, r, o;
    }),
    (T.fn.load = function (e, t, n) {
      var i,
        r,
        o,
        s = this,
        a = e.indexOf(" ");
      return (
        -1 < a && ((i = pt(e.slice(a))), (e = e.slice(0, a))),
        y(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (r = "POST"),
        0 < s.length &&
          T.ajax({ url: e, type: r || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                s.html(i ? T("<div>").append(T.parseHTML(e)).find(i) : e);
            })
            .always(
              n &&
                function (e, t) {
                  s.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    T.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        T.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (T.expr.pseudos.animated = function (t) {
      return T.grep(T.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (T.offset = {
      setOffset: function (e, t, n) {
        var i,
          r,
          o,
          s,
          a,
          l,
          u = T.css(e, "position"),
          c = T(e),
          f = {};
        "static" === u && (e.style.position = "relative"),
          (a = c.offset()),
          (o = T.css(e, "top")),
          (l = T.css(e, "left")),
          ("absolute" === u || "fixed" === u) && -1 < (o + l).indexOf("auto")
            ? ((s = (i = c.position()).top), (r = i.left))
            : ((s = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
          y(t) && (t = t.call(e, n, T.extend({}, a))),
          null != t.top && (f.top = t.top - a.top + s),
          null != t.left && (f.left = t.left - a.left + r),
          "using" in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    T.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                T.offset.setOffset(this, t, e);
              });
        var e,
          n,
          i = this[0];
        return i
          ? i.getClientRects().length
            ? ((e = i.getBoundingClientRect()),
              (n = i.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            i = this[0],
            r = { top: 0, left: 0 };
          if ("fixed" === T.css(i, "position")) t = i.getBoundingClientRect();
          else {
            for (
              t = this.offset(),
                n = i.ownerDocument,
                e = i.offsetParent || n.documentElement;
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === T.css(e, "position");

            )
              e = e.parentNode;
            e &&
              e !== i &&
              1 === e.nodeType &&
              (((r = T(e).offset()).top += T.css(e, "borderTopWidth", !0)),
              (r.left += T.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - r.top - T.css(i, "marginTop", !0),
            left: t.left - r.left - T.css(i, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && "static" === T.css(e, "position");

          )
            e = e.offsetParent;
          return e || _e;
        });
      },
    }),
    T.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, r) {
        var o = "pageYOffset" === r;
        T.fn[t] = function (e) {
          return U(
            this,
            function (e, t, n) {
              var i;
              if (
                (_(e) ? (i = e) : 9 === e.nodeType && (i = e.defaultView),
                void 0 === n)
              )
                return i ? i[r] : e[t];
              i
                ? i.scrollTo(o ? i.pageXOffset : n, o ? n : i.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    T.each(["top", "left"], function (e, n) {
      T.cssHooks[n] = Be(v.pixelPosition, function (e, t) {
        if (t)
          return (t = We(e, n)), Re.test(t) ? T(e).position()[n] + "px" : t;
      });
    }),
    T.each({ Height: "height", Width: "width" }, function (s, a) {
      T.each(
        { padding: "inner" + s, content: a, "": "outer" + s },
        function (i, o) {
          T.fn[o] = function (e, t) {
            var n = arguments.length && (i || "boolean" != typeof e),
              r = i || (!0 === e || !0 === t ? "margin" : "border");
            return U(
              this,
              function (e, t, n) {
                var i;
                return _(e)
                  ? 0 === o.indexOf("outer")
                    ? e["inner" + s]
                    : e.document.documentElement["client" + s]
                  : 9 === e.nodeType
                  ? ((i = e.documentElement),
                    Math.max(
                      e.body["scroll" + s],
                      i["scroll" + s],
                      e.body["offset" + s],
                      i["offset" + s],
                      i["client" + s]
                    ))
                  : void 0 === n
                  ? T.css(e, t, r)
                  : T.style(e, t, n, r);
              },
              a,
              n ? e : void 0,
              n
            );
          };
        }
      );
    }),
    T.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        T.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    ),
    T.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    T.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, i) {
        return this.on(t, e, n, i);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    }),
    (T.proxy = function (e, t) {
      var n, i, r;
      if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), y(e)))
        return (
          (i = a.call(arguments, 2)),
          ((r = function () {
            return e.apply(t || this, i.concat(a.call(arguments)));
          }).guid = e.guid =
            e.guid || T.guid++),
          r
        );
    }),
    (T.holdReady = function (e) {
      e ? T.readyWait++ : T.ready(!0);
    }),
    (T.isArray = Array.isArray),
    (T.parseJSON = JSON.parse),
    (T.nodeName = A),
    (T.isFunction = y),
    (T.isWindow = _),
    (T.camelCase = z),
    (T.type = E),
    (T.now = Date.now),
    (T.isNumeric = function (e) {
      var t = T.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return T;
      });
  var Qt = x.jQuery,
    zt = x.$;
  return (
    (T.noConflict = function (e) {
      return x.$ === T && (x.$ = zt), e && x.jQuery === T && (x.jQuery = Qt), T;
    }),
    e || (x.jQuery = x.$ = T),
    T
  );
}),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? t(exports, require("jquery"), require("popper.js"))
      : "function" == typeof define && define.amd
      ? define(["exports", "jquery", "popper.js"], t)
      : t((e.bootstrap = {}), e.jQuery, e.Popper);
  })(this, function (e, t, c) {
    "use strict";
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function s(e, t, n) {
      return t && i(e.prototype, t), n && i(e, n), e;
    }
    function u(r) {
      for (var e = 1; e < arguments.length; e++) {
        var o = null != arguments[e] ? arguments[e] : {},
          t = Object.keys(o);
        "function" == typeof Object.getOwnPropertySymbols &&
          (t = t.concat(
            Object.getOwnPropertySymbols(o).filter(function (e) {
              return Object.getOwnPropertyDescriptor(o, e).enumerable;
            })
          )),
          t.forEach(function (e) {
            var t, n, i;
            (t = r),
              (i = o[(n = e)]),
              n in t
                ? Object.defineProperty(t, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[n] = i);
          });
      }
      return r;
    }
    (t = t && t.hasOwnProperty("default") ? t.default : t),
      (c = c && c.hasOwnProperty("default") ? c.default : c);
    var r,
      n,
      o,
      a,
      l,
      f,
      h,
      d,
      p,
      g,
      m,
      v,
      y,
      _,
      b,
      E,
      w,
      x,
      C,
      T,
      S,
      D,
      A,
      N,
      k,
      I,
      j,
      O,
      L,
      H,
      P,
      R,
      M,
      q,
      W,
      B,
      F,
      U,
      $,
      K,
      Q,
      z,
      V,
      Y,
      X,
      G,
      Z,
      J,
      ee,
      te,
      ne,
      ie,
      re,
      oe,
      se,
      ae,
      le,
      ue,
      ce,
      fe,
      he,
      de,
      pe,
      ge,
      me,
      ve,
      ye,
      _e,
      be,
      Ee,
      we,
      xe,
      Ce,
      Te,
      Se,
      De,
      Ae,
      Ne,
      ke,
      Ie,
      je,
      Oe,
      Le,
      He,
      Pe,
      Re,
      Me,
      qe,
      We,
      Be,
      Fe,
      Ue,
      $e,
      Ke,
      Qe,
      ze,
      Ve,
      Ye,
      Xe,
      Ge,
      Ze,
      Je,
      et,
      tt,
      nt,
      it,
      rt,
      ot,
      st,
      at,
      lt,
      ut,
      ct,
      ft,
      ht,
      dt,
      pt,
      gt,
      mt,
      vt,
      yt,
      _t,
      bt,
      Et,
      wt,
      xt,
      Ct,
      Tt,
      St,
      Dt,
      At,
      Nt,
      kt,
      It,
      jt,
      Ot,
      Lt,
      Ht,
      Pt,
      Rt,
      Mt,
      qt,
      Wt,
      Bt,
      Ft,
      Ut,
      $t,
      Kt,
      Qt,
      zt,
      Vt,
      Yt,
      Xt,
      Gt,
      Zt,
      Jt,
      en,
      tn,
      nn,
      rn,
      on,
      sn,
      an,
      ln,
      un,
      cn,
      fn,
      hn,
      dn,
      pn,
      gn,
      mn,
      vn,
      yn,
      _n,
      bn,
      En,
      wn,
      xn,
      Cn,
      Tn,
      Sn,
      Dn,
      An,
      Nn,
      kn,
      In,
      jn,
      On,
      Ln,
      Hn,
      Pn,
      Rn,
      Mn,
      qn,
      Wn,
      Bn,
      Fn = (function (i) {
        var t = "transitionend";
        function e(e) {
          var t = this,
            n = !1;
          return (
            i(this).one(l.TRANSITION_END, function () {
              n = !0;
            }),
            setTimeout(function () {
              n || l.triggerTransitionEnd(t);
            }, e),
            this
          );
        }
        var l = {
          TRANSITION_END: "bsTransitionEnd",
          getUID: function (e) {
            for (
              ;
              (e += ~~(1e6 * Math.random())), document.getElementById(e);

            );
            return e;
          },
          getSelectorFromElement: function (e) {
            var t = e.getAttribute("data-target");
            (t && "#" !== t) || (t = e.getAttribute("href") || "");
            try {
              return 0 < i(document).find(t).length ? t : null;
            } catch (e) {
              return null;
            }
          },
          getTransitionDurationFromElement: function (e) {
            if (!e) return 0;
            var t = i(e).css("transition-duration");
            return parseFloat(t)
              ? ((t = t.split(",")[0]), 1e3 * parseFloat(t))
              : 0;
          },
          reflow: function (e) {
            return e.offsetHeight;
          },
          triggerTransitionEnd: function (e) {
            i(e).trigger(t);
          },
          supportsTransitionEnd: function () {
            return Boolean(t);
          },
          isElement: function (e) {
            return (e[0] || e).nodeType;
          },
          typeCheckConfig: function (e, t, n) {
            for (var i in n)
              if (Object.prototype.hasOwnProperty.call(n, i)) {
                var r = n[i],
                  o = t[i],
                  s =
                    o && l.isElement(o)
                      ? "element"
                      : ((a = o),
                        {}.toString
                          .call(a)
                          .match(/\s([a-z]+)/i)[1]
                          .toLowerCase());
                if (!new RegExp(r).test(s))
                  throw new Error(
                    e.toUpperCase() +
                      ': Option "' +
                      i +
                      '" provided type "' +
                      s +
                      '" but expected type "' +
                      r +
                      '".'
                  );
              }
            var a;
          },
        };
        return (
          (i.fn.emulateTransitionEnd = e),
          (i.event.special[l.TRANSITION_END] = {
            bindType: t,
            delegateType: t,
            handle: function (e) {
              if (i(e.target).is(this))
                return e.handleObj.handler.apply(this, arguments);
            },
          }),
          l
        );
      })(t),
      Un =
        ((n = "alert"),
        (a = "." + (o = "bs.alert")),
        (l = (r = t).fn[n]),
        (f = {
          CLOSE: "close" + a,
          CLOSED: "closed" + a,
          CLICK_DATA_API: "click" + a + ".data-api",
        }),
        (h = "alert"),
        (d = "fade"),
        (p = "show"),
        (g = (function () {
          function i(e) {
            this._element = e;
          }
          var e = i.prototype;
          return (
            (e.close = function (e) {
              var t = this._element;
              e && (t = this._getRootElement(e)),
                this._triggerCloseEvent(t).isDefaultPrevented() ||
                  this._removeElement(t);
            }),
            (e.dispose = function () {
              r.removeData(this._element, o), (this._element = null);
            }),
            (e._getRootElement = function (e) {
              var t = Fn.getSelectorFromElement(e),
                n = !1;
              return t && (n = r(t)[0]), n || (n = r(e).closest("." + h)[0]), n;
            }),
            (e._triggerCloseEvent = function (e) {
              var t = r.Event(f.CLOSE);
              return r(e).trigger(t), t;
            }),
            (e._removeElement = function (t) {
              var n = this;
              if ((r(t).removeClass(p), r(t).hasClass(d))) {
                var e = Fn.getTransitionDurationFromElement(t);
                r(t)
                  .one(Fn.TRANSITION_END, function (e) {
                    return n._destroyElement(t, e);
                  })
                  .emulateTransitionEnd(e);
              } else this._destroyElement(t);
            }),
            (e._destroyElement = function (e) {
              r(e).detach().trigger(f.CLOSED).remove();
            }),
            (i._jQueryInterface = function (n) {
              return this.each(function () {
                var e = r(this),
                  t = e.data(o);
                t || ((t = new i(this)), e.data(o, t)),
                  "close" === n && t[n](this);
              });
            }),
            (i._handleDismiss = function (t) {
              return function (e) {
                e && e.preventDefault(), t.close(this);
              };
            }),
            s(i, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.1.1";
                },
              },
            ]),
            i
          );
        })()),
        r(document).on(
          f.CLICK_DATA_API,
          '[data-dismiss="alert"]',
          g._handleDismiss(new g())
        ),
        (r.fn[n] = g._jQueryInterface),
        (r.fn[n].Constructor = g),
        (r.fn[n].noConflict = function () {
          return (r.fn[n] = l), g._jQueryInterface;
        }),
        g),
      $n =
        ((v = "button"),
        (_ = "." + (y = "bs.button")),
        (b = ".data-api"),
        (E = (m = t).fn[v]),
        (w = "active"),
        (x = "btn"),
        (T = '[data-toggle^="button"]'),
        (S = '[data-toggle="buttons"]'),
        (D = "input"),
        (A = ".active"),
        (N = ".btn"),
        (k = {
          CLICK_DATA_API: "click" + _ + b,
          FOCUS_BLUR_DATA_API: (C = "focus") + _ + b + " blur" + _ + b,
        }),
        (I = (function () {
          function n(e) {
            this._element = e;
          }
          var e = n.prototype;
          return (
            (e.toggle = function () {
              var e = !0,
                t = !0,
                n = m(this._element).closest(S)[0];
              if (n) {
                var i = m(this._element).find(D)[0];
                if (i) {
                  if ("radio" === i.type)
                    if (i.checked && m(this._element).hasClass(w)) e = !1;
                    else {
                      var r = m(n).find(A)[0];
                      r && m(r).removeClass(w);
                    }
                  if (e) {
                    if (
                      i.hasAttribute("disabled") ||
                      n.hasAttribute("disabled") ||
                      i.classList.contains("disabled") ||
                      n.classList.contains("disabled")
                    )
                      return;
                    (i.checked = !m(this._element).hasClass(w)),
                      m(i).trigger("change");
                  }
                  i.focus(), (t = !1);
                }
              }
              t &&
                this._element.setAttribute(
                  "aria-pressed",
                  !m(this._element).hasClass(w)
                ),
                e && m(this._element).toggleClass(w);
            }),
            (e.dispose = function () {
              m.removeData(this._element, y), (this._element = null);
            }),
            (n._jQueryInterface = function (t) {
              return this.each(function () {
                var e = m(this).data(y);
                e || ((e = new n(this)), m(this).data(y, e)),
                  "toggle" === t && e[t]();
              });
            }),
            s(n, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.1.1";
                },
              },
            ]),
            n
          );
        })()),
        m(document)
          .on(k.CLICK_DATA_API, T, function (e) {
            e.preventDefault();
            var t = e.target;
            m(t).hasClass(x) || (t = m(t).closest(N)),
              I._jQueryInterface.call(m(t), "toggle");
          })
          .on(k.FOCUS_BLUR_DATA_API, T, function (e) {
            var t = m(e.target).closest(N)[0];
            m(t).toggleClass(C, /^focus(in)?$/.test(e.type));
          }),
        (m.fn[v] = I._jQueryInterface),
        (m.fn[v].Constructor = I),
        (m.fn[v].noConflict = function () {
          return (m.fn[v] = E), I._jQueryInterface;
        }),
        I),
      Kn =
        ((O = "carousel"),
        (H = "." + (L = "bs.carousel")),
        (P = ".data-api"),
        (R = (j = t).fn[O]),
        (M = {
          interval: 5e3,
          keyboard: !0,
          slide: !1,
          pause: "hover",
          wrap: !0,
        }),
        (q = {
          interval: "(number|boolean)",
          keyboard: "boolean",
          slide: "(boolean|string)",
          pause: "(string|boolean)",
          wrap: "boolean",
        }),
        (W = "next"),
        (B = "prev"),
        (F = "left"),
        (U = "right"),
        ($ = {
          SLIDE: "slide" + H,
          SLID: "slid" + H,
          KEYDOWN: "keydown" + H,
          MOUSEENTER: "mouseenter" + H,
          MOUSELEAVE: "mouseleave" + H,
          TOUCHEND: "touchend" + H,
          LOAD_DATA_API: "load" + H + P,
          CLICK_DATA_API: "click" + H + P,
        }),
        (K = "carousel"),
        (Q = "active"),
        (z = "slide"),
        (V = "carousel-item-right"),
        (Y = "carousel-item-left"),
        (X = "carousel-item-next"),
        (G = "carousel-item-prev"),
        (Z = ".active"),
        (J = ".active.carousel-item"),
        (ee = ".carousel-item"),
        (te = ".carousel-item-next, .carousel-item-prev"),
        (ne = ".carousel-indicators"),
        (ie = "[data-slide], [data-slide-to]"),
        (re = '[data-ride="carousel"]'),
        (oe = (function () {
          function o(e, t) {
            (this._items = null),
              (this._interval = null),
              (this._activeElement = null),
              (this._isPaused = !1),
              (this._isSliding = !1),
              (this.touchTimeout = null),
              (this._config = this._getConfig(t)),
              (this._element = j(e)[0]),
              (this._indicatorsElement = j(this._element).find(ne)[0]),
              this._addEventListeners();
          }
          var e = o.prototype;
          return (
            (e.next = function () {
              this._isSliding || this._slide(W);
            }),
            (e.nextWhenVisible = function () {
              !document.hidden &&
                j(this._element).is(":visible") &&
                "hidden" !== j(this._element).css("visibility") &&
                this.next();
            }),
            (e.prev = function () {
              this._isSliding || this._slide(B);
            }),
            (e.pause = function (e) {
              e || (this._isPaused = !0),
                j(this._element).find(te)[0] &&
                  (Fn.triggerTransitionEnd(this._element), this.cycle(!0)),
                clearInterval(this._interval),
                (this._interval = null);
            }),
            (e.cycle = function (e) {
              e || (this._isPaused = !1),
                this._interval &&
                  (clearInterval(this._interval), (this._interval = null)),
                this._config.interval &&
                  !this._isPaused &&
                  (this._interval = setInterval(
                    (document.visibilityState
                      ? this.nextWhenVisible
                      : this.next
                    ).bind(this),
                    this._config.interval
                  ));
            }),
            (e.to = function (e) {
              var t = this;
              this._activeElement = j(this._element).find(J)[0];
              var n = this._getItemIndex(this._activeElement);
              if (!(e > this._items.length - 1 || e < 0))
                if (this._isSliding)
                  j(this._element).one($.SLID, function () {
                    return t.to(e);
                  });
                else {
                  if (n === e) return this.pause(), void this.cycle();
                  var i = n < e ? W : B;
                  this._slide(i, this._items[e]);
                }
            }),
            (e.dispose = function () {
              j(this._element).off(H),
                j.removeData(this._element, L),
                (this._items = null),
                (this._config = null),
                (this._element = null),
                (this._interval = null),
                (this._isPaused = null),
                (this._isSliding = null),
                (this._activeElement = null),
                (this._indicatorsElement = null);
            }),
            (e._getConfig = function (e) {
              return (e = u({}, M, e)), Fn.typeCheckConfig(O, e, q), e;
            }),
            (e._addEventListeners = function () {
              var t = this;
              this._config.keyboard &&
                j(this._element).on($.KEYDOWN, function (e) {
                  return t._keydown(e);
                }),
                "hover" === this._config.pause &&
                  (j(this._element)
                    .on($.MOUSEENTER, function (e) {
                      return t.pause(e);
                    })
                    .on($.MOUSELEAVE, function (e) {
                      return t.cycle(e);
                    }),
                  "ontouchstart" in document.documentElement &&
                    j(this._element).on($.TOUCHEND, function () {
                      t.pause(),
                        t.touchTimeout && clearTimeout(t.touchTimeout),
                        (t.touchTimeout = setTimeout(function (e) {
                          return t.cycle(e);
                        }, 500 + t._config.interval));
                    }));
            }),
            (e._keydown = function (e) {
              if (!/input|textarea/i.test(e.target.tagName))
                switch (e.which) {
                  case 37:
                    e.preventDefault(), this.prev();
                    break;
                  case 39:
                    e.preventDefault(), this.next();
                }
            }),
            (e._getItemIndex = function (e) {
              return (
                (this._items = j.makeArray(j(e).parent().find(ee))),
                this._items.indexOf(e)
              );
            }),
            (e._getItemByDirection = function (e, t) {
              var n = e === W,
                i = e === B,
                r = this._getItemIndex(t),
                o = this._items.length - 1;
              if (((i && 0 === r) || (n && r === o)) && !this._config.wrap)
                return t;
              var s = (r + (e === B ? -1 : 1)) % this._items.length;
              return -1 === s
                ? this._items[this._items.length - 1]
                : this._items[s];
            }),
            (e._triggerSlideEvent = function (e, t) {
              var n = this._getItemIndex(e),
                i = this._getItemIndex(j(this._element).find(J)[0]),
                r = j.Event($.SLIDE, {
                  relatedTarget: e,
                  direction: t,
                  from: i,
                  to: n,
                });
              return j(this._element).trigger(r), r;
            }),
            (e._setActiveIndicatorElement = function (e) {
              if (this._indicatorsElement) {
                j(this._indicatorsElement).find(Z).removeClass(Q);
                var t = this._indicatorsElement.children[this._getItemIndex(e)];
                t && j(t).addClass(Q);
              }
            }),
            (e._slide = function (e, t) {
              var n,
                i,
                r,
                o = this,
                s = j(this._element).find(J)[0],
                a = this._getItemIndex(s),
                l = t || (s && this._getItemByDirection(e, s)),
                u = this._getItemIndex(l),
                c = Boolean(this._interval);
              if (
                (e === W
                  ? ((n = Y), (i = X), (r = F))
                  : ((n = V), (i = G), (r = U)),
                l && j(l).hasClass(Q))
              )
                this._isSliding = !1;
              else if (
                !this._triggerSlideEvent(l, r).isDefaultPrevented() &&
                s &&
                l
              ) {
                (this._isSliding = !0),
                  c && this.pause(),
                  this._setActiveIndicatorElement(l);
                var f = j.Event($.SLID, {
                  relatedTarget: l,
                  direction: r,
                  from: a,
                  to: u,
                });
                if (j(this._element).hasClass(z)) {
                  j(l).addClass(i),
                    Fn.reflow(l),
                    j(s).addClass(n),
                    j(l).addClass(n);
                  var h = Fn.getTransitionDurationFromElement(s);
                  j(s)
                    .one(Fn.TRANSITION_END, function () {
                      j(l)
                        .removeClass(n + " " + i)
                        .addClass(Q),
                        j(s).removeClass(Q + " " + i + " " + n),
                        (o._isSliding = !1),
                        setTimeout(function () {
                          return j(o._element).trigger(f);
                        }, 0);
                    })
                    .emulateTransitionEnd(h);
                } else
                  j(s).removeClass(Q),
                    j(l).addClass(Q),
                    (this._isSliding = !1),
                    j(this._element).trigger(f);
                c && this.cycle();
              }
            }),
            (o._jQueryInterface = function (i) {
              return this.each(function () {
                var e = j(this).data(L),
                  t = u({}, M, j(this).data());
                "object" == typeof i && (t = u({}, t, i));
                var n = "string" == typeof i ? i : t.slide;
                if (
                  (e || ((e = new o(this, t)), j(this).data(L, e)),
                  "number" == typeof i)
                )
                  e.to(i);
                else if ("string" == typeof n) {
                  if (void 0 === e[n])
                    throw new TypeError('No method named "' + n + '"');
                  e[n]();
                } else t.interval && (e.pause(), e.cycle());
              });
            }),
            (o._dataApiClickHandler = function (e) {
              var t = Fn.getSelectorFromElement(this);
              if (t) {
                var n = j(t)[0];
                if (n && j(n).hasClass(K)) {
                  var i = u({}, j(n).data(), j(this).data()),
                    r = this.getAttribute("data-slide-to");
                  r && (i.interval = !1),
                    o._jQueryInterface.call(j(n), i),
                    r && j(n).data(L).to(r),
                    e.preventDefault();
                }
              }
            }),
            s(o, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.1.1";
                },
              },
              {
                key: "Default",
                get: function () {
                  return M;
                },
              },
            ]),
            o
          );
        })()),
        j(document).on($.CLICK_DATA_API, ie, oe._dataApiClickHandler),
        j(window).on($.LOAD_DATA_API, function () {
          j(re).each(function () {
            var e = j(this);
            oe._jQueryInterface.call(e, e.data());
          });
        }),
        (j.fn[O] = oe._jQueryInterface),
        (j.fn[O].Constructor = oe),
        (j.fn[O].noConflict = function () {
          return (j.fn[O] = R), oe._jQueryInterface;
        }),
        oe),
      Qn =
        ((ae = "collapse"),
        (ue = "." + (le = "bs.collapse")),
        (ce = (se = t).fn[ae]),
        (fe = { toggle: !0, parent: "" }),
        (he = { toggle: "boolean", parent: "(string|element)" }),
        (de = {
          SHOW: "show" + ue,
          SHOWN: "shown" + ue,
          HIDE: "hide" + ue,
          HIDDEN: "hidden" + ue,
          CLICK_DATA_API: "click" + ue + ".data-api",
        }),
        (pe = "show"),
        (ge = "collapse"),
        (me = "collapsing"),
        (ve = "collapsed"),
        (ye = "width"),
        (_e = "height"),
        (be = ".show, .collapsing"),
        (Ee = '[data-toggle="collapse"]'),
        (we = (function () {
          function a(e, t) {
            (this._isTransitioning = !1),
              (this._element = e),
              (this._config = this._getConfig(t)),
              (this._triggerArray = se.makeArray(
                se(
                  '[data-toggle="collapse"][href="#' +
                    e.id +
                    '"],[data-toggle="collapse"][data-target="#' +
                    e.id +
                    '"]'
                )
              ));
            for (var n = se(Ee), i = 0; i < n.length; i++) {
              var r = n[i],
                o = Fn.getSelectorFromElement(r);
              null !== o &&
                0 < se(o).filter(e).length &&
                ((this._selector = o), this._triggerArray.push(r));
            }
            (this._parent = this._config.parent ? this._getParent() : null),
              this._config.parent ||
                this._addAriaAndCollapsedClass(
                  this._element,
                  this._triggerArray
                ),
              this._config.toggle && this.toggle();
          }
          var e = a.prototype;
          return (
            (e.toggle = function () {
              se(this._element).hasClass(pe) ? this.hide() : this.show();
            }),
            (e.show = function () {
              var e,
                t,
                n = this;
              if (
                !this._isTransitioning &&
                !se(this._element).hasClass(pe) &&
                (this._parent &&
                  0 ===
                    (e = se.makeArray(
                      se(this._parent)
                        .find(be)
                        .filter('[data-parent="' + this._config.parent + '"]')
                    )).length &&
                  (e = null),
                !(
                  e &&
                  (t = se(e).not(this._selector).data(le)) &&
                  t._isTransitioning
                ))
              ) {
                var i = se.Event(de.SHOW);
                if ((se(this._element).trigger(i), !i.isDefaultPrevented())) {
                  e &&
                    (a._jQueryInterface.call(se(e).not(this._selector), "hide"),
                    t || se(e).data(le, null));
                  var r = this._getDimension();
                  se(this._element).removeClass(ge).addClass(me),
                    (this._element.style[r] = 0) < this._triggerArray.length &&
                      se(this._triggerArray)
                        .removeClass(ve)
                        .attr("aria-expanded", !0),
                    this.setTransitioning(!0);
                  var o = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                    s = Fn.getTransitionDurationFromElement(this._element);
                  se(this._element)
                    .one(Fn.TRANSITION_END, function () {
                      se(n._element).removeClass(me).addClass(ge).addClass(pe),
                        (n._element.style[r] = ""),
                        n.setTransitioning(!1),
                        se(n._element).trigger(de.SHOWN);
                    })
                    .emulateTransitionEnd(s),
                    (this._element.style[r] = this._element[o] + "px");
                }
              }
            }),
            (e.hide = function () {
              var e = this;
              if (!this._isTransitioning && se(this._element).hasClass(pe)) {
                var t = se.Event(de.HIDE);
                if ((se(this._element).trigger(t), !t.isDefaultPrevented())) {
                  var n = this._getDimension();
                  if (
                    ((this._element.style[n] =
                      this._element.getBoundingClientRect()[n] + "px"),
                    Fn.reflow(this._element),
                    se(this._element)
                      .addClass(me)
                      .removeClass(ge)
                      .removeClass(pe),
                    0 < this._triggerArray.length)
                  )
                    for (var i = 0; i < this._triggerArray.length; i++) {
                      var r = this._triggerArray[i],
                        o = Fn.getSelectorFromElement(r);
                      if (null !== o)
                        se(o).hasClass(pe) ||
                          se(r).addClass(ve).attr("aria-expanded", !1);
                    }
                  this.setTransitioning(!0);
                  this._element.style[n] = "";
                  var s = Fn.getTransitionDurationFromElement(this._element);
                  se(this._element)
                    .one(Fn.TRANSITION_END, function () {
                      e.setTransitioning(!1),
                        se(e._element)
                          .removeClass(me)
                          .addClass(ge)
                          .trigger(de.HIDDEN);
                    })
                    .emulateTransitionEnd(s);
                }
              }
            }),
            (e.setTransitioning = function (e) {
              this._isTransitioning = e;
            }),
            (e.dispose = function () {
              se.removeData(this._element, le),
                (this._config = null),
                (this._parent = null),
                (this._element = null),
                (this._triggerArray = null),
                (this._isTransitioning = null);
            }),
            (e._getConfig = function (e) {
              return (
                ((e = u({}, fe, e)).toggle = Boolean(e.toggle)),
                Fn.typeCheckConfig(ae, e, he),
                e
              );
            }),
            (e._getDimension = function () {
              return se(this._element).hasClass(ye) ? ye : _e;
            }),
            (e._getParent = function () {
              var n = this,
                e = null;
              Fn.isElement(this._config.parent)
                ? ((e = this._config.parent),
                  void 0 !== this._config.parent.jquery &&
                    (e = this._config.parent[0]))
                : (e = se(this._config.parent)[0]);
              var t =
                '[data-toggle="collapse"][data-parent="' +
                this._config.parent +
                '"]';
              return (
                se(e)
                  .find(t)
                  .each(function (e, t) {
                    n._addAriaAndCollapsedClass(a._getTargetFromElement(t), [
                      t,
                    ]);
                  }),
                e
              );
            }),
            (e._addAriaAndCollapsedClass = function (e, t) {
              if (e) {
                var n = se(e).hasClass(pe);
                0 < t.length &&
                  se(t).toggleClass(ve, !n).attr("aria-expanded", n);
              }
            }),
            (a._getTargetFromElement = function (e) {
              var t = Fn.getSelectorFromElement(e);
              return t ? se(t)[0] : null;
            }),
            (a._jQueryInterface = function (i) {
              return this.each(function () {
                var e = se(this),
                  t = e.data(le),
                  n = u({}, fe, e.data(), "object" == typeof i && i ? i : {});
                if (
                  (!t && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
                  t || ((t = new a(this, n)), e.data(le, t)),
                  "string" == typeof i)
                ) {
                  if (void 0 === t[i])
                    throw new TypeError('No method named "' + i + '"');
                  t[i]();
                }
              });
            }),
            s(a, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.1.1";
                },
              },
              {
                key: "Default",
                get: function () {
                  return fe;
                },
              },
            ]),
            a
          );
        })()),
        se(document).on(de.CLICK_DATA_API, Ee, function (e) {
          "A" === e.currentTarget.tagName && e.preventDefault();
          var n = se(this),
            t = Fn.getSelectorFromElement(this);
          se(t).each(function () {
            var e = se(this),
              t = e.data(le) ? "toggle" : n.data();
            we._jQueryInterface.call(e, t);
          });
        }),
        (se.fn[ae] = we._jQueryInterface),
        (se.fn[ae].Constructor = we),
        (se.fn[ae].noConflict = function () {
          return (se.fn[ae] = ce), we._jQueryInterface;
        }),
        we),
      zn =
        ((Ce = "dropdown"),
        (Se = "." + (Te = "bs.dropdown")),
        (De = ".data-api"),
        (Ae = (xe = t).fn[Ce]),
        (Ne = new RegExp("38|40|27")),
        (ke = {
          HIDE: "hide" + Se,
          HIDDEN: "hidden" + Se,
          SHOW: "show" + Se,
          SHOWN: "shown" + Se,
          CLICK: "click" + Se,
          CLICK_DATA_API: "click" + Se + De,
          KEYDOWN_DATA_API: "keydown" + Se + De,
          KEYUP_DATA_API: "keyup" + Se + De,
        }),
        (Ie = "disabled"),
        (je = "show"),
        (Oe = "dropup"),
        (Le = "dropright"),
        (He = "dropleft"),
        (Pe = "dropdown-menu-right"),
        (Re = "position-static"),
        (Me = '[data-toggle="dropdown"]'),
        (qe = ".dropdown form"),
        (We = ".dropdown-menu"),
        (Be = ".navbar-nav"),
        (Fe = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"),
        (Ue = "top-start"),
        ($e = "top-end"),
        (Ke = "bottom-start"),
        (Qe = "bottom-end"),
        (ze = "right-start"),
        (Ve = "left-start"),
        (Ye = {
          offset: 0,
          flip: !0,
          boundary: "scrollParent",
          reference: "toggle",
          display: "dynamic",
        }),
        (Xe = {
          offset: "(number|string|function)",
          flip: "boolean",
          boundary: "(string|element)",
          reference: "(string|element)",
          display: "string",
        }),
        (Ge = (function () {
          function l(e, t) {
            (this._element = e),
              (this._popper = null),
              (this._config = this._getConfig(t)),
              (this._menu = this._getMenuElement()),
              (this._inNavbar = this._detectNavbar()),
              this._addEventListeners();
          }
          var e = l.prototype;
          return (
            (e.toggle = function () {
              if (!this._element.disabled && !xe(this._element).hasClass(Ie)) {
                var e = l._getParentFromElement(this._element),
                  t = xe(this._menu).hasClass(je);
                if ((l._clearMenus(), !t)) {
                  var n = { relatedTarget: this._element },
                    i = xe.Event(ke.SHOW, n);
                  if ((xe(e).trigger(i), !i.isDefaultPrevented())) {
                    if (!this._inNavbar) {
                      if (void 0 === c)
                        throw new TypeError(
                          "Bootstrap dropdown require Popper.js (https://popper.js.org)"
                        );
                      var r = this._element;
                      "parent" === this._config.reference
                        ? (r = e)
                        : Fn.isElement(this._config.reference) &&
                          ((r = this._config.reference),
                          void 0 !== this._config.reference.jquery &&
                            (r = this._config.reference[0])),
                        "scrollParent" !== this._config.boundary &&
                          xe(e).addClass(Re),
                        (this._popper = new c(
                          r,
                          this._menu,
                          this._getPopperConfig()
                        ));
                    }
                    "ontouchstart" in document.documentElement &&
                      0 === xe(e).closest(Be).length &&
                      xe(document.body)
                        .children()
                        .on("mouseover", null, xe.noop),
                      this._element.focus(),
                      this._element.setAttribute("aria-expanded", !0),
                      xe(this._menu).toggleClass(je),
                      xe(e).toggleClass(je).trigger(xe.Event(ke.SHOWN, n));
                  }
                }
              }
            }),
            (e.dispose = function () {
              xe.removeData(this._element, Te),
                xe(this._element).off(Se),
                (this._element = null),
                (this._menu = null) !== this._popper &&
                  (this._popper.destroy(), (this._popper = null));
            }),
            (e.update = function () {
              (this._inNavbar = this._detectNavbar()),
                null !== this._popper && this._popper.scheduleUpdate();
            }),
            (e._addEventListeners = function () {
              var t = this;
              xe(this._element).on(ke.CLICK, function (e) {
                e.preventDefault(), e.stopPropagation(), t.toggle();
              });
            }),
            (e._getConfig = function (e) {
              return (
                (e = u(
                  {},
                  this.constructor.Default,
                  xe(this._element).data(),
                  e
                )),
                Fn.typeCheckConfig(Ce, e, this.constructor.DefaultType),
                e
              );
            }),
            (e._getMenuElement = function () {
              if (!this._menu) {
                var e = l._getParentFromElement(this._element);
                this._menu = xe(e).find(We)[0];
              }
              return this._menu;
            }),
            (e._getPlacement = function () {
              var e = xe(this._element).parent(),
                t = Ke;
              return (
                e.hasClass(Oe)
                  ? ((t = Ue), xe(this._menu).hasClass(Pe) && (t = $e))
                  : e.hasClass(Le)
                  ? (t = ze)
                  : e.hasClass(He)
                  ? (t = Ve)
                  : xe(this._menu).hasClass(Pe) && (t = Qe),
                t
              );
            }),
            (e._detectNavbar = function () {
              return 0 < xe(this._element).closest(".navbar").length;
            }),
            (e._getPopperConfig = function () {
              var t = this,
                e = {};
              "function" == typeof this._config.offset
                ? (e.fn = function (e) {
                    return (
                      (e.offsets = u(
                        {},
                        e.offsets,
                        t._config.offset(e.offsets) || {}
                      )),
                      e
                    );
                  })
                : (e.offset = this._config.offset);
              var n = {
                placement: this._getPlacement(),
                modifiers: {
                  offset: e,
                  flip: { enabled: this._config.flip },
                  preventOverflow: { boundariesElement: this._config.boundary },
                },
              };
              return (
                "static" === this._config.display &&
                  (n.modifiers.applyStyle = { enabled: !1 }),
                n
              );
            }),
            (l._jQueryInterface = function (t) {
              return this.each(function () {
                var e = xe(this).data(Te);
                if (
                  (e ||
                    ((e = new l(this, "object" == typeof t ? t : null)),
                    xe(this).data(Te, e)),
                  "string" == typeof t)
                ) {
                  if (void 0 === e[t])
                    throw new TypeError('No method named "' + t + '"');
                  e[t]();
                }
              });
            }),
            (l._clearMenus = function (e) {
              if (
                !e ||
                (3 !== e.which && ("keyup" !== e.type || 9 === e.which))
              )
                for (var t = xe.makeArray(xe(Me)), n = 0; n < t.length; n++) {
                  var i = l._getParentFromElement(t[n]),
                    r = xe(t[n]).data(Te),
                    o = { relatedTarget: t[n] };
                  if (r) {
                    var s = r._menu;
                    if (
                      xe(i).hasClass(je) &&
                      !(
                        e &&
                        (("click" === e.type &&
                          /input|textarea/i.test(e.target.tagName)) ||
                          ("keyup" === e.type && 9 === e.which)) &&
                        xe.contains(i, e.target)
                      )
                    ) {
                      var a = xe.Event(ke.HIDE, o);
                      xe(i).trigger(a),
                        a.isDefaultPrevented() ||
                          ("ontouchstart" in document.documentElement &&
                            xe(document.body)
                              .children()
                              .off("mouseover", null, xe.noop),
                          t[n].setAttribute("aria-expanded", "false"),
                          xe(s).removeClass(je),
                          xe(i)
                            .removeClass(je)
                            .trigger(xe.Event(ke.HIDDEN, o)));
                    }
                  }
                }
            }),
            (l._getParentFromElement = function (e) {
              var t,
                n = Fn.getSelectorFromElement(e);
              return n && (t = xe(n)[0]), t || e.parentNode;
            }),
            (l._dataApiKeydownHandler = function (e) {
              if (
                (/input|textarea/i.test(e.target.tagName)
                  ? !(
                      32 === e.which ||
                      (27 !== e.which &&
                        ((40 !== e.which && 38 !== e.which) ||
                          xe(e.target).closest(We).length))
                    )
                  : Ne.test(e.which)) &&
                (e.preventDefault(),
                e.stopPropagation(),
                !this.disabled && !xe(this).hasClass(Ie))
              ) {
                var t = l._getParentFromElement(this),
                  n = xe(t).hasClass(je);
                if (
                  (n || (27 === e.which && 32 === e.which)) &&
                  (!n || (27 !== e.which && 32 !== e.which))
                ) {
                  var i = xe(t).find(Fe).get();
                  if (0 !== i.length) {
                    var r = i.indexOf(e.target);
                    38 === e.which && 0 < r && r--,
                      40 === e.which && r < i.length - 1 && r++,
                      r < 0 && (r = 0),
                      i[r].focus();
                  }
                } else {
                  if (27 === e.which) {
                    var o = xe(t).find(Me)[0];
                    xe(o).trigger("focus");
                  }
                  xe(this).trigger("click");
                }
              }
            }),
            s(l, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.1.1";
                },
              },
              {
                key: "Default",
                get: function () {
                  return Ye;
                },
              },
              {
                key: "DefaultType",
                get: function () {
                  return Xe;
                },
              },
            ]),
            l
          );
        })()),
        xe(document)
          .on(ke.KEYDOWN_DATA_API, Me, Ge._dataApiKeydownHandler)
          .on(ke.KEYDOWN_DATA_API, We, Ge._dataApiKeydownHandler)
          .on(ke.CLICK_DATA_API + " " + ke.KEYUP_DATA_API, Ge._clearMenus)
          .on(ke.CLICK_DATA_API, Me, function (e) {
            e.preventDefault(),
              e.stopPropagation(),
              Ge._jQueryInterface.call(xe(this), "toggle");
          })
          .on(ke.CLICK_DATA_API, qe, function (e) {
            e.stopPropagation();
          }),
        (xe.fn[Ce] = Ge._jQueryInterface),
        (xe.fn[Ce].Constructor = Ge),
        (xe.fn[Ce].noConflict = function () {
          return (xe.fn[Ce] = Ae), Ge._jQueryInterface;
        }),
        Ge),
      Vn =
        ((Je = "modal"),
        (tt = "." + (et = "bs.modal")),
        (nt = (Ze = t).fn[Je]),
        (it = { backdrop: !0, keyboard: !0, focus: !0, show: !0 }),
        (rt = {
          backdrop: "(boolean|string)",
          keyboard: "boolean",
          focus: "boolean",
          show: "boolean",
        }),
        (ot = {
          HIDE: "hide" + tt,
          HIDDEN: "hidden" + tt,
          SHOW: "show" + tt,
          SHOWN: "shown" + tt,
          FOCUSIN: "focusin" + tt,
          RESIZE: "resize" + tt,
          CLICK_DISMISS: "click.dismiss" + tt,
          KEYDOWN_DISMISS: "keydown.dismiss" + tt,
          MOUSEUP_DISMISS: "mouseup.dismiss" + tt,
          MOUSEDOWN_DISMISS: "mousedown.dismiss" + tt,
          CLICK_DATA_API: "click" + tt + ".data-api",
        }),
        (st = "modal-scrollbar-measure"),
        (at = "modal-backdrop"),
        (lt = "modal-open"),
        (ut = "fade"),
        (ct = "show"),
        (ft = ".modal-dialog"),
        (ht = '[data-toggle="modal"]'),
        (dt = '[data-dismiss="modal"]'),
        (pt = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"),
        (gt = ".sticky-top"),
        (mt = ".navbar-toggler"),
        (vt = (function () {
          function r(e, t) {
            (this._config = this._getConfig(t)),
              (this._element = e),
              (this._dialog = Ze(e).find(ft)[0]),
              (this._backdrop = null),
              (this._isShown = !1),
              (this._isBodyOverflowing = !1),
              (this._ignoreBackdropClick = !1),
              (this._scrollbarWidth = 0);
          }
          var e = r.prototype;
          return (
            (e.toggle = function (e) {
              return this._isShown ? this.hide() : this.show(e);
            }),
            (e.show = function (e) {
              var t = this;
              if (!this._isTransitioning && !this._isShown) {
                Ze(this._element).hasClass(ut) && (this._isTransitioning = !0);
                var n = Ze.Event(ot.SHOW, { relatedTarget: e });
                Ze(this._element).trigger(n),
                  this._isShown ||
                    n.isDefaultPrevented() ||
                    ((this._isShown = !0),
                    this._checkScrollbar(),
                    this._setScrollbar(),
                    this._adjustDialog(),
                    Ze(document.body).addClass(lt),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    Ze(this._element).on(ot.CLICK_DISMISS, dt, function (e) {
                      return t.hide(e);
                    }),
                    Ze(this._dialog).on(ot.MOUSEDOWN_DISMISS, function () {
                      Ze(t._element).one(ot.MOUSEUP_DISMISS, function (e) {
                        Ze(e.target).is(t._element) &&
                          (t._ignoreBackdropClick = !0);
                      });
                    }),
                    this._showBackdrop(function () {
                      return t._showElement(e);
                    }));
              }
            }),
            (e.hide = function (e) {
              var t = this;
              if (
                (e && e.preventDefault(),
                !this._isTransitioning && this._isShown)
              ) {
                var n = Ze.Event(ot.HIDE);
                if (
                  (Ze(this._element).trigger(n),
                  this._isShown && !n.isDefaultPrevented())
                ) {
                  this._isShown = !1;
                  var i = Ze(this._element).hasClass(ut);
                  if (
                    (i && (this._isTransitioning = !0),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    Ze(document).off(ot.FOCUSIN),
                    Ze(this._element).removeClass(ct),
                    Ze(this._element).off(ot.CLICK_DISMISS),
                    Ze(this._dialog).off(ot.MOUSEDOWN_DISMISS),
                    i)
                  ) {
                    var r = Fn.getTransitionDurationFromElement(this._element);
                    Ze(this._element)
                      .one(Fn.TRANSITION_END, function (e) {
                        return t._hideModal(e);
                      })
                      .emulateTransitionEnd(r);
                  } else this._hideModal();
                }
              }
            }),
            (e.dispose = function () {
              Ze.removeData(this._element, et),
                Ze(window, document, this._element, this._backdrop).off(tt),
                (this._config = null),
                (this._element = null),
                (this._dialog = null),
                (this._backdrop = null),
                (this._isShown = null),
                (this._isBodyOverflowing = null),
                (this._ignoreBackdropClick = null),
                (this._scrollbarWidth = null);
            }),
            (e.handleUpdate = function () {
              this._adjustDialog();
            }),
            (e._getConfig = function (e) {
              return (e = u({}, it, e)), Fn.typeCheckConfig(Je, e, rt), e;
            }),
            (e._showElement = function (e) {
              var t = this,
                n = Ze(this._element).hasClass(ut);
              (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
                document.body.appendChild(this._element),
                (this._element.style.display = "block"),
                this._element.removeAttribute("aria-hidden"),
                (this._element.scrollTop = 0),
                n && Fn.reflow(this._element),
                Ze(this._element).addClass(ct),
                this._config.focus && this._enforceFocus();
              var i = Ze.Event(ot.SHOWN, { relatedTarget: e }),
                r = function () {
                  t._config.focus && t._element.focus(),
                    (t._isTransitioning = !1),
                    Ze(t._element).trigger(i);
                };
              if (n) {
                var o = Fn.getTransitionDurationFromElement(this._element);
                Ze(this._dialog)
                  .one(Fn.TRANSITION_END, r)
                  .emulateTransitionEnd(o);
              } else r();
            }),
            (e._enforceFocus = function () {
              var t = this;
              Ze(document)
                .off(ot.FOCUSIN)
                .on(ot.FOCUSIN, function (e) {
                  document !== e.target &&
                    t._element !== e.target &&
                    0 === Ze(t._element).has(e.target).length &&
                    t._element.focus();
                });
            }),
            (e._setEscapeEvent = function () {
              var t = this;
              this._isShown && this._config.keyboard
                ? Ze(this._element).on(ot.KEYDOWN_DISMISS, function (e) {
                    27 === e.which && (e.preventDefault(), t.hide());
                  })
                : this._isShown || Ze(this._element).off(ot.KEYDOWN_DISMISS);
            }),
            (e._setResizeEvent = function () {
              var t = this;
              this._isShown
                ? Ze(window).on(ot.RESIZE, function (e) {
                    return t.handleUpdate(e);
                  })
                : Ze(window).off(ot.RESIZE);
            }),
            (e._hideModal = function () {
              var e = this;
              (this._element.style.display = "none"),
                this._element.setAttribute("aria-hidden", !0),
                (this._isTransitioning = !1),
                this._showBackdrop(function () {
                  Ze(document.body).removeClass(lt),
                    e._resetAdjustments(),
                    e._resetScrollbar(),
                    Ze(e._element).trigger(ot.HIDDEN);
                });
            }),
            (e._removeBackdrop = function () {
              this._backdrop &&
                (Ze(this._backdrop).remove(), (this._backdrop = null));
            }),
            (e._showBackdrop = function (e) {
              var t = this,
                n = Ze(this._element).hasClass(ut) ? ut : "";
              if (this._isShown && this._config.backdrop) {
                if (
                  ((this._backdrop = document.createElement("div")),
                  (this._backdrop.className = at),
                  n && Ze(this._backdrop).addClass(n),
                  Ze(this._backdrop).appendTo(document.body),
                  Ze(this._element).on(ot.CLICK_DISMISS, function (e) {
                    t._ignoreBackdropClick
                      ? (t._ignoreBackdropClick = !1)
                      : e.target === e.currentTarget &&
                        ("static" === t._config.backdrop
                          ? t._element.focus()
                          : t.hide());
                  }),
                  n && Fn.reflow(this._backdrop),
                  Ze(this._backdrop).addClass(ct),
                  !e)
                )
                  return;
                if (!n) return void e();
                var i = Fn.getTransitionDurationFromElement(this._backdrop);
                Ze(this._backdrop)
                  .one(Fn.TRANSITION_END, e)
                  .emulateTransitionEnd(i);
              } else if (!this._isShown && this._backdrop) {
                Ze(this._backdrop).removeClass(ct);
                var r = function () {
                  t._removeBackdrop(), e && e();
                };
                if (Ze(this._element).hasClass(ut)) {
                  var o = Fn.getTransitionDurationFromElement(this._backdrop);
                  Ze(this._backdrop)
                    .one(Fn.TRANSITION_END, r)
                    .emulateTransitionEnd(o);
                } else r();
              } else e && e();
            }),
            (e._adjustDialog = function () {
              var e =
                this._element.scrollHeight >
                document.documentElement.clientHeight;
              !this._isBodyOverflowing &&
                e &&
                (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
                this._isBodyOverflowing &&
                  !e &&
                  (this._element.style.paddingRight =
                    this._scrollbarWidth + "px");
            }),
            (e._resetAdjustments = function () {
              (this._element.style.paddingLeft = ""),
                (this._element.style.paddingRight = "");
            }),
            (e._checkScrollbar = function () {
              var e = document.body.getBoundingClientRect();
              (this._isBodyOverflowing = e.left + e.right < window.innerWidth),
                (this._scrollbarWidth = this._getScrollbarWidth());
            }),
            (e._setScrollbar = function () {
              var r = this;
              if (this._isBodyOverflowing) {
                Ze(pt).each(function (e, t) {
                  var n = Ze(t)[0].style.paddingRight,
                    i = Ze(t).css("padding-right");
                  Ze(t)
                    .data("padding-right", n)
                    .css(
                      "padding-right",
                      parseFloat(i) + r._scrollbarWidth + "px"
                    );
                }),
                  Ze(gt).each(function (e, t) {
                    var n = Ze(t)[0].style.marginRight,
                      i = Ze(t).css("margin-right");
                    Ze(t)
                      .data("margin-right", n)
                      .css(
                        "margin-right",
                        parseFloat(i) - r._scrollbarWidth + "px"
                      );
                  }),
                  Ze(mt).each(function (e, t) {
                    var n = Ze(t)[0].style.marginRight,
                      i = Ze(t).css("margin-right");
                    Ze(t)
                      .data("margin-right", n)
                      .css(
                        "margin-right",
                        parseFloat(i) + r._scrollbarWidth + "px"
                      );
                  });
                var e = document.body.style.paddingRight,
                  t = Ze(document.body).css("padding-right");
                Ze(document.body)
                  .data("padding-right", e)
                  .css(
                    "padding-right",
                    parseFloat(t) + this._scrollbarWidth + "px"
                  );
              }
            }),
            (e._resetScrollbar = function () {
              Ze(pt).each(function (e, t) {
                var n = Ze(t).data("padding-right");
                void 0 !== n &&
                  Ze(t).css("padding-right", n).removeData("padding-right");
              }),
                Ze(gt + ", " + mt).each(function (e, t) {
                  var n = Ze(t).data("margin-right");
                  void 0 !== n &&
                    Ze(t).css("margin-right", n).removeData("margin-right");
                });
              var e = Ze(document.body).data("padding-right");
              void 0 !== e &&
                Ze(document.body)
                  .css("padding-right", e)
                  .removeData("padding-right");
            }),
            (e._getScrollbarWidth = function () {
              var e = document.createElement("div");
              (e.className = st), document.body.appendChild(e);
              var t = e.getBoundingClientRect().width - e.clientWidth;
              return document.body.removeChild(e), t;
            }),
            (r._jQueryInterface = function (n, i) {
              return this.each(function () {
                var e = Ze(this).data(et),
                  t = u(
                    {},
                    it,
                    Ze(this).data(),
                    "object" == typeof n && n ? n : {}
                  );
                if (
                  (e || ((e = new r(this, t)), Ze(this).data(et, e)),
                  "string" == typeof n)
                ) {
                  if (void 0 === e[n])
                    throw new TypeError('No method named "' + n + '"');
                  e[n](i);
                } else t.show && e.show(i);
              });
            }),
            s(r, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.1.1";
                },
              },
              {
                key: "Default",
                get: function () {
                  return it;
                },
              },
            ]),
            r
          );
        })()),
        Ze(document).on(ot.CLICK_DATA_API, ht, function (e) {
          var t,
            n = this,
            i = Fn.getSelectorFromElement(this);
          i && (t = Ze(i)[0]);
          var r = Ze(t).data(et)
            ? "toggle"
            : u({}, Ze(t).data(), Ze(this).data());
          ("A" !== this.tagName && "AREA" !== this.tagName) ||
            e.preventDefault();
          var o = Ze(t).one(ot.SHOW, function (e) {
            e.isDefaultPrevented() ||
              o.one(ot.HIDDEN, function () {
                Ze(n).is(":visible") && n.focus();
              });
          });
          vt._jQueryInterface.call(Ze(t), r, this);
        }),
        (Ze.fn[Je] = vt._jQueryInterface),
        (Ze.fn[Je].Constructor = vt),
        (Ze.fn[Je].noConflict = function () {
          return (Ze.fn[Je] = nt), vt._jQueryInterface;
        }),
        vt),
      Yn =
        ((_t = "tooltip"),
        (Et = "." + (bt = "bs.tooltip")),
        (wt = (yt = t).fn[_t]),
        (xt = "bs-tooltip"),
        (Ct = new RegExp("(^|\\s)" + xt + "\\S+", "g")),
        (Dt = {
          animation: !0,
          template:
            '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
          trigger: "hover focus",
          title: "",
          delay: 0,
          html: !(St = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left",
          }),
          selector: !(Tt = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
          }),
          placement: "top",
          offset: 0,
          container: !1,
          fallbackPlacement: "flip",
          boundary: "scrollParent",
        }),
        (Nt = "out"),
        (kt = {
          HIDE: "hide" + Et,
          HIDDEN: "hidden" + Et,
          SHOW: (At = "show") + Et,
          SHOWN: "shown" + Et,
          INSERTED: "inserted" + Et,
          CLICK: "click" + Et,
          FOCUSIN: "focusin" + Et,
          FOCUSOUT: "focusout" + Et,
          MOUSEENTER: "mouseenter" + Et,
          MOUSELEAVE: "mouseleave" + Et,
        }),
        (It = "fade"),
        (jt = "show"),
        (Ot = ".tooltip-inner"),
        (Lt = ".arrow"),
        (Ht = "hover"),
        (Pt = "focus"),
        (Rt = "click"),
        (Mt = "manual"),
        (qt = (function () {
          function i(e, t) {
            if (void 0 === c)
              throw new TypeError(
                "Bootstrap tooltips require Popper.js (https://popper.js.org)"
              );
            (this._isEnabled = !0),
              (this._timeout = 0),
              (this._hoverState = ""),
              (this._activeTrigger = {}),
              (this._popper = null),
              (this.element = e),
              (this.config = this._getConfig(t)),
              (this.tip = null),
              this._setListeners();
          }
          var e = i.prototype;
          return (
            (e.enable = function () {
              this._isEnabled = !0;
            }),
            (e.disable = function () {
              this._isEnabled = !1;
            }),
            (e.toggleEnabled = function () {
              this._isEnabled = !this._isEnabled;
            }),
            (e.toggle = function (e) {
              if (this._isEnabled)
                if (e) {
                  var t = this.constructor.DATA_KEY,
                    n = yt(e.currentTarget).data(t);
                  n ||
                    ((n = new this.constructor(
                      e.currentTarget,
                      this._getDelegateConfig()
                    )),
                    yt(e.currentTarget).data(t, n)),
                    (n._activeTrigger.click = !n._activeTrigger.click),
                    n._isWithActiveTrigger()
                      ? n._enter(null, n)
                      : n._leave(null, n);
                } else {
                  if (yt(this.getTipElement()).hasClass(jt))
                    return void this._leave(null, this);
                  this._enter(null, this);
                }
            }),
            (e.dispose = function () {
              clearTimeout(this._timeout),
                yt.removeData(this.element, this.constructor.DATA_KEY),
                yt(this.element).off(this.constructor.EVENT_KEY),
                yt(this.element).closest(".modal").off("hide.bs.modal"),
                this.tip && yt(this.tip).remove(),
                (this._isEnabled = null),
                (this._timeout = null),
                (this._hoverState = null),
                (this._activeTrigger = null) !== this._popper &&
                  this._popper.destroy(),
                (this._popper = null),
                (this.element = null),
                (this.config = null),
                (this.tip = null);
            }),
            (e.show = function () {
              var t = this;
              if ("none" === yt(this.element).css("display"))
                throw new Error("Please use show on visible elements");
              var e = yt.Event(this.constructor.Event.SHOW);
              if (this.isWithContent() && this._isEnabled) {
                yt(this.element).trigger(e);
                var n = yt.contains(
                  this.element.ownerDocument.documentElement,
                  this.element
                );
                if (e.isDefaultPrevented() || !n) return;
                var i = this.getTipElement(),
                  r = Fn.getUID(this.constructor.NAME);
                i.setAttribute("id", r),
                  this.element.setAttribute("aria-describedby", r),
                  this.setContent(),
                  this.config.animation && yt(i).addClass(It);
                var o =
                    "function" == typeof this.config.placement
                      ? this.config.placement.call(this, i, this.element)
                      : this.config.placement,
                  s = this._getAttachment(o);
                this.addAttachmentClass(s);
                var a =
                  !1 === this.config.container
                    ? document.body
                    : yt(this.config.container);
                yt(i).data(this.constructor.DATA_KEY, this),
                  yt.contains(
                    this.element.ownerDocument.documentElement,
                    this.tip
                  ) || yt(i).appendTo(a),
                  yt(this.element).trigger(this.constructor.Event.INSERTED),
                  (this._popper = new c(this.element, i, {
                    placement: s,
                    modifiers: {
                      offset: { offset: this.config.offset },
                      flip: { behavior: this.config.fallbackPlacement },
                      arrow: { element: Lt },
                      preventOverflow: {
                        boundariesElement: this.config.boundary,
                      },
                    },
                    onCreate: function (e) {
                      e.originalPlacement !== e.placement &&
                        t._handlePopperPlacementChange(e);
                    },
                    onUpdate: function (e) {
                      t._handlePopperPlacementChange(e);
                    },
                  })),
                  yt(i).addClass(jt),
                  "ontouchstart" in document.documentElement &&
                    yt(document.body).children().on("mouseover", null, yt.noop);
                var l = function () {
                  t.config.animation && t._fixTransition();
                  var e = t._hoverState;
                  (t._hoverState = null),
                    yt(t.element).trigger(t.constructor.Event.SHOWN),
                    e === Nt && t._leave(null, t);
                };
                if (yt(this.tip).hasClass(It)) {
                  var u = Fn.getTransitionDurationFromElement(this.tip);
                  yt(this.tip)
                    .one(Fn.TRANSITION_END, l)
                    .emulateTransitionEnd(u);
                } else l();
              }
            }),
            (e.hide = function (e) {
              var t = this,
                n = this.getTipElement(),
                i = yt.Event(this.constructor.Event.HIDE),
                r = function () {
                  t._hoverState !== At &&
                    n.parentNode &&
                    n.parentNode.removeChild(n),
                    t._cleanTipClass(),
                    t.element.removeAttribute("aria-describedby"),
                    yt(t.element).trigger(t.constructor.Event.HIDDEN),
                    null !== t._popper && t._popper.destroy(),
                    e && e();
                };
              if ((yt(this.element).trigger(i), !i.isDefaultPrevented())) {
                if (
                  (yt(n).removeClass(jt),
                  "ontouchstart" in document.documentElement &&
                    yt(document.body)
                      .children()
                      .off("mouseover", null, yt.noop),
                  (this._activeTrigger[Rt] = !1),
                  (this._activeTrigger[Pt] = !1),
                  (this._activeTrigger[Ht] = !1),
                  yt(this.tip).hasClass(It))
                ) {
                  var o = Fn.getTransitionDurationFromElement(n);
                  yt(n).one(Fn.TRANSITION_END, r).emulateTransitionEnd(o);
                } else r();
                this._hoverState = "";
              }
            }),
            (e.update = function () {
              null !== this._popper && this._popper.scheduleUpdate();
            }),
            (e.isWithContent = function () {
              return Boolean(this.getTitle());
            }),
            (e.addAttachmentClass = function (e) {
              yt(this.getTipElement()).addClass(xt + "-" + e);
            }),
            (e.getTipElement = function () {
              return (
                (this.tip = this.tip || yt(this.config.template)[0]), this.tip
              );
            }),
            (e.setContent = function () {
              var e = yt(this.getTipElement());
              this.setElementContent(e.find(Ot), this.getTitle()),
                e.removeClass(It + " " + jt);
            }),
            (e.setElementContent = function (e, t) {
              var n = this.config.html;
              "object" == typeof t && (t.nodeType || t.jquery)
                ? n
                  ? yt(t).parent().is(e) || e.empty().append(t)
                  : e.text(yt(t).text())
                : e[n ? "html" : "text"](t);
            }),
            (e.getTitle = function () {
              var e = this.element.getAttribute("data-original-title");
              return (
                e ||
                  (e =
                    "function" == typeof this.config.title
                      ? this.config.title.call(this.element)
                      : this.config.title),
                e
              );
            }),
            (e._getAttachment = function (e) {
              return St[e.toUpperCase()];
            }),
            (e._setListeners = function () {
              var i = this;
              this.config.trigger.split(" ").forEach(function (e) {
                if ("click" === e)
                  yt(i.element).on(
                    i.constructor.Event.CLICK,
                    i.config.selector,
                    function (e) {
                      return i.toggle(e);
                    }
                  );
                else if (e !== Mt) {
                  var t =
                      e === Ht
                        ? i.constructor.Event.MOUSEENTER
                        : i.constructor.Event.FOCUSIN,
                    n =
                      e === Ht
                        ? i.constructor.Event.MOUSELEAVE
                        : i.constructor.Event.FOCUSOUT;
                  yt(i.element)
                    .on(t, i.config.selector, function (e) {
                      return i._enter(e);
                    })
                    .on(n, i.config.selector, function (e) {
                      return i._leave(e);
                    });
                }
                yt(i.element)
                  .closest(".modal")
                  .on("hide.bs.modal", function () {
                    return i.hide();
                  });
              }),
                this.config.selector
                  ? (this.config = u({}, this.config, {
                      trigger: "manual",
                      selector: "",
                    }))
                  : this._fixTitle();
            }),
            (e._fixTitle = function () {
              var e = typeof this.element.getAttribute("data-original-title");
              (this.element.getAttribute("title") || "string" !== e) &&
                (this.element.setAttribute(
                  "data-original-title",
                  this.element.getAttribute("title") || ""
                ),
                this.element.setAttribute("title", ""));
            }),
            (e._enter = function (e, t) {
              var n = this.constructor.DATA_KEY;
              (t = t || yt(e.currentTarget).data(n)) ||
                ((t = new this.constructor(
                  e.currentTarget,
                  this._getDelegateConfig()
                )),
                yt(e.currentTarget).data(n, t)),
                e && (t._activeTrigger["focusin" === e.type ? Pt : Ht] = !0),
                yt(t.getTipElement()).hasClass(jt) || t._hoverState === At
                  ? (t._hoverState = At)
                  : (clearTimeout(t._timeout),
                    (t._hoverState = At),
                    t.config.delay && t.config.delay.show
                      ? (t._timeout = setTimeout(function () {
                          t._hoverState === At && t.show();
                        }, t.config.delay.show))
                      : t.show());
            }),
            (e._leave = function (e, t) {
              var n = this.constructor.DATA_KEY;
              (t = t || yt(e.currentTarget).data(n)) ||
                ((t = new this.constructor(
                  e.currentTarget,
                  this._getDelegateConfig()
                )),
                yt(e.currentTarget).data(n, t)),
                e && (t._activeTrigger["focusout" === e.type ? Pt : Ht] = !1),
                t._isWithActiveTrigger() ||
                  (clearTimeout(t._timeout),
                  (t._hoverState = Nt),
                  t.config.delay && t.config.delay.hide
                    ? (t._timeout = setTimeout(function () {
                        t._hoverState === Nt && t.hide();
                      }, t.config.delay.hide))
                    : t.hide());
            }),
            (e._isWithActiveTrigger = function () {
              for (var e in this._activeTrigger)
                if (this._activeTrigger[e]) return !0;
              return !1;
            }),
            (e._getConfig = function (e) {
              return (
                "number" ==
                  typeof (e = u(
                    {},
                    this.constructor.Default,
                    yt(this.element).data(),
                    "object" == typeof e && e ? e : {}
                  )).delay && (e.delay = { show: e.delay, hide: e.delay }),
                "number" == typeof e.title && (e.title = e.title.toString()),
                "number" == typeof e.content &&
                  (e.content = e.content.toString()),
                Fn.typeCheckConfig(_t, e, this.constructor.DefaultType),
                e
              );
            }),
            (e._getDelegateConfig = function () {
              var e = {};
              if (this.config)
                for (var t in this.config)
                  this.constructor.Default[t] !== this.config[t] &&
                    (e[t] = this.config[t]);
              return e;
            }),
            (e._cleanTipClass = function () {
              var e = yt(this.getTipElement()),
                t = e.attr("class").match(Ct);
              null !== t && 0 < t.length && e.removeClass(t.join(""));
            }),
            (e._handlePopperPlacementChange = function (e) {
              this._cleanTipClass(),
                this.addAttachmentClass(this._getAttachment(e.placement));
            }),
            (e._fixTransition = function () {
              var e = this.getTipElement(),
                t = this.config.animation;
              null === e.getAttribute("x-placement") &&
                (yt(e).removeClass(It),
                (this.config.animation = !1),
                this.hide(),
                this.show(),
                (this.config.animation = t));
            }),
            (i._jQueryInterface = function (n) {
              return this.each(function () {
                var e = yt(this).data(bt),
                  t = "object" == typeof n && n;
                if (
                  (e || !/dispose|hide/.test(n)) &&
                  (e || ((e = new i(this, t)), yt(this).data(bt, e)),
                  "string" == typeof n)
                ) {
                  if (void 0 === e[n])
                    throw new TypeError('No method named "' + n + '"');
                  e[n]();
                }
              });
            }),
            s(i, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.1.1";
                },
              },
              {
                key: "Default",
                get: function () {
                  return Dt;
                },
              },
              {
                key: "NAME",
                get: function () {
                  return _t;
                },
              },
              {
                key: "DATA_KEY",
                get: function () {
                  return bt;
                },
              },
              {
                key: "Event",
                get: function () {
                  return kt;
                },
              },
              {
                key: "EVENT_KEY",
                get: function () {
                  return Et;
                },
              },
              {
                key: "DefaultType",
                get: function () {
                  return Tt;
                },
              },
            ]),
            i
          );
        })()),
        (yt.fn[_t] = qt._jQueryInterface),
        (yt.fn[_t].Constructor = qt),
        (yt.fn[_t].noConflict = function () {
          return (yt.fn[_t] = wt), qt._jQueryInterface;
        }),
        qt),
      Xn =
        ((Bt = "popover"),
        (Ut = "." + (Ft = "bs.popover")),
        ($t = (Wt = t).fn[Bt]),
        (Kt = "bs-popover"),
        (Qt = new RegExp("(^|\\s)" + Kt + "\\S+", "g")),
        (zt = u({}, Yn.Default, {
          placement: "right",
          trigger: "click",
          content: "",
          template:
            '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        })),
        (Vt = u({}, Yn.DefaultType, { content: "(string|element|function)" })),
        (Yt = "fade"),
        (Gt = ".popover-header"),
        (Zt = ".popover-body"),
        (Jt = {
          HIDE: "hide" + Ut,
          HIDDEN: "hidden" + Ut,
          SHOW: (Xt = "show") + Ut,
          SHOWN: "shown" + Ut,
          INSERTED: "inserted" + Ut,
          CLICK: "click" + Ut,
          FOCUSIN: "focusin" + Ut,
          FOCUSOUT: "focusout" + Ut,
          MOUSEENTER: "mouseenter" + Ut,
          MOUSELEAVE: "mouseleave" + Ut,
        }),
        (en = (function (e) {
          var t, n;
          function i() {
            return e.apply(this, arguments) || this;
          }
          (n = e),
            ((t = i).prototype = Object.create(n.prototype)),
            ((t.prototype.constructor = t).__proto__ = n);
          var r = i.prototype;
          return (
            (r.isWithContent = function () {
              return this.getTitle() || this._getContent();
            }),
            (r.addAttachmentClass = function (e) {
              Wt(this.getTipElement()).addClass(Kt + "-" + e);
            }),
            (r.getTipElement = function () {
              return (
                (this.tip = this.tip || Wt(this.config.template)[0]), this.tip
              );
            }),
            (r.setContent = function () {
              var e = Wt(this.getTipElement());
              this.setElementContent(e.find(Gt), this.getTitle());
              var t = this._getContent();
              "function" == typeof t && (t = t.call(this.element)),
                this.setElementContent(e.find(Zt), t),
                e.removeClass(Yt + " " + Xt);
            }),
            (r._getContent = function () {
              return (
                this.element.getAttribute("data-content") || this.config.content
              );
            }),
            (r._cleanTipClass = function () {
              var e = Wt(this.getTipElement()),
                t = e.attr("class").match(Qt);
              null !== t && 0 < t.length && e.removeClass(t.join(""));
            }),
            (i._jQueryInterface = function (n) {
              return this.each(function () {
                var e = Wt(this).data(Ft),
                  t = "object" == typeof n ? n : null;
                if (
                  (e || !/destroy|hide/.test(n)) &&
                  (e || ((e = new i(this, t)), Wt(this).data(Ft, e)),
                  "string" == typeof n)
                ) {
                  if (void 0 === e[n])
                    throw new TypeError('No method named "' + n + '"');
                  e[n]();
                }
              });
            }),
            s(i, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.1.1";
                },
              },
              {
                key: "Default",
                get: function () {
                  return zt;
                },
              },
              {
                key: "NAME",
                get: function () {
                  return Bt;
                },
              },
              {
                key: "DATA_KEY",
                get: function () {
                  return Ft;
                },
              },
              {
                key: "Event",
                get: function () {
                  return Jt;
                },
              },
              {
                key: "EVENT_KEY",
                get: function () {
                  return Ut;
                },
              },
              {
                key: "DefaultType",
                get: function () {
                  return Vt;
                },
              },
            ]),
            i
          );
        })(Yn)),
        (Wt.fn[Bt] = en._jQueryInterface),
        (Wt.fn[Bt].Constructor = en),
        (Wt.fn[Bt].noConflict = function () {
          return (Wt.fn[Bt] = $t), en._jQueryInterface;
        }),
        en),
      Gn =
        ((nn = "scrollspy"),
        (on = "." + (rn = "bs.scrollspy")),
        (sn = (tn = t).fn[nn]),
        (an = { offset: 10, method: "auto", target: "" }),
        (ln = {
          offset: "number",
          method: "string",
          target: "(string|element)",
        }),
        (un = {
          ACTIVATE: "activate" + on,
          SCROLL: "scroll" + on,
          LOAD_DATA_API: "load" + on + ".data-api",
        }),
        (cn = "dropdown-item"),
        (fn = "active"),
        (hn = '[data-spy="scroll"]'),
        (dn = ".active"),
        (pn = ".nav, .list-group"),
        (gn = ".nav-link"),
        (mn = ".nav-item"),
        (vn = ".list-group-item"),
        (yn = ".dropdown"),
        (_n = ".dropdown-item"),
        (bn = ".dropdown-toggle"),
        (En = "offset"),
        (wn = "position"),
        (xn = (function () {
          function n(e, t) {
            var n = this;
            (this._element = e),
              (this._scrollElement = "BODY" === e.tagName ? window : e),
              (this._config = this._getConfig(t)),
              (this._selector =
                this._config.target +
                " " +
                gn +
                "," +
                this._config.target +
                " " +
                vn +
                "," +
                this._config.target +
                " " +
                _n),
              (this._offsets = []),
              (this._targets = []),
              (this._activeTarget = null),
              (this._scrollHeight = 0),
              tn(this._scrollElement).on(un.SCROLL, function (e) {
                return n._process(e);
              }),
              this.refresh(),
              this._process();
          }
          var e = n.prototype;
          return (
            (e.refresh = function () {
              var t = this,
                e =
                  this._scrollElement === this._scrollElement.window ? En : wn,
                r = "auto" === this._config.method ? e : this._config.method,
                o = r === wn ? this._getScrollTop() : 0;
              (this._offsets = []),
                (this._targets = []),
                (this._scrollHeight = this._getScrollHeight()),
                tn
                  .makeArray(tn(this._selector))
                  .map(function (e) {
                    var t,
                      n = Fn.getSelectorFromElement(e);
                    if ((n && (t = tn(n)[0]), t)) {
                      var i = t.getBoundingClientRect();
                      if (i.width || i.height) return [tn(t)[r]().top + o, n];
                    }
                    return null;
                  })
                  .filter(function (e) {
                    return e;
                  })
                  .sort(function (e, t) {
                    return e[0] - t[0];
                  })
                  .forEach(function (e) {
                    t._offsets.push(e[0]), t._targets.push(e[1]);
                  });
            }),
            (e.dispose = function () {
              tn.removeData(this._element, rn),
                tn(this._scrollElement).off(on),
                (this._element = null),
                (this._scrollElement = null),
                (this._config = null),
                (this._selector = null),
                (this._offsets = null),
                (this._targets = null),
                (this._activeTarget = null),
                (this._scrollHeight = null);
            }),
            (e._getConfig = function (e) {
              if (
                "string" !=
                typeof (e = u({}, an, "object" == typeof e && e ? e : {}))
                  .target
              ) {
                var t = tn(e.target).attr("id");
                t || ((t = Fn.getUID(nn)), tn(e.target).attr("id", t)),
                  (e.target = "#" + t);
              }
              return Fn.typeCheckConfig(nn, e, ln), e;
            }),
            (e._getScrollTop = function () {
              return this._scrollElement === window
                ? this._scrollElement.pageYOffset
                : this._scrollElement.scrollTop;
            }),
            (e._getScrollHeight = function () {
              return (
                this._scrollElement.scrollHeight ||
                Math.max(
                  document.body.scrollHeight,
                  document.documentElement.scrollHeight
                )
              );
            }),
            (e._getOffsetHeight = function () {
              return this._scrollElement === window
                ? window.innerHeight
                : this._scrollElement.getBoundingClientRect().height;
            }),
            (e._process = function () {
              var e = this._getScrollTop() + this._config.offset,
                t = this._getScrollHeight(),
                n = this._config.offset + t - this._getOffsetHeight();
              if ((this._scrollHeight !== t && this.refresh(), n <= e)) {
                var i = this._targets[this._targets.length - 1];
                this._activeTarget !== i && this._activate(i);
              } else {
                if (
                  this._activeTarget &&
                  e < this._offsets[0] &&
                  0 < this._offsets[0]
                )
                  return (this._activeTarget = null), void this._clear();
                for (var r = this._offsets.length; r--; ) {
                  this._activeTarget !== this._targets[r] &&
                    e >= this._offsets[r] &&
                    (void 0 === this._offsets[r + 1] ||
                      e < this._offsets[r + 1]) &&
                    this._activate(this._targets[r]);
                }
              }
            }),
            (e._activate = function (t) {
              (this._activeTarget = t), this._clear();
              var e = this._selector.split(",");
              e = e.map(function (e) {
                return (
                  e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                );
              });
              var n = tn(e.join(","));
              n.hasClass(cn)
                ? (n.closest(yn).find(bn).addClass(fn), n.addClass(fn))
                : (n.addClass(fn),
                  n
                    .parents(pn)
                    .prev(gn + ", " + vn)
                    .addClass(fn),
                  n.parents(pn).prev(mn).children(gn).addClass(fn)),
                tn(this._scrollElement).trigger(un.ACTIVATE, {
                  relatedTarget: t,
                });
            }),
            (e._clear = function () {
              tn(this._selector).filter(dn).removeClass(fn);
            }),
            (n._jQueryInterface = function (t) {
              return this.each(function () {
                var e = tn(this).data(rn);
                if (
                  (e ||
                    ((e = new n(this, "object" == typeof t && t)),
                    tn(this).data(rn, e)),
                  "string" == typeof t)
                ) {
                  if (void 0 === e[t])
                    throw new TypeError('No method named "' + t + '"');
                  e[t]();
                }
              });
            }),
            s(n, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.1.1";
                },
              },
              {
                key: "Default",
                get: function () {
                  return an;
                },
              },
            ]),
            n
          );
        })()),
        tn(window).on(un.LOAD_DATA_API, function () {
          for (var e = tn.makeArray(tn(hn)), t = e.length; t--; ) {
            var n = tn(e[t]);
            xn._jQueryInterface.call(n, n.data());
          }
        }),
        (tn.fn[nn] = xn._jQueryInterface),
        (tn.fn[nn].Constructor = xn),
        (tn.fn[nn].noConflict = function () {
          return (tn.fn[nn] = sn), xn._jQueryInterface;
        }),
        xn),
      Zn =
        ((Sn = "." + (Tn = "bs.tab")),
        (Dn = (Cn = t).fn.tab),
        (An = {
          HIDE: "hide" + Sn,
          HIDDEN: "hidden" + Sn,
          SHOW: "show" + Sn,
          SHOWN: "shown" + Sn,
          CLICK_DATA_API: "click" + Sn + ".data-api",
        }),
        (Nn = "dropdown-menu"),
        (kn = "active"),
        (In = "disabled"),
        (jn = "fade"),
        (On = "show"),
        (Ln = ".dropdown"),
        (Hn = ".nav, .list-group"),
        (Pn = ".active"),
        (Rn = "> li > .active"),
        (Mn =
          '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]'),
        (qn = ".dropdown-toggle"),
        (Wn = "> .dropdown-menu .active"),
        (Bn = (function () {
          function i(e) {
            this._element = e;
          }
          var e = i.prototype;
          return (
            (e.show = function () {
              var n = this;
              if (
                !(
                  (this._element.parentNode &&
                    this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                    Cn(this._element).hasClass(kn)) ||
                  Cn(this._element).hasClass(In)
                )
              ) {
                var e,
                  i,
                  t = Cn(this._element).closest(Hn)[0],
                  r = Fn.getSelectorFromElement(this._element);
                if (t) {
                  var o = "UL" === t.nodeName ? Rn : Pn;
                  i = (i = Cn.makeArray(Cn(t).find(o)))[i.length - 1];
                }
                var s = Cn.Event(An.HIDE, { relatedTarget: this._element }),
                  a = Cn.Event(An.SHOW, { relatedTarget: i });
                if (
                  (i && Cn(i).trigger(s),
                  Cn(this._element).trigger(a),
                  !a.isDefaultPrevented() && !s.isDefaultPrevented())
                ) {
                  r && (e = Cn(r)[0]), this._activate(this._element, t);
                  var l = function () {
                    var e = Cn.Event(An.HIDDEN, { relatedTarget: n._element }),
                      t = Cn.Event(An.SHOWN, { relatedTarget: i });
                    Cn(i).trigger(e), Cn(n._element).trigger(t);
                  };
                  e ? this._activate(e, e.parentNode, l) : l();
                }
              }
            }),
            (e.dispose = function () {
              Cn.removeData(this._element, Tn), (this._element = null);
            }),
            (e._activate = function (e, t, n) {
              var i = this,
                r = (
                  "UL" === t.nodeName ? Cn(t).find(Rn) : Cn(t).children(Pn)
                )[0],
                o = n && r && Cn(r).hasClass(jn),
                s = function () {
                  return i._transitionComplete(e, r, n);
                };
              if (r && o) {
                var a = Fn.getTransitionDurationFromElement(r);
                Cn(r).one(Fn.TRANSITION_END, s).emulateTransitionEnd(a);
              } else s();
            }),
            (e._transitionComplete = function (e, t, n) {
              if (t) {
                Cn(t).removeClass(On + " " + kn);
                var i = Cn(t.parentNode).find(Wn)[0];
                i && Cn(i).removeClass(kn),
                  "tab" === t.getAttribute("role") &&
                    t.setAttribute("aria-selected", !1);
              }
              if (
                (Cn(e).addClass(kn),
                "tab" === e.getAttribute("role") &&
                  e.setAttribute("aria-selected", !0),
                Fn.reflow(e),
                Cn(e).addClass(On),
                e.parentNode && Cn(e.parentNode).hasClass(Nn))
              ) {
                var r = Cn(e).closest(Ln)[0];
                r && Cn(r).find(qn).addClass(kn),
                  e.setAttribute("aria-expanded", !0);
              }
              n && n();
            }),
            (i._jQueryInterface = function (n) {
              return this.each(function () {
                var e = Cn(this),
                  t = e.data(Tn);
                if (
                  (t || ((t = new i(this)), e.data(Tn, t)),
                  "string" == typeof n)
                ) {
                  if (void 0 === t[n])
                    throw new TypeError('No method named "' + n + '"');
                  t[n]();
                }
              });
            }),
            s(i, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.1.1";
                },
              },
            ]),
            i
          );
        })()),
        Cn(document).on(An.CLICK_DATA_API, Mn, function (e) {
          e.preventDefault(), Bn._jQueryInterface.call(Cn(this), "show");
        }),
        (Cn.fn.tab = Bn._jQueryInterface),
        (Cn.fn.tab.Constructor = Bn),
        (Cn.fn.tab.noConflict = function () {
          return (Cn.fn.tab = Dn), Bn._jQueryInterface;
        }),
        Bn);
    !(function (e) {
      if (void 0 === e)
        throw new TypeError(
          "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
        );
      var t = e.fn.jquery.split(" ")[0].split(".");
      if (
        (t[0] < 2 && t[1] < 9) ||
        (1 === t[0] && 9 === t[1] && t[2] < 1) ||
        4 <= t[0]
      )
        throw new Error(
          "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
        );
    })(t),
      (e.Util = Fn),
      (e.Alert = Un),
      (e.Button = $n),
      (e.Carousel = Kn),
      (e.Collapse = Qn),
      (e.Dropdown = zn),
      (e.Modal = Vn),
      (e.Popover = Xn),
      (e.Scrollspy = Gn),
      (e.Tab = Zn),
      (e.Tooltip = Yn),
      Object.defineProperty(e, "__esModule", { value: !0 });
  }),
  (function (e) {
    var t =
      ("object" == typeof window && window) ||
      ("object" == typeof self && self);
    "undefined" != typeof exports
      ? e(exports)
      : t &&
        ((t.hljs = e({})),
        "function" == typeof define &&
          define.amd &&
          define([], function () {
            return t.hljs;
          }));
  })(function (r) {
    function y(e) {
      return e
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    }
    function h(e) {
      return e.nodeName.toLowerCase();
    }
    function _(e, t) {
      var n = e && e.exec(t);
      return n && 0 === n.index;
    }
    function d(e) {
      return i.test(e);
    }
    function u(e) {
      var t,
        n = {},
        i = Array.prototype.slice.call(arguments, 1);
      for (t in e) n[t] = e[t];
      return (
        i.forEach(function (e) {
          for (t in e) n[t] = e[t];
        }),
        n
      );
    }
    function p(e) {
      var r = [];
      return (
        (function e(t, n) {
          for (var i = t.firstChild; i; i = i.nextSibling)
            3 === i.nodeType
              ? (n += i.nodeValue.length)
              : 1 === i.nodeType &&
                (r.push({ event: "start", offset: n, node: i }),
                (n = e(i, n)),
                h(i).match(/br|hr|img|input/) ||
                  r.push({ event: "stop", offset: n, node: i }));
          return n;
        })(e, 0),
        r
      );
    }
    function b(s) {
      function a(e) {
        return (e && e.source) || e;
      }
      function l(e, t) {
        return new RegExp(a(e), "m" + (s.cI ? "i" : "") + (t ? "g" : ""));
      }
      !(function t(n, e) {
        if (!n.compiled) {
          if (((n.compiled = !0), (n.k = n.k || n.bK), n.k)) {
            var i = {},
              r = function (n, e) {
                s.cI && (e = e.toLowerCase()),
                  e.split(" ").forEach(function (e) {
                    var t = e.split("|");
                    i[t[0]] = [n, t[1] ? Number(t[1]) : 1];
                  });
              };
            "string" == typeof n.k
              ? r("keyword", n.k)
              : c(n.k).forEach(function (e) {
                  r(e, n.k[e]);
                }),
              (n.k = i);
          }
          (n.lR = l(n.l || /\w+/, !0)),
            e &&
              (n.bK && (n.b = "\\b(" + n.bK.split(" ").join("|") + ")\\b"),
              n.b || (n.b = /\B|\b/),
              (n.bR = l(n.b)),
              n.e || n.eW || (n.e = /\B|\b/),
              n.e && (n.eR = l(n.e)),
              (n.tE = a(n.e) || ""),
              n.eW && e.tE && (n.tE += (n.e ? "|" : "") + e.tE)),
            n.i && (n.iR = l(n.i)),
            null == n.r && (n.r = 1),
            n.c || (n.c = []),
            (n.c = Array.prototype.concat.apply(
              [],
              n.c.map(function (e) {
                return (
                  (t = "self" === e ? n : e).v &&
                    !t.cached_variants &&
                    (t.cached_variants = t.v.map(function (e) {
                      return u(t, { v: null }, e);
                    })),
                  t.cached_variants || (t.eW && [u(t)]) || [t]
                );
                var t;
              })
            )),
            n.c.forEach(function (e) {
              t(e, n);
            }),
            n.starts && t(n.starts, e);
          var o = n.c
            .map(function (e) {
              return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b;
            })
            .concat([n.tE, n.i])
            .map(a)
            .filter(Boolean);
          n.t = o.length
            ? l(o.join("|"), !0)
            : {
                exec: function () {
                  return null;
                },
              };
        }
      })(s);
    }
    function E(e, t, a, n) {
      function l(e, t, n, i) {
        var r = '<span class="' + (i ? "" : D.classPrefix);
        return (r += e + '">') + t + (n ? "" : S);
      }
      function u() {
        (d +=
          null != h.sL
            ? (function () {
                var e = "string" == typeof h.sL;
                if (e && !C[h.sL]) return y(p);
                var t = e
                  ? E(h.sL, p, !0, o[h.sL])
                  : w(p, h.sL.length ? h.sL : void 0);
                return (
                  0 < h.r && (g += t.r),
                  e && (o[h.sL] = t.top),
                  l(t.language, t.value, !1, !0)
                );
              })()
            : (function () {
                var e, t, n, i, r, o, s;
                if (!h.k) return y(p);
                for (i = "", t = 0, h.lR.lastIndex = 0, n = h.lR.exec(p); n; )
                  (i += y(p.substring(t, n.index))),
                    (r = h),
                    (o = n),
                    (s = f.cI ? o[0].toLowerCase() : o[0]),
                    (e = r.k.hasOwnProperty(s) && r.k[s])
                      ? ((g += e[1]), (i += l(e[0], y(n[0]))))
                      : (i += y(n[0])),
                    (t = h.lR.lastIndex),
                    (n = h.lR.exec(p));
                return i + y(p.substr(t));
              })()),
          (p = "");
      }
      function c(e) {
        (d += e.cN ? l(e.cN, "", !0) : ""),
          (h = Object.create(e, { parent: { value: h } }));
      }
      function i(e, t) {
        if (((p += e), null == t)) return u(), 0;
        var n = (function (e, t) {
          var n, i;
          for (n = 0, i = t.c.length; n < i; n++)
            if (_(t.c[n].bR, e)) return t.c[n];
        })(t, h);
        if (n)
          return (
            n.skip
              ? (p += t)
              : (n.eB && (p += t), u(), n.rB || n.eB || (p = t)),
            c(n),
            n.rB ? 0 : t.length
          );
        var i,
          r,
          o = (function e(t, n) {
            if (_(t.eR, n)) {
              for (; t.endsParent && t.parent; ) t = t.parent;
              return t;
            }
            return t.eW ? e(t.parent, n) : void 0;
          })(h, t);
        if (o) {
          var s = h;
          for (
            s.skip
              ? (p += t)
              : (s.rE || s.eE || (p += t), u(), s.eE && (p = t));
            h.cN && (d += S), h.skip || (g += h.r), (h = h.parent) !== o.parent;

          );
          return o.starts && c(o.starts), s.rE ? 0 : t.length;
        }
        if (((i = t), (r = h), !a && _(r.iR, i)))
          throw new Error(
            'Illegal lexeme "' +
              t +
              '" for mode "' +
              (h.cN || "<unnamed>") +
              '"'
          );
        return (p += t), t.length || 1;
      }
      var f = x(e);
      if (!f) throw new Error('Unknown language: "' + e + '"');
      b(f);
      var r,
        h = n || f,
        o = {},
        d = "";
      for (r = h; r !== f; r = r.parent) r.cN && (d = l(r.cN, "", !0) + d);
      var p = "",
        g = 0;
      try {
        for (var s, m, v = 0; (h.t.lastIndex = v), (s = h.t.exec(t)); )
          (m = i(t.substring(v, s.index), s[0])), (v = s.index + m);
        for (i(t.substr(v)), r = h; r.parent; r = r.parent) r.cN && (d += S);
        return { r: g, value: d, language: e, top: h };
      } catch (e) {
        if (e.message && -1 !== e.message.indexOf("Illegal"))
          return { r: 0, value: y(t) };
        throw e;
      }
    }
    function w(n, e) {
      e = e || D.languages || c(C);
      var i = { r: 0, value: y(n) },
        r = i;
      return (
        e.filter(x).forEach(function (e) {
          var t = E(e, n, !1);
          (t.language = e),
            t.r > r.r && (r = t),
            t.r > i.r && ((r = i), (i = t));
        }),
        r.language && (i.second_best = r),
        i
      );
    }
    function g(e) {
      return D.tabReplace || D.useBR
        ? e.replace(o, function (e, t) {
            return D.useBR && "\n" === e
              ? "<br>"
              : D.tabReplace
              ? t.replace(/\t/g, D.tabReplace)
              : "";
          })
        : e;
    }
    function t(e) {
      var t,
        n,
        i,
        r,
        o,
        s,
        a,
        l,
        u,
        c,
        f = (function (e) {
          var t,
            n,
            i,
            r,
            o = e.className + " ";
          if (
            ((o += e.parentNode ? e.parentNode.className : ""), (n = T.exec(o)))
          )
            return x(n[1]) ? n[1] : "no-highlight";
          for (t = 0, i = (o = o.split(/\s+/)).length; t < i; t++)
            if (d((r = o[t])) || x(r)) return r;
        })(e);
      d(f) ||
        (D.useBR
          ? ((t = document.createElementNS(
              "http://www.w3.org/1999/xhtml",
              "div"
            )).innerHTML = e.innerHTML
              .replace(/\n/g, "")
              .replace(/<br[ \/]*>/g, "\n"))
          : (t = e),
        (o = t.textContent),
        (i = f ? E(f, o, !0) : w(o)),
        (n = p(t)).length &&
          (((r = document.createElementNS(
            "http://www.w3.org/1999/xhtml",
            "div"
          )).innerHTML = i.value),
          (i.value = (function (e, t, n) {
            function i() {
              return e.length && t.length
                ? e[0].offset !== t[0].offset
                  ? e[0].offset < t[0].offset
                    ? e
                    : t
                  : "start" === t[0].event
                  ? e
                  : t
                : e.length
                ? e
                : t;
            }
            function r(e) {
              l +=
                "<" +
                h(e) +
                m.map
                  .call(e.attributes, function (e) {
                    return (
                      " " +
                      e.nodeName +
                      '="' +
                      y(e.value).replace('"', "&quot;") +
                      '"'
                    );
                  })
                  .join("") +
                ">";
            }
            function o(e) {
              l += "</" + h(e) + ">";
            }
            function s(e) {
              ("start" === e.event ? r : o)(e.node);
            }
            for (var a = 0, l = "", u = []; e.length || t.length; ) {
              var c = i();
              if (
                ((l += y(n.substring(a, c[0].offset))),
                (a = c[0].offset),
                c === e)
              ) {
                for (
                  u.reverse().forEach(o);
                  s(c.splice(0, 1)[0]),
                    (c = i()) === e && c.length && c[0].offset === a;

                );
                u.reverse().forEach(r);
              } else
                "start" === c[0].event ? u.push(c[0].node) : u.pop(),
                  s(c.splice(0, 1)[0]);
            }
            return l + y(n.substr(a));
          })(n, p(r), o))),
        (i.value = g(i.value)),
        (e.innerHTML = i.value),
        (e.className =
          ((s = e.className),
          (a = f),
          (l = i.language),
          (u = a ? v[a] : l),
          (c = [s.trim()]),
          s.match(/\bhljs\b/) || c.push("hljs"),
          -1 === s.indexOf(u) && c.push(u),
          c.join(" ").trim())),
        (e.result = { language: i.language, re: i.r }),
        i.second_best &&
          (e.second_best = {
            language: i.second_best.language,
            re: i.second_best.r,
          }));
    }
    function n() {
      if (!n.called) {
        n.called = !0;
        var e = document.querySelectorAll("pre code");
        m.forEach.call(e, t);
      }
    }
    function x(e) {
      return (e = (e || "").toLowerCase()), C[e] || C[v[e]];
    }
    var m = [],
      c = Object.keys,
      C = {},
      v = {},
      i = /^(no-?highlight|plain|text)$/i,
      T = /\blang(?:uage)?-([\w-]+)\b/i,
      o = /((^(<[^>]+>|\t|)+|(?:\n)))/gm,
      S = "</span>",
      D = {
        classPrefix: "hljs-",
        tabReplace: null,
        useBR: !1,
        languages: void 0,
      };
    return (
      (r.highlight = E),
      (r.highlightAuto = w),
      (r.fixMarkup = g),
      (r.highlightBlock = t),
      (r.configure = function (e) {
        D = u(D, e);
      }),
      (r.initHighlighting = n),
      (r.initHighlightingOnLoad = function () {
        addEventListener("DOMContentLoaded", n, !1),
          addEventListener("load", n, !1);
      }),
      (r.registerLanguage = function (t, e) {
        var n = (C[t] = e(r));
        n.aliases &&
          n.aliases.forEach(function (e) {
            v[e] = t;
          });
      }),
      (r.listLanguages = function () {
        return c(C);
      }),
      (r.getLanguage = x),
      (r.inherit = u),
      (r.IR = "[a-zA-Z]\\w*"),
      (r.UIR = "[a-zA-Z_]\\w*"),
      (r.NR = "\\b\\d+(\\.\\d+)?"),
      (r.CNR =
        "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)"),
      (r.BNR = "\\b(0b[01]+)"),
      (r.RSR =
        "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~"),
      (r.BE = { b: "\\\\[\\s\\S]", r: 0 }),
      (r.ASM = { cN: "string", b: "'", e: "'", i: "\\n", c: [r.BE] }),
      (r.QSM = { cN: "string", b: '"', e: '"', i: "\\n", c: [r.BE] }),
      (r.PWM = {
        b: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/,
      }),
      (r.C = function (e, t, n) {
        var i = r.inherit({ cN: "comment", b: e, e: t, c: [] }, n || {});
        return (
          i.c.push(r.PWM),
          i.c.push({ cN: "doctag", b: "(?:TODO|FIXME|NOTE|BUG|XXX):", r: 0 }),
          i
        );
      }),
      (r.CLCM = r.C("//", "$")),
      (r.CBCM = r.C("/\\*", "\\*/")),
      (r.HCM = r.C("#", "$")),
      (r.NM = { cN: "number", b: r.NR, r: 0 }),
      (r.CNM = { cN: "number", b: r.CNR, r: 0 }),
      (r.BNM = { cN: "number", b: r.BNR, r: 0 }),
      (r.CSSNM = {
        cN: "number",
        b:
          r.NR +
          "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
        r: 0,
      }),
      (r.RM = {
        cN: "regexp",
        b: /\//,
        e: /\/[gimuy]*/,
        i: /\n/,
        c: [r.BE, { b: /\[/, e: /\]/, r: 0, c: [r.BE] }],
      }),
      (r.TM = { cN: "title", b: r.IR, r: 0 }),
      (r.UTM = { cN: "title", b: r.UIR, r: 0 }),
      (r.METHOD_GUARD = { b: "\\.\\s*" + r.UIR, r: 0 }),
      r
    );
  }),
  hljs.registerLanguage("php", function (e) {
    var t = { b: "\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*" },
      n = { cN: "meta", b: /<\?(php)?|\?>/ },
      i = {
        cN: "string",
        c: [e.BE, n],
        v: [
          { b: 'b"', e: '"' },
          { b: "b'", e: "'" },
          e.inherit(e.ASM, { i: null }),
          e.inherit(e.QSM, { i: null }),
        ],
      },
      r = { v: [e.BNM, e.CNM] };
    return {
      aliases: ["php3", "php4", "php5", "php6"],
      cI: !0,
      k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
      c: [
        e.HCM,
        e.C("//", "$", { c: [n] }),
        e.C("/\\*", "\\*/", { c: [{ cN: "doctag", b: "@[A-Za-z]+" }] }),
        e.C("__halt_compiler.+?;", !1, {
          eW: !0,
          k: "__halt_compiler",
          l: e.UIR,
        }),
        {
          cN: "string",
          b: /<<<['"]?\w+['"]?$/,
          e: /^\w+;?$/,
          c: [
            e.BE,
            { cN: "subst", v: [{ b: /\$\w+/ }, { b: /\{\$/, e: /\}/ }] },
          ],
        },
        n,
        { cN: "keyword", b: /\$this\b/ },
        t,
        { b: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/ },
        {
          cN: "function",
          bK: "function",
          e: /[;{]/,
          eE: !0,
          i: "\\$|\\[|%",
          c: [
            e.UTM,
            { cN: "params", b: "\\(", e: "\\)", c: ["self", t, e.CBCM, i, r] },
          ],
        },
        {
          cN: "class",
          bK: "class interface",
          e: "{",
          eE: !0,
          i: /[:\(\$"]/,
          c: [{ bK: "extends implements" }, e.UTM],
        },
        { bK: "namespace", e: ";", i: /[\.']/, c: [e.UTM] },
        { bK: "use", e: ";", c: [e.UTM] },
        { b: "=>" },
        i,
        r,
      ],
    };
  });

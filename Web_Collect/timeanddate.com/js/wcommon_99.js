//Copyright timeanddate.com 2016, do not use without permission
console.log('timeanddate.com 2016');

var $jscomp = {
  scope: {},
  checkStringArgs: function (a, b, c) {
    if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
    if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
    return a + ""
  }
};
$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
  if (c.get || c.set) throw new TypeError("ES3 does not support getters and setters.");
  a != Array.prototype && a != Object.prototype && (a[b] = c.value)
};
$jscomp.getGlobal = function (a) {
  return "undefined" != typeof window && window === a ? a : "undefined" != typeof global ? global : a
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function (a, b, c, d) {
  if (b) {
    c = $jscomp.global;
    a = a.split(".");
    for (d = 0; d < a.length - 1; d++) {
      var e = a[d];
      e in c || (c[e] = {});
      c = c[e]
    }
    a = a[a.length - 1];
    d = c[a];
    b = b(d);
    b != d && null != b && $jscomp.defineProperty(c, a, {
      configurable: !0,
      writable: !0,
      value: b
    })
  }
};
$jscomp.polyfill("String.prototype.includes", function (a) {
  return a ? a : function (a, c) {
    return -1 !== $jscomp.checkStringArgs(this, a, "includes").indexOf(a, c || 0)
  }
}, "es6-impl", "es3");
$jscomp.polyfill("Array.prototype.fill", function (a) {
  return a ? a : function (a, c, d) {
    var b = this.length || 0;
    0 > c && (c = Math.max(0, b + c));
    if (null == d || d > b) d = b;
    d = Number(d);
    0 > d && (d = Math.max(0, b + d));
    for (c = Number(c || 0); c < d; c++) this[c] = a;
    return this
  }
}, "es6-impl", "es3");
window._T = window._T || {};
Mf = Math.floor;
Mr = Math.random;

function pf(a, b) {
  a = "" + a;
  var c = b - a.length;
  0 < c && (a = "0000000000".slice(10 - c) + a);
  return a
}

function p2(a) {
  return 10 > a ? "0" + a : "" + a
}

function lim(a, b, c) {
  return Math.max(Math.min(a, c), b)
}

function dt() {
  return (new Date).getTime()
}

function it(a, b) {
  if (a) {
    var c = a.length,
      d;
    for (d = 0; d < c; d++) b(a[d], d)
  }
}

function ia(a, b) {
  if (a)
    for (var c in a) a.hasOwnProperty(c) && b(c, a[c])
}

function sprintfloc(a) {
  var b = Array.prototype.slice.call(arguments, 1);
  return a.replace(/\%(\d*)(\.?)(\d*)([dfs])/g, function (a, d, e, f, h) {
    a = b.shift();
    if ("s" == h) return a;
    if ("d" == h || "f" == h) return h = a - 0, f = 0 <= f ? h.toFixed(f) : h + "", TAD.sep && (f = f.split("."), f[0] = f[0].replace(/\B(?=(\d{3})+(?!\d))/g, TAD.sep), f = f.join(".")), TAD.dec && (f = f.replace(/\./, TAD.dec)), f
  })
}

function sprintf(a) {
  var b = Array.prototype.slice.call(arguments, 1);
  return a.replace(/\%(\d*)(\.?)(\d*)([dfs])/g, function (a, d, e, f, h) {
    a = b.shift();
    if ("s" == h) return a;
    if ("d" == h || "f" == h) return h = a - 0, 0 <= f ? h.toFixed(f) : h
  })
}
ph = {};

function gx() {
  function a(a) {
    try {
      if (c.ActiveXObject) return new ActiveXObject(a)
    } catch (e) {}
  }
  var b = null,
    c = window;
  try {
    c.XMLHttpRequest && (b = new XMLHttpRequest)
  } catch (d) {}
  b || (b = a("Msxml2.XMLHTTP"));
  b || (b = a("Microsoft.XMLHTTP"));
  return b
}
(function () {
  function a(a, c, d, e, f) {
    if (a) try {
      return a.open(d, ("https:" == document.location.protocol ? "https://" : "http://") + document.domain + (document.location.port ? ":" + document.location.port : "") + c, !0), a.onreadystatechange = f, "POST" == d && a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), a.send(e), 1
    } catch (h) {}
    return 0
  }
  gp = function (b, c, d) {
    return a(b, c, "GET", "", d)
  };
  pp = function (b, c, d, e) {
    return a(b, c, "POST", d, e)
  }
})();

function rs4(a) {
  if (a && 4 == a.readyState) {
    if (200 !== a.status) {
      errm = "rs4:status=" + a.status;
      return
    }
    return a.responseText + ""
  }
  return !1
}

function ghj(a) {
  for (var b = {
      j: ""
    }, c; 0 <= (c = a.indexOf("<script"));) {
    var d = a.indexOf(">", c);
    if (0 <= d) {
      var e = a.indexOf("\x3c/script>", d);
      0 < e && (b.j += a.slice(d + 1, e), a = a.slice(0, c) + a.slice(e + 9))
    }
  }
  b.h = a;
  return b
}

function jcb(a, b) {
  var c = gx();
  return c ? (gp(c, a, function () {
    var a = rs4(c);
    a && b(a)
  }), !0) : !1
}

function rf(a, b, c, d) {
  iH(a, b);
  a = Mf(1E3 * (c + Mr() * d));
  setTimeout(function () {
    location.reload()
  }, a)
}

function phg(a, b, c) {
  var d = ph[a];
  d ? c(d) : jcb(b, function (b) {
    ph[a] = b;
    c(b)
  })
}

function gf(a) {
  if ("string" === typeof a) {
    var b = document;
    return b.getElementById ? b.getElementById(a) : b.all ? b.all[a] : null
  }
  return a
}

function cDF() {
  return document.createDocumentFragment()
}

function cE(a, b, c) {
  var d = document.createElement(a);
  ia(b, function (a, b) {
    "class" === a ? d.className = b : sA(d, a, b)
  });
  aCh(c, d);
  return d
}

function aCh(a, b) {
  a && b && a.appendChild(b)
}
dce = cE;

function hC(a, b) {
  var c = a.className;
  return c && 0 <= (" " + c + " ").indexOf(" " + b + " ")
}

function gA(a, b) {
  if (a) return a.getAttribute(b)
}

function sA(a, b, c) {
  if (a) return a.setAttribute(b, c)
}

function ddE() {
  return document.documentElement
}

function arrclone(a) {
  var b = [],
    c = a.length,
    d;
  for (d = 0; d < c; d++) b[d] = a[d];
  return b
}

function gebc(a, b) {
  b || (b = document);
  var c;
  if (b.getElementsByClassName) return c = b.getElementsByClassName(a), arrclone(c);
  var d = b.firstChild,
    e = [];
  if (d) {
    do 1 == d.nodeType && (d.className && hC(d, a) && e.push(d), (c = gebc(a, d)).length && (e = e.concat(c))); while (d = d.nextSibling)
  }
  return arrclone(e)
}

function gebn(a, b) {
  b || (b = document);
  var c = b.getElementsByName(a);
  return arrclone(c)
}

function gebtn(a, b) {
  if ("string" === typeof b && (b = gf(b), !b)) return [];
  b || (b = document);
  var c = b.getElementsByTagName(a);
  return arrclone(c)
}

function gebtn0(a, b) {
  var c = gebtn(a, b);
  c && (c = c[0]);
  return c
}

function ih(a, b) {
  a && (a.innerHTML = b)
}

function iH(a, b) {
  ih(gf(a), b)
}

function sd(a, b) {
  a && (a.style.display = b ? 2 == b ? "block" : "" : "none")
}

function he(a, b) {
  sd(gf(a), b)
}

function ee(a, b, c) {
  if (a = a[b]) a.disabled = !c
}

function ac(a, b, c) {
  if (a) {
    a = gf(a);
    var d = a.className + " ",
      e = " " + d,
      f = e.indexOf(" " + b + " ");
    if (c) {
      if (0 <= f) return;
      d += b
    } else {
      if (0 > f) return;
      d = d.substring(0, f) + e.substring(f + b.length + 1);
      d = d.replace(/\s\s+/g, " ").replace(/^\s/, "").replace(/\s$/, "")
    }
    a.className = d
  }
}

function po(a) {
  for (var b = {
      x: 0,
      y: a.offsetHeight
    }; a;) b.x += a.offsetLeft, b.y += a.offsetTop, a = a.offsetParent;
  return b
}

function ap(a, b) {
  var c = 0,
    d = 0,
    e = 0;
  if (a.getBoundingClientRect && navigator.appVersion.match(/MSIE [3-7]/)) var d = ddE(),
    f = a.getBoundingClientRect(),
    c = f.left + d.scrollLeft,
    d = f.top + d.scrollTop;
  else
    for (; a;) "fixed" == gcst(a, "position") && (e = 1), c += a.offsetLeft, d += a.offsetTop, a = a.offsetParent;
  return {
    x: c,
    y: d,
    f: e
  }
}

function isdef(a) {
  return void 0 !== a
}

function ep(a, b) {
  var c = a.style;
  isdef(b.x) && (c.left = b.x + "px");
  isdef(b.y) && (c.top = b.y + "px");
  isdef(b.f) && (c.position = b.f ? "fixed" : "absolute")
}

function gcst(a, b) {
  var c = window.getComputedStyle;
  if (c) return c(a, null).getPropertyValue(b);
  if (c = a.currentStyle) return c[b]
}

function gcs(a, b) {
  var c = window.getComputedStyle,
    d = function (a, b) {
      var c = /^[0-9\.]+(px)?$/i;
      if (0 < parseFloat(b)) {
        if (c.test(b)) return parseInt(b);
        var c = a.style.left,
          d = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = b || 0;
        b = a.style.pixelLeft;
        a.style.left = c;
        a.runtimeStyle.left = d
      } else b = 0;
      return b
    };
  if (c) {
    if (c = c(a, null)) return d(a, c.getPropertyValue(b))
  } else if (c = a.currentStyle) return c = c[b], "height" == b && "auto" == c && (c = a.offsetHeight - gcs(a, "marginTop") - gcs(a, "marginBottom")), d(a, c);
  return null
}

function es(a, b) {
  var c = a.style;
  0 < b.w && (c.width = b.w + "px");
  0 < b.h && (c.height = b.h + "px")
}

function esp(a, b) {
  var c = a.style;
  0 < b.w && (c.width = b.w + "%");
  0 < b.h && (c.height = b.h + "%")
}

function esa(a, b) {
  es(a, b);
  ep(a, b)
}

function sw(a) {
  var b = [],
    c = 0;
  it(a, function (a, e) {
    b[e] = a;
    var d = a.offsetWidth;
    d > c && (c = d)
  });
  it(b, function (a) {
    es(a, {
      w: c
    })
  })
}

function jp(a, b, c, d, e, f) {
  var h = b.offsetWidth,
    g = c.offsetWidth;
  c = c.offsetHeight; - 1E3 > d && (a.x += d + 1E3, d = -1); - 1 == d && (a.x -= h - g);
  1 == d && (a.x += g);
  2 == d && (a.x += (g - h) / 2); - 1 == e && (a.y -= c);
  1 == e && (a.y += c);
  2 == e && (a.y += (c - b.offsetHeight) / 2);
  0 > a.x && (a.x = 0);
  f && a.x + h > window.innerWidth && (a.x -= a.x + h - window.innerWidth)
}

function siv(a, b, c, d) {
  var e = ddE(),
    f = 0,
    h = 0,
    g = 0,
    l = void 0 !== c ? c : 1E3,
    k = void 0 !== d ? k : function (a) {
      return 1 == a ? 1 : 1 - Math.pow(2, -10 * a)
    };
  c = function () {
    function a(c) {
      c = dt() - b;
      c = 0 > c ? 0 : c;
      c >= l ? p(1) : g === n() ? (p(c / l), raf(a)) : p(1)
    }
    var b = dt();
    raf(a)
  };
  var n = function () {
      return void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
    },
    p = function (a) {
      a = k(a);
      g = Mf(h + (f - h) * a);
      window.scrollTo(0, g)
    };
  a = gf(a);
  d = ap(a);
  var q = n();
  if (d.y + a.clientHeight > q + e.clientHeight ||
    b) f = b ? d.y - 40 : Math.min(d.y - e.clientHeight + a.clientHeight, d.y - 40), h = g = q, c();
  return !1
}

function gsv() {
  var a = ddE(),
    a = {
      w: window.innerWidth || document.body.clientWidth,
      h: document.height || document.body.scrollHeight,
      W: a ? a.clientWidth : 980,
      H: a ? a.clientHeight : 600
    };
  a.H > a.h && (a.h = a.H);
  return a
}
UA = function () {
  function a(a) {
    var c;
    for (c = 0; c < a.length; c++)
      if (a[c] in b) return a[c];
    return !1
  }
  var b = cE("a").style;
  return {
    trans: a(["transform", "webkitTransform", "MozTransform", "OTransform", "msTransform"]),
    d3: a(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "msPerspective"]),
    mat: function (a, b) {
      b = b || 1;
      var c = 2 * Math.PI / 360 * a,
        d = Math.cos(c),
        c = Math.sin(c);
      return "progid:DXImageTransform.Microsoft.Matrix(M11=" + d * b + ",M12=" + -c * b + ",M21=" + c * b + ",M22=" + d * b + ",SizingMethod='auto expand')"
    }
  }
}();

function wl(a) {
  var b = window.location;
  a && (b.href = a);
  return b
}

function gso(a) {
  return a.options[a.selectedIndex]
}

function gfv(a) {
  var b = a.type;
  if (b) switch (b) {
    case "select-one":
      return gso(a).value;
    case "radio":
      if (a.checked) return a.value;
      break;
    case "checkbox":
      return a.checked ? a.value : "";
    case "button":
    case "submit":
      break;
    default:
      return a.value
  }
  return null
}

function ga(a) {
  var b = [],
    c = a.elements,
    d = c.length,
    e, f;
  for (e = 0; e < d; e++) a = c[e], f = gfv(a), null !== f && (b[a.name] = f);
  return b
}

function au(a) {
  var b = [],
    c = 0,
    d;
  for (d in a) "" !== d && (b[c++] = d += "=" + escape(a[d]));
  return b.join("&")
}

function ru(a, b) {
  var c, d = b.split("&");
  a = a.replace(/\?/, "?&");
  for (c = 0; c < d.length; c++) {
    var e = d[c],
      f = e.indexOf("=");
    0 < f && (f = e.substr(0, f + 1), f = a.indexOf("&" + f), a = 0 < f ? a.substring(0, f + 1) + e + a.substring(f + 1) : a + ("&" + e))
  }
  return a.replace(/\?\&/, "?")
}

function hu(a) {
  return a.replace(/\&/, "&amp;")
}

function aau(a) {
  it(a.elements, function (a) {
    sA(a, "autocomplete", "off")
  })
}

function dau(a) {
  it(a.elements, function (a) {
    a.removeAttribute("autocomplete")
  })
}
sem_a = {};

function sem(a, b) {
  var c = a.name;
  if (sem_a[c] != b) {
    sem_a[c] = b;
    var d = gf("e" + c),
      c = gf(c);
    d && (ih(d, b), ac(d, "errmark", b));
    c && ac(c, "errf", b)
  }
}

function jsav(a, b) {
  a += "&" + au(ga(b));
  jcb(a, function (a) {
    var b = "Some error occured - was not able to save";
    a.match(/JS:/) && (b = "Please wait - reloading page now", location.reload());
    iH("jcdiv", b)
  })
}
menact = null;
men = {};
window.TAD || (window.TAD = {});

function PU(a) {
  this.n = a;
  this.s = 0;
  PU.p[PU.p.length] = this
}
PU.p = [];
PU.C = function (a) {
  it(PU.p, function (b) {
    b != a && b.k()
  })
};
PU.prototype.i = function (a) {
  var b = this.e,
    c = 1;
  it(a, function (a) {
    a == b && (c = 0)
  });
  c && 200 < dt() + this.s && this.k()
};
var trkclk = .2 > Mr();
ael(window, "click", function (a) {
  a = ev(a).e;
  a = a.target || a.currentTarget || a.relatedTarget || a.fromElement || a.srcElement;
  for (var b = [], c = a; c;) {
    var d = c.parentNode;
    b[b.length] = c;
    c = d
  }
  it(PU.p, function (a) {
    a.s && a.i(b)
  });
  if (a && trkclk && ((c = a.href) || (c = "submit" == a.type ? "submit" : b[1].href), c)) {
    var e = "";
    b.pop();
    b.pop();
    it(b, function (a) {
      var b = a.tagName;
      b && (e = b + ":" + a.id + ";" + a.className + ">" + e)
    });
    e = window.location.pathname + ">>" + e + ">>" + c + ">>" + a.innerHTML;
    document.cookie = "LINKUSED=" + escape(e) + ";domain=.timeanddate.com;path=/"
  }
});
PU.prototype.h = function (a) {
  var b = gf(this.n);
  this.e = b;
  ih(b, a);
  this.o();
  return b
};
PU.prototype.d = function (a) {
  var b = gf(this.n);
  this.e = b;
  aCh(b, a);
  this.o();
  return b
};
PU.prototype.E = function (a) {
  this.e = a;
  if (a = a.id) this.n = a
};
PU.prototype.y = function () {
  var a = this;
  a.s = -dt();
  setTimeout(function () {
    a.s = -dt()
  }, 1)
};
PU.prototype.o = function () {
  this.y();
  PU.C(this);
  sd(this.e, 2)
};
PU.prototype.k = function () {
  sd(this.e, 0);
  this.s = 0;
  this.c && this.c()
};
PU.prototype.x = function (a) {
  a && a != this.s || 0 <= this.s && this.k()
};
PU.prototype.z = function (a) {
  var b = this;
  a = a || 330;
  var c = dt() + a;
  b.s = c;
  window.setTimeout(function () {
    b.x(c)
  }, a + 100)
};
PU.prototype.A = function (a, b, c, d) {
  a = ghj(a);
  var e = this.h(a.h),
    f = ap(b);
  jp(f, e, b, c || 0, 1, d);
  ep(e, f);
  eval(a.j)
};
pM = new PU("po1");

function mena(a, b) {
  b.n = a;
  var c = a.indexOf("txt");
  0 < c && (b.N = a.slice(0, c));
  men[a] = b
}

function menh(a) {
  var b = menact;
  if (b) {
    var c = b.e.getElementsByTagName("li");
    if (c) {
      var d = function (a, b) {
        "number" === typeof a && 0 <= a && a < c.length && ac(c[a], "h", b)
      };
      d(b.h, 0);
      d(a, 1);
      b.h = a
    }
  }
}

function fe(a, b) {
  if ("createEvent" in document) {
    var c = document.createEvent("HTMLEvents");
    c.initEvent(a, !0, !0);
    b.dispatchEvent(c)
  } else b.fireEvent("on" + a)
}

function mech(a, b) {
  if (b) {
    a.i && (a.i.value = b.n);
    var c = pM.f;
    c ? c(a, b) : a.f ? a.f(a, b) : (fe("change", a.i), a.g && b.U ? (c = b.U, c.match(/^@/) && (c = a.i.form.action + "?" + c), wl(c)) : (a.I && (a.I.value = b.U, fe("change", a.I), fh[a.n].H = b.U), va(a.i.id, a.i)))
  }
  pM.k()
}

function menc(a) {
  var b = menact;
  b && (a = b.a[a]) && mech(b, a)
}

function menfr() {
  var a = menact;
  if (a && (a = a.a[0]) && a.U) return 1
}

function mmenc() {
  menfr() && menc(0)
}

function mens(a, b) {
  var c = men[a];
  if (c) {
    var d = ap(b),
      e = c.u ? c.u.replace(/\&amp\;/g, "&") : "/",
      f = 0,
      h = c.c || "mn",
      g = c.C || h,
      h = "<div class=" + h + " onmouseout='pM.z()'> ",
      l = c.a.length,
      k = c.r,
      n = 0,
      p = k && k < l,
      q = 1;
    p ? (q = Mf((l + k - 1) / k), h += "<table><tr>") : k = l;
    for (; q--;) {
      for (var n = n + k, m = "<ul class=" + g + ">"; f < l && f < n; f++) {
        var u;
        u = c;
        var w = f,
          r = q,
          t = f + 1 >= n,
          v = u.a[w],
          x = "";
        if (v.w) u = "<li class=asi-raw>" + v.w + "</li>";
        else {
          if (1 === v.s) x += "<li class=mnd>&nbsp;";
          else {
            var y = "";
            v.p && (y = hu(ru(e, v.p)));
            v.u && (y = v.u);
            r = (r = (r ? "lr" : "") + (t ? " ls" : "")) ?
              "class='" + r + "' " : "";
            t = "h";
            v.s && (t = "asb");
            x += "<li onmouseover='pM.y()'" + (v.h ? " class='" + t + "' " : "") + ">";
            t = v.n + (v.b || "") + (v.d || "");
            v.c && (t = "<span class=" + v.c + ">" + t + "</span>");
            if (2 !== v.s)
              if (y) t = "<a " + r + "href='" + y + "'>" + t;
              else if (u.i || v.v) t = "<a " + r + "href='javascript:menc(" + w + ")' onmousedown='pM.y()'>" + t;
            x += t;
            v.x && (x += "<span class=mnx>" + v.x + "</span>");
            x += "</a>"
          }
          u = x + "</li>"
        }
        m += u
      }
      m += "</ul>";
      h = p ? h + ("<td valign=top>" + m + "</td>") : h + m
    }
    p && (h += "</tr></table>");
    menact = c;
    e = pM.h(h);
    c.e = e;
    c.i && (e.style.width = "", f = c.i.offsetWidth,
      e.offsetWidth < f && es(e, {
        w: f
      }), c.N && (c.I = c.i.form[c.N]));
    jp(d, e, b, "undefined" != typeof c.j ? c.j : -1, 1);
    "asu" == c.C && (d.x -= 2, d.y += 5);
    c = b.offsetWidth;
    f = e.offsetWidth;
    f < c || 350 < c ? es(e.firstChild, {
      w: c
    }) : f > c && 350 < f && es(e.firstChild, {
      w: 300
    });
    ep(e, d)
  }
}

function mensk(a, b) {
  mens(a, b)
}
getAC = function () {
  var a = {};
  return function (b) {
    var c = a[b];
    c || (c = new AC(b), a[b] = c);
    return c
  }
}();

function AC(a) {
  this.t = a;
  this.c = {};
  this.l = null;
  this.p = "";
  this.f = null;
  this.h = {}
}
AC.prototype.C = function (a) {
  var b = this;
  a = a.toLowerCase().replace(/[\(\)]/, "");
  return a = a.replace(/[^\020-\177]/g, function (a) {
    var c = b.h[a];
    "string" === typeof c && (a = c);
    return a
  })
};
AC.prototype.E = function () {
  var a = this;
  return function () {
    return {
      i: a.f.f,
      a: [],
      c: "as",
      C: "asu",
      g: 0,
      j: 0
    }
  }
};
AC.prototype.L = function (a) {
  function b(a, b, c) {
    function d(a) {
      return a >= -b && a <= b ? a : null
    }
    a = a.replace(/ /, "");
    var e = 1,
      f = 0,
      l;
    a.match(/^\+/) && (a = a.slice(1));
    a.match(/^\-/) && (a = a.slice(1), e = -1);
    if ("" === a) return "";
    if (l = a.match(/^(\d+)(.*)/)) {
      f = (l[1] - 0) * e;
      a = l[2];
      if ("" === a) return h++, d(f);
      if (a.match(/^[\.\u00b0]/)) {
        a = a.slice(1);
        if ("" === a) return "";
        if (l = a.match(/^(\d+)(.*)/)) {
          var k = l[1];
          a = l[2];
          if ("" === a) return h++, d(f + "." + k - 0);
          if (0 < e && 60 > k) {
            f += (k - 0) / 60;
            if (a.match(/^[\.\'']/)) {
              a = a.slice(1);
              if ("" === a) return "";
              if (l =
                a.match(/^(\d+)(.*)/)) {
                e = l[1];
                a = l[2];
                if (60 <= e) return null;
                f += e / 3600
              }
            }
            a = a.replace(/^\"/, "");
            a = a.replace(/^\'\'/, "");
            if ("" === a) return "";
            if (a == c.charAt(0)) return d(f);
            if (a == c.charAt(1)) return d(-f)
          }
        }
      } else {
        if (a == c.charAt(0)) return d(f);
        if (a == c.charAt(1)) return d(-f)
      }
    }
    return null
  }
  var c = this.E()();
  this.f.s && (c.g = 1);
  var d = "Coordinates/ZIP-codes cannot be used for this service.",
    e = "asi asi-err",
    f, h = 0;
  if (["", 1, 2, 3, 4, 5, 12, 13, 15, 17, 20, 21, 22, 23, 25, 26].includes(this.f.x)) {
    var g = a.match(/^(\w\w+)$/);
    f = a.match(/^([^,]*)[ ,]+([\-\+]?[0-9]+.*)/);
    var l, k;
    f ? (k = b(f[1], 90, "ns"), l = b(f[2], 180, "ew")) : k = b(a, 90, "ns");
    f = "For coordinates, please use one of these formats:<br><b>40.42N 73.59W</b> (Degrees, minutes)<br><b>40.71 -73.98</b> (Decimal)";
    var n = 0;
    if ("number" == typeof k && "number" == typeof l && 1 != h) f = null, n = 1;
    else if (null === k || null === l)
      if (g) {
        if (3 <= a.length) return null;
        d = "Please enter ZIP code...";
        e = "asi-info";
        f = ""
      } else d = "Invalid coordinates or ZIP code...", e = "asi-err";
    else d = "Coordinates and ZIP Codes allowed.", e = "asi-info";
    f ? (c.a[0] = {
      n: d,
      s: 2,
      h: 1,
      c: e
    }, c.a[1] = {
      w: f
    }) : n && (a = sprintf("%.3f", k) + " " + sprintf("%.3f", l), c.a[0] = {
      n: a,
      x: "Show this location",
      c: "ash",
      h: 0,
      la: k,
      lo: l,
      U: "@" + k + "," + l
    })
  }
  return c
};
AC.prototype.B = function (a, b) {
  function c() {
    if (h[TAD.ftz]) return 0;
    var b;
    for (b = 0; b < l; b++) {
      var c = a[b],
        d = c.g;
      if (h[c.i] && d.match(/N/)) return 0
    }
    return 1
  }
  var d = this.E(),
    e = function (a, b) {
      var c = a.indexOf(b);
      if (0 > c) return 0;
      var d = b.length * (b.length + 10) / (a.length + 10);
      if (0 === c) return a == b && (d *= 2), d;
      if (65 > a.charCodeAt(c - 1)) return .8 * d;
      var e = b.length;
      if (2 > e) return 0;
      d *= (e + .1) / (e + 5);
      a = a.substr(0, c);
      return (c = a.match(/([\040-\077]+)/)) ? .5 * d / (1 + c.length) : .1
    },
    f = [],
    h = [];
  it(TAD.used, function (a) {
    h[a] = 1
  });
  var g = function (a,
      b, c) {
      c = b.i;
      if (!f[c] && !h[c]) {
        f[c] = 1;
        var d = b.s,
          d = d ? d + (" - " + b.c) : d + b.c,
          e = "",
          l = b.g;
        l.match(/z/) && (e = "time zone");
        l.match(/c/) && (e = "country");
        l.match(/s/) && ((e = b.r) || (e = "state"));
        l.match(/m/) && (e = "military time");
        e && (e = " (" + e + ")");
        c = {
          c: "ash",
          n: b.n,
          x: d,
          U: c,
          h: 0,
          b: e,
          d: b.f ? "<img height=11 width=16 class=fr alt=Flag src='" + b.f + "'>" : ""
        };
        b.l && (c.la = b.d, c.lo = b.l);
        a.a[a.a.length] = c
      }
    },
    d = d();
  if (!a) return d;
  this.f.s && (d.g = 1);
  this.l = a;
  var l = a.length;
  if (l) {
    b = this.C(b);
    b = b.replace(",", " ");
    var k = b.split(/\s+/),
      n = k.length,
      p, q = [],
      m, u = c();
    for (m = 0; m < l; m++) {
      var w = function (a) {
          var b = 10 * (r.o == a) + 5 * (r.a == a),
            c = 0 <= r.x.indexOf(" " + a);
          if (0 <= r.t.indexOf(a) || 0 <= r.e.indexOf(a) || 0 <= r.u.indexOf(a) || c) {
            var d = e(r.t, a) * v,
              f = e(r.e, a) * x;
            a = e(r.u, a) * y;
            c && 10 > b && (b = 10 + r.z);
            d > b && (b = d);
            f > b && (b = f);
            a > b && (b = a)
          }
          b && (A++, z += b)
        },
        r = a[m],
        t = r.g;
      if (!h[r.i]) {
        var v = 10,
          x = 5,
          y = 4;
        t.match(/s/) && (y = x = 20);
        t.match(/c/) && (y = x = v = 30);
        var z = 0,
          A = 0;
        w(b);
        for (p = 0; p < n; p++) w(k[p]);
        u && t.match(/N/) && (z++, A++);
        0 < z && (t = A / n, q[q.length] = {
          s: (3 * r.p + z) * t * t * t,
          c: r
        })
      }
    }
    q.sort(function (a,
      b) {
      return b.s - a.s
    });
    l = q.length;
    5 < l && (20 < l && (l = 20), m = gsv(), k = po(this.f.f), k = m.h - k.y, m = m.H - 10, k < m && (m = k), m = Mf((m - 45) / 36), l > m && (l = m), 3 > l && (l = 3));
    if (0 < l) {
      t = 5 < l ? 5 : l;
      u = q[0].s;
      p = .7 * u;
      var w = .2 * u,
        B = 1,
        k = 0;
      for (m = 1; m < l; m++) {
        n = u;
        u = q[m].s;
        if (u < w) {
          l = m;
          break
        }
        var C = n - u;
        m < t && C > B && n > p && (B = C, k = m)
      }
      if (4 < k || 20 > B) k = 0;
      var D = {};
      it(TAD.pwc, function (a) {
        D[a] = 1
      });
      for (m = p = u = n = 0; m < l; m++) r = q[m].c, t = r.g, t.match(/N/) ? n++ : D[r.i] ? u++ : p++;
      if (k && p) {
        for (m = 0; m < k; m++) g(d, q[m].c, 1);
        d.a[d.a.length] = {
          s: 1
        }
      } else p || (m = "Near you or from Personal World Clock", !n && u ? m = "From Personal World Clock" : !u && 0 < n && (m = "Locations near you"), d.a[d.a.length] = {
        n: m,
        s: 2,
        h: 1,
        c: "asi"
      });
      q = q.slice(k, l);
      l = q.length;
      q.sort(function (a, b) {
        return a.c.n.localeCompare(b.c.n)
      });
      for (m = 0; m < l; m++) g(d, q[m].c, 0)
    } else g = "No matches", 2 > b.length && (g = "Type for more matches"), d.a[0] = {
      n: g,
      s: 2,
      h: 0,
      c: "ash"
    };
    this.f.s && (d.a[d.a.length] = {
      u: "/worldclock/",
      n: "World Clock",
      s: 100,
      h: 1
    });
    return d
  }
};
AC.prototype.U = function () {
  var a = this,
    b = function (b) {
      b && (0 === b.a.length && (b.a[0] = {
        n: "Type in name...",
        s: 2,
        c: "ash"
      }), ifsm(a.f, b))
    },
    c = function (c, d) {
      var e, f = a.f.x + "::";
      a.c[f + c] = {};
      var k = "/scripts/completion.php?",
        h = 0;
      if (d) {
        var p = [],
          q = window.TAD;
        q && (0 < q.ftz && (p[0] = q.ftz), it(q.pwc, function (a) {
          p.push(a)
        }), p.length && (k += "id=" + p.join("_"), h = 1), q.lon && (k += "&near=5&long=" + q.lon + "&lat=" + q.lat + "&co=" + q.co, h = 2))
      } else k += "query=" + encodeURIComponent(c), h = 3;
      a.f.x && (k += "&xd=" + a.f.x);
      h && jcb(k, function (d) {
        d = d.split("\n");
        var l = d.length,
          k = [],
          h;
        for (h = 0; h < l; h++) {
          var g;
          g = d[h].split("\t");
          7 < g.length ? g = {
            i: g[0],
            p: g[1],
            o: g[2],
            a: g[3],
            n: g[4],
            t: a.C(g[4]),
            s: g[5],
            e: a.C(g[5]),
            c: g[6],
            u: a.C(g[6]),
            f: g[7],
            x: " " + g[8] + " ",
            z: g[9] - 0,
            g: g[10] || "",
            r: g[11],
            d: g[12],
            l: g[13]
          } : ("CONV" === g[0] && (a.h[g[1]] = g[2]), g = void 0);
          g && k.push(g)
        }
        a.c[f + c].d = k;
        e = a.B(k, c);
        b(e)
      })
    },
    d = function (b) {
      function d(b) {
        if (" - " != b && 1 < b.length) return b = b.slice(0, b.length - 1), (k = a.c[f + b]) && k.d ? a.B(k.d, e) : d(b)
      }
      var e = a.p;
      b && (e = " _ ");
      var f = a.f.x + "::",
        k = a.c[f + e];
      k ? b = k.d ? a.B(k.d,
        e) : d(e) : (c(e, b), b = d(e));
      return b
    };
  inline_lowvalue = a.p;
  inline_do_display_default_menu = 0;
  2 > inline_lowvalue.length && window.TAD && (inline_do_display_default_menu = 1);
  var e = !1;
  if (inline_lowvalue.match(/^[\-\+]?[0-9]+/)) {
    if (inline_menu = a.L(inline_lowvalue)) {
      b(inline_menu);
      return
    }
    e = !0
  }
  if (2 <= inline_lowvalue.length || inline_do_display_default_menu || e) inline_menu = d(inline_do_display_default_menu), b(inline_menu);
  inline_menu || pM.k()
};
AC.prototype.A = function (a, b) {
  this.f = a;
  b = b.replace(/^\s+/g, "").replace(/\s+$/g, "").replace(/\s+/, " ");
  this.p = b.toLowerCase();
  this.U()
};

function ifsm(a, b) {
  a.m = b;
  a.u = -1;
  mena(a.n, b);
  mens(a.n, a.f)
}

function ifd(a) {
  var b = a.f,
    c = b.value,
    d = a.n.indexOf("txt");
  if (0 < d) {
    var e = b.form[a.n.slice(0, d)];
    if (e) {
      var f = ":";
      if (a.H && a.T) {
        var h = a.T.toLowerCase();
        0 <= c.toLowerCase().indexOf(h) && (f = a.H)
      }
      e.value = f
    }
  }
  if (a.e) {
    e = a.t;
    f = 11;
    b = {
      i: b,
      a: []
    };
    if (1 == e.length) {
      var h = d = c.replace(/\D/g, ""),
        g, l = 2,
        k = 0;
      a.i = 1;
      "y" == e && (k = (new Date).getFullYear() - 5, l = d.length, 0 < l && (4 > l && (d += "1005".slice(l)), k = d.slice(0, 4) - 5), a.a = 3999, l = 4);
      "m" == e && (k = 1, f = 12, a.a = 12, g = " Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "));
      "M" == e && (k =
        1, f = 36, a.a = 36, b.r = 12);
      "d" == e && (k = 1, f = 31, a.a = 31, b.r = 10);
      k = lim(k, 1, 3989);
      "w" == e && (k = 0, f = 54, a.a = 53, b.r = 15);
      if ("i" == e || "s" == e) k = 0, f = 60, a.i = 0, a.a = 59, b.r = 10;
      if ("h" == e)
        for (k = 0, f = 24, a.i = 0, a.a = 23, b.r = 12, g = [], d = 0; d < f; d++) g[d] = (d + 11) % 12 + 1 + (12 > d ? "am" : "pm");
      for (d = 0; d < f; d++) {
        var n = g ? " - " + g[k] : "";
        b.a[b.a.length] = {
          n: pf(k, l),
          d: n,
          h: h == k
        };
        k++
      }
      ifsm(a, b)
    }
    2 == e.length && (a.l = 1, a.o || "ci" == e && getAC(e).A(a, c))
  }
}

function ifku(a, b) {
  return ifd(a)
}

function ifpd(a) {
  a.preventDefault && a.preventDefault();
  a.returnValue = !1
}

function ifkd(a, b) {
  var c, d = a.f,
    e, f = !0;
  c = (e = window.event) ? e.keyCode : b.which;
  var h = a.u,
    g = a.m,
    l = a.l && g;
  e = 0;
  27 == c && (a.e = 0, pM.k());
  38 == c && (e = -1);
  40 == c && (e = 1);
  if (e) {
    if (l) {
      f = g.a.length - 1;
      for (c = 0; 3 > c && (-1 == h ? (a.o = d.value, h = 0 < e ? 0 : f) : h += e, h > f && (h = -1), -1 != h && g.a[h].s); c++);
      d.value = 0 <= h ? g.a[h].n : a.o;
      0 > h && (a.o = null);
      a.u = h;
      menh(h);
      return !1
    }
    h = d.value - 0;
    0 <= h && (h += e);
    a = fh[d.name];
    if (!a || !a.a || a.i <= h && a.a >= h) d.value = h, f = !1
  } else if (13 == c) {
    if (0 <= h && l) return mech(g, g.a[h]), ifpd(b), !1
  } else a.o = null;
  ifd(a);
  return f
}

function ifs(a) {
  var b = a.u;
  return a.s && 0 <= b ? !1 : !0
}

function ifcb(a, b, c) {
  pM.z(50);
  gA(a, "tad-va") && va(a.name, a)
}

function ifc(a, b, c, d) {
  var e = a.name,
    f = fh[e];
  f && f.f != a && (f = null);
  f || (f = {
    n: e,
    f: a,
    t: b
  }, fh[e] = f, b = e.indexOf("txt"), 0 < b && (e = e.slice(0, b), e = a.form[e]) && (f.H = e.value, f.T = a.value), oael(a, "keydown", function (a) {
    ifkd(f, a)
  }, 0), oael(a, "keyup", function (a) {
    ifku(f, a)
  }, 0), oael(a, "blur", function (b) {
    ifcb(a, f, b)
  }, 0), c && (f.s = 1, oael(a.form, "submit", function () {
    return ifs(f)
  })), f.x = d ? d : "");
  f.e = 1;
  return ifd(f)
}

function ofs(a, b) {
  var c = 0,
    d, e, f = window,
    h = "directories=no,location=no,menubar=no,resizable=yes,scrollbars=no,status=no,toolbar=no";
  if (e = f.screen) c = e.availHeight - 30, d = e.availWidth - 10;
  b ? (h += ",left=0,screenX=0,top=0,screenY=0,fullscreen=yes", c && (h += ",height=" + c + ",innerHeight=" + c + ",width=" + d + ",innerWidth=" + d)) : h += ",height=180,width=320";
  if (f.open(a.href, "_blank", h)) return !1;
  alert("Could not open the popup-window, maybe there is a popup-blocker installed");
  b && c && (f.moveTo(0, 0), f.resizeTo(d, c));
  return !0
}

function jco(a, b, c, d) {
  phg(b, b, function (b) {
    pM.A('<table id=CB><thead><tr><td id=CT><a href="javascript:jcc()"><img class=fr src="//c.tadst.com/gfx/x3.png" alt=close width=18 height=18></a><div class=tc><strong>' + c + "</strong></div></td></tr><tr><td id=jcdiv>" + b + "</td></tr></table>", a, d)
  });
  return !1
}

function jcc() {
  pM.k()
}

function ges(a) {
  return Mf(.001 * a)
}
TO = {
  co: {},
  e: 0,
  f: 0,
  j: 0,
  J: 0,
  p: 0,
  s: 0,
  t: "",
  z: 1E3,
  Z: 0,
  y: -1,
  C: [],
  fu: !1,
  ut: 0,
  ci: {},
  pr: 0,
  ps: 0,
  gco: function (a) {
    return TO.co[a]
  },
  dt: function () {
    var a = window;
    return a.TAD && "undefined" !== typeof a.TAD.ft ? 1E3 * TAD.ft : dt() + this.j
  },
  Date: function () {
    return new Date(TO.dt())
  },
  aC: function (a) {
    a && (this.C[this.C.length] = a)
  },
  S: function (a) {
    a = a ? "&r=" + a : "";
    var b = dt();
    if (!(this.ps && this.ps + 5E3 > b)) {
      var c = this;
      this.ps = b;
      jcb("/scripts/ts.php?ut=" + b + "&cb=" + Mr() + a, function (a) {
        var d = dt(),
          d = (b + d) / 2;
        c.j = Mf(1E3 * parseFloat(a) - d);
        c.y = d -
          b + 50;
        c.U();
        iH("ref", "At time of loading, accuracy was within " + Math.round(c.y) / 1E3 + " seconds")
      })
    }
  },
  Y: function (a) {
    var b = this;
    40 > b.s++ && (a += "_" + b.s, window.setTimeout(function () {
      b.S(a)
    }, 2500))
  },
  R: function (a, b, c) {
    var d = "p" + b;
    if (a[d] !== c || this.fu)
      if (a[d] = c, d = a[b])
        if (ih(d, c), a = a.E)
          for (var e in a) d = a[e], this.R(d, b, c)
  },
  tO: function (a, b) {
    var c = a.t,
      d = null,
      e;
    for (e = 0; e < c.length; e++) {
      var f = c[e];
      if (f.t > b) break;
      d = f;
      e && (d.C = e)
    }
    return d ? d : {
      a: "",
      o: 0
    }
  },
  uL: function (a, b) {
    var c = this.tO(cks[a], ges(b));
    return new Date(+b +
      1E3 * c.o)
  },
  l2u: function (a, b) {
    for (var c = cks[a], d = 0, e, f = 0; 3 > f && (e = d, d = this.tO(c, ges(b) - d).o, d != e); f++);
    return new Date(+b - 1E3 * d)
  },
  gF: function (a, b, c, d) {
    var e = cks[a];
    a = this.tO(e, ges(b));
    b = new Date(+b + 1E3 * a.o);
    d = d ? d(b) : e.f(b);
    c && a.a && (d += " " + a.a);
    return d
  },
  gTC: function (a) {
    a = cks[a].t;
    var b = a[0].o,
      c = [];
    for (inline_i = 1; inline_i < a.length; inline_i++) {
      var d = a[inline_i],
        e = d.o;
      c[inline_i - 1] = {
        u: new Date(1E3 * d.t),
        l: new Date(1E3 * (d.t + e)),
        o: e,
        a: d.a,
        c: e - b
      };
      b = e
    }
    return c
  },
  U: function () {
    var a, b, c, d = [],
      e = this,
      f = e.dt(),
      h =
      e.p;
    e.p = f;
    if (!e.pr && ges(f) > et) rf("tz1", "Will refresh in 30 seconds", 30, 0);
    else {
      if (h) {
        h = f - h;
        if (e.f > f) {
          rf("tz1", "Clock has gone backward - will refresh soon", 20, 0);
          return
        }
        3E4 < h && (c = "f"); - 25 > h && (c = "b");
        if (c) {
          e.Y(c + h);
          return
        }
      } else e.f = f;
      e.J && (f += e.J);
      c = e.Z ? .001 * f : ges(f);
      if (c != e.e)
        for (a in e.e = c, it(e.C, function (a) {
            a(f)
          }), cks) {
          var g = cks[a],
            l = e.tO(g, c);
          b = l.o;
          h = l.a;
          l = l.d;
          if ("" !== b && g.c) {
            var k = g.c,
              n = ges(k.t - f + 999);
            k.z && 0 > n && (n = 0);
            n != k.p && (k.f ? ih(k.f1, k.f(n)) : (0 > n && 0 <= k.p && (ih(k.u1, "since"), ih(k.u2, "since")),
              k.p = n, 0 > n ? n = -n : k.R && (n += k.R), it(k.l, function (a) {
                var b = a.f,
                  c = Mf(n / b.f);
                b.m && (c %= b.m, k.P && (c = pf(c, k.P)));
                e.R(a, "n1", c);
                e.R(a, "n2", a.u[1 != c ? 1 : 0])
              })))
          }
          if ("" !== b) {
            var p = new Date(1E3 * (c + b));
            if (g.p) {
              g.p(g, p, a, g);
              var q = g.E;
              if (q)
                for (var m in q) g.p(q[m], p, m, g)
            }
            g.d1 && (e.R(g, "d1", g.f(p)), it(g.fx, function (a) {
              var b = a.f(p);
              e.R(g, "fx_" + a.n, b)
            }), g.u && (b = (Mf((c + b) / 86400) + 4) % 7, d[b] = (d[b] || 0) + g.C, window.dsts && (e.R(g, "d3", l ? dsts : ""), d[7] = (d[7] || 0) + g.C * (l || 0))));
            g.s && g.s.f(g.s, p, g.g);
            g.S && it(g.S, function (a) {
              a.draw(+p)
            });
            e.R(g, "d2", h)
          }
        }
      if (window.updwds && d.length && (a = d.join(","), a != e.t))
        for (e.t = a, b = 0; 8 > b; b++)
          if (a = d[b] || 0, m = gf("smwd" + b)) sd(m, a ? 1 : 0), iH("smwi" + b, updwds(a));
      e.fu = !1;
      f = e.dt();
      e.ut = setTimeout(function () {
        e.U()
      }, e.z - f % e.z)
    }
  },
  fixfuncs: function (a) {
    function b(a, b) {
      if (a) {
        var d = a[b];
        if (d) {
          var e = typeof d;
          if ("function" === e) return 1;
          "string" === e && (a[b] = c[d])
        }
      }
    }
    var c = window;
    for (inline_baseCityDivName in a) {
      var d = a[inline_baseCityDivName];
      if (b(d, "f") || b(d.c, "f")) break;
      it(d.fx, function (a) {
        b(a, "f")
      })
    }
  },
  setcks: function (a) {
    this.icks(a);
    window.cks = a;
    TO.upd()
  },
  icks: function (a) {
    function b(a, b, c) {
      function d(a, b) {
        var c = -(Mf(b) % 16) * e + "px",
          d = -Mf(b / 16) * e + "px";
        a.style.backgroundPosition = c + " " + d
      }
      var e = c.s;
      b = ges(+b);
      d(a.h, 61 + (b + 450) % 43200 / 900);
      d(a.m, 1 + b % 3600 / 60);
      d(a.s, 109 + b % 60)
    }

    function c(a, b, c) {
      function d(a, b) {
        g.beginPath();
        g.moveTo(a, 0);
        g.lineTo(b, 0);
        g.stroke()
      }

      function e(a, b, c, e, f) {
        g.save();
        g.lineWidth = a;
        f && (g.strokeStyle = f);
        g.rotate(b * h / 30);
        d(-c * k, e * k);
        g.restore()
      }
      var f = c.s;
      c = 40 < f;
      var l = 100 > f,
        k = f / 2,
        g = a.c,
        h = Math.PI;
      g.save();
      g.clearRect(0,
        0, f, f);
      g.translate(k, k);
      g.rotate(-h / 2);
      g.lineCap = "butt";
      if (l)
        for (g.beginPath(), g.arc(0, 0, k - 2, 0, 2 * h, !0), g.fillStyle = "#fff", g.fill(), g.lineWidth = c ? 4 : 1, g.strokeStyle = c ? "#353535" : "#065947", g.stroke(), f = c ? .76 : .7, a = 0; 60 > a; a += 5) g.lineWidth = c ? a % 15 ? 2 : 4 : 1, d(.985 * (k - 1), k * f), g.rotate(h / 6);
      g.lineCap = "round";
      f = ges(+b);
      b = f % 60;
      a = f / 60 % 60;
      f /= 720;
      c ? (e(2, f, .14, .46, "#000"), e(1.5, a, .14, .76, "#000"), e(1, b, .28, .76, "#e00f21")) : (e(1, f, 0, .5, "#065947"), e(1, a, 0, .9, "#065947"));
      g.restore()
    }

    function d(a) {
      var d = cE("canvas"),
        e = a.s =
        a.s || 56;
      if (d && d.getContext) return a.s = e, sA(d, "width", e), sA(d, "height", e), a.c && (d.className = a.c), ac(d, "clk"), {
        f: c,
        e: d,
        c: d.getContext("2d")
      };
      var f = function (a) {
          var b = cE("div"),
            c = b.style;
          c.background = "url(//c.tadst.com/gfx/canvas/nclk" + e + ".png?1)";
          es(b, {
            w: e,
            h: e
          });
          a && (c.position = "relative", aCh(a, b));
          return b
        },
        d = f(),
        g = f(d),
        l = f(g),
        f = f(l);
      a.c && (d.className = a.c);
      ac(d, "clkimg");
      return {
        f: b,
        e: d,
        s: f,
        m: g,
        h: l
      }
    }
    var e = this;
    e.fixfuncs(a);
    ia(a, function (a, b) {
      var c = a.replace(/\D/, "");
      e.ci[c] = b;
      b.e && (c = b.e.split(","),
        it(c, function (a) {
          e.ci[a] = b
        }))
    });
    var f, h = [{
        n: "s2",
        f: 1
      }, {
        n: "m2",
        f: 60
      }, {
        n: "h2",
        f: 3600
      }, {
        n: "d2",
        f: 86400
      }, {
        n: "w2",
        f: 604800
      }, {
        n: "s1",
        f: 1,
        m: 60
      }, {
        n: "m1",
        f: 60,
        m: 60
      }, {
        n: "h1",
        f: 3600,
        m: 24
      }, {
        n: "d1",
        f: 86400
      }, {
        n: "dw1",
        f: 86400,
        m: 7
      }, {
        n: "w1",
        f: 604800
      }],
      g = function (a, b, c) {
        TO.co[a] = b;
        b.d1 = gf(a);
        b.d2 = gf(a + "a");
        b.d3 = gf(a + "s");
        var e = c || b;
        it(e.fx, function (c) {
          b["fx_" + c.n] = gf(a + c.n)
        });
        if (c = e.g)
          if (2 == c.t) c = function (b) {
            if (b = gf(a + b)) e.S || (e.S = []), e.S.push(new Clck(b, a))
          }, c("clk"), c("mapclk");
          else if (c = d(c)) b.s = c, b.d1.parentNode.insertBefore(c.e,
          b.d1);
        b.u = "p" == a.charAt(0);
        var g = b.c;
        if (g) {
          var l = {
            s: ["second", "seconds"],
            m: ["minute", "minutes"],
            h: ["hour", "hours"],
            d: ["day", "days"],
            w: ["week", "weeks"]
          };
          (c = g.u) && (l = 1 === c ? {
            s: ["sec", "secs"],
            m: ["min", "mins"],
            h: ["hrs", "hrs"],
            d: ["day", "days"],
            w: ["wk", "wks"]
          } : c);
          g.f1 = gf(a + "_f1");
          g.u1 = gf(a + "_u1");
          g.u2 = gf(a + "_u2");
          g.l = [];
          it(h, function (b, c) {
            b = h[c];
            var d = a + "_" + b.n;
            g.l[c] = {
              f: b,
              n1: gf(d),
              n2: gf(d + "t"),
              u: l[b.n.charAt(0)]
            }
          })
        }
        b.C = 1;
        b.e && (c = b.e.split(","), b.E = {}, it(c, function (a) {
          a = a.replace(/^(\d)/, "p$1");
          b.E[a] = {};
          b.C++
        }), f(b.E, b))
      };
    f = function (a, b) {
      for (var c in a) g(c, a[c], b)
    };
    f(a)
  },
  init: function (a) {
    var b = window.cks;
    "object" == typeof b && (this.icks(b), window.TO_noupd || a || this.S())
  },
  upd: function () {
    this.e -= 1E-4;
    this.fu = !0;
    clearTimeout(this.ut);
    this.U()
  },
  city: function (a, b) {
    var c = this.ci[a];
    if (c) return c = this.tO(c), b || (b = this.dt()), c.d = new Date(+b + 1E3 * c.o), c
  }
};
(function () {
  function a(a, d) {
    var c = b[d];
    if (c && document.body.contains(c.N)) return c;
    this.d = TO.dt();
    this.N = gf(a);
    b[d] = this;
    c = cDF();
    this.h = cE("div", {
      "class": "hour"
    }, c);
    this.m = cE("div", {
      "class": "min"
    }, c);
    this.s = cE("div", {
      "class": "sec"
    }, c);
    this.o = cE("div", {
      "class": "dot"
    }, c);
    this.t = cE("div", {
      "class": "time clk-tm"
    }, c);
    this.T = cE("span", null, this.t);
    this.D = cE("span", {
      "class": "block small"
    }, this.t);
    this.F = c;
    this.W = this.N.offsetWidth;
    this.H = this.N.offsetHeight;
    this.debug = !1;
    this.night = !!gA(this.N, "data-clock-night");
    this.showSeconds = "false" !== gA(this.N, "data-Clck-showSeconds");
    return this
  }
  var b = {};
  a.update = function (a, d, e, f) {
    if (a = b[e]) f = f.X, a.draw(EVC && EVC.fix && f ? 1E3 * f.local : +d)
  };
  a.prototype = {
    A: function (a, b, e, f) {
      !1 === f || 0 === this.d ? sd(a, 0) : (angle = this.d / b % e * (360 / e), b = a.style, UA.trans ? b[UA.trans] = "rotate(" + angle + "deg) " + (UA.d3 ? "translateZ(0)" : "") : (b.marginTop = "", b.marginLeft = "", b.filter = UA.mat(angle), b.marginTop = (this.H - a.offsetHeight) / 2 + "px", b.marginLeft = (this.W - a.offsetWidth) / 2 + "px"))
    },
    S: function () {
      this.A(this.h,
        36E5, 12);
      this.A(this.m, 6E4, 60);
      this.A(this.s, 1E3, 60, this.showSeconds)
    },
    draw: function (a) {
      this.d = a;
      (this.night = !!gA(this.N, "data-clock-night")) ? (a = a / 36E5 % 24, ac(this.N, "night", 6 <= a && 18 >= a ? !1 : !0)) : ac(this.N, "night", 0);
      this.S();
      this.F && (aCh(this.N, this.F), delete this.F)
    }
  };
  window.Clck = a
})();
elh = {};
elc = {};
fh = {};
window.TD || (TD = {});

function ael(a, b, c, d) {
  if (a) {
    if ("string" == typeof a && (a = gf(a), !a)) return;
    a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
  }
}

function aelw(a, b, c) {
  ael(window, a, b, c)
}

function oael(a, b, c, d) {
  var e = a.id;
  e || (e = a.name);
  e || (e = a.href);
  e = b + ":" + e;
  elh[e] || (elh[e] = 1, ael(a, b, c, d))
}

function aelc(a, b) {
  var c = gf(a);
  ael(c, "click", function (a) {
    a = ev(a);
    ifpd(a.e);
    b(c, a);
    return !1
  }, !0)
}
blo = -1;

function bls(a) {
  var b = gf("FBD");
  sd(b, blo);
  0 > blo && (a = a.href, a = a.match(/\.html/) ? a.replace(".h", "-frame.h") : a.match(/\?/) ? a.replace("?", "-frame?") : a + "-frame", ih(b, '<iframe id=FBF src="' + a + '" width=600 height=1200 frameborder=0>webmaster@timeanddate.com</iframe>'));
  blo = !blo;
  return !1
}

function blc() {
  blo = 0;
  bls();
  blo = -1
}

function ev(a) {
  var b = {};
  a ? b.k = a.which : (a = window.event, b.k = a.keyCode);
  if (b.e = a) b.s = a.target || a.srcElement;
  return b
}

function bli() {
  var a = wl();
  if (a) {
    var b = function (a, b, c, h) {
        a && document.write('<a href="' + a + '"  alt="' + c + '"' + h + ">" + b + "</a> | ")
      },
      c = "?url=" + a.pathname;
    (a = a.search) && (c += encodeURIComponent(a));
    b("/information/feedback.html" + c, "Feedback", "Send feedback to us", ' onclick="return bls(this)"');
    8 < c.length && b("/createshort.html" + c, "Short URL", "Create a short URL to this page", "")
  }
}

function ott(a, b, c) {
  oael(a, "mouseout", function (a) {
    pM.z()
  });
  c = b;
  ttt && ttt[b] && (c = ttt[b]);
  c = '<div id=ttb onmouseover="pM.y()" onmouseout="pM.z()">' + c + "</div>";
  b = ap(a);
  c = pM.h(c);
  jp(b, c, a, -1, 0);
  ep(c, b)
}
loadcss_cache = {};

function loadcss(a) {
  if (!loadcss_cache[a]) {
    loadcss_cache[a] = 1;
    var b = document.createElement("link");
    b.href = a;
    b.type = "text/css";
    b.rel = "stylesheet";
    document.getElementsByTagName("head")[0].appendChild(b)
  }
}

function calp(a, b) {
  function c(a, b) {
    var c = h["_" + b];
    if (c) {
      var d = a[b];
      c.value = d;
      if (c.value != d && "SELECT" == c.tagName) {
        var e = c.options;
        e[e.length] = new Option(d, d, !1, !0)
      }
      fe("change", c)
    }
  }

  function d(a) {
    a && (c(a, "y"), c(a, "m"), c(a, "d"));
    calPU.k()
  }

  function e(a, c, d) {
    var e;
    e = b.match(/^\d/) ? a + b : "" === b ? {
      y: "year",
      m: "month",
      d: "day"
    }[a] : b + a;
    e = g[e];
    var f = Mf(e.value - 0);
    c = lim(f, c, d);
    f == c && (h[a] = f);
    h["_" + a] = e
  }

  function f(a, b) {
    var c = a.getElementsByClassName(b);
    if (0 < c.length) return c[0].value
  }
  if (!(0 <= a.className.indexOf("disabled"))) {
    loadcss("/common/calendarpopup2_4.css");
    var h = {},
      g = document.f;
    "string" === typeof b ? (e("y", TAD.fyear || 1, TAD.lyear || 3999), e("m", 1, 12), e("d", 1, 31)) : h = {
      y: f("input-year"),
      m: f("input-month"),
      d: f("input-day")
    };
    phg("calp", "/scripts/field/calpop2?2", function (b) {
      var c = a.parentElement;
      if (window.Picker) calPU.o();
      else {
        b = ghj(b);
        var e = cE("div", {
          id: "calpop2"
        }, document.body);
        calPU = new PU("calpop2");
        ac(e, "calpopup", 1);
        calPU.h(b.h);
        eval(b.j)
      }
      Picker.showPicker(c, a, h, d)
    })
  }
}

function vad(a, b, c) {
  var d = 0,
    e = [],
    f = function (a, b, c) {
      if (a) {
        var f = gfv(a),
          g = f.replace(/[\s\.\-\,]/g, "");
        g != f && (a.value = g);
        "" !== g && null !== g && (g -= 0, g >= b && g <= c && (e.push(g), d++))
      }
    };
  f(a, 1, 3999);
  f(b, 1, 12);
  f(c, 1, 31);
  if (3 == d) {
    a = e[0];
    b = e[1];
    c = e[2];
    if (1925 < a) {
      f = 31;
      if (4 == b || 6 == b || 9 == b || 11 == b) f = 30;
      2 == b && (f = 28 + (0 === a % 4) - (0 === a % 100) + (0 === a % 400));
      if (c > f) return null
    }
    f = new Date(0);
    f.setUTCFullYear(a);
    f.setUTCMonth(b - 1);
    f.setUTCDate(c);
    return f
  }
  return null
}

function vat(a, b, c) {
  function d() {
    ac(c, "error", 0)
  }

  function e() {
    d();
    ac(c, "error", 1)
  }

  function f(a, b) {
    if (k < a || k > b) return e(), 1;
    d();
    return 0
  }
  var h = b.match(/(\w)(\d+)/),
    g, l = c.value,
    k = l.replace(/[\s\.\-\,]/g, "");
  if (k) {
    k != l && (c.value = k);
    var n;
    if ("date" == a && (h ? (n = h[1], g = h[2], g = ["y" + g, "m" + g, "d" + g]) : ("year" == b && (n = "y"), "month" == b && (n = "m"), "day" == b && (n = "d"), n && (g = ["year", "month", "day"])), g)) {
      if ("y" == n && f(1, 3999) || "m" == n && f(1, 12) || "d" == n && f(1, 31)) return;
      var p = [],
        q = [];
      it(g, function (a) {
        if (a = gf(a)) {
          var b = a.value;
          null !== b && "" !== b && (p.push(b - 0), q.push(a))
        }
      });
      if (3 == p.length) {
        c = q[2];
        var l = p[0],
          m = p[1],
          u = p[2];
        if (1925 < l) {
          var w = 31;
          if (4 == m || 6 == m || 9 == m || 11 == m) w = 30;
          2 == m && (w = 28 + (0 === l % 4) - (0 === l % 100) + (0 === l % 400));
          if (u > w) {
            e();
            return
          }
        }
      }
      d()
    }
    "time" == a && (h ? (n = h[1], g = h[2], g = ["h" + g, "i" + g, "s" + g]) : ("hour" == b && (n = "h"), "min" == b && (n = "i"), "sec" == b && (n = "s"), n && (g = ["hour", "min", "sec"])), g && ("h" == n && f(0, 23), "i" == n && f(0, 59), "s" == n && f(0, 59)))
  } else d()
}

function va(a, b) {
  if (a) {
    if (b) {
      var c = gA(b, "tad-va");
      c && vat(c, a, b)
    }(c = elc[a]) && c()
  }
}

function elca(a, b) {
  elc[a] = b
}

function abrd(a, b) {
  return '<a href="javascript:modph()" class="close" title="Close"><img alt="close" src="//c.tadst.com/gfx/n/popup-close.png"/></a><h1 class=title>' + a + "</h1>" + b
}

function anpop(a, b, c) {
  var d = gf("anw"),
    e = cE("div", {
      "class": "alert-notice " + b
    }, d);
  e.innerHTML = a;
  a = cE("button", {
    "class": "close",
    type: "button"
  }, e);
  a.innerHTML = "x";
  aelc(a, function (a) {
    d.removeChild(a.parentNode)
  });
  c && setTimeout(function () {
    gf("anw").removeChild(e)
  }, c)
}

function modps(a, b, c) {
  a = ghj(a);
  c = "<div class=modal><div class=modal-dialog><div class=modal-content><div class=modal-header><button class=close onclick=modph()>\u00d7</button><h2 class=modal-title>" + (c || "Info") + "</h2></div>" + a.h + "</div></div></div>";
  var d = gf("mpo");
  ih(d, c);
  eval(a.j);
  oael(d, "click", function (a) {
    a = ev(a).s;
    a != d && a.parentNode != d || modph()
  });
  oael(window, "keydown", function (a) {
    27 == ev(a).k && modph()
  });
  sd(d, 2)
}

function modpop(a, b, c) {
  a && jcb(a, function (a) {
    modps(a, b, c)
  });
  return !1
}

function modph(a) {
  he("mpo", 0);
  "function" === typeof a && a()
}

function popad(a, b, c) {
  var d = wl();
  c += "?ref=" + escape(d.pathname + d.search);
  aelc(a, function () {
    modpop(c, 1, b)
  })
}

function popadlogin(a) {
  popad(a, "Sign in", "/custom/loginframe.html")
}

function popadreg(a) {
  popad(a, "Register a new account", "/custom/createframe.html")
}

function hsl(a, b) {
  if (a) {
    a.style.overflow = "hidden";
    var c = gcs(a, "height"),
      d = 1,
      e = function () {
        c -= d;
        d++;
        0 < c ? (es(a, {
          h: c
        }), window.setTimeout(e, 20)) : sd(a, 0)
      };
    window.setTimeout(e, b)
  }
}
switching = function () {
  function a(a) {
    c = a;
    it(b, function (a) {
      var b = a == c;
      ac(gf("ec" + a), "active", b);
      sd(gf(a), b)
    })
  }
  var b = arguments,
    c = b[0];
  it(b, function (b) {
    aelc("ec" + b, function () {
      a(b)
    })
  });
  a(c)
};

function extfield(a, b, c) {
  TD.C = function (b, c) {
    var d = document.f[a],
      e = d.options;
    if (e) {
      var g = e.length;
      e[g] = new Option(c, b);
      d.selectedIndex = g
    } else if (d.value = b, e = document.f[a + "txt"]) e.value = c;
    va(a, d)
  };
  modpop("/scripts/field/" + b, 1, "Select city")
}

function extlocs(a, b) {
  b && (TD.sh = 1);
  extfield(a, "location", "Select city")
}

function exttzs(a, b) {
  b && (TD.sh = 1);
  extfield(a, "timezone", "Select time zone")
}

function pn() {
  return window.performance && window.performance.now ? window.performance.now() : +new Date
}
var raf = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (a) {
    window.setTimeout(function () {
      a(pn())
    }, 1E3 / 60)
  }
}();

function lo() {
  document.cookie = "TIMEANDDATE_LOGIN=;domain=.timeanddate.com;path=/;expires=" + (new Date(0)).toGMTString();
  BOOL.add("LOGGEDOUT");
  wl().reload();
  return !1
}

function main() {
  var a = window;
  if (!a.hasRun) {
    a.hasRun = 1;
    popadlogin("poplogin");
    popadreg("popreg");
    aelc("popout", lo);
    var b = function () {
      modpop("/scripts/tzq.php?type=homecity", 1, "Set Home Location")
    };
    aelc("popchi", b);
    aelc("chi", b);
    ia(TD.mena, function (b, c) {
      c.f && (c.f = a[c.f]);
      mena(b, c)
    });
    var b = function (a) {
        aelc(gf("ftbx" + a), function () {
          var b;
          for (b = 0; 4 > b; b++) {
            var c = gf("ftbx" + b);
            c && (he("feat" + b, b == a), c.className = b === a ? "active" : "")
          }
        })
      },
      c;
    for (c = 0; 4 > c; c++) b(c);
    scrlr = function () {
      function b(a, b) {
        f.push({
          e: a,
          c: b
        })
      }

      function c(b) {
        var c = (a.pageYOffset || ddE().scrollTop) > h;
        it(f, function (a) {
          ac(a.e, a.c, c)
        })
      }
      var f = [],
        h;
      return {
        init: function (d) {
          b(d, "sticky");
          h = d.offsetTop;
          ael(a, "scroll", c);
          c()
        },
        addEle: b,
        to: c
      }
    }();
    (b = gf("nav")) && scrlr.init(b);
    TO.init();
    BOOL.del("NEWSLETTER") && (document.cookie = "TIMEANDDATE_NEWSLETTER=;domain=.timeanddate.com;path=/;expires=" + (new Date(0)).toGMTString(), modpop("/custom/created-newsletterinfo.html", 1, "Get Our Free Newsletter!"));
    BOOL.del("LOGGEDIN") && anpop("<h3 class='alert-notice__title'>You are now logged in.</h3>",
      "success alert--success", 5E3);
    BOOL.del("LOGGEDOUT") && anpop("<h3 class='alert-notice__title'>You are now logged out.</h3>", "success alert--success", 5E3);
    BOOL.del("MAILAUTH") && anpop("<h3 class='alert-notice__title'>Please check your email for instructions on how to login.</h3>", "success alert--success", 5E3);
    BOOL.del("NOPASS") && anpop("<h3 class='alert-notice__title'>Your account has no password set, please consider setting one.</h3><a href='/custom/password.html'>Set new password here.</a>", "warning alert--warning")
  }
}
(function () {
  function a(a) {
    sd(a, 1);
    ael(a, "mouseover", function () {
      var g = c[gA(a, "data-social")];
      g && (b(g.src, g.id), clearTimeout(f), it(d, function (b) {
        a !== b && ac(b, "hover", 0)
      }), ac(a, "hover", 1), e = a)
    });
    ael(a, "mouseout", function () {
      f = setTimeout(function () {
        h || ac(a, "hover", 0)
      }, 2E3)
    });
    d.push(a)
  }

  function b(a, b) {
    var c, d = gebtn("script")[0];
    gf(b) || (c = cE("script", {
      id: b,
      src: a
    }), d.parentNode.insertBefore(c, d))
  }
  var c = {
      facebook: {
        src: "//connect.facebook.net/en_GB/all.js#xfbml=1&appId=119413198130333",
        id: "facebook-jssdk"
      },
      twitter: {
        src: "//platform.twitter.com/widgets.js",
        id: "twitter-wjs"
      },
      google: {
        src: "//apis.google.com/js/plusone.js",
        id: "google-js"
      }
    },
    d = [],
    e, f, h = !1;
  window.gpluso = function () {
    h = !0;
    clearTimeout(f)
  };
  window.gplusc = function () {
    h = !1;
    ac(e, "hover", 0)
  };
  it(gebc("social"), function (b) {
    a(b)
  });
  window.mtt && !navigator.appVersion.match(/MSIE [3-7]/) && it(gebc("mtt"), function (a) {
    ael(a, "mouseover", function (b) {
      if (b = gA(a, "title")) {
        var c;
        "IMG" === a.tagName || "INPUT" === a.tagName ? (c = dce("div", {
            "class": a.className
          }), a.className = "",
          a.parentNode.insertBefore(c, a), aCh(c, a), c.blur(), c.focus()) : c = a;
        sA(c, "data-mtt", b);
        sA(a, "title", "")
      }
    })
  })
})();
(function () {
  function a(a) {
    var b = !hC(a, "bloat-enabled");
    ac(a, "bloat-enabled", b);
    a.title = b ? "Click image to collapse" : "Click image to see more detail"
  }
  aelw("load", function () {
    var b = [];
    b.push(gf("bloat"));
    for (var c = 1, d; d = gf("bloat" + c);) b.push(d), c++;
    it(b, function (b) {
      aelc(b, a);
      b = gebtn("figcaption", b);
      (2 <= b.length && "" === b[1].innerHTML || 1 === b.length) && sd(b[0], 2)
    })
  })
})();
BOOL = function () {
  function a() {
    var a;
    return (a = ("; " + document.cookie + ";").match(/\;\s*BOOLSESS=(.*?);/)) ? a[1] : ""
  }

  function b(a) {
    a = a.replace(/^:+/, "").replace(/:+$/, "");
    var b = "BOOLSESS=" + a + ";path=/";
    "" === a && (b += ";expires=Thu, 01 Jan 1970 00:00:01 GMT");
    document.cookie = b
  }
  return {
    add: function (c) {
      var d = a(),
        e;
      e = 0 <= (":" + d + ":").indexOf(":" + c + ":") ? 1 : void 0;
      e || b(d + ((d ? ":" : "") + c))
    },
    del: function (c) {
      var d = a(),
        e = (":" + d + ":").indexOf(":" + c + ":"),
        f = 0 <= e;
      f && (d = ":" + d + ":", d = d.slice(0, e) + d.slice(e + c.length + 1), b(d));
      return f
    }
  }
}();
aelw("load", main);
(function () {
  function a() {
    var b = window.UPD,
      c = 0 < TO.y ? 1E4 : 1E3;
    if (b) {
      var d = TO.dt(),
        e, f, h = function (a) {
          if (!a.d) {
            var b = e - d;
            if (0 > b) {
              var b = a.typ,
                g = a.val;
              "reload" == b && location.reload();
              "html" == b && iH(a.id, g);
              "attr" == b && (f = gf(a.id)) && sA(f, a.nam, a.val);
              "img" == b && (f = gf(a.id)) && (f.src = g);
              "imgf" == b && ((new Image).src = g);
              if ("js" == b) try {
                eval(g)
              } catch (n) {
                window.exception = n
              }
              a.d = 1
            } else b < c && (c = b)
          }
        };
      it(b, function (a) {
        e = a.tim;
        it(a.lst, h)
      })
    }
    setTimeout(a, c)
  }
  a()
})();
(function () {
  var a = function (a, c) {
    var b = this;
    b.e = gf(a);
    b.e.stickytable = b;
    b.o = eval("(" + gA(b.e, "data-options") + ")") || c || {};
    b.p = b.o.offsettop || 40;
    b.b = b.o.offsetbottom || 0;
    b.w = cE("div", {
      "class": "sticky-wr"
    });
    b.T();
    b.d = gebtn("thead", b.e)[0];
    b.l = gebtn("tbody", b.e)[0];
    b.f = gebtn("tfoot", b.e)[0];
    b.S();
    aelw("scroll", function (a) {
      b.C(a)
    });
    aelw("resize", function (a) {
      b.Z(a)
    })
  };
  a.prototype.T = function () {
    this.e.parentNode.insertBefore(this.w, this.e);
    aCh(this.w, this.e)
  };
  a.prototype.S = function () {
    var a = this.l;
    a && (ac(this.e,
      "sticky-en", 0), this.W(this.d, !0), this.W(a), this.d.style.width = a.offsetWidth + "px", a.style.width = a.offsetWidth + "px", this.f && this.W(this.f), this.y = ap(this.e).y, this.h = this.e.offsetHeight, ac(this.e, "sticky-en", 1), this.a = this.d.offsetHeight, a.style.borderTop = this.a + "px solid transparent")
  };
  a.prototype.W = function (a, c) {
    var b = arrclone(a.children),
      e, f = c ? b.length : 1;
    for (e = 0; e < f; e++) {
      var h = arrclone(b[e].children),
        g = [];
      it(h, function (a) {
        g.push(a.offsetWidth)
      });
      it(h, function (a, b) {
        a.style.width = g[b] + "px"
      })
    }
  };
  a.prototype.P =
    function () {
      var a = this,
        c = (document.body.scrollTop || ddE().scrollTop) - a.y,
        d = a.p;
      a.d.style.top = (c >= -d && c < a.h - a.b - a.a - d ? c + d : c >= a.h - a.b - a.a - d ? a.h - a.b - a.a : 1) + "px";
      a.s || (a.s = setTimeout(function () {
        a.y = ap(a.e).y;
        a.s = null
      }, 300))
    };
  a.prototype.C = function (a) {
    this.P()
  };
  a.prototype.Z = function (a) {
    var b = this;
    b.t && clearTimeout(b.t);
    b.t = setTimeout(function () {
      b.S();
      b.P()
    }, 300)
  };
  window.Sticky = a
})();
(function () {
  function a(c, d) {
    c && c.preventDefault && c.preventDefault();
    ac(f, "searchVisible", "searchMenu" === d ? !hC(f, "searchVisible") : 0);
    ac(f, "navVisible", "navMenu" === d ? !hC(f, "navVisible") : 0);
    ac(f, "socialVisible", "socialMenu" === d ? !hC(f, "socialVisible") : 0);
    hC(f, "searchVisible") || hC(f, "navVisible") || hC(f, "socialVisible") ? (e.onkeyup = b, setTimeout(function () {
      e.onclick = function (b) {
        b = b || event;
        b = b.target || b.srcElement;
        for (var c = !0; b.parentNode;) b.id === d && (c = !1), b = b.parentNode;
        c && a()
      }
    }, 100)) : (e.onkeyup = null, e.onclick =
      null);
    return !1
  }

  function b(b) {
    27 === (b || event).keyCode && a()
  }

  function c(a, b, c) {
    a.preventDefault();
    ac(b.parentNode, "selected", c);
    ac(b.parentNode.parentNode, "hasSelected", c);
    return !1
  }

  function d(a) {
    return !hC(f, "navVisible") || hC(this.parentNode, "selected") ? !0 : c(a, this, !0)
  }
  var e = document,
    f = e.body;
  (function () {
    var b = [],
      f = [];
    try {
      b = e.querySelectorAll ? e.querySelectorAll("#nav > ul > li > a:not(.nav-back)") : [], f = e.querySelectorAll ? e.querySelectorAll("#nav > ul > li > a.nav-back") : []
    } catch (l) {}
    ael("navButton", "click",
      function (b) {
        a(b, "navMenu")
      });
    ael("searchButton", "click", function (b) {
      a(b, "searchMenu")
    });
    ael("closeSearch", "click", function (b) {
      a(b, "searchMenu")
    });
    ael("socialButton", "click", function (b) {
      a(b, "socialMenu")
    });
    ael("closeSocial", "click", function (b) {
      a(b, "socialMenu")
    });
    it(b, function (a) {
      ael(a, "click", d, !1)
    });
    it(f, function (a) {
      ael(a, "click", function (a) {
        c(a, this, !1)
      }, !1)
    })
  })()
})();
window._T.control = window._T.control || {};
(function (a) {
  var b = !1;
  a.bindings = {};
  a.add = function (c, e) {
    b = !0;
    a.bindings[c] = e
  };
  a.applyBindings = function (c) {
    c = c || document;
    if (b) return c = arrclone(c.querySelectorAll("*[data-tad-control]")), c.forEach(function (b) {
      var c = gA(b, "data-tad-control");
      if (c = a.bindings[c]) {
        var d = eval("[" + gA(b, "data-tad-options") + "]")[0] || {};
        "undefined" === typeof b.tadControl && (b.tadControl = new c(b, d))
      }
    }), {
      nodes: c
    }
  };
  var c = function () {
    a.applyBindingsOnLoad && a.applyBindings()
  };
  a.applyBindingsOnLoad = function () {
    "complete" === document.readyState ?
      c() : document.addEventListener("DOMContentLoaded", c)
  }
})(window._T.control);
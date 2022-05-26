(function (f) {
  if ("object" === typeof exports && null != exports && "number" !== typeof exports.nodeType) module.exports = f();
  else if ("function" === typeof define && null != define.amd) define([], f);
  else {
    f = f();
    var e = "undefined" !== typeof self ? self : $.global;
    "function" !== typeof e.btoa && (e.btoa = f.btoa);
    "function" !== typeof e.atob && (e.atob = f.atob);
  }
})(function () {
  function f(e) {
    this.message = e;
  }
  f.prototype = Error();
  f.prototype.name = "InvalidCharacterError";
  return {
    btoa: function (e) {
      e = String(e);
      for (
        var m, p, k = 0, w = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", v = "";
        e.charAt(k | 0) || ((w = "="), k % 1);
        v += w.charAt(63 & (m >> (8 - (k % 1) * 8)))
      ) {
        p = e.charCodeAt((k += 0.75));
        if (255 < p) throw new f("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
        m = (m << 8) | p;
      }
      return v;
    },
    atob: function (e) {
      e = String(e).replace(/[=]+$/, "");
      if (1 === e.length % 4) throw new f("'atob' failed: The string to be decoded is not correctly encoded.");
      for (
        var m = 0, p, k, w = 0, v = "";
        (k = e.charAt(w++));
        ~k && ((p = m % 4 ? 64 * p + k : k), m++ % 4) ? (v += String.fromCharCode(255 & (p >> ((-2 * m) & 6)))) : 0
      )
        k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(k);
      return v;
    }
  };
});
!(function (f, e, m) {
  "undefined" != typeof window && "function" == typeof define && define.amd
    ? define(m)
    : "undefined" != typeof module && module.exports
    ? (module.exports = m())
    : e.exports
    ? (e.exports = m())
    : (e.Fingerprint2 = m());
})(0, this, function () {
  var f = function (a, b) {
      a = [a[0] >>> 16, 65535 & a[0], a[1] >>> 16, 65535 & a[1]];
      b = [b[0] >>> 16, 65535 & b[0], b[1] >>> 16, 65535 & b[1]];
      var c = [0, 0, 0, 0];
      return (
        (c[3] += a[3] + b[3]),
        (c[2] += c[3] >>> 16),
        (c[3] &= 65535),
        (c[2] += a[2] + b[2]),
        (c[1] += c[2] >>> 16),
        (c[2] &= 65535),
        (c[1] += a[1] + b[1]),
        (c[0] += c[1] >>> 16),
        (c[1] &= 65535),
        (c[0] += a[0] + b[0]),
        (c[0] &= 65535),
        [(c[0] << 16) | c[1], (c[2] << 16) | c[3]]
      );
    },
    e = function (a, b) {
      a = [a[0] >>> 16, 65535 & a[0], a[1] >>> 16, 65535 & a[1]];
      b = [b[0] >>> 16, 65535 & b[0], b[1] >>> 16, 65535 & b[1]];
      var c = [0, 0, 0, 0];
      return (
        (c[3] += a[3] * b[3]),
        (c[2] += c[3] >>> 16),
        (c[3] &= 65535),
        (c[2] += a[2] * b[3]),
        (c[1] += c[2] >>> 16),
        (c[2] &= 65535),
        (c[2] += a[3] * b[2]),
        (c[1] += c[2] >>> 16),
        (c[2] &= 65535),
        (c[1] += a[1] * b[3]),
        (c[0] += c[1] >>> 16),
        (c[1] &= 65535),
        (c[1] += a[2] * b[2]),
        (c[0] += c[1] >>> 16),
        (c[1] &= 65535),
        (c[1] += a[3] * b[1]),
        (c[0] += c[1] >>> 16),
        (c[1] &= 65535),
        (c[0] += a[0] * b[3] + a[1] * b[2] + a[2] * b[1] + a[3] * b[0]),
        (c[0] &= 65535),
        [(c[0] << 16) | c[1], (c[2] << 16) | c[3]]
      );
    },
    m = function (a, b) {
      return 32 === (b %= 64)
        ? [a[1], a[0]]
        : 32 > b
        ? [(a[0] << b) | (a[1] >>> (32 - b)), (a[1] << b) | (a[0] >>> (32 - b))]
        : ((b -= 32), [(a[1] << b) | (a[0] >>> (32 - b)), (a[0] << b) | (a[1] >>> (32 - b))]);
    },
    p = function (a, b) {
      return 0 === (b %= 64) ? a : 32 > b ? [(a[0] << b) | (a[1] >>> (32 - b)), a[1] << b] : [a[1] << (b - 32), 0];
    },
    k = function (a, b) {
      return [a[0] ^ b[0], a[1] ^ b[1]];
    },
    w = function (a) {
      return (
        (a = k(a, [0, a[0] >>> 1])),
        (a = e(a, [4283543511, 3981806797])),
        (a = k(a, [0, a[0] >>> 1])),
        (a = e(a, [3301882366, 444984403])),
        k(a, [0, a[0] >>> 1])
      );
    },
    v = function (a, b) {
      b = b || 0;
      var c = (a = a || "").length % 16,
        h = a.length - c,
        d = [0, b];
      b = [0, b];
      for (var g, l, t = [2277735313, 289559509], q = [1291169091, 658871167], n = 0; n < h; n += 16)
        (g = [
          (255 & a.charCodeAt(n + 4)) | ((255 & a.charCodeAt(n + 5)) << 8) | ((255 & a.charCodeAt(n + 6)) << 16) | ((255 & a.charCodeAt(n + 7)) << 24),
          (255 & a.charCodeAt(n)) | ((255 & a.charCodeAt(n + 1)) << 8) | ((255 & a.charCodeAt(n + 2)) << 16) | ((255 & a.charCodeAt(n + 3)) << 24)
        ]),
          (l = [
            (255 & a.charCodeAt(n + 12)) | ((255 & a.charCodeAt(n + 13)) << 8) | ((255 & a.charCodeAt(n + 14)) << 16) | ((255 & a.charCodeAt(n + 15)) << 24),
            (255 & a.charCodeAt(n + 8)) | ((255 & a.charCodeAt(n + 9)) << 8) | ((255 & a.charCodeAt(n + 10)) << 16) | ((255 & a.charCodeAt(n + 11)) << 24)
          ]),
          (g = e(g, t)),
          (g = m(g, 31)),
          (g = e(g, q)),
          (d = k(d, g)),
          (d = m(d, 27)),
          (d = f(d, b)),
          (d = f(e(d, [0, 5]), [0, 1390208809])),
          (l = e(l, q)),
          (l = m(l, 33)),
          (l = e(l, t)),
          (b = k(b, l)),
          (b = m(b, 31)),
          (b = f(b, d)),
          (b = f(e(b, [0, 5]), [0, 944331445]));
      switch (((g = [0, 0]), (l = [0, 0]), c)) {
        case 15:
          l = k(l, p([0, a.charCodeAt(n + 14)], 48));
        case 14:
          l = k(l, p([0, a.charCodeAt(n + 13)], 40));
        case 13:
          l = k(l, p([0, a.charCodeAt(n + 12)], 32));
        case 12:
          l = k(l, p([0, a.charCodeAt(n + 11)], 24));
        case 11:
          l = k(l, p([0, a.charCodeAt(n + 10)], 16));
        case 10:
          l = k(l, p([0, a.charCodeAt(n + 9)], 8));
        case 9:
          (l = k(l, [0, a.charCodeAt(n + 8)])), (l = e(l, q)), (l = m(l, 33)), (l = e(l, t)), (b = k(b, l));
        case 8:
          g = k(g, p([0, a.charCodeAt(n + 7)], 56));
        case 7:
          g = k(g, p([0, a.charCodeAt(n + 6)], 48));
        case 6:
          g = k(g, p([0, a.charCodeAt(n + 5)], 40));
        case 5:
          g = k(g, p([0, a.charCodeAt(n + 4)], 32));
        case 4:
          g = k(g, p([0, a.charCodeAt(n + 3)], 24));
        case 3:
          g = k(g, p([0, a.charCodeAt(n + 2)], 16));
        case 2:
          g = k(g, p([0, a.charCodeAt(n + 1)], 8));
        case 1:
          (g = k(g, [0, a.charCodeAt(n)])), (g = e(g, t)), (g = m(g, 31)), (g = e(g, q)), (d = k(d, g));
      }
      return (
        (d = k(d, [0, a.length])),
        (b = k(b, [0, a.length])),
        (d = f(d, b)),
        (b = f(b, d)),
        (d = w(d)),
        (b = w(b)),
        (d = f(d, b)),
        (b = f(b, d)),
        ("00000000" + (d[0] >>> 0).toString(16)).slice(-8) +
          ("00000000" + (d[1] >>> 0).toString(16)).slice(-8) +
          ("00000000" + (b[0] >>> 0).toString(16)).slice(-8) +
          ("00000000" + (b[1] >>> 0).toString(16)).slice(-8)
      );
    },
    N = {
      preprocessor: null,
      audio: { timeout: 1e3, excludeIOS11: !0 },
      fonts: { swfContainerId: "fingerprintjs2", swfPath: "flash/compiled/FontList.swf", userDefinedFonts: [], extendedJsFonts: !1 },
      screen: { detectScreenOrientation: !0 },
      plugins: { sortPluginsFor: [/palemoon/i], excludeIE: !1 },
      extraComponents: [],
      excludes: { enumerateDevices: !0, pixelRatio: !0, doNotTrack: !0, fontsFlash: !0 },
      NOT_AVAILABLE: "not available",
      ERROR: "error",
      EXCLUDED: "excluded"
    },
    C = function (a, b) {
      if (Array.prototype.forEach && a.forEach === Array.prototype.forEach) a.forEach(b);
      else if (a.length === +a.length) for (var c = 0, h = a.length; c < h; c++) b(a[c], c, a);
      else for (c in a) a.hasOwnProperty(c) && b(a[c], c, a);
    },
    D = function (a, b) {
      var c = [];
      return null == a
        ? c
        : Array.prototype.map && a.map === Array.prototype.map
        ? a.map(b)
        : (C(a, function (h, d, g) {
            c.push(b(h, d, g));
          }),
          c);
    },
    I = function (a) {
      if (null == navigator.plugins) return a.NOT_AVAILABLE;
      for (var b = [], c = 0, h = navigator.plugins.length; c < h; c++) navigator.plugins[c] && b.push(navigator.plugins[c]);
      return (
        O(a) &&
          (b = b.sort(function (d, g) {
            return d.name > g.name ? 1 : d.name < g.name ? -1 : 0;
          })),
        D(b, function (d) {
          var g = D(d, function (l) {
            return [l.type, l.suffixes];
          });
          return [d.name, d.description, g];
        })
      );
    },
    P = function (a) {
      var b = [];
      (Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject")) || "ActiveXObject" in window
        ? (b = D(
            "AcroPDF.PDF;Adodb.Stream;AgControl.AgControl;DevalVRXCtrl.DevalVRXCtrl.1;MacromediaFlashPaper.MacromediaFlashPaper;Msxml2.DOMDocument;Msxml2.XMLHTTP;PDF.PdfCtrl;QuickTime.QuickTime;QuickTimeCheckObject.QuickTimeCheck.1;RealPlayer;RealPlayer.RealPlayer(tm) ActiveX Control (32-bit);RealVideo.RealVideo(tm) ActiveX Control (32-bit);Scripting.Dictionary;SWCtl.SWCtl;Shell.UIHelper;ShockwaveFlash.ShockwaveFlash;Skype.Detection;TDCCtl.TDCCtl;WMPlayer.OCX;rmocx.RealPlayer G2 Control;rmocx.RealPlayer G2 Control.1".split(
              ";"
            ),
            function (c) {
              try {
                return new window.ActiveXObject(c), c;
              } catch (h) {
                return a.ERROR;
              }
            }
          ))
        : b.push(a.NOT_AVAILABLE);
      return navigator.plugins && (b = b.concat(I(a))), b;
    },
    O = function (a) {
      for (var b = !1, c = 0, h = a.plugins.sortPluginsFor.length; c < h; c++)
        if (navigator.userAgent.match(a.plugins.sortPluginsFor[c])) {
          b = !0;
          break;
        }
      return b;
    },
    Q = function () {
      var a,
        b = function (q) {
          return (
            a.clearColor(0, 0, 0, 1),
            a.enable(a.DEPTH_TEST),
            a.depthFunc(a.LEQUAL),
            a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT),
            "[" + q[0] + ", " + q[1] + "]"
          );
        };
      if (!(a = G())) return null;
      var c = [],
        h = a.createBuffer();
      a.bindBuffer(a.ARRAY_BUFFER, h);
      var d = new Float32Array([-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.732134444, 0]);
      a.bufferData(a.ARRAY_BUFFER, d, a.STATIC_DRAW);
      h.itemSize = 3;
      h.numItems = 3;
      d = a.createProgram();
      var g = a.createShader(a.VERTEX_SHADER);
      a.shaderSource(
        g,
        "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"
      );
      a.compileShader(g);
      var l = a.createShader(a.FRAGMENT_SHADER);
      a.shaderSource(l, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}");
      a.compileShader(l);
      a.attachShader(d, g);
      a.attachShader(d, l);
      a.linkProgram(d);
      a.useProgram(d);
      d.vertexPosAttrib = a.getAttribLocation(d, "attrVertex");
      d.offsetUniform = a.getUniformLocation(d, "uniformOffset");
      a.enableVertexAttribArray(d.vertexPosArray);
      a.vertexAttribPointer(d.vertexPosAttrib, h.itemSize, a.FLOAT, !1, 0, 0);
      a.uniform2f(d.offsetUniform, 1, 1);
      a.drawArrays(a.TRIANGLE_STRIP, 0, h.numItems);
      try {
        c.push(a.canvas.toDataURL());
      } catch (q) {}
      c.push("extensions:" + (a.getSupportedExtensions() || []).join(";"));
      c.push("webgl aliased line width range:" + b(a.getParameter(a.ALIASED_LINE_WIDTH_RANGE)));
      c.push("webgl aliased point size range:" + b(a.getParameter(a.ALIASED_POINT_SIZE_RANGE)));
      c.push("webgl alpha bits:" + a.getParameter(a.ALPHA_BITS));
      c.push("webgl antialiasing:" + (a.getContextAttributes().antialias ? "yes" : "no"));
      c.push("webgl blue bits:" + a.getParameter(a.BLUE_BITS));
      c.push("webgl depth bits:" + a.getParameter(a.DEPTH_BITS));
      c.push("webgl green bits:" + a.getParameter(a.GREEN_BITS));
      c.push(
        "webgl max anisotropy:" +
          (function (q) {
            var n =
              q.getExtension("EXT_texture_filter_anisotropic") ||
              q.getExtension("WEBKIT_EXT_texture_filter_anisotropic") ||
              q.getExtension("MOZ_EXT_texture_filter_anisotropic");
            return n ? ((q = q.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)), 0 === q && (q = 2), q) : null;
          })(a)
      );
      c.push("webgl max combined texture image units:" + a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS));
      c.push("webgl max cube map texture size:" + a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE));
      c.push("webgl max fragment uniform vectors:" + a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS));
      c.push("webgl max render buffer size:" + a.getParameter(a.MAX_RENDERBUFFER_SIZE));
      c.push("webgl max texture image units:" + a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS));
      c.push("webgl max texture size:" + a.getParameter(a.MAX_TEXTURE_SIZE));
      c.push("webgl max varying vectors:" + a.getParameter(a.MAX_VARYING_VECTORS));
      c.push("webgl max vertex attribs:" + a.getParameter(a.MAX_VERTEX_ATTRIBS));
      c.push("webgl max vertex texture image units:" + a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS));
      c.push("webgl max vertex uniform vectors:" + a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS));
      c.push("webgl max viewport dims:" + b(a.getParameter(a.MAX_VIEWPORT_DIMS)));
      c.push("webgl red bits:" + a.getParameter(a.RED_BITS));
      c.push("webgl renderer:" + a.getParameter(a.RENDERER));
      c.push("webgl shading language version:" + a.getParameter(a.SHADING_LANGUAGE_VERSION));
      c.push("webgl stencil bits:" + a.getParameter(a.STENCIL_BITS));
      c.push("webgl vendor:" + a.getParameter(a.VENDOR));
      c.push("webgl version:" + a.getParameter(a.VERSION));
      try {
        var t = a.getExtension("WEBGL_debug_renderer_info");
        t &&
          (c.push("webgl unmasked vendor:" + a.getParameter(t.UNMASKED_VENDOR_WEBGL)),
          c.push("webgl unmasked renderer:" + a.getParameter(t.UNMASKED_RENDERER_WEBGL)));
      } catch (q) {}
      return (
        a.getShaderPrecisionFormat &&
          C(["FLOAT", "INT"], function (q) {
            C(["VERTEX", "FRAGMENT"], function (n) {
              C(["HIGH", "MEDIUM", "LOW"], function (y) {
                C(["precision", "rangeMin", "rangeMax"], function (u) {
                  var A = a.getShaderPrecisionFormat(a[n + "_SHADER"], a[y + "_" + q])[u];
                  "precision" !== u && (u = "precision " + u);
                  u = ["webgl ", n.toLowerCase(), " shader ", y.toLowerCase(), " ", q.toLowerCase(), " ", u, ":", A].join("");
                  c.push(u);
                });
              });
            });
          }),
        c
      );
    },
    R = function () {
      if (void 0 !== navigator.languages)
        try {
          if (navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2)) return !0;
        } catch (a) {
          return !0;
        }
      return !1;
    },
    S = function () {
      var a,
        b = navigator.userAgent.toLowerCase(),
        c = navigator.productSub;
      if (
        ("Chrome" ===
          (a =
            0 <= b.indexOf("firefox")
              ? "Firefox"
              : 0 <= b.indexOf("opera") || 0 <= b.indexOf("opr")
              ? "Opera"
              : 0 <= b.indexOf("chrome")
              ? "Chrome"
              : 0 <= b.indexOf("safari")
              ? "Safari"
              : 0 <= b.indexOf("trident")
              ? "Internet Explorer"
              : "Other") ||
          "Safari" === a ||
          "Opera" === a) &&
        "20030107" !== c
      )
        return !0;
      b = eval.toString().length;
      if (
        (37 === b && "Safari" !== a && "Firefox" !== a && "Other" !== a) ||
        (39 === b && "Internet Explorer" !== a && "Other" !== a) ||
        (33 === b && "Chrome" !== a && "Opera" !== a && "Other" !== a)
      )
        return !0;
      try {
        throw "a";
      } catch (d) {
        try {
          d.toSource();
          var h = !0;
        } catch (g) {
          h = !1;
        }
      }
      return h && "Firefox" !== a && "Other" !== a;
    },
    J = function () {
      var a = document.createElement("canvas");
      return !(!a.getContext || !a.getContext("2d"));
    },
    K = function () {
      if (!J()) return !1;
      var a = G();
      return !!window.WebGLRenderingContext && !!a;
    },
    T = function (a, b) {
      window.___fp_swf_loaded = function (d) {
        a(d);
      };
      var c,
        h = b.fonts.swfContainerId;
      (c = document.createElement("div")).setAttribute("id", (void 0).fonts.swfContainerId);
      document.body.appendChild(c);
      window.swfobject.embedSWF(b.fonts.swfPath, h, "1", "1", "9.0.0", !1, { onReady: "___fp_swf_loaded" }, { allowScriptAccess: "always", menu: "false" }, {});
    },
    G = function () {
      var a = document.createElement("canvas"),
        b = null;
      try {
        b = a.getContext("webgl") || a.getContext("experimental-webgl");
      } catch (c) {}
      return b || (b = null), b;
    },
    X = [
      {
        key: "userAgent",
        getData: function (a) {
          a(navigator.userAgent);
        }
      },
      {
        key: "webdriver",
        getData: function (a, b) {
          a(null == navigator.webdriver ? b.NOT_AVAILABLE : navigator.webdriver);
        }
      },
      {
        key: "language",
        getData: function (a, b) {
          a(navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || b.NOT_AVAILABLE);
        }
      },
      {
        key: "colorDepth",
        getData: function (a, b) {
          a(window.screen.colorDepth || b.NOT_AVAILABLE);
        }
      },
      {
        key: "deviceMemory",
        getData: function (a, b) {
          a(navigator.deviceMemory || b.NOT_AVAILABLE);
        }
      },
      {
        key: "pixelRatio",
        getData: function (a, b) {
          a(window.devicePixelRatio || b.NOT_AVAILABLE);
        }
      },
      {
        key: "hardwareConcurrency",
        getData: function (a, b) {
          a(navigator.hardwareConcurrency ? navigator.hardwareConcurrency : b.NOT_AVAILABLE);
        }
      },
      {
        key: "screenResolution",
        getData: function (a, b) {
          var c = [window.screen.width, window.screen.height];
          b = (b.screen.detectScreenOrientation && c.sort().reverse(), c);
          a(b);
        }
      },
      {
        key: "availableScreenResolution",
        getData: function (a, b) {
          if (window.screen.availWidth && window.screen.availHeight) {
            var c = [window.screen.availHeight, window.screen.availWidth];
            b = (b.screen.detectScreenOrientation && c.sort().reverse(), c);
          } else b = b.NOT_AVAILABLE;
          a(b);
        }
      },
      {
        key: "timezoneOffset",
        getData: function (a) {
          a(new Date().getTimezoneOffset());
        }
      },
      {
        key: "timezone",
        getData: function (a, b) {
          window.Intl && window.Intl.DateTimeFormat ? a(new window.Intl.DateTimeFormat().resolvedOptions().timeZone) : a(b.NOT_AVAILABLE);
        }
      },
      {
        key: "sessionStorage",
        getData: function (a, b) {
          try {
            var c = !!window.sessionStorage;
          } catch (h) {
            c = b.ERROR;
          }
          a(c);
        }
      },
      {
        key: "localStorage",
        getData: function (a, b) {
          try {
            var c = !!window.localStorage;
          } catch (h) {
            c = b.ERROR;
          }
          a(c);
        }
      },
      {
        key: "indexedDb",
        getData: function (a, b) {
          try {
            var c = !!window.indexedDB;
          } catch (h) {
            c = b.ERROR;
          }
          a(c);
        }
      },
      {
        key: "addBehavior",
        getData: function (a) {
          a(!(!document.body || !document.body.addBehavior));
        }
      },
      {
        key: "openDatabase",
        getData: function (a) {
          a(!!window.openDatabase);
        }
      },
      {
        key: "cpuClass",
        getData: function (a, b) {
          a(navigator.cpuClass || b.NOT_AVAILABLE);
        }
      },
      {
        key: "platform",
        getData: function (a, b) {
          a(navigator.platform ? navigator.platform : b.NOT_AVAILABLE);
        }
      },
      {
        key: "doNotTrack",
        getData: function (a, b) {
          a(
            navigator.doNotTrack
              ? navigator.doNotTrack
              : navigator.msDoNotTrack
              ? navigator.msDoNotTrack
              : window.doNotTrack
              ? window.doNotTrack
              : b.NOT_AVAILABLE
          );
        }
      },
      {
        key: "plugins",
        getData: function (a, b) {
          "Microsoft Internet Explorer" === navigator.appName || ("Netscape" === navigator.appName && /Trident/.test(navigator.userAgent))
            ? b.plugins.excludeIE
              ? a(b.EXCLUDED)
              : a(P(b))
            : a(I(b));
        }
      },
      {
        key: "canvas",
        getData: function (a, b) {
          if (J()) {
            var c = [],
              h = document.createElement("canvas");
            h.width = 2e3;
            h.height = 200;
            h.style.display = "inline";
            var d = h.getContext("2d");
            b =
              (d.rect(0, 0, 10, 10),
              d.rect(2, 2, 6, 6),
              c.push("canvas winding:" + (!1 === d.isPointInPath(5, 5, "evenodd") ? "yes" : "no")),
              (d.textBaseline = "alphabetic"),
              (d.fillStyle = "#f60"),
              d.fillRect(125, 1, 62, 20),
              (d.fillStyle = "#069"),
              b.dontUseFakeFontInCanvas ? (d.font = "11pt Arial") : (d.font = "11pt no-real-font-123"),
              d.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 2, 15),
              (d.fillStyle = "rgba(102, 204, 0, 0.2)"),
              (d.font = "18pt Arial"),
              d.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 4, 45),
              (d.globalCompositeOperation = "multiply"),
              (d.fillStyle = "rgb(255,0,255)"),
              d.beginPath(),
              d.arc(50, 50, 50, 0, 2 * Math.PI, !0),
              d.closePath(),
              d.fill(),
              (d.fillStyle = "rgb(0,255,255)"),
              d.beginPath(),
              d.arc(100, 50, 50, 0, 2 * Math.PI, !0),
              d.closePath(),
              d.fill(),
              (d.fillStyle = "rgb(255,255,0)"),
              d.beginPath(),
              d.arc(75, 100, 50, 0, 2 * Math.PI, !0),
              d.closePath(),
              d.fill(),
              (d.fillStyle = "rgb(255,0,255)"),
              d.arc(75, 75, 75, 0, 2 * Math.PI, !0),
              d.arc(75, 75, 25, 0, 2 * Math.PI, !0),
              d.fill("evenodd"),
              h.toDataURL && c.push("canvas fp:" + h.toDataURL()),
              c);
            a(b);
          } else a(b.NOT_AVAILABLE);
        }
      },
      {
        key: "webgl",
        getData: function (a, b) {
          K() ? a(Q()) : a(b.NOT_AVAILABLE);
        }
      },
      {
        key: "webglVendorAndRenderer",
        getData: function (a) {
          if (K()) {
            try {
              var b = G(),
                c = b.getExtension("WEBGL_debug_renderer_info");
              var h = b.getParameter(c.UNMASKED_VENDOR_WEBGL) + "~" + b.getParameter(c.UNMASKED_RENDERER_WEBGL);
            } catch (d) {
              h = null;
            }
            a(h);
          } else a();
        }
      },
      {
        key: "adBlock",
        getData: function (a) {
          var b = document.createElement("div");
          b.innerHTML = "&nbsp;";
          var c = !(b.className = "adsbox");
          try {
            document.body.appendChild(b), (c = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight), document.body.removeChild(b);
          } catch (h) {
            c = !1;
          }
          a(c);
        }
      },
      {
        key: "hasLiedLanguages",
        getData: function (a) {
          a(R());
        }
      },
      {
        key: "hasLiedResolution",
        getData: function (a) {
          a(window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight);
        }
      },
      {
        key: "hasLiedOs",
        getData: function (a) {
          var b;
          var c = navigator.userAgent.toLowerCase();
          var h = navigator.oscpu,
            d = navigator.platform.toLowerCase();
          c =
            ((b =
              0 <= c.indexOf("windows phone")
                ? "Windows Phone"
                : 0 <= c.indexOf("win")
                ? "Windows"
                : 0 <= c.indexOf("android")
                ? "Android"
                : 0 <= c.indexOf("linux") || 0 <= c.indexOf("cros")
                ? "Linux"
                : 0 <= c.indexOf("iphone") || 0 <= c.indexOf("ipad")
                ? "iOS"
                : 0 <= c.indexOf("mac")
                ? "Mac"
                : "Other"),
            ("ontouchstart" in window || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints) &&
              "Windows Phone" !== b &&
              "Android" !== b &&
              "iOS" !== b &&
              "Other" !== b) ||
            (void 0 !== h &&
              ((0 <= (h = h.toLowerCase()).indexOf("win") && "Windows" !== b && "Windows Phone" !== b) ||
                (0 <= h.indexOf("linux") && "Linux" !== b && "Android" !== b) ||
                (0 <= h.indexOf("mac") && "Mac" !== b && "iOS" !== b) ||
                (-1 === h.indexOf("win") && -1 === h.indexOf("linux") && -1 === h.indexOf("mac")) != ("Other" === b)))
              ? !0
              : (0 <= d.indexOf("win") && "Windows" !== b && "Windows Phone" !== b) ||
                ((0 <= d.indexOf("linux") || 0 <= d.indexOf("android") || 0 <= d.indexOf("pike")) && "Linux" !== b && "Android" !== b) ||
                ((0 <= d.indexOf("mac") || 0 <= d.indexOf("ipad") || 0 <= d.indexOf("ipod") || 0 <= d.indexOf("iphone")) && "Mac" !== b && "iOS" !== b) ||
                (0 > d.indexOf("win") && 0 > d.indexOf("linux") && 0 > d.indexOf("mac") && 0 > d.indexOf("iphone") && 0 > d.indexOf("ipad")) !==
                  ("Other" === b) ||
                (void 0 === navigator.plugins && "Windows" !== b && "Windows Phone" !== b);
          a(c);
        }
      },
      {
        key: "hasLiedBrowser",
        getData: function (a) {
          a(S());
        }
      },
      {
        key: "touchSupport",
        getData: function (a) {
          var b = 0;
          void 0 !== navigator.maxTouchPoints ? (b = navigator.maxTouchPoints) : void 0 !== navigator.msMaxTouchPoints && (b = navigator.msMaxTouchPoints);
          try {
            document.createEvent("TouchEvent");
            var c = !0;
          } catch (h) {
            c = !1;
          }
          a([b, c, "ontouchstart" in window]);
        }
      },
      {
        key: "fonts",
        getData: function (a, b) {
          var c = ["monospace", "sans-serif", "serif"],
            h =
              "Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(
                ";"
              );
          b.fonts.extendedJsFonts &&
            (h = h.concat(
              "Abadi MT Condensed Light;Academy Engraved LET;ADOBE CASLON PRO;Adobe Garamond;ADOBE GARAMOND PRO;Agency FB;Aharoni;Albertus Extra Bold;Albertus Medium;Algerian;Amazone BT;American Typewriter;American Typewriter Condensed;AmerType Md BT;Andalus;Angsana New;AngsanaUPC;Antique Olive;Aparajita;Apple Chancery;Apple Color Emoji;Apple SD Gothic Neo;Arabic Typesetting;ARCHER;ARNO PRO;Arrus BT;Aurora Cn BT;AvantGarde Bk BT;AvantGarde Md BT;AVENIR;Ayuthaya;Bandy;Bangla Sangam MN;Bank Gothic;BankGothic Md BT;Baskerville;Baskerville Old Face;Batang;BatangChe;Bauer Bodoni;Bauhaus 93;Bazooka;Bell MT;Bembo;Benguiat Bk BT;Berlin Sans FB;Berlin Sans FB Demi;Bernard MT Condensed;BernhardFashion BT;BernhardMod BT;Big Caslon;BinnerD;Blackadder ITC;BlairMdITC TT;Bodoni 72;Bodoni 72 Oldstyle;Bodoni 72 Smallcaps;Bodoni MT;Bodoni MT Black;Bodoni MT Condensed;Bodoni MT Poster Compressed;Bookshelf Symbol 7;Boulder;Bradley Hand;Bradley Hand ITC;Bremen Bd BT;Britannic Bold;Broadway;Browallia New;BrowalliaUPC;Brush Script MT;Californian FB;Calisto MT;Calligrapher;Candara;CaslonOpnface BT;Castellar;Centaur;Cezanne;CG Omega;CG Times;Chalkboard;Chalkboard SE;Chalkduster;Charlesworth;Charter Bd BT;Charter BT;Chaucer;ChelthmITC Bk BT;Chiller;Clarendon;Clarendon Condensed;CloisterBlack BT;Cochin;Colonna MT;Constantia;Cooper Black;Copperplate;Copperplate Gothic;Copperplate Gothic Bold;Copperplate Gothic Light;CopperplGoth Bd BT;Corbel;Cordia New;CordiaUPC;Cornerstone;Coronet;Cuckoo;Curlz MT;DaunPenh;Dauphin;David;DB LCD Temp;DELICIOUS;Denmark;DFKai-SB;Didot;DilleniaUPC;DIN;DokChampa;Dotum;DotumChe;Ebrima;Edwardian Script ITC;Elephant;English 111 Vivace BT;Engravers MT;EngraversGothic BT;Eras Bold ITC;Eras Demi ITC;Eras Light ITC;Eras Medium ITC;EucrosiaUPC;Euphemia;Euphemia UCAS;EUROSTILE;Exotc350 Bd BT;FangSong;Felix Titling;Fixedsys;FONTIN;Footlight MT Light;Forte;FrankRuehl;Fransiscan;Freefrm721 Blk BT;FreesiaUPC;Freestyle Script;French Script MT;FrnkGothITC Bk BT;Fruitger;FRUTIGER;Futura;Futura Bk BT;Futura Lt BT;Futura Md BT;Futura ZBlk BT;FuturaBlack BT;Gabriola;Galliard BT;Gautami;Geeza Pro;Geometr231 BT;Geometr231 Hv BT;Geometr231 Lt BT;GeoSlab 703 Lt BT;GeoSlab 703 XBd BT;Gigi;Gill Sans;Gill Sans MT;Gill Sans MT Condensed;Gill Sans MT Ext Condensed Bold;Gill Sans Ultra Bold;Gill Sans Ultra Bold Condensed;Gisha;Gloucester MT Extra Condensed;GOTHAM;GOTHAM BOLD;Goudy Old Style;Goudy Stout;GoudyHandtooled BT;GoudyOLSt BT;Gujarati Sangam MN;Gulim;GulimChe;Gungsuh;GungsuhChe;Gurmukhi MN;Haettenschweiler;Harlow Solid Italic;Harrington;Heather;Heiti SC;Heiti TC;HELV;Herald;High Tower Text;Hiragino Kaku Gothic ProN;Hiragino Mincho ProN;Hoefler Text;Humanst 521 Cn BT;Humanst521 BT;Humanst521 Lt BT;Imprint MT Shadow;Incised901 Bd BT;Incised901 BT;Incised901 Lt BT;INCONSOLATA;Informal Roman;Informal011 BT;INTERSTATE;IrisUPC;Iskoola Pota;JasmineUPC;Jazz LET;Jenson;Jester;Jokerman;Juice ITC;Kabel Bk BT;Kabel Ult BT;Kailasa;KaiTi;Kalinga;Kannada Sangam MN;Kartika;Kaufmann Bd BT;Kaufmann BT;Khmer UI;KodchiangUPC;Kokila;Korinna BT;Kristen ITC;Krungthep;Kunstler Script;Lao UI;Latha;Leelawadee;Letter Gothic;Levenim MT;LilyUPC;Lithograph;Lithograph Light;Long Island;Lydian BT;Magneto;Maiandra GD;Malayalam Sangam MN;Malgun Gothic;Mangal;Marigold;Marion;Marker Felt;Market;Marlett;Matisse ITC;Matura MT Script Capitals;Meiryo;Meiryo UI;Microsoft Himalaya;Microsoft JhengHei;Microsoft New Tai Lue;Microsoft PhagsPa;Microsoft Tai Le;Microsoft Uighur;Microsoft YaHei;Microsoft Yi Baiti;MingLiU;MingLiU_HKSCS;MingLiU_HKSCS-ExtB;MingLiU-ExtB;Minion;Minion Pro;Miriam;Miriam Fixed;Mistral;Modern;Modern No. 20;Mona Lisa Solid ITC TT;Mongolian Baiti;MONO;MoolBoran;Mrs Eaves;MS LineDraw;MS Mincho;MS PMincho;MS Reference Specialty;MS UI Gothic;MT Extra;MUSEO;MV Boli;Nadeem;Narkisim;NEVIS;News Gothic;News GothicMT;NewsGoth BT;Niagara Engraved;Niagara Solid;Noteworthy;NSimSun;Nyala;OCR A Extended;Old Century;Old English Text MT;Onyx;Onyx BT;OPTIMA;Oriya Sangam MN;OSAKA;OzHandicraft BT;Palace Script MT;Papyrus;Parchment;Party LET;Pegasus;Perpetua;Perpetua Titling MT;PetitaBold;Pickwick;Plantagenet Cherokee;Playbill;PMingLiU;PMingLiU-ExtB;Poor Richard;Poster;PosterBodoni BT;PRINCETOWN LET;Pristina;PTBarnum BT;Pythagoras;Raavi;Rage Italic;Ravie;Ribbon131 Bd BT;Rockwell;Rockwell Condensed;Rockwell Extra Bold;Rod;Roman;Sakkal Majalla;Santa Fe LET;Savoye LET;Sceptre;Script;Script MT Bold;SCRIPTINA;Serifa;Serifa BT;Serifa Th BT;ShelleyVolante BT;Sherwood;Shonar Bangla;Showcard Gothic;Shruti;Signboard;SILKSCREEN;SimHei;Simplified Arabic;Simplified Arabic Fixed;SimSun;SimSun-ExtB;Sinhala Sangam MN;Sketch Rockwell;Skia;Small Fonts;Snap ITC;Snell Roundhand;Socket;Souvenir Lt BT;Staccato222 BT;Steamer;Stencil;Storybook;Styllo;Subway;Swis721 BlkEx BT;Swiss911 XCm BT;Sylfaen;Synchro LET;System;Tamil Sangam MN;Technical;Teletype;Telugu Sangam MN;Tempus Sans ITC;Terminal;Thonburi;Traditional Arabic;Trajan;TRAJAN PRO;Tristan;Tubular;Tunga;Tw Cen MT;Tw Cen MT Condensed;Tw Cen MT Condensed Extra Bold;TypoUpright BT;Unicorn;Univers;Univers CE 55 Medium;Univers Condensed;Utsaah;Vagabond;Vani;Vijaya;Viner Hand ITC;VisualUI;Vivaldi;Vladimir Script;Vrinda;Westminster;WHITNEY;Wide Latin;ZapfEllipt BT;ZapfHumnst BT;ZapfHumnst Dm BT;Zapfino;Zurich BlkEx BT;Zurich Ex BT;ZWAdobeF".split(
                ";"
              )
            ));
          h = (h = h.concat(b.fonts.userDefinedFonts)).filter(function (r, z) {
            return h.indexOf(r) === z;
          });
          b = document.getElementsByTagName("body")[0];
          var d = document.createElement("div"),
            g = document.createElement("div"),
            l = {},
            t = {},
            q = function () {
              var r = document.createElement("span");
              return (
                (r.style.position = "absolute"),
                (r.style.left = "-9999px"),
                (r.style.fontSize = "72px"),
                (r.style.fontStyle = "normal"),
                (r.style.fontWeight = "normal"),
                (r.style.letterSpacing = "normal"),
                (r.style.lineBreak = "auto"),
                (r.style.lineHeight = "normal"),
                (r.style.textTransform = "none"),
                (r.style.textAlign = "left"),
                (r.style.textDecoration = "none"),
                (r.style.textShadow = "none"),
                (r.style.whiteSpace = "normal"),
                (r.style.wordBreak = "normal"),
                (r.style.wordSpacing = "normal"),
                (r.innerHTML = "mmmmmmmmmmlli"),
                r
              );
            },
            n = function (r) {
              for (var z = !1, x = 0; x < c.length && !(z = r[x].offsetWidth !== l[c[x]] || r[x].offsetHeight !== t[c[x]]); x++);
              return z;
            },
            y = (function () {
              for (var r = [], z = 0, x = c.length; z < x; z++) {
                var E = q();
                E.style.fontFamily = c[z];
                d.appendChild(E);
                r.push(E);
              }
              return r;
            })();
          b.appendChild(d);
          for (var u = 0, A = c.length; u < A; u++) (l[c[u]] = y[u].offsetWidth), (t[c[u]] = y[u].offsetHeight);
          y = (function () {
            for (var r, z, x, E = {}, F = 0, U = h.length; F < U; F++) {
              for (var L = [], H = 0, V = c.length; H < V; H++) {
                var M = ((r = h[F]), (z = c[H]), (x = void 0), ((x = q()).style.fontFamily = "'" + r + "'," + z), x);
                g.appendChild(M);
                L.push(M);
              }
              E[h[F]] = L;
            }
            return E;
          })();
          b.appendChild(g);
          u = [];
          A = 0;
          for (var W = h.length; A < W; A++) n(y[h[A]]) && u.push(h[A]);
          b.removeChild(g);
          b.removeChild(d);
          a(u);
        },
        pauseBefore: !0
      },
      {
        key: "fontsFlash",
        getData: function (a, b) {
          return void 0 !== window.swfobject
            ? window.swfobject.hasFlashPlayerVersion("9.0.0")
              ? b.fonts.swfPath
                ? void T(function (c) {
                    a(c);
                  }, b)
                : a("missing options.fonts.swfPath")
              : a("flash not installed")
            : a("swf object not loaded");
        },
        pauseBefore: !0
      },
      {
        key: "audio",
        getData: function (a, b) {
          var c = b.audio;
          if (c.excludeIOS11 && navigator.userAgent.match(/OS 11.+Version\/11.+Safari/)) return a(b.EXCLUDED);
          var h = window.OfflineAudioContext || window.webkitOfflineAudioContext;
          if (null == h) return a(b.NOT_AVAILABLE);
          var d = new h(1, 44100, 44100),
            g = d.createOscillator();
          g.type = "triangle";
          g.frequency.setValueAtTime(1e4, d.currentTime);
          var l = d.createDynamicsCompressor();
          C(
            [
              ["threshold", -50],
              ["knee", 40],
              ["ratio", 12],
              ["reduction", -20],
              ["attack", 0],
              ["release", 0.25]
            ],
            function (q) {
              void 0 !== l[q[0]] && "function" == typeof l[q[0]].setValueAtTime && l[q[0]].setValueAtTime(q[1], d.currentTime);
            }
          );
          g.connect(l);
          l.connect(d.destination);
          g.start(0);
          d.startRendering();
          var t = setTimeout(function () {
            return (
              console.warn(
                'Audio fingerprint timed out. Please report bug at https://github.com/Valve/fingerprintjs2 with your user agent: "' + navigator.userAgent + '".'
              ),
              (d.oncomplete = function () {}),
              (d = null),
              a("audioTimeout")
            );
          }, c.timeout);
          d.oncomplete = function (q) {
            try {
              clearTimeout(t);
              var n = q.renderedBuffer
                .getChannelData(0)
                .slice(4500, 5e3)
                .reduce(function (y, u) {
                  return y + Math.abs(u);
                }, 0)
                .toString();
              g.disconnect();
              l.disconnect();
            } catch (y) {
              return void a(y);
            }
            a(n);
          };
        }
      },
      {
        key: "enumerateDevices",
        getData: function (a, b) {
          if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) return a(b.NOT_AVAILABLE);
          navigator.mediaDevices
            .enumerateDevices()
            .then(function (c) {
              a(
                c.map(function (h) {
                  return "id=" + h.deviceId + ";gid=" + h.groupId + ";" + h.kind + ";" + h.label;
                })
              );
            })
            .catch(function (c) {
              a(c);
            });
        }
      }
    ],
    B = function (a) {
      throw Error("'new Fingerprint()' is deprecated, see https://github.com/Valve/fingerprintjs2#upgrade-guide-from-182-to-200");
    };
  return (
    (B.get = function (a, b) {
      b ? a || (a = {}) : ((b = a), (a = {}));
      (function (g, l) {
        if (null != l) {
          var t, q;
          for (q in l) null == (t = l[q]) || Object.prototype.hasOwnProperty.call(g, q) || (g[q] = t);
        }
      })(a, N);
      a.components = a.extraComponents.concat(X);
      var c = {
          data: [],
          addPreprocessedComponent: function (g, l) {
            "function" == typeof a.preprocessor && (l = a.preprocessor(g, l));
            c.data.push({ key: g, value: l });
          }
        },
        h = -1,
        d = function (g) {
          if ((h += 1) >= a.components.length) b(c.data);
          else {
            var l = a.components[h];
            if (a.excludes[l.key]) d(!1);
            else {
              if (!g && l.pauseBefore)
                return (
                  --h,
                  void setTimeout(function () {
                    d(!0);
                  }, 1)
                );
              try {
                l.getData(function (t) {
                  c.addPreprocessedComponent(l.key, t);
                  d(!1);
                }, a);
              } catch (t) {
                c.addPreprocessedComponent(l.key, String(t)), d(!1);
              }
            }
          }
        };
      d(!1);
    }),
    (B.getPromise = function (a) {
      return new Promise(function (b, c) {
        B.get(a, b);
      });
    }),
    (B.getV18 = function (a, b) {
      return (
        null == b && ((b = a), (a = {})),
        B.get(a, function (c) {
          for (var h = [], d = 0; d < c.length; d++) {
            var g = c[d];
            g.value === (a.NOT_AVAILABLE || "not available")
              ? h.push({ key: g.key, value: "unknown" })
              : "plugins" === g.key
              ? h.push({
                  key: "plugins",
                  value: D(g.value, function (l) {
                    var t = D(l[2], function (q) {
                      return q.join ? q.join("~") : q;
                    }).join(",");
                    return [l[0], l[1], t].join("::");
                  })
                })
              : -1 !== ["canvas", "webgl"].indexOf(g.key)
              ? h.push({ key: g.key, value: g.value.join("~") })
              : -1 !== ["sessionStorage", "localStorage", "indexedDb", "addBehavior", "openDatabase"].indexOf(g.key)
              ? g.value && h.push({ key: g.key, value: 1 })
              : g.value
              ? h.push(g.value.join ? { key: g.key, value: g.value.join(";") } : g)
              : h.push({ key: g.key, value: g.value });
          }
          c = v(
            D(h, function (l) {
              return l.value;
            }).join("~~~"),
            31
          );
          b(c, h);
        })
      );
    }),
    (B.x64hash128 = v),
    (B.VERSION = "2.1.0"),
    B
  );
});
var info = { FID: "", PTS: new Date().getTime(), PTT: 0, MTT: 0, MTC: 0, KTT: 0, KTC: 0 },
  ciphertext = "",
  startTime = new Date().getTime(),
  timeDiff = 0,
  mouseStartTime = 0,
  mouseEndTime = 0;
document.onmousedown = function (f) {
  mouseStartTime || (mouseStartTime = new Date().getTime());
  mouseListener(f);
};
var keyboardStartTime = 0,
  keyboardEndTime = 0;
document.onkeydown = function (f) {
  keyboardStartTime || (keyboardStartTime = new Date().getTime());
  keyboardLinster(f);
};
getTimeDiff();
var _this = this;
XMLHttpRequest.prototype._open = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function (f, e, m) {
  f = { method: f, url: e, async: m };
  ("function" !== typeof window.beforeXMLHttpRequestSend || window.beforeXMLHttpRequestSend(this, f)) && this._open(f.method, f.url, f.async);
};
window.beforeXMLHttpRequestSend = function (f, e) {
  e.url = combineUrl(e.url);
  return !0;
};
function combineUrl(f) {
  if (info.FID) {
    ciphertext = "";
    info.PTS = getServiceTime(Math.round(new Date().getTime() / 1e3));
    info.PTT = new Date().getTime() - startTime;
    var e = info.FID.substr(0, 12);
    ciphertext = urlEncode(info.FID + "/" + encrypt(base64Encode(JSON.stringify(info)), info.FID.charCodeAt(1)));
    "/" === f.charAt(f.length - 1) && (f = f.substr(0, f.length - 1));
    f = f.split("?")[1] ? f + ("&x_usec=" + ciphertext + "&x_ufid=" + e) : f + ("?x_usec=" + ciphertext + "&x_ufid=" + e);
  }
  return f;
}
function getxusec() {
  ciphertext = "";
  info.FID &&
    ((info.PTS = getServiceTime(Math.round(new Date().getTime() / 1e3))),
    (info.PTT = new Date().getTime() - startTime),
    (ciphertext = urlEncode(info.FID + "/" + encrypt(base64Encode(JSON.stringify(info)), info.FID.charCodeAt(1)))));
    
  return ciphertext;
}
function getxufid() {
  var f;
  if (info.FID) return (f = info.FID.substr(0, 12));
}
function getUrlParam(f) {
  var e = document.getElementById("jfe_usec_js");
  if (e) {
    e = e.src.split("?")[1].split("&");
    for (var m = 0; m < e.length; m++) {
      var p = e[m].split("=");
      if (p[0] == f) return p[1];
    }
    return !1;
  }
}
function getTimeDiff() {
  var f = getUrlParam("t");
  if (f) {
    var e = Math.round(new Date().getTime() / 1e3);
    timeDiff = parseInt(f, 10) - e;
  } else timeDiff = 0;
}
function getServiceTime(f) {
  return f + timeDiff;
}
function parseURL(f) {
  var e,
    m = document.createElement("div");
  return (
    (m.innerHTML = "<a></a>"),
    (m.firstChild.href = f),
    (m.innerHTML = m.innerHTML),
    (e = m.firstChild),
    (e.href = m.firstChild.href),
    {
      protocol: e.protocol,
      host: e.host,
      hostname: e.hostname,
      port: e.port,
      pathname: "/" === e.pathname.substr(0, 1) ? e.pathname : "/" + e.pathname,
      search: e.search,
      hash: e.hash,
      original: e.href
    }
  );
}
function parseQuery(f) {
  if ("?" != f.charAt(0)) return {};
  var e = {};
  f = f.substr(1).split("&");
  for (var m = 0; m < f.length; m++) {
    var p = f[m].split("=");
    e[decodeURIComponent(p[0])] = decodeURIComponent(p[1] || "");
  }
  return e;
}
function addQuery(f, e) {
  f = this.parseQuery(f);
  var m = "?",
    p;
  for (p in e) f[p] = e[p];
  for (p in f) m += encodeURIComponent(p) + "=" + encodeURIComponent(f[p]) + "&";
  return m.substr(0, m.length - 1);
}
function eventHandler(f, e, m) {
  document.addEventListener ? f.addEventListener(e, m, !0) : f.attachEvent("on" + e, m);
}
function hookForm() {
  for (var f = document.forms, e = 0; e < f.length; e++) {
    var m = f[e],
      p = m.action;
    parseURL(p);
    "" !== p.replace("/s/g", "") &&
      eventHandler(m, "submit", function (k) {
        if ((k = k.srcElement ? k.srcElement : k.target) && k.action && k.method)
          if ("GET" === k.method.toUpperCase()) {
            var w = "";
            if (k.children)
              for (var v = 0; v < k.children.length; v++)
                k.children[v].value &&
                  k.children[v].name &&
                  (w += '<input type="hidden" name="' + k.children[v].name + '" value="' + k.children[v].value + '">');
            "" !== getxusec() &&
              ((w += '<input type="hidden" name="x_usec" value="' + getxusec() + '">'),
              (w += '<input type="hidden" name="x_ufid" value="' + getxufid() + '">'));
            k.innerHTML = w;
          } else (w = combineUrl(k.action)), (k.action = w);
      });
  }
}
function hookLink() {
  var f = this;
  f.eventHandler(document, "click", function (e) {
    e = e || window.event;
    e = e.target || e.srcElement;
    do
      if (e.tagName && "A" == e.tagName && -1 == e.outerHTML.replace(/\s+/g, "").indexOf('href="#')) {
        e.href && "/" === e.href.charAt(e.href.length - 1) && (e.href = e.href.substr(0, e.href.length - 1));
        e.original = e.href;
        0 > e.href.indexOf("javascript:") &&
          "" !== getxusec() &&
          ((e.search = f.addQuery(e.search, { x_usec: getxusec(), x_ufid: getxufid() })), (e.src = combineUrl(e.original)));
        break;
      }
    while ((e = e.parentNode));
  });
}
function hookFetch() {
  if (window.fetch) {
    var f = fetch;
    window.fetch = function () {
      var e = parseURL(arguments[0]);
      console.log('e: ', e);
      return parseQuery(e.search).u_asession || "" === getxusec()
        ? f.apply(this, arguments)
        : ((e.search = addQuery(e.search, { x_usec: getxusec(), x_ufid: getxufid() })),
          (e = combineUrl(e.original)),
          (arguments[0] = e),
          f
            .apply(this, arguments)
            .then(function (m) {
              return m;
            })
            ["catch"](function (m) {
              return Promise.reject(m);
            }));
    };
  }
}
function hookOpen() {
  if (window.open) {
    var f = window.open;
    window.open = function (e) {
      e = combineUrl(e);
      f.call(this, e);
    };
  }
}
function getDeviceInfo() {
  var f = {
    excludes: {
      canvas: !1,
      webgl: !1,
      timezoneOffset: !1,
      timezone: !1,
      platform: !1,
      audio: !0,
      fonts: !0,
      fontsFlash: !0,
      screenResolution: !0,
      availableScreenResolution: !0,
      pixelRatio: !0,
      deviceMemory: !0,
      colorDepth: !0,
      enumerateDevices: !0,
      ie_activex: !0
    },
    screen: { detectScreenOrientation: !0 }
  };
  "functiontoDataURL(){[nativecode]}" === document.createElement("canvas").toDataURL.toString().replace(/\s+/g, "")
    ? Fingerprint2 &&
      Fingerprint2.get(f, function (e) {
        e = e.map(function (m) {
          return m.value;
        });
        e = Fingerprint2.x64hash128(e.join(""), 31);
        info.FID ? info.FID !== e && (info.FID = e) : (info.FID = e);
      })
    : console.log("Failed to generate device fingerprint");
}
function mouseListener(f) {
  mouseEndTime = new Date().getTime();
  mouseEndTime > mouseStartTime && (info.MTT = mouseEndTime - mouseStartTime);
  info.MTC++;
}
function keyboardLinster(f) {
  keyboardEndTime = new Date().getTime();
  keyboardEndTime > keyboardStartTime && (info.KTT = keyboardEndTime - keyboardStartTime);
  info.KTC++;
}
function base64Encode(f) {
  return window.btoa(f);
}
function urlEncode(f) {
  return encodeURIComponent(f);
}
function encrypt(f, e) {
  for (var m = "", p = 0; p < f.length; p++) {
    var k = f.charCodeAt(p);
    48 <= k && 57 >= k
      ? ((k += e % 8), 48 > k ? (k += 10) : 57 < k && (k -= 10))
      : 65 <= k && 90 >= k
      ? ((k += (e + 1) % 8), 65 > k ? (k += 26) : 90 < k && (k -= 26))
      : 97 <= k && 122 >= k && ((k += (e + 2) % 8), 97 > k ? (k += 26) : 122 < k && (k -= 26));
    m += String.fromCharCode(k);
  }
  return m;
}
getDeviceInfo();
hookOpen();
hookLink();
hookFetch();
window.onload = function () {
  hookForm();
};

console.log(decodeURIComponent(getxusec()));
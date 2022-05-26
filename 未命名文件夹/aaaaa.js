function getServiceTime(f) {
  return f + timeDiff;
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
var info = { FID: "", PTS: new Date().getTime(), PTT: 0, MTT: 0, MTC: 0, KTT: 0, KTC: 0 };
function getxusec() {
  ciphertext = "";

  info.FID &&
    ((info.PTS = getServiceTime(Math.round(new Date().getTime() / 1e3))),
    (info.PTT = new Date().getTime() - startTime),
    (ciphertext = urlEncode(info.FID + "/" + encrypt(base64Encode(JSON.stringify(info)), info.FID.charCodeAt(1)))));
  return ciphertext;
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
getDeviceInfo()
console.log(111);
console.log(decodeURIComponent(getxusec()));

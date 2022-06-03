const CryptoJS = require("crypto-js");
const JSEncrypt = require("node-jsencrypt");
const data = require("./data");

const ObjectsToCsv = require("objects-to-csv");

let a = {
  data: "5E0ES/7SpvRS44CoH2Sgkhh3ampVT1gKODaEgq/VuNXCqw19HSCX/suL/grGgKRJ3ejPQ2a8szdtKkARksUcKuL5b8gnT2WCkuqlooKDNAtL/CtlilZoiZEK0FNS1Cr95/DqmyH92pFxuEv6Fx8m0PejxeMaZIQFsQjjqM0iis+PVP3dqdt14Ihm5buyLX5Y+2wd/dSBVriuyizwbfdAdz6iQYFV2u097zmnomFgHV0=",
  encryptKey: "KnToRF9eDfGKZRUsuWFBMfjvLbdg66vtpTNF7N7PPPWKFMW3zQfAwh1/HiIdZHfOHFg/JHWf50bi1hnZ5Fct8cAuUqddGiV02QseoHWkcze0RcnjxCdwDkZxbicczKBgVI981064TJqTPhTNnRN1FCj7xv8c/V4b6nPYFzV/6bc="
  }
  
  

const ht = (t, e) => {
  try {
    if (!t || !e) return !1;
    const n = (function (t, e) {
      let n = t.replace(/\-/g, "+").replace(/_/g, "/"),
        i = {
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7
        },
        s = CryptoJS.enc.Utf8.parse(e),
        o = CryptoJS.AES.decrypt(n, s, i);
      return CryptoJS.enc.Utf8.stringify(o);
    })(
      t,
      (function (t) {
        const e = new JSEncrypt();
        e.setPrivateKey(
          "MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBANjLpuUMXeXll0L2qd/GaQWlpk3YtgmNGdZZzlgPREMLXoem9QJXH4F3RW8tD7hrurZZxCGmvaK+XNKd6TZlUZV0SG8VNDzoZGm2LOFI8M+DcHKjVXItUZWGPQeK/9mwZ6XVbMXG5wcpAtvfHc8gx8D0FsLA+gIP5tkLvGW4UpTnAgMBAAECgYAs+NoPK6iS1zSwnHCSzhrdJAbCoVDp3E5ey9RlKg2UBti+NSEgMiiD99T8ghF/xUE/MJHiFS/Dgc/JlR5avVvVzkDK0bqY08iCdBHzw9l7ftzcgAg3Pq/kYg1bSecwX/+eSkSy9CKFlMa5K1ElbkfWIIT8r79hrYSTj92IKC4BEQJBAO6oakxkEBY5kmQXXmZaJd/+lxlFzf0rBENK07765Tu1pex2iGPkJbcAx9z4p1q2SUYIt1B3xnVxqdmDIUcdvSkCQQDojIvwiaAwH/2ER0Oxn+u1QGu54IDm0oHIr1Q31WJKU7D5kg6/MjnKzopM7wqY6GP+0Qe3T1hNh9Mze8t/6POPAkAwjKozKBftrYCORAK8J5KU4qGyTnT9D4cqeUpiC4AeiXFbjTFpwLu7YrlFxn+lAHgfex5vjC4fLiQzT22xnechAkEAyXrD3/KNjESbNJk96E5jPNWEwDXn2JS4B3UIpZtGHpmmMoS+LB9K/RC3uHI/Hz3xLRxT8BlZq0qrzOZL6RWetwJALTr7sZvImpZRPC+VADx4wn8E2t02459wr6zFyqF0WRnel3OF5bAIpDZNoDoA7gCCwmtU293lpc6uixENXcmW5g=="
        );
        return e.decrypt(t);
      })(e)
    );
    return JSON.parse(n || "{}");
  } catch (n) {
    return !1;
  }
};

console.log(JSON.stringify(ht(a.data,a.encryptKey)));
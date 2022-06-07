const CryptoJS = require("crypto-js");
const JSEncrypt = require("node-jsencrypt");
const data = require("./data");

const ObjectsToCsv = require("objects-to-csv");

let a = {
  "data": "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",
  "encryptKey": "fk9WsLtO4mnd8FnThPR819ohmdDzK0f9wufV88XVholp3n9ZOo/+YId3yTiy3f2ed78OlYEsheiBpKwtW5Z8VrqcvDDAQS8bVwgxkPuw0vfj2tuV/Q2fE94Nhlg/w4vxW7ATEexOppoQVY7KgqaRo4Tt2n9jUrxYYvXV2yZWuYM="
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
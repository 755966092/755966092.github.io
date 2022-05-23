const CryptoJS = require("crypto-js");
const JSEncrypt = require("node-jsencrypt");
var a = {
  data: "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",
  encryptKey:
    "kGUShlCN6tp5CTMXekGpIWwuDw1YHTxLa0b0FIVnkpoeCISnQe0YeTUahlTCX2NaeHfg+cMJauLcOyMA/51+in/Lid8seVVpKTrn5UhDKq78MGbaLulaoiZRdIKZlks5HH5r/NNvS40VC2PdUHzpRgSctm6TgS/uqNUeQ//Ux9c="
};
const ht = (t, e) => {
  try {
    if (!t || !e) return !1;
    console.log(123);
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
    console.log(345);
    return JSON.parse(n || "{}");
  } catch (n) {
    return !1;
  }
};

console.log(ht(a.data, a.encryptKey));

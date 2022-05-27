const CryptoJS = require("crypto-js");
const JSEncrypt = require("node-jsencrypt");
const data = require("./data");

const ObjectsToCsv = require("objects-to-csv");

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
getData()
function getData() {
  var list = [];
  for (let i = 0; i < data.length; i++) {
    console.log("序号: ", i + 1);
    const item = data[i];
    const d = ht(item.data, item.encryptKey);
    const d1 = d.data;
    list.push({
      albumId: d1.albumId,
      gId: d1.gId,
      gName: d1.gName,
      gNum: d1.gNum,
      gStatus: d1.soldNumx,
      isBuy: d1.isBuy,
      ownerId: d1.ownerId,
      ownerName: d1.authorName,
      priceCny: d1.priceCny,
      tokenId: d1.tokenId
    });
  }

  const csv = new ObjectsToCsv(list);

  (async () => {
    await csv.toDisk("./第三朵花.csv");
    //   await csv.toDisk("./list.csv", { append: true });
  })();
}

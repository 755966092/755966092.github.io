const ObjectsToCsv = require("objects-to-csv");

var list = []

const csv = new ObjectsToCsv(list);

(async () => {
  await csv.toDisk("./list.csv");
//   await csv.toDisk("./list.csv", { append: true });
})();

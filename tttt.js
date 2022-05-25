const ObjectsToCsv = require("objects-to-csv");

var list = [
  {code: 'CA', name: 'California'},
  {code: 'TX', name: 'Texas'},
  {code: 'NY', name: 'New York'},
];

const csv = new ObjectsToCsv(list);

(async () => {
  await csv.toDisk("./li3333333333st.csv");
//   await csv.toDisk("./list.csv", { append: true });
})();

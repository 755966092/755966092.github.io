
const uuid = require('node-uuid')
uuid.v4().replace(/\-/g,'')
var v1 = uuid.v1()
console.log('uuid.v1(): ', uuid.v1().replace(/\-/g,''));
console.log('uuid.v4(): ', uuid.v4().replace(/\-/g,''));
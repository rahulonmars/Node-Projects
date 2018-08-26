var fs = require('fs');

console.log("Getting file")
var file = fs.readFileSync('readFileSync.js');
console.log("got file")

console.log("App continues")
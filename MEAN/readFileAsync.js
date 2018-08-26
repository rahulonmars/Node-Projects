var fs = require('fs');

var onFileLoad = function(err, file){
    console.log("got file")
}

console.log("Getting file")
fs.readFile('readFileSync.js', onFileLoad);


console.log("App continues")
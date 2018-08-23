var filename = "index.js"

var hello   = function(name){
    console.log("Hello "+  name);
};

var intro = function(){
    console.log("Node file %s",filename);
};

module.exports = {
    hello : hello,
    intro : intro
};
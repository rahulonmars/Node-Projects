require('./instantHello');
var goodbye = require('./talk/goodbye');
var talk = require('./talk');
var question = require('./talk/question')

talk.intro();
talk.hello("Rahul");

var answer = question.ask("Meaning of life ?");
console.log(answer);

goodbye();
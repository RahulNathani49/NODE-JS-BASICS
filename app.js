var time = 0;
var timer = setInterval(() => {
    time += 2
    console.log(time + " seconds passed")
    if (time > 10) {
        clearInterval(timer)
        console.log("Process Stopped");
    }
}, 2000);

console.log(__filename);

// REQUIRE OF OTHER JS MODULES 

var use = require('./stuff');

// METHODS USED 

console.log(use.counter(['1', '2', '3']));
console.log(use.adder(use.pi, 3));


// NODE JS INCLUDES EVENTS
var events = require('events');
// NODE JS INCLUDES UTIL
var util = require('util');
var person = function(name) {
    this.name = name;
}

// EVENT EMITTER

util.inherits(person, events.EventEmitter);
var james = new person('james');
var rk = new person('rk');
var jerry = new person('jerry');
var people = [james, rk, jerry];
people.forEach(function(person) {
    person.on('speak', function(msg) {
        console.log(person.name + ' said ' + msg);
    });
});

// EMITTED EVENTS

james.emit('speak', 'Hello i am james');
rk.emit('speak', 'Hello i am rk');
jerry.emit('speak', 'Hello i am jerry');
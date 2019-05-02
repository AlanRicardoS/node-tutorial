var events = require('events');
var util = require('util');
 
var Persons = function(name){
    this.name = name;

}
util.inherits(Persons, events.EventEmitter);
var james = new Persons('james');
var macavoi = new Persons('macavoi');
var benigton = new Persons('benigton');
var people = [james, macavoi, benigton];
people.forEach(function(Persons){
    Persons.on('speak', function(mssg){
        console.log(Persons.name + ' said:' + mssg);     
    })
})

james.emit('speak', 'hey dudes'); 
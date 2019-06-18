const _ = require('lodash');


function addition (a , b) {
    if(_.isNumber(a) && _.isNumber(b)) {
        return a + b;
    } else {
        return "numbers required"
    }
}

function soustraction (a , b) {
    if(_.isNumber(a) && _.isNumber(b)) {
        return a - b;
    } else {
        return "numbers required"
    }
}

function multiplication (a , b) {
    if(_.isNumber(a) && _.isNumber(b)) {
        return a * b;
    } else {
        return "numbers required"
    }
}

function division (a , b) {
    if(_.isNumber(a) && _.isNumber(b)) {
        return a / b;
    } else {
        return "numbers required"
    }
}

module.exports = {
    addition: addition,
    soustraction: soustraction,
    multiplication: multiplication,
    division: division
    };


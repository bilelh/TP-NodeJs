var assert = require('assert');
var chai = require('chai');
/*
describe('Array', function() {
    it('to not throw()',function() {
        chai.expect(function () {}).to.not.throw();
    })
    it('to not have property()',function() {
        chai.expect({a: 1}).to.not.have.property('b');
    })
    it('does not include()',function() {
        chai.expect([1, 2]).to.be.an('array').that.does.not.include(3);
    })
    
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1,2,3].indexOf(4));
            

        });
    });
});*/

var math = require('../math');
describe ('math', function() {
    describe ('addition', function () {
        it('should return 6' , function (){
            chai.expect(math.addition(4,2)).to.equal(6);
        })
        it('should return number required' , function (){
            chai.expect(math.addition(4,'p')).to.equal('numbers required');
        })
        it('should return number required' , function (){
            chai.expect(math.addition(null,2)).to.equal('numbers required');
        })
    })
    describe ('soustraction', function () {
        it('should return 2' , function (){
            chai.expect(math.soustraction(4,2)).to.equal(2);
        })
        it('should return number required' , function (){
            chai.expect(math.addition(4,'p')).to.equal('numbers required');
        })
        it('should return number required' , function (){
            chai.expect(math.addition(null,2)).to.equal('numbers required');
        })
    })
    describe ('multiplication', function () {
        it('should return 8' , function (){
            chai.expect(math.multiplication(4,2)).to.equal(8);
        })
        it('should return number required' , function (){
            chai.expect(math.addition(4,'p')).to.equal('numbers required');
        })
        it('should return number required' , function (){
            chai.expect(math.addition(null,2)).to.equal('numbers required');
        })
    })
    describe ('division', function () {
        it('should return 2' , function (){
            chai.expect(math.division(4,2)).to.equal(2);
        })
        it('should return number required' , function (){
            chai.expect(math.addition(4,'p')).to.equal('numbers required');
        })
        it('should return number required' , function (){
            chai.expect(math.addition(null,2)).to.equal('numbers required');
        })
    })
})



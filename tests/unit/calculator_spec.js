var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

// calculator.add() - add 1 to 4 and get 5
  it('it has to add two numbers', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.equal(5, calculator.runningTotal)
  });

  // calculator.subtract() subtract 4 from 7 and get 3
  it('it has to subtract two numbers', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(3, calculator.runningTotal);
  });

  // calculator.multiply() - multiply 3 by 5 and get 15
  it('it has to multiply two numbers', function(){
    calculator.previousTotal = 5;
    calculator.multiply(3);
    assert.equal(15, calculator.runningTotal);
  });
  // calculator.divide() - divide 21 by 7 and get 3
  it('it has to divide two numbers', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(3, calculator.runningTotal);
  });

  // calculator.numberClick() - concatenate multiple number button clicks
  it('it has to add multiple button clicks', function(){
    calculator.previousTotal = 0;
    calculator.numberClick(6);
    calculator.numberClick(5);
    calculator.numberClick(9);
    calculator.numberClick(1);
    assert.equal(6591, calculator.runningTotal);
  });

  // calculator.operatorClick() - chain multiple operations together
  it('it has to chain multiple operations together', function(){
    calculator.previousTotal = 0;
    calculator.operatorClick('+');
    calculator.numberClick(8);
    calculator.operatorClick('*');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.equal(16, calculator.previousTotal);
  });


  // // calculator.clearClick() - clear the running total without affecting the calculation
  it('it has to clear the running total without affecting the calculation', function(){
    calculator.previousTotal = 0;
    calculator.operatorClick('+')
    calculator.numberClick(8);
    calculator.operatorClick('+');
    calculator.numberClick(8);  calculator.operatorClick('=');
    calculator.operatorClick('=');
    calculator.clearClick();
    assert.equal(16, calculator.previousTotal);
  });





});

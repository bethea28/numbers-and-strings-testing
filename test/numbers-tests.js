const expect = require('chai').expect;
const add = require('../js/numbers-funcs').add;
const filterEvens = require('../js/numbers-funcs').filterEvens;
const Smallest = require('../js/numbers-funcs').Smallest;

describe('numbers tests', () => {
  it('add() should add two numbers', () => {
    var result1 = add(1, 2);
    var result2 = add(5, 11);
    var result3 = add(-10, 33);
    expect(result1).equal(3);
    expect(result2).equal(16);
    expect(result3).equal(23);
  });
  //Add more tests here:
  it('filterEvens() should return all even numbers', () => {
  	var arg = [5,2,6,8,1]
  	var result4 = filterEvens([5,2,6,8,1])
  	expect(result4).to.eql([2,6,8])

  	var result5 = filterEvens([1,8,9,6])
  	expect(result5).to.eql([8,6])

  	var result6 = filterEvens([100,222,999,90])
  	expect(result6).to.eql([100,222,90])
  })

  it('Smallest() returns smallest number in array', () =>{
  	var result7 = Smallest([3,6,9,11])
  	expect(result7).to.eql(3)

  	var result7 = Smallest([3,6,9,11])
  	expect(result7).to.eql(3)
  })
});

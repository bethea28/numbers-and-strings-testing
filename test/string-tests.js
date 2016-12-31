const expect = require('chai').expect;
const capitalize = require('../js/strings-funcs').capitalize;
const capitalizeFirst = require('../js/strings-funcs').capitalizeFirst;

describe('strings tests', () => {
  it('capitalize() should capitalize all letters in a string', () => {
    var result1 = capitalize('hello');
    var result2 = capitalize('world');
    expect(result1).equal('HELLO');
    expect(result2).equal('WORLD');
  });
  //Add more tests here:.
  it('capitalizeFirst() will capitalize first letter of each word',()=>{
  	var result3 = capitalizeFirst('money is good');
  	expect(result3).equal('Money Is Good')
  	var result3 = capitalizeFirst('dollars make hell of sense');
  	expect(result3).equal('Dollars Make Hell Of Sense')
  	var result3 = capitalizeFirst('lets get it lets get it because it is time');
  	expect(result3).equal('Lets Get It Lets Get It Because It Is Time')
  })
});

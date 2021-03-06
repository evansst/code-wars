/* eslint-disable max-len */
import chai from 'chai';
// import {properFractions} from '../101920.js';
// import {
//   mixedFraction,
//   phone,
//   solution,
//   pigIt,
//   lastDigit,
// } from '../102020.js';
// import {
//   proporFractionsTests,
//   mixedFractionsTests,
//   phoneTests,
// } from './test_data.js';
// import pathFinder from '../102620.js';
import dblLinear from '../dbLinear.js';

const { expect } = chai;

// describe('proporFractions()', function() {
//   this.timeout(0)
//   for(const { input, expected } of proporFractionsTests) {
//     it(`should count all reduced fractions with denomenator ${input}`, () => {
//       expect(properFractions(input)).to.deep.equal(expected)
//     })
//   }

// })

// describe('mixedFractions()', function() {
//   for(const { input, output } of mixedFractionsTests) {
//     it(`correctly reduce ${input} to ${output}`, () => {
//       expect(mixedFraction(input)).to.equal(output)
//     })
//   }
// })

// describe("phone()", function() {
//   for(const { input, expected } of phoneTests) {
//     it(`Correctly returns contact`, () => {
//       expect(phone(input.string, input.number)).to.equal(expected)
//     })
//   }
// })

// describe('solution()', function() {
//   it('correctly returns the range extraction', () => {
//     expect(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])).to.equal("-6,-3-1,3-5,7-11,14,15,17-20")
//   })
// })

// describe('pigIt()', function() {
//   it('converts string to piglatin', () => {
//     expect(pigIt('Pig latin is cool')).to.equal('igPay atinlay siay oolcay')
//   })

//   it('converts string to piglatin', () => {
//     expect(pigIt('This is my string')).to.equal('hisTay siay ymay tringsay')
//   })
// })

// describe('lastDigit', function() {
//   it('should work for some examples', function() {
//     expect(lastDigit('4', '1')).to.equal(4);
//   });
//   it('should work for some examples', function() {
//     expect(lastDigit('4', '2')).to.equal(6);
//   });
//   it('should work for some examples', function() {
//     expect(lastDigit('9', '7')).to.equal(9);
//   });
//   it('should work for some examples', function() {
//     expect(lastDigit('10', '10000000000')).to.equal(0);
//   });
//   it('should work for some examples', function() {
//     expect(lastDigit('1606938044258990275541962092341162602522202993782792835301376', '2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376')).to.equal(6);
//   });
//   it('should work for some examples', function() {
//     expect(lastDigit('3715290469715693021198967285016729344580685479654510946723', '68819615221552997273737174557165657483427362207517952651')).to.equal(7);
//   });
//   it('should work for x ^ 0', function() {
//     const randomString = function() {
//       let i = Math.floor(Math.random() * 100) + 1; let str='';
//       while (i --> 0) {
//         str = str + '01234567890'.charAt(Math.floor(Math.random()*10));
//       }
//       return str;
//     };
//     let i; let r;
//   });
// });

function testing(actual, expected) {
  expect(actual).to.equal(expected);
}

describe('dblLinear', function () {
  this.timeout(0);
  it('should pass', () => {
    testing(dblLinear(10), 22);
  });
  it('should pass', () => {
    testing(dblLinear(20), 57);
  });
  it('should pass', () => {
    testing(dblLinear(30), 91);
  });
  it('should pass', () => {
    testing(dblLinear(50), 175);
  });
  it('should pass', () => {
    testing(dblLinear(100), 447);
  });
  it('should pass', () => {
    testing(dblLinear(500), 3355);
  });
  it('should pass', () => {
    testing(dblLinear(1000), 8488);
  });
  it('should pass', () => {
    testing(dblLinear(2000), 19773);
  });
  it('should pass', () => {
    testing(dblLinear(6000), 80914);
  });
});

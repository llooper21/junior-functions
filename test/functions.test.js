const Test = require('ava');
const VM = require('vm');
const FS = require('fs');

const functions = FS.readFileSync('../functions.js');
const script = new VM.Script(functions);
script.runInThisContext();

// calculateAge
Test.serial('Birthday Fever: ', t => {
  t.plan(2);
  t.not(typeof calculateAge, undefined, 'You need to create a function called `calculateAge`.');
  t.is(calculateAge(2009, 2017), 'Your age is 7 or 8', 'Expected: Your age is 7 or 8. But got + ' + calculateAge(2009, 2017));
});

// ppapRemix
Test.serial('PPAP REMIX JS style', t => {
  var expected = `TTTT, I have a tick. I have a toe, Uh!, toe-tick, I have a tick, I have tack, Uh! tack-tick, toe-tick, tack-tick, Uh! tick-tack-toe-tick.`;
  t.plan(2);
  t.not(typeof ppapRemix, undefined, 'You need to create a function called `ppapRemix`');
  t.is(ppapRemix("tick", "tack", "toe"), expected, 'Expected: ' + expected + " \nBut got: " + ppapRemix("tick", "tack", "toe"))
});

// madeInHawaii
Test.serial('Its made in hawaii. So I get Kama\'aina yah?', t => {
  t.plan(3);
  t.not(typeof madeInHawaii, undefined, 'You need to create a function called `madeInHawaii`');
  const product = {
    name: 'Papaya',
    origin: 'Guam',
    price: 10.90,
    unit: 'lbs'
  }
  const product2 = {
    name: 'poi',
    origin: 'HI',
    price: 17.03,
    unit: 'lbs'
  }
  t.false(madeInHawaii(product), 'Expected: `madeInHawaii` to return `false`');
  t.true(madeInHawaii(product2), 'Expected: `madeInHawaii` to return `true`');
});

//
Test.serial('I dont like my calculator, Ima make one.', t => {
  t.plan(5);
  t.not(typeof jsCalculator, undefined, 'You need to create a function called `jsCalculator`');
  t.is(jsCalculator('add', 10, 10), 20, 'Expected: ' + 20 + ' But got: ' + jsCalculator('', 10, 10));
  t.is(jsCalculator('subtract', 10, 10), 0, 'Expected: ' + 0 + ' But got: ' + jsCalculator('', 10, 10));
  t.is(jsCalculator('multiply', 10, 10), 100, 'Expected: ' + 100 + ' But got: ' + jsCalculator('', 10, 10));
  t.is(jsCalculator('divide', 10, 10), 1, 'Expected: ' + 1 + ' But got: ' + jsCalculator('', 10, 10));
});

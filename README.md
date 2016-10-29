# ***`Fun`*** ctions
In this project you will be working with functions in javascript.
Functions are blocks of code that can be called upon at any time to perform a specific task. You will need to understand functions, parameters, returns, conditionals in order to complete the problems ahead.

## Set-up && getting started.
1. Fork and clone this repository.
2. Open up a new terminal session.
3. Run `nvm use 6.8.0`.
4. Run `npm install`.
5. Run `npm run check` to check your functions. Don't forget to console.log your functions.
6. Run `npm run functions` to check tests.
```javascript
function doesSomething(){
  return true;
}
console.log(doesSomething());
```
7. When finished with each problem, commit and synch your work to github.

## Problems
------------------------------------------------------------
#### CHALLENGE 001: Birthday Fever
Create a function called `calculateAge` and have it accept 2 parameters birthYear and currentYear.   
Your answer should be similar to the output below
Ex: 'Your age is either 11 or 12'   


------------------------------------------------------------
#### CHALLENGE 002: PPAP REMIX JS style
Create a function called `ppapRemix` and have it accept 3 parameters: item1, item2, item3. What you will do is replace the original lyrics of the PPAP song with your own Items.   
Ex: tick, tack, toe.    
```
TTTT,   
I have a tick. I have a toe, Uh!, toe-tick,   
I have a tick, I have tack, Uh! tack-tick,    
toe-tick, tack-tick, Uh! tick-tack-toe-tick,  
```  
HINT: You will need to figure out a way to get the first letter of each word you pass in.   
To do this try the {String}.charAt() method that can be found here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt

------------------------------------------------------------
#### CHALLENGE 003: Its made in hawaii. So I get Kama'aina yah?
Create a function called `madeInHawaii` that will take in one parameter called item. In this item you will have to check the property `origin`. Return true if the items `origin` is from `HI` and return false if `origin` is not from `HI`   

------------------------------------------------------------
#### CHALLENGE 004: I don't like my calculator, Ima make one.
Create a function called `jsCalculator` that will accept 3 parameters:    
operation, num1, num2. Based on the operation you will perform
different tasks using num1 and num2. Your function should be able to add, subtract, divide, multiply based on the operation.   
You must be able to run the function based on the string provided in the operation parameter: `add`, `subtract`, `divide`, `multiply`.   

------------------------------------------------------------

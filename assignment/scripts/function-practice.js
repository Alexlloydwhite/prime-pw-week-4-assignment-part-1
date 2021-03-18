console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log( 'Test - should say "Hello World!":', hello() );


// 2. Function to return an personalized hello, for example 'Hello, Jo!'
console.log('**** 2. Personalized Hello Function ****')

function helloName( name ) {
  console.log( 'in helloName:', name );
  return `Hello, ${name}`;
}
// Remember to call the function to test
console.log( helloName('Alex') );
console.log( helloName('Alexander') );
console.log( helloName('Alex Lloyd White') );

// 3. Function to add two numbers together & return the result
console.log('**** 3. Function That Adds 2 Numbers ****')

function addNumbers( firstNumber, secondNumber ) {
  console.log( 'in addNumbers:', firstNumber, secondNumber );
  let answer = firstNumber + secondNumber;
  return answer;
}
console.log( '2+3 is equal to 5, function should output 5:', addNumbers(2,3) );
console.log( '1+0 is equal to 1, function should output 1:', addNumbers(1,0) );

// 4. Function to multiply three numbers & return the result
console.log('**** 4. Function That Muliplys Three Numbers ****')

function multiplyThree( num0, num1, num2 ){
  console.log( 'in multiplyThree:', num0, num1, num2 );
  let answer = num0 * num1 * num2;
  return answer;
}
console.log( '1*2**2 is equal to 4, function should output 4:', multiplyThree(1,2,2) );
console.log( '2*2**2 is equal to 8, function should output 8:', multiplyThree(2,2,2) );

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
console.log('**** 5. Function to Check For Positive Numbers ****')

function isPositive( number ) {
  console.log( 'in isPositive:', number );
  if ( number > 0 ){
    return true;
  } else {
    return false;
  }
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true:', isPositive(3) );
console.log( 'isPositive - should say false:', isPositive(0) );
console.log( 'isPositive - should say false:', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
console.log('**** 6. Function To Return Last Item in an Array ****')

let favoriteSports=['golf', 'cycling', 'tennis'];
let wine = ['Chablis', 'Puligny Montrachet', 'Vezelay'];

function getLast( array ) {
  console.log( 'in getLast:', array );
  let _last_item = array[array.length -1];
  return _last_item;
}

console.log( getLast(favoriteSports) );
console.log( getLast(wine) );

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
console.log('**** 7. Function To Check favoriteSports Array For Sports ****')

function find(array, value){
  console.log( 'in find:', value, array );
  for (let i=0; i < favoriteSports.length; i++){
    if ( value === favoriteSports[i] ){
      return true;
    } else {
      return false;
    }
}
}

console.log( 'Will print true because golf is a favorite sport:', find(favoriteSports, 'golf') );
console.log( 'Should print false because soccor is not a favorite sport:', find(favoriteSports, 'Soccor') );

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
console.log('**** 8. Function to Check Strings ****')

function isFirstLetter(letter, string) {
  console.log( 'in isFirstLetter:', letter, string );
  if ( string.indexOf(letter) === 0 ){
    return true;
  } else {
    return false;
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say true', isFirstLetter('j', 'javascript') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('f', 'mathematics') );

// 9. Function to return the sum of all numbers in an array
console.log('**** 9. Sum of All Numbers In Array ****')

function sumAll( numbersArray ) {
  console.log( 'in sumAll', numbersArray );
  let sum = 0
  // TODO: loop to add items
  for (let i=0; i < numbersArray.length; i++){
    sum += numbersArray[i];
  }
  return sum;
}

let numbers = [1,2,3];
console.log('1+2+3 is equal to 6:', sumAll(numbers) );
numbers.push(12,45);
console.log('Added 12 & 45 to numbers array. 1+2+3+12+45 is equal to 63:', sumAll(numbers) );
numbers.pop();
console.log('removed 45 from numbers array. 1+2+3+12 is equal to 18:', sumAll(numbers) );

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
console.log('**** 10. Function to Return a New Array of All Positive Numbers ****');

function posNums ( array ) {
  console.log( 'in posNums:', array );
  let posArray = [];
  for (let i=0; i<array.length; i++) {
    if ( array[i] > 0 ) {
      posArray.push( array[i] );
    }
  }
  return posArray;
}

let someNums = [-3,-2,-1,0,1,2,3,4];
console.log('Here is an array of some numbers:', someNums);
console.log( 'array of all positive numbers:', posNums(someNums) );

let newNums = [-15,-14,-16,-12,-11,-10,4,6]
console.log( 'here is an array of new nembers:', newNums);
console.log( 'array of all positive numbers:', posNums(newNums) );

let negNums = [-15,-14,-16,-12,-11,-10]
console.log( 'here is an array of negative nembers:', negNums);
console.log( 'all numbers in this array are negative so here is an empty array:', posNums(negNums) );

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
console.log( '**** 11. Edabit Challenge! ****' );

// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function underOneHund( num1, num2 ){
  console.log( 'in underOneHund:', num1, num2 );
  let sum = num1 + num2;
  if ( sum < 100 ){
    return true;
  } else {
    return false;
  }
}

console.log ( '50+44 is equal to 94, so this should return true:', underOneHund(50,44) );
console.log ( '180+180 is equal to 360, so this should return false:', underOneHund(180,180) );

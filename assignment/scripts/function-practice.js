console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log( 'Test - should say "Hello World!"', hello() );


// 2. Function to return an personalized hello, for example 'Hello, Jo!'
console.log('**** 2. Personalized Hello Function ****')

function helloName( name ) {
  console.log( 'in helloName:', name );
  return `Hello, ${name}`;
}
// Remember to call the function to test
console.log( helloName('Alex') );

// 3. Function to add two numbers together & return the result
console.log('**** 3. Function That Adds 2 Numbers ****')

function addNumbers( firstNumber, secondNumber ) {
  console.log( 'in addNumbers:', firstNumber, secondNumber );
  let answer = firstNumber + secondNumber;
  return answer;
}
console.log( addNumbers(2,3) );

// 4. Function to multiply three numbers & return the result
console.log('**** 4. Function That Muliplys Three Numbers ****')

function multiplyThree( num0, num1, num2 ){
  console.log( 'in multiplyThree:', num0, num1, num2 );
  let answer = num0 * num1 * num2;
  return answer;
}
console.log( multiplyThree(1,2,2) );

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
console.log('**** 6. Function To Return Last Item in favoriteSports Array ****')

let favoriteSports=['golf', 'cycling', 'tennis'];

function getLast( array ) {
  console.log( 'in getLast:', array );
  let _last_item = array[array.length -1];
  return _last_item;
}

console.log( getLast(favoriteSports) );

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
console.log('**** 7. Function To Check favoriteSports Array For Sports ****')


function find(array, value){
  console.log( 'in find:', value, array );
  for (i=0; i < favoriteSports.length; i++){
    if ( value === favoriteSports[i] ){
      return true;
    } else {
      return false;
    }
}
}

console.log( 'Will print true if golf is a favorite sports:', find(favoriteSports, 'golf') );
console.log( 'Should print false because soccor is not a favorite sport:', find(favoriteSports, 'Soccor') );

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

/*
In the exercises below, write your own code where indicated
to achieve the desired result.

A couple examples that are already completed. Your task is to complete
any remaining prompt.

When navigated to the root of this project directory, you should be able to run this
file from your terminal with the command `node section1/exercises/variables.js`
*/


// EXAMPLE: Write code below to assign Harry Potter's name to a variable and
// log that variable to the console:
var name = "Harry Potter";
console.log(name);

// EXAMPLE: Write code below to add 2 to the variable `students` and
// log the result:
var enrolledStudents = 22;
console.log(enrolledStudents);

// YOU DO:
// Write code below to save the string 'Harry Potter must not return to Hogwarts!'
// log that variable to the console.
var warning = name + " must not return to Hogwarts!";
console.log(warning);


// YOU DO:
// Declare three variables, named `firstName`, `isHungry` and `numberOfPets`.
  // Store the appropriate data types in each.
var firstName = 'Rachel';
var isHungry = true;
var numberOfPets = 0;
// log all three variables to the console.
console.log(firstName, isHungry, numberOfPets);

// IN WORDS:
// How did you decide to use the data type you did for each of the three variables above?
  // Explain.
//* The given variable names gave me a clue about what each one might expect as a value. firstName logically wanted a string value, in this case a name. isHungry when read seems like a yes or no question, thus a boolean value seemed appropriate. Finally, numberOfPets suggests it expects a number, so I gave it an number */


// YOU DO:
// Re-assign the values to the three variables from the previous challenge to different
  // values (but same data type).
firstName = 'Lady Floof';
isHungry = false;
numberOfPets = 1;
// log all three variables to the console.
console.log(firstName, isHungry, numberOfPets);


// YOU DO:
// Using the variables below, log the total number of snacks to the console:
var healthySnacks = 6;
var junkFoodSnacks = 8;
console.log(healthySnacks + junkFoodSnacks);

//-------------------
// FINAL CHECK
//-------------------


// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect?

// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest



// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

/*
First going to layout the testing template. I am going to make my describe statement something between delete and shuffle so "deluffle". 
For the it statement I will take the prompt and stick it in there since it is describing what we want to do to the arrays and what outcome we expect. There are 2 arrays so I will need 2 expect statements. I will have to plug in "deluffle" into my expect statement with an arguement of the arrays, color 1 and color 2 for the second expect statement. 
The error I want is a reference error  
*/

// describe('deluffle', () => { 

// const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]


//   it("takes in an array, removes the first item from the array and shuffles the remaining content.", () => {
//     expect(["yellow", "blue", "pink", "green"]).not.toEqual(deluffle(colors1))
//   })
//   it("takes in an array, removes the first item from the array and shuffles the remaining content.", () => {
//     expect(["indigo", "periwinkle", "ochre", "aquamarine", "saffron"]).not.toEqual(deluffle(colors2))
//   }) 
// })

//     ReferenceError: deluffle is not defined


// b) Create the function that makes the test pass.
/*
Next I have to think of what logic I will need for this function. It needs to take in the array, delete first item, then return the array items in shuffled order. Two ways come to mind, .filter to somehow just get rid of the first value then math.random since looking into it there is no .shuffle method :(. Or I can use .shift as it removes the first value. Then math.random. I think the second way is more straight forward. 
*/ 

// const deluffle = (array) => {
//     array.shift()
//   return  array.sort(() => Math.random() - 0.5)
// } 

// console.log(deluffle(colors1));
// ^ wanted to test it before I did a Jest test

/*
Literal hours have passed. I solved it finally by doing something I was not sure was possible from the start... Putting 2 mutators in one function. I don't know why but I didn't think it was possible and finally I try it and it works... man. 
Not sure why we need 2 it statements, could you please tell me why?
*/

// PASS  ./code-challenges.test.js
// deluffle
//   ✓ takes in an array, removes the first item from the array and shuffles the remaining content. (1 ms)
//   ✓ takes in an array, removes the first item from the array and shuffles the remaining content.

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.186 s
// Ran all test suites.
// ✨  Done in 1.09s.








// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

/*
Going to need another testing area. Going to make describe statement called "tally". I am going to make 2 expect statements for the variables. going to take part of the prompt into the "it". 
*/


// describe('tally', () => { 

    // const votes1 = {upVotes: 13, downVotes: 2}
    // // Expected output: 11
    // const votes2 = {upVotes: 2, downVotes: 33}
    // // Expected output: -31

//     it("takes in an object that contains up votes and down votes and returns the end tally.", () => {
//         expect(11).toEqual(tally(votes1))
//       })
//       it("takes in an object that contains up votes and down votes and returns the end tally.", () => {
//         expect(-31).toEqual(tally(votes2))
//       }) 
//     })

//ReferenceError: tally is not defined

// b) Create the function that makes the test pass.

/*
Going to have to find a way to get a key:value - the other key:value. I had to pass a parameter in the paranthesis into the function (PIPES!!)
I went with my gut instict / logic and it paid off
*/

//       I had to go to "object land" to get these values
//                  v       v
// const tally = ({upVotes, downVotes}) => {
    
//     return upVotes - downVotes
// }

// console.log(tally(votes1));  did this to test the function 

/*
 PASS  ./code-challenges.test.js
  tally
    ✓ takes in an object that contains up votes and down votes and returns the end tally. (1 ms)
    ✓ takes in an object that contains up votes and down votes and returns the end tally.

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.193 s, estimated 1 s
Ran all test suites.
✨  Done in 1.33s.

*/








// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

/*
describe statement will be something relevant like "combined" idk I'm running out of brain juice at the moment, going a little crazy coding 👹
Only 1 it statement as we will join the arrays together 
input: 
const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
output: 
["array", "object", "number", "string", "Boolean", "null", "undefined"]
I will focus to the technicallities of removing duplicates when it comes to coding out the function
*/


// a) Create a test with an expect statement using the variables provided.

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

describe('uniqueCombo', function() {

   it("takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.", () => {
      expect(uniqueCombo(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
    })
  })

//     ReferenceError: combined is not defined






// b) Create the function that makes the test pass.

/*
Now for the fun part. If I'm going to tackle the stretch goal I might as well consider it from the start. 
I'm going to combine both arrays, going to try concat for this
Next I need to look up a method to get rid of duplicates in an array. Luckily the first link was a very good resource, you see it being used in line 189 and 191
*/

// let comboArray = () => {dataArray1.concat(dataArray2)} 
// ^^^^ Didn't AND COULDN'T use this method when it comes to spread operator. 
//TypeError: function is not iterable (cannot read property Symbol(Symbol.iterator))
// at new Set (<anonymous>)



comboArray = [...new Set([...dataArray1, ...dataArray2])] 
//This is joining the arrays together 


let uniqueCombo = () => [...new Set(comboArray)]
//This is to get rid of duplicates
// console.log(uniqueCombo); 









/*
WOW... It wasnt working BECAUSE the arrays were in my describe area, I thought we were supposed to put them in there from now on
*/

// PASS  ./code-challenges.test.js
// uniqueCombo
//   ✓ takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments. (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.173 s
// Ran all test suites.
// ✨  Done in 0.67s.


//import tail.js and assertEquals.js to test the function tail
const tail = require('../tail');
const assertEqual = require('../assertEqual');
const result = tail(["Hello", "Lighthouse", "Labs"]);

//Test case for the returned array elements
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"


// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

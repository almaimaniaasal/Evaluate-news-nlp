// Import the js file to test
import { checkForName } from "../src/client/js/nameChecker";

describe("Testing a valid URL", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the checkForName function", () => {
        // Define the input for the function, if any, in the form of variables/array
        let url = 'https://www.nytimes.com/2020/09/05/us/Texas-boat-parade-trump.html';
        // Define the expected output, if any, in the form of variables/array
        // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
        // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
        expect(checkForName(url)).toBeDefined();
        expect(checkForName(url)).toBeTruthy();
        expect(checkForName(url)).toBe(true);
    });
});

describe("Testing an invalid URL", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the checkForName function", () => {
        // Define the input for the function, if any, in the form of variables/array
        let url = 'This is not an URL';
        // Define the expected output, if any, in the form of variables/array
        // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
        // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
        expect(checkForName(url)).toBeDefined();
        expect(checkForName(url)).toBe(false);
    });
});
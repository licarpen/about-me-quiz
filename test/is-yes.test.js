// IMPORT MODULES under test here:

import { isYes } from '../src/is-yes.js';
const test = QUnit.test;

test('isYes returns true if userInput is "yes"', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userInput = 'yes';
    //Act 
    // Call the function you're testing and set the result to a const
    const resultUserInput = isYes(userInput);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(resultUserInput, true);
});

test('isYes returns true if userInput is "yes"', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userInput = 'yes';
    //Act 
    // Call the function you're testing and set the result to a const
    const resultUserInput = isYes(userInput);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(resultUserInput, true);
});

test('isYes returns true if userInput is "Yes"', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userInput = 'Yes';
    //Act 
    // Call the function you're testing and set the result to a const
    const resultUserInput = isYes(userInput);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(resultUserInput, true);
});

test('isYes returns true if userInput is "YES"', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userInput = 'YES';
    //Act 
    // Call the function you're testing and set the result to a const
    const resultUserInput = isYes(userInput);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(resultUserInput, true);
});

test('isYes returns true if userInput is "y"', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userInput = 'y';
    //Act 
    // Call the function you're testing and set the result to a const
    const resultUserInput = isYes(userInput);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(resultUserInput, true);
});

test('isYes returns true if userInput is "yaaas"', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userInput = 'yaaas';
    //Act 
    // Call the function you're testing and set the result to a const
    const resultUserInput = isYes(userInput);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(resultUserInput, true);
});

test('isYes returns true if userInput is "Y"', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userInput = 'Y';
    //Act 
    // Call the function you're testing and set the result to a const
    const resultUserInput = isYes(userInput);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(resultUserInput, true);
});

test('isYes returns true if userInput is "yea boi"', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userInput = 'yea boi';
    //Act 
    // Call the function you're testing and set the result to a const
    const resultUserInput = isYes(userInput);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(resultUserInput, true);
});

test('isYes returns false if userInput is "no"', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userInput = 'no';
    //Act 
    // Call the function you're testing and set the result to a const
    const resultUserInput = isYes(userInput);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(resultUserInput, false);
});

test('isYes returns false if userInput is "maybe"', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userInput = 'maybe';
    //Act 
    // Call the function you're testing and set the result to a const
    const resultUserInput = isYes(userInput);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(resultUserInput, false);
});
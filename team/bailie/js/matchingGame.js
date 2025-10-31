// Import the objects for different languages
import norwegianObject from "./norwegianObject.js";

// Default language
let languageObject = norwegianObject;

// Split the object into keys and values
function splitObject(object) {
  let splitKeys = Object.keys(object);
  let splitValues = Object.values(object);
  return [splitKeys, splitValues];
}

// Choose a random index from an array
function randomIndex(array) {
  let randomIndex = Math.floor(Math.random() * array.length); // random index
  return randomIndex; // return the random index
}

// Get ten random indices, then remove duplicates, then choose four of those unique values
function arrayOfFourUniqueRandoms(array) {
  let arrayOfTenRandoms = [];
  for (let i = 0; i < 10; i++) { // run 10 times
    arrayOfTenRandoms.push(randomIndex(array)); // add a new index to the end of the array
  }
  let setFromTenRandoms = new Set(arrayOfTenRandoms); // excludes duplicates with a set
  let arrayOfUniqueRandoms = Array.from(setFromTenRandoms); // converts set to an array
  let arrayOfFourUniqueRandoms = [];
  for (let i = 0; i < 4; i++) {
    arrayOfFourUniqueRandoms.push(arrayOfUniqueRandoms[i]); // add first four elements to an array
  }
  return arrayOfFourUniqueRandoms; // return the array of four unique random indices
}

// Display the query word/character ("item") and label the buttons
function replaceDivsContent(keys, values, queryKey, fourKeys) {
  document.getElementById("queryValueBox").textContent = (values[queryKey]); // display the query value
  const buttonNames = ["buttonOne", "buttonTwo", "buttonThree", "buttonFour"];
  for (let button in buttonNames) {
    document.getElementById(buttonNames[button]).textContent = (keys[fourKeys[button]]); // label the buttons with the four options
  }
}

// Reset the text in the answer box
function resetAnswer() {
  document.getElementById("answerBox").textContent = (" ");
}

// Check the user's answer against the query item
function checkChoice(choice) {
  let choiceKey = (document.getElementById(choice).textContent); // get the key on the chosen button
  let queryValue = document.getElementById("queryValueBox").textContent; // get the query value
  if (languageObject[choiceKey] == queryValue) { // see if the key and value are a match
    document.getElementById("answerBox").textContent = ("That's correct; '" + queryValue + "' means '" + choiceKey + "'"); // positive response to match
    setTimeout(matchingGame, 1250, languageObject); // reset the game (delayed) after correct answer
  }
  else
  {
    document.getElementById("answerBox").textContent = ("That's incorrect; '" + queryValue + "' doesn't mean '" + choiceKey + "'"); // negative response to mismatch
    setTimeout(resetAnswer, 1250); // delayed so the user can read the message
  }
}

// Full game
function matchingGame(object) {
  let keysAndValues = (splitObject(object)); // split the object, store output
  let keys = (keysAndValues[0]); // split the keys off
  let values = (keysAndValues[1]); // split the values off
  let fourKeys = arrayOfFourUniqueRandoms(keys); // get four unique random keys
  let queryKey = (fourKeys[randomIndex(fourKeys)]); // randomly choose one of the four keys
  replaceDivsContent(keys, values, queryKey, fourKeys);
  resetAnswer();
}

// Call the full game
matchingGame(languageObject);


// Event listeners for the answer buttons
document.getElementById("buttonOne").addEventListener("click", () => {
  checkChoice('buttonOne');
});

document.getElementById("buttonTwo").addEventListener("click", () => {
  checkChoice('buttonTwo');
});

document.getElementById("buttonThree").addEventListener("click", () => {
  checkChoice('buttonThree');
});

document.getElementById("buttonFour").addEventListener("click", () => {
  checkChoice('buttonFour');
});
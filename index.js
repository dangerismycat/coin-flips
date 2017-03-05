const NUMBER_OF_FLIPS = 20;


// From the MDN Math.random page
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function coinFlip() {
  return getRandomIntInclusive(0, 1);
}

function flipCounter() {
  let count = 0;
  let done = undefined;

  while (done === undefined) {
    const blankArray = new Array(NUMBER_OF_FLIPS).fill(null);
    const flips = blankArray.map(() => coinFlip());
    if (flips.includes(0)) {
      count++;
      console.log(`nope, after ${count} tries`);
    } else {
      done = true;
    }
  }

  return count;
}

console.log(`finally hit ${NUMBER_OF_FLIPS} heads in a row after ${flipCounter()} tries`);

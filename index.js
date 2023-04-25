// import library

import randomColor from 'randomcolor'; // import the script

// random color generator and necessary variables

const newRandomColor = randomColor();

const hueInput = process.argv[2];
const luminosityInput = process.argv[3];
const specialColor = randomColor({
  luminosity: luminosityInput,
  hue: hueInput,
});

// I have two values now - if special Color not null then choose and assign to block color
let finalColor = '';
if (specialColor) {
  finalColor = specialColor;
} else {
  finalColor = newRandomColor;
}

// transform hex to rgb to make coloring in terminal possible

const r = parseInt(newRandomColor.slice(1, 3), 16);
const b = parseInt(newRandomColor.slice(3, 5), 16);
const g = parseInt(newRandomColor.slice(5, 7), 16);

// set up ansi and rgb

const ansiStart = `\x1b[38;2;${r};${g};${b}m`;
const ansiEnd = `\x1b[0m`;

// build # block

console.log(
  ansiStart +
    `###############################
###############################
###############################
#####                     #####
#####       ${newRandomColor}       #####
#####                     #####
###############################
###############################
###############################` +
    ansiEnd,
);

// userInput - accept arguments with process.argv called hue and luminosity

// tests
console.log(hueInput); // returns undefined
console.log(hueInput + luminosityInput); // returns Nan
console.log(newRandomColor);
console.log(specialColor);

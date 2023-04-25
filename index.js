// import library

import randomColor from 'randomcolor'; // import the script

// random color generator and necessary variables

const newRandomColor = randomColor();

const hueInput = process.argv[2];
const luminosityInput = process.argv[3];
let specialColor = '';

if (hueInput && luminosityInput) {
  specialColor = randomColor({
    luminosity: luminosityInput,
    hue: hueInput,
  });
} else if (hueInput) {
  specialColor = randomColor({ hue: hueInput });
}

// I have two values now - if special Color not null then choose and assign to block color
let finalColor = '';
if (specialColor) {
  finalColor = specialColor;
} else {
  finalColor = newRandomColor;
}

// transform hex to rgb to make coloring in terminal possible

const r = parseInt(finalColor.slice(1, 3), 16);
const g = parseInt(finalColor.slice(3, 5), 16);
const b = parseInt(finalColor.slice(5, 7), 16);

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
#####       ${finalColor}       #####
#####                     #####
###############################
###############################
###############################` +
    ansiEnd,
);

// userInput - accept arguments with process.argv called hue and luminosity

// tests
console.log(hueInput); // returns undefined
console.log(luminosityInput); // returns Nan
console.log('This is the random color' + newRandomColor);
console.log('This is the special color' + specialColor);
console.log('This is the final color ' + finalColor);

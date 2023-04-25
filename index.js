// import library

import randomColor from 'randomcolor'; // import the script

// random color generator

const hue = '';
const luminosity = '';

const newRandomColor = randomColor();
const specialColor = randomColor({ luminosity: 'light', hue: 'blue' });

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

// userInput - accept arguments with process.argv

// tests
console.log(hue + luminosity);
console.log(newRandomColor);
console.log(specialColor);

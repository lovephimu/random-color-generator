# Random Color Generator

on open:
generate a block of 31x9 # characters colored with a random color

libraries & special code:
randomcolor - npm
ANSI escape codes, for example

```bash
\x1b[38;2;255;165;0mHello, world!\x1b[0m
```

```bash
// Returns a hex code for an attractive color
randomColor();
```

```bash

building block

###############################
###############################
###############################
#####                     #####
#####       #edff28       #####
#####                     #####
###############################
###############################
###############################

```

on open with arguments:
generate a block of 31x9 # characters colored with a specific color

```bash
// Returns a hex code for a light blue
randomColor({
   luminosity: 'light',
   hue: 'blue'
});
```

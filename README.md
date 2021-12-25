# lioranboard-scripts
Bunch of fun things that you can run through lioranboard. This seemed to be a lot easier to do in node than in lioranboard on it's own.

Things you will need to run this repo:
* lioranboard (duh)
* node.js
* obs
* the reajs obs plugin 

Before you run anything, you need to make `file-paths.js`. Start by copying the structure from `file-paths.example.js`. You'll need to fill this out with what your file paths are.

Also don't forget to `npm install`!

## How to set up lioranboard to run these scripts

[example run through](./example images/pitch up example.PNG)

Basically you'll need to use the `Command Line` action to run node pointed at these scripts. All of these scripts will copy something to your clipboard then 

## Specific scripts instructions
All scripts take in two parameters, first is the name of the source and the second is the name of the filter.

### increase-pitch, decrease-pitch, reset-pitch
These assume you are using the `pitch/superpitch` plugin.


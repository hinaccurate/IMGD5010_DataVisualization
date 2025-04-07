# IMGD5010_DataVisualization
An assignment to create a P5 sketch containing JSON data rendered in a creative manner.

## Solars Flaring
### link to work

[https://editor.p5js.org/hinaccurate/full/qAbtMPciO](https://editor.p5js.org/hinaccurate/full/qAbtMPciO)

### what I tried to create 

I attempted to apply the region data for solar flares from NASA's Space Weather Database Of Notifications, Knowledge, Information (DONKI) API to one of four quadrants of a P5 canvas "map", indicated by a "flare" appear randomly within that quadrant when the code loops through.

### what's actually there

At this point, I've managed to:


  1. Access the API JSON data through a dedicated key
  2. Import the data and extract the "activeRegionNum" number for my data visualization
  3. Create a canvas and a flare effect that loops from small to large, up to 30 times (the max number of entries the API will provide)
  4. Print a console log of the activeRegionNum numbers to show that the data is being accessed by the loop
  5. Get at least one quadrant to show the random flares


Things I think I've done, but I'm not sure:


  1. Pseudo-corrected "null" or "undefined" activeRegionNum numbers in the array with nullish operators


### how I got here

Things I wanted to do, or have attempted to do, and could not manage (possibly because there is neither god nor forgiveness in the world of javascript):

  1. I've tried several different ways, but I can't manage to get the flares to appear in all four quadrants.
    a. If I use just "if" statements, they appear in the upper-right;
    b. If I use "if/else if" statements, they appear in the upper left;
    c. Neither of those locations is the actual quadrant of the first "if" statement, which is just bananas to me.
  2. Using the "Object.values" protocol to flatten the activeRegionNum numbers into a string results in P5 telling me that Object.values is not a thing it _does._
  3. There is a way to break this code such that only one activeRegionNum appears in the console, and I don't know why.
  4. There is a way to break this code such that the activeRegionNum numbers appear, but the canvas remains empty, and I likewise don't know why.
  5. In a much earlier iteration, I was interested in showing data beyond just the activeRegionNum numbers, but trying to import text led to many errors, no console log, and nothing on the canvas.


Methods I attempted to get to a working data visualization:

  1. Copy/edit the test code provided.
  2. Try code from online p5 reference guide.
  3. Try code from other p5 sketches Frankensteined in.
  4. Try code from _Make: Getting Started with p5.js._
  5. Try code from _The Coding Train_ "Working with data" p5 tutorials.
  6. Try code from ancient Stack Overflow threads.
  7. Downgraded scope and started from 1 again, ad nauseum.

### where I'm going

I did eventually land on code that let _something_ appear on the screen, and I suspect that there is now a really easy fix (probably having to do with the way I written the quadrant locations) to complete the visualization. However, in the interest of actually submitting at least _an_ assignment, if not a _complete_ assignment, I will put further experimentation on hold and submit the code as-is.

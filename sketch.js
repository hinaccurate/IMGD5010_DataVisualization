var spaceData;
var region;
var flareLocationX;
var flareLocationY;
var i;
var flareSizes;

function preload(){
  spaceData = loadJSON("https://api.nasa.gov/DONKI/FLR?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD&api_key=jLvMoHFpQ840l0HQxUrb3JWYEmAfdf3nKvtNUdox")
  
}

function setup() {
  createCanvas(400,400);
  background(0);
}

function draw(){
  for( let i = 0; i < 31; i++ ) {    
    var region = spaceData[i].activeRegionNum;
    flareSizes = i*2;
    
    if ( (region >= 0 && region <= 14022) || (region ?? 1) ){
	  flareLocationX = random(0,200);
	  flareLocationY = random(0,200);} 
    else if ( (region >= 14023 && region <= 14030) || (region ?? 14024) ){
      flareLocationX = random(0,200);
      flareLocationY = random(200,400);}  
    else if ( (region >= 14031 && region <= 14040) || (region ?? 14032) ){
	  flareLocationX = random(200,400);
	  flareLocationY = random(200,400);}
    else if ( (region >= 14041 && region <= 15000) || (region ?? 14042) ){
	  flareLocationX = random(200,400);
	  flareLocationY = random(0,200);}
    
    fill(205,204,0,95);
    circle(flareLocationX,flareLocationY,flareSizes)
    print(region);
  }
  noLoop();
}
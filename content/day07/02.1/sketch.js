let img;
let y = Array();
let x;
let n = 200;

function preload() {
  img = loadImage('assets/jungle.jpeg');
}

function setup() {
  if(img.height>windowHeight){
    img.resize(windowHeight*(img.width/img.height),windowHeight);
  } else if(img.width>windowWidth){
    img.resize(windowWidth,windowWidth*(img.height/img.width));
  }
  createCanvas(img.width,img.height);
  frameRate(30);
  
  rectMode(CORNERS);
  noStroke();

  image(img, 0, 0);

  x = random(width);
  y.push(0);
  
  
}

function draw() {
  image(img, 0, 0);
  
  for(let i=0;i<n-1;i++){
    y.push(random(height));
  }
  sort(y);

  for(let i=0;i<y.length-1;i++){
    fill(get(x,y[i]));
    rect(x,y[i],width,y[i+1]);
  }
  fill(get(x,y[y.length-1]));
  rect(x,y[y.length-1],width,height);
}
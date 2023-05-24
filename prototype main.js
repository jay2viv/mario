img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 165;

function preload()
{
  img = loadimage("mario05.png");
}

function setup() {
  createCanvas(650, 400);
  video = createCapture(VIDEO);
  posenet = ml5.poseNet(video, modelReady);
  posenet.on("pose", gotresults);
}

function draw() {
  background("#D3D3D3");
  image(img,marioX, marioY, 40,70);
  
  if(noseX > 325)
    {
      marioX = marioX + 2
    }
  
  if(noseX < 325)
    {
      marioX = marioX - 2
    }
  
  if(noseY < 200)
    {
      marioY = marioY - 2
    }
  
  if(noseY > 200)
  {
    marioY = marioY + 2
  }
}


function modelReady()
{
  console.log("yay");
}

function gotresults(results)
{
  if(results.length > 0)
    {
      console.log(results);
      
      noseX = results[0].pose.nose.x;
      noseY= results[0].pose.nose.y
    }
}
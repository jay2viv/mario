function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin.loadSound("coin.wav");
	mario_kick.loadSound("kick.wav");
	mario_die.loadSound("die.wav");
	mario_gameover.loadSound("gameover.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent("canvas");
	video = createCapture(VIDEO);
	posenet = ml5.poseNet(video, modelReady);
	posenet.on("pose", gotresults);
	video.size(800, 400);
	video.parent("game_console");
	
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

function draw() {
	game()
}







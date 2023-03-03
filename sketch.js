
//space font//
let spaceFont;
//

//background 2//
let bg2X = 0;
let bg2Y = 0;
let bg2Width = 700;
let bg2Height = 500;
let bg2Img;

//


//starry bg//
let bgStarsX = 0;
let bgStarsY = 0;
let bgStarsWidth = 700;
let bgStarsHeight = 500;
let bgImg1;
//

//snowmountain img//
let snowmountainX = 0;
let snowmountainY = 170;
let snowmountainWidth = 700;
let snowmountainHeight = 250;
let snowmountainImg;
//

//ArcticCathedral img//
let ArcticCathedralX = 150;
let ArcticCathedralY = 0;
let ArcticCathedralWidth = 400;
let ArcticCathedralHeight = 400;
let ArcticCathedralImg;
//

//street img//
let streetX = 0;
let streetY = 300;
let streetWidth = 700;
let streetHeight = 200;
let streetImg;
//

//reindeerteam img//
let reindeerteamX = 160;
let reindeerteamY = 300;
let reindeerteamWidth = 550;
let reindeerteamHeight = 150;
let reindeerteamImg;
//

//reindeers img//
let reindeersX = 8;
let reindeersY = 300;
let reindeersWidth = 320;
let reindeersHeight = 280;
let reindeersImg;
//

//Fjellheisen1 image//
let Fjellheisen1X = 250;
let Fjellheisen1Y = 0;
let Fjellheisen1Width = 600;
let Fjellheisen1Height = 400;
let Fjellheisen1;
//


function preload() {
	spaceFont = loadFont('Oxanium-SemiBold.ttf');
	bgImg1 = loadImage('aurora.jpg');
	snowmountainImg = loadImage('snowmountain.png');
	ArcticCathedralImg = loadImage('ArcticCathedral.png');
	streetImg = loadImage('street.png');
	reindeersImg = loadImage('reindeers.png');
	reindeerteamImg = loadImage('reindeerteam.png');
	bg2Img = loadImage('sky.jpg');
	Fjellheisen1 = loadImage('Fjellheisen1.png');
}

function setup() {
	createCanvas(700, 500);


}

function draw() {

	//transition//
	t = dist(mouseX, mouseY, ArcticCathedralX, ArcticCathedralY);
	if (t < ArcticCathedralWidth) {
		image(bgImg1, bgStarsX, bgStarsY, bgStarsWidth, bgStarsHeight);
		image(snowmountainImg, snowmountainX, snowmountainY, snowmountainWidth, snowmountainHeight);
		fill(0);
		rect(0, 400, 700, 100);
		image(ArcticCathedralImg, ArcticCathedralX, ArcticCathedralY, ArcticCathedralWidth, ArcticCathedralHeight);
		image(streetImg, streetX, streetY, streetWidth, streetHeight);
		image(reindeerteamImg, reindeerteamX, reindeerteamY, reindeerteamWidth, reindeerteamHeight);
        image(reindeersImg, reindeersX, reindeersY, reindeersWidth, reindeersHeight);


	} else {
		image(bg2Img, bg2X, bg2Y, bg2Width, bg2Height);
		image(snowmountainImg, snowmountainX, snowmountainY, snowmountainWidth, snowmountainHeight);
		fill(0);
		rect(0, 400, 700, 100);
		image(ArcticCathedralImg, ArcticCathedralX, ArcticCathedralY, ArcticCathedralWidth, ArcticCathedralHeight);
		image(streetImg, streetX, streetY, streetWidth, streetHeight);
        image(Fjellheisen1, Fjellheisen1X, Fjellheisen1Y, Fjellheisen1Width, Fjellheisen1Height);
	}

	///

	//text sequence//
	if(mouseX>1/10*windowWidth<2/10){
	textFont(spaceFont);
	fill(255);
	textSize(80);
	text("Norway",10,495);
	}else if(mouseX>2/10*windowWidth<3/10){
		fill(255);
		textSize(80);
		text("Tromso",10,495);
	}else if(mouseX>3/10*windowWidth<4/10){
fill(255);
		textSize(80);
		text("Fjellheisen",10,495);
	}else if(mouseX>4/10*windowWidth<5/10){
		fill(255);
		textSize(80);
		text("Reindeer team",10,495);
	}else if(mouseX>5/10*windowWidth<6/10){
		fill(255);
		textSize(80);
		text("Arctic Cathedral",10,495);
  }else if(mouseX>6/10*windowWidth<7/10){
		fill(255);
		textSize(80);
	  text("Fairy tale world",10,495);
  }else if(mouseX>7/10*windowWidth<8/10){
		fill(255);
		textSize(80);
		text("Romantic",10,495);
	}else if(mouseX>8/10*windowWidth<9/10){
		fill(255);
		textSize(50);
		text("Interactive Experience",10,495);
	}else if(mouseX>9/10*windowWidth<10/10){
		fill(255);
		textSize(80);
        text("travel",0,495);
	} 
			if (mouseIsPressed) {
			// if (mouseButton === LEFT);
			strokeWeight(3);
			textFont(spaceFont);
			textSize(80);
			stroke(0);
			text("Fairy tale world", 20, 100);
			}

	//
}



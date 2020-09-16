var player;
var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	canvas = createCanvas(displayWidth-20, displayHeight-30);

	player1 = createSprite(displayWidth/2, 600, 20, 20);
	player1.shapeColor = "black"
	line = createSprite(displayWidth/2, 50, displayWidth, 2);
	line.shapeColor = "yellow"

	//sprites


	engine = Engine.create();
	world = engine.world;

	//bodies
	obstacle1 = new Obstacle(100, 500, 200);
	obstacle2 = new Obstacle(500, 500, 200);
	obstacle3 = new Obstacle(900, 500, 200);
	obstacle4 = new Obstacle(1300,500, 200);
  
	obstacle5 = new Obstacle(300, 200, 200);
	obstacle6 = new Obstacle(700, 200, 200);
	obstacle7 = new Obstacle(1100,200, 200);
	obstacle8 = new Obstacle(1500,200, 200);
	

//	player = new Player();


}


function draw() {

  background(143, 247, 147);


  drawSprites();



	//player.display();

	if(player1.y > 40){
		obstacle1.display();
		obstacle2.display();
		obstacle3.display();
		obstacle4.display();
	 
		obstacle5.display();
		obstacle6.display();
		obstacle7.display();
		obstacle8.display();

		camera.position.x = displayWidth/2;
		camera.position.y = player1.y;

		if(keyDown(LEFT_ARROW)){
			changePosition(-3,0);
			}
			else if(keyDown(RIGHT_ARROW)){
			changePosition(3,0);
			}
			else if(keyDown(UP_ARROW)){
				changePosition(0,-3);
			}
			else if(keyDown(DOWN_ARROW)){
				changePosition(0,+3);
			}
		
	}
	else{
		textSize(100);
		fill(255);
		stroke(0);
		strokeWeight(5);
		text("Game Over", line.x - 100, line.y - 20);

	}


}


	function changePosition(x,y){
		player1.x = player1.x + x;
		player1.y = player1.y + y;
	}
	



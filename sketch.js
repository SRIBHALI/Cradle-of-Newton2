const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 500);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(390,50,360,20)
   

	bob1 = new Bob(250,400,35);
	bob2 = new Bob(320,400,35);
	bob3 = new Bob(390,400,35);
	bob4 = new Bob(460,400,35);
	bob5 = new Bob(530,400,35);

   

rope1 = new Rope(bob1.body, roof.body , -35*4,0);
rope2 = new Rope(bob2.body, roof.body, -35*2,0);
rope3 = new Rope(bob3.body, roof.body, -35*0,0);
rope4 = new Rope(bob4.body, roof.body, -35*-2,0);
rope5 = new Rope(bob5.body, roof.body, -35*-4,0);



	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  //background("#99004d");
 background("lightblue")
  roof.display()
  

 

  //call display() to show ropes here
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  
  //create balls here

  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()

  
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-1000,y:1000})
    Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-1000,y:1000});
   // Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-1000,y:1000});
	
	}

}
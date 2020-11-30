/*class mango {
    constructor(x,y,width,height){
        var op={
            isStatic:true,
            restitution:0,
            density:1,
            friction:1
        }
        this.body = Bodies.rectangle(x,y,this.width,this.height);
        this.width = width;
        this.height = height;
      this.image = loadImage("mango.png");
        }
    display() {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        //imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
             }
}*/



class mango
{
 constructor (x,y,r)
 {
  
 var options={
    'isStatic' : true,
    'friction' : 0.5,
    'density' : 1.2,
 }
 this.body = Bodies.circle(x,y,r,options)
 this.r = r;
 this.image = loadImage("mango.png");
 World.add(world,this.body);
 }

 display()
 {
  var mangoPos=this.body.position; 
  push() 
  translate(mangoPos.x, mangoPos.y);
   // rectMode(CENTER); 
   rotate(this.body.angle)
    fill(255,0,255)
     imageMode(CENTER);
     ellipseMode(CENTER); 
     image(this.image, 0,0,this.r*2, this.r*2) 
     pop()
 }
}; 


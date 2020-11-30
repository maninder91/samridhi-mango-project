class stone
{
 constructor (x,y,r)
 {
  
 var options={
    'restitution' : 0.3,
    'friction' : 0.5,
    'density' : 1.2,
 }
 this.body = Bodies.circle(x,y,r,options)
 this.r = r;
 this.image = loadImage("stone.png");
 World.add(world,this.body);
 }

 display()
 {
    var pos = this.body.position;
    push();
    translate(pos.x , pos.y);
    imageMode(CENTER); 
   //image(this.image,0,0,this.r);
  // ellipseMode(RADIUS)
   image(this.image, 0,0,this.r*2, this.r*2) 
   //ellipse(pos.x,pos.y,this.radius,this.radius);  
   pop(); 
 }
}; 
/*class slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body ;
    }

    fly(){
        this.sling.bodyA = null;
    }    

    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        
        push();
        if(pointA.x < 220) {
            strokeWeight(7);
            line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
            line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
            
        }
        else{
            strokeWeight(3);
            line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
            line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
           
        }
       
        
        pop();
    }
}*/
//display(){

/*if(this.sling.bodyA) 
{   var pointA=this.sling.bodyA.position; 
    var pointB=this.pointB 
    strokeWeight(2); 
    line(pointA.x-20,pointA.y,pointB.x-10,pointB.y); }
}*/
//}

class slingshot{
	constructor(body,pointB)
	{
		
		var options={ 
			bodyA:body,			 
			pointB:pointB, 
			stiffness:0.004, 
			length:0.5
			
		}
		
		this.bodyA=body
		this.pointB=pointB
		this.sling=Constraint.create(options)
		World.add(world,this.sling)
	}

	attach(body){
		this.sling.bodyA=body;
	}

	fly()
	{
		this.sling.bodyA=null;
	}

	display()
	{
		if(this.sling.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}

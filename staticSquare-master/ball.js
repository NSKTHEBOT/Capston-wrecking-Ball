class ball{
    constructor(x,y){
        var options={
           
            density:1,
            frictionAir:0.005  }
            
        this.body=Bodies.circle(x,y,30,options)
        this.radius=30;
        World.add(world,this.body)

    }
    display(){
        var angle=this.body.angle
        var position=this.body.position
        push();
        ellipseMode(CENTER);
        translate(position.x,position.y);
        
        rotate(angle);
       ellipse(0,0,30,30)
        pop();

    }
    
}
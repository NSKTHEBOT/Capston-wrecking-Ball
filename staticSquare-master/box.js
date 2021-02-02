class box{
    constructor(x,y){
        var options={
            friction:1,
            density:0.04,
            restitution:0.3  }
            
        this.body=Bodies.rectangle(x,y,40,60,options)
        this.width=60;
        this.height=40;
        World.add(world,this.body)

    }
    display(){
        var angle=this.body.angle
        var position=this.body.position
        push();
        rectMode(CENTER);
        translate(position.x,position.y);
        
        rotate(angle);
        rect(0,0,40,60)
        pop();

    }
    
}
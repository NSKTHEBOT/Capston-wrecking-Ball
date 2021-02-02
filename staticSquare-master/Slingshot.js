class slingshot{
    constructor(bodyA,pointB){

    
     var options={
        bodyA:bodyA,
        pointB:pointB,
        length:100,
        stiffness:1
    }
    this.pointB=pointB;
    this.sling=Constraint.create(options);
    World.add(world,this.sling)
}

display(){
var pointA=this.sling.bodyA.position;
var pointB=this.pointB;
    if(this.sling.bodyA){
    line(pointB.x,pointB.y,pointA.x,pointA.y);
}

}
fly(){
    this.sling.bodyA=null;
}
attach(){
    this.sling.bodyA=body;
}
}
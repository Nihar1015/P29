class Slingshot{

    constructor(BodyA, PointB){
        options = {
            bodyA:BodyA,
            pointB:PointB,
            stiffness: 0.04,
            length: 10
        }

        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world,this.sling);


    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
         line(pointA.x, pointA.y, pointB.x,pointB.y);
       pop();
    }

}

fly(){
    this.sling.bodyA = null;
}

attach(body){
    this.sling.bodyA = body;
}


}


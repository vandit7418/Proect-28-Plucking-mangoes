class Launcher{
    constructor(bodyA,pointB)
    {
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.004
        }
        this.pointB = pointB;
        this.launcher=Constraint.create(options);
        World.add(world,this.launcher);
        
    }
    fly(){
        
    this.launcher.bodyA=null;


    }
    attach  (body){
      this.launcher.bodyA=body;
    }
    display()
    {
   

        if(this.launcher.bodyA)
        {
            var pointA=this.launcher.bodyA.position;
            var pointB= this.pointB;
            strokeWeight(7)
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
        
    }

    
    
}
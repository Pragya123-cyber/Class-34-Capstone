class SlingShot {
    constructor (bodyA , pointB){
      var options ={
          bodyA:bodyA , 
          pointB : pointB , 
          stiffness:0.03 , 
        lenght:10
          }

          this.sling1 = loadImage("sling1.png");
          this.sling2 = loadImage("sling2.png");
          this.sling3 = loadImage("sling3.png");
          this.pointB = pointB;

          this.sling = Constraint.create(options);
          World.add(world , this.sling)
    }

    fly(){
        this.sling.bodyA = null
    }

    display()
    { imageMode(CENTER);

         image(this.sling1 ,width/2 - 300 , height-150)
         image(this.sling2 ,width/2 - 328 , height-200)
         
         var pointA= this.sling.bodyA.position;
       var  pointB= this.pointB;
         push();
         stroke(48 , 22 , 8)
         strokeWeight(7)
         line(pointA.x-20 , pointA.y , pointB.x-40 , pointB.y)
         line(pointA.x-20 , pointA.y , pointB.x+18 , pointB.y)
        image(this.sling3 , pointA.x - 30 , pointA.y - 10 , 15 , 30) 
         pop()
    }
}
class Santa {
    constructor(x , y )
    {
         var options = {
             restitution : 0.04 , 
             friction : 1.0 , 
             dendity : 1.0 , 
         }

         this.body = Bodies.rectangle(x , y ,50  , 100 , options);
         this.santa = loadImage("santa.png");
         World.add(world , this.body);
         this.x= x;
         this.y = y;
    }

    display()
    {    imageMode(CENTER);
        image(this.santa , this.x , this.y  , 50 , 100);
    }
}
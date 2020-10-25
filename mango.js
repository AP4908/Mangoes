class Mango{
    constructor(x, y, radius) {
         var options = {
             
           isStatic : true,
           restitution:0.3,
             friction:0.5,
             density:1
         }
         this.radius = radius;
         this.body = Bodies.circle(x, y, radius,  options);
         this.width = radius
         this.height = radius;
 
         this.image = loadImage("Images/mango.png");
         
         
         World.add(world, this.body);
       }
       display(){
 
         var pos = this.body.position;

         this.debug = true;

 
        
         
         
         
         
 
         imageMode(CENTER);
         image(this.image, pos.x, pos.y, 50, 50);
         
       }
     }
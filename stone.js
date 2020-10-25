class Stone{
    constructor(x, y, radius) {
         var options = {
             
           
           restitution:0.3,
             friction:0.5,
             density:1
         }
         this.radius = radius;
         this.body = Bodies.circle(x, y, radius,  options);
         this.width = radius
         this.height = radius+20;
         this.image = loadImage("Images/stone.png");      
         World.add(world, this.body);
       }

       
       display(){
 
         var pos = this.body.position;
         imageMode(CENTER);
         image(this.image, pos.x, pos.y, 100, 100);
         
       }
     }
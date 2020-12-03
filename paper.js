    class Paper{
        constructor(x, y, radius) {
            var options = {
                'restitution':0.5,
                'friction':1.0,
                'density':0.7
            }
            this.image=loadImage("paperBall2.png");
            this.body = Bodies.circle(x, y, radius/2,options);
            this.radius = radius;
            World.add(world, this.body);
          }
          display(){
            
            imageMode(CENTER);
            image(this.image, this.body.position.x,this.body.position.y,this.radius, this.radius);

          }
    }
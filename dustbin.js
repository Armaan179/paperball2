class Dustbin{
    constructor(x, y, width, height) {
        var options = {
          isStatic:true
        }
        this.leftbody = Bodies.rectangle(x-60,y-40,height,width,options);
        this.rightbody = Bodies.rectangle(x+60,y-40,height,width,options);
        this.body = Bodies.rectangle(x, y, width, height,options);
        this.image= loadImage("paperBall3.png");
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, -30, -30,this.width,this.height*5);
        pop();
      }
}
class Drops {

    constructor(x, y, radius) {
        var options = {
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x, y,radius, options);
        this.radius=radius;
        World.add(world, this.body);
      }
      update(){
        if(this.body.position.y>height){
          Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
        }
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("blue");
        ellipse(0,0, this.radius,this.radius);
        pop();
      }

}
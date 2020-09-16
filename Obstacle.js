class Obstacle{
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.radius = radius;
        this.body = Bodies.circle(x, y, radius, options);
        World.add(world,this.body);
      }


      display(){

        var pos =this.body.position;
       
        fill(0,46,0);
        circle(pos.x, pos.y, this.radius);
      }
}
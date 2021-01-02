class Pendulum {
  constructor(x, y, radius, color) {
    var options = {
      isStatic: false,
      restitution: 1,
      friction: 0.5,
      density: 0.3,
    };
    this.body = Bodies.circle(x, y, radius, options);
    World.add(world, this.body);
    this.radius = radius;
    this.color = color;
  }
  display() {
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    ellipseMode(RADIUS);
    fill(this.color);
    ellipse(0, 0, this.radius);
    pop();
  }
}

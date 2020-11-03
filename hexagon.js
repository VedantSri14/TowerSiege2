class Hexagon {
	constructor(x, y) {
		var options = {
			isStatic: false,
			restitution: 0.5,
			friction: 1,
			density: 1,
		};
		this.x = x;
		this.y = y;
		this.radius = 40;
		this.body = Matter.Bodies.circle(x, y, 40, options);
		this.image = loadImage("hexagon1.png");
		World.add(world, this.body);
	}
	display() {
		var pos = this.body.position;
		var angle = this.body.angle;
		push();
		translate(pos.x, pos.y);
		rotate(angle);
		imageMode(CENTER);
		image(this.image, 0, 0, this.radius * 2, this.radius * 2)
		pop();
	}
}

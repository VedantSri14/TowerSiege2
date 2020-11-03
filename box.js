class Box {
	constructor(x, y, width, height) {
		var options = {
			isStatic: true,
			restitution: 0.8,
			density: 0.8,
		};
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.body = Matter.Bodies.rectangle(x, y, width, height);
		World.add(world, this.body);
	}
	display() {
		var pos = this.body.position;
		push();
		translate(pos.x, pos.y);
		rectMode(CENTER);
		rect(0, 0, this.width, this.height);
		pop();
	}
}

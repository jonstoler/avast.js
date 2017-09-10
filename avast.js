function avast(id, width, height){
	var canvas = document.getElementById(id);
	canvas.width = width;
	canvas.height = height;
	var ctx = canvas.getContext("2d");
	return {
		context: ctx,
		canvas: canvas,
		colors: {},
		color: "#000",
		addColor: function(name, color){
			this.colors[name] = color;
		},
		setColor: function(name){
			this.color = this.colors[name];
			this.context.fillStyle = this.color;
		},
		ellipse: function(x, y, rx, ry){
			this.context.save();
			this.context.translate(x - rx, y - ry);
			this.context.scale(rx, ry);
			this.context.beginPath();
			this.context.arc(1, 1, 1, 0, 2 * Math.PI, false);
			this.context.closePath();
			this.context.fill();
			this.context.restore();
		},
		circ: function(x, y, radius){
			this.context.beginPath();
			this.context.arc(x, y, radius, 0, 2 * Math.PI, false);
			this.context.closePath();
			this.context.fill();
		},
		rect: function(x, y, width, height){
			this.context.fillRect(x, y, width, height);
		},
		roundRect: function(x, y, width, height, rx, ry){
			rx = Math.min(width - 1, rx);
			ry = Math.min(height - 1, ry);

			this.context.beginPath();
			this.context.moveTo(x + rx, y);
			this.context.lineTo(x + width - rx, y);
			this.context.quadraticCurveTo(x + width, y, x + width, y + ry);
			this.context.lineTo(x + width, y + height - ry);
			this.context.quadraticCurveTo(x + width, y + height, x + width - rx, y + height);
			this.context.lineTo(x + rx, y + height);
			this.context.quadraticCurveTo(x, y + height, x, y + height - ry);
			this.context.lineTo(x, y + ry);
			this.context.quadraticCurveTo(x, y, x + rx, y);
			this.context.closePath();
			this.context.fill();
		},
		clear: function(){
			this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		}
	}
}

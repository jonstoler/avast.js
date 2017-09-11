# avast.js

Avast is a very small and simple HTML5 canvas helper.

## Example

![Robot Drawing](example.png)

```
<!doctype html>
<html>
<head>
	<script src="avast.js"></script>
</head>
<body>
	<canvas id="cvs"></canvas>
	<script type="text/javascript">
		var draw = avast("cvs", 200, 200);
		var hue = Math.random() * 360;
		draw.addColor("base", "hsl(" + hue + ", 50%, 80%)");
		draw.addColor("dark", "hsl(" + hue + ", 30%, 50%)");
		draw.addColor("shadow", "hsl(" + hue + ", 30%, 75%)");
		draw.addColor("light", "hsl(" + hue + ", 50%, 90%)");

		// head
		draw.setColor("base");
		draw.ellipse(100, 70, 60, 50);
		draw.rect(40, 70, 120, 50);

		// eyes
		draw.setColor("dark");
		draw.circ(90, 65, 8);
		draw.circ(130, 65, 8);

		// mouth
		draw.context.save();
		draw.context.beginPath();
		draw.context.arc(110, 90, 15, 2 * Math.PI, Math.PI, false);
		draw.context.fill();
		draw.context.clip();
		draw.context.closePath();
		draw.setColor("light");
		draw.ellipse(110, 90, 12, 8);
		draw.context.restore();

		// neck
		draw.setColor("shadow");
		for(var i = 0; i < 4; i++){
			draw.rect(90, 125 + i * 10, 20, 5);
		}

		// body
		draw.setColor("base");
		draw.roundRect(25, 165, 150, 180, 8, 8);
	</script>
</body>
</html>
```

## API

### avast(id, width, height)

*creates a new avast object, which allows you to draw using avast's methods*

**id**: the id of the canvas element you wish to use  
**width**: how wide to make the canvas  
**height**: how tall to make the canvas

**returns** Avast object

---

### Avast object methods

#### addColor(name, color)

*adds a color to avast's pallete*

**name**: what to call the new color  
**color**: the value for the color (any valid CSS color)

---

#### setColor(name)

*selects the color to use when drawing*

**name**: which color to use for future drawing operations

---

#### ellipse(x, y, rx, ry)

*draws an ellipse, centered on x and y*

**x**: the x-coordinate for the center of the ellipse  
**y**: the y-coordinate for the center of the ellipse  
**rx**: the horizontal radius of the ellipse  
**ry**: the vertical radius of the ellipse

---

#### circ(x, y, radius)

*draws a circle, centered on x and y*

**x**: the x-coordinate for the center of the circle  
**y**: the y-coordinate for the center of the circle  
**radius**: the radius of the circle  

---

#### rect(x, y, width, height)

*draws a rectangle*

**x**: the x-coordinate for the top left corner of the rectangle  
**y**: the y-coordinate for the top left corner of the rectangle  
**width**: the width of the rectangle  
**height**: the height of the rectangle

---

#### roundRect(x, y, width, height, rx, ry)

*draws a rectangle with rounded corners*

**x**: the x-coordinate for the top left corner of the rectangle  
**y**: the y-coordinate for the top left corner of the rectangle  
**width**: the width of the rectangle  
**height**: the height of the rectangle  
**rx**: the horizontal radius of the corners
**ry**: the vertical radius of the corners

---

#### clear()

*completely erases the canvas*


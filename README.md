# avast.js

Avast is a very small and simple HTML5 canvas helper.

## Example

![Robot Drawing](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAABy1BMVEUAAACt1uCy2+e02+iz3Oaz2+Wz2+a02+a02+ez2+az2+ay2+az2uWz2eOz2+Sz3Oez3Oaf39+12+iz2+W02+ay2+a22/+q1eq03Oez2+a13Oaz2+az3Oaz3Oez2uaz3ee/1eqx2eSz2uaz2uaz3Oe73e6t2+Sz2uWz2+az2+Wz2+a11uax3umz3Oax2Ou02uSz2+az2uaz2+f///+z3Oiy2+Wz2+a13eiw3OWz3Oez2+at1uaz2uWz2+ez2+a02+W///+02+az2+Wz2+az2+a02+ey2uWz2+ay2uez3Oaz2+e02uez3Oez2+az3Oex2+az2ua33eez2+a03OaZzMyz3Oez2+b///+z2+a02ua03Oez2uWx2Ou02+e03OW22+iy2+az2uaz2+a13+qz2+ay2+W04emx2eSPwM10q7pgm6t1q7q02+eKvMlZlqay3OZyqbix2OWz2eWy2eWz2uWz2uaz2+Zal6fX6/HZ7fJinay62OBuprWNucWAtMK41t6XxtJlnq2/2+JdmampzNWEt8RupLKexc/J4unK4umt1uJfm6p0qLaTvcitz9jH4efT6e6QwM1+s8F5rrysytKy2OCz3Oay2ua03Of77TCyAAAAmXRSTlMAGT9igp62y9zq/8ueG1SJuwhPlNXVBwxfr0ik/PylSgxz1th1DxyK9fiNHxeQGn34+38BV9vdWR2oqh9h8fJiBJydMs/6dIeSkZOSinh2XFo1/TMF0c4Cm5jm5A2VOji2tb4Ycsci//////9q//+t/ydXgaXD7P///////////////////////////////////////yHC7HQ7oCO9AAADC0lEQVR4AezBtQGAMAAAwbjr/sNiPTWSvxMAAAAAAGAtUmljnQ8xXWLIrhitpPiQ2vqI6UYcvVXxfnNnfh6MK4oCKIrO/PGObdt6sW3b+eq/hXQQvnPuXR2s6ppavlVXU10f86KhsYkfa2psiLTR3NLKr7S1d8S36Ozq5g96evuiavQPDPJHQ8Mj0TRGh/mXsfE4HhOT/NPU9Ez4RjJLCubmAzcWFknJ0nLIx8oqqVlbD9bY2CRVWxthHts7pGxnO8Qj2SV1u4n/sYfEnvuxj8i+93GAzKHzcYTQse9xglSF63GK2JnncY7cheNxeYXc1LX+cXOLwd29PPKAxaP6cYFJon30PWHy/CKNvGJzpHy8YfQujHxglNU9OrDqkEVyWOVUjwxmGVGkHbN2zSOPXV4SKWBXkESK2BUVj09i6x2HQiCEwjCt7MctOQyj+Hb9tzE3mQ7DSfjqvzkxKhN/UKSqNinRbiK8mf0Wey3Bbia8ld02+9ti3Up4w8fn8VpC3UBwO3sV65RQtxPawV5iHQl1B6Gd7NWsU0PdSWgXe6l1NNRdhHbnDLkJbWSvap0W6kZCe3Je9ofQOOfzywlDoj/E3CH4EyV/CP5ozB/CRZpqlRLs8of82K+L4wiCIAqi9/ZUlMelYWY2WMyqm2grotKDN/j7pzKIQQxiEIMYxCAGMYhBDGIQg+zhcBQ7wF4R5ASeDPHgpAjiQyBDAvAVQUIgkhwRECqCxECSfnWkCRArgrhLIMs/O/IMuHSaIAUAZVW/KZqqBKBQBWk7nuqHcZrnaRx6nupaVRC3IMei7c++IrbqmygbQpvGrbXK90MfxC0dH+oWreu3LS557bJoNc/4OPRP+/3JD2M7j9y1UwcWDEYxGEUByDhv1r7kH7cLlBLFp87d4MAFAQEBAQEBAQEBAflFkvT6EAjIPhBJci0QEBBJci0QEBBJst/0QEAk6Z6eCmn63K3jqbCeP3EsJbcCuwvIqcDOAtIVWC8gU4HNAlKRgYCAgICAgICAgICAgICAgICAgIB8D+QNtxDDnzh2gx0AAAAASUVORK5CYII=)

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


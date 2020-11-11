var image;
	function upload() {
		var dd1 = document.getElementById("phto");
		var dd2 = document.getElementById("finput");
		image = new SimpleImage(dd2);
		image.drawTo(dd1);
	}
      
	function doGrey()
	{
		for(var pixel of image.values())
		{
			var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
			pixel.setRed(avg);
			pixel.setGreen(avg);
			pixel.setBlue(avg);
		}
		var imageCanvas = document.getElementById("phto")
		image.drawTo(imageCanvas);
	}
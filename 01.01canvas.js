

function init(){
	updateCanvas();
}

function updateCanvas(){
 //rest of the code in the next steps will go in here
	myCanvas.width = width;
	myCanvas.height = height;
	var context = myCanvas.getContext("2d");
	context.fillStyle = "#FCEAB8";
	context.fillRect(0,0,width,height);
}
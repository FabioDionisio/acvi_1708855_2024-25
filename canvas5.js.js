function init(){
	updateCanvas();
}
function updateCanvas(){
 //rest of the code in the next steps will go in here
	var width = 500; 
	var height = 500; 
	var canvas = document.getElementById("guyana");
	var wid = canvas.width;
	var hei = canvas.height;
	var context = canvas.getContext("2d");
	 context.fillStyle = "#009E49";
	 context.fillRect(0,0,wid,hei);
	fillTriangle(context, 0,0,
	 wid,hei/2,
	 0,hei, "#ffffff");
	fillTriangle(context,0,10,
	 wid-25,hei/2,
	 0,hei-10, "#FCD116");
	fillTriangle(context,0,0,
	 wid/2,hei/2,
	 0,hei, "#000000");
	fillTriangle(context,0,10,
	 wid/2-16,hei/2,
	 0,hei-10, "#CE1126");
}
function fillTriangle(context,x1,y1,x2,y2,x3,y3,color){
	 context.fillStyle = color;
	 context.beginPath();
	 context.moveTo(x1,y1);
	 context.lineTo(x2,y2);
	 context.lineTo(x3,y3);
	 context.lineTo(x1,y1);
	 context.closePath();
	 context.fill();
}
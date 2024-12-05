function init(){
	setInterval(updateCanvas,1000);
	updateCanvas();
}
function updateCanvas(){
	var canvas = document.getElementById("bahrain");
	var wid = canvas.width;
	var hei = canvas.height;
	var context = canvas.getContext("2d");
	 context.fillStyle = "#CE1126";
	 context.fillRect(0,0,wid,hei);
	var baseX = wid*.25;
	 context.fillStyle = "#ffffff";
	 context.beginPath();
	 context.lineTo(baseX,0);
	var zagHeight = hei/5;
	for(var i=0; i<5; i++){
		 context.lineTo(baseX +25 , (i+.5)*zagHeight);
		 context.lineTo(baseX , (i+1)*zagHeight);
	}
	context.lineTo(0,hei);
	context.lineTo(0,0);
	context.closePath();
	context.fill();
	addBoarder(context,wid,hei);
}
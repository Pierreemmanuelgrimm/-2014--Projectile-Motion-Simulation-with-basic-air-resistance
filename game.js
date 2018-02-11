
	new Entity(3,0);
	new Entity(3,0.1);
	new Entity(3,0.01);
	new Entity(3,0.001);
	new Entity(3,0.0001);
	
	
setInterval(function () {run()}, 1);
function run() {
		if(leaveTrace == false){
			context.clearRect(0,0,frame.width, frame.height);
		}
		for (a = 0; a < entityPool.length; a++){
				entityPool[a].move();
				entityPool[a].forceCalculation();
				entityPool[a].draw();
				entityPool[a].detect();
		}
}
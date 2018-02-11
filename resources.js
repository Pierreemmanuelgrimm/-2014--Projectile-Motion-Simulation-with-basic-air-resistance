
	/* Start Canvas Initialization */
	
	frame = document.getElementById('frame'); 
	var context = frame.getContext('2d');
	
	/* End Canvas Initialization */
	
	xOffset = 0;
	yOffset = 0;
	powerVel = 2;
	
	followID = -1;	
	leaveTrace = true;
	
	gConstant = 9.81/1000;

	var body = new Image();
	body.src = 'planet.png';
	
	
	window.onload = function(){
		pagesToLoad = ["entities","game"];	
		for (iteration = 0; iteration < pagesToLoad.length; iteration ++){
			var element = document.createElement("script");
			element.src = pagesToLoad[iteration] + ".js";
			document.body.appendChild(element);
		}
	}
	entityPool = [];
	entityID = 0;
	
	function Entity(mass,k){
		this.entityID = entityID;
		this.x = 0;
		this.y = 500;
		this.xAcc = 0;
		this.yAcc = 0;
		this.xVel = 2 * Math.cos(Math.PI/4);
		this.yVel = -2 * Math.sin(Math.PI/4);

		this.mass = mass;
		this.k = k;
		this.diameter = 5;	

		entityPool.push(this);
		entityID++;
	}
	Entity.prototype.deleteEntity = function(entityPool){
		if (this.isDead == false){
			var entityIndex = entityPool.indexOf(this);
			entityPool.splice(entityIndex, 1);
			this.isDead = true;
		}
	};
	Entity.prototype.forceCalculation =  function(){
		if (followID != -1){
			if (this.entityID == followID){
				xOffset = this.x - 300;
				yOffset = this.y - 300;
			
			}
		}
		this.xAcc = -this.k *(this.xVel/Math.abs(this.xVel))*Math.abs(Math.pow(this.xVel, powerVel))/this.mass;
		this.yAcc = gConstant +(this.xVel/Math.abs(this.xVel))*Math.abs((this.k *Math.pow(this.yVel, powerVel)))/this.mass;
		console.log(this.yAcc);
	};
	Entity.prototype.move = function(){
		this.x += this.xVel;
		this.y += this.yVel;
	
		this.xVel += this.xAcc;
		this.yVel += this.yAcc;
	
	}
	Entity.prototype.draw = function(){
		context.drawImage(body,this.x - xOffset, this.y - yOffset, this.diameter, this.diameter);	
	}
	Entity.prototype.deleteEntity = function(){
			var entityIndex = entityPool.indexOf(this);
			entityPool.splice(entityIndex, 1);
	}
	Entity.prototype.detect = function(){
		if (this.y > 501){
			console.log("K:" + this.k + "|Mass:" + this.mass + "|Distance:" + this.x);
			this.deleteEntity();		
		}	
	}
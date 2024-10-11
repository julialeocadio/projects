
window.onload = function(){
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");

	// variables
	snake = [];
	positionX = 10;
	positionY = 10;
	foodX = 15;
	foodY = 15;
	velX = 0;
	velY = 0;
	grid = 20;
	size = 3;

	// Calls the function game each 100 milliseconds
	setInterval(game, 100)

	// Controls
	document.addEventListener("keydown",function(e){
		switch(e.keyCode){
			// right arrow = 39
			case 39 || 68:
				velX = 1;
				velY = 0;
				break;
			// left arrow = 37
			case 37:
				velX = -1;
				velY = 0;
				break;
			// up arrow = 38
			case 38 || 87:
				velY = -1;
				velX = 0;
				break;
			// down arrow = 40
			case 40:
				velY = 1;
				velX = 0;
				break;
			
			// d
			case 68:
				velX = 1;
				velY = 0;
				break;
			//a
			case 65:
				velX = -1;
				velY = 0;
				break;
			//w
			case 87:
				velY = -1;
				velX = 0;
				break;
			//s
			case 83:
				velY = 1;
				velX = 0;
				break;
		}
	});

}

function game(){
	// Screen config
	ctx.fillStyle = "#2980B9";
	// border distance h, border distance v, width, height
	ctx.fillRect(0,0, canvas.width, canvas.height)

	// deslocamento da cobra
	positionX += velX;
	positionY += velY;

	// Espelhamento
	if(positionX < 0){
		positionX = grid;
	}
	if(positionX > grid){
		positionX = 0;
	}
	if(positionY < 0){
		positionY = grid;
	}
	if(positionY > grid){
		positionY = 0
	}

	// Snake config
	ctx.fillStyle = "#00f102";
	for(let i=0; i < snake.length; i++){
		ctx.fillRect(snake[i].x*grid, snake[i].y*grid, grid-1, grid-1);
		if(snake[i].x == positionX && snake[i].y == positionY){
			size = 3;
		}
	}
	
	// Snake position
	snake.push({x: positionX, y: positionY})


	// Deleting
	while(snake.length > size){
		snake.shift();
	}

	// Food config
	ctx.fillStyle = "#F1C40F";
	ctx.fillRect(foodX*grid,foodY*grid, grid-1, grid-1);

	// Eating
	if(positionX == foodX && positionY == foodY){
		size++;
		foodX = Math.floor(Math.random()*grid);
		foodY = Math.floor(Math.random()*grid);
	}
}









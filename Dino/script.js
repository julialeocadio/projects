document.addEventListener('DOMContentLoaded', () => {

	// References
	const dino = document.querySelector('.dino')
	const grid = document.querySelector('.grid')
	const body = document.querySelector('body')
	const alert = document.getElementById('alert')

	// Variables
	let jumping = false
	let gravity = 0.9
	let gameo = false
	let dinopy = 0

	// Data entry
	document.addEventListener('keydown', jumpcontrol)

	// Jump control
	function jumpcontrol(e){
		if(e.keyCode == 32){
			if(!jumping){
				jumping = true
				jump()
			}
		}
	}

	function jump(){
		let count = 0
		let timerId = setInterval(function(){
			// down
			if(count == 15){
				clearInterval(timerId)
				let downTimerId = setInterval(function() {
					if(count == 0){
						clearInterval(downTimerId)
						jumping = false
					}
					dinopy -= 5
					count--
					dinopy = dinopy * gravity
					dino.style.bottom = dinopy + 'px'
				}, 20)
			}
			// up
			dinopy +=30
			count++
			dinopy = dinopy * gravity
			dino.style.bottom = dinopy + 'px'
		},20)
	}

	function gerarobst(){
		let randomTime = Math.random()*4000
		let obstaclepx = 1000
		const obstacle = document.createElement('div')

		// Making copies
		if(!gameo) obstacle.classList.add('obstacle')
		grid.appendChild(obstacle)
		obstacle.style.left = obstaclepx + 'px'

		// Game logic and obstacle movement
		let timerId = setInterval(function() {
			// colision
			if(obstaclepx > 0 && obstaclepx < 60 && dinopy < 60){
				clearInterval(timerId)
				alert.innerHTML = 'Game Over'
				gameo = true
				// removing copies
				body.removeChild(body.firstChild)
				while(grid.firstChild){
					grid.removeChild(grid.lastChild)
				}
			}
			// obstacle movement to the left
			obstaclepx -= 10
			obstacle.style.left = obstaclepx + 'px'
		}, 20)

		if(!gameo) setTimeout(gerarobst, randomTime)
	}

	gerarobst()
})
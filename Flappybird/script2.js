var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Loading images
var bird = new Image();
bird.src = "images/bird.png";
var bg = new Image();
bg.src = "images/bg.png";
var ground = new Image();
ground.src = "images/chao.png";
var topPipe = new Image();
topPipe.src = "images/canocima.png";
var bottomPipe = new Image();
bottomPipe.src = "images/canobaixo.png";

// Variables
var gap = 125;
var constant;
var bX = 33;
var bY = 250;
var gravity = 0.8;
var score = 0;
var pipes = [];

pipes[0] = {
    x: canvas.width,
    y: 0
};

// Loading sounds
var flySound = new Audio();
flySound.src = "sounds/fly.mp3";
var scoreSound = new Audio();
scoreSound.src = "sounds/score.mp3";

// Key capture
document.addEventListener("keydown", fly);

// Flying
function fly() {
    bY = bY - 32;
    flySound.play();
}

function game() {
    // Game background
    ctx.drawImage(bg, 0, 0);

    // Creating pipes
    for (let i = 0; i < pipes.length; i++) {
        // Position of the bottom pipe
        constant = topPipe.height + gap;
        // Configuring the top pipe
        ctx.drawImage(topPipe, pipes[i].x, pipes[i].y);
        // Configuring the bottom pipe
        ctx.drawImage(bottomPipe, pipes[i].x, pipes[i].y + constant);
        // Moving the pipe
        pipes[i].x = pipes[i].x - 2;
        // Creating new pipes
        if (pipes[i].x == 70) {
            pipes.push({
                x: canvas.width,
                y: Math.floor(Math.random() * topPipe.height) - topPipe.height
            });
        }
        // Bird between the pipe edges
        if (bX + bird.width >= pipes[i].x && bX <= pipes[i].x + topPipe.width
            // Bird collided with the top or bottom pipe
            && (bY <= pipes[i].y + topPipe.height || bY + bird.height >= pipes[i].y + constant)
            // Bird collided with the ground
            || bY + bird.height >= canvas.height - ground.height) {
            location.reload();
        }

        // Scoring points
        if (pipes[i].x == 4) {
            score = score + 1;
            scoreSound.play();
        }
    }

    // Drawing the ground
    ctx.drawImage(ground, 0, canvas.height - ground.height);

    // Bird
    ctx.drawImage(bird, bX, bY);
    bY += gravity;

    // Creating the score display
    ctx.fillStyle = "#000";
    ctx.font = "20px Verdana";
    ctx.fillText("Score: " + score, 10, canvas.height - 20);
    
    requestAnimationFrame(game);
}

game();

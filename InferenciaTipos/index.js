const spaceship = {
    name: 'Hello,Word!!!',
    speed:0
}

function accelerate(spaceship,speed){
spaceship.speed = speed
}

accelerate(spaceship,50)

console.log(spaceship.speed)